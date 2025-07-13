package com.wh.auto.whcc.desktop.pay;

import java.awt.AWTException;
import java.io.IOException;
import java.net.URL;
import java.util.Set;
import java.util.function.Function;

import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.events.WebDriverEventListener;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.testng.Assert;
import org.testng.ITestContext;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.wh.auto.TestObjects.AbstractWhTestObject;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.MyEventListener;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.repository.AppContextRepository;
import com.wh.auto.whcc.desktop.pages.DepositPage;
import com.wh.auto.whcc.desktop.pages.MainWebPage;
import com.wh.auto.whcc.desktop.pages.RegisterPage;
import com.wh.auto.whcc.desktop.TestDeposit;

//@ContextConfiguration(locations = {"classpath:nova21DepositDE.xml"})
public class DepositLimit extends AbstractWhTestObject {

	private static int maxRetryCount = 3;
	private static boolean debug = false;
	private static String browserType;
	private static String[] parametersFileNames;
	private static Browsers browsers = new Browsers();
	public static WebDriverEventListener eventListener = new MyEventListener();
	private static String userName = "151123040907";
	@FindBy(css = "#RC_Submit > tbody > tr > td.main > span")
	private WebElement submit;

	@Autowired
	protected ApplicationContext ac;

	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		debug = true;
		maxRetryCount = 1;
		DepositLimit testRegistration = new DepositLimit();
		String testParams = "Whcc\\DepositEN.xml";
		parametersFileNames = new String[]{testParams};
		testRegistration.beforeSuite(testParams);//classpath*:**/
		ApplicationContext ac = new ClassPathXmlApplicationContext("classpath:"+ testParams);
		//testDeposit = ac.getBean(Timeout.class);
		//String UserAgent = "Mozilla/5.0 (Linux; Android 5.0; en-gb; SAMSUNG SM-G900F Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko)";
		TestDeposit testDeposit = ac.getBean(TestDeposit.class);
		MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
		String browserType = testDeposit.getBrowserType();
		if ("firefox".contentEquals(browserType)) {
			driver = browsers.openFirefoxRemote(null);
		}
		//waitForElement(driver, By.id("cashier-frame"));
		//driver.switchTo().frame(driver.findElement(By.id("cashier-frame")));
		testRegistration.depositLimit();
	}

	/**
	 * Before all tests starts
	 */
	@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite(@Optional("DepositEN.xml") String parametersFileName) {
		if (!Utility.developmentMac) {
			Utility.terminateChrome();
		}
		this.parametersFileNames = parametersFileName.split(",");
	}

	/**
	 * initiaze for running test and browser
	 * 
	 * @return
	 */
	@DataProvider(name = "Browsers")
	public Object[][] createDataProvider() {
		System.out.println("Start test: " + myTestContext.getName());
		Object[][] obj = new Object[parametersFileNames.length][1];
		for (int i = 0; i < obj.length; i++)
			obj[i] = new Object[] { parametersFileNames[i] };// (Object[])TestBrowser[i];
		return obj;
	}

	/**
	 * The main Test
	 * 
	 * @param browserType
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	private void depositTestDebug(String parametersFileName) throws AWTException, InterruptedException, IOException {
		parametersFileName = Utility.getParentClass(this.getClass()).replace('.', '/') + "/" + parametersFileName;
		ac = new ClassPathXmlApplicationContext("classpath:" + parametersFileName);
		TestDeposit testDeposit = ac.getBean(TestDeposit.class);
		browserType = testDeposit.getBrowserType();
		AppContextRepository.setAc(ac);
		MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
		driver = mainWebPage.openUrl(browserType);
		// mainWebPage.OpenLanguage();
		RegisterPage registerPage = ac.getBean(RegisterPage.class);
		driver.navigate().refresh();
		setUserName(registerPage.register());
		// start Deposit
		DepositPage depositPage = ac.getBean(DepositPage.class);
		depositPage.deposit("100");
	}

	/**
	 * test regulation Msg
	 * Senario:
	    Deposit 100
		Limit 200
		Deposit 250 read msg
		Deposit 50
		Limit 100
		Deposit 100 read msg
		Limit 200 read msg
		Deposit 100 read msg

	 * 
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	@Test(timeOut = 600000, retryAnalyzer = TestDeposit.class) // 10 min timeout
	public void depositLimit() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "DepositEN.xml";
		By deposit = By.cssSelector("#column-3 > div.header-element.wrap-customLink.boundingBox.bBox-first > a");
		Function<Void, String> f = p -> {
			try {
				String parametersFile = Utility.getParentClass(this.getClass()).replace('.', '/') + "/" + parametersFileName;
				ac = new ClassPathXmlApplicationContext("classpath:" + parametersFile);
				TestDeposit testDeposit = ac.getBean(TestDeposit.class);
				browserType = testDeposit.getBrowserType();
				AppContextRepository.setAc(ac);
				MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
				driver = mainWebPage.openUrl(browserType);
		/*		// mainWebPage.OpenLanguage();
				RegisterPage registerPage = ac.getBean(RegisterPage.class);
				driver.navigate().refresh();
				setUserName(registerPage.register());
				DepositPage depositPage = ac.getBean(DepositPage.class);
				depositPage.deposit("100");*/
				
				new WebDriverWait(driver, 35).until(ExpectedConditions.visibilityOf(
				driver.findElement(By.cssSelector("#depositConfirmed"))));//OK button
				waitForElement(driver, By.cssSelector("#depositConfirmed"), "I understend").click();
				waitForElement(driver, By.cssSelector("#UM_OKButtonText"), "Proceed").click();
				driver.switchTo().defaultContent();
				try {
					waitForElement(driver, By.cssSelector("button.ok"), "deposit approve").click();
				} catch (Exception e) {	}
				waitForElement(driver, By.cssSelector(".popupClose"), "successfully register").click();
				try {
					waitForElement(driver, By.cssSelector("#playtechModalMessages > div.content.portlet-content-container > div > div.message-buttons > button.ok")).click();
					waitForElement(driver, By.cssSelector("#playtechModalMessages > div.content.portlet-content-container > div > div.message-buttons > button")).click();
				} catch (Exception e) {	}
				driver.navigate().refresh();
				driver.navigate().refresh();
				Thread.sleep(5000);
				waitForElement(driver, deposit, 25).click();//deposit
				waitForElement(driver, By.id("cashier-frame"));
				driver.switchTo().frame(driver.findElement(By.id("cashier-frame")));
				setDepositLimit(200);
				String msg = "We are sorry, but your daily limit has been exceeded.";		  
				setDepositMsg(250, msg);
				setDepositMsg(50, "");
				setDepositLimit(100);
				setDepositMsg(101, msg);
				setDepositLimit(200);
				String mainMsg = "Your new deposit limits have been set.";
				readMessage(mainMsg);
				setDepositMsg(101, msg);
				
			} catch (Exception e) {
				throw new IllegalStateException(e);
			}
			return null;
		};
		runTest(f, 3);
	}

	private void readMessage(String msg) {
		driver.switchTo().defaultContent();
		Reporter.log("read main msg", true);
		WebElement dynamicElement = (new WebDriverWait(driver, 25)).until(
				ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".message-area")));//.message-area
		String txt = dynamicElement.getText();
		Assert.assertTrue(txt.contains(msg), "DisplayMsg not correct: "+ txt);
		waitForElement(driver, By.cssSelector("button.ok"), "ok click").click();
		driver.switchTo().frame(waitForElement(driver, By.id("cashier-frame")));
	}

	private void setDepositMsg(int amount, String msg) throws InterruptedException {
		Thread.sleep(2000);
		waitForElement(driver, By.cssSelector("#PB_Deposit"), "deposit tab").click();
		
		waitForElement(driver, By.id("D_Amount")).clear();
		driver.findElement(By.id("D_Amount")).sendKeys(Integer.toString(amount));
		driver.findElement(By.id("DCC_CVV2")).clear();
		driver.findElement(By.id("DCC_CVV2")).sendKeys("111");
		driver.findElement(By.id("DCC_Submit")).click();
		
		WebElement dynamicElement = (new WebDriverWait(driver, 25)).until(
				ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#UM_Text")));//.message-area
		Thread.sleep(2000);
		String txt = dynamicElement.getText();
		if (!msg.isEmpty()) {
			if (txt.contains(msg)){
				
			}else{
				throw new IllegalStateException();
			}
			try {
				waitForElement(driver, By.cssSelector("#UM_OKButtonText"), 20, "ok click").click();
			} catch (Exception e) {	}
		}else{
			Thread.sleep(5000);
			driver.switchTo().defaultContent();
			waitForElement(driver, By.cssSelector("button.ok"), "msg aproved").click();
			waitForElement(driver, By.cssSelector("button.ok"), "msg aproved").click();
			driver.switchTo().frame(driver.findElement(By.id("cashier-frame")));
		}
	}

	private void setDepositLimit(int limit) throws InterruptedException {
		Thread.sleep(5000);
		waitForElement(driver, By.cssSelector("#PB_CasinoMyAccount > tbody > tr > td.main > span"),
				"Myinfo").click();//My info
		Thread.sleep(2000);
		
		waitForElement(driver, By.id("PB_ResponsibleGamingText"), "ResponsibleGaming").click();//ResponsibleGaming
		driver.findElement(By.id("PB_ResponsibleGamingText")).click();
		waitForElement(driver, By.cssSelector("#RG_DepositLimitChange > tbody > tr > td.main > span"), "change").click();
		new Select(driver.findElement(By.id("RG_DepositLimitTimePeriod"))).selectByVisibleText("Daily");
		driver.findElement(By.id("RG_DepositLimitAmount")).clear();
		driver.findElement(By.id("RG_DepositLimitAmount")).sendKeys(Integer.toString(limit));
		waitForElement(driver, By.cssSelector("#RG_DepositLimitSubmit"), "Save Deposit Limit").click();
	}

	/**
	 * getting the test context
	 * 
	 * @param myTestContext1
	 */
	@BeforeTest
	public void TEST_BEFOFRE(ITestContext myTestContext1) {
		myTestContext = myTestContext1;
	}

	/**
	 * After each test close the browser
	 */
	@AfterTest
	public void after() {
		driver.quit();
	}

	/**
	 * After all tests close the browser
	 */
	@AfterClass
	public void afterSuite() {
		if (!debug) {
			driver.quit();
		}
	}

	public String getBrowserType() {
		return browserType;
	}

	public void setBrowserType(String browserType) {
		this.browserType = browserType;
	}

	public static String getUserName() {
		return userName;
	}

	public static void setUserName(String userName) {
		DepositLimit.userName = userName;
	}

}
