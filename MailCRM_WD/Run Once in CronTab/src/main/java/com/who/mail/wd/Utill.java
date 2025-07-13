package com.who.mail.wd;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;

public class Utill {

	final static Logger logger = Logger.getLogger(Utill.class);
	
	protected void reloadDockerContiner() {
		String runScriptReloadContiner = "sh /home/parser/run_script.sh";
		executeCommand(runScriptReloadContiner);
	}
	
	protected void sendEmail(String msg) {
		executeCommand("sh /home/parser/start_script.sh send_email \"" + msg + "\"");
	}
	
	protected long getDateDiff(Date date1, Date date2, TimeUnit timeUnit) {
		long diffInMillies = date2.getTime() - date1.getTime();
		return timeUnit.convert(diffInMillies, TimeUnit.MILLISECONDS);
	}

	protected static String executeCommand(String command) {
		StringBuffer output = new StringBuffer();
		Process p;
		try {
			p = Runtime.getRuntime().exec(command);
			p.waitFor();
			BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
			BufferedReader stdError = new BufferedReader(new InputStreamReader(p.getErrorStream()));
			String line = "";
			while ((line = stdInput.readLine()) != null) {
				output.append(line + "\n");
				logger.info(line);
			}
			while ((line = stdError.readLine()) != null) {
				output.append(line + "\n");
				logger.error("erorr: " + line);
			}
		} catch (Exception e) {
			logger.error("erorr: ", e);
		}
		return output.toString();
	}
	
}
