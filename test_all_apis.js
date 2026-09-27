/**
 * EDUMIND - Automated End-to-End API Integration & Stress Tester
 */
const http = require('http');

function apiCall(endpoint, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(`http://localhost:3000${endpoint}`);
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: data });
        }
      });
    });

    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function runAllTests() {
  console.log('========================================================');
  console.log('      EDUMIND — TEST INTENSIF DES MODULES & API        ');
  console.log('========================================================\n');

  let passed = 0;
  let failed = 0;

  async function test(name, fn) {
    process.stdout.write(`⏳ ${name.padEnd(45)} `);
    try {
      const ok = await fn();
      if (ok) {
        console.log('✅ PASS');
        passed++;
      } else {
        console.log('❌ FAIL');
        failed++;
      }
    } catch (e) {
      console.log(`❌ ERROR: ${e.message}`);
      failed++;
    }
  }

  // 1. License Check
  await test('1. Statut Licence & HWID Machine', async () => {
    const res = await apiCall('/api/license/status');
    return res.status === 200 && res.data.success && typeof res.data.hwid === 'string';
  });

  // 2. Auth Login Test
  await test('2. Authentification Admin (Login)', async () => {
    const res = await apiCall('/api/auth/login', 'POST', { role: 'admin', password: 'admin' });
    return res.status === 200 && res.data.success;
  });

  // 3. Dashboard Stats & KPIs (Active Students >= 100)
  await test('3. Tableau de bord & KPIs (120 élèves)', async () => {
    const res = await apiCall('/api/dashboard/stats');
    return res.status === 200 && res.data.success && res.data.kpis && res.data.kpis.activeStudents >= 100;
  });

  // 4. Monthly Financial Curve (12-Months)
  await test('4. Évolution Financière (12 Mois)', async () => {
    const res = await apiCall('/api/dashboard/stats');
    return res.status === 200 && Array.isArray(res.data.monthlyEvolution) && res.data.monthlyEvolution.length === 12;
  });

  // 5. Students Module (120 élèves)
  await test('5. Liste des Élèves & Chargement', async () => {
    const res = await apiCall('/api/students');
    return res.status === 200 && res.data.success && res.data.students.length >= 100;
  });

  // 6. Student Search & Filter
  await test('6. Recherche instantanée d\'élève', async () => {
    const res = await apiCall('/api/students?search=Benali');
    return res.status === 200 && Array.isArray(res.data.students);
  });

  // 7. Groups Module (24 groupes)
  await test('7. Liste des Groupes (24 groupes)', async () => {
    const res = await apiCall('/api/groups');
    return res.status === 200 && res.data.success && res.data.groups.length >= 20;
  });

  // 8. Teachers Module
  await test('8. Liste des Enseignants & Matières', async () => {
    const res = await apiCall('/api/teachers');
    return res.status === 200 && res.data.success && res.data.teachers.length >= 8;
  });

  // 9. Classrooms & Occupancy
  await test('9. Salles de classe & Équipements', async () => {
    const res = await apiCall('/api/rooms');
    return res.status === 200 && res.data.success && res.data.rooms.length >= 7;
  });

  // 10. Payments & Receipts (180+)
  await test('10. Liste des Paiements & Reçus (180+)', async () => {
    const res = await apiCall('/api/payments');
    return res.status === 200 && res.data.success && Array.isArray(res.data.payments) && res.data.payments.length >= 100;
  });

  // 11. Caisse Treasury Log (Entrées / Sorties / Solde)
  await test('11. Journal de Caisse & Solde Net', async () => {
    const res = await apiCall('/api/caisse/summary');
    return res.status === 200 && res.data.success && res.data.allTime && res.data.allTime.soldeNet > 0;
  });

  // 12. Caisse Movements
  await test('12. Mouvements de Caisse récents', async () => {
    const res = await apiCall('/api/caisse/movements');
    return res.status === 200 && res.data.success && Array.isArray(res.data.movements) && res.data.movements.length > 50;
  });

  // 13. Settings & Establishment Info
  await test('13. Paramètres Établissement', async () => {
    const res = await apiCall('/api/settings');
    return res.status === 200 && res.data.success && res.data.settings;
  });

  console.log('\n========================================================');
  console.log(`RÉSULTAT DES TESTS : ${passed}/${passed + failed} RÉUSSIS`);
  console.log('========================================================\n');
}

runAllTests();
