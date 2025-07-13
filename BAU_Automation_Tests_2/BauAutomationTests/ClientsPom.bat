rem ClientsPom.bat testngClientsDebug.xml
rem cmd /c buildCommon.bat
rem testngClientsDebug.xml
cd C:\SVN\BAU_Automation_Tests\trunk\BauAutomationTests
taskkill /f /t /im chromedriver.exe
cmd /c buildClientsInParam.bat %1
set BUILD_STATUS=%ERRORLEVEL%
if %BUILD_STATUS%==0 GOTO BuildPass
taskkill /f /t /im chromedriver.exe
cmd /c buildClientsInParam.bat %1
set BUILD_STATUS=%ERRORLEVEL%
if not %BUILD_STATUS%==0 GOTO BuildFail

:BuildPass
echo Build success
cmd /c SendEmailLocal.bat %1/Pass
exit /b %BUILD_STATUS%

:BuildFail
echo Build failed
cmd /c SendEmailLocal.bat %1/Fail
rem pause
exit /b %BUILD_STATUS%