package com.who.bi;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.events.WebDriverEventListener;

public class Utility {

	private static final Logger logger = LoggerFactory.getLogger(Utility.class);
	public static WebDriverEventListener eventListener = new MyEventListener();
	public static final String newline = System.getProperty("line.separator");
	private static String sourceFolder = null;
	
	public static String getFileFromResource(String fileName) {
		if (sourceFolder == null) {
			Utility utility = new Utility();
			try {
				File file = new File(utility.getResoucePath(fileName)).getParentFile();
				sourceFolder = file.getAbsolutePath();
			} catch (Exception e) {
				//logger.info("Prod Mode");
				try {
					String location = utility.GetExecutionPath();
					System.out.println("Exe Dir: " + location);
					//logger.info("Exe Dir: " + location);
					sourceFolder = location + "/classes/";
				} catch (Exception ex) {
					System.out.println("error: " + ex);
					//logger.error(ex);
				}
			}
		}
		return sourceFolder + "/" + fileName;
	}
	
	private String GetExecutionPath(){
	    String absolutePath = getClass().getProtectionDomain().getCodeSource().getLocation().getPath();
	    absolutePath = absolutePath.substring(0, absolutePath.lastIndexOf("/"));
	    absolutePath = absolutePath.replaceAll("%20"," "); // Surely need to do this here
	    return absolutePath;
	}
	
	private String getResoucePath(String fileName) {
		ClassLoader classLoader = getClass().getClassLoader();
		String path = classLoader.getResource(fileName).getFile();
		return path;
	}

	/**
	 * terminate Chrome
	 * @return
	 */
	public static void terminateChrome() {
		try {
			String[] command = new String[3];
			command[0] = "cmd";
			command[1] = "/C";
			command[2] = "taskkill /f /IM chromedriver.exe /t";
			Process p2 = Runtime.getRuntime().exec(command);
			p2.waitFor();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		//return "";
	}
	
	public static WebDriver getDriver() {
		
		System.setProperty("webdriver.chrome.driver", getFileFromResource("chromedriver.exe"));
		ChromeOptions options = new ChromeOptions();
		ArrayList<String> switches = new ArrayList<String>();
		switches.add("--disable-extensions");
		options.addArguments(switches);
		WebDriver driver = new ChromeDriver(options);
		driver = new EventFiringWebDriver(driver).register(eventListener);//driver;
	    return driver;
	}
	
	public static String readProp(String propFile, String key) {
		
		String ret = null;
		Properties prop = new Properties();
		InputStream input = null;
		try {
			input = new FileInputStream(propFile);
			// load a properties file
			prop.load(input);
			// get the properties value
			ret = prop.getProperty(key);
	 
		} catch (IOException io) {
			logger.error(io.getMessage(), io);
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return ret;
	 }
	
	public static Date addDays(Date date, int days)
    {
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.add(Calendar.DATE, days); //minus number would decrement the days
        return cal.getTime();
    }
	
}
