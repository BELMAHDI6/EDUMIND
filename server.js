const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const DB = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public'), {
  etag: false,
  maxAge: 0,
  setHeaders: (res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  }
}));

// Ensure public directories exist
const uploadDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

function toNullableId(val) {
  if (val === undefined || val === null || val === '') return null;
  const num = Number(val);
  return Number.isNaN(num) ? null : num;
}

// -------------------------------------------------------------
// 1. DASHBOARD & STATS API
// -------------------------------------------------------------
app.get('/api/dashboard/stats', (req, res) => {
  try {
    const activeYear = DB.queryOne("SELECT value FROM settings WHERE key = 'active_year'")?.value || '2025-2026';

    // 1. Active Students
    const activeStudents = DB.queryOne("SELECT COUNT(*) as count FROM students WHERE active = 1").count;

    // 2. Inscriptions count
    const enrollments = DB.queryOne("SELECT COUNT(*) as count FROM enrollments WHERE school_year = ?", [activeYear]).count;

    // 3. Collected Today
    const todayCollected = DB.queryOne(
      "SELECT COALESCE(SUM(paid_amount), 0) as total FROM payments WHERE DATE(payment_date) = DATE('now')"
    ).total;

    // 4. Collected This Month
    const thisMonthCollected = DB.queryOne(
      "SELECT COALESCE(SUM(paid_amount), 0) as total FROM payments WHERE strftime('%Y-%m', payment_date) = strftime('%Y-%m', 'now')"
    ).total;

    // 5. Unpaid / Debts estimation
    // Calculation: Total price of all active enrollments for the current month minus payments already made
    const expectedMonthly = DB.queryOne(`
      SELECT COALESCE(SUM(g.price_monthly - e.discount_amount), 0) as expected
      FROM enrollments e
      JOIN groups g ON e.group_id = g.id
      WHERE e.status = 'active' AND e.school_year = ?
    `, [activeYear]).expected;

    const totalUnpaid = Math.max(0, expectedMonthly - thisMonthCollected);
    const recoveryRate = expectedMonthly > 0 ? Math.min(100, Math.round((thisMonthCollected / expectedMonthly) * 100)) : 100;

    // 6. Teachers & Subjects count
    const teachersCount = DB.queryOne("SELECT COUNT(*) as count FROM teachers WHERE active = 1").count;
    const subjectsCount = DB.queryOne("SELECT COUNT(*) as count FROM subjects").count;
    const roomsCount = DB.queryOne("SELECT COUNT(*) as count FROM rooms").count;

    // 7. Revenue Evolution - 12 Months
    const monthlyEvolution = [];
    const monthNames = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    const now = new Date();
    
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const yearMonth = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      const label = `${monthNames[d.getMonth()]} ${d.getFullYear()}`;
      
      const row = DB.queryOne(`
        SELECT COALESCE(SUM(paid_amount), 0) as total 
        FROM payments 
        WHERE strftime('%Y-%m', payment_date) = ?
      `, [yearMonth]);

      monthlyEvolution.push({
        monthKey: yearMonth,
        label: label,
        amount: row.total
      });
    }

    // 8. Recent Payments
    const recentPayments = DB.queryAll(`
      SELECT p.id, p.receipt_no, p.paid_amount, p.payment_date, p.payment_method,
             s.first_name || ' ' || s.last_name as student_name,
             sub.name as subject_name,
             g.name as group_name
      FROM payments p
      JOIN students s ON p.student_id = s.id
      JOIN groups g ON p.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      ORDER BY p.payment_date DESC
      LIMIT 6
    `);

    // 9. Recent Unpaid / Impayés
    // Find enrolled students who haven't paid for current month
    const currentMonthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const unpaidStudents = DB.queryAll(`
      SELECT s.id as student_id, s.first_name || ' ' || s.last_name as student_name, s.phone,
             g.name as group_name, sub.name as subject_name,
             (g.price_monthly - e.discount_amount) as amount_due
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      JOIN groups g ON e.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      WHERE e.status = 'active'
        AND NOT EXISTS (
          SELECT 1 FROM payments p 
          WHERE p.student_id = e.student_id 
            AND p.group_id = e.group_id 
            AND strftime('%Y-%m', p.payment_date) = ?
        )
      LIMIT 6
    `, [currentMonthStr]);

    // 10. Notifications & Alerts
    const alerts = [];
    if (unpaidStudents.length > 0) {
      alerts.push({
        type: 'warning',
        title: 'Retards de paiement',
        message: `${unpaidStudents.length} élève(s) en attente de régularisation pour ce mois.`
      });
    }
    const todaySessions = DB.queryAll(`
      SELECT g.name, g.start_time, g.end_time, r.name as room_name, t.first_name || ' ' || t.last_name as teacher_name
      FROM groups g
      JOIN rooms r ON g.room_id = r.id
      JOIN teachers t ON g.teacher_id = t.id
      WHERE g.active = 1
      LIMIT 3
    `);

    res.json({
      success: true,
      activeYear,
      kpis: {
        activeStudents,
        enrollments,
        todayCollected,
        thisMonthCollected,
        totalUnpaid,
        recoveryRate,
        teachersCount,
        subjectsCount,
        roomsCount
      },
      monthlyEvolution,
      recentPayments,
      unpaidStudents,
      alerts,
      todaySessions
    });
  } catch (err) {
    console.error('Error fetching dashboard stats:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 2. STUDENTS (ÉLÈVES) API
// -------------------------------------------------------------
app.get('/api/students', (req, res) => {
  try {
    const { search, level_id, status, payment_status } = req.query;
    let sql = `
      SELECT s.*, 
             COALESCE(l.name, '-') as level_name,
             (SELECT COUNT(*) FROM enrollments WHERE student_id = s.id AND status = 'active') as active_groups_count,
             COALESCE((
               SELECT SUM(g.price_monthly - e.discount_amount)
               FROM enrollments e
               JOIN groups g ON e.group_id = g.id
               WHERE e.student_id = s.id AND e.status = 'active'
             ), 0) as total_billed,
             COALESCE((
               SELECT SUM(paid_amount)
               FROM payments
               WHERE student_id = s.id
             ), 0) as total_paid
      FROM students s
      LEFT JOIN levels l ON s.level_id = l.id
      WHERE 1=1
    `;
    const params = [];

    // Filter by Active Status
    if (status === 'inactive') {
      sql += ` AND s.active = 0`;
    } else if (status === 'all') {
      // no filter
    } else {
      // Default: active only
      sql += ` AND s.active = 1`;
    }

    if (search) {
      sql += ` AND (s.first_name LIKE ? OR s.last_name LIKE ? OR s.matricule LIKE ? OR s.phone LIKE ? OR s.parent_phone LIKE ?)`;
      const term = `%${search}%`;
      params.push(term, term, term, term, term);
    }

    if (level_id) {
      sql += ` AND s.level_id = ?`;
      params.push(level_id);
    }

    sql += ` ORDER BY s.id DESC`;
    let students = DB.queryAll(sql, params);

    // Calculate remaining and payment status for each student
    students = students.map(s => {
      const remaining = Math.max(0, Number(s.total_billed) - Number(s.total_paid));
      const payStatus = remaining <= 0 ? 'paid' : 'unpaid';
      return {
        ...s,
        remaining_due: remaining,
        payment_status: payStatus
      };
    });

    // Filter by payment_status if requested
    if (payment_status === 'paid') {
      students = students.filter(s => s.payment_status === 'paid');
    } else if (payment_status === 'unpaid') {
      students = students.filter(s => s.payment_status === 'unpaid');
    }

    res.json({ success: true, students });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/students/:id', (req, res) => {
  try {
    const { id } = req.params;
    const student = DB.queryOne(`
      SELECT s.*, COALESCE(l.name, '-') as level_name
      FROM students s
      LEFT JOIN levels l ON s.level_id = l.id
      WHERE s.id = ?
    `, [id]);

    if (!student) {
      return res.status(404).json({ success: false, error: 'Élève non trouvé' });
    }

    // 1. Enrollments with group details
    const enrollments = DB.queryAll(`
      SELECT e.id as enrollment_id, e.registration_date, e.discount_amount, e.status as enrollment_status,
             g.id as group_id, g.name as group_name, g.day_of_week, g.start_time, g.end_time, g.price_monthly,
             sub.name as subject_name, sub.color as subject_color,
             t.first_name || ' ' || t.last_name as teacher_name,
             r.name as room_name
      FROM enrollments e
      JOIN groups g ON e.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      JOIN teachers t ON g.teacher_id = t.id
      LEFT JOIN rooms r ON g.room_id = r.id
      WHERE e.student_id = ?
      ORDER BY e.id DESC
    `, [id]);

    // 2. Payments history
    const payments = DB.queryAll(`
      SELECT p.*, g.name as group_name, sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name
      FROM payments p
      JOIN groups g ON p.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      JOIN teachers t ON g.teacher_id = t.id
      WHERE p.student_id = ?
      ORDER BY p.payment_date DESC
    `, [id]);

    // 3. Financial calculations
    const totalBilled = enrollments
      .filter(e => e.enrollment_status === 'active')
      .reduce((sum, e) => sum + (Number(e.price_monthly) - Number(e.discount_amount || 0)), 0);
    const totalPaid = payments.reduce((sum, p) => sum + Number(p.paid_amount || 0), 0);
    const remainingDue = Math.max(0, totalBilled - totalPaid);

    // 4. Attendance Stats
    const attStats = DB.queryOne(`
      SELECT 
        COUNT(*) as total_sessions,
        COALESCE(SUM(CASE WHEN status = 'present' THEN 1 ELSE 0 END), 0) as present_count,
        COALESCE(SUM(CASE WHEN status = 'late' THEN 1 ELSE 0 END), 0) as late_count,
        COALESCE(SUM(CASE WHEN status = 'absent' THEN 1 ELSE 0 END), 0) as absent_count
      FROM attendance
      WHERE student_id = ?
    `, [id]);

    const totalSessions = attStats?.total_sessions || 0;
    const presentCount = attStats?.present_count || 0;
    const attendanceRate = totalSessions > 0 ? Math.round((presentCount / totalSessions) * 100) : 100;

    res.json({
      success: true,
      student,
      stats: {
        total_billed: totalBilled,
        total_paid: totalPaid,
        remaining_due: remainingDue,
        payments_count: payments.length,
        enrollments_count: enrollments.filter(e => e.enrollment_status === 'active').length,
        status_text: remainingDue <= 0 ? 'À jour' : 'En retard',
        attendance_rate: attendanceRate,
        total_sessions: totalSessions,
        present_count: presentCount
      },
      enrollments,
      payments
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/students/:id/attendance', (req, res) => {
  try {
    const { id } = req.params;
    const attendance = DB.queryAll(`
      SELECT a.*, g.name as group_name, sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name
      FROM attendance a
      JOIN groups g ON a.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      JOIN teachers t ON g.teacher_id = t.id
      WHERE a.student_id = ?
      ORDER BY a.session_date DESC, a.check_in_time DESC
    `, [id]);

    res.json({ success: true, attendance });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.patch('/api/students/:id/toggle-status', (req, res) => {
  try {
    const { id } = req.params;
    const current = DB.queryOne("SELECT active FROM students WHERE id = ?", [id]);
    if (!current) return res.status(404).json({ success: false, error: 'Élève non trouvé' });
    const newStatus = current.active === 1 ? 0 : 1;
    DB.run("UPDATE students SET active = ? WHERE id = ?", [newStatus, id]);
    res.json({ success: true, active: newStatus });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/students', (req, res) => {
  try {
    const { matricule: customMatricule, first_name, last_name, gender, birth_date, phone, parent_name, parent_phone, address, level_id, notes } = req.body;
    if (!first_name || !last_name) {
      return res.status(400).json({ success: false, error: 'Nom et Prénom sont requis' });
    }

    let matricule = (customMatricule || '').trim();

    if (matricule) {
      // Check if custom matricule is already used
      const existing = DB.queryOne("SELECT id FROM students WHERE matricule = ? COLLATE NOCASE", [matricule]);
      if (existing) {
        return res.status(400).json({ success: false, error: `Le matricule "${matricule}" est déjà utilisé par un autre élève.` });
      }
    } else {
      // Standardized, collision-proof Matricule: EDU-YYYY-XXXX
      const activeYearSetting = DB.queryOne("SELECT value FROM settings WHERE key = 'active_year'")?.value || '2025-2026';
      const yearMatch = activeYearSetting.match(/\d{4}$/) || [new Date().getFullYear().toString()];
      const currentYear = yearMatch[0];

      let candidateNum = (DB.queryOne("SELECT MAX(id) as max_id FROM students")?.max_id || 0) + 1;
      matricule = `EDU-${currentYear}-${String(candidateNum).padStart(4, '0')}`;
      while (DB.queryOne("SELECT id FROM students WHERE matricule = ? COLLATE NOCASE", [matricule])) {
        candidateNum++;
        matricule = `EDU-${currentYear}-${String(candidateNum).padStart(4, '0')}`;
      }
    }

    const qr_code = matricule;

    const result = DB.run(`
      INSERT INTO students (matricule, first_name, last_name, gender, birth_date, phone, parent_name, parent_phone, address, level_id, qr_code, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [matricule, first_name.trim(), last_name.trim(), gender || 'M', birth_date || null, phone || null, parent_name || null, parent_phone || null, address || null, toNullableId(level_id), qr_code, notes || null]);

    const newStudent = DB.queryOne("SELECT * FROM students WHERE id = ?", [result.lastInsertRowid]);
    res.json({ success: true, student: newStudent });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/students/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { matricule: customMatricule, first_name, last_name, gender, birth_date, phone, parent_name, parent_phone, address, level_id, notes, photo_url } = req.body;
    
    const currentStudent = DB.queryOne("SELECT * FROM students WHERE id = ?", [id]);
    if (!currentStudent) {
      return res.status(404).json({ success: false, error: 'Élève non trouvé' });
    }

    let matricule = currentStudent.matricule;
    if (customMatricule && customMatricule.trim()) {
      const cleanMatricule = customMatricule.trim();
      const existing = DB.queryOne("SELECT id FROM students WHERE matricule = ? COLLATE NOCASE AND id != ?", [cleanMatricule, id]);
      if (existing) {
        return res.status(400).json({ success: false, error: `Le matricule "${cleanMatricule}" est déjà attribué à un autre élève.` });
      }
      matricule = cleanMatricule;
    }

    DB.run(`
      UPDATE students 
      SET matricule = ?, qr_code = ?, first_name = ?, last_name = ?, gender = ?, birth_date = ?, phone = ?, parent_name = ?, 
          parent_phone = ?, address = ?, level_id = ?, notes = ?, photo_url = COALESCE(?, photo_url)
      WHERE id = ?
    `, [matricule, matricule, first_name.trim(), last_name.trim(), gender || 'M', birth_date || null, phone || null, parent_name || null, parent_phone || null, address || null, toNullableId(level_id), notes || null, photo_url || null, id]);

    res.json({ success: true, message: 'Élève mis à jour avec succès', matricule });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


app.delete('/api/students/:id', (req, res) => {
  try {
    const { id } = req.params;
    DB.run("UPDATE students SET active = 0 WHERE id = ?", [id]);
    res.json({ success: true, message: 'Élève désactivé avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 3. GROUPS & ENROLLMENTS API
// -------------------------------------------------------------
app.get('/api/groups', (req, res) => {
  try {
    const { status } = req.query;
    let whereClause = "WHERE g.active = 1";
    if (status === 'all') {
      whereClause = "";
    } else if (status === 'inactive') {
      whereClause = "WHERE g.active = 0";
    }

    const groups = DB.queryAll(`
      SELECT g.*, 
             COALESCE(l.name, 'Sans niveau') as level_name, 
             COALESCE(sub.name, 'Sans matière') as subject_name, 
             COALESCE(sub.color, '#3b82f6') as subject_color,
             COALESCE(t.first_name || ' ' || t.last_name, 'Non assigné') as teacher_name,
             COALESCE(r.name, '-') as room_name,
             (SELECT COUNT(*) FROM enrollments WHERE group_id = g.id AND status = 'active') as enrolled_count
      FROM groups g
      LEFT JOIN levels l ON g.level_id = l.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      LEFT JOIN rooms r ON g.room_id = r.id
      ${whereClause}
      ORDER BY g.id DESC
    `);

    // Calculate summary statistics across active groups
    const statsRow = DB.queryOne(`
      SELECT 
        COUNT(DISTINCT g.id) as active_groups_count,
        COALESCE(SUM(g.max_students), 0) as total_capacity,
        (
          SELECT COUNT(*) 
          FROM enrollments e 
          JOIN groups g2 ON e.group_id = g2.id 
          WHERE e.status = 'active' AND g2.active = 1
        ) as total_enrolled
      FROM groups g
      WHERE g.active = 1
    `);

    const activeCount = statsRow?.active_groups_count || 0;
    const totalCapacity = statsRow?.total_capacity || 0;
    const totalEnrolled = statsRow?.total_enrolled || 0;
    const fillRate = totalCapacity > 0 ? Math.min(100, Math.round((totalEnrolled / totalCapacity) * 100)) : 0;

    res.json({ 
      success: true, 
      groups,
      stats: {
        active_groups_count: activeCount,
        total_capacity: totalCapacity,
        total_enrolled: totalEnrolled,
        fill_rate: fillRate
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/groups/:id/students', (req, res) => {
  try {
    const { id } = req.params;
    const group = DB.queryOne(`
      SELECT g.*, l.name as level_name, sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name,
             r.name as room_name
      FROM groups g
      LEFT JOIN levels l ON g.level_id = l.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      LEFT JOIN rooms r ON g.room_id = r.id
      WHERE g.id = ?
    `, [id]);

    if (!group) return res.status(404).json({ success: false, error: 'Groupe introuvable' });

    const students = DB.queryAll(`
      SELECT e.id as enrollment_id, e.registration_date, e.discount_amount, e.status as enrollment_status,
             s.id as student_id, s.matricule, s.first_name, s.last_name, s.phone, s.parent_phone,
             (SELECT COUNT(*) FROM payments WHERE student_id = s.id AND group_id = ?) as payments_count
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      WHERE e.group_id = ?
      ORDER BY s.last_name ASC
    `, [id, id]);

    res.json({ success: true, group, students });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.patch('/api/groups/:id/toggle-status', (req, res) => {
  try {
    const { id } = req.params;
    const current = DB.queryOne("SELECT active FROM groups WHERE id = ?", [id]);
    if (!current) return res.status(404).json({ success: false, error: 'Groupe non trouvé' });
    const newStatus = current.active === 1 ? 0 : 1;
    DB.run("UPDATE groups SET active = ? WHERE id = ?", [newStatus, id]);
    res.json({ success: true, active: newStatus });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Schedule & Room Conflict Checking Helper
function checkScheduleConflicts({ day_of_week, start_time, end_time, room_id, teacher_id, exclude_group_id }) {
  if (!day_of_week || !start_time || !end_time) return [];

  // Overlap condition: existing.start_time < new.end_time AND existing.end_time > new.start_time
  let sql = `
    SELECT g.*, r.name as room_name, t.first_name || ' ' || t.last_name as teacher_name, sub.name as subject_name
    FROM groups g
    LEFT JOIN rooms r ON g.room_id = r.id
    LEFT JOIN teachers t ON g.teacher_id = t.id
    LEFT JOIN subjects sub ON g.subject_id = sub.id
    WHERE g.active = 1
      AND g.day_of_week = ?
      AND g.start_time < ?
      AND g.end_time > ?
  `;
  const params = [day_of_week, end_time, start_time];

  if (exclude_group_id) {
    sql += ` AND g.id != ?`;
    params.push(Number(exclude_group_id));
  }

  const overlapping = DB.queryAll(sql, params);
  const conflicts = [];

  const targetRoomId = room_id ? Number(room_id) : null;
  const targetTeacherId = teacher_id ? Number(teacher_id) : null;

  overlapping.forEach(other => {
    if (targetRoomId && other.room_id === targetRoomId) {
      conflicts.push({
        type: 'room',
        group_id: other.id,
        group_name: other.name,
        room_name: other.room_name,
        message: `La salle « ${other.room_name} » est déjà occupée le ${day_of_week} de ${other.start_time} à ${other.end_time} par « ${other.name} »`
      });
    }
    if (targetTeacherId && other.teacher_id === targetTeacherId) {
      conflicts.push({
        type: 'teacher',
        group_id: other.id,
        group_name: other.name,
        teacher_name: other.teacher_name,
        message: `L'enseignant « ${other.teacher_name} » a déjà une séance le ${day_of_week} de ${other.start_time} à ${other.end_time} avec « ${other.name} »`
      });
    }
  });

  return conflicts;
}

app.post('/api/planning/check-conflicts', (req, res) => {
  try {
    const { day_of_week, start_time, end_time, room_id, teacher_id, exclude_group_id } = req.body;
    const conflicts = checkScheduleConflicts({
      day_of_week,
      start_time,
      end_time,
      room_id: toNullableId(room_id),
      teacher_id: toNullableId(teacher_id),
      exclude_group_id: toNullableId(exclude_group_id)
    });
    res.json({ success: true, hasConflicts: conflicts.length > 0, conflicts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/planning/rooms-availability', (req, res) => {
  try {
    const day_of_week = req.query.day_of_week || req.query.day;
    const { start_time, end_time, exclude_group_id } = req.query;
    const rooms = DB.queryAll("SELECT * FROM rooms ORDER BY name ASC");

    if (!day_of_week || !start_time || !end_time) {
      return res.json({
        success: true,
        rooms: rooms.map(r => ({ ...r, is_available: true, conflict: null }))
      });
    }

    let sql = `
      SELECT g.*, r.id as room_id, r.name as room_name,
             t.first_name || ' ' || t.last_name as teacher_name,
             sub.name as subject_name
      FROM groups g
      JOIN rooms r ON g.room_id = r.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      WHERE g.active = 1
        AND g.day_of_week = ?
        AND g.start_time < ?
        AND g.end_time > ?
    `;
    const params = [day_of_week, end_time, start_time];
    if (exclude_group_id) {
      sql += ` AND g.id != ?`;
      params.push(Number(exclude_group_id));
    }
    const busyRooms = DB.queryAll(sql, params);
    const busyMap = {};
    busyRooms.forEach(b => { busyMap[b.room_id] = b; });

    const result = rooms.map(room => ({
      ...room,
      is_available: !busyMap[room.id],
      conflict: busyMap[room.id] || null
    }));

    res.json({ success: true, rooms: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/groups', (req, res) => {
  try {
    const { name, level_id, subject_id, teacher_id, room_id, day_of_week, start_time, end_time, price_monthly, max_students, force } = req.body;

    if (!force) {
      const conflicts = checkScheduleConflicts({
        day_of_week,
        start_time,
        end_time,
        room_id: toNullableId(room_id),
        teacher_id: toNullableId(teacher_id)
      });
      if (conflicts.length > 0) {
        return res.status(409).json({
          success: false,
          error: conflicts[0].message,
          conflicts
        });
      }
    }

    const result = DB.run(`
      INSERT INTO groups (name, level_id, subject_id, teacher_id, room_id, day_of_week, start_time, end_time, price_monthly, max_students)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [name, toNullableId(level_id), toNullableId(subject_id), toNullableId(teacher_id), toNullableId(room_id), day_of_week, start_time, end_time, parseFloat(price_monthly) || 2000, parseInt(max_students) || 25]);
    res.json({ success: true, groupId: result.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/groups/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { name, level_id, subject_id, teacher_id, room_id, day_of_week, start_time, end_time, price_monthly, max_students, force } = req.body;

    if (!force) {
      const conflicts = checkScheduleConflicts({
        day_of_week,
        start_time,
        end_time,
        room_id: toNullableId(room_id),
        teacher_id: toNullableId(teacher_id),
        exclude_group_id: Number(id)
      });
      if (conflicts.length > 0) {
        return res.status(409).json({
          success: false,
          error: conflicts[0].message,
          conflicts
        });
      }
    }

    DB.run(`
      UPDATE groups
      SET name = ?, level_id = ?, subject_id = ?, teacher_id = ?, room_id = ?, 
          day_of_week = ?, start_time = ?, end_time = ?, price_monthly = ?, max_students = ?
      WHERE id = ?
    `, [name, toNullableId(level_id), toNullableId(subject_id), toNullableId(teacher_id), toNullableId(room_id), day_of_week, start_time, end_time, parseFloat(price_monthly) || 2000, parseInt(max_students) || 25, id]);
    res.json({ success: true, message: 'Groupe mis à jour avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/enrollments', (req, res) => {
  try {
    const { student_id, group_id, school_year, discount_amount } = req.body;
    const year = school_year || '2025-2026';
    
    // Check if already enrolled
    const existing = DB.queryOne("SELECT id FROM enrollments WHERE student_id = ? AND group_id = ? AND school_year = ?", [student_id, group_id, year]);
    if (existing) {
      return res.status(400).json({ success: false, error: 'Cet élève est déjà inscrit dans ce groupe.' });
    }

    const result = DB.run(`
      INSERT INTO enrollments (student_id, group_id, school_year, discount_amount, status)
      VALUES (?, ?, ?, ?, 'active')
    `, [student_id, group_id, year, discount_amount || 0]);

    res.json({ success: true, enrollmentId: result.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/enrollments/:id', (req, res) => {
  try {
    const { id } = req.params;
    DB.run("UPDATE enrollments SET status = 'cancelled' WHERE id = ?", [id]);
    res.json({ success: true, message: 'Inscription annulée avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 4. PAYMENTS & RECEIPTS API
// -------------------------------------------------------------
app.get('/api/payments', (req, res) => {
  try {
    const { search } = req.query;
    let sql = `
      SELECT p.*, s.first_name || ' ' || s.last_name as student_name, s.matricule,
             g.name as group_name, sub.name as subject_name
      FROM payments p
      JOIN students s ON p.student_id = s.id
      JOIN groups g ON p.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
    `;
    const params = [];
    if (search && search.trim()) {
      sql += ` WHERE (s.first_name LIKE ? OR s.last_name LIKE ? OR (s.first_name || ' ' || s.last_name) LIKE ? OR s.matricule LIKE ? OR p.receipt_no LIKE ? OR g.name LIKE ? OR sub.name LIKE ?)`;
      const term = `%${search.trim()}%`;
      params.push(term, term, term, term, term, term, term);
    }
    sql += ` ORDER BY p.id DESC LIMIT 150`;
    const payments = DB.queryAll(sql, params);
    res.json({ success: true, payments });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/payments/:id', (req, res) => {
  try {
    const payment = DB.queryOne(`
      SELECT p.*, s.first_name, s.last_name, s.matricule, s.phone as student_phone, s.parent_phone,
             l.name as level_name,
             g.name as group_name, g.price_monthly,
             sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name
      FROM payments p
      JOIN students s ON p.student_id = s.id
      LEFT JOIN levels l ON s.level_id = l.id
      JOIN groups g ON p.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      JOIN teachers t ON g.teacher_id = t.id
      WHERE p.id = ?
    `, [req.params.id]);

    if (!payment) return res.status(404).json({ success: false, error: 'Reçu non trouvé' });
    res.json({ success: true, payment });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/payments', (req, res) => {
  try {
    const { student_id, group_id, month_period, paid_amount, discount, payment_method, notes } = req.body;
    
    // Fetch group base price
    const group = DB.queryOne("SELECT price_monthly FROM groups WHERE id = ?", [group_id]);
    const baseAmount = group ? group.price_monthly : 2000;
    const disc = parseFloat(discount) || 0;
    const paid = parseFloat(paid_amount) || 0;
    const remaining = Math.max(0, (baseAmount - disc) - paid);

    // Auto receipt number
    const count = DB.queryOne("SELECT COUNT(*) as count FROM payments").count;
    const receipt_no = `REC-${new Date().getFullYear()}-${String(count + 1).padStart(5, '0')}`;

    const result = DB.run(`
      INSERT INTO payments (receipt_no, student_id, group_id, month_period, base_amount, discount, paid_amount, remaining_amount, payment_method, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [receipt_no, student_id, group_id, month_period, baseAmount, disc, paid, remaining, payment_method || 'espece', notes]);

    const newPayment = DB.queryOne(`
      SELECT p.*, s.first_name, s.last_name, s.matricule, s.phone as student_phone, s.parent_phone,
             l.name as level_name,
             g.name as group_name, g.price_monthly,
             sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name
      FROM payments p
      JOIN students s ON p.student_id = s.id
      LEFT JOIN levels l ON s.level_id = l.id
      JOIN groups g ON p.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      JOIN teachers t ON g.teacher_id = t.id
      WHERE p.id = ?
    `, [result.lastInsertRowid]);

    // Automatic Caisse Entry for paid amount
    if (paid > 0) {
      try {
        const nowP = new Date();
        const curDate = nowP.toISOString().split('T')[0];
        const curTime = nowP.toTimeString().split(' ')[0];
        DB.run(`
          INSERT INTO caisse (type, category, amount, title, reference, payment_method, payment_id, user_name, movement_date, movement_time)
          VALUES ('entree', 'Paiement élève', ?, ?, ?, ?, ?, 'Secrétariat', ?, ?)
        `, [
          paid,
          `Paiement cours ${month_period} - ${newPayment.first_name} ${newPayment.last_name}`,
          receipt_no,
          payment_method || 'espece',
          result.lastInsertRowid,
          curDate,
          curTime
        ]);
      } catch (caisseErr) {
        console.warn('Auto caisse payment entry:', caisseErr.message);
      }
    }

    res.json({ success: true, payment: newPayment, receipt_no });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 5. POINTAGE & GESTION DES PRÉSENCES PAR GROUPE ET PAR SÉANCE
// -------------------------------------------------------------

// 5.1 Get all active groups with enrollment and sessions count
app.get('/api/attendance/groups', (req, res) => {
  try {
    const groups = DB.queryAll(`
      SELECT g.*, l.name as level_name, sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name,
             r.name as room_name,
             (SELECT COUNT(*) FROM enrollments e WHERE e.group_id = g.id AND e.status = 'active') as students_count,
             (SELECT COUNT(*) FROM group_sessions gs WHERE gs.group_id = g.id) as sessions_count
      FROM groups g
      LEFT JOIN levels l ON g.level_id = l.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      LEFT JOIN rooms r ON g.room_id = r.id
      WHERE g.active = 1
      ORDER BY g.name ASC
    `);
    res.json({ success: true, groups });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.2 Get all sessions history for a group
app.get('/api/attendance/sessions', (req, res) => {
  try {
    const { group_id } = req.query;
    if (!group_id) return res.status(400).json({ success: false, error: 'group_id manquant' });

    const sessions = DB.queryAll(`
      SELECT gs.*,
             (SELECT COUNT(*) FROM attendance a WHERE a.group_id = gs.group_id AND a.session_date = gs.session_date AND a.status = 'present') as present_count,
             (SELECT COUNT(*) FROM attendance a WHERE a.group_id = gs.group_id AND a.session_date = gs.session_date AND a.status = 'absent') as absent_count,
             (SELECT COUNT(*) FROM attendance a WHERE a.group_id = gs.group_id AND a.session_date = gs.session_date AND a.status = 'late') as late_count,
             (SELECT COUNT(*) FROM attendance a WHERE a.group_id = gs.group_id AND a.session_date = gs.session_date AND a.status = 'excused') as excused_count,
             (SELECT COUNT(*) FROM attendance a WHERE a.group_id = gs.group_id AND a.session_date = gs.session_date) as total_marked
      FROM group_sessions gs
      WHERE gs.group_id = ?
      ORDER BY gs.session_date DESC, gs.id DESC
    `, [group_id]);

    res.json({ success: true, sessions });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.3 Get attendance sheet for a specific group and date
app.get('/api/attendance/sheet', (req, res) => {
  try {
    const { group_id } = req.query;
    let session_date = req.query.date;

    if (!group_id) return res.status(400).json({ success: false, error: 'group_id manquant' });

    if (!session_date) {
      session_date = new Date().toISOString().split('T')[0];
    }

    const group = DB.queryOne(`
      SELECT g.*, l.name as level_name, sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name,
             r.name as room_name
      FROM groups g
      LEFT JOIN levels l ON g.level_id = l.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      LEFT JOIN rooms r ON g.room_id = r.id
      WHERE g.id = ?
    `, [group_id]);

    if (!group) return res.status(404).json({ success: false, error: 'Groupe non trouvé' });

    // Find if session entry exists for this date
    let session = DB.queryOne(`
      SELECT * FROM group_sessions WHERE group_id = ? AND session_date = ?
    `, [group_id, session_date]);

    const totalSessions = DB.queryOne(`
      SELECT COUNT(*) as count FROM group_sessions WHERE group_id = ?
    `, [group_id])?.count || 0;

    let defaultSessionNumber = totalSessions + 1;
    if (session && session.session_number) {
      defaultSessionNumber = session.session_number;
    }

    // Month string for checking payments (e.g. '2026-09')
    const monthStr = session_date.substring(0, 7);

    // Get all enrolled students in this group
    const students = DB.queryAll(`
      SELECT s.id as student_id, s.matricule, s.first_name, s.last_name, s.gender,
             s.phone, s.parent_phone, s.parent_name, s.photo_url,
             e.id as enrollment_id, e.registration_date, e.discount_amount
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      WHERE e.group_id = ? AND s.active = 1 AND e.status = 'active'
      ORDER BY s.last_name ASC, s.first_name ASC
    `, [group_id]);

    // Attach payment status, current date attendance, and cumulative attendance per student
    const studentRows = students.map(s => {
      // 1. Payment check for this month
      const payment = DB.queryOne(`
        SELECT paid_amount, remaining_amount, month_period
        FROM payments
        WHERE student_id = ? AND group_id = ? AND strftime('%Y-%m', payment_date) = ?
        ORDER BY id DESC LIMIT 1
      `, [s.student_id, group_id, monthStr]);

      let is_paid = false;
      let payment_badge = 'due';
      let payment_text = 'Impayé';

      if (payment) {
        if (payment.remaining_amount <= 0) {
          is_paid = true;
          payment_badge = 'paid';
          payment_text = 'À jour';
        } else {
          payment_badge = 'partial';
          payment_text = `Reste: ${payment.remaining_amount} DA`;
        }
      }

      // 2. Attendance on this session_date
      const att = DB.queryOne(`
        SELECT * FROM attendance
        WHERE student_id = ? AND group_id = ? AND session_date = ?
      `, [s.student_id, group_id, session_date]);

      // 3. Cumulative sessions attended for this group
      const cumStats = DB.queryOne(`
        SELECT 
          COUNT(*) as total_recorded,
          COALESCE(SUM(CASE WHEN status = 'present' THEN 1 ELSE 0 END), 0) as present_count,
          COALESCE(SUM(CASE WHEN status = 'absent' THEN 1 ELSE 0 END), 0) as absent_count,
          COALESCE(SUM(CASE WHEN status = 'late' THEN 1 ELSE 0 END), 0) as late_count,
          COALESCE(SUM(CASE WHEN status = 'excused' THEN 1 ELSE 0 END), 0) as excused_count
        FROM attendance
        WHERE student_id = ? AND group_id = ?
      `, [s.student_id, group_id]);

      return {
        ...s,
        is_paid,
        payment_badge,
        payment_text,
        attendance_id: att?.id || null,
        status: att?.status || null,
        check_in_time: att?.check_in_time || null,
        notes: att?.notes || '',
        sessions_attended: cumStats?.present_count || 0,
        sessions_total: totalSessions
      };
    });

    res.json({
      success: true,
      group,
      session_date,
      session: session || {
        session_number: defaultSessionNumber,
        start_time: group.start_time || '14:00',
        end_time: group.end_time || '16:00',
        topic: '',
        notes: ''
      },
      total_sessions: totalSessions,
      students: studentRows
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.4 Save attendance sheet (Batch upsert)
app.post('/api/attendance/sheet/save', (req, res) => {
  try {
    const { group_id, session_date, session_number, start_time, end_time, topic, notes, records } = req.body;
    if (!group_id || !session_date) {
      return res.status(400).json({ success: false, error: 'group_id et session_date requis' });
    }

    const sNumber = parseInt(session_number, 10) || 1;
    const sStartTime = start_time || null;
    const sEndTime = end_time || null;
    const sTopic = topic || null;
    const sNotes = notes || null;

    // 1. Upsert group_sessions
    DB.run(`
      INSERT INTO group_sessions (group_id, session_date, session_number, start_time, end_time, topic, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(group_id, session_date) DO UPDATE SET
        session_number = excluded.session_number,
        start_time = excluded.start_time,
        end_time = excluded.end_time,
        topic = excluded.topic,
        notes = excluded.notes;
    `, [group_id, session_date, sNumber, sStartTime, sEndTime, sTopic, sNotes]);

    const sessionObj = DB.queryOne(`
      SELECT * FROM group_sessions WHERE group_id = ? AND session_date = ?
    `, [group_id, session_date]);

    const monthStr = session_date.substring(0, 7);
    const nowTime = new Date().toTimeString().split(' ')[0];

    // 2. Upsert each student record
    if (Array.isArray(records)) {
      for (const item of records) {
        if (!item.student_id) continue;
        const status = item.status || 'present';
        const itemNotes = item.notes || '';

        // Check payment snapshot
        const payment = DB.queryOne(`
          SELECT id, remaining_amount FROM payments
          WHERE student_id = ? AND group_id = ? AND strftime('%Y-%m', payment_date) = ?
        `, [item.student_id, group_id, monthStr]);

        const paymentSnapshot = (payment && (payment.remaining_amount === 0 || payment.remaining_amount === null)) ? 'paid' : 'due';

        DB.run(`
          INSERT INTO attendance (student_id, group_id, session_date, check_in_time, status, payment_status_snapshot, notes, session_id)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(student_id, group_id, session_date) DO UPDATE SET
            status = excluded.status,
            notes = excluded.notes,
            payment_status_snapshot = excluded.payment_status_snapshot,
            session_id = excluded.session_id;
        `, [item.student_id, group_id, session_date, nowTime, status, paymentSnapshot, itemNotes, sessionObj?.id || null]);
      }
    }

    res.json({
      success: true,
      message: 'Feuille de présence enregistrée avec succès',
      session: sessionObj
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.5 Full Attendance Matrix for a group with month filter
app.get('/api/attendance/matrix', (req, res) => {
  try {
    const { group_id, month } = req.query;
    if (!group_id) return res.status(400).json({ success: false, error: 'group_id manquant' });

    const group = DB.queryOne(`
      SELECT g.*, l.name as level_name, sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name
      FROM groups g
      LEFT JOIN levels l ON g.level_id = l.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      WHERE g.id = ?
    `, [group_id]);

    if (!group) return res.status(404).json({ success: false, error: 'Groupe non trouvé' });

    // Distinct months with sessions count for this group
    const availableMonths = DB.queryAll(`
      SELECT DISTINCT strftime('%Y-%m', session_date) as month_val, COUNT(*) as count
      FROM group_sessions
      WHERE group_id = ?
      GROUP BY month_val
      ORDER BY month_val ASC
    `, [group_id]);

    // Sessions query with optional month filtering
    let sessionsSql = 'SELECT * FROM group_sessions WHERE group_id = ?';
    const sessionsParams = [group_id];

    if (month && month !== 'all') {
      if (month.includes(',')) {
        const monthsList = month.split(',').map(m => m.trim()).filter(Boolean);
        const placeholders = monthsList.map(() => '?').join(',');
        sessionsSql += ` AND strftime('%Y-%m', session_date) IN (${placeholders})`;
        sessionsParams.push(...monthsList);
      } else {
        sessionsSql += ` AND strftime('%Y-%m', session_date) = ?`;
        sessionsParams.push(month.trim());
      }
    }

    sessionsSql += ' ORDER BY session_date ASC, id ASC';
    const sessions = DB.queryAll(sessionsSql, sessionsParams);

    const students = DB.queryAll(`
      SELECT s.id as student_id, s.matricule, s.first_name, s.last_name, s.phone
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      WHERE e.group_id = ? AND s.active = 1 AND e.status = 'active'
      ORDER BY s.last_name ASC, s.first_name ASC
    `, [group_id]);

    const allAttendances = DB.queryAll(`
      SELECT student_id, session_date, status, notes
      FROM attendance
      WHERE group_id = ?
    `, [group_id]);

    const attendanceMap = {};
    for (const a of allAttendances) {
      const key = `${a.student_id}_${a.session_date}`;
      attendanceMap[key] = a.status;
    }

    const matrixRows = students.map(s => {
      const rowSessions = {};
      let presentCount = 0;
      let absentCount = 0;
      let lateCount = 0;
      let excusedCount = 0;

      for (const sess of sessions) {
        const key = `${s.student_id}_${sess.session_date}`;
        const st = attendanceMap[key] || null;
        rowSessions[sess.session_date] = st;
        if (st === 'present') presentCount++;
        else if (st === 'absent') absentCount++;
        else if (st === 'late') lateCount++;
        else if (st === 'excused') excusedCount++;
      }

      const totalHeld = sessions.length;
      const rate = totalHeld > 0 ? Math.round(((presentCount + (lateCount * 0.5)) / totalHeld) * 100) : 100;

      return {
        ...s,
        sessions: rowSessions,
        presentCount,
        absentCount,
        lateCount,
        excusedCount,
        totalHeld,
        attendanceRate: rate
      };
    });

    res.json({
      success: true,
      group,
      selected_month: month || 'all',
      available_months: availableMonths,
      sessions,
      students: matrixRows
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.6 Delete a session
app.delete('/api/attendance/session', (req, res) => {
  try {
    const { group_id, session_date } = req.body;
    if (!group_id || !session_date) {
      return res.status(400).json({ success: false, error: 'group_id et session_date requis' });
    }

    DB.run('DELETE FROM attendance WHERE group_id = ? AND session_date = ?', [group_id, session_date]);
    DB.run('DELETE FROM group_sessions WHERE group_id = ? AND session_date = ?', [group_id, session_date]);

    res.json({ success: true, message: 'Séance et présences supprimées avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.7 RAPID ATTENDANCE BY BARCODE / QR SCAN
app.post('/api/pointage/scan', (req, res) => {
  try {
    const { code, group_id, session_date } = req.body;
    if (!code) {
      return res.status(400).json({ success: false, error: 'Code-barres / QR manquant' });
    }

    const cleanCode = String(code).trim();

    // Find student by matricule or qr_code or id (case-insensitive)
    const student = DB.queryOne(`
      SELECT s.*, l.name as level_name 
      FROM students s
      LEFT JOIN levels l ON s.level_id = l.id
      WHERE (s.matricule = ? COLLATE NOCASE OR s.qr_code = ? COLLATE NOCASE OR CAST(s.id AS TEXT) = ?) AND s.active = 1
    `, [cleanCode, cleanCode, cleanCode]);

    if (!student) {
      return res.status(404).json({ success: false, error: 'Élève non trouvé dans le système' });
    }

    // Get groups student is enrolled in
    const activeGroups = DB.queryAll(`
      SELECT g.*, sub.name as subject_name, t.first_name || ' ' || t.last_name as teacher_name
      FROM enrollments e
      JOIN groups g ON e.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      JOIN teachers t ON g.teacher_id = t.id
      WHERE e.student_id = ? AND e.status = 'active'
    `, [student.id]);

    let targetGroupId = group_id ? parseInt(group_id, 10) : null;
    let notInSelectedGroup = false;

    if (targetGroupId) {
      const isEnrolled = activeGroups.some(g => g.id === targetGroupId);
      if (!isEnrolled) {
        notInSelectedGroup = true;
      }
    } else if (activeGroups.length > 0) {
      targetGroupId = activeGroups[0].id;
    }

    const now = new Date();
    const todayDate = session_date || now.toISOString().split('T')[0];
    const currentMonthStr = todayDate.substring(0, 7);
    let isPaid = false;
    let paymentInfo = null;
    let alreadyMarked = false;
    let existingTime = null;

    if (targetGroupId && !notInSelectedGroup) {
      // Check monthly payment
      paymentInfo = DB.queryOne(`
        SELECT * FROM payments 
        WHERE student_id = ? AND group_id = ? AND strftime('%Y-%m', payment_date) = ?
      `, [student.id, targetGroupId, currentMonthStr]);

      isPaid = !!(paymentInfo && (paymentInfo.remaining_amount === 0 || paymentInfo.remaining_amount === null));

      const checkInTime = now.toTimeString().split(' ')[0];

      // Check if already checked-in today for this group
      const existingAttendance = DB.queryOne(`
        SELECT id, status, check_in_time FROM attendance 
        WHERE student_id = ? AND group_id = ? AND session_date = ?
      `, [student.id, targetGroupId, todayDate]);

      if (existingAttendance && existingAttendance.status === 'present') {
        alreadyMarked = true;
        existingTime = existingAttendance.check_in_time;
      } else {
        // Insert or update attendance record to present
        DB.run(`
          INSERT INTO attendance (student_id, group_id, session_date, check_in_time, status, payment_status_snapshot)
          VALUES (?, ?, ?, ?, 'present', ?)
          ON CONFLICT(student_id, group_id, session_date) DO UPDATE SET
            status = 'present',
            check_in_time = excluded.check_in_time,
            payment_status_snapshot = excluded.payment_status_snapshot
        `, [student.id, targetGroupId, todayDate, checkInTime, isPaid ? 'paid' : 'due']);
      }
    }

    // Compute live stats for this target group and session
    let groupStats = null;
    if (targetGroupId) {
      const totalEnrolled = DB.queryOne(`
        SELECT COUNT(*) as count FROM enrollments WHERE group_id = ? AND status = 'active'
      `, [targetGroupId])?.count || 0;

      const presentCount = DB.queryOne(`
        SELECT COUNT(*) as count FROM attendance WHERE group_id = ? AND session_date = ? AND status = 'present'
      `, [targetGroupId, todayDate])?.count || 0;

      const groupRow = DB.queryOne(`
        SELECT g.name, sub.name as subject_name FROM groups g
        LEFT JOIN subjects sub ON g.subject_id = sub.id
        WHERE g.id = ?
      `, [targetGroupId]);

      groupStats = {
        totalEnrolled,
        presentCount,
        remainingCount: Math.max(0, totalEnrolled - presentCount),
        groupName: groupRow?.name || '',
        subjectName: groupRow?.subject_name || ''
      };
    }

    res.json({
      success: true,
      student,
      activeGroups,
      targetGroupId,
      notInSelectedGroup,
      alreadyMarked,
      existingTime,
      isPaid,
      paymentInfo,
      groupStats,
      status: isPaid ? 'PAID' : 'DUE',
      timestamp: new Date().toLocaleTimeString('fr-FR')
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.8 LIVE ATTENDANCE LIST FOR A GROUP & SESSION
app.get('/api/pointage/live-list', (req, res) => {
  try {
    const { group_id, session_date } = req.query;
    if (!group_id) {
      return res.status(400).json({ success: false, error: 'group_id requis' });
    }
    const todayDate = session_date || new Date().toISOString().split('T')[0];
    const monthStr = todayDate.substring(0, 7);

    // Enrolled students in this group
    const students = DB.queryAll(`
      SELECT s.id, s.matricule, s.first_name, s.last_name, s.photo_url, s.phone, s.parent_phone,
             a.id as attendance_id, a.check_in_time, a.status as attendance_status,
             p.id as payment_id, p.paid_amount, p.remaining_amount
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      LEFT JOIN attendance a ON a.student_id = s.id AND a.group_id = e.group_id AND a.session_date = ?
      LEFT JOIN payments p ON p.student_id = s.id AND p.group_id = e.group_id AND strftime('%Y-%m', p.payment_date) = ?
      WHERE e.group_id = ? AND e.status = 'active' AND s.active = 1
      ORDER BY 
        CASE WHEN a.status = 'present' THEN 0 ELSE 1 END,
        a.check_in_time DESC,
        s.last_name ASC
    `, [todayDate, monthStr, group_id]);

    const totalEnrolled = students.length;
    const presentCount = students.filter(s => s.attendance_status === 'present').length;
    const absentCount = students.filter(s => s.attendance_status === 'absent').length;
    const pendingCount = totalEnrolled - presentCount - absentCount;

    res.json({
      success: true,
      students,
      stats: {
        totalEnrolled,
        presentCount,
        absentCount,
        pendingCount: Math.max(0, pendingCount)
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.9 CLOSE ATTENDANCE SESSION & AUTO-MARK REMAINING AS ABSENT
app.post('/api/attendance/close-session', (req, res) => {
  try {
    const { group_id, session_date, session_number, topic } = req.body;
    if (!group_id || !session_date) {
      return res.status(400).json({ success: false, error: 'group_id et session_date requis' });
    }

    const sNumber = parseInt(session_number, 10) || 1;
    const sTopic = topic || 'Séance de cours';
    const nowTime = new Date().toTimeString().split(' ')[0];

    // 1. Ensure group_sessions entry exists
    DB.run(`
      INSERT INTO group_sessions (group_id, session_date, session_number, topic)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(group_id, session_date) DO UPDATE SET
        session_number = excluded.session_number
    `, [group_id, session_date, sNumber, sTopic]);

    const sessionObj = DB.queryOne(`
      SELECT id FROM group_sessions WHERE group_id = ? AND session_date = ?
    `, [group_id, session_date]);

    // 2. Fetch all active enrolled students in this group
    const enrolledStudents = DB.queryAll(`
      SELECT s.id, s.first_name, s.last_name, s.matricule
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      WHERE e.group_id = ? AND e.status = 'active' AND s.active = 1
    `, [group_id]);

    const monthStr = session_date.substring(0, 7);
    let presentCount = 0;
    let newlyMarkedAbsent = 0;
    let alreadyAbsent = 0;

    for (const st of enrolledStudents) {
      const existing = DB.queryOne(`
        SELECT id, status FROM attendance 
        WHERE student_id = ? AND group_id = ? AND session_date = ?
      `, [st.id, group_id, session_date]);

      if (existing && existing.status === 'present') {
        presentCount++;
        if (sessionObj?.id) {
          DB.run('UPDATE attendance SET session_id = ? WHERE id = ?', [sessionObj.id, existing.id]);
        }
      } else if (existing && (existing.status === 'late' || existing.status === 'excused')) {
        // Retain late or excused
        if (sessionObj?.id) {
          DB.run('UPDATE attendance SET session_id = ? WHERE id = ?', [sessionObj.id, existing.id]);
        }
      } else if (existing && existing.status === 'absent') {
        alreadyAbsent++;
        if (sessionObj?.id) {
          DB.run('UPDATE attendance SET session_id = ? WHERE id = ?', [sessionObj.id, existing.id]);
        }
      } else {
        // Not checked-in -> Automatically mark as absent!
        const payment = DB.queryOne(`
          SELECT id, remaining_amount FROM payments
          WHERE student_id = ? AND group_id = ? AND strftime('%Y-%m', payment_date) = ?
        `, [st.id, group_id, monthStr]);
        const paymentSnapshot = (payment && (payment.remaining_amount === 0 || payment.remaining_amount === null)) ? 'paid' : 'due';

        DB.run(`
          INSERT INTO attendance (student_id, group_id, session_date, check_in_time, status, payment_status_snapshot, session_id)
          VALUES (?, ?, ?, ?, 'absent', ?, ?)
          ON CONFLICT(student_id, group_id, session_date) DO UPDATE SET
            status = 'absent',
            session_id = excluded.session_id
        `, [st.id, group_id, session_date, nowTime, paymentSnapshot, sessionObj?.id || null]);
        newlyMarkedAbsent++;
      }
    }

    res.json({
      success: true,
      message: `Séance clôturée avec succès : ${presentCount} présents et ${newlyMarkedAbsent + alreadyAbsent} absents enregistrés.`,
      stats: {
        totalEnrolled: enrolledStudents.length,
        presentCount,
        newlyMarkedAbsent,
        totalAbsent: newlyMarkedAbsent + alreadyAbsent
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.10 CANCEL AN ATTENDANCE CHECK-IN
app.delete('/api/pointage/cancel', (req, res) => {
  try {
    const { student_id, group_id, session_date } = req.body;
    if (!student_id || !group_id || !session_date) {
      return res.status(400).json({ success: false, error: 'Paramètres manquants' });
    }
    DB.run(`
      DELETE FROM attendance 
      WHERE student_id = ? AND group_id = ? AND session_date = ?
    `, [student_id, group_id, session_date]);

    res.json({ success: true, message: 'Pointage annulé' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 6. TEACHERS & PAYOUT CALCULATIONS
// -------------------------------------------------------------
app.get('/api/teachers', (req, res) => {
  try {
    const { search } = req.query;
    let sql = `
      SELECT t.*, sub.name as subject_name,
             (SELECT COUNT(*) FROM groups WHERE teacher_id = t.id AND active = 1) as groups_count
      FROM teachers t
      LEFT JOIN subjects sub ON t.subject_id = sub.id
      WHERE t.active = 1
    `;
    const params = [];
    if (search && search.trim()) {
      sql += ` AND (t.first_name LIKE ? OR t.last_name LIKE ? OR (t.first_name || ' ' || t.last_name) LIKE ? OR t.matricule LIKE ? OR t.phone LIKE ? OR sub.name LIKE ?)`;
      const term = `%${search.trim()}%`;
      params.push(term, term, term, term, term, term);
    }
    sql += ` ORDER BY t.id DESC`;
    const teachers = DB.queryAll(sql, params);
    res.json({ success: true, teachers });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/teachers', (req, res) => {
  try {
    const { matricule: customMatricule, first_name, last_name, phone, email, subject_id, remuneration_type, remuneration_rate, tarif_heure, tarif_seance, salaire_fixe, tarif_par_eleve } = req.body;
    if (!first_name || !last_name) {
      return res.status(400).json({ success: false, error: 'Nom et Prénom de l’enseignant sont requis' });
    }

    let matricule = (customMatricule || '').trim();
    if (matricule) {
      const existing = DB.queryOne("SELECT id FROM teachers WHERE matricule = ? COLLATE NOCASE", [matricule]);
      if (existing) {
        return res.status(400).json({ success: false, error: `Le matricule enseignant "${matricule}" est déjà utilisé.` });
      }
    } else {
      let candidateNum = (DB.queryOne("SELECT MAX(id) as max_id FROM teachers")?.max_id || 0) + 1;
      matricule = `ENS-${String(candidateNum).padStart(3, '0')}`;
      while (DB.queryOne("SELECT id FROM teachers WHERE matricule = ? COLLATE NOCASE", [matricule])) {
        candidateNum++;
        matricule = `ENS-${String(candidateNum).padStart(3, '0')}`;
      }
    }

    const result = DB.run(`
      INSERT INTO teachers (matricule, first_name, last_name, phone, email, subject_id, remuneration_type, remuneration_rate, tarif_heure, tarif_seance, salaire_fixe, tarif_par_eleve)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      matricule, first_name.trim(), last_name.trim(), phone || null, email || null, toNullableId(subject_id),
      remuneration_type || 'percent', parseFloat(remuneration_rate) || 50.0,
      parseFloat(tarif_heure) || 0, parseFloat(tarif_seance) || 0,
      parseFloat(salaire_fixe) || 0, parseFloat(tarif_par_eleve) || 0
    ]);

    res.json({ success: true, teacherId: result.lastInsertRowid, matricule });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/teachers/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { matricule: customMatricule, first_name, last_name, phone, email, subject_id, remuneration_type, remuneration_rate, tarif_heure, tarif_seance, salaire_fixe, tarif_par_eleve } = req.body;
    
    const currentTeacher = DB.queryOne("SELECT * FROM teachers WHERE id = ?", [id]);
    if (!currentTeacher) {
      return res.status(404).json({ success: false, error: 'Enseignant non trouvé' });
    }

    let matricule = currentTeacher.matricule;
    if (customMatricule && customMatricule.trim()) {
      const cleanMatricule = customMatricule.trim();
      const existing = DB.queryOne("SELECT id FROM teachers WHERE matricule = ? COLLATE NOCASE AND id != ?", [cleanMatricule, id]);
      if (existing) {
        return res.status(400).json({ success: false, error: `Le matricule enseignant "${cleanMatricule}" est déjà attribué à un autre enseignant.` });
      }
      matricule = cleanMatricule;
    }

    DB.run(`
      UPDATE teachers 
      SET matricule = ?, first_name = ?, last_name = ?, phone = ?, email = ?, subject_id = ?, 
          remuneration_type = ?, remuneration_rate = ?,
          tarif_heure = ?, tarif_seance = ?, salaire_fixe = ?, tarif_par_eleve = ?
      WHERE id = ?
    `, [
      matricule, first_name.trim(), last_name.trim(), phone || null, email || null, toNullableId(subject_id),
      remuneration_type || 'percent', parseFloat(remuneration_rate) || 50.0,
      parseFloat(tarif_heure) || 0, parseFloat(tarif_seance) || 0,
      parseFloat(salaire_fixe) || 0, parseFloat(tarif_par_eleve) || 0,
      id
    ]);
    res.json({ success: true, message: 'Enseignant mis à jour avec succès', matricule });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


// Calculate teacher earnings across 8 modes for a month
app.get('/api/teachers/:id/earnings', (req, res) => {
  try {
    const { id } = req.params;
    const { month } = req.query; // format 'YYYY-MM'
    const currentMonth = month || new Date().toISOString().slice(0, 7);

    const teacher = DB.queryOne("SELECT * FROM teachers WHERE id = ?", [id]);
    if (!teacher) return res.status(404).json({ success: false, error: 'Enseignant non trouvé' });

    // Groups taught by this teacher with student counts and payments
    const groupsData = DB.queryAll(`
      SELECT g.id as group_id, g.name as group_name, g.day_of_week, g.start_time, g.end_time, g.price_monthly,
             (SELECT COUNT(*) FROM enrollments WHERE group_id = g.id AND status = 'active') as students_count,
             COALESCE(SUM(p.paid_amount), 0) as total_collected,
             COUNT(DISTINCT p.student_id) as students_paid_count
      FROM groups g
      LEFT JOIN payments p ON p.group_id = g.id AND strftime('%Y-%m', p.payment_date) = ?
      WHERE g.teacher_id = ? AND g.active = 1
      GROUP BY g.id
    `, [currentMonth, id]);

    const totalCollected = groupsData.reduce((sum, g) => sum + g.total_collected, 0);
    const totalStudents = groupsData.reduce((sum, g) => sum + g.students_count, 0);

    // Estimate weekly hours from schedules
    let weeklyHours = 0;
    groupsData.forEach(g => {
      if (g.start_time && g.end_time) {
        const [sh, sm] = g.start_time.split(':').map(Number);
        const [eh, em] = g.end_time.split(':').map(Number);
        const diffHours = (eh + em / 60) - (sh + sm / 60);
        if (diffHours > 0) weeklyHours += diffHours;
      } else {
        weeklyHours += 2; // default 2 hours per session
      }
    });

    const sessionsPerMonth = groupsData.length * 4;
    const hoursPerMonth = Math.round(weeklyHours * 4 * 10) / 10;

    // 8 Remuneration Modes calculations
    const ratePercent = parseFloat(teacher.remuneration_rate) || 50;
    const tarifHeure = parseFloat(teacher.tarif_heure) || 1200;
    const tarifSeance = parseFloat(teacher.tarif_seance) || 2000;
    const salaireFixe = parseFloat(teacher.salaire_fixe) || 40000;
    const tarifParEleve = parseFloat(teacher.tarif_par_eleve) || 1000;

    const modes = {
      percent: {
        label: 'Pourcentage sur encaissement (%)',
        rate: ratePercent,
        unit: '%',
        base: totalCollected,
        amount: Math.round((totalCollected * ratePercent) / 100)
      },
      hourly: {
        label: 'Tarif horaire (par heure)',
        rate: tarifHeure,
        unit: 'DA/h',
        base: hoursPerMonth,
        amount: Math.round(tarifHeure * hoursPerMonth)
      },
      per_session: {
        label: 'Tarif par séance',
        rate: tarifSeance,
        unit: 'DA/séance',
        base: sessionsPerMonth,
        amount: Math.round(tarifSeance * sessionsPerMonth)
      },
      fixed_salary: {
        label: 'Salaire mensuel fixe',
        rate: salaireFixe,
        unit: 'DA',
        base: 1,
        amount: Math.round(salaireFixe)
      },
      hourly_per_student: {
        label: 'Horaire × Nombre d’élèves',
        rate: tarifHeure,
        unit: 'DA/h/élève',
        base: hoursPerMonth * totalStudents,
        amount: Math.round(tarifHeure * hoursPerMonth * totalStudents)
      },
      session_per_student: {
        label: 'Par séance × Nombre d’élèves',
        rate: tarifSeance,
        unit: 'DA/séance/élève',
        base: sessionsPerMonth * totalStudents,
        amount: Math.round(tarifSeance * sessionsPerMonth * totalStudents)
      },
      percent_per_student: {
        label: 'Pourcentage par élève',
        rate: ratePercent,
        unit: '%/élève',
        base: totalCollected,
        amount: Math.round((totalCollected * ratePercent) / 100)
      },
      fixed_per_student: {
        label: 'Forfait fixe par élève inscrit',
        rate: tarifParEleve,
        unit: 'DA/élève',
        base: totalStudents,
        amount: Math.round(tarifParEleve * totalStudents)
      }
    };

    // Past payouts for this teacher
    const payoutsHistory = DB.queryAll(`
      SELECT * FROM teacher_payouts
      WHERE teacher_id = ?
      ORDER BY id DESC
      LIMIT 15
    `, [id]);

    res.json({
      success: true,
      teacher,
      month: currentMonth,
      groupsData,
      totalCollected,
      totalStudents,
      sessionsPerMonth,
      hoursPerMonth,
      modes,
      payoutsHistory
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Teacher Payout and Automatic Caisse Outflow
app.post('/api/teachers/payout', (req, res) => {
  try {
    const {
      teacher_id,
      period,
      remuneration_mode,
      base_calculation,
      rate_value,
      students_count,
      sessions_count,
      hours_count,
      total_collected,
      teacher_share_percent,
      paid_amount,
      payment_method,
      notes
    } = req.body;

    if (!teacher_id) return res.status(400).json({ success: false, error: 'Enseignant requis' });
    const amount = parseFloat(paid_amount);
    if (!amount || amount <= 0) return res.status(400).json({ success: false, error: 'Montant invalide' });

    const teacher = DB.queryOne("SELECT * FROM teachers WHERE id = ?", [teacher_id]);
    if (!teacher) return res.status(404).json({ success: false, error: 'Enseignant non trouvé' });

    const periodStr = period || new Date().toISOString().slice(0, 7);
    const nowP = new Date();
    const curDate = nowP.toISOString().split('T')[0];
    const curTime = nowP.toTimeString().split(' ')[0];

    // 1. Insert into teacher_payouts
    const payoutResult = DB.run(`
      INSERT INTO teacher_payouts
        (teacher_id, period, remuneration_mode, base_calculation, rate_value, students_count, sessions_count, hours_count, total_collected, teacher_share_percent, teacher_share_amount, paid_amount, payout_date, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?)
    `, [
      teacher_id,
      periodStr,
      remuneration_mode || 'percent',
      parseFloat(base_calculation) || 0,
      parseFloat(rate_value) || 0,
      parseInt(students_count) || 0,
      parseInt(sessions_count) || 0,
      parseFloat(hours_count) || 0,
      parseFloat(total_collected) || 0,
      parseFloat(teacher_share_percent) || 0,
      amount,
      amount,
      notes || null
    ]);

    const payoutId = payoutResult.lastInsertRowid;
    const receiptRef = `PAY-${nowP.getFullYear()}-${String(payoutId).padStart(4, '0')}`;

    // 2. Automatic Caisse Outflow
    const caisseRes = DB.run(`
      INSERT INTO caisse (type, category, amount, title, reference, payment_method, teacher_payout_id, user_name, movement_date, movement_time)
      VALUES ('sortie', 'Salaire enseignant', ?, ?, ?, ?, ?, 'Secrétariat', ?, ?)
    `, [
      amount,
      `Règlement honoraires ${teacher.first_name} ${teacher.last_name} (${periodStr})`,
      receiptRef,
      payment_method || 'espece',
      payoutId,
      curDate,
      curTime
    ]);

    DB.run("UPDATE teacher_payouts SET caisse_id = ? WHERE id = ?", [caisseRes.lastInsertRowid, payoutId]);

    const payout = DB.queryOne(`
      SELECT tp.*, t.first_name, t.last_name, t.matricule, t.phone, sub.name as subject_name
      FROM teacher_payouts tp
      JOIN teachers t ON tp.teacher_id = t.id
      LEFT JOIN subjects sub ON t.subject_id = sub.id
      WHERE tp.id = ?
    `, [payoutId]);

    res.json({
      success: true,
      payout,
      receiptRef,
      message: `Honoraires de ${amount.toLocaleString('fr-DZ')} DA enregistrés avec succès`
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Past payouts list for a teacher
app.get('/api/teachers/:id/payouts', (req, res) => {
  try {
    const payouts = DB.queryAll(`
      SELECT tp.*, c.payment_method
      FROM teacher_payouts tp
      LEFT JOIN caisse c ON tp.caisse_id = c.id
      WHERE tp.teacher_id = ?
      ORDER BY tp.id DESC
    `, [req.params.id]);
    res.json({ success: true, payouts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 7. CAISSE (TREASURY) & EXPENSES - COMPREHENSIVE ENGINE
// -------------------------------------------------------------
app.get('/api/caisse/summary', (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const currentMonth = new Date().toISOString().slice(0, 7);

    // Today's movements
    const todayIn = DB.queryOne("SELECT COALESCE(SUM(amount), 0) as total FROM caisse WHERE type = 'entree' AND movement_date = ?", [today]).total;
    const todayOut = DB.queryOne("SELECT COALESCE(SUM(amount), 0) as total FROM caisse WHERE type = 'sortie' AND movement_date = ?", [today]).total;

    // Current Month movements
    const monthIn = DB.queryOne("SELECT COALESCE(SUM(amount), 0) as total FROM caisse WHERE type = 'entree' AND strftime('%Y-%m', movement_date) = ?", [currentMonth]).total;
    const monthOut = DB.queryOne("SELECT COALESCE(SUM(amount), 0) as total FROM caisse WHERE type = 'sortie' AND strftime('%Y-%m', movement_date) = ?", [currentMonth]).total;

    // All-time totals & Net Balance
    const totalIn = DB.queryOne("SELECT COALESCE(SUM(amount), 0) as total FROM caisse WHERE type = 'entree'").total;
    const totalOut = DB.queryOne("SELECT COALESCE(SUM(amount), 0) as total FROM caisse WHERE type = 'sortie'").total;
    const soldeNet = totalIn - totalOut;

    // Category breakdown
    const categoriesIn = DB.queryAll("SELECT category, COALESCE(SUM(amount), 0) as total, COUNT(*) as count FROM caisse WHERE type = 'entree' GROUP BY category ORDER BY total DESC");
    const categoriesOut = DB.queryAll("SELECT category, COALESCE(SUM(amount), 0) as total, COUNT(*) as count FROM caisse WHERE type = 'sortie' GROUP BY category ORDER BY total DESC");

    res.json({
      success: true,
      today: {
        income: todayIn,
        expenses: todayOut,
        balance: todayIn - todayOut
      },
      month: {
        income: monthIn,
        expenses: monthOut,
        balance: monthIn - monthOut
      },
      allTime: {
        totalIncome: totalIn,
        totalExpenses: totalOut,
        soldeNet
      },
      categoriesIn,
      categoriesOut
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Caisse full movements log with filters
app.get('/api/caisse/movements', (req, res) => {
  try {
    const { type, category, from, to, search, limit } = req.query;
    let sql = `
      SELECT c.*,
             COALESCE(s.first_name || ' ' || s.last_name, t.first_name || ' ' || t.last_name, c.user_name) as person_name
      FROM caisse c
      LEFT JOIN payments p ON c.payment_id = p.id
      LEFT JOIN students s ON p.student_id = s.id
      LEFT JOIN teacher_payouts tp ON c.teacher_payout_id = tp.id
      LEFT JOIN teachers t ON tp.teacher_id = t.id
      WHERE 1 = 1
    `;
    const params = [];

    if (type && type !== 'all') {
      sql += ` AND c.type = ?`;
      params.push(type);
    }
    if (category && category !== 'all') {
      sql += ` AND c.category = ?`;
      params.push(category);
    }
    if (from) {
      sql += ` AND c.movement_date >= ?`;
      params.push(from);
    }
    if (to) {
      sql += ` AND c.movement_date <= ?`;
      params.push(to);
    }
    if (search) {
      sql += ` AND (c.title LIKE ? OR c.reference LIKE ? OR c.category LIKE ?)`;
      const s = `%${search}%`;
      params.push(s, s, s);
    }

    sql += ` ORDER BY c.movement_date DESC, c.id DESC LIMIT ?`;
    params.push(parseInt(limit) || 100);

    const movements = DB.queryAll(sql, params);
    res.json({ success: true, movements });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Add manual caisse movement (Inflow or Outflow)
app.post('/api/caisse/add', (req, res) => {
  try {
    const { type, category, amount, title, reference, payment_method, user_name, movement_date } = req.body;
    if (!['entree', 'sortie'].includes(type)) {
      return res.status(400).json({ success: false, error: 'Type invalide (entree ou sortie requis)' });
    }
    const val = parseFloat(amount);
    if (!val || val <= 0) {
      return res.status(400).json({ success: false, error: 'Montant invalide' });
    }
    if (!title) {
      return res.status(400).json({ success: false, error: 'Titre / Désignation requise' });
    }

    const now = new Date();
    const dateM = movement_date || now.toISOString().split('T')[0];
    const timeM = now.toTimeString().split(' ')[0];

    const result = DB.run(`
      INSERT INTO caisse (type, category, amount, title, reference, payment_method, user_name, movement_date, movement_time)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      type,
      category || (type === 'entree' ? 'Autre entrée' : 'Autre dépense'),
      val,
      title,
      reference || (type === 'entree' ? `REC-M-${Date.now().toString().slice(-4)}` : `DEP-M-${Date.now().toString().slice(-4)}`),
      payment_method || 'espece',
      user_name || 'Secrétariat',
      dateM,
      timeM
    ]);

    // Also record into legacy expenses table if it's a sortie so legacy widgets don't break
    if (type === 'sortie') {
      try {
        DB.run(`
          INSERT INTO expenses (title, category, amount, expense_date, notes)
          VALUES (?, ?, ?, ?, ?)
        `, [title, category || 'Autre', val, dateM, reference]);
      } catch (e) {}
    }

    const newMovement = DB.queryOne("SELECT * FROM caisse WHERE id = ?", [result.lastInsertRowid]);
    res.json({ success: true, movement: newMovement });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete caisse movement
app.delete('/api/caisse/:id', (req, res) => {
  try {
    DB.run("DELETE FROM caisse WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: 'Mouvement supprimé' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Legacy expenses POST for compatibility
app.post('/api/expenses', (req, res) => {
  try {
    const { title, category, amount, notes, expense_date } = req.body;
    const date = expense_date || new Date().toISOString().split('T')[0];
    const val = parseFloat(amount) || 0;

    const result = DB.run(`
      INSERT INTO expenses (title, category, amount, expense_date, notes)
      VALUES (?, ?, ?, ?, ?)
    `, [title, category || 'Autre', val, date, notes]);

    // Mirror to caisse
    const now = new Date();
    DB.run(`
      INSERT INTO caisse (type, category, amount, title, reference, payment_method, expense_id, user_name, movement_date, movement_time)
      VALUES ('sortie', ?, ?, ?, ?, 'espece', ?, 'Secrétariat', ?, ?)
    `, [category || 'Autre', val, title, `DEP-${result.lastInsertRowid}`, result.lastInsertRowid, date, now.toTimeString().split(' ')[0]]);

    res.json({ success: true, expenseId: result.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 8. CONFIGURATION (LEVELS, SUBJECTS, ROOMS, SETTINGS & BACKUP)
// -------------------------------------------------------------
app.get('/api/levels', (req, res) => {
  const levels = DB.queryAll("SELECT * FROM levels ORDER BY display_order ASC");
  res.json({ success: true, levels });
});

app.post('/api/levels', (req, res) => {
  try {
    const { name, category, display_order } = req.body;
    const result = DB.run(
      "INSERT INTO levels (name, category, display_order) VALUES (?, ?, ?)",
      [name, category || 'CEM', display_order || 0]
    );
    res.json({ success: true, levelId: result.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/levels/:id', (req, res) => {
  try {
    const { name, category, display_order } = req.body;
    DB.run("UPDATE levels SET name = ?, category = ?, display_order = ? WHERE id = ?",
      [name, category || 'CEM', display_order || 0, req.params.id]);
    res.json({ success: true, message: 'Niveau mis à jour' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/levels/:id', (req, res) => {
  try {
    DB.run("DELETE FROM levels WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/subjects', (req, res) => {
  const subjects = DB.queryAll("SELECT * FROM subjects ORDER BY name ASC");
  res.json({ success: true, subjects });
});

app.post('/api/subjects', (req, res) => {
  try {
    const { name, code, color } = req.body;
    const result = DB.run(
      "INSERT INTO subjects (name, code, color) VALUES (?, ?, ?)",
      [name, code || name.slice(0, 4).toUpperCase(), color || '#3b82f6']
    );
    res.json({ success: true, subjectId: result.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/subjects/:id', (req, res) => {
  try {
    const { name, code, color } = req.body;
    DB.run("UPDATE subjects SET name = ?, code = ?, color = ? WHERE id = ?",
      [name, code, color, req.params.id]);
    res.json({ success: true, message: 'Matière mise à jour' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/subjects/:id', (req, res) => {
  try {
    DB.run("DELETE FROM subjects WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/rooms', (req, res) => {
  try {
    const rooms = DB.queryAll(`
      SELECT r.*,
        (SELECT COUNT(*) FROM groups g WHERE g.room_id = r.id AND g.active = 1) as active_groups_count,
        (SELECT GROUP_CONCAT(DISTINCT sub.name) 
         FROM groups g 
         JOIN subjects sub ON g.subject_id = sub.id 
         WHERE g.room_id = r.id AND g.active = 1) as subjects_list,
        (SELECT COUNT(DISTINCT g.day_of_week) FROM groups g WHERE g.room_id = r.id AND g.active = 1) as occupied_days_count
      FROM rooms r
      ORDER BY r.name ASC
    `);
    res.json({ success: true, rooms });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/rooms/:id/schedule', (req, res) => {
  try {
    const roomId = req.params.id;
    const room = DB.queryOne("SELECT * FROM rooms WHERE id = ?", [roomId]);
    if (!room) {
      return res.status(404).json({ success: false, message: "Salle introuvable" });
    }

    const groups = DB.queryAll(`
      SELECT g.id, g.name, g.day_of_week, g.start_time, g.end_time, g.max_students,
             COALESCE(l.name, 'Sans niveau') as level_name,
             COALESCE(sub.name, 'Sans matière') as subject_name,
             COALESCE(sub.color, '#3b82f6') as subject_color,
             COALESCE(t.first_name || ' ' || t.last_name, 'Non assigné') as teacher_name,
             (SELECT COUNT(*) FROM enrollments WHERE group_id = g.id AND status = 'active') as enrolled_count
      FROM groups g
      LEFT JOIN levels l ON g.level_id = l.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      WHERE g.room_id = ? AND g.active = 1
      ORDER BY 
        CASE g.day_of_week
          WHEN 'Samedi' THEN 1
          WHEN 'Dimanche' THEN 2
          WHEN 'Lundi' THEN 3
          WHEN 'Mardi' THEN 4
          WHEN 'Mercredi' THEN 5
          WHEN 'Jeudi' THEN 6
          WHEN 'Vendredi' THEN 7
          ELSE 8
        END,
        g.start_time ASC
    `, [roomId]);

    res.json({ success: true, room, schedule: groups });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/rooms', (req, res) => {
  try {
    const { name, capacity, has_projector, notes } = req.body;
    const result = DB.run(
      "INSERT INTO rooms (name, capacity, has_projector, notes) VALUES (?, ?, ?, ?)",
      [name, capacity || 25, has_projector ? 1 : 0, notes || '']
    );
    res.json({ success: true, roomId: result.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/rooms/:id', (req, res) => {
  try {
    const { name, capacity, has_projector, notes } = req.body;
    DB.run("UPDATE rooms SET name = ?, capacity = ?, has_projector = ?, notes = ? WHERE id = ?",
      [name, capacity, has_projector ? 1 : 0, notes || '', req.params.id]);
    res.json({ success: true, message: 'Salle mise à jour' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/rooms/:id', (req, res) => {
  try {
    DB.run("DELETE FROM rooms WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/teachers/:id', (req, res) => {
  try {
    DB.run("UPDATE teachers SET active = 0 WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/groups/:id', (req, res) => {
  try {
    DB.run("UPDATE groups SET active = 0 WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/settings', (req, res) => {
  const rows = DB.queryAll("SELECT * FROM settings");
  const settings = {};
  rows.forEach(r => { settings[r.key] = r.value; });
  res.json({ success: true, settings });
});

app.post('/api/settings', (req, res) => {
  try {
    const entries = Object.entries(req.body);
    for (const [key, value] of entries) {
      DB.run("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)", [key, String(value)]);
    }
    res.json({ success: true, message: 'Paramètres enregistrés' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// AUTHENTICATION API
// -------------------------------------------------------------
app.post('/api/auth/login', (req, res) => {
  try {
    const { role = 'admin', password } = req.body;
    if (!password || typeof password !== 'string' || !password.trim()) {
      return res.status(400).json({ success: false, error: 'Mot de passe obligatoire' });
    }
    const adminPass = DB.queryOne("SELECT value FROM settings WHERE key = 'admin_password'")?.value || 'admin';
    if (password !== adminPass) {
      return res.status(401).json({ success: false, error: 'Mot de passe incorrect' });
    }
    const schoolName = DB.queryOne("SELECT value FROM settings WHERE key = 'school_name'")?.value || 'EDUMIND ACADEMY';
    res.json({
      success: true,
      user: {
        role: 'admin',
        name: 'Administrateur',
        schoolName
      },
      token: 'session_' + Date.now() + '_' + Math.random().toString(36).substring(2)
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/auth/verify', (req, res) => {
  res.json({ success: true });
});

app.post('/api/settings/change-password', (req, res) => {
  try {
    const { old_password, new_password } = req.body;
    const currentPass = DB.queryOne("SELECT value FROM settings WHERE key = 'admin_password'")?.value || 'admin';
    if (old_password && old_password !== currentPass) {
      return res.status(400).json({ success: false, error: 'Mot de passe actuel incorrect' });
    }
    if (!new_password || new_password.length < 4) {
      return res.status(400).json({ success: false, error: 'Le mot de passe doit comporter au moins 4 caractères' });
    }
    DB.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('admin_password', ?)", [new_password]);
    res.json({ success: true, message: 'Mot de passe modifié avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Database Backup Endpoints
app.get('/api/backup/download', (req, res) => {
  const dateStr = new Date().toISOString().split('T')[0];
  const tempBackup = path.join(__dirname, `temp_backup_${Date.now()}.sqlite`);
  try {
    if (typeof DB.createInstantBackup === 'function') {
      DB.createInstantBackup(tempBackup);
      res.download(tempBackup, `EDUMIND_Backup_${dateStr}.sqlite`, () => {
        if (fs.existsSync(tempBackup)) {
          try { fs.unlinkSync(tempBackup); } catch (e) {}
        }
      });
    } else {
      const dbFile = path.join(__dirname, 'edumind.sqlite');
      res.download(dbFile, `EDUMIND_Backup_${dateStr}.sqlite`);
    }
  } catch (err) {
    console.error('Erreur téléchargement backup:', err);
    const dbFile = path.join(__dirname, 'edumind.sqlite');
    if (fs.existsSync(dbFile)) {
      res.download(dbFile, `EDUMIND_Backup_${dateStr}.sqlite`);
    } else {
      res.status(500).send('Erreur: ' + err.message);
    }
  }
});

// List existing daily backups in the archives
app.get('/api/backup/list', (req, res) => {
  try {
    const backupDir = path.join(__dirname, 'backups');
    if (!fs.existsSync(backupDir)) {
      return res.json({ success: true, backups: [] });
    }
    const files = fs.readdirSync(backupDir)
      .filter(f => f.startsWith('edumind_backup_') && f.endsWith('.sqlite'))
      .map(f => {
        const filePath = path.join(backupDir, f);
        const stats = fs.statSync(filePath);
        return {
          filename: f,
          sizeKb: Math.round(stats.size / 1024),
          createdAt: stats.mtime,
          dateStr: f.replace('edumind_backup_', '').replace('.sqlite', '')
        };
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json({ success: true, backups: files });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Download a specific archive backup file
app.get('/api/backup/download-archive/:filename', (req, res) => {
  const fileName = path.basename(req.params.filename);
  const filePath = path.join(__dirname, 'backups', fileName);
  if (fs.existsSync(filePath) && fileName.startsWith('edumind_backup_') && fileName.endsWith('.sqlite')) {
    res.download(filePath, fileName);
  } else {
    res.status(404).send('Fichier d\'archive non trouvé');
  }
});

// Trigger an immediate manual backup
app.post('/api/backup/now', (req, res) => {
  try {
    if (typeof DB.performAutoBackup === 'function') {
      DB.performAutoBackup(7);
      res.json({ success: true, message: 'Sauvegarde effectuée avec succès' });
    } else {
      res.json({ success: false, message: 'Module de sauvegarde non prêt' });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Serve frontend for all client routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 EDUMIND Server listening on http://localhost:${PORT}`);
});
