package com.wh.auto.common;

//import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Properties;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.SessionId;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.safari.SafariOptions;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.events.WebDriverEventListener;

import com.wh.auto.repository.SessionRepository;

/**
 * Helper for MultiBrowser support and main browser functions
 */
public class Browsers {

	private String browseName;
	private WebDriver driver;
	
	public WebDriver get_Driver() {
		if (driver == null) {
			driver = getDriver(browseName);
		}
		return driver;
	}
	
	//public static Boolean _Debug = false;
	public static WebDriverEventListener eventListener = new MyEventListener();
	
	/**
	 * get Driver
	 * @param browserType
	 * @param userAgent
	 * @return
	 * @throws IOException
	 */
	public WebDriver get_Driver(String browserType) throws IOException{
		return get_Driver(browserType, null);
	}
	
	/**
	 * get Driver
	 * @param browserType
	 * @param userAgent
	 * @return
	 * @throws IOException
	 */
	public WebDriver get_Driver(String browserType, String userAgent) throws IOException{
		long threadId = Thread.currentThread().getId();
		//Browsers browsers = new Browsers();
		browseName = browserType;
		if (browserType.contains("chrome")) {
			DesiredCapabilities capabilities = DesiredCapabilities.chrome();
			ChromeOptions options = new ChromeOptions();
			if (userAgent != null) {
				ArrayList<String> switches = new ArrayList<String>();
				switches.add("--disable-extensions");
				switches.add("--user-agent=" + userAgent);
				options.addArguments(switches);
				capabilities.setCapability(ChromeOptions.CAPABILITY, options);
			}
			try {
				driver = remoteDriver(null, capabilities);//"624e9f59-6b4c-4486-933e-8ca17f4550c0"
				driver.getTitle();
			} catch (Exception e) {
				if (userAgent != null) {
					driver = getDriver(browserType, options);
				} else{
					driver = getDriver(browserType);
				}
			}
		} else if (browserType.contains("firefox")) {
			if (userAgent != null) {
				FirefoxProfile firefoxProfile = getDriveWithUserAgent(userAgent);
				driver = getDriver(browserType, firefoxProfile);
			}else{
				driver = getDriver(browserType);
			}
		} else if (browserType.contains("safari")) {
			driver = getDriver(browserType);
			// change userAgent
			Utility.runProcessWaitExit(Utility.getResourcePath("ClickSafariUserAgent.exe"));
		}
		return driver;
	}
	
	/**
	 * Get the driver for the selected browser
	 * @param driverName {@value "firefox", "chrome", "ie"}, Browser Options
	 * @return driver
	 */
	public <T> WebDriver getDriver(String driverName, T... Options)
	{
	    WebDriver driver = null;
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
	    		//driver = new FirefoxDriver((DesiredCapabilities) Options[0]);
	    		URL uri = null;
	    		try {
	    		uri = new URL("http://localhost:7055/hub");
	    		} catch (Exception e) { }
				driver = new RemoteWebDriver(uri, (DesiredCapabilities) Options[0]);
	    	}
	    	else
	    	{
	    		URL uri = null;//ff
				try {
					uri = new URL("http://localhost:7055/hub");
					driver = new RemoteWebDriver(uri, DesiredCapabilities.firefox());
				} catch (Exception e) { 
					driver = new FirefoxDriver();
					//URL uri = new URL("http://127.0.0.1:4444/wd/hub");//chrome
				}
	    	}
	    }else if( driverName.equals("safari") ){
	    	
	    	SafariOptions options = new SafariOptions();
	    	 options.setUseCleanSession(true);

	    	 // For use with SafariDriver:
	    	 driver = new SafariDriver(options);
	    }else if( driverName.equals("chrome") )
	    {
	    	System.setProperty("webdriver.chrome.driver", Utility.getFilePathFromResource("chromedriver.exe"));
	    	/*try {
				Runtime.getRuntime().exec("cmd /c start cmd.exe /K \"C:\\externalTools\\chromedriver.exe\"");
			} catch (IOException e) {
				e.printStackTrace();
			}*/
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
	    
	    this.driver = new EventFiringWebDriver(driver).register(eventListener);//driver;
	    SessionRepository.setWebDriver(this.driver, Thread.currentThread().getId());
	    return this.driver;
	}	
	
	public WebDriver openFirefoxRemote(String UserAgent) throws MalformedURLException {
		FirefoxProfile firefoxProfile = new FirefoxProfile();
		if (UserAgent != null) {
			firefoxProfile.setPreference("general.useragent.override", UserAgent);
		}
		DesiredCapabilities capabilities = DesiredCapabilities.firefox();
		capabilities.setCapability(FirefoxDriver.PROFILE, firefoxProfile);
		try {
			driver = new RemoteWebDriver(new URL("http://localhost:7055/hub"), capabilities);
		} catch (Exception e) {
			driver = new FirefoxDriver();
			driver = new RemoteWebDriver(new URL("http://localhost:7055/hub"), capabilities);
		}
		driver = new EventFiringWebDriver(driver).register(eventListener);
		SessionRepository.setWebDriver(this.driver, Thread.currentThread().getId());
		return driver;
	}
	
	public WebDriver remoteDriver(String sessionIds, DesiredCapabilities desiredCapabilities) throws MalformedURLException {
		Properties prop = Utility.getPropertyFile("utility.properties");
    	String SeleniumGridFile = prop.getProperty("SeleniumGridFile");
		CharSequence sessionChar = Utility.readFile(SeleniumGridFile);
		if(sessionChar != null ){
			if (sessionChar.length() > 3) {
				String session = sessionChar.toString().trim();
				if (session.contains("null")) {
					CustomRemoteWebDriver.sessionIds = null;
				}else{
					CustomRemoteWebDriver.sessionIds = session;//"9af861ce-f39b-4bf0-a1d8-d044f91dbdb7";
				}
				driver = new CustomRemoteWebDriver(new URL("http://localhost:4444/wd/hub"), desiredCapabilities);
				try {
					driver.getTitle();
				} catch (Exception e) {
					Utility.terminateChrome();
					CustomRemoteWebDriver.sessionIds = null;
					driver = new CustomRemoteWebDriver(new URL("http://localhost:4444/wd/hub"), desiredCapabilities);
					driver.getTitle();
					SessionId sessionId = ((RemoteWebDriver) driver).getSessionId();
					Utility.writeTofile(SeleniumGridFile, sessionId.toString(), false);
				}
				SessionId sessionId = ((RemoteWebDriver) driver).getSessionId();
				if (session.contains("null")) {
					Utility.writeTofile(SeleniumGridFile, sessionId.toString(), false);
				}
				System.out.println(sessionId);
				driver = new EventFiringWebDriver(driver).register(eventListener);
				SessionRepository.setWebDriver(this.driver, Thread.currentThread().getId());
			}else{
				driver = null;
			}
		}else{
			driver = null;
		}
		return driver;
	}
	
	/**
	 * Start Firefox with the selected UserAgent
	 * @param UserAgent
	 * @return dirver
	 */
	public FirefoxProfile getDriveWithUserAgent(String UserAgent)
	{
		//WebDriver driver = null;
		FirefoxProfile profile = new FirefoxProfile();
		profile.setPreference("general.useragent.override", UserAgent);
		//driver = new FirefoxDriver(profile);
		
		return profile;
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
	
	public String getBrowseName() {
		return browseName; 
	}
	
	public void setBrowseName(String browseName) {
		this.browseName = browseName;
	}
}
