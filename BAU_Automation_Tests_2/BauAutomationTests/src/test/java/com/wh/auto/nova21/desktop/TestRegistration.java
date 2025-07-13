package com.wh.auto.nova21.desktop;

import java.awt.AWTException;
import java.io.IOException;
import java.util.function.Function;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.testng.ITestContext;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.beust.testng.TestNG;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.nova21.desktop.pages.MainWebPage;
import com.wh.auto.nova21.desktop.pages.RegisterPage;
import com.wh.auto.repository.AppContextRepository;

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
		testRegistration.NV_HP_masdineros();//chrome,ie,firefox "Affutd.ini" "DepositEN.xml"
		System.out.println("Test Finish");
	}
	
	/**
	 * Before all tests starts
	 */
	//@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite() { //String parametersFileName
		String testName = null;
		//String parametersFileName = null;
		//if (parametersFileName == null || (parametersFileName.contains("PT_Advertiser.ini"))) {
		//	parametersFileName = "nova21DepositEn.xml";
		//}
		//this.parametersFileNames = parametersFileName.split(",");
		//System.out.println(parametersFileName);
		//TestNG.getDefault().setGroups(parametersFileName);//this.setGroups("runMe");
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
	
	
	@Test(timeOut = 600000, groups = "NV_LP_tl42520",retryAnalyzer=TestRegistration.class)//10 min timeout
	public void NV_LP_tl42520() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "nova21DepositDE.xml";
		String testName = "NV_LP_tl42520";
		String url = "http://ads.21nova.com/redirect.aspx?pid=182834095&lpid=1487411787&bid=1487412060";
		Function <String[], String> f = p -> {
			try {registerTestLp(p[0], p[1]);} 
			catch (Exception e) {throw new IllegalStateException(e);}
			return null;
		};
		registerTest(parametersFileName, url, f);
	}
	
	@Test(timeOut = 600000, retryAnalyzer=TestRegistration.class)//10 min timeout
	public void NV_LP_promotool3() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "nova21DepositEN.xml";
		String testName = "NV_LP_promotool3";
		String url = "http://ads.21nova.com/redirect.aspx?pid=183443853&lpid=1487410994&bid=1487410486";
		Function <String[], String> f = p -> {
			try {registerTestLp(p[0], p[1]);} catch (Exception e) {throw new IllegalStateException(e);}return null;
		};
		registerTest(parametersFileName, url, f);
	}
	
	@Test(timeOut = 600000, retryAnalyzer=TestRegistration.class)//10 min timeout
	public void NV_LP_promotool31() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "nova21DepositEN.xml";
		String testName = "NV_LP_promotool31";
		String url = "http://ads.21nova.com/redirect.aspx?pid=183443853&lpid=1487410994&bid=1487410486";
		Function <String[], String> f = p -> {
			try {registerTestLp(p[0], p[1]);} catch (Exception e) {throw new IllegalStateException(e);}return null;
		};
		registerTest(parametersFileName, url, f);
	}
	
	@Test(timeOut = 600000, retryAnalyzer=TestRegistration.class)//10 min timeout
	public void NV_LP_promotool32() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "nova21DepositEN.xml";
		String testName = "NV_LP_promotool32";
		String url = "http://ads.21nova.com/redirect.aspx?pid=183443853&lpid=1487410994&bid=1487410486";
		Function <String[], String> f = p -> {
			try {registerTestLp(p[0], p[1]);} catch (Exception e) {throw new IllegalStateException(e);}return null;
		};
		registerTest(parametersFileName, url, f);
	}
	
	@Test(timeOut = 600000, retryAnalyzer=TestRegistration.class)//10 min timeout
	public void NV_LP_upsky() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "nova21DepositDE.xml";
		String testName = "NV_LP_upsky";
		String url = "http://ads.21nova.com/redirect.aspx?pid=183442822&lpid=1487411803&bid=1487412079";
		Function <String[], String> f = p -> {
			try {registerTestDebug(p[0], p[1]);} catch (Exception e) {throw new IllegalStateException(e);}return null;
		};
		registerTest(parametersFileName, url, f);
	}
	
	@Test(timeOut = 600000, retryAnalyzer=TestRegistration.class)//10 min timeout
	public void NV_LP_upsky2() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "nova21DepositDE.xml";
		String testName = "NV_LP_upsky2";
		String url = "http://ads.21nova.com/redirect.aspx?pid=183442822&lpid=1487411803&bid=1487412079";
		Function <String[], String> f = p -> {
			try {registerTestDebug(p[0], p[1]);} catch (Exception e) {throw new IllegalStateException(e);}return null;
		};
		registerTest(parametersFileName, url, f);
	}
	
	@Test(timeOut = 600000, retryAnalyzer=TestRegistration.class)//10 min timeout
	public void NV_HP_masdineros() throws IOException, InterruptedException, AWTException {
		String parametersFileName = "nova21DepositES.xml";
		String testName = "NV_HP_masdineros";
		String url = "http://ads.21nova.com/redirect.aspx?pid=138724250&lpid=1478327800&bid=1478329961";
		Function <String[], String> f = p -> {
			try {registerTestDebug(p[0], p[1]);} catch (Exception e) {throw new IllegalStateException(e);}return null;
		};
		registerTest(parametersFileName, url , f);
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
		TestDeposit21Nova testDeposit = ac.getBean(TestDeposit21Nova.class);
		browserType = testDeposit.getBrowserType();
		AppContextRepository.setAc(ac);
		MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
		driver = mainWebPage.openUrl(browserType, url);
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
		TestDeposit21Nova testDeposit = ac.getBean(TestDeposit21Nova.class);
		browserType = testDeposit.getBrowserType();
		AppContextRepository.setAc(ac);
		MainWebPage mainWebPage = ac.getBean(MainWebPage.class);
		driver = mainWebPage.openUrl(browserType, url);
		WebDriverUtils.waitForElement(driver, By.cssSelector("div.button-wrap"), 15).click();
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