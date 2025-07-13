README for TestManager
==========================
gradlew bootRun
gradlew -Pprod bootRun
gradlew -Pprod bootRepackage
java -jar build\libs\testmanager-0.1-SNAPSHOT.war --spring.profiles.active=prod

docker run -d --name sonarqube -p 9001:9000 -p 9092:9092 sonarqube
gradlew sonarqube -Dsonar.host.url=http://192.168.99.102:9001