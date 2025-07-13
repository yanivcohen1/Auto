echo EgDev Merge EgDev
pause
@echo off
cd C:\Git\eg-auto-tests-dev
SETLOCAL EnableDelayedExpansion
for /F "tokens=1,2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do rem"') do (
  set "DEL=%%a"
)
@echo on
git pull
if not %ERRORLEVEL%==0 GOTO MergeFail
git merge origin/whcc-auto-tests-Dev
if not %ERRORLEVEL%==0 GOTO MergeFail
git push
if %ERRORLEVEL%==0 GOTO MergePass

:MergeFail
call :ColorText 4e "merge failed" rem red
pause
exit /b %ERRORLEVEL%

:MergePass
call :ColorText 2F "sucsess Running all merge" rem grean
pause
exit /b %ERRORLEVEL%

:ColorText
echo off
<nul set /p ".=%DEL%" > "%~2"
findstr /v /a:%1 /R "^$" "%~2" nul
del "%~2" > nul 2>&1
goto :eof