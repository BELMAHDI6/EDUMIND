const { app, BrowserWindow, Menu, shell, dialog } = require('electron');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');
const fs = require('fs');
const logFile = path.join(__dirname, 'desktop_debug.log');
function logMsg(...args) {
  const line = `[${new Date().toISOString()}] ${args.join(' ')}\n`;
  try { fs.appendFileSync(logFile, line); } catch(e) {}
  console.log(...args);
}


// Single instance lock to prevent duplicate servers and DB conflicts
const gotSingleInstanceLock = app.requestSingleInstanceLock();
if (!gotSingleInstanceLock) {
  app.quit();
  process.exit(0);
}

let mainWindow = null;
let serverProcess = null;
let activePort = 3000;

// Path to application icons
const iconIco = path.join(__dirname, 'public', 'icon.ico');
const iconPng = path.join(__dirname, 'public', 'favicon.png');
const appIcon = process.platform === 'win32' ? iconIco : iconPng;

/**
 * Check if the EDUMIND HTTP server is responding on a given port
 */
function isServerReady(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://127.0.0.1:${port}/api/license/status`, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(800, () => {
      req.destroy();
      resolve(false);
    });
  });
}

/**
 * Wait until server responds or timeout
 */
async function waitForServer(port, maxRetries = 40, interval = 250) {
  for (let i = 0; i < maxRetries; i++) {
    const ready = await isServerReady(port);
    if (ready) return true;
    await new Promise((r) => setTimeout(r, interval));
  }
  return false;
}

/**
 * Start the background server process using system Node (Node 24 with native SQLite)
 */
async function ensureServerRunning() {
  const alreadyUp = await isServerReady(activePort);
  if (alreadyUp) {
    console.log(`[EDUMIND Electron] Serveur déjà actif sur le port ${activePort}`);
    return activePort;
  }

  logMsg(`[EDUMIND Electron] Démarrage du serveur interne sur le port ${activePort}...`);
  const serverScript = path.join(__dirname, 'server.js');

  const nodeCandidates = [
    path.join(__dirname, 'bin', 'node.exe'),
    'C:\\Program Files\\node.exe',
    'C:\\Program Files\\nodejs\\node.exe',
    'node'
  ];
  const nodeExe = nodeCandidates.find(p => p === 'node' || fs.existsSync(p)) || 'node';
  logMsg(`[EDUMIND Electron] Exécutable Node détecté : ${nodeExe}`);

  serverProcess = spawn(nodeExe, [serverScript], {
    cwd: __dirname,
    env: { ...process.env, PORT: String(activePort) },
    stdio: ['ignore', 'pipe', 'pipe'],
    windowsHide: true
  });

  serverProcess.stdout.on('data', (chunk) => {
    const msg = chunk.toString().trim();
    if (msg) logMsg(`[EDUMIND Serveur] ${msg}`);
  });

  serverProcess.stderr.on('data', (chunk) => {
    const msg = chunk.toString().trim();
    if (msg) logMsg(`[EDUMIND Serveur Erreur] ${msg}`);
  });

  serverProcess.on('exit', (code, signal) => {
    logMsg(`[EDUMIND Serveur] Processus arrêté (code: ${code}, signal: ${signal})`);
    serverProcess = null;
  });

  const ready = await waitForServer(activePort);
  if (!ready) {
    throw new Error('Le serveur EDUMIND n\'a pas répondu dans le délai imparti (10s).');
  }
  logMsg(`[EDUMIND Electron] Serveur prêt et opérationnel sur http://127.0.0.1:${activePort}`);
  return activePort;
}

/**
 * Cleanly terminate the backend server process
 */
function cleanupServer() {
  if (serverProcess) {
    console.log('[EDUMIND Electron] Arrêt propre du serveur interne...');
    try {
      if (process.platform === 'win32') {
        spawn('taskkill', ['/pid', serverProcess.pid, '/f', '/t']);
      } else {
        serverProcess.kill('SIGTERM');
      }
    } catch (e) {
      console.error('[EDUMIND Electron] Erreur lors de l\'arrêt du serveur:', e.message);
    }
    serverProcess = null;
  }
}

/**
 * Build the application menu
 */
function setupMenu(win) {
  const template = [
    {
      label: 'Fichier',
      submenu: [
        {
          label: 'Imprimer la page',
          accelerator: 'CmdOrCtrl+P',
          click: () => {
            if (win) win.webContents.print();
          }
        },
        { type: 'separator' },
        {
          label: 'Actualiser (Recharger)',
          accelerator: 'CmdOrCtrl+R',
          click: () => {
            if (win) win.reload();
          }
        },
        {
          label: 'Forcer l\'actualisation',
          accelerator: 'CmdOrCtrl+Shift+R',
          click: () => {
            if (win) win.webContents.reloadIgnoringCache();
          }
        },
        { type: 'separator' },
        {
          label: 'Quitter EDUMIND',
          accelerator: 'Alt+F4',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Affichage',
      submenu: [
        {
          label: 'Plein écran',
          accelerator: 'F11',
          click: () => {
            if (win) win.setFullScreen(!win.isFullScreen());
          }
        },
        {
          label: 'Zoom avant',
          accelerator: 'CmdOrCtrl+Plus',
          click: () => {
            if (win) {
              const current = win.webContents.getZoomLevel();
              win.webContents.setZoomLevel(current + 0.5);
            }
          }
        },
        {
          label: 'Zoom arrière',
          accelerator: 'CmdOrCtrl+-',
          click: () => {
            if (win) {
              const current = win.webContents.getZoomLevel();
              win.webContents.setZoomLevel(current - 0.5);
            }
          }
        },
        {
          label: 'Taille normale (100%)',
          accelerator: 'CmdOrCtrl+0',
          click: () => {
            if (win) win.webContents.setZoomLevel(0);
          }
        },
        { type: 'separator' },
        {
          label: 'Outils de diagnostic (DevTools)',
          accelerator: 'CmdOrCtrl+Shift+I',
          click: () => {
            if (win) win.webContents.toggleDevTools();
          }
        }
      ]
    },
    {
      label: 'Aide',
      submenu: [
        {
          label: 'À propos d\'EDUMIND Pro',
          click: () => {
            dialog.showMessageBox(win, {
              type: 'info',
              title: 'À propos d\'EDUMIND',
              message: 'EDUMIND — Système de Gestion Scolaire & Cours de Soutien',
              detail: 'Version : 1.0.0 (Desktop Edition)\nTechnologie : Electron & SQLite\nConçu pour les écoles privées et centres de soutien en Algérie.\n\nTous droits réservés.',
              icon: appIcon
            });
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

/**
 * Create the main desktop application window
 */
async function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    center: true,
    title: 'EDUMIND — Système de Gestion Scolaire Pro',
    backgroundColor: '#0a1124',
    icon: appIcon,
    show: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      spellcheck: false
    }
  });

  setupMenu(mainWindow);

  // Configure window popups (for student card printing, invoices, etc.)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('about:blank') || url.includes('localhost') || url.includes('127.0.0.1')) {
      return {
        action: 'allow',
        overrideBrowserWindowOptions: {
          width: 960,
          height: 780,
          backgroundColor: '#0a1124',
          icon: appIcon,
          autoHideMenuBar: true,
          webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
          }
        }
      };
    }
    // External links open in the system default browser
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // Intercept external navigation
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith(`http://127.0.0.1:${activePort}`) && !url.startsWith(`http://localhost:${activePort}`)) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  // Reveal window smoothly when loaded
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  // Log successful window load
  mainWindow.webContents.on('did-finish-load', () => {
    console.log('[EDUMIND Electron] Interface chargée avec succès dans la fenêtre Desktop.');
    if (process.argv.includes('--test-desktop')) {
      console.log('TEST_DESKTOP_SUCCESS: La fenêtre Desktop et l\'interface EDUMIND fonctionnent à 100%.');
      setTimeout(() => {
        app.quit();
      }, 1000);
    }
  });

  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
    console.error(`[EDUMIND Electron] Échec de chargement (${errorCode}): ${errorDescription} pour ${validatedURL}`);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  try {
    await ensureServerRunning();
    mainWindow.loadURL(`http://127.0.0.1:${activePort}`);
  } catch (err) {
    console.error('[EDUMIND Electron] Erreur de démarrage:', err);
    dialog.showErrorBox(
      'Erreur de démarrage EDUMIND',
      `Impossible de démarrer le serveur interne :\n${err.message}\n\nVeuillez vérifier qu'aucun autre processus ne bloque le port.`
    );
  }
}

// When a second instance is launched, focus the existing window
app.on('second-instance', () => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
});

app.whenReady().then(async () => {
  await createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  cleanupServer();
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', cleanupServer);
app.on('will-quit', cleanupServer);

process.on('uncaughtException', (error) => {
  logMsg('[EDUMIND Electron] Uncaught Exception:', error.stack || error);
});
