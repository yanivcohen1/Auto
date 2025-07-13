package com.wh.auto.whcc;

import java.awt.AWTException;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Properties;
import java.util.function.Function;

import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.events.WebDriverEventListener;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.Assert;
import org.testng.ITestContext;
import org.testng.Reporter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.wh.auto.TestObjects.AbstractWhTestObject;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.MyEventListener;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.repository.AppContextRepository;
import com.wh.auto.whcc.pages.mobile.DepositPage;
import com.wh.auto.whcc.pages.mobile.MainWebPage;
import com.wh.auto.whcc.pages.mobile.RegisterPage;

//@ContextConfiguration(locations = {"classpath:nova21DepositDE.xml"})
public class TimeoutMobile extends AbstractWhTestObject {
	
	private int maxRetryCount = 3;
	private static boolean debug = false;
	private static String browserType;
	private static String[] parametersFileNames;
	private static String currency;
	private static Browsers browsers = new Browsers();
	public static WebDriverEventListener eventListener = new MyEventListener();
	static TestDepositMobile testDeposit;

	@Autowired
    protected ApplicationContext ac;
	
	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		debug = true;
		TimeoutMobile testRegistration = new TimeoutMobile();
		String testParams = "Whcc\\DepositMobileEN.xml";
		parametersFileNames = new String[]{testParams};
		testRegistration.beforeSuite(testParams);//classpath*:**/
		ApplicationContext ac = new ClassPathXmlApplicationContext("classpath:"+ testParams);
		String UserAgent = "Mozilla/5.0 (Linux; Android 5.0; en-gb; SAMSUNG SM-G900F Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko)";
		TestDepositMobile testDeposit = ac.getBean(TestDepositMobile.class);
		MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
		String browserType = testDeposit.getBrowserType();
		if ("firefox".contentEquals(browserType)) {
			driver = browsers.openFirefoxRemote(UserAgent);
		}
		
		testRegistration.timeOutMobile();
	}
	
	/**
	 * Before all tests starts
	 */
	@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite(@Optional("DepositEN.xml") String parametersFileName) {
		if (parametersFileName == null || (parametersFileName.contains("PT_Advertiser.ini"))) {
			parametersFileName = "WilliamDepositMobileDE.xml";
		}
		this.parametersFileNames = parametersFileName.split(",");
	}
	
	/**
	 * initiaze for running test and browser
	 * @return
	 */
	@DataProvider(name = "Browsers")
	public Object[][] createDataProvider() {
		System.out.println("Start test: " + myTestContext.getName());
		Object[][] obj = new Object[parametersFileNames.length][1];
		for (int i=0; i < obj.length ; i++)
			obj[i] = new Object[]{parametersFileNames[i]};//(Object[])TestBrowser[i];
		return obj;
	}
	
	/**
	 * Registration Test
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws AWTException 
	 */
	//@Test(dataProvider = "Browsers", timeOut = 600000, retryAnalyzer=TestDepositMobile.class, description = "Test The Registration & Deposit")//10 min timeout
	public void depositTest(String parametersFileName) throws IOException, InterruptedException, AWTException {
		if (!debug) {
			for (int i = 0; i < maxRetryCount; i++) {
				try {
					depositTestDebug(parametersFileName);
					break;
				} catch (Exception e) {
					e.printStackTrace();
					if(i >= maxRetryCount-1){
						Utility.logError(e, myTestContext, driver, true);
					}
					Utility.logError(e, myTestContext, driver, false);
					after();
				}
			}
		}else{
			depositTestDebug(parametersFileName);
		}  
	}
	
	/**
	 * The main Test
	 * @param browserType
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	private void depositTestDebug(String parametersFileName) throws AWTException, InterruptedException, IOException {
		Utility.terminateChrome();
		ac = new ClassPathXmlApplicationContext("classpath:"+ parametersFileName);
		testDeposit = ac.getBean(TestDepositMobile.class);
		browserType = testDeposit.getBrowserType();
		AppContextRepository.setAc(ac);
		MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
		driver = mainWebPage.openUrl(browserType);
		//driver.manage().window().maximize();
		//mainWebPage.OpenLanguage();
		RegisterPage registerPage = ac.getBean(RegisterPage.class);
		String userName = registerPage.register();
		//start Deposit
		DepositPage depositPage = ac.getBean(DepositPage.class);
		depositPage.deposit();
		Thread.sleep(5000);
		waitForElementClick(driver, By.xpath("//div[@id='application']/div[2]/div/div/div/span"), "open Menu");
		Thread.sleep(1000);
		waitForElement(driver, By.cssSelector("#application > div.fn-slide-menu-container > div > div > div.slide-menu__wrap.fn-menu-wrap > div > ul > li:nth-child(6) > div > span.slide-menu__head__name"), "my account").click();
		Thread.sleep(1000);
		waitForElementClick(driver, By.cssSelector("#application > div.fn-slide-menu-container > div > div > div.slide-menu__wrap.fn-menu-wrap > div > ul > li:nth-child(6) > ul > li:nth-child(4) > span.slide-menu__point__name"), "Responsible Gaming");
		
		waitForElement(driver, By.cssSelector("#timeout"));
		new Select(driver.findElement(By.cssSelector("#timeout"))).selectByVisibleText("24 Hours");
		waitForElementSafeClick(driver, By.cssSelector("#layout-column__column-1 > div:nth-child(1) > div.fn-portlet.portlet > div.fn-timeout-container > div > div > form > div.portlet__actions > button"), "save TimeOut");
		waitForElement(driver, By.cssSelector("div.popup-modal__buttons > span.popup-modal__button.fn-timeout-yes"), "confirm ok click").click();
		Thread.sleep(1000);
		waitForElementSafeClick(driver, By.cssSelector(".popup-modal__button"), "successfull ok click");
		Thread.sleep(1000);
		//waitForElementClick(driver, By.xpath("//div[@id='application']/div[2]/div/div/div/span"), "open Menu");
		//Thread.sleep(1000);
		//waitForElementClick(driver, By.cssSelector("#application > div.fn-slide-menu-container > div > div > div.slide-menu__header > div > span > button"), "logout");
		//waitForElementClick(driver, By.cssSelector("span.popup-modal__button.fn-accept.popup-modal__button_type_accept"), "msg logout butten");
		waitForElementClick(driver, By.cssSelector("div.popup-modal__buttons > span"), "msg OK");
		
		Thread.sleep(2000);
		////String userName = "151216042900";
		Thread.sleep(3000);
		mainWebPage.login(userName, "123456");
		String txt2 = waitForElement(driver, By.cssSelector("div.popup-topslide__content > div.form-messages.fn-form-messages > p"), "read log in msg").getText();
		Reporter.log(txt2, true);
		Assert.assertTrue(txt2.contains("Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after"));
	}

	/**
	 * deposit Limit test
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	@Test(timeOut = 600000, retryAnalyzer=TestDeposit.class)//10 min timeout
	public void timeOutMobile() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "Whcc\\DepositMobileEN.xml";
		depositTest(parametersFileName);
	}
	
	/**
	 * find Amount of money
	 * @param bonusMsg
	 * @param sing
	 * @return
	 */
	private int findAmount(String bonusMsg, String sing) {
		int euroIndex = bonusMsg.indexOf(sing);
		String numString = null;
		if (euroIndex > 2) {
			numString = bonusMsg.substring(0, 5);
		}else{
			numString = bonusMsg.substring(euroIndex+1, euroIndex+5);
		}
		float f = Float.valueOf(numString.trim());
		return (int)Math.round(f);
	}
	
	/**
	 * find currency
	 * @param bonusMsg
	 * @param sing
	 * @return
	 */
	private String findCurrency(String bonusMsg, String sing) {
		int euroIndex = bonusMsg.indexOf(sing);
		String currency = bonusMsg.substring(euroIndex, euroIndex+1);
		return 	currency;
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

	public String getBrowserType() {
		return browserType;
	}

	public void setBrowserType(String browserType) {
		this.browserType = browserType;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

}