@echo off
ECHO rebuild solusion
rem cd C:\SVN\BAU_Automation_Tests\ClientsAutomationTests
%SystemRoot%\Microsoft.NET\Framework\v4.0.30319\MSBuild.exe UI_Automation.sln /t:rebuild /p:Configuration=Release
set BUILD_STATUS=%ERRORLEVEL%
if %BUILD_STATUS%==0 echo Build success
if not %BUILD_STATUS%==0 GOTO BuildFail

ECHO Run Tests 
cd TestBuild
del TestResult.trx
rem ..\Resources\RunTestFromCSV "%PROGRAMFILES%\Microsoft Visual Studio 10.0\Common7\IDE\MSTest.exe" TestResult.trx ..\Tests.csv
rem "%PROGRAMFILES%\Microsoft Visual Studio 10.0\Common7\IDE\MSTest.exe" /testmetadata:..\UI_Automation1.vsmdi /resultsfile:TestResult.trx
"%PROGRAMFILES%\Microsoft Visual Studio 10.0\Common7\IDE\MSTest.exe" /TestContainer:..\Clients\bin\Debug\com.who.tests.clients.dll /test:SkykingEnClientEn /detail:stdout
set TESTS_STATUS=%ERRORLEVEL%

ECHO Build Report MSTestResultViewer
del TestResult.htm
"C:\Program Files\trx2html\VSTSTestReport.exe"  TestResult.trx  TestResult.htm"
rem ECHO Build Report MSTestResultViewer
rem "C:\Program Files\MSTest Result Viewer/MSTestResultViewer.Consol.exe" /t "C:\SVN\UI_Automation\TestResult.trx" /d "C:\SVN\UI_Automation\Report"

ECHO Open Report
start chrome "TestResult.htm"

ECHO Sending Report by Email
..\Resources\SendEmailReport TestResult.htm %TESTS_STATUS% "Yaniv.Cohen@williamhill.com"

rem ECHO Build Documentation
rem cd ../Documentation
rem %SystemRoot%\Microsoft.NET\Framework\v4.0.30319\msbuild.exe ..\ClientsAutoTestsDoc.shfbproj 

if %TESTS_STATUS%==0 echo All Tests Pass
if not %TESTS_STATUS%==0 echo Some Tests Fail
GOTO END

:BuildFail
echo Build failed
rem pause
exit /b %BUILD_STATUS%

:END
echo End Running all tests
exit /b %TESTS_STATUS%