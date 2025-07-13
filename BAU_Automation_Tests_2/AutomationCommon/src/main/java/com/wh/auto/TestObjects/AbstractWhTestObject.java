package com.wh.auto.TestObjects;

import java.awt.AWTException;
import java.io.IOException;
import java.util.function.Function;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.ITestContext;
import org.testng.annotations.BeforeTest;

import com.wh.auto.common.Browsers;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.Reporter.Color;
import com.wh.auto.common.Reporter.Style;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;

public abstract class AbstractWhTestObject extends WebDriverUtils{

	protected static WebDriver driver = null;
	protected Browsers browsers = null;
	protected ITestContext myTestContext = null;
	
	/**
	 * Run Test
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws AWTException 
	 */
	public void runTest(Function <Void, String> fun, int retryTimes) throws IOException, InterruptedException, AWTException {
		if (retryTimes > 1) {//ITestContext myTestContext, WebDriver driver
			for (int i = 0; i < retryTimes; i++) {
				try {
					fun.apply(null);
					break;
				} catch (Exception e) {
					e.printStackTrace();
					if(i >= retryTimes-1){
						Utility.logError(e, myTestContext, driver, true);
					}
					Utility.logError(e, myTestContext, driver, false);
					//driver.quit();
				}
			}
		}else{
			fun.apply(null);
		}  
	}

	protected void appSleep(long milliToSleep){
		try {
			Thread.sleep(milliToSleep);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}