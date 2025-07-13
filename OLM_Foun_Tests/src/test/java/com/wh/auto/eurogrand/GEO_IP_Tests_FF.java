package com.wh.auto.eurogrand;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import com.wh.auto.common.Utility;

public class GEO_IP_Tests_FF {

	private WebDriver driver;

	public WebDriver getDriver(){
			FirefoxProfile profile = new FirefoxProfile();
			profile.setPreference("browser.cache.disk.enable", false);
			profile.setPreference("browser.cache.memory.enable", false);
			profile.setPreference("browser.cache.offline.enable", false);
			profile.setPreference("network.http.use-cache", false);
			driver = new FirefoxDriver(profile);
			return driver;
		}
	
	@DataProvider(name = "Language")
	public Object[][] languages() {
		return new Object[][] { {"2.136.0.0", "http://www.williamhill.es/" }, { "2.160.0.0", "http://www2.williamhill.com/" }, { "2.24.0.0", "http://www.eurogrand.com/" }};
	}

	@Test(dataProvider = "Language", description = "Test The Browser Targeting in Firefox")
	public void gEO_IP_Test(String IP, String EcpectedURL) throws Exception {
		 getDriver();
		 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		 driver.manage().deleteAllCookies();
		 driver.get(Utility.getProperties("webdriver.domain"));
		 try {
				Thread.sleep(5000);
		}
		catch (InterruptedException e) {}
		 setCookieIP(IP);
		 driver.get(Utility.getProperties("webdriver.domain"));
		 Assert.assertEquals(EcpectedURL, driver.getCurrentUrl().toLowerCase());
	}

	private void setCookieIP(String IP) {
		Cookie ck = new Cookie("ip_for_qa_test", IP);
		driver.manage().addCookie(ck);
	}

	@AfterMethod
	public void after() {
		driver.close();
	}
	
	@AfterClass
	public void afterSuite() {
		driver.quit();
	}
	
}
