package com.wh.auto.common;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.OutputStream;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.Reader;
import java.io.StringWriter;
import java.io.Writer;
import java.net.URISyntaxException;
import java.net.UnknownHostException;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.wh.auto.common.Reporter;
import com.wh.auto.common.Reporter.Style;
import com.wh.auto.common.Reporter.Color;

/**
 * helper library
 * @author yanivc
 *
 */
public class Utility {

	private static final String newline = System.getProperty("line.separator");
	private static final String newlineHtml = "<br/>";
	//private static final String _PicBuildPath;//"C:\\SVN\\BAU_Automation_Tests\\BauAutomationTests\\target\\failsafe-reports\\html";
	//private static final java.util.Properties prop = InitUtility();
	//private static final String _mainTestsPath; //BAU_Automation_Tests
	//private static final String _mainTestsBuildPath;
	//private static final boolean monitorMac;
	final static PrintStream stdout1 = System.out;
	public final static boolean developmentMac = isDevelopmentMac();
	//public final static String playersUsersName;
	private static boolean debug = false;
	
/*	static {
		System.setProperty("org.uncommons.reportng.escape-output", "false");
		System.setProperty("jansi.passthrough", "true");
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
	    String mainTestsPath1 = null;
	    do {
	    	if (mainTestsPath.getName().equalsIgnoreCase("BauAutomationTests") || 
	    			mainTestsPath.getName().equalsIgnoreCase("PaymentsTests")) {
	    		mainTestsPath1 = mainTestsPath.getParentFile().getAbsolutePath();
	    		find_mainTestsPath = true;
			}else{
				mainTestsPath = mainTestsPath.getParentFile();
				if (mainTestsPath == null) {
					Reporter.log("Failed to find mainTestsPath 'BAU_Automation_Tests'");
					throw new IllegalArgumentException("Failed to find mainTestsPath 'BAU_Automation_Tests'");
					
				}
			}
		} while (!find_mainTestsPath);
	    _mainTestsPath = mainTestsPath1;
	    _PicBuildPath = parentFolder.getAbsolutePath();
	    _mainTestsBuildPath = initClients();
	    Properties prop = getPropertyFile("utility.properties");
	    monitorMac = getMachineName().contentEquals(prop.getProperty("monitorMac"));
	    playersUsersName = prop.getProperty("playersUsersName");
	    System.out.println("monitor mac:" + monitorMac);
	    deletePlayersUsersNamesFile(_mainTestsBuildPath);
	}*/
	
	public static enum Envirenment {
        PUBLIC("pub"), ADMIN("admin"), DEV("dev");

        private final String value;

        private Envirenment(String value) {
               this.value = value;
        }

        public String toString() {
            return this.value;
         }
	}
	
	public static Envirenment getEnvirement() {
		String env = System.getProperty("env");
		Envirenment retEnv = Envirenment.PUBLIC;
		if (env != null) {
			if (env.equals(Envirenment.DEV.value)) {
				retEnv = Envirenment.DEV;
			} else if (env.equals(Envirenment.ADMIN.value)) {
				retEnv = Envirenment.ADMIN;
			} else {
				retEnv = Envirenment.PUBLIC;
			}
		}
		return retEnv;
	}
	
	/*public static boolean getIsMonitorMac() {
		return monitorMac;
	}*/

	private static boolean isDevelopmentMac() {
    	Properties prop = Utility.getPropertyFile("utility.properties");
    	String SeleniumGridFile = prop.getProperty("SeleniumGridFile");
    	CharSequence debugChar = Utility.readFile(SeleniumGridFile);
    	if (debugChar != null) {
			return true;
		}else{
			return false;
		}
	}
	
	public static void SystemOutPrintln(String msg) {
		boolean setOutput = true; 
		System.setOut(stdout1);
   	 	System.out.println(msg);
	   	/*if (!debug) {
	   		 try {
				System.setOut(new PrintStream(new File("NUL")));
			 } catch (FileNotFoundException e) {
					System.setOut(new PrintStream(new OutputStream() {
		             public void write(int b) {
		                 //DO NOTHING
		             }
		         }));
			 }
		}*/
	}
	
	/*private static String initClients() {
		Properties prop = Utility.getPropertyFile("ClientsTest.ini");
		String buildPath = Utility._mainTestsPath + prop.getProperty("BuildPath");
		String buildFolder = prop.getProperty("BuildFolder");
		return buildPath + "\\" + buildFolder;
	}*/

	private static void deletePlayersUsersNamesFile(String maintestsbuildpath) {
		FileWriter writer = null;
		try {
				Properties prop = Utility.getPropertyFile("PT_Advertiser.ini");// "PT_Advertiser.ini"
				String playersUsersNamesFile = (new File(maintestsbuildpath)).getParent()
								+ prop.getProperty("PlayersUsersNames");
				writer = new FileWriter(playersUsersNamesFile, false);
				// Writes the content to the file
				writer.write("");
				writer.flush();
				writer.close();
			} catch (Exception e) {
				System.out.println(e);
			} finally {
				try {
					writer.close();
				} catch (Exception e) {
				}
			}		
	}

	private static String getMachineName() {//TLV-WinMon01
			String machineName = "can't Read Machine";
			java.net.InetAddress localMachine;
			try {
				localMachine = java.net.InetAddress.getLocalHost();
				machineName = localMachine.getHostName();
			} catch (UnknownHostException e) {
			}
			return machineName;
	}

	/**
	 * Initialize the Utility
	 * @return
	 */
	public static Properties InitUtility() {
		java.util.Properties prop = new Properties();
		Resource resource = new ClassPathResource("sut.properties");
		try {
			resource.getFile().getPath();
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
	public static void terminateFF() {
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
		//return "";
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
	
	/**
	 * terminate Safari
	 * @return
	 */
	public static void terminateSafari() {
		try {
			String[] command = new String[3];
			command[0] = "cmd";
			command[1] = "/C";
			command[2] = "taskkill /f /IM safari.exe /t";
			Process p2 = Runtime.getRuntime().exec(command);
			p2.waitFor();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		//return "";
	}
	
	/**
	 * terminate IE
	 * @return
	 */
	public static void terminateIE() {
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
	 * run process
	 * @return
	 */
	public static String runProcessWaitExit(String cmd) {
		try{
			String[] command =  new String[3];
	        command[0] = "cmd";
	        command[1] = "/C";
/*	        command[2] = "taskkill /f /IM chromedriver.exe /t";
			Process p1 = Runtime.getRuntime().exec(command);
			p1.waitFor();*/
			command[2] = cmd;
			Process p2 = Runtime.getRuntime().exec(command);
			p2.waitFor();
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
	/*public static String getProperties(String property) {//"webdriver.domain"
		String propertyVal = "";
		//java.util.Properties prop = new Properties();
		//Resource resource = new ClassPathResource("sut.properties");
		try {
			//File configFile = resource.getFile();
			//prop.load(new FileInputStream(configFile));
			propertyVal = prop.getProperty(property);
		}
		catch (Exception e) {
			// Loger.getLoger().error("SessionServiceImpl error config file",
			// e);
			Reporter.log("SessionServiceImpl error config file: " + e.getMessage());
			throw new IllegalArgumentException("SessionServiceImpl error config file", e);
		}
		return propertyVal;
	}*/
	
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
	 * @param <T>
	 * @param e
	 * @param myTestContext
	 * @param driver
	 * @param throwEcep
	 * @throws IOException 
	 */
	/*public static <T> void logError(T e, ITestContext myTestContext,WebDriver driver,
			boolean throwEcep) {
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
			if (e instanceof Exception) {
				writeToErrorfile(path + "\\Error.log", errorMsg, (Exception)e);
				Reporter.log(((Exception)e).getMessage(), true, Style.REGULAR, Color.RED);
			}else if (e instanceof Throwable){
				writeToErrorfile(path + "\\Error.log", errorMsg, (Throwable)e);
				Reporter.log(((Throwable)e).getMessage(), true, Style.REGULAR, Color.RED);
			}
			
		}else{
			Reporter.log("Timeout", true, Style.REGULAR, Color.RED);
		}
		//screenshotFile = _PicBuildPath + "\\" + screenshotFile;
		Reporter.logPureHTML("<img src='" + screenshotFile + "' alt='" + title + "' >", false);
		if (throwEcep) {
			writeTofile(path + "\\Error.log", "--- Test Fail ---");
			throw new IllegalStateException((Exception)e);
		}else{
			Reporter.log("--- RETRY ---", true, Style.BOLD, Color.BLUE);
		}
	}*/

	/**
	 * tack Screenshot
	 * @param filePath
	 * @param name
	 * @param driver
	 * @throws IOException
	 */
	/*private static String Screenshot(String filePath, String name, WebDriver driver) {
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
	}*/

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
	 * @param <T>
	 * @param path
	 * @param errorMsg
	 * @param e
	 */
	private static <T> void writeToErrorfile(String logPath, String errorMsg, T e) {
		try {
            FileWriter fileWriter = new FileWriter(logPath, true);
            fileWriter.write(errorMsg);
            fileWriter.write(newline);
        	PrintWriter pw = new PrintWriter(fileWriter);
        	
        	if (e instanceof Exception) {
        		((Exception)e).printStackTrace(pw);
			}else if (e instanceof Throwable){
				((Throwable)e).printStackTrace(pw);
			}
        	
        	
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
	public static void writeTofile(String filePath, String msg){
		writeTofile(filePath, msg, true);
	}
	
	/**
	 * write To file
	 * @param filePath
	 * @param msg
	 */
	public static void writeTofile(String filePath, String msg, boolean append){
		FileWriter fileWriter = null;
		try {
			fileWriter = new FileWriter(filePath, append);
			fileWriter.write(msg);
			fileWriter.write(newline);
		} catch (IOException e) {
			e.printStackTrace();
		}finally{
			closeWriter(fileWriter);
		}
	}
	
	/**
	 * Closes the specified stream.
	 * @param <T>
	 * 
	 * @param stream
	 *            The stream to close.
	 */
	private static <T extends Writer> void closeWriter(T stream) {
		if (stream != null) {
			try {
				stream.close();
			} catch (IOException e) {
				// Ignore
			}
		}
	}
	
	/**
	 * read from file
	 * @param filePath
	 * @param msg
	 */
	public static CharSequence readFile(String fileName) {
		BufferedReader in = null;
		// String fileName = "empty.xml";
		StringBuilder buffer = new StringBuilder();
		try {
			FileReader inputFile = new FileReader(fileName);

			// Instantiate the BufferedReader Class
			in = new BufferedReader(inputFile);

			// Variable to hold the one line data
			String line;

			// sourceFileContant.replace((CharSequence) bufferReader, "");
			// Read file line by line and print on the console
			while ((line = in.readLine()) != null) {
				// System.out.println(line);
				buffer.append(line).append('\n');
			}
			// Close the buffer reader
			in.close();
			return buffer;
		} catch (IOException e) {
		} finally {
			closeReader(in);
		}
		return null;
	}
	
	private Properties readProperty(String propFileName) throws IOException, URISyntaxException {
		Properties prop = new Properties();
		InputStream inputStream;
		try {
			File propFile = new File(Utility.class.getProtectionDomain().getCodeSource().getLocation().toURI().getPath());
			String propFileStr = propFile.getParent() + "/" +propFileName;
			inputStream = new FileInputStream(propFileStr);
			System.out.println("from " + propFileStr);
		} catch (Exception e) {
			System.out.println("from resource");
			inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);
		}
		if (inputStream != null) {
			prop.load(inputStream);
		} else {
			throw new FileNotFoundException("property file '" + propFileName + "' not found in the classpath");
		}
		
		return prop; 
	}
	
	/**
	 * Closes the specified stream.
	 * @param <T>
	 * 
	 * @param stream
	 *            The stream to close.
	 */
	private static <T extends Reader> void closeReader(T stream) {
		if (stream != null) {
			try {
				stream.close();
			} catch (IOException e) {
				// Ignore
			}
		}
	}
	
	public static String getClassPath(Class t){
		String path = t.getPackage().getName();
		path = path.replace('.', '\\') + "\\";
		return "classpath:" + path;
	}
	
	/**
	 * Generated TimeStamp
	 * @return
	 */
	public static String getTimeStamp(){
		SimpleDateFormat date_format = new SimpleDateFormat("YYMMddhhmmss");
	    return date_format.format(Calendar.getInstance().getTime());
	}

/*	public static String get_PicBuildPath() {
		return _PicBuildPath;
	}

	public static String get_mainTestsPath() {
		return _mainTestsPath;
	}

	public static String get_mainTestsBuildPath() {
		return _mainTestsBuildPath;
	}*/

	public static String readTrackingCookie(WebDriver driver) {
		 return driver.manage().getCookieNamed("banner_click").getValue().split(",")[0];
				
	}
	
	public static void copyFileUsingJava7Files(File source, File dest)
			throws IOException {
		Files.copy(source.toPath(), dest.toPath());
	}
	
	public static String getLocalPath(){
		Resource resource = new ClassPathResource("\\");
		String localPath = null;
		try {
			localPath = resource.getFile().getPath();
		} catch (IOException e) {}
		return localPath;
	}
	
	public static String getNewline() {
		return newline;
	}

	public static String getNewlinehtml() {
		return newlineHtml;
	}
	
	public static String getParentClass(Class classs) {
		String current = classs.getPackage().getName();
		int point = new StringBuilder(current).reverse().toString().indexOf('.');
		String parentClass = current.substring(0, current.length() - point -1);
		return parentClass;
	}

	public static void setDebug(boolean debug) {
		Utility.debug = debug;
	}

}
