@echo off
chcp 65001 >nul
cd /d "%~dp0"
node get-hwid.js
echo.
pause
