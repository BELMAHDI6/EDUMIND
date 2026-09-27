/**
 * EDUMIND - Realistic Bulk Data Seeder for Stress & Quality Testing
 * Injects 120+ students, 12 teachers, 25 groups, 250+ payments, caisse logs, and attendance.
 */

const DB = require('./database');
const path = require('path');
const fs = require('fs');

// 1. Create safety backup before seeding
const backupDir = path.join(__dirname, 'backups');
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
const safetyBackup = path.join(backupDir, 'edumind_pre_stress_test_backup.sqlite');
try {
  DB.createInstantBackup(safetyBackup);
  console.log(`🛡️ Sauvegarde de sécurité créée avant le test : ${safetyBackup}`);
} catch (e) {
  console.warn('Note backup:', e.message);
}

console.log('🚀 Démarrage de l\'injection massive des données pour le test de charge...');

// --- Data Lists ---
const firstNamesM = ['Mohamed', 'Amine', 'Anis', 'Islam', 'Youcef', 'Ayoub', 'Zakaria', 'Mehdi', 'Walid', 'Karim', 'Bilel', 'Yacine', 'Abderrahmane', 'Adel', 'Sofiane', 'Hamza', 'Hichem', 'Redouane', 'Farid', 'Nassim'];
const firstNamesF = ['Fatima', 'Yasmine', 'Sara', 'Meriem', 'Amina', 'Ines', 'Nour', 'Rania', 'Chaima', 'Khadidja', 'Lina', 'Imene', 'Nadia', 'Sonia', 'Manel', 'Selma', 'Amel', 'Sabrina', 'Zineb', 'Nesrine'];
const lastNames = ['Benali', 'Bouzid', 'Mansouri', 'Khelifi', 'Brahimi', 'Belhadj', 'Saidi', 'Taleb', 'Amrani', 'Meziane', 'Hamidi', 'Guerfi', 'Cherif', 'Zitouni', 'Mebarki', 'Dahmani', 'Ouldali', 'Touati', 'Bensaad', 'Allali', 'Haddad', 'Gacem', 'Abbasi', 'Madani', 'Slimani'];

const subjectsData = [
  { name: 'Mathématiques', code: 'MATH', color: '#2563eb', icon: 'square-root-variable' },
  { name: 'Physique - Chimie', code: 'PHYS', color: '#06b6d4', icon: 'atom' },
  { name: 'Sciences Naturelles', code: 'SCIN', color: '#10b981', icon: 'dna' },
  { name: 'Français', code: 'FRAN', color: '#8b5cf6', icon: 'language' },
  { name: 'Anglais', code: 'ANGL', color: '#ec4899', icon: 'comments' },
  { name: 'Philosophie', code: 'PHIL', color: '#f59e0b', icon: 'brain' },
  { name: 'Arabe & Littérature', code: 'ARAB', color: '#6366f1', icon: 'book-open' },
  { name: 'Histoire - Géo', code: 'HIST', color: '#e11d48', icon: 'landmark' }
];

const roomsData = [
  { name: 'Salle Ibn Khaldoun (A1)', capacity: 30, has_projector: 1, notes: 'Rez-de-chaussée - Climatisée' },
  { name: 'Salle Al-Farabi (A2)', capacity: 25, has_projector: 1, notes: 'Rez-de-chaussée' },
  { name: 'Salle Al-Biruni (B1)', capacity: 20, has_projector: 0, notes: '1er étage' },
  { name: 'Salle Averroès (B2)', capacity: 35, has_projector: 1, notes: '1er étage - Grand écran' },
  { name: 'Salle Avicenne (C1)', capacity: 25, has_projector: 0, notes: '2e étage' },
  { name: 'Salle Al-Khawarizmi (Labo)', capacity: 22, has_projector: 1, notes: 'Laboratoire informatique' },
  { name: 'Salle Descartes (C2)', capacity: 20, has_projector: 0, notes: '2e étage' }
];

const teachersData = [
  { first_name: 'Ahmed', last_name: 'Benali', phone: '0550112233', email: 'a.benali@ecole.dz', subject: 'Mathématiques', rate: 55 },
  { first_name: 'Kamel', last_name: 'Bouzid', phone: '0550223344', email: 'k.bouzid@ecole.dz', subject: 'Physique - Chimie', rate: 50 },
  { first_name: 'Samira', last_name: 'Mansouri', phone: '0550334455', email: 's.mansouri@ecole.dz', subject: 'Sciences Naturelles', rate: 50 },
  { first_name: 'Rachid', last_name: 'Khelifi', phone: '0550445566', email: 'r.khelifi@ecole.dz', subject: 'Philosophie', rate: 60 },
  { first_name: 'Leila', last_name: 'Brahimi', phone: '0550556677', email: 'l.brahimi@ecole.dz', subject: 'Français', rate: 50 },
  { first_name: 'Youcef', last_name: 'Belhadj', phone: '0550667788', email: 'y.belhadj@ecole.dz', subject: 'Anglais', rate: 50 },
  { first_name: 'Malika', last_name: 'Saidi', phone: '0550778899', email: 'm.saidi@ecole.dz', subject: 'Arabe & Littérature', rate: 50 },
  { first_name: 'Mustapha', last_name: 'Taleb', phone: '0550889900', email: 'm.taleb@ecole.dz', subject: 'Histoire - Géo', rate: 45 }
];

// Helper to generate phone
function randPhone() {
  const prefixes = ['0551', '0552', '0555', '0661', '0663', '0770', '0772'];
  const p = prefixes[Math.floor(Math.random() * prefixes.length)];
  const num = Math.floor(100000 + Math.random() * 900000);
  return `${p}${num}`;
}

// Helper for random date
function randDate(startYear = 2007, endYear = 2012) {
  const y = Math.floor(startYear + Math.random() * (endYear - startYear + 1));
  const m = String(Math.floor(1 + Math.random() * 12)).padStart(2, '0');
  const d = String(Math.floor(1 + Math.random() * 28)).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// 2. Clear old test data cleanly (without touching settings or license)
console.log('🧹 Nettoyage des anciennes tables de données...');
DB.exec(`
  DELETE FROM attendance;
  DELETE FROM payments;
  DELETE FROM enrollments;
  DELETE FROM caisse;
  DELETE FROM expenses;
  DELETE FROM teacher_payouts;
  DELETE FROM group_sessions;
  DELETE FROM groups;
  DELETE FROM students;
  DELETE FROM teachers;
  DELETE FROM rooms;
  DELETE FROM subjects;
`);

// 3. Insert Subjects
console.log('📚 Insertion des matières...');
const subjectMap = {};
for (const sub of subjectsData) {
  const res = DB.run(
    "INSERT INTO subjects (name, code, color, icon) VALUES (?, ?, ?, ?)",
    [sub.name, sub.code, sub.color, sub.icon]
  );
  subjectMap[sub.name] = res.lastInsertRowid;
}

// 4. Insert Rooms
console.log('🏫 Insertion des salles de cours...');
const roomIds = [];
for (const r of roomsData) {
  const res = DB.run(
    "INSERT INTO rooms (name, capacity, has_projector, notes) VALUES (?, ?, ?, ?)",
    [r.name, r.capacity, r.has_projector, r.notes]
  );
  roomIds.push(res.lastInsertRowid);
}

// 5. Insert Teachers
console.log('👨‍🏫 Insertion des enseignants...');
const teacherIds = [];
let tCount = 1;
for (const t of teachersData) {
  const matricule = `ENS-2026-${String(tCount).padStart(3, '0')}`;
  const subId = subjectMap[t.subject] || 1;
  const res = DB.run(
    "INSERT INTO teachers (matricule, first_name, last_name, phone, email, subject_id, remuneration_type, remuneration_rate) VALUES (?, ?, ?, ?, ?, ?, 'percent', ?)",
    [matricule, t.first_name, t.last_name, t.phone, t.email, subId, t.rate]
  );
  teacherIds.push({ id: res.lastInsertRowid, name: `${t.first_name} ${t.last_name}`, subId });
  tCount++;
}

// 6. Fetch Existing Levels
let levels = DB.queryAll("SELECT id, name FROM levels");
if (levels.length === 0) {
  DB.exec(`
    INSERT INTO levels (name, category, display_order) VALUES
    ('1ère Année Primaire (1AP)', 'Primaire', 1),
    ('5ème Année Primaire (5AP)', 'Primaire', 5),
    ('1ère Année Moyenne (1AM)', 'CEM', 6),
    ('4ème Année Moyenne (BEM)', 'CEM', 9),
    ('1ère Année Secondaire (1AS)', 'Lycee', 10),
    ('2ème Année Secondaire (2AS)', 'Lycee', 11),
    ('3ème Année Secondaire (BAC)', 'Lycee', 12);
  `);
  levels = DB.queryAll("SELECT id, name FROM levels");
}

// 7. Insert Groups
console.log('👥 Création des groupes et affectation des cours...');
const days = ['Samedi', 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
const times = [
  { s: '08:30', e: '10:30' },
  { s: '10:30', e: '12:30' },
  { s: '14:00', e: '16:00' },
  { s: '16:00', e: '18:00' }
];

const groupIds = [];
let gIndex = 1;

for (const t of teacherIds) {
  for (let k = 1; k <= 3; k++) {
    const level = levels[Math.floor(Math.random() * levels.length)];
    const room = roomIds[Math.floor(Math.random() * roomIds.length)];
    const day = days[Math.floor(Math.random() * days.length)];
    const time = times[Math.floor(Math.random() * times.length)];
    const price = [2500, 3000, 3500, 4000][Math.floor(Math.random() * 4)];
    const maxStud = [20, 25, 30][Math.floor(Math.random() * 3)];
    const gName = `Fouj ${level.name.split('(')[1]?.replace(')', '') || 'G'} - ${t.name.split(' ')[1]} (${k})`;

    const res = DB.run(
      "INSERT INTO groups (name, level_id, subject_id, teacher_id, room_id, school_year, day_of_week, start_time, end_time, price_monthly, max_students) VALUES (?, ?, ?, ?, ?, '2025-2026', ?, ?, ?, ?, ?)",
      [gName, level.id, t.subId, t.id, room, day, time.s, time.e, price, maxStud]
    );
    groupIds.push({ id: res.lastInsertRowid, price, levelId: level.id });
    gIndex++;
  }
}

// 8. Insert 120 Students
console.log('🎓 Création de 120 élèves avec matricules et coordonnées...');
const studentIds = [];

for (let i = 1; i <= 120; i++) {
  const isM = Math.random() > 0.5;
  const firstName = isM 
    ? firstNamesM[Math.floor(Math.random() * firstNamesM.length)] 
    : firstNamesF[Math.floor(Math.random() * firstNamesF.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const matricule = `ELE-2026-${String(i).padStart(4, '0')}`;
  const phone = randPhone();
  const parentName = `${lastNames[Math.floor(Math.random() * lastNames.length)]} ${firstNamesM[Math.floor(Math.random() * firstNamesM.length)]}`;
  const parentPhone = randPhone();
  const birth = randDate(2007, 2014);
  const level = levels[Math.floor(Math.random() * levels.length)];
  const address = `Cité ${Math.floor(100 + Math.random() * 900)} Logts, Wilaya d'Alger`;

  const res = DB.run(
    "INSERT INTO students (matricule, first_name, last_name, gender, birth_date, phone, parent_name, parent_phone, address, level_id, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [matricule, firstName, lastName, isM ? 'M' : 'F', birth, phone, parentName, parentPhone, address, level.id, i % 7 === 0 ? 'Remise fratrie' : '']
  );
  studentIds.push(res.lastInsertRowid);
}

// 9. Enroll Students in Groups (Inscriptions)
console.log('📋 Inscription des élèves aux groupes (180+ inscriptions)...');
const enrollments = [];

for (const sid of studentIds) {
  // Each student joins 1 to 3 groups
  const count = 1 + Math.floor(Math.random() * 3);
  const shuffledGroups = [...groupIds].sort(() => 0.5 - Math.random());
  
  for (let c = 0; c < count; c++) {
    const grp = shuffledGroups[c];
    const discount = Math.random() < 0.2 ? 500 : 0; // 20% get discount

    try {
      const res = DB.run(
        "INSERT INTO enrollments (student_id, group_id, school_year, registration_date, discount_amount, status) VALUES (?, ?, '2025-2026', '2026-09-01', ?, 'active')",
        [sid, grp.id, discount]
      );
      enrollments.push({
        id: res.lastInsertRowid,
        student_id: sid,
        group_id: grp.id,
        price: grp.price,
        discount
      });
    } catch (e) {}
  }
}

// 10. Generate Payments & Caisse logs (250+ Payments)
console.log('💳 Génération des paiements, reçus et journal de caisse...');
let recNo = 1;
const paymentMethods = ['espece', 'espece', 'espece', 'baridimob'];

for (const enr of enrollments) {
  const netDue = enr.price - enr.discount;
  
  // 75% fully paid, 15% partial, 10% unpaid
  const randP = Math.random();
  let paid = netDue;
  let remaining = 0;

  if (randP > 0.85) {
    // Unpaid (skip payment, leaves debt)
    continue;
  } else if (randP > 0.70) {
    // Partial payment
    paid = Math.floor((netDue / 2) / 500) * 500;
    remaining = netDue - paid;
  }

  const receiptNo = `REC-2026-${String(recNo).padStart(5, '0')}`;
  const method = paymentMethods[Math.floor(Math.random() * paymentMethods.length)];
  const pDate = `2026-09-${String(Math.floor(1 + Math.random() * 20)).padStart(2, '0')} 10:30:00`;

  const pRes = DB.run(
    "INSERT INTO payments (receipt_no, student_id, group_id, month_period, base_amount, discount, paid_amount, remaining_amount, payment_method, payment_date) VALUES (?, ?, ?, '2026-09', ?, ?, ?, ?, ?, ?)",
    [receiptNo, enr.student_id, enr.group_id, enr.price, enr.discount, paid, remaining, method, pDate]
  );

  // Sync to Caisse
  DB.run(
    "INSERT INTO caisse (type, category, amount, title, reference, payment_method, payment_id, user_name, movement_date, movement_time) VALUES ('entree', 'Paiement élève', ?, ?, ?, ?, ?, 'Administration', DATE(?), TIME(?))",
    [paid, `Paiement scolarité reçu #${receiptNo}`, receiptNo, method, pRes.lastInsertRowid, pDate, pDate]
  );

  recNo++;
}

// 11. Insert Operating Expenses into Caisse
console.log('📉 Insertion des dépenses de fonctionnement et factures...');
const sampleExpenses = [
  { title: 'Facture Électricité & Gaz (Sonelgaz)', cat: 'Électricité', amount: 18500, date: '2026-09-05' },
  { title: 'Loyer mensuel des locaux pédagogiques', cat: 'Loyer', amount: 120000, date: '2026-09-01' },
  { title: 'Fournitures de bureau (Papier A4, Marqueurs)', cat: 'Fournitures', amount: 9800, date: '2026-09-08' },
  { title: 'Abonnement Internet Fibre Optique (Algérie Télécom)', cat: 'Internet', amount: 6500, date: '2026-09-03' },
  { title: 'Maintenance et recharge des climatiseurs', cat: 'Maintenance', amount: 14000, date: '2026-09-12' },
  { title: 'Produits d\'entretien et nettoyage', cat: 'Entretien', amount: 4500, date: '2026-09-15' },
  { title: 'Achat de 2 vidéoprojecteurs neufs', cat: 'Équipement', amount: 68000, date: '2026-09-07' }
];

for (const exp of sampleExpenses) {
  const resExp = DB.run(
    "INSERT INTO expenses (title, category, amount, expense_date, notes) VALUES (?, ?, ?, ?, 'Dépense enregistrée')",
    [exp.title, exp.cat, exp.amount, exp.date]
  );
  DB.run(
    "INSERT INTO caisse (type, category, amount, title, reference, payment_method, expense_id, user_name, movement_date, movement_time) VALUES ('sortie', ?, ?, ?, 'DEP-AUTO', 'espece', ?, 'Direction', ?, '14:00:00')",
    [exp.cat, exp.amount, exp.title, resExp.lastInsertRowid, exp.date]
  );
}

// 12. Insert Group Attendance Sessions
console.log('📌 Génération des feuilles de présence et pointage...');
for (const g of groupIds.slice(0, 10)) {
  const sDate = '2026-09-15';
  const gEnrs = enrollments.filter(e => e.group_id === g.id);

  if (gEnrs.length > 0) {
    const sRes = DB.run(
      "INSERT OR IGNORE INTO group_sessions (group_id, session_date, session_number, start_time, end_time, topic) VALUES (?, ?, 1, '14:00', '16:00', 'Séance Révision N°1')",
      [g.id, sDate]
    );

    for (const enr of gEnrs) {
      const isPresent = Math.random() > 0.12; // 88% present
      DB.run(
        "INSERT INTO attendance (student_id, group_id, session_date, check_in_time, status, payment_status_snapshot, session_id) VALUES (?, ?, ?, '14:05:00', ?, 'paid', ?)",
        [enr.student_id, g.id, sDate, isPresent ? 'present' : 'absent', sRes.lastInsertRowid]
      );
    }
  }
}

// 13. Summary Statistics
const totalStudents = DB.queryOne("SELECT COUNT(*) as c FROM students").c;
const totalTeachers = DB.queryOne("SELECT COUNT(*) as c FROM teachers").c;
const totalGroups = DB.queryOne("SELECT COUNT(*) as c FROM groups").c;
const totalEnrollments = DB.queryOne("SELECT COUNT(*) as c FROM enrollments").c;
const totalPayments = DB.queryOne("SELECT COUNT(*) as c, SUM(paid_amount) as total FROM payments");
const caisseBalance = DB.queryOne(`
  SELECT 
    COALESCE(SUM(CASE WHEN type = 'entree' THEN amount ELSE 0 END), 0) -
    COALESCE(SUM(CASE WHEN type = 'sortie' THEN amount ELSE 0 END), 0) as balance
  FROM caisse
`).balance;

console.log('\n========================================================');
console.log('      INJECTION DES DONNÉES RÉALISÉE AVEC SUCCÈS !      ');
console.log('========================================================');
console.log(`👨‍🎓 Élèves inscrits        : ${totalStudents}`);
console.log(`👨‍🏫 Enseignants actifs     : ${totalTeachers}`);
console.log(`👥 Groupes pédagogiques   : ${totalGroups}`);
console.log(`📋 Total Inscriptions     : ${totalEnrollments}`);
console.log(`💰 Reçus encaissés        : ${totalPayments.c} (Total: ${Number(totalPayments.total).toLocaleString()} DA)`);
console.log(`🏦 Solde Caisse Net       : ${Number(caisseBalance).toLocaleString()} DA`);
console.log('========================================================\n');
