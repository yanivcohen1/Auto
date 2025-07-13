package com.wh.auto.eurogrand;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
//import com.Tester.MyTest;
import com.wh.auto.common.Utility;

public class BrowserTargetTestsFF {

	private WebDriver driver;
	//public enum Language {en-us, de, ru}

	public WebDriver getDriver(String locale){
		  FirefoxProfile profile = new FirefoxProfile();
		  profile.setPreference("intl.accept_languages", locale);
		  driver = new FirefoxDriver(profile);   
		  return driver;       
		}
	
	@DataProvider(name = "Language")
	public Object[][] languages() {
		return new Object[][] { {"en-us", "http://www.eurogrand.com/" }, { "de", "http://www.eurogrand.com/de" }, { "ru", "http://www.eurogrand.com/ru" }};
	}

	@Test(dataProvider = "Language", description = "Test The Browser Targeting in Firefox")
	public void browserTarget(String Language, String EcpectedURL) throws Exception {
		 getDriver(Language);
		 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		 driver.manage().deleteAllCookies();
		 driver.get(Utility.getProperties("webdriver.domain"));
		 try {;
				Thread.sleep(5000);
		}
		catch (InterruptedException e) {}
		 Assert.assertEquals(EcpectedURL, driver.getCurrentUrl().toLowerCase());
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
