cmd /c mvn -f pom-jar-with-dependencies.xml install
java -cp target/SendEmail-0.0.1-SNAPSHOT-jar-with-dependencies.jar com.who.sendEmail.SendReportEmail