cd C:\SVN\BAU_Automation_Tests\trunk\BauAutomationTests
mvn clean install -DsuiteFile=%1
rem java -jar SendEmailReport.jar