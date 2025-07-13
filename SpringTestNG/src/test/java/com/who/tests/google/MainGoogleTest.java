package com.who.tests.google;

import java.awt.AWTException;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.ProcessBuilder.Redirect;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.IRetryAnalyzer;
import org.testng.ITestContext;
import org.testng.ITestResult;
import org.testng.Reporter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.who.utils.AppContextRepository;
import com.who.utils.Browsers;
import com.who.utils.Utility;

/*import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;
import com.wh.auto.common.Browsers;*/

/**
 * Test google Search
 * @author yanivc
 *
 */
@ContextConfiguration("file:src/main/resources/spring-config-google.xml")
public class MainGoogleTest extends AbstractTestNGSpringContextTests {

    //@SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    protected ApplicationContext ac;
	
    public int testIndex;
	String[] testBrowsers;
	private int maxRetryCount = 3;
	private ITestContext myTestContext = null;
	//private WebDriver driver;
	public MainGoogleTest me;

	private static boolean debug = false;
    private String expectedResult;
    //public MainGoogleTestData mainGoogleTestData;
    private Map<String, String> tests;

	public Map<String, String> getTests() {
		return tests;
	}

	public void setTests(Map<String, String> tests) {
		this.tests = tests;
	}

	public String getExpectedResult() {
		return expectedResult;
	}

	public void setExpectedResult(String expectedResult) {
		this.expectedResult = expectedResult;
	}

	public String[] getTestBrowsers() {
		return testBrowsers;
	}

	public void setTestBrowsers(String[] testBrowsers) {
		this.testBrowsers = testBrowsers;
	}

	/**
	 * Before all tests start
	 */
	@BeforeClass
	public void beforeClass() {
		Utility.terminateChrome();
		AppContextRepository.setAc(ac);
		me = ac.getBean(MainGoogleTest.class);
		tests = me.tests;
		//expectedResult=me.expectedResult;
		debug = true;
	}
	
	public MainGoogleTest getMe() {
		return me;
	}

	/**
	 * for testing
	 * @param args
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws AWTException
	 */
	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		Utility.terminateChrome();
		debug = true;
		MainGoogleTest tcr = new MainGoogleTest();
		tcr.ac = new ClassPathXmlApplicationContext(new String[] {"spring-config-google.xml"});
		AppContextRepository.setAc(tcr.ac);
		tcr.me = tcr.ac.getBean(MainGoogleTest.class);
		MainGoogleTest me = tcr.ac.getBean(MainGoogleTest.class);
		tcr.testBrowsers = me.testBrowsers;
		tcr.expectedResult = me.expectedResult;
		tcr.tests = new HashMap<String, String>();
		MainGoogleTest mainGoogleTest = tcr.ac.getBean(MainGoogleTest.class);
		tcr.tests.put("Test1", mainGoogleTest.tests.get("Test1"));
		Iterator<Entry<String, String>> testIterator = tcr.tests.entrySet().iterator();
		tcr.googleSearceTest((Entry<String, String>) testIterator.next());//chrome,ie,firefox
		tcr.afterSuite();
	}
	
	/**
	 * initiaze for running test and browser
	 * @return
	 */
	@DataProvider(name = "googleSearce", parallel = true)
	public Object[][] createDataProvider() {
		System.out.println("Start suite: " + myTestContext.getName());
		List<Object[]> Result = new ArrayList<Object[]>();
		for(Entry<String, String> test : tests.entrySet()) { //for (String test : tests) {
				Result.add(new Object[] { test });
		}
		Object[][] obj = new Object[Result.size()][1];
		for (int i=0; i < obj.length ; i++)
			obj[i] = Result.get(i);
		return obj;
	}
	
	/**
	 * google Searce Test
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws AWTException 
	 */
	@Test(dataProvider = "googleSearce", timeOut = 600000, retryAnalyzer=MainGoogleTest.class, description = "googleSearceTest")//10 min timeout
	public void googleSearceTest(Entry<String, String> test) throws IOException, InterruptedException, AWTException {
		//myTestContext.setAttribute("Name", test.getValue());
		System.out.println("Start test: " + test.getKey());
		MainGoogleTestData mainGoogleTestData = ac.getBean(test.getValue(), MainGoogleTestData.class);
		if (!debug) {
			for (int i = 0; i < maxRetryCount; i++) {
				try {
					googleSearceTestDebug(mainGoogleTestData);
					break;
				} catch (Exception e) {
					if(i >= maxRetryCount-1){
						//Utility.logError(e, myTestContext, driver, true);
					}
					//Utility.logError(e, myTestContext, driver, false);
					//afterSuite();
				}
			}
		}else{
			googleSearceTestDebug(mainGoogleTestData);
		}  
	}
	
	/**
	 * The main Test
	 * @param browserType
	 * @throws AWTException
	 * @throws InterruptedException
	 */
	private void googleSearceTestDebug(MainGoogleTestData mainGoogleTestData) throws AWTException, InterruptedException {
		boolean pass = false;
		WebDriver driver = null;
		try {
			SearchPage searchPage = mainGoogleTestData.getSearchPage();
			driver = searchPage.getDriver();
			searchPage.searce();//ResultPage resultPage =
			pass = mainGoogleTestData.getResultPage().testFindResult();
		} catch (Exception e) {} 
		try {
			driver.quit();
		} catch (Exception e) {}
		Assert.assertTrue("Test Fail", pass);
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
	 * After tests close the browser
	 */
	@AfterMethod
	public void afterTest() {
		//driver.quit();
	}
	
	/**
	 * After all tests close the browser
	 */
	@AfterClass
	public void afterSuite() {
		//driver.quit();
	}
	
}
