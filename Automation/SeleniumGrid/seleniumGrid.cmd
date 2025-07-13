java -jar selenium-server-standalone-2.52.0.jar ^ 
-role node ^ 
-hub http://127.0.0.1:4444/grid/register ^
-browser browserName=chrome,maxInstances=1,platform=WINDOWS ^
-Dwebdriver.chrome.driver=chromedriver.exe