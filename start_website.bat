@echo off
echo ---------------------------------------------------
echo      STARTING RAEES PORTFOLIO WEBSITE
echo ---------------------------------------------------
echo.
echo 1. Starting local server...
echo 2. Opening Google Chrome / Default Browser...
echo.
echo DO NOT CLOSE THIS WINDOW while using the website.
echo.

start http://localhost:8000/index.html
python -m http.server 8000
