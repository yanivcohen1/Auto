package com.wh.auto.general.mobile;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.testng.ITestContext;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.wh.auto.common.Reporter;
import com.wh.auto.common.Utility;
import com.wh.auto.cucumber.AbstractCucumberTest;
import com.wh.auto.cucumber.annotation.Feature;
import com.wh.auto.repository.AppContextRepository;

@Feature("Payments")
public class TestsPayments extends AbstractCucumberTest {

	final static Logger logger = LoggerFactory.getLogger(TestsPayments.class);
	private int MaxRetryCount = 3;
	private static String[] parametersFileNames;
	private String scenario;
	private String feature;
	public static String folderFile;
	public static String thisFeature;
	public boolean debug = false;

	/**
	 * Before all tests starts
	 */
	@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite(@Optional("WhccMobileEnSelfExclude.xml") String parametersFileName) {//SafariDE
		this.parametersFileNames = parametersFileName.split(",");
	}

	public static void main(String[] args) throws Throwable {
		TestsPayments testDepositMobile = new TestsPayments();
		testDepositMobile.depositRegisterEn("WhccMobileEnTimeOut.xml");
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

	@Test(dataProvider = "Browsers", timeOut = 600000, description = "Test The Deposit Limit") // 10 min timeout
	public void depositRegisterEn(String parametersFileName) {
		logger.info("Start");
		folderFile = this.getClass().getPackage().getName().replace('.', '/') + "/";
		String springFileName = folderFile + parametersFileName;
		ApplicationContext context = new ClassPathXmlApplicationContext("classpath:" + springFileName);// cucumber2.xml
		AppContextRepository.setAc(context);
		TestsPayments thisClass = (TestsPayments) context.getBean(TestsPayments.class.getName());
		String senario = thisClass.getScenario();
		thisFeature = folderFile + thisClass.getFeature();
		if (Utility.developmentMac && debug) {
			Utility.setDebug(true);
			runAndRetry(MaxRetryCount, "TimeOut", thisFeature);
		}else{
			runAndRetry(MaxRetryCount, senario, thisFeature);
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
	 * After each test close the browser
	 */
	public void afterTest() {
		try {
			driver.quit();
		} catch (Exception e) {	}
	}

	public void setScenario(String scenario) {
		this.scenario = scenario;
	}

	public String getScenario() {
		return scenario;
	}

	public String getFeature() {
		return feature;
	}

	public void setFeature(String feature) {
		this.feature = feature;
	}
	
}