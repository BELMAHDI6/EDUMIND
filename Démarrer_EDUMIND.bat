@echo off
title EDUMIND - Application Desktop
cd /d "%~dp0"
echo ========================================================
echo     EDUMIND - Systeme de Gestion Scolaire Pro
echo                 Version Desktop
echo ========================================================
echo.
echo Lancement de la fenetre Desktop EDUMIND...
start "" ".\node_modules\electron\dist\electron.exe" .
