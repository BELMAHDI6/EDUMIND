#!/usr/bin/env node
/**
 * EDUMIND - Veloce Craft License Generator Tool
 * Usage:
 *   node generate-license.js --hwid EDUM-XXXX-XXXX-XXXX-XXXX --client "École Al-Amal"
 * Or run without args for interactive prompt:
 *   node generate-license.js
 */

const readline = require('readline');
const LicenseManager = require('./license_manager');

function parseArgs() {
  const args = process.argv.slice(2);
  const params = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--hwid' && args[i + 1]) params.hwid = args[++i];
    else if (args[i] === '--client' && args[i + 1]) params.client = args[++i];
    else if (args[i] === '--days' && args[i + 1]) params.days = parseInt(args[++i], 10);
    else if (args[i] === '--annual') params.annual = true;
  }
  return params;
}

async function interactive() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (q) => new Promise((res) => rl.question(q, res));

  console.log('\n========================================================');
  console.log('       EDUMIND — Générateur de Licences Veloce Craft    ');
  console.log('                 (Licence Permanente / À vie)           ');
  console.log('========================================================\n');

  let hwid = await question('1. Identifiant Machine du client (HWID ex: EDUM-XXXX-XXXX-XXXX-XXXX) : ');
  hwid = hwid.trim().toUpperCase();

  if (!hwid) {
    console.error('❌ Erreur : Le HWID est obligatoire !');
    rl.close();
    process.exit(1);
  }

  let client = await question('2. Nom du client ou de l\'établissement (ex: École Al-Najah) : ');
  client = client.trim() || 'Client EDUMIND';

  rl.close();
  generateAndDisplay({ hwid, client, type: 'lifetime', days: 0 });
}

function generateAndDisplay({ hwid, client = 'Client', type = 'lifetime', days = 0 }) {
  try {
    const licenseKey = LicenseManager.generateLicenseKey({
      hwid,
      clientName: client,
      type,
      days
    });

    const expDate = type === 'lifetime' 
      ? 'Illimitée (À vie / دائم)' 
      : new Date(Date.now() + days * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR');

    console.log('\n========================================================');
    console.log('             CLÉ DE LICENCE GÉNÉRÉE AVEC SUCCÈS         ');
    console.log('========================================================');
    console.log(`Client       : ${client}`);
    console.log(`HWID Machine : ${hwid}`);
    console.log(`Type         : Permanente (Lifetime / مدى الحياة)`);
    console.log(`Validité     : ${expDate}`);
    console.log('--------------------------------------------------------');
    console.log('🔑 CODE DE LICENCE À COPIER / ENVOYER AU CLIENT :');
    console.log('--------------------------------------------------------\n');
    console.log(licenseKey);
    console.log('\n--------------------------------------------------------');
    console.log('Contact Support : Veloce Craft (0552225150)');
    console.log('========================================================\n');
  } catch (err) {
    console.error('\n❌ Erreur lors de la génération :', err.message);
  }
}

const parsed = parseArgs();
if (parsed.hwid) {
  generateAndDisplay({
    hwid: parsed.hwid,
    client: parsed.client || 'Client EDUMIND',
    type: parsed.annual ? 'annual' : 'lifetime',
    days: parsed.days || (parsed.annual ? 365 : 0)
  });
} else {
  interactive();
}
