package com.wh.auto.eurogrand;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Reporter;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import com.wh.auto.common.Utility;

public class UserAgentTestsChrome {

	private WebDriver driver;

	public WebDriver getDriver(String locale){
		 try {
			System.setProperty("webdriver.chrome.driver", Utility.getResourcePath("chromedriver.exe")); 
			ArrayList<String> switches = new ArrayList<String>();
			switches.add("--disable-extensions");
			switches.add("--user-agent="+locale);       
			ChromeOptions options = new ChromeOptions();
			//options.addArguments("user-data-dir=C:/Users/user_name/AppData/Local/Google/Chrome/User Data/Default");
			options.addArguments(switches);
			driver = new ChromeDriver(options);
		}
		catch (Exception e) {
			Reporter.log("Chrom Error"+ e);
		} 
		  return driver; 
		}
	
	@DataProvider(name = "Language")
	public Object[][] languages() {
		String UA_AndroidPhone = "Mozilla/5.0 (Linux; U; Android 4.0.3; de-de; Galaxy S II Build/GRJ22) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30";//android mobile - galaxy s2 
		String UA_AndroidTablet = "Mozilla/5.0 (Linux; U; Android 2.2; en-ca; GT-P1000M Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1";//
		String UA_iPhone = "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/531.22.7";//iphone4
		String UA_iPad = "Mozilla/5.0 (iPad; U; CPU iPad OS 5_0_1 like Mac OS X; en-us) AppleWebKit/535.1+ (KHTML like Gecko) Version/7.2.0.0 Safari/6533.18.5";//ipad2
		String UA_Desktop = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36";
		return new Object[][] { {UA_Desktop, "http://www.eurogrand.com/" }, {UA_AndroidPhone, "http://www.egmc.mobi/?msgln=en" }, { UA_AndroidTablet, "http://tab.egmc.mobi/" }, { UA_iPhone, "http://www.egmc.mobi/?msgln=en" }, { UA_iPad, "http://tab.egmc.mobi/?" }};
	}

	@Test(dataProvider = "Language", description = "Test The Browser UserAgent in Chrome")
	public void browserTarget(String Language, String EcpectedURL) throws Exception {
		 getDriver(Language);
		 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		 driver.manage().deleteAllCookies();
		 driver.get(Utility.getProperties("webdriver.domain"));
		 try {
				Thread.sleep(5000);
		}
		catch (InterruptedException e) {}
		 Assert.assertTrue(driver.getCurrentUrl().toLowerCase().contains(EcpectedURL));
	}

	@AfterMethod
	public void after() {
		driver.quit();
	}
	
}
