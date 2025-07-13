package com.wh.auto.whcc;

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
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.events.WebDriverEventListener;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.remote.RemoteWebDriver;
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
import com.wh.auto.whcc.pages.DepositPage;
import com.wh.auto.whcc.pages.MainWebPage;
import com.wh.auto.whcc.pages.RegisterPage;

//@ContextConfiguration(locations = {"classpath:nova21DepositDE.xml"})
public class Timeout extends AbstractWhTestObject {

	private int maxRetryCount = 3;
	private static boolean debug = false;
	private static String browserType;
	private static String[] parametersFileNames;
	private static Browsers browsers = new Browsers();
	public static WebDriverEventListener eventListener = new MyEventListener();
	private static String userName = "151123040907";
	static Timeout testDeposit;

	@Autowired
	protected ApplicationContext ac;

	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		debug = true;
		Timeout testRegistration = new Timeout();
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
		testRegistration.timeOut();
	}

	/**
	 * Before all tests starts
	 */
	@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite(@Optional("DepositEN.xml") String parametersFileName) {
		Utility.terminateChrome();
		if (parametersFileName == null || (parametersFileName.contains("PT_Advertiser.ini"))) {
			this.parametersFileNames = new String[] { "DepositEN.xml" };
		} else {
			this.parametersFileNames = parametersFileName.split(",");
		}
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
		ac = new ClassPathXmlApplicationContext("classpath:Whcc\\" + parametersFileName);
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
		depositPage.deposit();
	}

	/**
	 * test regulation Msg
	 * 
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	@Test(timeOut = 600000, retryAnalyzer = TestDeposit.class) // 10 min timeout
	public void timeOut() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "DepositEN.xml";
		By deposit = By.cssSelector("#column-3 > div.header-element.wrap-customLink.boundingBox.bBox-first > a");
		Function<Void, String> f = p -> {
			try {
				ac = new ClassPathXmlApplicationContext("classpath:Whcc\\" + parametersFileName);
				TestDeposit testDeposit = ac.getBean(TestDeposit.class);
				browserType = testDeposit.getBrowserType();
				AppContextRepository.setAc(ac);
				MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
				driver = mainWebPage.openUrl(browserType);
				// mainWebPage.OpenLanguage();
				RegisterPage registerPage = ac.getBean(RegisterPage.class);
				driver.navigate().refresh();
				setUserName(registerPage.register());
				waitForElement(driver, deposit, 25, "Deposit").click();// deposit
				waitForElement(driver, By.id("cashier-frame"));
				driver.switchTo().frame(driver.findElement(By.id("cashier-frame")));
				Thread.sleep(5000);
				waitForElementSafeClick(driver, By.cssSelector("#PB_CasinoMyAccount > tbody > tr > td.main > span"), "Myinfo");// My info
				Thread.sleep(3000);
				waitForElementSafeClick(driver, By.id("PB_ResponsibleGamingText"), "ResponsibleGaming");
				waitForElement(driver, By.cssSelector("#RG_TimeoutPeriod"));
				new Select(driver.findElement(By.cssSelector("#RG_TimeoutPeriod"))).selectByVisibleText("24 hours");
				waitForElementSafeClick(driver, By.cssSelector("#RG_TimeOutOptionsSubmit > tbody > tr > td.main"), "save TimeOut");
				waitForElement(driver, By.id("UM_OKButtonText")).click();
				Thread.sleep(5000);
				waitForElement(driver, By.name("username"), 25, "login").click();
				driver.findElement(By.name("username")).clear();
				driver.findElement(By.name("username")).sendKeys(getUserName());
				driver.findElement(By.name("password")).click();
				driver.findElement(By.name("password")).clear();
				driver.findElement(By.name("password")).sendKeys("123456a");
				driver.findElement(By.cssSelector("button[type=\"submit\"]")).click();
				Thread.sleep(4000);
				String txt = waitForElement(driver, By.cssSelector(".message-area")).getText();
				Reporter.log(txt, true);
				Assert.assertTrue(txt.contains(
						"Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after"));
			} catch (Exception e) {
				throw new IllegalStateException(e);
			}
			return null;
		};
		runTest(f, 3);
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
		Timeout.userName = userName;
	}

}