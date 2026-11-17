@echo off
chcp 65001 >nul
title EDUMIND - Réparation de la base de données
cd /d "%~dp0"

echo ========================================================
echo     EDUMIND — Réparation de la Base de Données
echo             (إصلاح قاعدة بيانات إدوميند)
echo ========================================================
echo.

node repair_database.js

echo.
pause
