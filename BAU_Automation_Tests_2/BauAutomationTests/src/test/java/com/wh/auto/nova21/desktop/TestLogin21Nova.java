package com.wh.auto.nova21.desktop;

import java.awt.AWTException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.Assert;
import org.testng.ITestContext;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.nova21.desktop.pages.DepositPage;
import com.wh.auto.nova21.desktop.pages.MainWebPage;
import com.wh.auto.nova21.desktop.pages.RegisterPage;
import com.wh.auto.repository.AppContextRepository;

//@ContextConfiguration(locations = {"classpath:nova21DepositDE.xml"})
public class TestLogin21Nova {
	
	private int maxRetryCount = 5;
	private ITestContext myTestContext = null;
	private WebDriver driver;
	private static boolean debug = false;
	private String browserType = "chrome";
	private String[] parametersFileNames;

	@Autowired
    protected ApplicationContext ac;
	
	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		debug = true;
		TestLogin21Nova testDeposit21Nova = null;
		testDeposit21Nova = new TestLogin21Nova();
		//testDeposit21Nova.beforeSuite(null);
		testDeposit21Nova.loginTest("nova21LoginEN.xml");//chrome,ie,firefox "Affutd.ini"
		System.out.println("Done");
		testDeposit21Nova.afterSuite();
	}
	
	/**
	 * Before all tests starts
	 */
	@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite(@Optional("nova21LoginEN.xml")String parametersFileName) {
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
	@Test(dataProvider = "Browsers", timeOut = 600000, retryAnalyzer=TestLogin21Nova.class, description = "Test The Registration & Deposit")//10 min timeout
	public void loginTest(String parametersFileNames) throws IOException, InterruptedException, AWTException {
		if (Utility.getIsMonitorMac()) {
			maxRetryCount = 5;
		}
		if (!debug) {
			for (int i = 0; i < maxRetryCount; i++) {
				try {
					depositTestDebug(parametersFileNames);
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
			depositTestDebug(parametersFileNames);
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
		parametersFileName = this.getClass().getPackage().getName().replace('.', '/') + "/" + parametersFileName;
		ac = new ClassPathXmlApplicationContext("classpath:"+ parametersFileName);
		TestLogin21Nova testDeposit = ac.getBean(TestLogin21Nova.class);
		browserType = testDeposit.getBrowserType();
		AppContextRepository.setAc(ac);
		MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
		driver = mainWebPage.openUrl(browserType);
		mainWebPage.login();
		Thread.sleep(5000);
		String balanceStr = WebDriverUtils.waitForElement(driver, By.cssSelector(".balance-in-header"), 25).getText();
		System.out.println(balanceStr);
		int balance = findAmount(balanceStr, "£");
		Assert.assertTrue(balance >= 100, "Deposit Fail");
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
		return 	Integer.parseInt(numString);
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

}