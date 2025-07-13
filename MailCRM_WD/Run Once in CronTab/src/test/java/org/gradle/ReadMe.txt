Docker win
pwd
sudo -i //root
df -H //hd file size
docker stop $(docker ps -a -q) //stop all containers
docker ps //running containers
docker images //all available images
sudo docker run -d -v /home/parser/:/app crm-parser bash -c './app/java -jar mailParser.jar'
docker build -t crm-parser .
docker run -it crm-parser bash //ineractive bash(process)
ps -ef |grep java|grep -v grep //running java process
nohup java -jar mail-crm-0.1.0.jar & //run java process in backrund
docker commit <container id> crm-parser-run // save current container in different name
docker save crm-parser > crm-parser.tar //save image to tar file
docker load --input crm-parser.tar // load image from tar file

#load script
scp -i $KEY $WORKSPACE/start_script.sh parser@$DESTINATION:/home/parser

#load container zip
scp -i $KEY $WORKSPACE/crm-parser.tar parser@$DESTINATION:/home/parser

#content of /home/parser/run_script.sh
#!/bin/sh

#./home/parser/run_script.sh
PID_PATH_NAME=/home/parser/mailParser.pid

#cat $PID_PATH_NAME
OLDJOB=$(cat $PID_PATH_NAME)

#needed to add /home/parser/ root dir
docker kill $OLDJOB

docker load --input /home/parser/crm-parser.tar

 #$JOB=$(docker run -d crm-parser /bin/sh -c "java -jar mail-crm-0.1.0.jar")
 #docker run -it crm-parser bash -c "java -jar mail-crm-0.1.0.jar"
JOB=$(docker run -d crm-parser bash -c "java -jar mail-crm-0.1.0.jar")
echo $JOB
echo $JOB > $PID_PATH_NAME
docker logs $JOB
