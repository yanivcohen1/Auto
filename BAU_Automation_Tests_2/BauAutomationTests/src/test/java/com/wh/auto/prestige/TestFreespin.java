package com.wh.auto.prestige;

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
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;
import com.wh.auto.common.Browsers;

/**
 * Test The TestFreespin
 * @author yanivc
 *
 */
public class TestFreespin {//implements IRetryAnalyzer{
	private int retryCount = 0;
	private int maxRetryCount = 3;
	private ITestContext myTestContext = null;
	private static WebDriver driver;
	private Browsers browser = new Browsers();
	private static boolean debug = false;
	private String parametersFileName;
	
	/*public boolean retry(ITestResult result) {
		if(retryCount < maxRetryCount) {
			retryCount++; 
			return true; 
		}
		
		return false; 
	}*/
	
	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		debug = true;
		TestFreespin tcr = new TestFreespin();
		tcr.beforeSuite("FreespinTest.ini");
		tcr.freespinTest("chrome");//chrome,ie,firefox
		tcr.afterSuite();
	}
	
	/**
	 * Before all tests starts
	 */
	@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite(String parametersFileName) {
		this.parametersFileName = parametersFileName;
	}
	
	/**
	 * initiaze for running test and browser
	 * @return
	 */
	@DataProvider(name = "freespin")
	public Object[][] createDataProvider() {
		System.out.println("Start test: " + myTestContext.getName());
		String[] TestBrowser = Utility.getBrowsersPerTest(this.getClass().getSimpleName());
		Object[][] obj = new Object[TestBrowser.length][1];
		for (int i=0; i < obj.length ; i++)
			obj[i] = new Object[]{TestBrowser[i]};//(Object[])TestBrowser[i];
		return obj;
	}
	
	/**
	 * Freespin Test
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws AWTException 
	 */
	@Test(dataProvider = "freespin", timeOut = 600000, retryAnalyzer=TestFreespin.class, description = "Test The freespin")//10 min timeout
	public void freespinTest(String browserType) throws IOException, InterruptedException, AWTException {
		if (!debug) {
			for (int i = 0; i < maxRetryCount; i++) {
				try {
					freespinTestDebug(browserType);
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
			freespinTestDebug(browserType);
		}  
	}
	
	/**
	 * The main Test
	 * @param browserType
	 * @throws AWTException
	 * @throws InterruptedException
	 */
	private void freespinTestDebug(String browserType) throws AWTException, InterruptedException {
		Utility.terminateChrome();
		// get the utility Properties
		Properties prop = Utility.getPropertyFile(parametersFileName);//"FreespinTest.ini"
		String mainURL = prop.getProperty("MainURL");
		String password = prop.getProperty("Password");
		String happyhourURL = prop.getProperty("HappyhourURL");
		String userName = prop.getProperty("UserName");
		driver = browser.getDriver(browserType);
		//driver.get(BaseURL);
		HapyHourPage hapyHourPage = new HapyHourPage(driver,
				happyhourURL);
		FreespinPage freespinPage = hapyHourPage.loginAs(userName);
		freespinPage.loginAs(mainURL + userName, password);
		//Assert.assertTrue("Test Fail", true);		
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
