package com.who.tests.pt_admin;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import com.who.utils.Browsers;
import com.who.utils.WebDriverUtils;

import java.awt.AWTException;
import java.awt.Robot;

public class PT_AdminMainPage extends WebDriverUtils {
	
	@Autowired
	private Browsers browsers;
	
	@SuppressWarnings("static-access")
	private WebDriver driver;// = browsers.getDriver();
	// get the utility Properties
	//private static Properties utilityProp = Utility.getPropertyFile("utility.ini");
	// get integration page
	private String playtechAdminUrl; //= utilityProp.getProperty("playtechAdminUrl");
	// playtech admin credentials
	private String playtechAdminUsername; //= utilityProp.getProperty("playtechAdminUser");
	private String playtechAdminPassword; //= utilityProp.getProperty("playtechAdminPass");
	private String playtechAdminSearchUserUrl;
	
	public String getPlaytechAdminSearchUserUrl() {
		return playtechAdminSearchUserUrl;
	}

	public void setPlaytechAdminSearchUserUrl(
			String playtechAdminSearchUserUrl) {
		this.playtechAdminSearchUserUrl = playtechAdminSearchUserUrl;
	}

	public String getPlaytechAdminUrl() {
		return playtechAdminUrl;
	}

	public void setPlaytechAdminUrl(String playtechAdminUrl) {
		this.playtechAdminUrl = playtechAdminUrl;
	}

	public String getPlaytechAdminUsername() {
		return this.playtechAdminUsername;
	}

	public void setPlaytechAdminUsername(String playtechAdminUsername) {
		this.playtechAdminUsername = playtechAdminUsername;
	}

	public String getPlaytechAdminPassword() {
		return playtechAdminPassword;
	}

	public void setPlaytechAdminPassword(String playtechAdminPassword) {
		this.playtechAdminPassword = playtechAdminPassword;
	}

	/**
	 * PT_AdminMainPage Constructor
	 * @param driver
	 */
   /* public PT_AdminMainPage(WebDriver driver) {
		super();
		this.driver = browsers.getDriver(); 
    }*/
    
    public void login() throws InterruptedException { 
    	driver = browsers.getDriver();
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
    	WebDriver driver = browsers.getDriver();
    	driver.get(playtechAdminSearchUserUrl);
    	new WebDriverWait(driver, 30).until(ExpectedConditions
				.presenceOfElementLocated(By.cssSelector("input#username")));
    	driver.findElement(By.cssSelector("input#username")).sendKeys(userName);
    	driver.findElement(By.cssSelector("input#internalaccount")).click();
    	driver.findElement(By.cssSelector("input#submit")).click();
     }
    
}
