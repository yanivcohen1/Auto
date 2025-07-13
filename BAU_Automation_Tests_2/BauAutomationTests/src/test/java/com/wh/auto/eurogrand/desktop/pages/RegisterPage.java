package com.wh.auto.eurogrand.desktop.pages;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.sun.jna.platform.FileUtils;
import com.wh.auto.TestObjects.AbstractWhPageObject;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;

public class RegisterPage extends AbstractWhPageObject{
	
	//@FindBy(xpath = "//div[@id='column-3']/div/a/span")
	//private WebElement register;
	//private By register = By.linkText("Join Now");
	//private WebElement register = driver.findElement(By.xpath("//div[@id='column-3']/div/a/span"));
	//document.evaluate("//div[@id='column-6']/div[3]/a/span", document, null, 9, null).singleNodeValue;
	private String gender;
	private String PlayersUsersName;
	private String casinoName;
	private String birthMonth;
	private String testName = null;
	private String regBtnCss;

	public RegisterPage(Browsers browsers) {
	       super(browsers);
	    }
	
	public void register(String testName) throws InterruptedException {
		this.testName = testName;
		register();
	}
	
	public void register() throws InterruptedException {
		//driver.get("http://www.eurogrand.com" + "/");
		//driver.manage().window().maximize();
		driver.findElement(By.cssSelector(getRegBtnCss())).click();//Join Now
		//((JavascriptExecutor) driver).executeScript("$( '#p_p_id_banners_WAR_contentportlet_INSTANCE_jSBjIkGslw81_ a.btn-register' ).click()");
		waitForElement(driver, By.id("firstName")).clear();
		driver.findElement(By.id("firstName")).sendKeys("first");
		driver.findElement(By.id("lastName")).clear();
		driver.findElement(By.id("lastName")).sendKeys("last");
		new Select(driver.findElement(By.id("birthDay"))).selectByVisibleText("01");
		driver.findElement(By.cssSelector("option[value=\"01\"]")).click();
		new Select(driver.findElement(By.id("birthMonth"))).selectByVisibleText(getBirthMonth());
		new Select(driver.findElement(By.id("birthYear"))).selectByVisibleText("1983");
		driver.findElement(By.cssSelector("option[value=\"1983\"]")).click();
		driver.findElement(By.id("male")).click();
		driver.findElement(By.id("email")).clear();
		driver.findElement(By.id("email")).sendKeys("test@playtech.com");
		driver.findElement(By.cssSelector("option[value=\"SB\"]")).click();
		driver.findElement(By.id("city")).clear();
		driver.findElement(By.id("city")).sendKeys("city");
		driver.findElement(By.id("address")).clear();
		driver.findElement(By.id("address")).sendKeys("address");
		driver.findElement(By.id("postCode")).clear();
		driver.findElement(By.id("postCode")).sendKeys("123123");
		driver.findElement(By.id("mobile")).click();
		driver.findElement(By.id("mobile")).clear();
		driver.findElement(By.id("mobile")).sendKeys("12345678");
		driver.findElement(By.id("userName")).click();
		driver.findElement(By.id("userName")).clear();
		String userName = Utility.getTimeStamp();
		driver.findElement(By.id("userName")).sendKeys(userName);
		driver.findElement(By.id("userPassword")).clear();
		driver.findElement(By.id("userPassword")).sendKeys("123456");
		//driver.findElement(By.id("passwordVerify")).clear();
		driver.findElement(By.id("passwordVerify")).sendKeys("123456");
		driver.findElement(By.id("termsAndConditions")).click();
		Thread.sleep(4000);
		boolean pass = false;
		for (int i = 0; i < 15; i++) {
			try {
				driver.findElement(By.cssSelector("#registration-account span.error"));
			} catch (Exception e) {
				pass = true;
				break;
			}
		}
		if (!pass) {
			throw new IllegalArgumentException("error username "+ userName);
		}
		waitForElement(driver, By.cssSelector("button.btn-2")).click();
		new WebDriverWait(driver, 15).until(
		        ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#portlet-small-icon-bar a")));
		Thread.sleep(20000);
		try {
			waitForElement(driver, By.cssSelector("#text > p > a"), "close popup2").click();
		} catch (Exception e) {}
		waitForElementSafeClick(driver, By.cssSelector("#portlet-small-icon-bar a"), "close popup");
		String playersUsersNamesFile = (new File(Utility.get_mainTestsBuildPath())).getParent() + getPlayersUsersName();
		//String playersUsersNamesFile = Utility.get_mainTestsBuildPath() + getPlayersUsersName();
		String cookieValue = Utility.readTrackingCookie(driver);
		if(testName == null){
			testName = getCasinoName();
		}
		String msg = userName +','+ cookieValue + ',' + testName;
		System.out.println(msg);
		Utility.writeTofile(playersUsersNamesFile, msg);
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
	
	public String getRegBtnCss() {
		return regBtnCss;
	}

	public void setRegBtnCss(String regBtnCss) {
		this.regBtnCss = regBtnCss;
	}
}
