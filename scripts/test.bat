@echo off

REM Windows script for running unit tests
REM You have to run server and capture some browser first
REM
REM Requirements:
REM - NodeJS (http://nodejs.org/)
REM - Karma (npm install -g karma)

set BASE_DIR=%~dp0
set CHROME_BIN=C:\inet\INET\BROWSERS\GoogleChromePortable31\GoogleChromePortable.exe
karma start "%BASE_DIR%\..\config\karma.conf.js" %*
