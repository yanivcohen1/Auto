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

public class Regulated_GEO_IP_Tests_FF {

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
		return new Object[][] { {"2.136.0.0",true, false },//es tracking
				{"2.136.0.0",false, false },//es no tracking
				{ "2.160.0.0", true, false },//de tracking
				{ "2.160.0.0", false, true }};//de no tracking
	}

	@Test(dataProvider = "Language", description = "Test The Regulated_GEO_IP in Firefox")
	public void gEO_IP_Test(String IP,boolean tracking, boolean EcpectedTracking) throws Exception {
		 getDriver();
		 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		 driver.manage().deleteAllCookies();
		 String URL = Utility.getProperties("webdriver.domain");
		 if (tracking) {
			 URL = "http://serve.eurogrand.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=14153215&lp=0";
		}
		 driver.get(URL);
		 try {
				Thread.sleep(5000);
		}
		catch (InterruptedException e) {}
		 setCookieIP(IP);
		 driver.get(Utility.getProperties("webdriver.domain"));
		 Assert.assertEquals(EcpectedTracking, cookieclickinfoExist()); 
	}
	
	private boolean cookieclickinfoExist() {
		   Cookie _Cookie = driver.manage().getCookieNamed("clickinfo");
		   if (_Cookie != null) {
			   return true;
		   }else{
			   return false;
		   }
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
