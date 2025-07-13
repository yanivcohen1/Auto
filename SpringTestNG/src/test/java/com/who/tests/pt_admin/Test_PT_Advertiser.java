package com.who.tests.pt_admin;

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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
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

import com.who.utils.Browsers;
import com.who.utils.CSVReader;

/*import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;
import com.wh.auto.common.Browsers;*/

/**
 * Test The PT Advertiser
 * @author yanivc
 *
 */
@ContextConfiguration("file:src/main/resources/spring-config.xml")
public class Test_PT_Advertiser extends AbstractTestNGSpringContextTests {

    //@SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    protected ApplicationContext ac;
	
    PT_AdminMainPage ptAdminMianPage = null;
	String[] testBrowsers;
	String playersUsersNamesFile;
	private int maxRetryCount = 3;
	private ITestContext myTestContext = null;
	private static WebDriver driver = null;
	private static Browsers browser = new Browsers();
	private static boolean debug = false;
	private static String browserType = "";
	
	public String[] getTestBrowsers() {
		return testBrowsers;
	}

	public void setTestBrowsers(String[] testBrowsers) {
		this.testBrowsers = testBrowsers;
	}

	public String getPlayersUsersNamesFile() {
		return playersUsersNamesFile;
	}

	public void setPlayersUsersNamesFile(String playersUsersNamesFile) {
		this.playersUsersNamesFile = playersUsersNamesFile;
	}

	/**
	 * After all tests close the browser
	 */
	@BeforeClass
	public void beforeClass() {
		Test_PT_Advertiser me = ac.getBean(Test_PT_Advertiser.class);
		testBrowsers = me.testBrowsers;
		playersUsersNamesFile = me.playersUsersNamesFile;
	}
	
	/**
	 * for testing
	 * @param args
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws AWTException
	 */
	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		debug = true;
		Test_PT_Advertiser tcr = new Test_PT_Advertiser();
		tcr.PT_AdvertiserTest("YANQAOLA50","RubyBingoEn", "chrome");//chrome,ie,firefox
		tcr.afterSuite();
	}
	
	/**
	 * initiaze for running test and browser
	 * @return
	 */
	@DataProvider(name = "PT_Advertiser")
	public Object[][] createDataProvider() {
		System.out.println("Start test: " + myTestContext.getName());
		//String[] testBrowsers = Utility.getBrowsersPerTest(this.getClass().getSimpleName());
		List<Object[]> Result = new ArrayList<Object[]>();
		//Properties prop = Utility.getPropertyFile("PT_Advertiser.ini");
		//playersUsersNamesFile = Utility._mainTestsBuildPath + prop.getProperty("PlayersUsersNames");
		//String unsubscribeLinksFile = Utility.getFilePathFromResource(playersUsersNamesFile);
		ArrayList<ArrayList<String>> playersUsersNames = CSVReader.readFile(playersUsersNamesFile);
		for (String testBrowser : testBrowsers) {
			for (ArrayList<String> playersUsersName : playersUsersNames) {
				Result.add(new Object[] { playersUsersName.get(0), playersUsersName.get(1), testBrowser });
			}
		}
		Object[][] obj = new Object[Result.size()][2];
		for (int i=0; i < obj.length ; i++)
			obj[i] = Result.get(i);
		return obj;
	}
	
	/**
	 * Freespin Test
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws AWTException 
	 */
	@Test(dataProvider = "PT_Advertiser", timeOut = 600000, retryAnalyzer=Test_PT_Advertiser.class, description = "Test The PT Advertiser")//10 min timeout
	public void PT_AdvertiserTest(String PT_userName, String PT_CasinoName, String browserType) throws IOException, InterruptedException, AWTException {
		if (!debug) {
			for (int i = 0; i < maxRetryCount; i++) {
				try {
					PT_AdvertiserTestDebug(PT_userName, browserType);
					break;
				} catch (Exception e) {
					if(i >= maxRetryCount-1){
						//Utility.logError(e, myTestContext, driver, true);
					}
					//Utility.logError(e, myTestContext, driver, false);
					//afterSuite();
				}
			}
		}else{
			PT_AdvertiserTestDebug(PT_userName, browserType);
		}  
	}
	
	/**
	 * The main Test
	 * @param browserType
	 * @throws AWTException
	 * @throws InterruptedException
	 */
	private void PT_AdvertiserTestDebug(String PT_userName, String browserType) throws AWTException, InterruptedException {
		
		//PT_AdminMainPage ptAdminMianPage;
		
		if (!this.browserType.contentEquals(browserType)) {
			//Utility.terminateChrome();
			driver = browser.get_Driver(browserType);
			ptAdminMianPage = ac.getBean(PT_AdminMainPage.class);
			this.browserType = browserType;
			//ptAdminMianPage = new PT_AdminMainPage(driver);
			ptAdminMianPage.login();
		}else{
			//ptAdminMianPage = new PT_AdminMainPage(driver);
		}
		ptAdminMianPage.displayUser(PT_userName);
		PT_AdminUsersDataPage ptAdminUsersDataPage = new PT_AdminUsersDataPage(driver);
		String advertiser = ptAdminUsersDataPage.findAdvertiser(PT_userName);
		Assert.assertTrue("Test Fail", advertiser.contains("goodaff"));
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
	 * After all tests close the browser
	 */
	@AfterClass
	public void afterSuite() {
		driver.quit();
	}
	
}
