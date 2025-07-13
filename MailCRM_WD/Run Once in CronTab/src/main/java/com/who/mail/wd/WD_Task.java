package com.who.mail.wd;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;
import org.apache.log4j.Logger;

class WD_Task extends Utill implements Callable<String>{

	final static Logger logger = Logger.getLogger(WD_Task.class);

	@Override
	public String call() throws Exception {
		WatchdogWorker();
		// Thread.sleep(6000); // Just to demo a long running task of 4 seconds.
		return "Worker Done!";
	}

	/**
	 * MailParser DESTINATION = 95.138.163.84
	 * KEY=/var/lib/jenkins/.ssh/jenkins.key
	 * 
	 * /home/parser //parser location
	 * 
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public void WatchdogWorker() throws IOException, InterruptedException {
		String errorMsg = null;
		String url = "http://localhost:8080/GetLastReadDate";
		double deltaDays = 1.5;
		Date date = null;
		logger.info("Worker Started..");
		/*
		 * try { System.out.println("Restart main program");
		 * executeCommand(runScriptReloadContiner);//force stop
		 * Thread.sleep(10000);//waiting for reboot } catch (Exception e) {
		 * logger.error("erorr restart: ", e); }
		 */
		// while (true) {
		try {
			URL obj = new URL(url);
			HttpURLConnection con = (HttpURLConnection) obj.openConnection();
			con.setConnectTimeout(15000);//15sec onnectTimeout
			con.setReadTimeout(15000);//15sec ReadTimeout 
			con.setAllowUserInteraction(false);         
			con.setDoOutput(true);
			// optional default is GET
			con.setRequestMethod("GET");
			// add request header
			con.setRequestProperty("User-Agent", "Mozilla/5.0");
			int responseCode = con.getResponseCode();
			logger.info("Sending 'GET' request to URL : " + url);
			logger.info("Response Code : " + responseCode);
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();
			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();
			DateFormat df = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");
			date = df.parse(response.toString());
			logger.info("receive date: " + df.format(date));
			Thread.sleep(2500);
			Date today = Calendar.getInstance().getTime();
			long delta = getDateDiff(date, today, TimeUnit.MILLISECONDS);
			double deltaSec = delta / 1000;
			logger.info("delta Sec: " + deltaSec);
			deltaDays = deltaSec / (60 * 60 * 24); // 24 Hours
			logger.info("delta Days: " + deltaDays);
		} catch (Exception e) {
			logger.error("erorr: ", e);
			deltaDays = 2;// for restart
			errorMsg = e.getMessage();
			// deltaDays = deltaDays + 1/24;//add 1 Hours
		}
		if (deltaDays > 1) { // more then 24 Hours
			System.out.println("Restart");
			logger.info("Watchdog Restart last read in days:" + deltaDays);
			reloadDockerContiner();// force stop
			String msg = "Watchdog Restart last read in days:" + deltaDays;
			if (errorMsg != null) {
				msg = "erorr: " + errorMsg;
			}
			sendEmail(msg);
			// executeCommand("echo \" "+ msg +" \" | mailx -s \"Mail Parser
			// error\" yaniv.cohen@williamhill.com");
			//executeCommand("sh /home/parser/start_script.sh send_email \"" + msg + "\"");
		}
		// Thread.sleep(1000*60*60*2); //Sleep 2 Hours
		// }
	}
	
}
