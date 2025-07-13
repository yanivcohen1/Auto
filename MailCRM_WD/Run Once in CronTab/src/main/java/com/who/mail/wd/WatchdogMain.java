package com.who.mail.wd;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import org.apache.log4j.Logger;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class WatchdogMain extends Utill {
	
	final static Logger logger = Logger.getLogger(WatchdogMain.class);
	static String newLine = System.getProperty("line.separator");
	
	public static void main(String[] args) throws Exception {
		WatchdogMain watchdogMain = new WatchdogMain();
		watchdogMain.run();
    }

	private void run() throws Exception{
		ExecutorService executor = Executors.newSingleThreadExecutor();
        Future<String> future = executor.submit(new WD_Task());
        try {
        	logger.info("Watchdog start ***********************************************************");
        	logger.info(future.get(5, TimeUnit.MINUTES));//wait 5 minutes to finish task
        	logger.info("Watchdog Finished Successfully!");
        } catch (TimeoutException e) {
        	logger.info("Watchdog TimeOut ------------------------------------------------");
        	logger.error("Watchdog TimeOut Timer erorr: ", e);
        	reloadDockerContiner();// force stop
        	sendEmail("Watchdog TimeOut error: " + e.getMessage());
			// executeCommand("echo \" "+ msg +" \" | mailx -s \"Mail Parser);
            future.cancel(true);
            logger.info("Watchdog TimeOut Terminated!");
        }
        executor.shutdownNow();
        logger.info("Watchdog Ended ***********************************************************");
	}
	
}