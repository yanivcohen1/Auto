package com.who.bi;

import java.io.File;
import java.io.IOException;
import java.nio.file.CopyOption;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.joda.time.LocalDate;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class App {

	final static Logger logger = LoggerFactory.getLogger(App.class);
	private WebDriver driver; 
	private static final String startDate;
	private static final String endDate;
	private static final String downloadPath;//"c:\\ILAnalitics\\"
	private static final String targetPath;
	private static final int delay; //download Delay
	
	/**
	 * init static parameters
	 */
	static {
		//DOMConfigurator.configure(Utility.getFileFromResource("log4j-config.xml"));
		logger.info("Start App" + Utility.newline);
		downloadPath = Utility.readProp(Utility.getFileFromResource("config.property"), "download.path");
		logger.info("download Path: "+ downloadPath);
		logger.debug("debug ");
		targetPath = Utility.readProp(Utility.getFileFromResource("config.property"), "target.path");
		logger.info("copy Path: "+ targetPath);
		Utility.terminateChrome();
		Date date = new Date();
		String _startDate = Utility.readProp(Utility.getFileFromResource("config.property"), "start.date").trim();		
		if (_startDate != "") {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy_MM_dd");
			Calendar c = Calendar.getInstance();
			c.setTime(date);
			c.add(Calendar.DATE, -1); // number of days to add
			startDate = sdf.format(c.getTime()); // dt is now the new date
			endDate = startDate;
		}else{
			startDate = Utility.readProp(Utility.getFileFromResource("config.property"), "start.date").trim();
			endDate = Utility.readProp(Utility.getFileFromResource("config.property"), "end.date").trim();
		}
		delay = Integer.parseInt(Utility.readProp(Utility.getFileFromResource("config.property"), "download.delay"));
		logger.info("start Date:" + startDate);
		logger.info("end Date:" + endDate);
	}
	
	/**
	 * main program loop
	 * @param args
	 * @throws Throwable
	 */
	public static void main(String[] args) throws Throwable{
		
		App app = new App();
		try {
			app.login();
			List<String[]> table = CSVRead.ReadCSV(Utility.getFileFromResource("AppsConfig.csv"));
			//table.remove(0);
			int i = 1;
			int all = table.size();
			for (String[] line : table) {
				logger.info("Run " + i + " from " + all);
				logger.info("Now Running " +line[0]);
				app.downloadApp(line);
				i++;
			}
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		} finally {
			app.finalize();
		}
		//System.gc();
		//System.out.println(getLocalCurrentDate());
	}

	
	/**
	 * find *eventsLog.csv and copy to "c:\\ILAnalitics\\"+line[0] folder create if folder not exist
	 * @param line
	 * @throws IOException
	 * @throws InterruptedException
	 */
	private void downloadApp(String[] line) throws IOException, InterruptedException {
		//DateFormat = 2015_07_12
		String url = "https://dev.flurry.com/eventsLogCsv.do?projectID="+line[1]+"&versionCut=versionsAll&intervalCut=customInterval"+startDate+"-"+endDate+"&childProjectId=0&stream=true&direction=1&offset=0";
		driver.get(url);
		Thread.sleep(delay * 1000);
		Path path = FileSystems.getDefault().getPath(targetPath);
		if (Files.notExists(path)) {// create c:\\ILAnalitics\\
			File dir = new File(targetPath);
			dir.mkdir();
		}
		Path trgetPath = FileSystems.getDefault().getPath(targetPath + "/" + line[0].trim());
		if (Files.notExists(trgetPath)) {// create "c:\\ILAnalitics\\" + line[0]
			trgetPath.toFile().mkdir();
		}
		//search all files
		Path source = FileSystems.getDefault().getPath(downloadPath.trim());
		File[] listOfFiles = source.toFile().listFiles();
		for (File file : listOfFiles) {
		    if (file.isFile()) {
		    	if (file.getName().contains("eventsLog.csv")) {
		    		logger.info("find: " + file.getName());
		    		String targetPathName = trgetPath.toString() +"\\"+ file.getName();
		    		Path targetPath = FileSystems.getDefault().getPath(targetPathName);
		    		Files.copy(file.toPath(), targetPath, StandardCopyOption.REPLACE_EXISTING);//path.resolve(source.getFileName());
		    		try {
						Files.delete(file.toPath());
					} catch (Exception e) {
						logger.error(e.getMessage(), e);
					}
				}
		        
		    }
		}
	}

	/**
	 * login to flurry
	 * @throws Throwable
	 */
	private void login() throws Throwable {

		driver = Utility.getDriver();
		String baseUrl = "https://dev.flurry.com/";
		driver.get(baseUrl + "/secure/login.do");
		driver.findElement(By.id("emailInput")).clear();
		driver.findElement(By.id("emailInput")).sendKeys("omri.dahan@williamhill.com");
		driver.findElement(By.id("passwordInput")).clear();
		driver.findElement(By.id("passwordInput")).sendKeys("omriDa11");
		driver.findElement(By.cssSelector("#loginActionForm > div:nth-child(6) > button")).click();
		Thread.sleep(5000);
		driver.findElement(By.linkText("Applications")).click();
		
	}
	
	/**
	 * finalizer close browser
	 */
	protected void finalize() throws Throwable {
		try {
			driver.quit();
		} catch (Exception e) {
			e.printStackTrace();
		}
    }
	
}
