package com.wh.auto.affutd;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.wh.auto.common.MyLogger;
import com.wh.auto.common.WebDriverUtils;

import java.awt.AWTException;
import java.awt.Robot;

public class LoginPage extends WebDriverUtils {
	
	private final WebDriver driver;  
	 
	/**
	 * AffutdPage Constructor
	 * @param driver
	 * @param URL
	 */
    public LoginPage(WebDriver driver, String URL) {
       super();
       this.driver = driver;
       driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
       //Logger.INFO("Opening URL");
       driver.get(URL);  
       driver.manage().deleteAllCookies(); 
    }
    
    /**
     * Affutd login
     * @param password
     * @return
     * @throws AWTException
     */
    public DashboardPage loginAs(String user, String password) throws AWTException {  
		driver.findElement(By.id("txtUsername")).clear();
		driver.findElement(By.id("txtUsername")).sendKeys(user);
		driver.findElement(By.id("txtPassword")).clear();
		driver.findElement(By.id("txtPassword")).sendKeys(password);
		driver.findElement(By.id("btnLogin")).click();
		//Logger.INFO("LogIn");
		//boolean pass = false;
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement webElement = wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.id("txtAffiliateUsername"))));  
        return new DashboardPage(driver);  
     }
   
}
