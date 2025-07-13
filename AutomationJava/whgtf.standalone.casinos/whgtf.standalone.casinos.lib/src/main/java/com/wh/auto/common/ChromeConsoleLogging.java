package com.wh.auto.common;

import java.util.Date;
import java.util.logging.Level;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.logging.LogEntries;
import org.openqa.selenium.logging.LogEntry;
import org.openqa.selenium.logging.LogType;
import org.openqa.selenium.logging.LoggingPreferences;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
//import org.testng.annotations.AfterMethod;
//import org.testng.annotations.BeforeMethod;
//import org.testng.annotations.Test;

public class ChromeConsoleLogging {
    private WebDriver driver;


    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", 
        	"C:/Git/sac-auto-tests/whgtf.standalone.casinos/whgtf.standalone.casinos.tests/src/test/resources/selenium/windows/chromeDriver/32bit/2.14/chromedriver.exe");        
        DesiredCapabilities caps = DesiredCapabilities.chrome();
        LoggingPreferences logPrefs = new LoggingPreferences();
        logPrefs.enable(LogType.BROWSER, Level.ALL);
        caps.setCapability(CapabilityType.LOGGING_PREFS, logPrefs);
        driver = new ChromeDriver(caps);
    }

    @After
    public void tearDown() {
        driver.quit();
    }

    public void analyzeLog() {
        LogEntries logEntries = driver.manage().logs().get(LogType.BROWSER);
        for (LogEntry entry : logEntries) {
            System.out.println(new Date(entry.getTimestamp()) + " " + entry.getLevel() + " " + entry.getMessage());
            //do something useful with the data
        }
    }

    public static String GetConsolLog(WebDriver driver) {
        LogEntries logEntries = driver.manage().logs().get(LogType.BROWSER);
        String readConsole = "";
        for (LogEntry entry : logEntries) {
        	readConsole = readConsole + new Date(entry.getTimestamp()) + " " + entry.getLevel() + " " + 
        			entry.getMessage() + Utility.getNewline();
            //do something useful with the data
        }
        return readConsole;
    }
    
    @Test
    public void testMethod() {
        driver.get("https://ww2.eurogrand.com");
        try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {	}
        //do something on page
        analyzeLog();
    }
}