#!/bin/sh
SERVICE_NAME=mailParserWD
PATH_TO_JAR=/home/parser/mailWd.jar
PID_PATH_NAME=/home/parser/mailParserWD.pid
case $1 in
    start)
        echo "Starting $SERVICE_NAME ..."
        if [ ! -f $PID_PATH_NAME ]; then
            nohup java -jar $PATH_TO_JAR > /dev/null 2>&1 &
                        echo $! > $PID_PATH_NAME
			echo $(cat $PID_PATH_NAME)
            echo "$SERVICE_NAME started ..."
        else
            echo "$SERVICE_NAME is already running ..."
        fi
    ;;
    stop)
        if [ -f $PID_PATH_NAME ]; then
            PID=$(cat $PID_PATH_NAME);
            echo "$SERVICE_NAME stoping ..."
            kill $PID;
            echo "$SERVICE_NAME stopped ..."
            rm $PID_PATH_NAME
        else
            echo "$SERVICE_NAME is not running ..."
        fi
    ;;
    restart)
        if [ -f $PID_PATH_NAME ]; then
            PID=$(cat $PID_PATH_NAME);
            echo "$SERVICE_NAME stopping ...";
            kill $PID;
            echo "$SERVICE_NAME stopped ...";
            rm $PID_PATH_NAME
            echo "$SERVICE_NAME starting ..."
            nohup java -jar $PATH_TO_JAR /tmp 2>> /dev/null >> /dev/null &
                        echo $! > $PID_PATH_NAME
            echo "$SERVICE_NAME started ..."
        else
            echo "$SERVICE_NAME is not running ..."
        fi
    ;;
    once)
    	echo "$SERVICE_NAME killed ...";
    	if [ -f $PID_PATH_NAME ]; then
			kill -9 $PID;
		fi
        ps -ef |grep -i $PATH_TO_JAR |grep -v grep |awk '{print $2}' |xargs kill -9
		rm $PID_PATH_NAME
        echo "$SERVICE_NAME starting ..."
        nohup java -jar $PATH_TO_JAR > /dev/null 2>&1 &
                        echo $! > $PID_PATH_NAME
        echo "$SERVICE_NAME started ..."
    ;;
	send_email)
    	echo "Sending Email ...";
		echo $2 | mailx -s "Mail Parser error" yaniv.cohen@williamhill.com
		echo "Sended Email ...";
	;;
esac 