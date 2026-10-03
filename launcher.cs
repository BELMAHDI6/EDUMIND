using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;

namespace EdumindLauncher
{
    static class Program
    {
        [STAThread]
        static void Main()
        {
            try
            {
                string baseDir = AppDomain.CurrentDomain.BaseDirectory;
                string electronExe = Path.Combine(baseDir, "node_modules", "electron", "dist", "electron.exe");

                if (!File.Exists(electronExe))
                {
                    MessageBox.Show("Moteur Electron introuvable dans :\n" + electronExe,
                        "EDUMIND", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }

                ProcessStartInfo psi = new ProcessStartInfo();
                psi.FileName = electronExe;
                psi.Arguments = ".";
                psi.WorkingDirectory = baseDir;
                psi.UseShellExecute = true;

                Process.Start(psi);
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erreur de lancement : " + ex.Message,
                    "EDUMIND", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
    }
}
