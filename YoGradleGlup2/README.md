README for TestManager
==========================
gradlew bootRun
gradlew -Pprod bootRun
gradlew -Pprod bootRepackage
java -jar build\libs\testmanager-0.1-SNAPSHOT.war --spring.profiles.active=prod

#docker
docker run -it -v //c/Users/docker/test_manager:/test_manager tests_manager bash
cp -avr ./test_manager/ ./app

wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u5-b13/jdk-8u5-linux-x64.tar.gz
tar -zxf jdk-8u5-linux-x64.tar.gz
export PATH=$OPENSHIFT_DATA_DIR/jdk1.8.0_05/bin:$PATH
export JAVA_HOME="$OPENSHIFT_DATA_DIR/jdk/jdk1.8.0_05"

pwd
export PATH=/home/yaniv/APP/jdk1.8.0_05/bin:$PATH
export JAVA_HOME="/home/yaniv/APP/jdk1.8.0_05"
java -jar testmanager2-0.1-SNAPSHOT.war