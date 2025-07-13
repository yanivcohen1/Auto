package com.wh.auto.clients;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.ProcessBuilder.Redirect;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.testng.ITestContext;
import org.testng.Reporter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.WebDriverUtils;

/**
 * Test The Clients in all brands
 * @author yanivc
 */
public class TestRunClientsInSingleDll {

	private ITestContext myTestContext;

	public static void main(String[] args) throws IOException, InterruptedException {
		TestRunClientsInSingleDll tcr = new TestRunClientsInSingleDll();
		tcr.clientsRunTest("PrestigeEnClient");
	}
	
	/**
	 * clients Run Test
	 * @throws IOException
	 * @throws InterruptedException
	 */
	@Parameters({ "test-name" })
	@Test()
	public void clientsRunTest(String testName) throws IOException, InterruptedException {
		System.setProperty("org.uncommons.reportng.escape-output", "false");
		Process p = null;
        for (int i = 0; i < 2; i++) {
        	boolean timeOut = false;
			try {				
				System.out.println("Start test: " + myTestContext.getName());
			} catch (Exception e) {
			}
			//System.out.println("Test Path: " + testPath);
			Properties prop = Utility.getPropertyFile("ClientsTest.ini");
			String buildPath = Utility.get_mainTestsPath() + prop.getProperty("BuildPath");
			String msBuildPath = prop.getProperty("MSBuildPath");
			String msTestPath = prop.getProperty("MSTestPath");
			String buildParams = prop.getProperty("SolutionParam");
			String buildFolder = prop.getProperty("BuildFolder");
			String mainClientsDll = prop.getProperty("MainClientsDll");
			String[] command = new String[3];
			command[0] = "cmd";
			command[1] = "/C";
			//command[2] = '"'+ msTestPath +'"'+ " /TestContainer:" + testPath;
			String ClientsRunFile = Utility
					.getFilePathFromResource("ClientsTest.bat");
			command[2] = ClientsRunFile + " " + '"' + buildPath + "\\"
					+ buildFolder + '"' + " " + '"' + msTestPath + '"'
					+ " /TestContainer:" + mainClientsDll + " /test:"
					+ testName + " /detail:stdout";
			System.out.println(command[2]);
			p = Runtime.getRuntime().exec(command, null, new File(buildPath));
			BufferedReader stdInput = new BufferedReader(new InputStreamReader(
					p.getInputStream()));
			BufferedReader stdError = new BufferedReader(new InputStreamReader(
					p.getErrorStream()));
			// read the output from the command
			String s = null;
			boolean isFirst = true;
			while ((s = stdInput.readLine()) != null) {//p.exitValue());System.exit(code);
				if (isFirst) {
					if (s.contains("Starting execution...")) {
						System.out.println("Starting Test");
						isFirst = false;
					}
					System.out.println(s);
				} else {
					System.out.println(s);
					Reporter.log(s + Utility.getNewlinehtml());
					if (s.contains("0/1 test(s) Passed, 1 Timeout")) {
						addTimeOutPicToReport(buildPath + "\\" + buildFolder + "\\PicList.txt");
						timeOut = true;
					}
				}
			}
			// read any errors from the attempted command 
			boolean firsErorr = true;
			while ((s = stdError.readLine()) != null) {
				if (firsErorr) {
					System.out.println("Fatal Error: ");
					Reporter.log("Fatal Error: ");
					firsErorr = false;
				}
				System.out.println(s);
				Reporter.log(s + Utility.getNewlinehtml());
			}
			if (!timeOut) {
				break;
			}
		}
		Assert.assertTrue("Test Fail", (p.exitValue()==0));
		Thread.sleep(20000);
	}
	
	/**
	 * add TimeOut Picture To Report
	 * @param file
	 */
	private void addTimeOutPicToReport(String file) {
		try {
			BufferedReader br = new BufferedReader(new FileReader(file));
			String lastLine = "";
			String line;
			while ((line = br.readLine()) != null) {
				lastLine = line;
			}
			br.close();
			File f = new File(lastLine);
			String title = "Timeout";
			WebDriverUtils.log("<img src='" + f.getName() + "' alt='" + title + "' >", false);

        } catch (IOException e) {
            e.printStackTrace();
        }     	
	}

	/**
	 * getting the test context 
	 * @param myTestContext1
	 */
	@BeforeTest
	public void TEST_BEFOFRE(ITestContext myTestContext1){
		myTestContext = myTestContext1;      
	}
	
}
