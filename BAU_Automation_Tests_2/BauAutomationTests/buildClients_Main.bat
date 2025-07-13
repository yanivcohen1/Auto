cd C:\SVN
svn checkout https://10.245.0.179/svn/who/BAU_Automation_Tests/trunk BAU_Automation_Tests --username jenkins --password jenkins
cd C:\SVN\BAU_Automation_Tests\BauAutomationTests
cmd /c buildCommon.bat
cmd /c buildClients.bat
rem mvn -f ClientsPom.xml install
cd C:\SVN\BAU_Automation_Tests\BauAutomationTests
java -jar SendEmailReport.jar
rem pause