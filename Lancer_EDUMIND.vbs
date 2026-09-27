Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
currentDir = fso.GetParentFolderName(WScript.ScriptFullName)
WshShell.CurrentDirectory = currentDir

exePath = currentDir & "\node_modules\electron\dist\electron.exe"
cmd = """" & exePath & """ """ & currentDir & """"

WshShell.Run cmd, 0, False
