@echo off

REM Windows script for running unit tests
REM You have to run server and capture some browser first
REM
REM Requirements:
REM - Java (http://www.java.com)

set BASE_DIR=%~dp0

java -jar "%BASE_DIR%\..\test\jsTestDriver\JsTestDriver-patched-1.3.4.b.jar" ^
     --config "%BASE_DIR%\..\test\jasmine\config\jsTestDriver_jasmine.conf" ^
     --basePath "%BASE_DIR%\.." ^
     --tests all ^
     --reset ^
     --captureConsole ^
     --testOutput "%BASE_DIR%\..\jsTestDriver-results"
pause