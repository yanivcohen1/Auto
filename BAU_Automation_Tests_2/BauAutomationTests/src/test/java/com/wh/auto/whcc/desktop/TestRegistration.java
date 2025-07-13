package com.wh.auto.whcc.desktop;

import java.awt.AWTException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Properties;
import java.util.function.Function;

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
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.repository.AppContextRepository;
import com.wh.auto.whcc.desktop.pages.DepositPage;
import com.wh.auto.whcc.desktop.pages.MainWebPage;
import com.wh.auto.whcc.desktop.pages.RegisterPage;

//@ContextConfiguration(locations = {"classpath:nova21DepositDE.xml"})
public class TestRegistration {
	
	private int maxRetryCount = 3;
	private ITestContext myTestContext = null;
	private static WebDriver driver = null;
	private static boolean debug = false;
	private static String browserType;
	private String[] parametersFileNames;

	@Autowired
    protected ApplicationContext ac;
	
	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		debug = true;
		TestRegistration testRegistration = null;
		testRegistration = new TestRegistration();
		//testRegistration.beforeSuite("");//classpath*:**/
		testRegistration.WHCC_HP_rbplus1();//chrome,ie,firefox "Affutd.ini" "DepositEN.xml"
		System.out.println("Test Finish");
	}
	
	/**
	 * Before all tests starts
	 */
	//@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite() { //String parametersFileName
		String parametersFileName = null;
		if (parametersFileName == null || (parametersFileName.contains("PT_Advertiser.ini"))) {
			parametersFileName = "nova21DepositEn.xml";
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

	@Test(timeOut = 600000, retryAnalyzer=TestDeposit.class)//10 min timeout
	public void WHCC_HP_rbplus2Othersideinc() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "DepositEN.xml";
		String url = "http://ads.williamhillcasino.com/redirect.aspx?pid=17043680&lpid=13510080&bid=14184097&var9= ";
		Function <String[], String> f = p -> {
			try {registerTestDebug(p[0], p[1]);} catch (Exception e) {throw new IllegalStateException(e);}return null;
		};
		registerTest(parametersFileName, url, f);
	}
	
	@Test(timeOut = 600000, retryAnalyzer=TestDeposit.class)//10 min timeout
	public void WHCC_HP_rbplus1() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "DepositEN.xml";
		String url = "http://ads.williamhillcasino.com/redirect.aspx?pid=17043680&lpid=14156243&bid=755252033&var9= ";
		Function <String[], String> f = p -> {
			try {registerTestDebug(p[0], p[1]);} catch (Exception e) {throw new IllegalStateException(e);}return null;
		};
		registerTest(parametersFileName, url, f);
	}
	
	/**
	 * Registration Test
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws AWTException 
	 */
	//@Test(dataProvider = "Browsers", timeOut = 600000, retryAnalyzer=TestDeposit21Nova.class, description = "Test The Registration & Deposit")//10 min timeout
	public void registerTest(String parametersFileName ,String url, Function <String[], String> fun) throws IOException, InterruptedException, AWTException {
		if (!debug) {
			for (int i = 0; i < maxRetryCount; i++) {
				try {
					//registerTestDebug(parametersFileName, url);
					fun.apply(new String[]{parametersFileName, url});
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
			//registerTestDebug(parametersFileName, url);
			fun.apply(new String[]{parametersFileName, url});
		}  
	}
	
	/**
	 * The main Test
	 * @param browserType
	 * @throws AWTException
	 * @throws InterruptedException
	 * @throws IOException
	 */
	private String registerTestDebug(String parametersFileName ,String url) throws AWTException, InterruptedException, IOException {
		Utility.terminateChrome();
		parametersFileName = this.getClass().getPackage().getName().replace('.', '/') + "/" + parametersFileName;
		ac = new ClassPathXmlApplicationContext("classpath:"+ parametersFileName);
		TestDeposit testDeposit = ac.getBean(TestDeposit.class);
		browserType = testDeposit.getBrowserType();
		AppContextRepository.setAc(ac);
		MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
		driver = mainWebPage.openUrl(browserType);
		//mainWebPage.OpenLanguage();
		RegisterPage registerPage = ac.getBean(RegisterPage.class);
		String testName = "Not a test";
		try {
			testName = myTestContext.getName();
		} catch (Exception e) {
		}
		registerPage.register(testName);
		return null;
		//start Deposit
	}
	
	private void registerTestLp(String parametersFileName ,String url) throws AWTException, InterruptedException, IOException {
		Utility.terminateChrome();
		parametersFileName = this.getClass().getPackage().getName().replace('.', '/') + "/" + parametersFileName;
		ac = new ClassPathXmlApplicationContext("classpath:"+ parametersFileName);
		TestDeposit testDeposit = ac.getBean(TestDeposit.class);
		browserType = testDeposit.getBrowserType();
		AppContextRepository.setAc(ac);
		MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
		driver = mainWebPage.openUrl(browserType);
		//mainWebPage.OpenLanguage();
		RegisterPage registerPage = ac.getBean(RegisterPage.class);
		String testName = "Not a test";
		try {
			testName = myTestContext.getName();
		} catch (Exception e) {
		}
		registerPage.register(testName);
		//start Deposit
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
	
	// Function <Person, String> f = p -> "Name: " + p.getGivenName() + " EMail: " + p.getEmail();
	// System.out.println(f.apply(pl.get(0)));
	
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