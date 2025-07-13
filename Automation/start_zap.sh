#!/bin/bash
echo "*********************************************************"
echo "echo START ZAP PROXY IN BACKROUND"
echo "*********************************************************"

BUILD_ID=dontKillMe
PID_PATH_NAME=/share/ZAP.pid
cd /share/ZAP_2.6.0;
nohup java -Xmx512m -jar zap-2.6.0.jar -daemon -host 127.0.0.1 -port 8080 -config api.key=a0t9vfg5rbi6abc0ek1clkudfp  2>> /dev/null >> /dev/null &
echo $! > $PID_PATH_NAME

echo "*********************************************************"
echo "CHECK IF ZAP PROXY IS UP"
echo "*********************************************************"

#counter for connection attempts
counter=1;
LIMIT=5;

#SENT_CURL_REQUEST_TO_VALIDATE_CONNECTION
echo "TEST CONNECTION TO ZAP PROXY";
find=false;
while [ $counter -lt "$LIMIT" ]
do
   counter=$(($counter+1));
   curl_output=$(curl -s "http://127.0.0.1:8080/JSON/core/action/newSession/?zapapiformat=JSON&apikey=a0t9vfg5rbi6abc0ek1clkudfp&name=&overwrite=");
   echo $curl_output
   #if [ -z "${curl_output##*{\"Result\":\"OK\"}*}" ] ;then
   if [ "$curl_output" = "{\"Result\":\"OK\"}" ]
    then
      echo "String '$curl_output' contain substring: '{\"Result\":\"OK\"}'.";
      echo "ZAP IS UP"
      find=true;
      break;
    else
      echo "String '$curl_output' don't contain substring: '{\"Result\":\"OK\"}'." 
   fi
   echo "ZAP IS STILL DOWN."
   sleep 5; #sleep 5 sec
   echo -n "$counter "   # This will not execute for 3 and 11.
done 

if $find ; then
  echo "ZAP PROXY IS UP. Response from clear cache request is: $curl_output, test will continue"  
else
    #if number of attempts is equals to 10, exit
   echo "TIMEOUT ERROR. Can't connect to ZAP PROXY after 10 attempts, test will continue with no security log"
	 $(exit 42) ; 
fi