const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const os = require('os');

const rootDir = __dirname;
const exePath = path.join(rootDir, 'EDUMIND.exe');
const iconIco = path.join(rootDir, 'public', 'icon.ico');

const home = os.homedir();
const desktopDirs = [
  path.join(home, 'Desktop'),
  path.join(home, 'OneDrive', 'Desktop'),
  path.join(home, 'OneDrive - Personal', 'Desktop'),
  path.join(process.env.PUBLIC || 'C:\\Users\\Public', 'Desktop')
].filter(d => fs.existsSync(d));

console.log('Found Desktops:', desktopDirs);

function createShortcut(targetPath, linkPath, args = '', icon = '', description = '') {
  const vbsScript = `
Set oWS = WScript.CreateObject("WScript.Shell")
sLinkFile = "${linkPath.replace(/\\/g, '\\\\')}"
Set oLink = oWS.CreateShortcut(sLinkFile)
oLink.TargetPath = "${targetPath.replace(/\\/g, '\\\\')}"
oLink.Arguments = "${args}"
oLink.WorkingDirectory = "${rootDir.replace(/\\/g, '\\\\')}"
${icon ? `oLink.IconLocation = "${icon.replace(/\\/g, '\\\\')}, 0"` : ''}
oLink.Description = "${description}"
oLink.Save
`;
  const tempVbs = path.join(rootDir, 'temp_shortcut.vbs');
  fs.writeFileSync(tempVbs, vbsScript, 'utf8');
  execSync(`cscript //nologo "${tempVbs}"`);
  try { fs.unlinkSync(tempVbs); } catch (e) {}
}

desktopDirs.forEach(dir => {
  const lnk = path.join(dir, 'EDUMIND.lnk');
  createShortcut(exePath, lnk, '', iconIco, 'EDUMIND - Système de Gestion Scolaire Professionnel');
  console.log('✅ Raccourci créé sur :', lnk);
});

// Also create in root
createShortcut(exePath, path.join(rootDir, 'EDUMIND - Raccourci.lnk'), '', iconIco, 'EDUMIND');
console.log('Terminé avec succès!');
