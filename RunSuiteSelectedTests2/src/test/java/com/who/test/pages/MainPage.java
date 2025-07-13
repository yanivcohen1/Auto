package com.who.test.pages;

import java.awt.AWTException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.who.utils.Browsers;
import com.who.utils.WebDriverUtils;

public class MainPage extends WebDriverUtils {

	private WebDriver driver;
	private String expectedResult;
	private Browsers browsers;
	/**
	 * ResultPage Constructor
	 * @param browsers
	 */
    public MainPage(Browsers browsers) { 
    	super();
		this.browsers = browsers;
    }

    public String getExpectedResult() {
		return expectedResult;
	}
    
	public void setExpectedResult(String expectedResult) {
		this.expectedResult = expectedResult;
	}
	
	/**
     * find google search
     * @return
     * @throws AWTException
     * @throws InterruptedException
     */
    public boolean testFindResult() throws AWTException, InterruptedException {  
    	Thread.sleep(3000);
    	driver = browsers.getDriver();
    	WebElement link = new WebDriverWait(driver, 60).until(ExpectedConditions
				.visibilityOfElementLocated(By.cssSelector("#rso > li:nth-child(2) > div > h3 > a")));
    	String linkText = link.getText();
    	boolean result = linkText.contains(expectedResult);
        return result;
    }
    
}
