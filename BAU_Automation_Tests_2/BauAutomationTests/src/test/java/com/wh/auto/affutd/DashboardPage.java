package com.wh.auto.affutd;

import java.awt.AWTException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.wh.auto.common.WebDriverUtils;

public class DashboardPage extends WebDriverUtils {

	private final WebDriver driver;
	
	/**
	 * Dashboard Page Constructor
	 * @param driver
	 */
    public DashboardPage(WebDriver driver) { 
       super();
       this.driver = driver;
    }
	
    /**
     * read UserName
     * @param url
     * @param password
     * @return
     * @throws AWTException
     * @throws InterruptedException
     */
    public String readUserName() throws AWTException, InterruptedException {  
    	WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement webElement = wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.id("txtAffiliateUsername"))));
        return webElement.getText();
     }
}
