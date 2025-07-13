package org.gradle;

import org.junit.Test;

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

public class WD_ServerTest {
	
	String newLine = System.getProperty("line.separator");
	/**
	 	MailParser
		DESTINATION = 95.138.163.84
		KEY=/var/lib/jenkins/.ssh/jenkins.key
		
		/home/parser //parser location
		/home/parser/start_script.sh stop //stop
		/home/parser/kill.sh; rm mailParser.pid //force kill
		/home/parser/start_script.sh start //start
		scp -i $KEY parser@$DESTINATION:/home/parser/log4j-application.log $WORKSPACE //log file
		nohup java -server myApplication.jar > /log.txt &//run in background
	 * @throws IOException
	 * @throws InterruptedException 
	 */
    @Test
    public void TestTheWS() throws IOException, InterruptedException {
    	String url = "http://localhost:8080/GetLastReadDate";	
		float deltaSec = 2;
    	try {
			URL obj = new URL(url);
			HttpURLConnection con = (HttpURLConnection) obj.openConnection();
			// optional default is GET
			con.setRequestMethod("GET");
			//add request header
			con.setRequestProperty("User-Agent", "Mozilla/5.0");
			int responseCode = con.getResponseCode();
			System.out.println("\nSending 'GET' request to URL : " + url);
			System.out.println("Response Code : " + responseCode);
			BufferedReader in = new BufferedReader(new InputStreamReader(
					con.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();
			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();
			DateFormat df = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");
			Date date = null;
			try {
				date = df.parse(response.toString());
			} catch (ParseException e) {

			}
			System.out.println("receive" + df.format(date));
			Thread.sleep(2500);
			Date today = Calendar.getInstance().getTime();
			long delta = getDateDiff(date, today, TimeUnit.MILLISECONDS);
			deltaSec = delta / 1000;
			System.out.println("delta Sec: " + deltaSec);
		} catch (Exception e) {	}
		if (deltaSec > 1.5) {
			 System.out.println("Restart");
			 ProcessBuilder pb = new ProcessBuilder("/home/parser/run_script.sh;");//force stop
			 runProcess(pb);
		}
    }
    
    public static long getDateDiff(Date date1, Date date2, TimeUnit timeUnit) {
        long diffInMillies = date2.getTime() - date1.getTime();
        return timeUnit.convert(diffInMillies, TimeUnit.MILLISECONDS);
    }
    
    public String runProcess(ProcessBuilder pb){
    	 String alllines = "";
		 try {
			Process p = pb.start();
			BufferedReader reader = new BufferedReader(new InputStreamReader(
					p.getInputStream()));
			String line = null;
			alllines = "";
			while ((line = reader.readLine()) != null) {
				alllines = alllines + newLine + line;
				System.out.println(line);
			}
		} catch (Exception e) {
			System.out.println("error:" + e);
		}
		return alllines;
    }
}
