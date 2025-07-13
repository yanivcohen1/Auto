package com.who.test;

import java.awt.AWTException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map.Entry;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.ibm.icu.impl.Assert;
import com.who.test.pages.MainPage;
import com.who.utils.AppContextRepository;
import com.who.utils.IWaitForCallBack;
import com.who.utils.Utility;
import com.who.utils.Browsers;
import com.who.utils.WaitForCallBack;
import com.who.utils.WebDriverUtils;

public class LoadTests extends WebDriverUtils {

    protected boolean debug = true;
    protected WebDriver driver;
    
    public static void main(String argv[]) {
    	WaitForCallBack waitForCallBack = new WaitForCallBack();
    	waitForCallBack.savePointer(new IWaitForCallBack() {

			@Override
			public WebElement runCallBackFun(int timeout) {
				// TODO Auto-generated method stub
				return null;
			}
    	}); // end argument and exampleMethod call
		System.out.println("return " + waitForCallBack.runCallBackFun(5));
	}
    
    /**
	 * Before all tests start
	 */
	@BeforeClass
	public void beforeClass() {
		Utility.terminateChrome();
		debug = true;
	}
    
	/**
	 * initiaze for running test and browser
	 * @return
	 */
	@DataProvider(name = "loadTest", parallel = true)
	public Object[][] createDataProvider() {
		//System.out.println("Start suite: " + myTestContext.getName());
		List<Object[]> Result = new ArrayList<Object[]>();
		Object[][] obj = new Object[10][0];
		return obj;
	}
	
	/**
	 * load Test
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws AWTException 
	 */
	@Test(dataProvider = "loadTest", timeOut = 600000, description = "LoadTest")//10 min timeout
	public void loadTest() {
		//myTestContext.setAttribute("Name", test.getValue());
		System.out.println("Start test: ");
		Browsers browsers = new Browsers();
		browsers.setBrowseName("chrome");
		final WebDriver driver = browsers.getDriver();
    	driver.get("https://10.1.1.20/RunSuiteSelectedTests/");  	
    	WebElement webElement = new WebDriverWait(driver, 60).until(ExpectedConditions
				.visibilityOfElementLocated(By.cssSelector(".sendButton")));
    	try {
			driver.quit();
		} catch (Exception e) {
			e.printStackTrace();
		}
    	org.testng.Assert.assertTrue(webElement != null, "Ajax fail");
    	//org.testng.Assert.assertTrue(find.contains("pass"), find);
	}
	
}
