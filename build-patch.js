#!/usr/bin/env node
/**
 * EDUMIND - Automated Cloud Patch Builder
 * Creates a lightweight, safe update package (ZIP) and updates version.json automatically.
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const readline = require('readline');

const PROJECT_DIR = path.resolve(__dirname);
const UPDATES_DIR = path.join(PROJECT_DIR, 'updates');

// Read current package.json
const pkgPath = path.join(PROJECT_DIR, 'package.json');
let pkg = { version: '1.0.0' };
try {
  pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
} catch (e) {}

function incrementPatch(versionStr) {
  const parts = String(versionStr).split('.').map(n => parseInt(n, 10) || 0);
  while (parts.length < 3) parts.push(0);
  parts[2] += 1;
  return parts.join('.');
}

async function main() {
  console.log('\n========================================================');
  console.log('       EDUMIND — Générateur de Mise à Jour Automatique   ');
  console.log('                (Cloud Auto-Patch Builder)              ');
  console.log('========================================================\n');

  const currentVer = pkg.version || '1.0.0';
  const suggestedVer = incrementPatch(currentVer);

  let newVer = process.argv[2];
  let notes = process.argv.slice(3).join(' ');

  if (!newVer) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const question = (q) => new Promise(res => rl.question(q, res));

    console.log(`Version actuelle : v${currentVer}`);
    const inputVer = await question(`1. Numéro de la nouvelle version [Défaut: ${suggestedVer}] : `);
    newVer = inputVer.trim() || suggestedVer;

    const inputNotes = await question(`2. Description des nouveautés (Changelog en français/arabe) : `);
    notes = inputNotes.trim() || 'Améliorations des performances et corrections de bugs';

    rl.close();
  } else {
    if (!notes) notes = 'Mise à jour et améliorations générales';
  }

  // Ensure updates directory exists
  if (!fs.existsSync(UPDATES_DIR)) {
    fs.mkdirSync(UPDATES_DIR, { recursive: true });
  }

  // 1. Update package.json
  pkg.version = newVer;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
  console.log(`\n✅ 1. package.json mis à jour vers v${newVer}`);

  // 2. Prepare staging directory for the clean patch
  const tempDir = path.join(os.tmpdir(), `edumind_patch_build_${Date.now()}`);
  fs.mkdirSync(tempDir, { recursive: true });

  const FILES_TO_COPY = [
    'server.js',
    'database.js',
    'license_manager.js',
    'updater.js',
    'main.js',
    'package.json',
    'Démarrer_EDUMIND.bat',
    'Lancer_EDUMIND.vbs'
  ];

  for (const f of FILES_TO_COPY) {
    const src = path.join(PROJECT_DIR, f);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(tempDir, f));
    }
  }

  // Copy public folder recursively
  const copyDirRecursive = (src, dest) => {
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src, { withFileTypes: true })) {
      const s = path.join(src, item.name);
      const d = path.join(dest, item.name);
      if (item.isDirectory()) {
        copyDirRecursive(s, d);
      } else {
        fs.copyFileSync(s, d);
      }
    }
  };

  const publicSrc = path.join(PROJECT_DIR, 'public');
  if (fs.existsSync(publicSrc)) {
    copyDirRecursive(publicSrc, path.join(tempDir, 'public'));
  }

  console.log(`✅ 2. Fichiers du projet préparés (base de données et données personnelles 100% exclues).`);

  // 3. Create ZIP archive
  const zipFileName = `edumind_patch_v${newVer}.zip`;
  const zipPath = path.join(UPDATES_DIR, zipFileName);

  try {
    if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
  } catch (e) {}

  let createdZip = false;
  try {
    execSync(`tar -cf "${zipPath}" -C "${tempDir}" .`, { stdio: 'pipe' });
    createdZip = true;
  } catch (e) {}

  if (!createdZip) {
    const psCmd = `powershell -NoProfile -ExecutionPolicy Bypass -Command "Compress-Archive -Path '${tempDir}\\*' -DestinationPath '${zipPath}' -Force"`;
    execSync(psCmd, { stdio: 'inherit' });
  }

  const stat = fs.statSync(zipPath);
  const sizeMB = (stat.size / (1024 * 1024)).toFixed(2);
  console.log(`✅ 3. Archive ZIP créée : updates/${zipFileName} (Taille : ${sizeMB} MB seulement !)`);

  // Clean staging directory
  try {
    fs.rmSync(tempDir, { recursive: true, force: true });
  } catch (e) {}

  // 4. Update updates/version.json
  const versionJsonPath = path.join(UPDATES_DIR, 'version.json');
  const releaseDate = new Date().toISOString().split('T')[0];
  const repoName = 'BELMAHDI6/EDUMIND';
  const zipUrl = `https://raw.githubusercontent.com/${repoName}/main/updates/${zipFileName}`;

  const manifest = {
    version: newVer,
    releaseDate,
    zipUrl,
    notes: notes,
    notes_ar: notes
  };

  fs.writeFileSync(versionJsonPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  console.log(`✅ 4. updates/version.json mis à jour automatiquement.`);

  console.log('\n========================================================');
  console.log('        🎉 TOUT EST PRÊT ! POUR PUBLIER LA MISE À JOUR : ');
  console.log('========================================================');
  console.log(`1. Allez sur votre GitHub Releases : https://github.com/${repoName}/releases/new`);
  console.log(`2. Créez un Release nommé : v${newVer}`);
  console.log(`3. Glissez-déposez le fichier : updates/${zipFileName}`);
  console.log(`4. Poussez votre code vers GitHub :`);
  console.log(`   git add . && git commit -m "Release v${newVer}" && git push`);
  console.log('--------------------------------------------------------');
  console.log('🚀 Dès que vous faites cela, TOUS vos clients recevront l\'alerte');
  console.log('   وسيقومون بالتحديث بنقرة زر واحدة تلقائياً دون أي تدخل منك!');
  console.log('========================================================\n');
}

main().catch(err => {
  console.error('❌ Erreur lors de la création du patch :', err);
  process.exit(1);
});
