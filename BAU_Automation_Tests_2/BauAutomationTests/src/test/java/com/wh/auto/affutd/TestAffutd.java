package com.wh.auto.affutd;

import java.awt.AWTException;
import java.io.BufferedReader;
import java.io.File;
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
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.testng.IRetryAnalyzer;
import org.testng.ITestContext;
import org.testng.ITestResult;
import org.testng.Reporter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;
import com.wh.auto.common.Browsers;

/**
 * Test The TestAffutd.
 * @author yanivc
 *
 */
public class TestAffutd {
	private int retryCount = 0;
	private int maxRetryCount = 3;
	private ITestContext myTestContext = null;
	private static WebDriver driver;
	private Browsers browser = new Browsers();
	private static boolean debug = false;
	private String parametersFileName; 
	
	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		debug = true;
		TestAffutd tcr = new TestAffutd();
		tcr.beforeSuite("Affutd.ini");
		tcr.affutdTest("chrome");//chrome,ie,firefox "Affutd.ini"
		tcr.afterSuite();
	}
	
	/**
	 * Before all tests starts
	 */
	@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite(@Optional("Affutd.ini")String parametersFileName) {
		this.parametersFileName = parametersFileName;
	}
	
	/**
	 * initiaze for running test and browser
	 * @return
	 */
	@DataProvider(name = "Affutd")
	public Object[][] createDataProvider() {
		//this.parametersFileName =  myTestContext.getCurrentXmlTest().getParameter("parametersFileName");
		System.out.println("Start test: " + myTestContext.getName());
		String[] TestBrowser = Utility.getBrowsersPerTest(this.getClass().getSimpleName());
		Object[][] obj = new Object[TestBrowser.length][1];
		for (int i=0; i < obj.length ; i++)
			obj[i] = new Object[]{TestBrowser[i]};//(Object[])TestBrowser[i];
		return obj;
	}
	
	/**
	 * Affutd Test
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws AWTException 
	 */
	@Test(dataProvider = "Affutd", timeOut = 600000, retryAnalyzer=TestAffutd.class, description = "Test The Affutd")//10 min timeout
	public void affutdTest(String browserType) throws IOException, InterruptedException, AWTException {
		if (!debug) {
			for (int i = 0; i < maxRetryCount; i++) {
				try {
					affutdTestDebug(browserType);
					break;
				} catch (Exception e) {
					if(i >= maxRetryCount-1){
						Utility.logError(e, myTestContext, driver, true);
					}
					Utility.logError(e, myTestContext, driver, false);
					after();
				}
			}
		}else{
			affutdTestDebug(browserType);
		}
	}
	
	/**
	 * The main Test
	 * @param browserType
	 * @throws AWTException
	 * @throws InterruptedException
	 */
	private void affutdTestDebug(String browserType) throws AWTException, InterruptedException {
		//org.testng.Reporter.log("<style> img { height: 200px; width: 300px;} img:hover {height: 100%; width: 100%;} </style>");
		Utility.terminateChrome();
		// get the utility Properties
		Properties prop = Utility.getPropertyFile(parametersFileName);//"Affutd.ini"
		String affutdURL = prop.getProperty("AffutdURL");
		String loginUrl = prop.getProperty("LoginUrl");
		String user = prop.getProperty("User");
		String password = prop.getProperty("Password");
		driver = browser.getDriver(browserType);
		LoginPage loginPage = new LoginPage(driver, affutdURL + loginUrl);
		DashboardPage dashboardPage = loginPage.loginAs(user, password);
		String userName = dashboardPage.readUserName();
		Assert.assertEquals("linoy edri" , userName);	
	}

	/**
	 * getting the test context 
	 * @param myTestContext1
	 */
	@BeforeTest
	public void TEST_BEFOFRE(ITestContext myTestContext1){
		myTestContext = myTestContext1;    
	}
	
	/**
	 * After each test close the browser
	 */
	@AfterMethod
	public void after() {
		driver.quit();
	}
	
	/**
	 * After all tests close the browser
	 */
	@AfterClass
	public void afterSuite() {
		driver.quit();
	}
	
}
