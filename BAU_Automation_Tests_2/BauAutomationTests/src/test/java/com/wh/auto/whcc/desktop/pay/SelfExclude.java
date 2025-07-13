package com.wh.auto.whcc.desktop.pay;

import java.awt.AWTException;
import java.io.IOException;
import java.util.Set;
import java.util.function.Function;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
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
public class SelfExclude extends AbstractWhTestObject {

	private static int maxRetryCount = 3;
	private static boolean debug = false;
	private static String browserType;
	private static String[] parametersFileNames;
	private static Browsers browsers = new Browsers();
	public static WebDriverEventListener eventListener = new MyEventListener();
	private static String userName = "151123040907";

	@Autowired
	protected ApplicationContext ac;

	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		maxRetryCount = 1;
		debug = true;
		SelfExclude testRegistration = new SelfExclude();
		String testParams = "DepositEN.xml";
		parametersFileNames = new String[] { testParams };
		testRegistration.beforeSuite(testParams);// classpath*:**/
		driver = browsers.openFirefoxRemote(null);
		// testRegistration.depositTestDebug(testParams);
		// driver.switchTo().frame(driver.findElement(By.id("cashier-frame")));
		testRegistration.selfExclude();// chrome,ie,firefox "Affutd.ini"
	}

	/**
	 * Before all tests starts
	 */
	@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite(@Optional("DepositEN.xml") String parametersFileName) {
		Utility.terminateChrome();
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
	private void depositTestDebug(String parametersFile) throws AWTException, InterruptedException, IOException {
		String parametersFileName = Utility.getParentClass(this.getClass()).replace('.', '/') + "/" + parametersFile;
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
	 * 
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	@Test(timeOut = 600000, retryAnalyzer = TestDeposit.class) // 10 min timeout
	public void selfExclude() throws IOException, InterruptedException, AWTException {
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
				// mainWebPage.OpenLanguage();
				RegisterPage registerPage = ac.getBean(RegisterPage.class);
				driver.navigate().refresh();
				setUserName(registerPage.register());
				waitForElement(driver, deposit, 25, "Deposit").click();// deposit
				waitForElement(driver, By.id("cashier-frame"));
				driver.switchTo().frame(driver.findElement(By.id("cashier-frame")));
				Thread.sleep(3000);
				waitForElementSafeClick(driver, By.cssSelector("#PB_CasinoMyAccount > tbody > tr > td.main > span"), "Myinfo");// My info
				Thread.sleep(3000);
				waitForElement(driver, By.id("PB_ResponsibleGamingText"), "ResponsibleGaming").click();// ResponsibleGaming
				waitForElement(driver, By.cssSelector("#RG_SelfExcludeChange > tbody > tr > td.main > span"), "add")
						.click();
				new Select(driver.findElement(By.id("RG_SelfExcludeProducts"))).selectByVisibleText("Casino");
				new Select(driver.findElement(By.id("RG_SelfExclude_TimePeriod"))).selectByVisibleText("6 months");
				waitForElement(driver, By.cssSelector("#RG_SelfExcludeSubmit > tbody > tr > td.main > span"),
						"subscribe").click();
				waitForElement(driver, By.id("UM_OKButtonText")).click();
				Thread.sleep(2000);
				waitForElementSafeClick(driver, By.cssSelector("#UM_OKButton > tbody > tr > td.main"), "ok click");
				driver.switchTo().defaultContent();
				waitForElementSafeClick(driver, By.cssSelector(".popupClose"), "close popup");// .popupClose
				waitForElement(driver, By.cssSelector("a.logout > span"), "loguot").click();
				waitForElement(driver, By.name("username"), 25).click();
				driver.findElement(By.name("username")).clear();
				driver.findElement(By.name("username")).sendKeys(getUserName());
				driver.findElement(By.name("password")).click();
				driver.findElement(By.name("password")).clear();
				driver.findElement(By.name("password")).sendKeys("123456a");
				driver.findElement(By.cssSelector("button[type=\"submit\"]")).click();
				Thread.sleep(4000);
				waitForElementSafeClick(driver, By.cssSelector(".popupClose"), "closepoup");// .popupClose
				waitForElementSafeClick(driver, By.cssSelector("a.deposit"), "deposit");// deposit
				waitForElement(driver, By.id("cashier-frame"));
				Thread.sleep(2000);
				driver.switchTo().frame(driver.findElement(By.id("cashier-frame")));
				waitForElement(driver, By.id("D_Amount")).clear();
				driver.findElement(By.id("D_Amount")).sendKeys("100");
				waitForElementSafeClick(driver, By.cssSelector("#DPY_Submit > tbody > tr > td.main > span"), "submit");
				Thread.sleep(5000);
				String txt = waitForElement(driver, By.cssSelector("#UM_Text")).getText();
				Reporter.log(txt, true);
				Assert.assertTrue(txt.contains(
						"Sorry, you cannot deposit because you have asked to be excluded from playing. You can deposit again"));
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
		SelfExclude.userName = userName;
	}

}