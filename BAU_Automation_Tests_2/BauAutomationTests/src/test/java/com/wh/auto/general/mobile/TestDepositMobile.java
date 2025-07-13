package com.wh.auto.general.mobile;

import java.awt.AWTException;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Properties;
import java.util.regex.Matcher;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.PageFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.Assert;
import org.testng.ITestContext;
import org.testng.Reporter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.thoughtworks.selenium.webdriven.commands.GetTitle;
import com.wh.auto.TestObjects.IAfterTestRun;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.CustomRemoteWebDriver;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.cucumber.AbstractCucumberTest;
import com.wh.auto.cucumber.annotation.Feature;
import com.wh.auto.cucumber.annotation.Scenario;
import com.wh.auto.general.mobile.pages.DepositPage;
import com.wh.auto.general.mobile.pages.MainWebPage;
import com.wh.auto.general.mobile.pages.RegisterPage;
import com.wh.auto.repository.AppContextRepository;
import com.wh.auto.repository.SessionRepository;

import bsh.This;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.PendingException;

@Feature("RegisterDeposit")
public class TestDepositMobile extends AbstractCucumberTest {

	private int MaxRetryCount = 3;
	private static String[] parametersFileNames;
	private String scenario;
	private String feature;

	/**
	 * Before all tests starts
	 */
	@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite(@Optional("EgMobileEnLogin.xml") String parametersFileName) {//SafariDE
		this.parametersFileNames = parametersFileName.split(",");
	}

	public static void main(String[] args) throws Throwable {
		TestDepositMobile testDepositMobile = new TestDepositMobile();
		//testDepositMobile.depositRegisterEn("EgMobileEnDeposit.xml");
		parametersFileNames = new String[]{"EgMobileEnDeposit.xml"};
		testDepositMobile.internalTest();
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

	@Test(dataProvider = "Browsers", timeOut = 600000, description = "Test The Registration & Deposit") // 10 min timeout
	public void depositRegisterEn(String parametersFileName) {
		String folderFile = this.getClass().getPackage().getName().replace('.', '/') + "/";
		String springFileName = folderFile + parametersFileName;
		ApplicationContext context = new ClassPathXmlApplicationContext("classpath:" + springFileName);// cucumber2.xml
		AppContextRepository.setAc(context);
		TestDepositMobile thisClass = (TestDepositMobile) context.getBean(TestDepositMobile.class.getName());
		String senario = thisClass.getScenario();
		String feature = folderFile + thisClass.getFeature();
		runAndRetry(MaxRetryCount, senario, feature);
	}

	private void internalTest() throws Throwable {
		String folderFile = this.getClass().getPackage().getName().replace('.', '/') + "/";
		String springFileName = folderFile + parametersFileNames[0];
		ApplicationContext context = new ClassPathXmlApplicationContext("classpath:" + springFileName);// cucumber2.xml
		AppContextRepository.setAc(context);
		TestDepositMobile thisClass = (TestDepositMobile) context.getBean(TestDepositMobile.class.getName());
		MainWebPage mainWebPage = new MainWebPage();
		mainWebPage.user_navigates_to_("www.google.com");
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