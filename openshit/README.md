README for TestManager
==========================
gradlew bootRun
gradlew -Pprod bootRun
gradlew -Pprod bootRepackage
java -jar build\libs\testmanager3-0.1-SNAPSHOT.war --spring.profiles.active=prod

wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u5-b13/jdk-8u5-linux-x64.tar.gz
tar -zxf jdk-8u5-linux-x64.tar.gz
export PATH=$OPENSHIFT_DATA_DIR/jdk1.8.0_05/bin:$PATH
export JAVA_HOME="$OPENSHIFT_DATA_DIR/jdk/jdk1.8.0_05"

pwd
export PATH=/home/yaniv/APP/jdk1.8.0_05/bin:$PATH
export JAVA_HOME="/home/yaniv/APP/jdk1.8.0_05"
java -jar testmanager3-0.1-SNAPSHOT.war
java -jar $OPENSHIFT_DATA_DIR\testmanager3-0.1-SNAPSHOT.war

rhc app start -a diy
rhc app stop -a diy

vi /etc/ssh/ssh_config
edit i
sto edit "escape"
TCPKeepAlive yes
ClientAliveInterval 30
ClientAliveCountMax 99999

save&quit :wq
Don't save&quit :q!

/var/lib/openshift/560910220c1e663433000134/app-root/runtime/repo/.openshift/action_hooks/start
unset TMOUT