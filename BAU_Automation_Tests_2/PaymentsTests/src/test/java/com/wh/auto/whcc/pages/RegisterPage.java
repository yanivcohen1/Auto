package com.wh.auto.whcc.pages;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.internal.Locatable;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.sun.jna.platform.FileUtils;
import com.wh.auto.TestObjects.AbstractWhPageObject;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.whcc.SelfExclude;

public class RegisterPage extends AbstractWhPageObject{
	
	private By register = By.xpath("//div[@id='column-3']/div/a/span");
	private String gender;
	private String PlayersUsersName;
	private String casinoName;
	private String birthMonth;
	private String testName = null;

	public RegisterPage(Browsers browsers) {
	       super(browsers);
	    }
	
	public void register(String testName) throws InterruptedException {
		this.testName = testName;
		register();
	}
	
	public String register() throws InterruptedException {
		waitForElement(driver, By.cssSelector("#login")).click();
		waitForElement(driver, register).click();
		waitForElement(driver, By.id("title"));
		new Select(driver.findElement(By.id("title"))).selectByVisibleText(getGender());
		driver.findElement(By.id("title"));//Herr //Mr
		driver.findElement(By.id("firstName")).clear();
		driver.findElement(By.id("firstName")).sendKeys("first");
		driver.findElement(By.id("lastName")).clear();
		driver.findElement(By.id("lastName")).sendKeys("last");
		new Select(driver.findElement(By.id("birthDay"))).selectByVisibleText("01");
		new Select(driver.findElement(By.id("birthMonth"))).selectByVisibleText(getBirthMonth());
		new Select(driver.findElement(By.id("birthYear"))).selectByVisibleText("1996");
		driver.findElement(By.id("email")).clear();
		driver.findElement(By.id("email")).sendKeys("test@playtech.com");
		new Select(driver.findElement(By.id("country"))).selectByVisibleText("United Kingdom");
		driver.findElement(By.id("city")).clear();
		driver.findElement(By.id("city")).sendKeys("city");
		driver.findElement(By.id("address")).clear();
		driver.findElement(By.id("address")).sendKeys("addr");
		driver.findElement(By.id("postCode")).clear();
		driver.findElement(By.id("postCode")).sendKeys("12345");
		driver.findElement(By.id("phone")).clear();
		driver.findElement(By.id("phone")).sendKeys("123456789");
		driver.findElement(By.id("userName")).clear();
		String userName = Utility.getTimeStamp();
		driver.findElement(By.id("userName")).sendKeys(userName);
		driver.findElement(By.id("userPassword")).clear();
		driver.findElement(By.id("userPassword")).sendKeys("123456a");
		driver.findElement(By.id("passwordVerify")).clear();
		driver.findElement(By.id("passwordVerify")).sendKeys("123456a");
		driver.findElement(By.id("termsAndConditions")).click();
		new Select(driver.findElement(By.id("currency"))).selectByVisibleText("EUR");
		driver.findElement(By.cssSelector("button.large")).click();
		Thread.sleep(20000);
		try {
			waitForElementClick(driver,
					By.cssSelector("#portlet-small-icon-bar > p > a"), 15)
					.click();
		} catch (Exception e) {
		}
		return userName;
		
	}
	
	private String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	private String getPlayersUsersName() {
		return PlayersUsersName;
	}

	public void setPlayersUsersName(String playersUsersName) {
		PlayersUsersName = playersUsersName;
	}
	
	private String getCasinoName() {
		return casinoName;
	}

	public void setCasinoName(String casinoName) {
		this.casinoName = casinoName;
	}

	private String getBirthMonth() {
		return birthMonth;
	}

	public void setBirthMonth(String birthMonth) {
		this.birthMonth = birthMonth;
	}
}
