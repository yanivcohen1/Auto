package com.wh.auto.whcc.desktop;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.testng.ITestContext;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;
import com.wh.auto.common.Browsers;

/**
 * Test The Browser Targeting in all languages and all brands
 * @author yanivc
 *
 */
public class TestBrowserTarget {

	private Browsers browser = new Browsers();
	private WebDriver driver;
	private ITestContext myTestContext;
	private Object[][] dpObj = null;
	private List<String> brandsNames = new ArrayList<String>();
	private int numfunArgs = 4;
	private String[] TestBrowser;
	private List<String> brandsIndex = new ArrayList<String>();

	public static void main(String[] args) {
		TestBrowserTarget bt = new TestBrowserTarget();
		bt.browserTarget("http://www.21nova.com/", "de", "http://www.21nova.com/de", "chrome");
		bt.after();
	}
	
	/**
	 * initiaze for running DataProvider
	 */
	@BeforeClass
	public void before() {
		String BrowserTargetFile = Utility.getFilePathFromResource("Whcc\\BrowserTarget.csv");
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
		String testName = myTestContext.getName();
		for (int i = 0; i < dpObj.length; i++) {
			if (!currentSuite.equalsIgnoreCase("Default suite")) {
				if (currentSuite.toLowerCase().contains(brandsIndex.get(i)) && //brand name compare
						testName.toLowerCase().contains(dpObj[i][numfunArgs-1].toString())) {//browser name compare
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
	 * set the driver for test per browser
	 * @param locale
	 * @param _browser
	 * @return
	 */
	public WebDriver getDriver(String locale, String _browser){
		  if(_browser.equalsIgnoreCase("firefox") ){
			  FirefoxProfile profile = new FirefoxProfile();
			  profile.setPreference("intl.accept_languages", locale);
			  driver = browser.getDriver(_browser, profile);
		  }else if(_browser.equalsIgnoreCase("chrome")){
			  ChromeOptions options = new ChromeOptions();
			  ArrayList<String> switches = new ArrayList<String>();
			  switches.add("--lang=" + locale);
			  options.addArguments(switches);
			  //options.setExperimentalOptions("intl.accept_languages", locale);
			  driver = browser.getDriver(_browser, options);
		  }else if(_browser.equalsIgnoreCase("ie")){
			  Utility.deleteAllCookiesIE();
			  Utility.setLanguageIE(locale);
			  driver = browser.getDriver(_browser);
		  }
		  driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		  driver.manage().deleteAllCookies();
		  return driver;       
	}
	
	/**
	 * initiaze for manual running
	 * @return
	 */
	@DataProvider(name = "browserTarget2")
	public Object[][] languages() {
		return new Object[][] {{"http://www.21nova.com/", "de", "http://www.21nova.com/de", "chrome"}};//,
				//{"http://www.eurogrand.com/", "ru", "http://www.eurogrand.com/ru","chrome" }};
	}
	
	/**
	 * Test The Browser Targeting in all 3 browsers
	 * @param BaseURL
	 * @param Language
	 * @param EcpectedURL
	 * @param Browser
	 */
	@Test(dataProvider = "browserTarget", description = "Test The Browser Targeting in Firefox")
	public void browserTarget(String BaseURL, String Language, String EcpectedURL, String Browser) {
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
		if(!isPass){
			System.out.println(errorMSG +  "-Browser:" + Browser);
		}
		Assert.assertTrue(errorMSG, isPass);
		
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
	public void after() {
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
