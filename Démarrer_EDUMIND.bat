@echo off
title EDUMIND - Demarrage du systeme
echo ===================================================
echo     EDUMIND - Systeme de Gestion Scolaire Pro
echo ===================================================
echo.
echo Lancement du serveur local...
start "" http://localhost:3000
node server.js
pause
