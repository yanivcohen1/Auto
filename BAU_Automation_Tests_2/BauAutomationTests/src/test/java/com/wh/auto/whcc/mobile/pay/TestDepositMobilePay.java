package com.wh.auto.whcc.mobile.pay;

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
import com.wh.auto.general.mobile.pages.DepositPage;
import com.wh.auto.general.mobile.pages.MainWebPage;
import com.wh.auto.general.mobile.pages.RegisterPage;
import com.wh.auto.general.mobile.TestDepositMobile;

//@ContextConfiguration(locations = {"classpath:nova21DepositDE.xml"})
public class TestDepositMobilePay extends AbstractWhTestObject{
	
	private int maxRetryCount = 3;
	private static boolean debug = false;
	private static String browserType;
	private static String[] parametersFileNames;
	private static String currency;
	private static Browsers browsers = new Browsers();
	public static WebDriverEventListener eventListener = new MyEventListener();
	static DepositPage testDeposit;

	@Autowired
    protected ApplicationContext ac;
	
	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		String testParams = "DepositMobileEN.xml";
		//depositLimit();
		//WebDriverUtils.KillBrowsers();
		testParams = TestDepositMobilePay.class .getPackage().getName().replace('.', '/') + "/" + testParams;
		ApplicationContext ac = new ClassPathXmlApplicationContext("classpath:"+ testParams);
		MainWebPage testDeposit = ac.getBean(MainWebPage.class);
		String browserType = testDeposit.getBrowserType();
		AppContextRepository.setAc(ac);
		MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
//		driver = mainWebPage.getDriver(browserType);
		DepositPage depositPage = ac.getBean(DepositPage.class);
		
	}
	
	/**
	 * Before all tests starts
	 */
	@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite(@Optional("DepositMobileEN.xml") String parametersFileName) {
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
	 * The main Test
	 * @param browserType
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	private void depositTestDebug(String parametersFileName) throws AWTException, InterruptedException, IOException {
		Utility.terminateChrome();
		parametersFileName = Utility.getParentClass(this.getClass()).replace('.', '/') + "/" + parametersFileName;
		ac = new ClassPathXmlApplicationContext("classpath:"+ parametersFileName);
		AppContextRepository.setAc(ac);
		MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
//		driver = mainWebPage.openUrl();
		//driver.manage().window().maximize();
		//mainWebPage.OpenLanguage();
		RegisterPage registerPage = ac.getBean(RegisterPage.class);
//		registerPage.register();
		//start Deposit
		DepositPage depositPage = ac.getBean(DepositPage.class);
//		depositPage.deposit();
	}

	/**
	 * deposit Limit test
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	@Test(timeOut = 600000)//10 min timeout
	public void depositLimit() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "DepositMobileEN.xml";
		Function <Void, String> f = p -> {
			try {
				depositTestDebug(parametersFileName);
				WebDriverUtils.waitForElement(driver, By.linkText("Deposit limits page")).click();
				Thread.sleep(4000);
				WebDriverUtils.waitForElement(driver, By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet > div.fn-limits-container > div > ul > li > div.info-list__field.fn-accordion-target")).click();
				Thread.sleep(4000);
				new Select(WebDriverUtils.waitForElement(driver,By.id("timePeriod"))).selectByVisibleText("Daily");
				driver.findElement(By.id("depositlimitamount")).clear();
				driver.findElement(By.id("depositlimitamount")).sendKeys("99");
				driver.findElement(By.cssSelector("div.field__control > button.btn")).click();//add limit
				WebDriverUtils.waitForElement(driver, By.xpath("//div[@id='application']/div[2]/div/div/div/button")).click();//deposit
				Thread.sleep(4000);
				WebDriverUtils.waitForElement(driver, By.cssSelector("div.info-list__field.fn-accordion-target")).click();
				driver.findElement(By.name("amount")).clear();
				driver.findElement(By.name("amount")).sendKeys("100");
				driver.findElement(By.name("cvv2")).clear();
				driver.findElement(By.name("cvv2")).sendKeys("111");
				driver.findElement(By.cssSelector("p > button.btn")).click();
				//DPY_Submit
				Thread.sleep(20000);
				String balanceStr = WebDriverUtils.waitForElement(driver, By.cssSelector("#application > div.page.fn-page > div.page-header.fn-header-container > div > div > span.fn-redirect.main-header__balance > div:nth-child(1) > p:nth-child(2) > span"), 25).getText();
				System.out.println(balanceStr);
//				int balance = findAmount(balanceStr, testDeposit.getCurrency()); //"�"
//				String currency = findCurrency(balanceStr, testDeposit.getCurrency());
//				boolean carency = testDeposit.getCurrency().equalsIgnoreCase(currency);
//				boolean balancePass = (balance == 0);
//				if (!carency ) {
//					Reporter.log("curency fail: " + currency, true);
//					throw new IllegalStateException("curency fail: " + currency);
//				}else if(!balancePass){
//					Reporter.log("balance Fail: " + balance, true);
//					throw new IllegalStateException("balance Fail: " + balance);
//				}
				
				driver.findElement(By.name("amount")).clear();
				driver.findElement(By.name("amount")).sendKeys("90");
				driver.findElement(By.cssSelector("p > button.btn")).click();
				//DPY_Submit
				WebDriverUtils.waitForElement(driver, By.cssSelector("span.popup-modal__button:nth-child(1)")).click();
				Thread.sleep(20000);
				try {
					driver.findElement(By.cssSelector("#view445 > div > div.popup-modal__buttons > span.popup-modal__button.fn-accept.popup-modal__button_type_accept")).click();
				} catch (Exception e) {	}
				balanceStr = WebDriverUtils.waitForElement(driver, By.cssSelector("#application > div.page.fn-page > div.page-header.fn-header-container > div > div > span.fn-redirect.main-header__balance > div:nth-child(1) > p:nth-child(2) > span"), 25).getText();
				System.out.println(balanceStr);
//				int balance2 = findAmount(balanceStr, testDeposit.getCurrency()); //"�"
//				String currency2 = findCurrency(balanceStr, testDeposit.getCurrency());
//				boolean carency2 = testDeposit.getCurrency().equalsIgnoreCase(currency2);
//				boolean balancePass2 = (balance2 == 90);
//				if (!carency2 ) {
//					Reporter.log("curency fail: " + currency2, true);
//					throw new IllegalStateException("curency fail: " + currency2);
//				}else if(!balancePass2){
//					Reporter.log("balance Fail: " + balance2, true);
//					throw new IllegalStateException("balance Fail: " + balance2);
//				}
			} catch (Exception e) {throw new IllegalStateException(e);}
			return null;
				};
		runTest(f, 3);
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