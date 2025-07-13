package com.wh.auto.eurogrand.desktop.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.wh.auto.TestObjects.AbstractWhPageObject;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.WebDriverUtils;

public class MainWebPage extends AbstractWhPageObject{

	private String url;
	private String language;
	private Browsers browsers;
	private String password;
	private String userName;

	/**
	 * MainWeb Page Constructor
	 * 
	 * @param driver
	 */
	public MainWebPage(Browsers browsers) {
		super(null);
		this.browsers = browsers;
	}
	
	public WebDriver openUrl(String browserType) {
		driver = browsers.getDriver(browserType);
		driver.get(getUrl());//"http://www.21nova.com/uk"
		if (!getLanguage().isEmpty()) {
			driver.get(getLanguage());
		}
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
		}
		return driver;
    }

	public String readBalance() throws InterruptedException {
		try {
			waitForElement(driver, By.cssSelector("#text > p > a"), 20).click();
		} catch (Exception e) {
		}
		return waitForElement(driver, By.cssSelector("span.balance-in-header"), 25).getText();
	}
	
	public void login(){
		//driver.switchTo().frame("frameTopLogin");
		driver.findElement(By.name("username")).clear();
		driver.findElement(By.name("username")).sendKeys(getUserName());//"YY1005081227"
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys(getPassword());
		driver.findElement(By.cssSelector("#login > button")).click();
	}

	private String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	private String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	private String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	private String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}