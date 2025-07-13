package com.wh.auto.prestige;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.wh.auto.common.WebDriverUtils;

import java.awt.AWTException;
import java.awt.Robot;

public class HapyHourPage extends WebDriverUtils {
	
	private final WebDriver driver;  
	 
	/**
	 * HapyHourPage Constructor
	 * @param driver
	 * @param URL
	 */
    public HapyHourPage(WebDriver driver, String URL) {
       super();
       this.driver = driver;
       driver.get(URL);  
       driver.manage().deleteAllCookies();
       //Wait wait = new FluentWait(driver)  
       //   .withTimeout(30, TimeUnit.SECONDS)  
       //   .pollingEvery(2, TimeUnit.SECONDS);  

       //wait.until(ExpectedConditions.titleIs("Login"));  
    }
    
    /**
     * login
     * @param password
     * @return
     * @throws AWTException
     */
    public FreespinPage loginAs(String password) throws AWTException {  
    	//Robot Robot = new Robot();
    	//Robot.t
    	driver.findElement(By.cssSelector("input[name='username']")).sendKeys(password);  
    	driver.findElement(By.cssSelector("input[name='submit']")).click();
    	new WebDriverWait(driver, 15).until(ExpectedConditions
				.invisibilityOfElementWithText(By.cssSelector("body"),"User Successfully deleted"));
        //driver.findElement(By.name("submit")).submit();  
        return new FreespinPage(driver);  
     }
    
    /*private void type(int i)
    {
      robot.delay(40);
      robot.keyPress(i);
      robot.keyRelease(i);
    }*/
    
}
