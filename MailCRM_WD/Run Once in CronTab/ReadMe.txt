to bulid run "gradle build"
to run in folder MailCRM_WD\build\libs run "java -jar mail-crm-wd-0.1.0.jar"

to upload and run new Watchdog job: mailParser.deploy.parser.wd.jar
to see Watchdog log job: mailParser.Log.view.wd


crontab
***************************************************************
to run crontab every 2 hours type
crontab -e
0 0-23/2 * * * /home/parser/start_script.sh once
ESCAPE and then typing :wq (for "write and quit") and pressing ENTER. crontab will give you the following message:
crontab: installing new crontab

crontab Options:
-u	Append the name of the user whose crontab is to be tweaked. If this option is not given, crontab examines "your" crontab, i.e., the crontab of the person executing the command. Note that su can confuse crontab and that if you are running it inside of su you should always use the -u option for safety's sake. The first form of this command is used to install a new crontab from some named file, or from standard input if the filename is given as "-".
-l	Display the current crontab.
-r	Remove the current crontab.
-e	Edit the current crontab, using the editor specified in the VISUAL or EDITOR environment variables.
-i	Same as -r, but gives the user a "Y/n" prompt before actually removing the crontab.
-s	SELinux only: appends the current SELinux security context string as an MLS_LEVEL setting to the crontab file before editing or replacement occurs. See your SELinux documentation for details.