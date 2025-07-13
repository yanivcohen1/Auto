package com.wh.auto.TestObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

//import com.legalmonkeys.test.AbstractCucumberTest;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.Reporter.Color;
import com.wh.auto.common.Reporter.Style;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;

public abstract class AbstractWhPageObject extends WebDriverUtils{

	protected WebDriver driver = null;
	protected Browsers browsers = null;
	
	public AbstractWhPageObject(Browsers browsers) {
		//super(driver);
		Reporter.log("Page: " + this.getClass().getSimpleName(), Style.BOLD, Color.GREEN);
		if (browsers != null) {
			this.driver = browsers.get_Driver();
			this.browsers = browsers;
		}
	    PageFactory.initElements(driver, this);
	}

	protected void appSleep(long milliToSleep){
		try {
			Thread.sleep(milliToSleep);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}