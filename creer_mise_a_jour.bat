@echo off
chcp 65001 >nul
title EDUMIND - Créateur de Mise à Jour Automatique
cd /d "%~dp0"

echo ========================================================
echo     EDUMIND — Création de Patch de Mise à Jour Cloud
echo                   (Veloce Craft)
echo ========================================================
echo.

node build-patch.js %*

pause
