package com.wh.auto.pt_admin;

import java.awt.AWTException;
import java.io.BufferedReader;
import java.io.File;
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
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.testng.IRetryAnalyzer;
import org.testng.ITestContext;
import org.testng.ITestResult;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.Utility;
import com.wh.auto.common.Browsers;

/**
 * Test The PT Advertiser
 * 
 * @author yanivc
 *
 */
public class Test_PT_Advertiser {

	private int maxRetryCount = 3;
	private ITestContext myTestContext = null;
	private static WebDriver driver = null;
	private static Browsers browser = new Browsers();
	private static boolean debug = false;
	private static String browserType = "";
	private String parametersFileName;
	private String playersUsersNamesFile;

	/**
	 * for testing
	 * 
	 * @param args
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws AWTException
	 */
	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		debug = false;
		Test_PT_Advertiser tcr = new Test_PT_Advertiser();
		tcr.beforeSuite("PT_Advertiser.ini");
		tcr.PT_AdvertiserTest("YAN160222061551", " CasinoTestA", "WilliamhillClientEn", "chrome");// chrome,ie,firefox
		//161227031753, ,eurograndWebDE
		tcr.afterSuite();
	}

	/**
	 * Before all tests starts
	 */
	@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite(@Optional("PT_Advertiser.ini") String parametersFileName) {
		this.parametersFileName = parametersFileName;
	}

	/**
	 * initiaze for running test and browser
	 * 
	 * @return
	 */
	@DataProvider(name = "PT_Advertiser")
	public Object[][] createDataProvider() {
		System.out.println("Start test: " + myTestContext.getName());
		String[] testBrowsers = Utility.getBrowsersPerTest(this.getClass().getSimpleName());
		List<Object[]> Result = new ArrayList<Object[]>();
		Properties prop = Utility.getPropertyFile(parametersFileName);// "PT_Advertiser.ini"
		playersUsersNamesFile = (new File(Utility.get_mainTestsBuildPath())).getParent()
				+ prop.getProperty("PlayersUsersNames");
		// String unsubscribeLinksFile =
		// Utility.getFilePathFromResource(playersUsersNamesFile);
		ArrayList<ArrayList<String>> playersUsersNames = CSVReader.readFile(playersUsersNamesFile);
		for (String testBrowser : testBrowsers) {
			for (ArrayList<String> playersUsersName : playersUsersNames) {
				if (playersUsersName.get(1).trim().isEmpty()) {
					playersUsersName.set(1, "goodaff");
				}
				if (playersUsersName.size() == 3) {
					Result.add(new Object[] { playersUsersName.get(0), playersUsersName.get(1), playersUsersName.get(2),
							testBrowser });
				} else {
					Result.add(
							new Object[] { playersUsersName.get(0), "goodaff", playersUsersName.get(1), testBrowser });
				}
			}
		}
		Object[][] obj = new Object[Result.size()][2];
		for (int i = 0; i < obj.length; i++)
			obj[i] = Result.get(i);
		return obj;
	}

	/**
	 * Freespin Test
	 * 
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws AWTException
	 */
	@Test(dataProvider = "PT_Advertiser", timeOut = 600000, retryAnalyzer = Test_PT_Advertiser.class, description = "Test The PT Advertiser") // 10 min timeout
	public void PT_AdvertiserTest(String PT_userName, String advertiser, String PT_CasinoName, String browserType)
			throws IOException, InterruptedException, AWTException {
		if (!debug) {
			for (int i = 0; i < maxRetryCount; i++) {
				try {
					PT_AdvertiserTestDebug(PT_userName, advertiser, browserType);
					break;
				} catch (Exception e) {
					if (i >= maxRetryCount - 1) {
						Utility.logError(e, myTestContext, driver, true);
					}
					Utility.logError(e, myTestContext, driver, false);
					// afterSuite();
				}
			}
		} else {
			PT_AdvertiserTestDebug(PT_userName, advertiser, browserType);
		}
	}

	/**
	 * The main Test
	 * 
	 * @param browserType
	 * @throws AWTException
	 * @throws InterruptedException
	 */
	private void PT_AdvertiserTestDebug(String PT_userName, String advertiser, String browserType)
			throws AWTException, InterruptedException {

		PT_AdminMainPage ptAdminMianPage;
		if (!this.browserType.contentEquals(browserType) || driver == null) {
			Utility.terminateChrome();
			driver = browser.getDriver(browserType);
			this.browserType = browserType;
			ptAdminMianPage = new PT_AdminMainPage(driver);
			ptAdminMianPage.login();
		} else {
			try {
				driver.getCurrentUrl();
				ptAdminMianPage = new PT_AdminMainPage(driver);
			} catch (Exception e) {
				Utility.terminateChrome();
				driver = browser.getDriver(browserType);
				this.browserType = browserType;
				ptAdminMianPage = new PT_AdminMainPage(driver);
				ptAdminMianPage.login();
			}
		}
		ptAdminMianPage.displayUser(PT_userName);
		PT_AdminUsersDataPage ptAdminUsersDataPage = new PT_AdminUsersDataPage(driver);
		String findAdvertiser = ptAdminUsersDataPage.findAdvertiser(PT_userName);
		Reporter.log("find Advertiser: " + findAdvertiser, true);
		Assert.assertTrue("Test Fail", findAdvertiser.contains(advertiser.trim()));
	}

	/**
	 * getting the test context
	 * 
	 * @param myTestContext1
	 */
	@BeforeTest
	public void TEST_BEFOFRE(ITestContext myTestContext1) {
		myTestContext = myTestContext1;
	}

	/**
	 * After all tests close the browser
	 */
	@AfterClass
	public void afterSuite() {
		try {
			driver.quit();
		} catch (Exception e) {
			System.out.println(e);
		}
		driver = null;
		FileWriter writer = null;
		if (!debug) {
			try {
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
	}

}
