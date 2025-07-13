package com.wh.auto.prestige;

import java.awt.AWTException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.wh.auto.common.WebDriverUtils;

public class FreespinPage extends WebDriverUtils {

	private final WebDriver driver;
	
	/**
	 * Freespin Page Constructor
	 * @param driver
	 */
    public FreespinPage(WebDriver driver) { 
       super();
       this.driver = driver;
    }
	
    /**
     * login
     * @param url
     * @param password
     * @return
     * @throws AWTException
     * @throws InterruptedException
     */
    public boolean loginAs(String url, String password) throws AWTException, InterruptedException {  
    	driver.get(url);
    	driver.findElement(By.cssSelector("input[id='okbtn2']")).click();
    	WebDriverUtils.safeClick(driver, driver.findElement(By.cssSelector("li[id='ro']")));
    	new WebDriverWait(driver, 5).until(ExpectedConditions
				.visibilityOfElementLocated(By.linkText("Play Now")));
    	Thread.sleep(1000);
    	/*(new WebDriverWait(driver, 10)).until(new ExpectedCondition() {
			@Override
			public Boolean apply(Object driver1) {
				return ((WebDriver)driver1).findElement(By.linkText("Play Now")).isDisplayed();
			}
    	});*/
    	try {
			driver.findElement(By.linkText("Play Now")).click();
		} catch (Exception e) {}
		Thread.sleep(5000);
    	driver.findElement(By.cssSelector("input[id='upass']")).sendKeys(password);
    	driver.findElement(By.cssSelector("input[id='loginsubmit']")).click();
    	new WebDriverWait(driver, 100).until(ExpectedConditions
				.visibilityOfElementLocated(By.cssSelector("div[id='timerBox']")));
        return true;
     }
}
