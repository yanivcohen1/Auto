#!/bin/bash
#./home/parser/run_script.sh
#sh run_script.sh
PID_PATH_NAME=/home/parser/mailParserDocker.pid
#cat $PID_PATH_NAME
#ls -la /home/parser/mailParserDocker.pid
#pwd
OLDJOB=`cat $PID_PATH_NAME`
echo "old container" $OLDJOB
#needed to add /home/parser/ root dir
sudo docker rm -f mailParser
#sudo docker stop $(sudo docker ps -a -q)
#docker load --input /home/parser/crm-parser.tar
 #$JOB=$(docker run -d crm-parser /bin/sh -c "java -jar mail-crm-0.1.0.jar")
 #docker run -it crm-parser bash -c "java -jar mail-crm-0.1.0.jar"
JOB=$(sudo docker run -d -p 8080:8080 -v /home/parser/:/app --name mailParser crm-parser bash -c "cd app;java -jar mailParser.jar")
echo "new container" $JOB
echo $JOB > $PID_PATH_NAME
sudo docker logs $JOB
