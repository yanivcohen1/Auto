cd C:\SVN\automation_tools\SendEmailLocal
set emailList="Yaniv.Cohen@williamhill.com"
rem ,Bella.Logvin@williamhill.com,Daniel.Lederer@williamhill.com"
mvn -Dexec.arguments=%1 clean install exec:java