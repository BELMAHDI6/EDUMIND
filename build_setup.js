const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function main() {
  console.log('\n========================================================');
  console.log('       EDUMIND — Générateur du Setup d\'Installation      ');
  console.log('========================================================\n');

  const localAppData = process.env.LOCALAPPDATA;
  const installedDir = path.join(localAppData, 'Programs', 'EDUMIND');
  const projectDir = __dirname;
  const tempZip = path.join(projectDir, 'temp_app.zip');
  const outputExe = path.join(projectDir, 'EDUMIND_Setup.exe');
  const cscPath = 'C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\csc.exe';
  const installerCs = path.join(projectDir, 'installer.cs');
  const iconIco = path.join(projectDir, 'public', 'icon.ico');

  if (!fs.existsSync(installedDir)) {
    throw new Error('Dossier d\'installation introuvable : ' + installedDir);
  }
  if (!fs.existsSync(installerCs)) {
    throw new Error('installer.cs introuvable : ' + installerCs);
  }

  console.log('1. Nettoyage préventif des fichiers inutiles dans resources/app :');
  const appDir = path.join(installedDir, 'resources', 'app');
  if (fs.existsSync(appDir)) {
    const junkPatterns = ['.zip', 'EDUMIND_Setup', 'desktop_debug.log', 'electron_out.log', '.shm', '.wal'];
    for (const f of fs.readdirSync(appDir)) {
      if (junkPatterns.some(p => f.includes(p))) {
        try { fs.unlinkSync(path.join(appDir, f)); console.log('   Supprimé :', f); } catch(e){}
      }
    }
    const updDir = path.join(appDir, 'updates');
    if (fs.existsSync(updDir)) {
      for (const f of fs.readdirSync(updDir)) {
        if (f.endsWith('.zip')) {
          try { fs.unlinkSync(path.join(updDir, f)); console.log('   Supprimé archive patch :', f); } catch(e){}
        }
      }
    }
  }

  console.log('\n2. Compression du répertoire d\'installation :');
  console.log('   Source :', installedDir);
  if (fs.existsSync(tempZip)) fs.unlinkSync(tempZip);

  // Compress using PowerShell
  const ps1File = path.join(projectDir, 'temp_compress.ps1');
  fs.writeFileSync(ps1File, `Compress-Archive -Path '${installedDir}\\*' -DestinationPath '${tempZip}' -CompressionLevel Optimal -Force`, 'utf8');
  execSync(`powershell -NoProfile -ExecutionPolicy Bypass -File "${ps1File}"`, { stdio: 'inherit' });
  try { fs.unlinkSync(ps1File); } catch(e){}

  const stat = fs.statSync(tempZip);
  console.log(`\n✅ 2. Archive d'installation prête : ${(stat.size / (1024 * 1024)).toFixed(2)} MB`);

  console.log('\n3. Compilation du Setup autonome avec csc.exe...');
  const backupExe = path.join(projectDir, 'EDUMIND_Setup_old.exe');
  if (fs.existsSync(outputExe)) {
    try {
      if (fs.existsSync(backupExe)) fs.unlinkSync(backupExe);
      fs.renameSync(outputExe, backupExe);
    } catch (e) {
      console.warn('Impossible de renommer l\'ancien setup, tentative de remplacement direct...');
    }
  }

  const compileCmd = `"${cscPath}" /target:winexe /win32icon:"${iconIco}" /resource:"${tempZip}",app.zip /resource:"${iconIco}",app.ico /r:System.IO.Compression.dll /r:System.IO.Compression.FileSystem.dll /r:System.Windows.Forms.dll /r:System.Drawing.dll /out:"${outputExe}" "${installerCs}"`;
  execSync(compileCmd, { stdio: 'inherit' });

  console.log('\n4. Nettoyage du fichier temporaire...');
  try { fs.unlinkSync(tempZip); } catch(e){}
  try { if (fs.existsSync(backupExe)) fs.unlinkSync(backupExe); } catch(e){}

  const finalStat = fs.statSync(outputExe);
  console.log('\n========================================================');
  console.log(`🎉 SUCCÈS ! Nouveau ${path.basename(outputExe)} créé : ${(finalStat.size / (1024 * 1024)).toFixed(2)} MB`);
  console.log('   Ce fichier est 100% à jour avec toutes les fonctionnalités');
  console.log('   وجاهز لإرساله مباشرة إلى العميل للتثبيت النظيف بنقرة واحدة!');
  console.log('========================================================\n');
}

main().catch(err => {
  console.error('❌ Erreur build_setup :', err);
  process.exit(1);
});
