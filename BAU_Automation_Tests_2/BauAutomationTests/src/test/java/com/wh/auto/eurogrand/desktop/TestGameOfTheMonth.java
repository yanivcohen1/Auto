package com.wh.auto.eurogrand.desktop;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.ITestContext;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.CustomTouchAction;
import com.wh.auto.common.Utility;
import com.wh.auto.common.Browsers;

/**
 * Test The Game Of The Month in all languages in eurogrand
 * @author yanivc
 *
 */
public class TestGameOfTheMonth {

	private Browsers browser = new Browsers();
	private WebDriver driver;
	private ITestContext myTestContext;
	private Object[][] dpObj = null;
	private List<String> brandsNames = new ArrayList<String>();
	private int numfunArgs = 5;
	private String[] TestBrowser;
	private List<String> brandsIndex = new ArrayList<String>();
	private CustomTouchAction ScriptInjection;

	public static void main(String[] args) {
		TestGameOfTheMonth bt = new TestGameOfTheMonth();
		bt.createDataProvider();
	}
	
	/**
	 * initiaze for running DataProvider
	 */
	@BeforeClass
	public void before() {
		String BrowserTargetFile = Utility.getFilePathFromResource("GameOfTheMonth.csv");
		ArrayList<ArrayList<String>> brands = CSVReader.readFile(BrowserTargetFile);
		//for(ArrayList<String> csvline : brands){
			brandsNames.add(brands.get(0).get(0));
		//}
		List<GameOfTheMonth> browserTargetDP = new ArrayList<GameOfTheMonth>();
		//get browsers
		TestBrowser = Utility.getBrowsersPerTest(this.getClass().getSimpleName());
		for (String browser : TestBrowser) {
			for (CSVReader.Brand brand : CSVReader.getBrands()) {
				if (brandsNames.contains(brand.Brand_Name)) {
					for (CSVReader.Language language : CSVReader.getLanguages()) {
						for (int i = 0; i < 2; i++) {
							GameOfTheMonth gameOfTheMonth = new GameOfTheMonth();
							gameOfTheMonth.Browser = browser;
							//gameOfTheMonth.BaseURL = brand.Brand_Main_URL;
							gameOfTheMonth.Language = language.Language_Symbol;
							String symbol = language.Language_Symbol;
							CSVReader.Brands_Language bl = CSVReader.getBrand_Language(brand.Brand_Name, language.Language_Name);
							if (bl != null) {
								gameOfTheMonth.BaseURL = bl.Brand_Language_URL;
								gameOfTheMonth.GameCode = brands.get(0).get(i+1);
								gameOfTheMonth.GameIndex = i;
								browserTargetDP.add(gameOfTheMonth);
								brandsIndex.add(brand.Brand_Name);
							}
							//brandsNames.add(tool.getBrandLanguage().getBrand().getBrandName());
						}
					}
				}
			}
		}		
		dpObj = new Object[browserTargetDP.size()][numfunArgs];
		for (int i=0; i < dpObj.length ; i++)
			dpObj[i] = new Object[] {browserTargetDP.get(i).BaseURL, browserTargetDP.get(i).Language,
				browserTargetDP.get(i).GameCode, browserTargetDP.get(i).GameIndex, 
				browserTargetDP.get(i).Browser};
	}
	
	/**
	 * initiaze for running test and browser
	 * @return
	 */
	@DataProvider(name = "GameOfTheMonth")
	public Object[][] createDataProvider() {
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
	@DataProvider(name = "GameOfTheMonth2")
	public Object[][] languages() {
		return new Object[][] {{"http://www.eurogrand.com/ro", "ro", "gc=cam", 1, "firefox"}};//,
				//{"http://www.eurogrand.com/", "ru", "http://www.eurogrand.com/ru","chrome" }};
	}
	
	/**
	 * Test The GameOfTheMonth in Firefox
	 * @param BaseURL
	 * @param Language
	 * @param EcpectedURL
	 * @param Browser
	 * @throws Exception 
	 */
	@Test(dataProvider = "GameOfTheMonth", description = "Test The GameOfTheMonth in Firefox")
	public void browserTarget(String BaseURL, String Language, String GameCode, int GameIndex, String Browser) throws Exception {
		//getDriver(Browser);
		driver = browser.getDriver(Browser);
		driver.get(BaseURL);
		driver.manage().window().maximize();
		try { Thread.sleep(1000);}
		catch (InterruptedException e) {}
		boolean isPass = false;
		String url = "";
		WebElement gameOfTheMonth = driver.findElement(By.id("game-of-the-month"));
		gameOfTheMonth.findElement(By.className("circle")).click();
		WebElement redioButten;
		if(GameIndex != 0){
			redioButten  = driver.findElement(By.xpath("//div[@id='game-of-the-month']/div/div[2]"));
			redioButten.click();
			//WebDriverWait wait = new WebDriverWait(driver, 15);
			//wait.until(ExpectedConditions.textToBePresentInElement(By.id("winners_list"),"Date"));
		}
		Thread.sleep(2000);
		List<WebElement> gotm_image_wrapper = gameOfTheMonth.findElements(By.tagName("img"));
		gotm_image_wrapper.get(GameIndex).click();
		goToRegistationWindow("safeverification");
		if(driver.getCurrentUrl().contains("login")){
			driver.findElement(By.id("user-field")).sendKeys(Utility.getProperties("web.user"));
			driver.findElement(By.id("password-field")).sendKeys(Utility.getProperties("web.password"));
			driver.findElement(By.className("login-btn")).click();
			//WebDriverWait wait = new WebDriverWait(driver, 5);
			//wait.until(ExpectedConditions.textToBePresentInElement(By.id("winners_list"),"Date"));
			waitUrl(20, driver, "gc=");
			//Assert.assertTrue(driver.getCurrentUrl().contains(GameCode));
			if(BaseURL.contentEquals("http://www.eurogrand.com/")){
				Assert.assertTrue("fimgame?" + GameCode, driver.getCurrentUrl().contains("https://safeverification." +
						"eurogrand.com/fimgame?" + GameCode));
			}else{
				Assert.assertTrue(Language + "/fimgame?" + GameCode,driver.getCurrentUrl().contains("https://safeverification.eurogrand.com/"+
			Language + "/fimgame?" + GameCode));
			}
			
		}
	}
	/**
	 * go To RegistationWindow
	 * @param urlContain
	 * @throws Exception
	 */
	private void goToRegistationWindow(String urlContain) throws Exception {
		Set<String> handles = driver.getWindowHandles();
		for (String handle : handles) {
			driver.switchTo().window(handle);
			if (driver.getCurrentUrl().contains(urlContain)) {
				return;
			}

		}
		throw new Exception("Could not find window url");
	}
	/**
	 * is Element Present
	 * @param by
	 * @return
	 */
	private boolean isElementPresent(By by) {
        try {
          driver.findElement(by);
          return true;
        } catch (NoSuchElementException e) {
          return false;
        }
      }
	/**
	 * wait Condition
	 * @param by
	 * @param timeOutSec
	 * @param driver
	 * @return
	 * @throws Exception
	 */
	private boolean waitCondition(By by, int timeOutSec, WebDriver driver) throws Exception{
		boolean pass = false;
		for (int second = 0;; second++) {
			if (second >= timeOutSec) throw new Exception("timeout");
			try { if (!driver.findElement(by).equals(null)) 
				pass = true;
				break; 
			} catch (Exception e) {}
			Thread.sleep(1000);
		}
		return pass;
	}
	/**
	 * wait for Url
	 * @param timeOutSec
	 * @param driver
	 * @param Condition
	 * @return
	 * @throws Exception
	 */
	private boolean waitUrl(int timeOutSec, WebDriver driver, String Condition) throws Exception{
		boolean pass = false;
		for (int second = 0;; second++) {
			if (second >= timeOutSec) throw new Exception("timeout");
			try {
					if (driver.getCurrentUrl().contains(Condition)){ 
						pass = true;
						break;
					}
			} catch (Exception e) {}
			Thread.sleep(1000);
		}
		return pass;
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
	public class GameOfTheMonth {
		String Browser;
		String BaseURL;
		String Language; 
		String GameCode;
		int GameIndex;
	}
	
}
