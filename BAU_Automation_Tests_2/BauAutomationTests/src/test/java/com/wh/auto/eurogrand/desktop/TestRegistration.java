package com.wh.auto.eurogrand.desktop;

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
import com.wh.auto.eurogrand.desktop.pages.DepositPage;
import com.wh.auto.eurogrand.desktop.pages.MainWebPage;
import com.wh.auto.eurogrand.desktop.pages.RegisterPage;
import com.wh.auto.repository.AppContextRepository;
import com.wh.auto.TestObjects.AbstractWhTestObject;

//@ContextConfiguration(locations = {"classpath:nova21DepositDE.xml"})
public class TestRegistration extends AbstractWhTestObject {
	
	private int maxRetryCount = 3;
	private static boolean debug;

	private static String browserType;
	private String[] parametersFileNames;

	@Autowired
    protected ApplicationContext ac;
	
	public static void main(String[] args) throws Exception {
		debug = true;
		TestRegistration testRegistration = null;
		testRegistration = new TestRegistration();
		//testRegistration.beforeSuite("");//classpath*:**/
		testRegistration.EG_LP_amona();//chrome,ie,firefox "Affutd.ini" "DepositEN.xml"
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
	public void EG_HP_rbplus2Othersideinc() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "DepositEN.xml";
		String url = "http://ads.eurogrand.com/redirect.aspx?pid=17043680&lpid=1470381265&bid=1195564657&var9= ";
		Function <Void, String> f = p -> {
			try {registerTestDebug(parametersFileName, url);} catch (Exception e) {throw new IllegalStateException(e);}; return null;
		};
		runTest(f, 3);
	}
	
	@Test(timeOut = 600000, retryAnalyzer=TestDeposit.class)//10 min timeout
	public void EG_LP_naturaline() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "DepositEN.xml";
		String url = "http://ads.eurogrand.com/redirect.aspx?pid=12104704&lpid=1487411626&bid=1485486745";
		Function<Void, String> f = p -> {
			try {registerTestLp(parametersFileName, url);} catch (Exception e) {throw new IllegalStateException(e);}return null;
		};
		runTest(f, 3);
	}
	
	@Test(timeOut = 600000, retryAnalyzer=TestDeposit.class)//10 min timeout
	public void EG_LP_BAYBETS() throws IOException, InterruptedException, AWTException {//DE
		String parametersFileName = "DepositDE.xml";
		String url = "http://ads.eurogrand.com/redirect.aspx?pid=5065789&lpid=1484162745&bid=1478311950";
		Function<Void, String> f = p -> {
			try {registerTestLp(parametersFileName, url);} catch (Exception e) {throw new IllegalStateException(e);}return null;
		};
		runTest(f, 3);
	}
	
	@Test(timeOut = 600000, retryAnalyzer=TestDeposit.class)//10 min timeout
	public void EG_LP_amona() throws Exception, InterruptedException, AWTException {//ru
		String parametersFileName = "DepositRU.xml";
		String url = "http://ads.eurogrand.com/redirect.aspx?pid=182610855&lpid=1487411545&bid=1487411887";
		Function <Void, String> f = p -> {
			try {
				registerTestDebug(parametersFileName, url);
			} catch (Exception e) {throw new IllegalStateException(e);}
			return null;
		};
		runTest(f, 3);
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