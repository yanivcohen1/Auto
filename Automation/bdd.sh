#!/bin/sh
echo "*********************************************************";
echo Send BDD Automation Report;
echo "*********************************************************";

cd ../
pwd1=$(pwd);
echo $pws1
file="/BuildNumber.txt"
BuildNumber=$pwd1$file;
echo $BuildNumber
cd sac-auto-tests/whgtf.standalone.casinos.tests;
versionBuild=versionBuild.txt;
echo versions are: $(cat $versionBuild)-$(cat $BuildNumber);

curl -X PUT -d @./target/cucumber/cucumber-json-report.json https://192.168.99.100:8086/xbdd/rest/reports/Eurogrand/$(cat $versionBuild)/$(cat $BuildNumber) --header Content-Type:application/json -u admin:password -k -sS

echo "*********************************************************";
echo Send BDD ManualReport;
echo "*********************************************************";

cd ../whgtf.standalone.casinos.parent;

mvn -q -U test -Dtest=TestRunnerDry -Dcucumber.options="--dry-run --tags @manual" -DfailIfNoTests=false

cd ../whgtf.standalone.casinos.tests;
curl -X PUT -d @./target/cucumber/cucumber-json-report-manual.json https://192.168.99.100:8086/xbdd/rest/reports/Eurogrand/$(cat $versionBuild)/$(cat $BuildNumber) --header Content-Type:application/json -u admin:password -k -sS

cd ../../;
BuildNumber=`expr $(cat $BuildNumber) + 1`
#BuildNumber1=$(cat $BuildNumber)+1;
pwd;
echo $BuildNumber>BuildNumber.txt;
#echo $BuildNumber>BuildNumber.txt;