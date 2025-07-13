package com.wh.auto.general;

import java.awt.AWTException;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.ProcessBuilder.Redirect;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.testng.IRetryAnalyzer;
import org.testng.ITestContext;
import org.testng.ITestResult;
import org.testng.Reporter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;
import com.wh.auto.common.Browsers;

/**
 * Test The Browser Target
 * @author yanivc
 */
public class Test_BrowserTarget {
	private static Browsers browser = new Browsers();
	private WebDriver driver;
	private ITestContext myTestContext;
	private Object[][] dpObj = null;
	private List<String> brandsNames = new ArrayList<String>();
	private int numfunArgs = 4;
	private String[] TestBrowser;
	private List<String> brandsIndex = new ArrayList<String>();
	private int maxRetryCount = 3;
	private static boolean debug = false;
	
	/**
	 * for testing
	 * @param args
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws AWTException
	 */
	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		debug = true;
		Test_BrowserTarget bt = new Test_BrowserTarget();
		bt.browserTarget("http://www.joylandcasino.com", "fr-fr", "http://www.joylandcasino.com/fr/", "firefox");
		bt.afterTest();
	}
	
	/**
	 * initiaze for running DataProvider
	 */
	@BeforeClass
	public void before() {
		String BrowserTargetFile = Utility.getFilePathFromResource("BrowserTarget.csv");
		ArrayList<ArrayList<String>> brands = CSVReader.readFile(BrowserTargetFile);
		for(ArrayList<String> csvline : brands){
			brandsNames.add(csvline.get(0));
		}
		List<BrowserTarget> browserTargetDP = new ArrayList<BrowserTarget>();
		//get browsers
		TestBrowser = Utility.getBrowsersPerTest(this.getClass().getSimpleName());
		for (String browser : TestBrowser) {
			for (CSVReader.Brand brand : CSVReader.getBrands()) {
				if (brandsNames.contains(brand.Brand_Name)) {
					for (CSVReader.Language language : CSVReader.getLanguages()) {
						BrowserTarget browserTarget = new BrowserTarget();
						browserTarget.Browser = browser;
						browserTarget.BaseURL = brand.Brand_Main_URL;
						browserTarget.Language = language.Language_Browser_Accept_Langauge;
						String symbol = language.Language_Symbol;
						CSVReader.Brands_Language bl = CSVReader.getBrand_Language(brand.Brand_Name, language.Language_Name);
						if( bl != null){
							browserTarget.EcpectedURL = bl.Brand_Language_URL;
							browserTargetDP.add(browserTarget);
							brandsIndex.add(brand.Brand_Name);
						}
						//brandsNames.add(tool.getBrandLanguage().getBrand().getBrandName());
					}
				}
			}
		}		
		dpObj = new Object[browserTargetDP.size()][numfunArgs];
		for (int i=0; i < dpObj.length ; i++)
			dpObj[i] = new Object[] {browserTargetDP.get(i).BaseURL, browserTargetDP.get(i).Language,
				browserTargetDP.get(i).EcpectedURL, browserTargetDP.get(i).Browser};
	}
	
	/**
	 * initiaze for running test per brand and browser
	 * @return
	 */
	@DataProvider(name = "browserTarget")
	public Object[][] ReadTestBT() {
		List<Object[]> Result = new ArrayList<Object[]>();
		//System.out.println(myTestContext.getSuite().getName());
		String currentSuite = myTestContext.getSuite().getName();
		for (int i = 0; i < dpObj.length; i++) {
			if (!currentSuite.equalsIgnoreCase("Default suite")) {
				if (myTestContext.getName().equalsIgnoreCase(brandsIndex.get(i)) && //brand name compare
						currentSuite.toLowerCase().contains(dpObj[i][numfunArgs-1].toString())) {//browser name compare
					Result.add(dpObj[i]);
				}
			}else{
				Result.add(dpObj[i]);
			}
		}
		Object[][] obj = new Object[Result.size()][numfunArgs];
		for (int i=0; i < obj.length ; i++)
			obj[i] = Result.get(i);
		return obj;
	}
	
	/**
	 * Test The Browser Targeting in all 3 browsers
	 * @param BaseURL
	 * @param Language
	 * @param EcpectedURL
	 * @param Browser
	 */
	@Test(dataProvider = "browserTarget", timeOut = 300000, retryAnalyzer=Test_BrowserTarget.class, description = "TTest The Browser Targeting")//5 min timeout
	public void browserTarget(String BaseURL, String Language, String EcpectedURL, String Browser) throws IOException {
		if (!debug) {
			for (int i = 0; i < maxRetryCount; i++) {
				try {
					BrowserTargetDebug(BaseURL, Language, EcpectedURL, Browser);
					break;
				} catch (Exception e) {
					if(i >= maxRetryCount-1){
						Utility.logError(e, myTestContext, driver, true);
					}
					Utility.logError(e, myTestContext, driver, false);
					//afterSuite();
				}
			}
		}else{
			BrowserTargetDebug(BaseURL, Language, EcpectedURL, Browser);
		}  
	}
	
	/**
	 * The main Test
	 * @param browserType
	 * @throws IOException 
	 * @throws AWTException
	 * @throws InterruptedException
	 */
	private void BrowserTargetDebug(String BaseURL, String Language, String EcpectedURL, String Browser) throws IOException{
		getDriver(Language,Browser);
		driver.get(BaseURL);
		try { Thread.sleep(1000);}
		catch (InterruptedException e) {}
		boolean isPass = false;
		String url = "";
		if (BaseURL.equalsIgnoreCase("http://www.joylandcasino.com")) {
				url = driver.switchTo().frame("mainFrame").getCurrentUrl();
		}else{
			url = driver.getCurrentUrl().toLowerCase();
		}
		isPass = url.toLowerCase().contains(EcpectedURL.toLowerCase());
		String	errorMSG = "Expected:"+ EcpectedURL+ " --> Response:"+ driver.getCurrentUrl()+" --> Lang:"+ Language;
		Assert.assertTrue(errorMSG, isPass);
	}
	
	/**
	 * set the driver for test per browser
	 * @param locale
	 * @param _browser
	 * @return
	 * @throws IOException 
	 */
	public WebDriver getDriver(String locale, String _browser) throws IOException {
		if (_browser.equalsIgnoreCase("firefox")) {
			FirefoxProfile profile = new FirefoxProfile();
			profile.setPreference("intl.accept_languages", locale);
			driver = browser.getDriver(_browser, profile);
		} else if (_browser.equalsIgnoreCase("chrome")) {
			ChromeOptions options = new ChromeOptions();
			ArrayList<String> switches = new ArrayList<String>();
			switches.add("--lang=" + locale);
			options.addArguments(switches);
			// options.setExperimentalOptions("intl.accept_languages", locale);
			driver = browser.getDriver(_browser, options);
		} else if (_browser.equalsIgnoreCase("ie")) {
			Utility.runProcess(Utility.getResourcePath("IEClearCacheAndCookies.exe"));
			Utility.deleteAllCookiesIE();
			Utility.setLanguageIE(locale);
			driver = browser.getDriver(_browser);
		}
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		return driver;
	}
	
	/**
	 * getting the test context 
	 * @param myTestContext1
	 */
	@BeforeTest
	public void TEST_BEFOFRE(ITestContext myTestContext1){
		myTestContext = myTestContext1;    
	}
	
	/**
	 * After each test close the browser
	 */
	@AfterMethod
	public void afterTest() {
		driver.quit();
	}
	
	/**
	 * After all tests close the browser
	 */
	@AfterClass
	public void afterSuite() {
		driver.quit();
	}
	
	/**
	 * class for BrowserTarget data type
	 * @author yanivc
	 *
	 */
	public class BrowserTarget {
		String BaseURL;
		String Language; 
		String EcpectedURL;
		String Browser;
	}
	
}
