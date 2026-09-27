const LicenseManager = require('./license_manager');
const { execSync } = require('child_process');

try {
  const lic = new LicenseManager();
  const id = lic.getHardwareID();

  console.log('========================================================');
  console.log('       EDUMIND — IDENTIFIANT MACHINE (HARDWARE ID)      ');
  console.log('========================================================\n');
  console.log('  معرّف هذا الجهاز الخاص بالزبون :');
  console.log(`\n  👉  ${id}  👈\n`);

  try {
    execSync('clip', { input: id });
    console.log('  ✅ تم نسخ المعرّف تلقائياً إلى الحافظة (Presse-papier) !');
  } catch (e) {}

  console.log('  📞 الدعم الفني والتفعيل : Veloce Craft (0552225150)\n');
  console.log('========================================================');
} catch (err) {
  console.error('Erreur:', err.message);
}
