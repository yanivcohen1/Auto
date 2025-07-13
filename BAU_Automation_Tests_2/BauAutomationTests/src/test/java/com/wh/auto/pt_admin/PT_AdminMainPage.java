package com.wh.auto.pt_admin;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;

import java.awt.AWTException;
import java.awt.Robot;

public class PT_AdminMainPage extends WebDriverUtils {
	
	private final WebDriver driver;
	// get the utility Properties
	private static Properties utilityProp = Utility.getPropertyFile("utility.properties");
	// get integration page
	private static String playtechAdminUrl = utilityProp.getProperty("playtechAdminUrl");
	// playtech admin credentials
	private static String playtechAdminUsername = utilityProp.getProperty("playtechAdminUser");
	private static String playtechAdminPassword = utilityProp.getProperty("playtechAdminPass");
	
	/**
	 * PT_AdminMainPage Constructor
	 * @param driver
	 */
    public PT_AdminMainPage(WebDriver driver) {
		super();
		this.driver = driver; 
    }
    
    public void login() throws InterruptedException { 	
    	driver.get(playtechAdminUrl);
		driver.findElement(By.name("username")).clear();
		driver.findElement(By.name("username")).sendKeys(playtechAdminUsername);
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys(playtechAdminPassword);
		driver.findElement(By.name("Submit")).click();
		Thread.sleep(5000);
       //wait.until(ExpectedConditions.titleIs("Login")); 
    }
    
    /**
     * display User
     * @param userName
     */
    public void displayUser(String userName) {  	
    	driver.get(utilityProp.getProperty("playtechAdminSearchUserUrl"));
    	new WebDriverWait(driver, 30).until(ExpectedConditions
				.presenceOfElementLocated(By.cssSelector("input#username")));
    	driver.findElement(By.cssSelector("input#username")).sendKeys(userName);
    	driver.findElement(By.cssSelector("input#internalaccount")).click();
    	driver.findElement(By.cssSelector("input#submit")).click();
     }
    
}
