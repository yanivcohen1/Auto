package com.wh.auto.whcc;

import java.awt.AWTException;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Properties;
import java.util.function.Function;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.internal.Locatable;
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
import com.wh.auto.common.Reporter.Color;
import com.wh.auto.common.Reporter.Style;
import com.wh.auto.repository.AppContextRepository;
import com.wh.auto.whcc.pages.mobile.DepositPage;
import com.wh.auto.whcc.pages.mobile.MainWebPage;
import com.wh.auto.whcc.pages.mobile.RegisterPage;

//@ContextConfiguration(locations = {"classpath:nova21DepositDE.xml"})
public class DepositLimitMobile extends AbstractWhTestObject{
	
	private static int maxRetryCount = 3;
	private static String browserType;
	private static String[] parametersFileNames;
	private static String currency;
	private static Browsers browsers = new Browsers();
	public static WebDriverEventListener eventListener = new MyEventListener();

	@Autowired
    protected ApplicationContext ac;
	
	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		maxRetryCount = 1;
		DepositLimitMobile testRegistration = new DepositLimitMobile();
		String testParams = "Whcc\\DepositMobileEN.xml";
		parametersFileNames = new String[]{testParams};
		testRegistration.beforeSuite(testParams);//classpath*:**/
		ApplicationContext ac = new ClassPathXmlApplicationContext("classpath:"+ testParams);
		String UserAgent = "Mozilla/5.0 (Linux; Android 5.0; en-gb; SAMSUNG SM-G900F Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko)";
		TestDepositMobile testDeposit = ac.getBean(TestDepositMobile.class);
		MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
		String browserType = testDeposit.getBrowserType();
		if (browserType.contains("firefox")) {
			driver = browsers.openFirefoxRemote(UserAgent);
		}
		//String txt =waitForElement(driver, By.cssSelector(".message")).getText();
		testRegistration.depositLimit();
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
	 * deposit Limit test
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	@Test(timeOut = 600000, retryAnalyzer=TestDeposit.class)//10 min timeout
	public void depositLimit() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "Whcc\\DepositMobileEN.xml";
		Function <Void, String> f = p -> {
			try {
				TestDepositMobile testDeposit = null;
				int limit = 200;
				Utility.terminateChrome();
				String msg = "We are sorry, but your daily limit has been exceeded. You can review your deposits limits on the ";
				ac = new ClassPathXmlApplicationContext("classpath:"+ parametersFileName);
				testDeposit = ac.getBean(TestDepositMobile.class);
				browserType = testDeposit.getBrowserType();
				AppContextRepository.setAc(ac);
				MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
				driver = mainWebPage.openUrl(browserType);
				//driver.manage().window().maximize();
				//mainWebPage.OpenLanguage();
				RegisterPage registerPage = ac.getBean(RegisterPage.class);
				registerPage.register();
				//start Deposit
				DepositPage depositPage = ac.getBean(DepositPage.class);
				depositPage.deposit();
				setDepositLimit(limit, true);
				compareDepositMsg(250, msg(limit), msg);
				// first Deposit
				depositPage.depositNext(50);
				Thread.sleep(3000);
				waitForElementSafeClick(driver, By.cssSelector("button.btn:nth-child(4)"), "click deposit");
				setDepositLimit(100);
				compareDepositMsg(100, msg(50), msg);
				setDepositLimit(200);
				//9. Receive a pop up message: Your new deposit limits have been set. The limits will become effective starting from XXXX.
				String txt = waitForElement(driver, By.cssSelector(".fn-popup-loader"), "read msg").getText();
				com.wh.auto.common.Reporter.log(txt, true,Style.REGULAR, Color.BLACK);
				Assert.assertTrue(txt.contains("Your new deposit limits have been set. The limits will become effective starting from"));
				waitForElement(driver, By.cssSelector(".popup-modal__button"), "Ok click").click();
				compareDepositMsg(100, msg(50), msg);
				
			} catch (Exception e) {
				e.printStackTrace();
				throw new IllegalStateException(e);}
			return null;
		};
		runTest(f, maxRetryCount);
	}

	private String msg(int limit) {
		String msg = "Amount should be between 10 and "+limit+" inclusively";
		return msg;
	}

	private void compareDepositMsg(int amount, String lowerMsg, String uperMsg) throws InterruptedException {
		Thread.sleep(2000);
		try {
			waitForElement(driver, By.cssSelector("div.info-list__field.fn-accordion-target"), "open Visa").click();
		} catch (Exception e1) {}
		//driver.findElement(By.name("amount")).clear();
		waitForElement(driver, By.name("amount"), "amount: " + amount).sendKeys(Integer.toString(amount));
		driver.findElement(By.name("cvv2")).clear();
		driver.findElement(By.name("cvv2")).sendKeys("111");
		waitForElement(driver, By.cssSelector("p > button.btn"), "Deposit Click").click();
		if (!uperMsg.isEmpty() || !lowerMsg.isEmpty()) {
			String txt;
			String msg;
			try {
				txt =waitForElement(driver, By.cssSelector(".error-tooltip"), "read bottom msg").getText();
				msg = lowerMsg;
			} catch (Exception e) {
				txt = waitForElement(driver, By.cssSelector(".message"), "read upper msg").getText();
				msg = uperMsg;
			}
			Assert.assertTrue(txt.contains(msg), "DisplayMsg not correct: "+ txt);
		}else{
			//driver.switchTo().defaultContent();
			waitForElement(driver, By.cssSelector("button.ok"), "msg aproved").click();
			driver.switchTo().frame(driver.findElement(By.id("cashier-frame")));
		}
		//driver.manage().window().maximize();
		//Thread.sleep(1000);
		//waitForElementSafeClick(driver, By.cssSelector("div.info-list__field.fn-accordion-target"), "close visa tag");
	}

	private void setDepositLimit(int limit) throws InterruptedException {
		setDepositLimit(limit, false);
	}
	
	private void setDepositLimit(int limit ,boolean firstSet) throws InterruptedException {
		Thread.sleep(2000);
		new Actions(driver).sendKeys(Keys.PAGE_UP).perform();
		waitForElement(driver, By.linkText("Deposit limits page")).click();
		Thread.sleep(4000);
		//waitForElement(driver, By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet > div.fn-limits-container > div > ul > li > div.info-list__field.fn-accordion-target")).click();
		//String order = ((firstSet) ? "0" : "1");
		if (firstSet) {
			waitForElement(driver, By.cssSelector(".info-list__field"), "set limit").click();
		}else{
			waitForElement(driver, By.cssSelector("li.info-list__row:nth-child(2) > div:nth-child(1)"), "set limit").click();
		}
		Thread.sleep(4000);
		new Select(waitForElement(driver,By.id("timePeriod"))).selectByVisibleText("Daily");
		waitForElement(driver, By.id("depositlimitamount"), "set limit:" + limit).sendKeys(Integer.toString(limit));
		waitForElement(driver, By.cssSelector("div.field__control > button.btn"), "Add limit").click();
		waitForElement(driver, By.xpath("//div[@id='application']/div[2]/div/div/div/button"), "deposit").click();
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