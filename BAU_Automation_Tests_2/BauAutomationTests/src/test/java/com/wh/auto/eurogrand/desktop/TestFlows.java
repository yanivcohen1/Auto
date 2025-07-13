package com.wh.auto.eurogrand.desktop;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.Test;

import com.google.common.base.Function;
import com.wh.auto.common.Browsers;
import com.wh.auto.utils.WHForm;
import com.wh.auto.utils.WHFormFields.WHFormField;

public class TestFlows {
	
	protected WebDriver driver;
	protected Browsers browser = new Browsers();

	//@Test
	public void testLoginOnGameMatrix(){
		driver = browser.getDriver("firefox");
		driver.get("http://www.eurogrand.com");
		driver.findElement(By.xpath("//div[@id='front-matrix']//div[@class='game']//span[@class='play-now txt']")).click();
		for(String winHandle : driver.getWindowHandles()){
		    driver.switchTo().window(winHandle);
		}
		WHForm f = new WHForm(driver, "loginForm");
		f.addField(new WHFormField("username", "stduser"));
		f.addField(new WHFormField("password", "123456"));
		f.onBeforeSubmit(new Function<WHForm, Void>() {
			@Override
			public Void apply(WHForm arg0) {
				driver.findElement(By.className("login-btn")).click();
				return null;
			}
		});
		f.submit();
		//driver.findElement(By.className("login-btn")).click();
		//driver.findElement(By.id("user-field")).sendKeys("stduser");
		//driver.findElement(By.id("password-field")).sendKeys("123456");
		//driver.findElement(By.className("login-btn")).click();
		Assert.assertTrue(driver.getCurrentUrl().contains("https://safeverification.eurogrand.com/fimgame?gc="));
	}
	
	@Test
	public void testRegisterOnGameMatrix(){
		driver = browser.getDriver("firefox");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("http://www.eurogrand.com");
		driver.findElement(By.xpath("//div[@id='front-matrix']//div[@class='game']//span[@class='play-now txt']")).click();
		for(String winHandle : driver.getWindowHandles()){
		    driver.switchTo().window(winHandle);
		}
		try {
			WebDriverWait wait = new WebDriverWait(driver, 30);
			wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.id("join-now"))));
		} catch (Exception e) {
			Reporter.log("`check availability` did not return a response :( ");
		}
		driver.findElement(By.id("join-now")).click();
		for(String winHandle : driver.getWindowHandles()){
		    driver.switchTo().window(winHandle);
		}
		TestRegistrationOld.register(driver);
		Assert.assertTrue(driver.findElements( By.className("depositBtn") ).size() != 0);
		Assert.assertTrue(driver.findElements( By.className("playBtn") ).size() != 0);
		driver.findElement(By.className("playBtn")).click();
		for(String winHandle : driver.getWindowHandles()){
		    driver.switchTo().window(winHandle);
		}
		Assert.assertTrue(driver.getCurrentUrl().contains("https://safeverification.eurogrand.com/fimgame?gc="));
		
	}
	
	@AfterMethod
    public void tearDown() {
		//driver.quit();
    }
	
}
