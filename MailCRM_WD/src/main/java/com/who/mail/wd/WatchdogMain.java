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

public class WatchdogMain {
	
	final static Logger logger = Logger.getLogger(WatchdogMain.class);
	static String newLine = System.getProperty("line.separator");
	/**
	 	MailParser
		DESTINATION = 95.138.163.84
		KEY=/var/lib/jenkins/.ssh/jenkins.key
		
		/home/parser //parser location
	 * @throws IOException
	 * @throws InterruptedException 
	 */
	public static void main(String[] args) throws IOException, InterruptedException {
    	String url = "http://localhost:8080/GetLastReadDate";	
		double deltaDays = 1.5;
		Date date = null;
		logger.info("Watchdog start ***********************************************************");
		try {
			System.out.println("Restart main program");
			executeCommand("sh /home/parser/run_script.sh");//force stop
			Thread.sleep(10000);//waiting for reboot
		} catch (Exception e) {
			logger.error("erorr restart: ", e);
		}
		while (true) {
	    	try {
				URL obj = new URL(url);
				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
				// optional default is GET
				con.setRequestMethod("GET");
				//add request header
				con.setRequestProperty("User-Agent", "Mozilla/5.0");
				int responseCode = con.getResponseCode();
				logger.info("Sending 'GET' request to URL : " + url);
				logger.info("Response Code : " + responseCode);
				BufferedReader in = new BufferedReader(new InputStreamReader(
						con.getInputStream()));
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
				deltaDays = deltaSec/(60*60*12); //12 Hours
				logger.info("delta Days: " + deltaDays);
			} catch (Exception e) {
				logger.error("erorr: ", e);
				deltaDays = deltaDays + 1/12;//add 1 Hours
			}
			if (deltaDays > 1) { //more then 12 Hours
				 System.out.println("Restart");
				 logger.info("Watchdog Restart last read in days:" + deltaDays);
				 executeCommand("sh /home/parser/run_script.sh");//force stop
			}
			Thread.sleep(60000*60*1); //Sleep 4 Hours
		}
    }
    
    public static long getDateDiff(Date date1, Date date2, TimeUnit timeUnit) {
        long diffInMillies = date2.getTime() - date1.getTime();
        return timeUnit.convert(diffInMillies, TimeUnit.MILLISECONDS);
    }
    
    private static String executeCommand(String command) {

		StringBuffer output = new StringBuffer();

		Process p;
		try {
			p = Runtime.getRuntime().exec(command);
			p.waitFor();
			BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
			BufferedReader stdError = new BufferedReader(new InputStreamReader(p.getErrorStream()));
			String line = "";			
			while ((line = stdInput.readLine())!= null) {
				output.append(line + "\n");
				logger.info(line);
			}
			while ((line = stdError.readLine())!= null) {
				output.append(line + "\n");
				logger.error("erorr: " + line);
			}
		} catch (Exception e) {
			logger.error("erorr: ", e);
		}

		return output.toString();

	}
}
