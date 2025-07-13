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
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.repository.AppContextRepository;
import com.wh.auto.whcc.desktop.pages.DepositPage;
import com.wh.auto.whcc.desktop.pages.MainWebPage;
import com.wh.auto.whcc.desktop.pages.RegisterPage;
import com.wh.auto.whcc.desktop.TestDeposit;

//@ContextConfiguration(locations = {"classpath:nova21DepositDE.xml"})
public class TestDepositPay extends AbstractWhTestObject{
	
	private static int maxRetryCount = 3;
	private static boolean debug = false;
	private static String browserType;
	private static String[] parametersFileNames;
	private static Browsers browsers = new Browsers();
	public static WebDriverEventListener eventListener = new MyEventListener();

	@Autowired
    protected ApplicationContext ac;
	
	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		debug = true;
		maxRetryCount = 1;
		TestDeposit testRegistration = new TestDeposit();
		String testParams = "DepositEN.xml";
		parametersFileNames = new String[]{testParams};
		ApplicationContext ac = new ClassPathXmlApplicationContext("classpath:"+ testParams);
		//testDeposit = ac.getBean(Timeout.class);
		//String UserAgent = "Mozilla/5.0 (Linux; Android 5.0; en-gb; SAMSUNG SM-G900F Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko)";
		TestDeposit testDeposit = ac.getBean(TestDeposit.class);
		String browserType = testDeposit.getBrowserType();
		if ("firefox".contentEquals(browserType)) {
			driver = browsers.openFirefoxRemote(null);
		}
		testRegistration.beforeSuite(testParams);//classpath*:**/
		//depositCancel();//chrome,ie,firefox "Affutd.ini"
		
	}
	
	/**
	 * Before all tests starts
	 */
	@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite(@Optional("DepositEN.xml") String parametersFileName) {
		Utility.terminateChrome();
		if (parametersFileName == null || (parametersFileName.contains("PT_Advertiser.ini"))) {
			this.parametersFileNames = new String[]{"DepositEN.xml"};
		}else{
			this.parametersFileNames = parametersFileName.split(",");
		}
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
		String parametersFile = Utility.getParentClass(this.getClass()).replace('.', '/') + "/" + parametersFileName;
		ac = new ClassPathXmlApplicationContext("classpath:"+ parametersFile);
		TestDeposit testDeposit = ac.getBean(TestDeposit.class);
		browserType = testDeposit.getBrowserType();
		AppContextRepository.setAc(ac);
		MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
		driver = mainWebPage.openUrl(browserType);
		//mainWebPage.OpenLanguage();
		RegisterPage registerPage = ac.getBean(RegisterPage.class);
		driver.navigate().refresh();
		registerPage.register();
		//start Deposit
		DepositPage depositPage = ac.getBean(DepositPage.class);
		depositPage.deposit("100");
	}
	
	/**
	 * test regulation Msg
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	@Test(timeOut = 600000, retryAnalyzer=TestDeposit.class)//10 min timeout
	public void depositMsg() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "DepositEN.xml";
		Function <Void, String> f = p -> {
			try {
					depositTestDebug(parametersFileName);
					String innerText = driver.findElement(By.cssSelector("#UM_Text > table > tbody > tr")).getText();
					String msg = "I understand that my funds will be given a 'basic' level of protection by being held in a specifically designated bank account, in accordance with our regulatory obligations. Click here for further information or tick the box and Proceed with your deposit.";
					Assert.assertTrue(innerText.contentEquals(msg), "DisplayMsg not correct");
				} 
			catch (Exception e) {throw new IllegalStateException(e);}
			return null;
		};
		runTest(f, 3);
	}
	
	/**
	 * test limit Msg
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	@Test(timeOut = 600000, retryAnalyzer=TestDeposit.class)//10 min timeout
	public void limitMsg() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "DepositEN.xml";
		Function <Void, String> f = p -> {
			try {
					depositTestDebug(parametersFileName);
					String innerText =driver.findElement(By.cssSelector("#RC_TextSubmitRow > td:nth-child(2)")).getText();
					String msg = "You can set your deposit limit on the Responsible Gaming page in My Info tab.";
					Assert.assertTrue(innerText.contentEquals(msg), "DisplayMsg not correct");
				} 
			catch (Exception e) {throw new IllegalStateException(e);}
			return null;
		};
		runTest(f, 3);
	}
	
	/**
	 * clickHere Open Window terms & conditions
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	@Test(timeOut = 600000, retryAnalyzer=TestDeposit.class)//10 min timeout
	public void clickHereOpenWin() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "DepositEN.xml";
		Function <Void, String> f = p -> {
			try {
				depositTestDebug(parametersFileName);
				driver.findElement(By.cssSelector("#UM_Text > table > tbody > tr > td:nth-child(2) > span")).click();
				Thread.sleep(5000);
				boolean isPass = false;
				String winHdl = driver.getWindowHandle();
				Set<String> windowHandles = driver.getWindowHandles();
				for (String windowHandle : windowHandles) {
		            if (driver.switchTo().window(windowHandle).getCurrentUrl().contains("/terms"))
		            {
		            	driver.close();
		            	isPass = true;
		                break;
		            }
		        }
				driver.switchTo().window(winHdl);
				Assert.assertTrue(isPass, "link not open window");
				} 
			catch (Exception e) {throw new IllegalStateException(e);}
			return null;
		};
		runTest(f, 3);
	}
	
	/**
	 * regulationLink Open My Info Tab
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	@Test(timeOut = 600000, retryAnalyzer=TestDeposit.class)//10 min timeout
	public void regulationLinkOpen() throws IOException, InterruptedException, AWTException {
		String parametersFile = "DepositEN.xml";
		String parametersFileName = Utility.getParentClass(this.getClass()).replace('.', '/') + "/" + parametersFile;
		Function <Void, String> f = p -> {
			try {
				ac = new ClassPathXmlApplicationContext("classpath:"+ parametersFileName);
				TestDeposit testDeposit = ac.getBean(TestDeposit.class);
				browserType = testDeposit.getBrowserType();
				AppContextRepository.setAc(ac);
				MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
				driver = mainWebPage.openUrl(browserType);
				//mainWebPage.OpenLanguage();
				RegisterPage registerPage = ac.getBean(RegisterPage.class);
				driver.navigate().refresh();
				registerPage.register();
				waitForElement(driver, DepositPage.deposit, 25).click();//deposit
				Thread.sleep(10000);
				driver.switchTo().frame(driver.findElement(By.id("cashier-frame")));
				waitForElement(driver, By.linkText("Responsible Gaming page"), 25).click();//deposit
				//driver.findElement(By.linkText("Responsible Gaming page")).click();
				WebElement dynamicElement = (new WebDriverWait(driver, 25)).until(
						ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#PB_MyAccountBox")));//.message-area
				} 
			catch (Exception e) {throw new IllegalStateException(e);}
			return null;
		};
		runTest(f, 3);
	}
	
	/**
	 * deposit Limit test
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	@Test(timeOut = 600000, retryAnalyzer=TestDeposit.class)//10 min timeout
	public void depositLimit() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "DepositEN.xml";
		Function <Void, String> f = p -> {
			try {
				depositTestDebug(parametersFileName);
				driver.findElement(By.cssSelector("#UM_CancelButton")).click();
				Thread.sleep(5000);
				driver.findElement(By.cssSelector("#UM_OKButtonText")).click();
				Thread.sleep(5000);
				driver.findElement(By.cssSelector("#PB_CasinoMyAccount")).click();//my info tab
				Thread.sleep(5000);
				driver.findElement(By.id("PB_ResponsibleGamingText")).click();//responsible gaming
				Thread.sleep(5000);
				driver.findElement(By.cssSelector("#RG_DepositLimitChange > tbody > tr > td.main > span")).click();//change limit
				new Select(driver.findElement(By.id("RG_DepositLimitTimePeriod"))).selectByVisibleText("Daily");//Daily
				driver.findElement(By.id("RG_DepositLimitAmount")).clear();
				driver.findElement(By.id("RG_DepositLimitAmount")).sendKeys("200");//set 200 limit
				driver.findElement(By.id("RG_DepositLimitSubmit")).click();//change Submit 
				Thread.sleep(5000);
				driver.findElement(By.cssSelector("td.main > span")).click();//deposit tab
				Thread.sleep(5000);
				driver.findElement(By.id("D_Amount")).sendKeys("205");//test 205 deposit
				driver.findElement(By.id("DPY_Submit")).click();//deposit click 
				//DPY_Submit
				Thread.sleep(5000);
				WebElement dynamicElement = (new WebDriverWait(driver, 25)).until(
						ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#UM_Text")));//.message-area
				String txt = dynamicElement.getText();
				String msg = "We are sorry, but your daily limit has been exceeded. You can review your deposits limits on the Responsible Gaming page in My Info tab.";
				Assert.assertTrue(txt.contentEquals(msg), "DisplayMsg not correct");
				} 
			catch (Exception e) {throw new IllegalStateException(e);}
			return null;
		};
		runTest(f, 3);
	}
	
	/**
	 * Test cancel butten is cancel deposit
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	@Test(timeOut = 600000, retryAnalyzer=TestDeposit.class)//10 min timeout
	public void depositCancel() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "DepositEN.xml";
		Function <Void, String> f = p -> {
			try {
					depositTestDebug(parametersFileName);
					driver.findElement(By.cssSelector("#UM_CancelButton")).click();
					Thread.sleep(5000);
					driver.switchTo().defaultContent();
					String balanceStr = WebDriverUtils.waitForElement(driver, By.cssSelector(".balance-in-header"), 25).getText();
					System.out.println(balanceStr);
					int balance = findAmount(balanceStr, "€");
					Assert.assertTrue(balance == 0, "cancel button didn't cancel deposit");
				} 
			catch (Exception e) {throw new IllegalStateException(e);}
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
		String numString = bonusMsg.substring(euroIndex+1, euroIndex+4);
		int numInt = (int)Float.parseFloat(numString);
		return 	numInt;
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
	
}