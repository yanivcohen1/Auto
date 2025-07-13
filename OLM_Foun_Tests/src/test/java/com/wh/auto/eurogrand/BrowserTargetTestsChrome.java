package com.wh.auto.eurogrand;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.IRetryAnalyzer;
import org.testng.ITestResult;
import org.testng.Reporter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import com.wh.auto.common.Utility;

public class BrowserTargetTestsChrome implements IRetryAnalyzer {

	private WebDriver driver;
	private int retryCount = 0;
	private int maxRetryCount = 2;

	public boolean retry(ITestResult result) {

		if (retryCount < maxRetryCount) {
			retryCount++;
			return true;
		}
		return false;
	}

	public WebDriver getDriver(String locale) {
		try {
			System.setProperty("webdriver.chrome.driver", Utility.getResourcePath("chromedriver.exe"));
			ArrayList<String> switches = new ArrayList<String>();
			switches.add("--disable-extensions");
			switches.add("--lang=" + locale);
			ChromeOptions options = new ChromeOptions();
			// options.addArguments("user-data-dir=C:/Users/user_name/AppData/Local/Google/Chrome/User Data/Default");
			options.addArguments(switches);

			// webdriver.browser.profile
			driver = new ChromeDriver(options);
		}
		catch (Exception e) {
			Reporter.log("Chrom Error: " + e);
		}
		return driver;
	}

	@DataProvider(name = "Language")
	public Object[][] languages() {
		return new Object[][] { { "en-us", "http://www.eurogrand.com/" }, { "de", "http://www.eurogrand.com/de" },
				{ "ru", "http://www.eurogrand.com/ru" } };
	}

	@Test(dataProvider = "Language", timeOut = 600000, retryAnalyzer = BrowserTargetTestsChrome.class, description = "Test The Browser Targeting in Chrome")
	public void BrowserTarget(String Language, String EcpectedURL) throws Exception {
		getDriver(Language);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		driver.get(Utility.getProperties("webdriver.domain"));
		try {
			Thread.sleep(5000);
		}
		catch (InterruptedException e) {
		}
		Assert.assertEquals(EcpectedURL, driver.getCurrentUrl().toLowerCase());
	}

	@AfterMethod
	public void after() {
		driver.quit();
	}

	@AfterClass
	public void afterSuite() {
		// driver.quit();
	}

}
