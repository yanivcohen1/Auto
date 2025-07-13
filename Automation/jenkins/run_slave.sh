#!/bin/sh

nohup java -jar slave.jar -jnlpUrl http://192.168.99.100:8083/computer/jenkins_main_slave/slave-agent.jnlp -secret 647ca5c81b131f7adbfe33fe1fcdda7e5611557d21b641f95711b81a3ac44624 > /dev/null 2>&1 &