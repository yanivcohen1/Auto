package com.who.rest.tests.utils;

//import java.io.File;
import java.util.ArrayList;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.events.WebDriverEventListener;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

/**
 * Helper for MultiBrowser support and main browser functions
 * @author Dario De Santis <dario.desantis@williamhill.com>
 *
 */
//@Service
//@Scope("prototype")
public class Browsers {

	private String browseName;
	private WebDriver driver;
	
	public String getBrowseName() {
		return browseName;
	}
	
	public void setBrowseName(String browseName) {
		this.browseName = browseName;
	}
	
	public WebDriver getDriver() {
		if (driver == null) {
			driver = get_Driver(browseName);
		}
		return driver;
	}


	//public static Boolean _Debug = false;
	//public static WebDriverEventListener eventListener = new MyEventListener();
	/**
	 * Get the driver for the selected browser
	 * @param driverName {@value "firefox", "chrome", "ie"}, Browser Options
	 * @return driver
	 */
	public <T> WebDriver get_Driver(String driverName, T... Options)
	{
	    driver = null;
	    System.setProperty("org.uncommons.reportng.escape-output", "false");
	    if( driverName.equals("firefox") )
	    {
	    	if(Options.length>0 && Options[0] instanceof FirefoxProfile)
	    	{
	    		((FirefoxProfile) Options[0]).setPreference("browser.cache.disk.enable", false);
	    		((FirefoxProfile) Options[0]).setPreference("browser.cache.memory.enable", false);
	    		((FirefoxProfile) Options[0]).setPreference("browser.cache.offline.enable", false);
	    		((FirefoxProfile) Options[0]).setPreference("network.http.use-cache", false);
				driver = new FirefoxDriver(((FirefoxProfile) Options[0]));
	    	}
	    	else if(Options.length>0 && Options[0] instanceof DesiredCapabilities)
	    	{
	    		driver = new FirefoxDriver((DesiredCapabilities) Options[0]);
	    	}
	    	else
	    	{
	    		driver = new FirefoxDriver();
	    	}
	    }
	    else if( driverName.equals("chrome") )
	    {
	    	System.setProperty("webdriver.chrome.driver", Utility.getFilePathFromResource("chromedriver.exe"));
			if(Options.length>0 && Options[0] instanceof ChromeOptions)
			{
		    	ArrayList<String> switches = new ArrayList<String>();
				switches.add("--disable-extensions");
				((ChromeOptions) Options[0]).addArguments(switches);
				driver = new ChromeDriver((ChromeOptions) Options[0]);
			}
			else if(Options.length>0 && Options[0] instanceof DesiredCapabilities)
	    	{
	    		driver = new ChromeDriver((DesiredCapabilities) Options[0]);
	    	}
			else
			{
				ChromeOptions options = new ChromeOptions();
				ArrayList<String> switches = new ArrayList<String>();
				switches.add("--disable-extensions");
				options.addArguments(switches);
				driver = new ChromeDriver(options);
			}
	    }
	    else if( driverName.equals("ie") )
	    {
	    	System.setProperty("webdriver.ie.driver",  Utility.getFilePathFromResource("IEDriverServer.exe"));
	    	/*Utility.runProcess(Utility.getFilePathFromResource("IEDriverServer.exe"));
	    	try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}*/
	    	if(Options.length>0 && Options[0] instanceof DesiredCapabilities){
	    		((DesiredCapabilities) Options[0]).setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
	    		((DesiredCapabilities) Options[0]).setCapability(CapabilityType.ForSeleniumServer.ENSURING_CLEAN_SESSION, true); 
	    		driver = new InternetExplorerDriver((DesiredCapabilities) Options[0]);
	    	}
	    	else
	    	{
	    		DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
	    		capabilities.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
	    		capabilities.setCapability(CapabilityType.ForSeleniumServer.ENSURING_CLEAN_SESSION, true); 
	    		driver = new InternetExplorerDriver(capabilities);
	    	}
	    }
	    
	    return driver;//driver;
	}	
	
	
	/**
	 * Start Firefox with the selected UserAgent
	 * @param UserAgent
	 * @return dirver
	 */
	public WebDriver getDriveWithUserAgent(String UserAgent)
	{
		WebDriver driver = null;
		FirefoxProfile profile = new FirefoxProfile();
		profile.setPreference("general.useragent.override", UserAgent);
		driver = new FirefoxDriver(profile);
		
		return driver;
	}
	
	/**
	 * Delete all the cookies of the browser
	 * @param driver
	 */
	public void clearCookies(WebDriver driver)
	{
		driver.manage().deleteAllCookies();
		/*
		if(driver.toString().toLowerCase().contains("InternetExplorerDriver".toLowerCase())) {
	    	try {
	    	    Runtime.getRuntime().exec("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 255");
	    	} catch (IOException e) {
	    	    e.printStackTrace();
	    	}
		}
		*/
	}
}
