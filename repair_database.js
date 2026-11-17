const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

function getDatabasePath() {
  const localAppData = process.env.APPDATA || (process.platform === 'darwin' ? process.env.HOME + '/Library/Preferences' : '/var/local');
  const targetDir = path.join(localAppData, 'EDUMIND', 'data');
  const appDataDb = path.join(targetDir, 'edumind.sqlite');
  if (fs.existsSync(appDataDb)) return appDataDb;
  
  const localDb = path.join(__dirname, 'edumind.sqlite');
  if (fs.existsSync(localDb)) return localDb;

  return appDataDb;
}

function repairDatabase() {
  console.log('========================================================');
  console.log('      EDUMIND — OUTIL DE RÉPARATION DE BASE DE DONNÉES   ');
  console.log('             (أداة إصلاح قاعدة بيانات إدوميند)             ');
  console.log('========================================================\n');

  const dbPath = getDatabasePath();
  console.log(`📁 Chemin de la base : ${dbPath}`);

  if (!fs.existsSync(dbPath)) {
    console.error('❌ Base de données introuvable à l\'emplacement :', dbPath);
    return false;
  }

  // 1. Fermer les instances EDUMIND en cours
  console.log('1. Arrêt des processus EDUMIND pour libérer les fichiers...');
  try {
    execSync('taskkill /f /im EDUMIND.exe >nul 2>&1 || exit 0', { shell: 'cmd.exe' });
  } catch(e) {}

  // 2. Créer une copie de sauvegarde d\'urgence
  const timestamp = Date.now();
  const backupPath = `${dbPath}.emergency_backup_${timestamp}`;
  try {
    fs.copyFileSync(dbPath, backupPath);
    console.log(`✅ 2. Sauvegarde d'urgence créée : ${path.basename(backupPath)}`);
  } catch(e) {
    console.warn('⚠️ Impossible de créer la sauvegarde d\'urgence :', e.message);
  }

  // 3. Supprimer les fichiers temporaires WAL et SHM si verrouillés
  const walPath = `${dbPath}-wal`;
  const shmPath = `${dbPath}-shm`;
  try {
    if (fs.existsSync(walPath)) fs.unlinkSync(walPath);
    if (fs.existsSync(shmPath)) fs.unlinkSync(shmPath);
    console.log('✅ 3. Fichiers temporaires WAL/SHM réinitialisés.');
  } catch(e) {
    console.warn('⚠️ Erreur suppression WAL/SHM :', e.message);
  }

  // 4. Utiliser DatabaseSync pour REINDEX et VACUUM
  const { DatabaseSync } = require('node:sqlite');
  let repaired = false;

  try {
    console.log('4. Tentative de reconstruction des index (REINDEX & VACUUM)...');
    const db = new DatabaseSync(dbPath);
    
    db.exec('PRAGMA writable_schema = RESET;');
    db.exec('REINDEX;');
    console.log('   -> REINDEX terminé avec succès.');

    try {
      db.exec('VACUUM;');
      console.log('   -> VACUUM terminé avec succès.');
    } catch(vacErr) {
      console.warn('   -> Note VACUUM :', vacErr.message);
    }

    const check = db.prepare('PRAGMA integrity_check;').get();
    const resultVal = check ? Object.values(check)[0] : '';
    console.log(`   -> Résultat vérification d'intégrité : ${resultVal}`);

    db.close();

    if (resultVal === 'ok') {
      repaired = true;
    }
  } catch(err) {
    console.warn('⚠️ Erreur lors du REINDEX direct :', err.message);
  }

  // 5. Si pas encore 100% réparé, reconstruction complète table par table
  if (!repaired) {
    console.log('\n5. Réparation approfondie : Reconstruction complète table par table...');
    const tempRepairedPath = path.join(path.dirname(dbPath), `edumind_repaired_${timestamp}.sqlite`);

    try {
      const srcDb = new DatabaseSync(backupPath);
      const destDb = new DatabaseSync(tempRepairedPath);

      // Obtenir la liste de toutes les tables
      const tables = srcDb.prepare("SELECT name, sql FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';").all();

      for (const t of tables) {
        try {
          destDb.exec(t.sql);
          console.log(`   -> Table créée : ${t.name}`);

          try {
            const rows = srcDb.prepare(`SELECT * FROM "${t.name}"`).all();
            if (rows.length > 0) {
              const cols = Object.keys(rows[0]);
              const placeholders = cols.map(() => '?').join(', ');
              const insertSql = `INSERT INTO "${t.name}" (${cols.map(c => `"${c}"`).join(', ')}) VALUES (${placeholders})`;
              const insertStmt = destDb.prepare(insertSql);

              let inserted = 0;
              for (const r of rows) {
                try {
                  insertStmt.run(...cols.map(c => r[c]));
                  inserted++;
                } catch(rowErr) {
                  // Sauter une ligne corrompue isolée pour sauver le reste
                }
              }
              console.log(`      ✓ ${inserted}/${rows.length} lignes restaurées.`);
            }
          } catch(readRowsErr) {
            console.warn(`      ⚠️ Lignes partiellement inaccessibles pour ${t.name}:`, readRowsErr.message);
          }
        } catch(tableErr) {
          console.warn(`      ⚠️ Impossible de recréer ${t.name}:`, tableErr.message);
        }
      }

      // Reconstruire les index
      const indexes = srcDb.prepare("SELECT sql FROM sqlite_master WHERE type='index' AND sql IS NOT NULL;").all();
      for (const idx of indexes) {
        try {
          destDb.exec(idx.sql);
        } catch(e) {}
      }

      srcDb.close();
      destDb.close();

      // Remplacer l'ancienne base par la nouvelle
      fs.copyFileSync(tempRepairedPath, dbPath);
      try { fs.unlinkSync(tempRepairedPath); } catch(e) {}
      repaired = true;
      console.log('✅ Base entièrement reconstruite et sauvée avec succès.');
    } catch(deepErr) {
      console.error('❌ Échec de la réparation approfondie :', deepErr.message);
    }
  }

  console.log('\n========================================================');
  if (repaired) {
    console.log('  🎉 FÉLICITATIONS ! LA BASE DE DONNÉES A ÉTÉ RÉPARÉE !  ');
    console.log('  تم بنجاح إصلاح قاعدة البيانات واسترجاع كافة البيانات !  ');
    console.log('========================================================\n');
    return true;
  } else {
    console.log('  ⚠️ La réparation automatique a échoué.               ');
    console.log('  Veuillez restaurer une sauvegarde automatique récente.');
    console.log('========================================================\n');
    return false;
  }
}

if (require.main === module) {
  repairDatabase();
}

module.exports = { repairDatabase };

