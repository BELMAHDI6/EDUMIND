using System;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.IO.Compression;
using System.Reflection;
using System.Threading;
using System.Windows.Forms;

namespace EdumindSetup
{
    static class Program
    {
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new InstallerForm());
        }
    }

    public class InstallerForm : Form
    {
        private ProgressBar progressBar;
        private Label lblStatus;
        private Label lblTitle;
        private Label lblSubtitle;
        private Button btnAction;
        private CheckBox chkLaunch;
        private string installPath;
        private string installedExe;

        public InstallerForm()
        {
            // Configure Form
            this.Text = "EDUMIND — Assistant d'installation";
            this.Size = new Size(540, 360);
            this.StartPosition = FormStartPosition.CenterScreen;
            this.FormBorderStyle = FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;
            this.MinimizeBox = true;
            this.BackColor = Color.FromArgb(10, 17, 36);
            this.ForeColor = Color.White;
            this.Font = new Font("Segoe UI", 9.5f, FontStyle.Regular);

            // Install directory: %LocalAppData%\Programs\EDUMIND (standard per-user, no admin prompt needed)
            string localAppData = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
            installPath = Path.Combine(localAppData, "Programs", "EDUMIND");
            installedExe = Path.Combine(installPath, "EDUMIND.exe");

            // Header Title
            lblTitle = new Label();
            lblTitle.Text = "EDUMIND Pro";
            lblTitle.Font = new Font("Segoe UI", 16f, FontStyle.Bold);
            lblTitle.ForeColor = Color.FromArgb(56, 189, 248);
            lblTitle.Location = new Point(35, 25);
            lblTitle.AutoSize = true;
            this.Controls.Add(lblTitle);

            // Subtitle
            lblSubtitle = new Label();
            lblSubtitle.Text = "Système de Gestion Scolaire & Cours de Soutien (Desktop Edition)";
            lblSubtitle.Font = new Font("Segoe UI", 9.5f, FontStyle.Regular);
            lblSubtitle.ForeColor = Color.FromArgb(148, 163, 184);
            lblSubtitle.Location = new Point(36, 60);
            lblSubtitle.Size = new Size(460, 25);
            this.Controls.Add(lblSubtitle);

            // Separator Line
            Panel sep = new Panel();
            sep.BackColor = Color.FromArgb(30, 41, 59);
            sep.Location = new Point(35, 95);
            sep.Size = new Size(455, 1);
            this.Controls.Add(sep);

            // Status Label
            lblStatus = new Label();
            lblStatus.Text = "Prêt à installer EDUMIND sur votre ordinateur...";
            lblStatus.Font = new Font("Segoe UI", 9f, FontStyle.Regular);
            lblStatus.ForeColor = Color.FromArgb(203, 213, 225);
            lblStatus.Location = new Point(35, 125);
            lblStatus.Size = new Size(455, 25);
            this.Controls.Add(lblStatus);

            // Progress Bar
            progressBar = new ProgressBar();
            progressBar.Location = new Point(35, 155);
            progressBar.Size = new Size(455, 26);
            progressBar.Style = ProgressBarStyle.Continuous;
            this.Controls.Add(progressBar);

            // Checkbox Launch
            chkLaunch = new CheckBox();
            chkLaunch.Text = "Lancer EDUMIND immédiatement après l'installation";
            chkLaunch.Checked = true;
            chkLaunch.ForeColor = Color.FromArgb(226, 232, 240);
            chkLaunch.Location = new Point(35, 205);
            chkLaunch.Size = new Size(455, 25);
            this.Controls.Add(chkLaunch);

            // Action Button (Installer / Terminer)
            btnAction = new Button();
            btnAction.Text = "Installer maintenant";
            btnAction.Font = new Font("Segoe UI", 10f, FontStyle.Bold);
            btnAction.BackColor = Color.FromArgb(37, 99, 235);
            btnAction.ForeColor = Color.White;
            btnAction.FlatStyle = FlatStyle.Flat;
            btnAction.FlatAppearance.BorderSize = 0;
            btnAction.Location = new Point(290, 260);
            btnAction.Size = new Size(200, 38);
            btnAction.Cursor = Cursors.Hand;
            btnAction.Click += BtnAction_Click;
            this.Controls.Add(btnAction);

            // Load Form Icon if available
            try
            {
                Stream iconStream = Assembly.GetExecutingAssembly().GetManifestResourceStream("app.ico");
                if (iconStream != null)
                {
                    this.Icon = new Icon(iconStream);
                }
            }
            catch {}
        }

        private bool isFinished = false;

        private void BtnAction_Click(object sender, EventArgs e)
        {
            if (isFinished)
            {
                if (chkLaunch.Checked && File.Exists(installedExe))
                {
                    try
                    {
                        Process.Start(new ProcessStartInfo
                        {
                            FileName = installedExe,
                            WorkingDirectory = installPath,
                            UseShellExecute = true
                        });
                    }
                    catch {}
                }
                this.Close();
                return;
            }

            btnAction.Enabled = false;
            btnAction.Text = "Installation en cours...";

            Thread installThread = new Thread(DoInstallation);
            installThread.IsBackground = true;
            installThread.Start();
        }

        private void DoInstallation()
        {
            try
            {
                UpdateStatus("Extraction des composants du système...", 10);

                if (!Directory.Exists(installPath))
                {
                    Directory.CreateDirectory(installPath);
                }

                // Extract embedded ZIP resource
                Assembly asm = Assembly.GetExecutingAssembly();
                using (Stream zipStream = asm.GetManifestResourceStream("app.zip"))
                {
                    if (zipStream == null)
                    {
                        ShowError("L'archive d'installation intégrée est introuvable.");
                        return;
                    }

                    using (ZipArchive archive = new ZipArchive(zipStream, ZipArchiveMode.Read))
                    {
                        int total = archive.Entries.Count;
                        int current = 0;

                        foreach (ZipArchiveEntry entry in archive.Entries)
                        {
                            current++;
                            string entryName = entry.FullName;
                            
                            // Skip top root directory prefix if present (e.g. EDUMIND-win32-x64/)
                            if (entryName.StartsWith("EDUMIND-win32-x64/") || entryName.StartsWith("EDUMIND-win32-x64\\"))
                            {
                                entryName = entryName.Substring("EDUMIND-win32-x64/".Length);
                            }
                            if (string.IsNullOrEmpty(entryName)) continue;

                            string destPath = Path.Combine(installPath, entryName);

                            if (entry.FullName.EndsWith("/") || entry.FullName.EndsWith("\\"))
                            {
                                Directory.CreateDirectory(destPath);
                                continue;
                            }

                            string parentDir = Path.GetDirectoryName(destPath);
                            if (!Directory.Exists(parentDir))
                            {
                                Directory.CreateDirectory(parentDir);
                            }

                            entry.ExtractToFile(destPath, true);

                            int pct = 10 + (int)((current / (double)total) * 75);
                            if (current % 10 == 0 || current == total)
                            {
                                UpdateStatus("Installation : " + Path.GetFileName(entryName), pct);
                            }
                        }
                    }
                }

                UpdateStatus("Création des raccourcis du bureau...", 90);
                CreateShortcuts();

                UpdateStatus("Installation terminée avec succès !", 100);

                this.Invoke(new Action(() =>
                {
                    lblTitle.Text = "EDUMIND est prêt !";
                    lblTitle.ForeColor = Color.FromArgb(74, 222, 128); // Green
                    lblStatus.Text = "L'application a été installée avec succès sur votre ordinateur.";
                    lblStatus.ForeColor = Color.FromArgb(74, 222, 128);
                    btnAction.Text = "Terminer";
                    btnAction.BackColor = Color.FromArgb(22, 163, 74);
                    btnAction.Enabled = true;
                    isFinished = true;
                }));
            }
            catch (Exception ex)
            {
                ShowError("Erreur lors de l'installation : " + ex.Message);
            }
        }

        private void UpdateStatus(string text, int progress)
        {
            if (this.InvokeRequired)
            {
                this.Invoke(new Action(() => UpdateStatus(text, progress)));
                return;
            }
            lblStatus.Text = text;
            progressBar.Value = Math.Min(100, Math.Max(0, progress));
        }

        private void ShowError(string message)
        {
            if (this.InvokeRequired)
            {
                this.Invoke(new Action(() => ShowError(message)));
                return;
            }
            MessageBox.Show(this, message, "Erreur d'installation", MessageBoxButtons.OK, MessageBoxIcon.Error);
            btnAction.Enabled = true;
            btnAction.Text = "Réessayer";
        }

        private void CreateShortcuts()
        {
            try
            {
                string iconPath = Path.Combine(installPath, "resources", "app", "public", "icon.ico");
                if (!File.Exists(iconPath)) iconPath = installedExe;

                // 1. Desktop Shortcuts (Standard Desktop + OneDrive Desktop)
                string userProfile = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
                string[] desktopDirs = new string[]
                {
                    Environment.GetFolderPath(Environment.SpecialFolder.Desktop),
                    Path.Combine(userProfile, "OneDrive", "Desktop"),
                    Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.CommonDesktopDirectory))
                };

                foreach (string d in desktopDirs)
                {
                    if (Directory.Exists(d))
                    {
                        string linkPath = Path.Combine(d, "EDUMIND.lnk");
                        WriteShortcut(linkPath, installedExe, installPath, iconPath, "EDUMIND - Gestion Scolaire");
                    }
                }

                // 2. Start Menu Shortcut
                string startMenu = Environment.GetFolderPath(Environment.SpecialFolder.Programs);
                if (Directory.Exists(startMenu))
                {
                    string linkPath = Path.Combine(startMenu, "EDUMIND.lnk");
                    WriteShortcut(linkPath, installedExe, installPath, iconPath, "EDUMIND - Gestion Scolaire");
                }
            }
            catch {}
        }

        private void WriteShortcut(string linkPath, string targetPath, string workDir, string iconPath, string desc)
        {
            try
            {
                Type shellType = Type.GetTypeFromProgID("WScript.Shell");
                if (shellType == null) return;
                dynamic shell = Activator.CreateInstance(shellType);
                dynamic shortcut = shell.CreateShortcut(linkPath);
                shortcut.TargetPath = targetPath;
                shortcut.WorkingDirectory = workDir;
                shortcut.IconLocation = iconPath + ", 0";
                shortcut.Description = desc;
                shortcut.Save();
            }
            catch {}
        }
    }
}
