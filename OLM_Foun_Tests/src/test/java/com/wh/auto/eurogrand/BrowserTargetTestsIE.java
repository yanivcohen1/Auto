package com.wh.auto.eurogrand;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Reporter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import com.wh.auto.common.Utility;

public class BrowserTargetTestsIE {

	private WebDriver driver;

	public WebDriver getDriver(String locale){
		 try {
			 //Advapi32Util.registrySetStringValue(WinReg.HKEY_CURRENT_USER, "Software\\Microsoft\\Internet Explorer\\International", "AcceptLanguage", locale);
			 deleteAllCookies();
			 setLanguage(locale);
			 System.setProperty("webdriver.ie.driver", Utility.getResourcePath("IEDriverServer.exe"));
			 DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
			 capabilities.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
			 capabilities.setCapability(CapabilityType.ForSeleniumServer.ENSURING_CLEAN_SESSION, true);
			 driver = new InternetExplorerDriver(capabilities);
		}
		catch (Exception e) {
			Reporter.log("IE Error"+ e);
			//quitDriver();
		}
		  return driver;       
		}
	
	private void setLanguage(String locale) {
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
	
	private void deleteAllCookies() {
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

	@DataProvider(name = "Language")
	public Object[][] languages() {
		return new Object[][] { {"en-us", "http://www.eurogrand.com/" }, { "de", "http://www.eurogrand.com/de" }, { "ru", "http://www.eurogrand.com/ru" }};
	}

	@Test(dataProvider = "Language", description = "Test The Browser Targeting in InternetExplorer")
	public void browserTarget(String Language, String EcpectedURL) throws Exception {
		 getDriver(Language);
		 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		 driver.get(Utility.getProperties("webdriver.domain")); 
		 try { Thread.sleep(5000); }catch (InterruptedException e) {}
		 Assert.assertEquals(EcpectedURL, driver.getCurrentUrl().toLowerCase());
		 driver.manage().deleteAllCookies();
	}

	@AfterMethod
	public void after() {
		driver.quit();
	}
	
	@AfterClass
	public void afterSuite() {
		setLanguage("en-us");
	}
	
}
