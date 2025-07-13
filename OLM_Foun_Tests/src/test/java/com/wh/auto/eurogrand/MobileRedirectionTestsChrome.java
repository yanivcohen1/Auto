package com.wh.auto.eurogrand;

import java.io.BufferedReader;
import java.io.InputStreamReader;
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

public class MobileRedirectionTestsChrome {

	private WebDriver driver;
	public static String newline = System.getProperty("line.separator");
	
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
		String mobilePixel = "http://serve.eurogrand.com/promoRedirect?zone=1477487947&lp=1477487945";
		String tabletPixel = "http://serve.eurogrand.com/promoRedirect?zone=1477487749&lp=1477487747";
		return new Object[][] {{UA_AndroidPhone, mobilePixel }, { UA_AndroidTablet, tabletPixel }};
	}

	@Test(dataProvider = "Language", description = "Test The Browser UserAgent in Chrome")
	public void browserTarget(String Language, String Pixel) throws Exception {
		 getDriver(Language);
		 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		 driver.manage().deleteAllCookies();
		 String ProcessSniffer = Utility.getResourcePath("ProcessSniffer.exe");
		 String[] command =  new String[3];
		 command[0] = "cmd";
		 command[1] = "/C";
		 command[2] = ProcessSniffer +" 20 " + driver.getWindowHandle();
		 Process p = Runtime.getRuntime().exec(command);
		 Thread.sleep(5000);
		 String url = "http://serve.eurogrand.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=14153215&lp=0";
		 driver.get(url);
		 BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
         BufferedReader stdError = new BufferedReader(new InputStreamReader(p.getErrorStream()));
         // read the output from the command
         String output= "";
         String s = null;
         while ((s = stdInput.readLine()) != null) {//p.exitValue());System.exit(code);
        	 output = output + s + newline;
         }
         while ((s = stdError.readLine()) != null) {
        	 output = output + s + newline;
         }
         Assert.assertTrue(output.contains(Pixel));
	}

	@AfterMethod
	public void after() {
		driver.quit();
	}
	
}
