rem @echo off
echo *********************************************************
echo Send BDD Automation Report
echo *********************************************************

cd ../
set /p BuildNumber=<BuildNumber.txt
set /a "BuildNumber=%BuildNumber%"
cd sac-auto-tests\whgtf.standalone.casinos.tests
set /p versionBuild=<versionBuild.txt
echo versions are: %versionBuild%-%BuildNumber%

curl -X PUT -d @./target/cucumber/cucumber-json-report.json https://192.168.99.100:8086/xbdd/rest/reports/Eurogrand/%versionBuild%/%BuildNumber% --header Content-Type:application/json -u admin:password -k -sS

echo *********************************************************
echo Send BDD ManualReport
echo *********************************************************

cmd /c mvn -q -U test -Dtest=TestRunnerDry -Dcucumber.options="--dry-run --tags @manual"

curl -X PUT -d @./target/cucumber/cucumber-json-report-manual.json https://192.168.99.100:8086/xbdd/rest/reports/Eurogrand/%versionBuild%/%BuildNumber% --header Content-Type:application/json -u admin:password -k -sS

cd ../../
set /a "BuildNumber=%BuildNumber%+1"
rem echo %cd%%
echo "%BuildNumber%">BuildNumber.txt