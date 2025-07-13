package com.who.rest.tests.utils;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
//import org.apache.velocity.Template;
//import org.apache.velocity.VelocityContext;
//import org.apache.velocity.app.VelocityEngine;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.testng.ITestContext;
import org.testng.Reporter;

//import com.wh.auto.common.Reporter;
//import com.wh.auto.common.Reporter.Style;
//import com.wh.auto.common.Reporter.Color;

/**
 * helper library
 * @author yanivc
 *
 */
public class Utility {

	static String path;
	public static String newline = System.getProperty("line.separator");
	public static String newlineHtml = "<br/>";
	public static String _PicBuildPath;//"C:\\SVN\\BAU_Automation_Tests\\BauAutomationTests\\target\\failsafe-reports\\html";
	//static java.util.Properties prop = InitUtility();
	public static String _mainTestsPath; //BAU_Automation_Tests
	public static String _mainTestsBuildPath;
	//private Browsers browser = new Browsers();
	
/*	static{
		System.setProperty("org.uncommons.reportng.escape-output", "false");
		 File parentFolder = null; 
			 try {
				parentFolder = new File(
				         new File(org.testng.Reporter.getCurrentTestResult().getTestContext().getOutputDirectory()).getParent() + File.separator
				                       + "html");
			} catch (Exception e) {
					try {
						String workDir = System.getProperty("user.dir");
						if (System.getProperty("user.dir").substring(workDir.length()-7).contains("target")) {
							parentFolder = new File( workDir + "\\failsafe-reports\\html");
						}else{
							parentFolder = new File( workDir + "\\target\\failsafe-reports\\html");
						}
						
					} catch (Exception e1) {
						throw new IllegalArgumentException("Failed to find report Path 'BAU_Automation_Tests'", e1);
					}
			}
		 
	    if (!parentFolder.exists()) {
	           if (!parentFolder.mkdirs()) {
	        	   Reporter.log("Failed to create folder for logging file");
	        	   throw new IllegalArgumentException("Failed to create folder for logging file");
	           }
	    }
	    
	    File mainTestsPath = parentFolder;
	    boolean find_mainTestsPath = false;
	    do {
	    	if (mainTestsPath.getName().equalsIgnoreCase("BauAutomationTests")) {
	    		_mainTestsPath = mainTestsPath.getParentFile().getAbsolutePath();
	    		find_mainTestsPath = true;
			}else{
				mainTestsPath = mainTestsPath.getParentFile();
				if (mainTestsPath == null) {
					Reporter.log("Failed to find mainTestsPath 'BAU_Automation_Tests'");
					throw new IllegalArgumentException("Failed to find mainTestsPath 'BAU_Automation_Tests'");
					
				}
			}
		} while (!find_mainTestsPath);
	    _PicBuildPath = parentFolder.getAbsolutePath();
	    initClients();
	}*/
	
	private static void initClients() {
		Properties prop = Utility.getPropertyFile("ClientsTest.ini");
		String buildPath = Utility._mainTestsPath + prop.getProperty("BuildPath");
		String buildFolder = prop.getProperty("BuildFolder");
		_mainTestsBuildPath = buildPath + "\\" + buildFolder;
	}

	/**
	 * Initialize the Utility
	 * @return
	 */
	public static Properties InitUtility() {
		java.util.Properties prop = new Properties();
		Resource resource = new ClassPathResource("sut.properties");
		try {
			path = resource.getFile().getPath();
			File configFile = resource.getFile();
			prop.load(new FileInputStream(configFile));
		}
		catch (Exception e) {
			Reporter.log("SessionServiceImpl error config file: " + e.getMessage());
			throw new IllegalArgumentException("SessionServiceImpl error config file", e);
		}
		return prop;
	}
	
	/**
	 * for testing
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
	}
	
	/**
	 * write To File
	 * @param writer
	 * @throws IOException
	 */
	private static void writeToFile(StringWriter writer) throws IOException {
		File file = new File(getResourcePath("ResultTable.html"));//"./src/main/resources/ResultTable.html"
  	  	FileWriter fw = new FileWriter(file.getAbsoluteFile());
  	  	BufferedWriter bw = new BufferedWriter(fw);
  	  	bw.write(writer.toString());
  	  	bw.close();
	}
	
	/**
	 * find Variable In CSV file
	 * @param array
	 * @param VarName
	 * @return
	 */
	public static ArrayList<String> findVarInCSV(ArrayList<ArrayList<String>> array, String VarName) {
		ArrayList<String> result = null;
		for (int i = 0; i < array.size(); i++) {
			if (array.get(i).get(0).contains(VarName)) {
				result = array.get(i);
				result.remove(0);				
				break;
			}
		}
		return result;
	}
	
	/**
	 * terminate FireFox
	 * @return
	 */
	public static String terminateFF() {
		try{
			String[] command =  new String[3];
	        command[0] = "cmd";
	        command[1] = "/C";
			command[2] = "taskkill /f /IM firefox.exe /t";
			Process p2 = Runtime.getRuntime().exec(command);
			p2.waitFor();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}
	
	/**
	 * terminate Chrome
	 * @return
	 */
	public static String terminateChrome() {
		try {
			String[] command = new String[3];
			command[0] = "cmd";
			command[1] = "/C";
			command[2] = "taskkill /f /im chromedriver.exe /t";
			Process p2 = Runtime.getRuntime().exec(command);
			p2.waitFor();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}
	
	/**
	 * terminate IE
	 * @return
	 */
	public static String terminateIE() {
		try{
			String[] command =  new String[3];
	        command[0] = "cmd";
	        command[1] = "/C";
/*	        command[2] = "taskkill /f /IM chromedriver.exe /t";
			Process p1 = Runtime.getRuntime().exec(command);
			p1.waitFor();*/
			command[2] = "taskkill /f /IM IEDriverServer.exe /t";
			Process p2 = Runtime.getRuntime().exec(command);
			p2.waitFor();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}
	
	/**
	 * run process
	 * @return
	 */
	public static String runProcess(String cmd) {
		try{
			String[] command =  new String[3];
	        command[0] = "cmd";
	        command[1] = "/C";
/*	        command[2] = "taskkill /f /IM chromedriver.exe /t";
			Process p1 = Runtime.getRuntime().exec(command);
			p1.waitFor();*/
			command[2] = cmd;
			Process p2 = Runtime.getRuntime().exec(command);
			//p2.waitFor();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}
	
	/**
	 * read from Properties file
	 * @param property
	 * @return
	 */
	public static String getProperties(String property) {//"webdriver.domain"
		String propertyVal = "";
		//java.util.Properties prop = new Properties();
		//Resource resource = new ClassPathResource("sut.properties");
		try {
			//File configFile = resource.getFile();
			//prop.load(new FileInputStream(configFile));
			//propertyVal = prop.getProperty(property);
		}
		catch (Exception e) {
			// Loger.getLoger().error("SessionServiceImpl error config file",
			// e);
			Reporter.log("SessionServiceImpl error config file: " + e.getMessage());
			throw new IllegalArgumentException("SessionServiceImpl error config file", e);
		}
		return propertyVal;
	}
	
	/**
	 * get the Resource Path
	 * @param driver
	 * @return
	 * @throws IOException
	 */
	public static String getResourcePath(String driver) throws IOException{
		Resource resource = new ClassPathResource(driver);
		String path = resource.getFile().getPath();
		return path;
	}
	
	/**
	 * sniff the http URL
	 * @param url
	 * @param SniffInSec
	 * @param driver
	 * @return
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public static String sniffer(String url, String SniffInSec, WebDriver driver) throws IOException, InterruptedException{
		String ProcessSniffer = Utility.getResourcePath("ProcessSniffer.exe");
		 String[] command =  new String[3];
		 command[0] = "cmd";
		 command[1] = "/C";
		 command[2] = ProcessSniffer + " " + SniffInSec + " ";//.getWindowHandle();
		 Process p = Runtime.getRuntime().exec(command);
		 Thread.sleep(5000);
		 //String url = "http://serve.eurogrand.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=14153215&lp=0";
		 driver.get(url);
		 BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
        BufferedReader stdError = new BufferedReader(new InputStreamReader(p.getErrorStream()));
        // read the output from the command
        String output= "";
        String s = null;
        while ((s = stdInput.readLine()) != null) {//p.exitValue());System.exit(code);
       	 output = output + s + newline;
        }
        while ((s = stdError.readLine()) != null) {
       	 output = output + s + newline;
        }
        return output;
	}
	
	/**
	 * set Cookie for change the IP
	 * @param IP
	 * @param driver
	 */
	public static void setCookieIP(String IP, WebDriver driver) {
		Cookie ck = new Cookie("ip_for_qa_test", IP);
		driver.manage().addCookie(ck);
	}
	
	/**
	 * delete All Cookies in IE
	 */
	public static void deleteAllCookiesIE() {
		try{
			String[] command =  new String[3];
	        command[0] = "cmd";
	        command[1] = "/C";
			command[2] = "RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 2";
			Process p2 = Runtime.getRuntime().exec(command);
			p2.waitFor();
			command[2] = "RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 8";
			Process p1 = Runtime.getRuntime().exec(command);
			p1.waitFor();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * set Language for IE
	 * @param locale
	 */
	public static void setLanguageIE(String locale) {
		try{
			String[] command =  new String[3];
	        command[0] = "cmd";
	        command[1] = "/C";
			command[2] = Utility.getResourcePath("SetAcceptLanguage.exe") + " " + locale;
			Process p2 = Runtime.getRuntime().exec(command);
			p2.waitFor();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Map all the elements inside a query string
	 * @param query
	 * @return Map of the Query String
	 */
	public static Map<String, String> getQueryMap(String query) {
		String[] params = query.split("&");
		Map<String, String> map = new HashMap<String, String>();  
	    for (String param : params)  
	    {  
	    	String UrlElements[] = param.split("=");
	        String name = UrlElements[0];  
	        String value = (UrlElements.length>1)?UrlElements[1]:"";  
	        map.put(name, value);  
	    }  
	    return map;  
	}
	
	/**
	 * Return the file path of a file in Resources
	 * @param fileName
	 * @return String path of the file
	 */
	public static String getFilePathFromResource(String fileName){
		//String strFile = new Object().getClass().getResource("/"+fileName).getPath().substring(1);
		//return strFile;
		String aa = null;
		try {
			aa = getResourcePath(fileName);
		}
		catch (IOException e) {
			e.printStackTrace();
		}
		return aa;
	}
	
	/**
	 * Utility for get a Property file
	 * @param fileName
	 * @return properties
	 */
	public static Properties getPropertyFile(String fileName){
		Properties prop = new Properties();
		try {
			prop.load(new FileInputStream(getFilePathFromResource(fileName)));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return prop;
	}
	
	/**
	 * Get the browsers for tests
	 * @param testClass
	 * @return String[] browsers names
	 */
	public static String[] getBrowsersPerTest(String testClass){
		Properties prop = getPropertyFile("browserConfig.ini");
		String[] TestBrowser = (prop.getProperty(testClass)).split(",");
		return TestBrowser;
	}
	
	/**
	 * write the to log the Error
	 * @param e
	 * @param myTestContext
	 * @param driver
	 * @param throwEcep
	 * @throws IOException 
	 */
	public static void logError(Exception e, ITestContext myTestContext,WebDriver driver,
			boolean throwEcep) throws IOException{
		Properties prop = Utility.getPropertyFile("ClientsTest.ini");
		String buildPath = _mainTestsPath +  prop.getProperty("BuildPath");
		String buildFolder = prop.getProperty("BuildFolder");
		String path = buildPath +"\\"+ buildFolder;
        //clearFile(path+"\\PicList.txt");
        //clearFile(path+"\\Error.log");
		String testName = "defaul Suit"; 
		if(myTestContext != null){
			testName = myTestContext.getName();
		}
		String errorMsg = generateTime() + " Fatal Error in "
				+ testName + ":";
		String screenshotFile = Screenshot(path, generateTime() + "_"  + testName, driver);
		String title = testName + " Screenshot";
		if (e != null) {
			writeToErrorfile(path + "\\Error.log", errorMsg, e);
			Reporter.log(e.getMessage(), true);
		}else{
			Reporter.log("Timeout", true);
		}
		//screenshotFile = _PicBuildPath + "\\" + screenshotFile;
		Reporter.log("<img src='" + screenshotFile + "' alt='" + title + "' >", false);
		if (throwEcep) {
			writeTofile(path + "\\Error.log", "--- Test Fail ---");
			throw new IllegalStateException(e);
		}
	}

	/**
	 * tack Screenshot
	 * @param filePath
	 * @param name
	 * @param driver
	 * @throws IOException
	 */
	private static String Screenshot(String filePath, String name, WebDriver driver) {
		String localFileName;
		try {
			File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
			localFileName = name + ".png";
			String fileFullPath = _PicBuildPath + "\\" + localFileName;
			FileUtils.copyFile(scrFile, new File(fileFullPath));
			writeTofile(filePath + "\\PicList.txt", fileFullPath);
		} catch (Exception e) {
			localFileName = "";
		}
		return localFileName;
	}

	/**
	 * Generate Time format
	 * @return
	 */
	private static String generateTime() {
		SimpleDateFormat sim = new SimpleDateFormat("MM-dd-hh-mm");
		return sim.format(new Date());
	}

	/**
	 * Generate Time format Print
	 * @return
	 */
	public static String generateTimePrint() {//HH:mm:ss.fff - 
		SimpleDateFormat sim = new SimpleDateFormat("HH:mm:ss.SSS - ");
		return sim.format(new Date());
	}
	
	/**
	 * Write Error To log file
	 * @param path
	 * @param errorMsg
	 * @param e
	 */
	private static void writeToErrorfile(String logPath, String errorMsg, Exception e) {
		try {
            FileWriter fileWriter = new FileWriter(logPath, true);
            fileWriter.write(errorMsg);
            fileWriter.write(newline);
        	PrintWriter pw = new PrintWriter(fileWriter);
        	e.printStackTrace(pw);
            fileWriter.write(newline);
            fileWriter.close();
            pw.close();

        } catch (IOException e1) {
            e1.printStackTrace();
        }     
	}
	
	/**
	 * write To file
	 * @param filePath
	 * @param msg
	 */
	private static void writeTofile(String filePath, String msg){
		try {
			FileWriter fileWriter = new FileWriter(filePath, true);
			fileWriter.write(msg);
			fileWriter.write(newline);
			fileWriter.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
