const path = require('path');
const fs = require('fs');

// Use Node's built-in sqlite module (Node 22+) or sqlite3
let db;
try {
  const { DatabaseSync } = require('node:sqlite');
  const dbPath = path.join(__dirname, 'edumind.sqlite');
  db = new DatabaseSync(dbPath);
  // Enable foreign keys and WAL mode for maximum performance and reliability
  db.exec('PRAGMA journal_mode = WAL;');
  db.exec('PRAGMA foreign_keys = ON;');
  console.log('✅ SQLite Database connected via node:sqlite at:', dbPath);
} catch (err) {
  console.error('Failed to load node:sqlite, falling back...', err);
}

// Sanitize parameters to avoid node:sqlite binding errors (e.g., undefined or boolean)
function sanitizeParam(val) {
  if (val === undefined || (typeof val === 'number' && Number.isNaN(val))) return null;
  if (typeof val === 'boolean') return val ? 1 : 0;
  return val;
}

function sanitizeParams(params) {
  if (!params) return [];
  if (Array.isArray(params)) {
    return params.map(sanitizeParam);
  }
  return [sanitizeParam(params)];
}

// Backup Utilities
function createInstantBackup(targetFilePath) {
  if (fs.existsSync(targetFilePath)) {
    try { fs.unlinkSync(targetFilePath); } catch (e) {}
  }
  const safePath = targetFilePath.replace(/\\/g, '/');
  db.exec(`VACUUM INTO '${safePath}'`);
  return targetFilePath;
}

function cleanupOldBackups(backupDir, maxKeep = 7) {
  try {
    if (!fs.existsSync(backupDir)) return;
    const files = fs.readdirSync(backupDir)
      .filter(f => f.startsWith('edumind_backup_') && f.endsWith('.sqlite'))
      .map(f => {
        const filePath = path.join(backupDir, f);
        const stats = fs.statSync(filePath);
        return { name: f, path: filePath, time: stats.mtimeMs };
      })
      .sort((a, b) => b.time - a.time); // Newest first

    if (files.length > maxKeep) {
      const toDelete = files.slice(maxKeep);
      for (const item of toDelete) {
        fs.unlinkSync(item.path);
        console.log(`🧹 [Backup] Ancienne sauvegarde d'archive nettoyée (${maxKeep} conservées) : ${item.name}`);
      }
    }
  } catch (err) {
    console.error('⚠️ [Backup] Erreur nettoyage des anciennes sauvegardes :', err.message);
  }
}

function performAutoBackup(maxKeep = 7) {
  try {
    const backupDir = path.join(__dirname, 'backups');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    const today = new Date().toISOString().split('T')[0];
    const targetBackupFile = path.join(backupDir, `edumind_backup_${today}.sqlite`);

    // Take one daily backup snapshot automatically
    if (!fs.existsSync(targetBackupFile)) {
      createInstantBackup(targetBackupFile);
      console.log(`🛡️ [Backup] Sauvegarde automatique quotidienne créée : edumind_backup_${today}.sqlite`);
    } else {
      console.log(`ℹ️ [Backup] La sauvegarde automatique d'aujourd'hui est déjà prête (${today}).`);
    }

    // Retain only the last 7 daily archive copies
    cleanupOldBackups(backupDir, maxKeep);
  } catch (err) {
    console.error('⚠️ [Backup] Erreur lors de la sauvegarde automatique :', err.message);
  }
}

// Wrapper to provide clean helper methods: queryAll, queryOne, run
const DB = {
  exec: (sql) => db.exec(sql),
  queryAll: (sql, params = []) => {
    const stmt = db.prepare(sql);
    return stmt.all(...sanitizeParams(params));
  },
  queryOne: (sql, params = []) => {
    const stmt = db.prepare(sql);
    return stmt.get(...sanitizeParams(params));
  },
  run: (sql, params = []) => {
    const stmt = db.prepare(sql);
    return stmt.run(...sanitizeParams(params));
  },
  raw: db,
  createInstantBackup,
  cleanupOldBackups,
  performAutoBackup
};

// Initialize All Database Tables
function initDatabase() {
  db.exec(`
    -- Settings Table
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT
    );

    -- Levels (Niveaux)
    CREATE TABLE IF NOT EXISTS levels (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL DEFAULT 'CEM', -- Primaire, CEM, Lycee, Langues, Formation
      display_order INTEGER DEFAULT 0
    );

    -- Subjects (Matières)
    CREATE TABLE IF NOT EXISTS subjects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      code TEXT,
      color TEXT DEFAULT '#3b82f6',
      icon TEXT DEFAULT 'book'
    );

    -- Classrooms (Salles)
    CREATE TABLE IF NOT EXISTS rooms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      capacity INTEGER NOT NULL DEFAULT 25,
      has_projector INTEGER DEFAULT 0,
      notes TEXT
    );

    -- Teachers (Enseignants)
    CREATE TABLE IF NOT EXISTS teachers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      matricule TEXT UNIQUE,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      phone TEXT,
      email TEXT,
      subject_id INTEGER,
      remuneration_type TEXT DEFAULT 'percent', -- 'percent', 'fixed', 'hourly'
      remuneration_rate REAL DEFAULT 50.0,     -- e.g. 50%
      active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE SET NULL
    );

    -- Groups (Groupes / Classes)
    CREATE TABLE IF NOT EXISTS groups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      level_id INTEGER NOT NULL,
      subject_id INTEGER NOT NULL,
      teacher_id INTEGER NOT NULL,
      room_id INTEGER,
      school_year TEXT DEFAULT '2025-2026',
      day_of_week TEXT,                       -- 'Lundi', 'Mardi', etc.
      start_time TEXT,                        -- '14:00'
      end_time TEXT,                          -- '16:00'
      price_monthly REAL NOT NULL DEFAULT 2000, -- en DA
      max_students INTEGER DEFAULT 25,
      active INTEGER DEFAULT 1,
      FOREIGN KEY (level_id) REFERENCES levels(id),
      FOREIGN KEY (subject_id) REFERENCES subjects(id),
      FOREIGN KEY (teacher_id) REFERENCES teachers(id),
      FOREIGN KEY (room_id) REFERENCES rooms(id)
    );

    -- Students (Élèves)
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      matricule TEXT UNIQUE NOT NULL,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      gender TEXT DEFAULT 'M',                -- 'M' ou 'F'
      birth_date TEXT,
      phone TEXT,
      parent_name TEXT,
      parent_phone TEXT,
      address TEXT,
      level_id INTEGER,
      photo_url TEXT,
      qr_code TEXT,
      notes TEXT,
      active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (level_id) REFERENCES levels(id)
    );

    -- Enrollments (Inscriptions des élèves aux groupes)
    CREATE TABLE IF NOT EXISTS enrollments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER NOT NULL,
      group_id INTEGER NOT NULL,
      school_year TEXT DEFAULT '2025-2026',
      registration_date DATE DEFAULT (DATE('now')),
      discount_amount REAL DEFAULT 0,         -- Remise mensuelle accordée (ex: orphelin ou frères)
      status TEXT DEFAULT 'active',           -- 'active', 'suspended', 'cancelled'
      FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
      FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE,
      UNIQUE(student_id, group_id, school_year)
    );

    -- Payments (Paiements / Reçus)
    CREATE TABLE IF NOT EXISTS payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      receipt_no TEXT UNIQUE NOT NULL,
      student_id INTEGER NOT NULL,
      group_id INTEGER NOT NULL,
      month_period TEXT NOT NULL,             -- '2026-09' ou 'Septembre 2026'
      base_amount REAL NOT NULL,              -- Prix du cours
      discount REAL DEFAULT 0,
      paid_amount REAL NOT NULL,              -- Montant payé en DA
      remaining_amount REAL DEFAULT 0,        -- Reste dû en DA
      payment_method TEXT DEFAULT 'espece',   -- 'espece', 'baridimob', 'cheque'
      payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      notes TEXT,
      FOREIGN KEY (student_id) REFERENCES students(id),
      FOREIGN KEY (group_id) REFERENCES groups(id)
    );

    -- Attendance / Pointage (Pointage par code-barres / QR / Manuel)
    CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER NOT NULL,
      group_id INTEGER NOT NULL,
      session_date DATE NOT NULL,
      check_in_time TIME NOT NULL,
      status TEXT DEFAULT 'present',          -- 'present', 'late', 'absent', 'excused'
      payment_status_snapshot TEXT,           -- 'paid', 'due' au moment du pointage
      notes TEXT,
      session_id INTEGER,
      FOREIGN KEY (student_id) REFERENCES students(id),
      FOREIGN KEY (group_id) REFERENCES groups(id)
    );

    -- Group Sessions (Suivi des séances de cours par groupe: date, numéro, sujet)
    CREATE TABLE IF NOT EXISTS group_sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      group_id INTEGER NOT NULL,
      session_date DATE NOT NULL,
      session_number INTEGER DEFAULT 1,
      start_time TEXT,
      end_time TEXT,
      topic TEXT,
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE,
      UNIQUE(group_id, session_date)
    );

    -- Expenses / Dépenses
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      category TEXT DEFAULT 'Autre',          -- Loyer, Électricité, Fournitures, Salaire, etc.
      amount REAL NOT NULL,
      expense_date DATE DEFAULT (DATE('now')),
      notes TEXT
    );

    -- Caisse (Treasury Double-Entry Log: Entrees & Sorties)
    CREATE TABLE IF NOT EXISTS caisse (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL CHECK (type IN ('entree', 'sortie')),
      category TEXT NOT NULL,                -- 'Paiement élève', 'Salaire enseignant', 'Loyer', etc.
      amount REAL NOT NULL,
      title TEXT NOT NULL,
      reference TEXT,                        -- N° reçu, chèque, bon de caisse
      payment_method TEXT DEFAULT 'espece',  -- 'espece', 'baridimob', 'cheque', etc.
      payment_id INTEGER,
      teacher_payout_id INTEGER,
      expense_id INTEGER,
      user_name TEXT DEFAULT 'Secrétariat',
      movement_date DATE DEFAULT (DATE('now')),
      movement_time TIME,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_caisse_date ON caisse(movement_date);
    CREATE INDEX IF NOT EXISTS idx_caisse_type ON caisse(type);

    -- Teacher Remuneration Closures (Règlements des honoraires enseignants)
    CREATE TABLE IF NOT EXISTS teacher_payouts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      teacher_id INTEGER NOT NULL,
      group_id INTEGER,
      period TEXT NOT NULL,                   -- ex: '2026-09'
      remuneration_mode TEXT DEFAULT 'percent', -- 8 modes
      base_calculation REAL DEFAULT 0,
      rate_value REAL DEFAULT 0,
      students_count INTEGER DEFAULT 0,
      sessions_count INTEGER DEFAULT 0,
      hours_count REAL DEFAULT 0,
      total_collected REAL NOT NULL DEFAULT 0,
      teacher_share_percent REAL NOT NULL DEFAULT 50,
      teacher_share_amount REAL NOT NULL DEFAULT 0,
      paid_amount REAL NOT NULL DEFAULT 0,
      caisse_id INTEGER,
      payout_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      notes TEXT,
      FOREIGN KEY (teacher_id) REFERENCES teachers(id)
    );

    CREATE INDEX IF NOT EXISTS idx_students_matricule_nocase ON students(matricule COLLATE NOCASE);
    CREATE INDEX IF NOT EXISTS idx_students_qr_code_nocase ON students(qr_code COLLATE NOCASE);
    CREATE INDEX IF NOT EXISTS idx_teachers_matricule_nocase ON teachers(matricule COLLATE NOCASE);
  `);

  // Data consistency repair: ensure all students have qr_code synchronized with matricule
  try {
    db.exec("UPDATE students SET qr_code = matricule WHERE qr_code IS NULL OR qr_code = '';");
  } catch (e) {
    console.warn('Student qr_code sync warning:', e);
  }

  // Populate Default Settings if empty
  const schoolName = DB.queryOne("SELECT value FROM settings WHERE key = 'school_name'");
  if (!schoolName) {
    db.exec(`
      INSERT INTO settings (key, value) VALUES
      ('school_name', 'EDUMIND Academy'),
      ('school_phone', '0550 00 00 00'),
      ('school_address', 'Alger, Algérie'),
      ('active_year', '2025-2026'),
      ('currency', 'DA'),
      ('language', 'fr'),
      ('theme', 'dark');
    `);
  }

  // Populate Default Levels if empty
  const levelsCount = DB.queryOne("SELECT COUNT(*) as count FROM levels");
  if (levelsCount.count === 0) {
    db.exec(`
      INSERT INTO levels (name, category, display_order) VALUES
      ('1ère Année Primaire (1AP)', 'Primaire', 1),
      ('2ème Année Primaire (2AP)', 'Primaire', 2),
      ('3ème Année Primaire (3AP)', 'Primaire', 3),
      ('4ème Année Primaire (4AP)', 'Primaire', 4),
      ('5ème Année Primaire (5AP)', 'Primaire', 5),
      ('1ère Année Moyenne (1AM)', 'CEM', 6),
      ('2ème Année Moyenne (2AM)', 'CEM', 7),
      ('3ème Année Moyenne (3AM)', 'CEM', 8),
      ('4ème Année Moyenne - BEM (4AM)', 'CEM', 9),
      ('1ère Année Secondaire (1AS)', 'Lycee', 10),
      ('2ème Année Secondaire (2AS)', 'Lycee', 11),
      ('3ème Année Secondaire - BAC (3AS)', 'Lycee', 12),
      ('Anglais Débutant (A1)', 'Langues', 13),
      ('Anglais Intermédiaire (B1)', 'Langues', 14),
      ('Français Communication', 'Langues', 15),
      ('Informatique & Robotique', 'Formation', 16);
    `);
  }

  // Populate Default Subjects if empty
  const subjectsCount = DB.queryOne("SELECT COUNT(*) as count FROM subjects");
  if (subjectsCount.count === 0) {
    db.exec(`
      INSERT INTO subjects (name, code, color, icon) VALUES
      ('Mathématiques', 'MATH', '#3b82f6', 'calculator'),
      ('Sciences Physiques', 'PHYS', '#8b5cf6', 'atom'),
      ('Sciences Naturelles', 'SNV', '#10b981', 'leaf'),
      ('Langue Française', 'FR', '#f59e0b', 'book-open'),
      ('Langue Anglaise', 'EN', '#ec4899', 'globe'),
      ('Langue Arabe', 'AR', '#06b6d4', 'feather'),
      ('Philosophie', 'PHILO', '#6366f1', 'brain');
    `);
  }

  // Populate Default Classrooms (Salles) if empty
  const roomsCount = DB.queryOne("SELECT COUNT(*) as count FROM rooms");
  if (roomsCount.count === 0) {
    db.exec(`
      INSERT INTO rooms (name, capacity, has_projector, notes) VALUES
      ('Salle Ibn Khaldoun (01)', 30, 1, 'Équipée d''un vidéoprojecteur'),
      ('Salle Al-Khwarizmi (02)', 25, 1, 'Climatisée'),
      ('Salle Avicenne (03)', 20, 0, 'Petite salle pour langues'),
      ('Salle Informatique (Lab)', 18, 1, '18 PC avec réseau local');
    `);
  }

  // Populate Sample Teachers & Demo Data if teachers empty
  const teachersCount = DB.queryOne("SELECT COUNT(*) as count FROM teachers");
  if (teachersCount.count === 0) {
    db.exec(`
      INSERT INTO teachers (matricule, first_name, last_name, phone, email, subject_id, remuneration_type, remuneration_rate) VALUES
      ('ENS-001', 'Karim', 'Bensalem', '0661 12 34 56', 'k.bensalem@email.com', 1, 'percent', 50.0),
      ('ENS-002', 'Fatima', 'Amrani', '0555 98 76 54', 'f.amrani@email.com', 2, 'percent', 50.0),
      ('ENS-003', 'Rachid', 'Messaoudi', '0770 45 67 89', 'r.messaoudi@email.com', 5, 'percent', 60.0);

      INSERT INTO groups (name, level_id, subject_id, teacher_id, room_id, school_year, day_of_week, start_time, end_time, price_monthly, max_students) VALUES
      ('Groupe BAC Maths - Mathématiques', 12, 1, 1, 1, '2025-2026', 'Mardi', '16:30', '18:30', 2500, 25),
      ('Groupe 4AM BEM - Physique', 9, 2, 2, 2, '2025-2026', 'Mercredi', '14:00', '16:00', 2000, 20),
      ('Groupe Anglais A1 - Conversation', 13, 5, 3, 3, '2025-2026', 'Samedi', '10:00', '12:00', 3000, 15);

      INSERT INTO students (matricule, first_name, last_name, gender, birth_date, phone, parent_name, parent_phone, address, level_id, qr_code) VALUES
      ('ETU-2026-001', 'Yacine', 'Brahimi', 'M', '2008-05-14', '0551 11 22 33', 'Ahmed Brahimi', '0661 44 55 66', 'Kouba, Alger', 12, 'ETU-2026-001'),
      ('ETU-2026-002', 'Amina', 'Zitouni', 'F', '2009-08-22', '0552 22 33 44', 'Omar Zitouni', '0662 55 66 77', 'Hussein Dey, Alger', 12, 'ETU-2026-002'),
      ('ETU-2026-003', 'Mehdi', 'Belkacem', 'M', '2011-03-10', '0553 33 44 55', 'Salim Belkacem', '0663 66 77 88', 'Belouizdad, Alger', 9, 'ETU-2026-003'),
      ('ETU-2026-004', 'Sarah', 'Khelifi', 'F', '2005-11-04', '0554 44 55 66', 'Nasser Khelifi', '0664 77 88 99', 'El Harrach, Alger', 13, 'ETU-2026-004');

      INSERT INTO enrollments (student_id, group_id, school_year, registration_date, discount_amount, status) VALUES
      (1, 1, '2025-2026', '2026-09-01', 0, 'active'),
      (2, 1, '2025-2026', '2026-09-02', 0, 'active'),
      (3, 2, '2025-2026', '2026-09-03', 0, 'active'),
      (4, 3, '2025-2026', '2026-09-04', 0, 'active');

      -- Payments demo
      INSERT INTO payments (receipt_no, student_id, group_id, month_period, base_amount, discount, paid_amount, remaining_amount, payment_method, payment_date) VALUES
      ('REC-2026-0001', 1, 1, 'Septembre 2026', 2500, 0, 2500, 0, 'espece', '2026-09-05 10:30:00'),
      ('REC-2026-0002', 2, 1, 'Septembre 2026', 2500, 0, 2500, 0, 'baridimob', '2026-09-06 14:15:00'),
      ('REC-2026-0003', 4, 3, 'Septembre 2026', 3000, 500, 2500, 0, 'espece', '2026-09-08 11:00:00');
    `);
  }

  // Dynamic column migrations helper
  function addColumnIfNotExists(table, col, definition) {
    try {
      const cols = DB.queryAll(`PRAGMA table_info(${table})`);
      if (!cols.some(c => c.name === col)) {
        db.exec(`ALTER TABLE ${table} ADD COLUMN ${col} ${definition};`);
      }
    } catch (e) {
      console.warn(`Migration addColumn ${table}.${col}:`, e.message);
    }
  }

  // Ensure teachers columns for the 8 remuneration modes
  addColumnIfNotExists('teachers', 'tarif_heure', 'REAL DEFAULT 0');
  addColumnIfNotExists('teachers', 'tarif_seance', 'REAL DEFAULT 0');
  addColumnIfNotExists('teachers', 'salaire_fixe', 'REAL DEFAULT 0');
  addColumnIfNotExists('teachers', 'tarif_par_eleve', 'REAL DEFAULT 0');

  // Ensure teacher_payouts columns
  addColumnIfNotExists('teacher_payouts', 'remuneration_mode', "TEXT DEFAULT 'percent'");
  addColumnIfNotExists('teacher_payouts', 'base_calculation', 'REAL DEFAULT 0');
  addColumnIfNotExists('teacher_payouts', 'rate_value', 'REAL DEFAULT 0');
  addColumnIfNotExists('teacher_payouts', 'students_count', 'INTEGER DEFAULT 0');
  addColumnIfNotExists('teacher_payouts', 'sessions_count', 'INTEGER DEFAULT 0');
  addColumnIfNotExists('teacher_payouts', 'hours_count', 'REAL DEFAULT 0');
  addColumnIfNotExists('teacher_payouts', 'caisse_id', 'INTEGER');

  // Ensure attendance columns & group_sessions table
  addColumnIfNotExists('attendance', 'notes', 'TEXT');
  addColumnIfNotExists('attendance', 'session_id', 'INTEGER');
  try {
    db.exec(`
      CREATE TABLE IF NOT EXISTS group_sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        group_id INTEGER NOT NULL,
        session_date DATE NOT NULL,
        session_number INTEGER DEFAULT 1,
        start_time TEXT,
        end_time TEXT,
        topic TEXT,
        notes TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE,
        UNIQUE(group_id, session_date)
      );
      CREATE UNIQUE INDEX IF NOT EXISTS idx_attendance_student_group_date ON attendance(student_id, group_id, session_date);
    `);
  } catch (e) {
    console.warn('Attendance index/table migration:', e.message);
  }

  // Backfill caisse from existing payments and expenses if caisse has no records
  try {
    const caisseCount = DB.queryOne("SELECT COUNT(*) as count FROM caisse").count;
    if (caisseCount === 0) {
      db.exec(`
        INSERT INTO caisse (type, category, amount, title, reference, payment_method, payment_id, user_name, movement_date, movement_time, created_at)
        SELECT 'entree', 'Paiement élève', paid_amount,
               'Paiement cours ' || month_period, receipt_no, payment_method, id, 'Secrétariat',
               DATE(payment_date), TIME(payment_date), payment_date
        FROM payments;

        INSERT INTO caisse (type, category, amount, title, reference, payment_method, expense_id, user_name, movement_date, movement_time, created_at)
        SELECT 'sortie', category, amount, title, 'DEP-' || id, 'espece', id, 'Secrétariat',
               expense_date, '12:00:00', expense_date || ' 12:00:00'
        FROM expenses;
      `);
    }
  } catch (err) {
    console.warn('Caisse backfill check:', err.message);
  }

  console.log('✅ EDUMIND Database tables and initial seed data verified successfully!');
}

initDatabase();
performAutoBackup();

module.exports = DB;
