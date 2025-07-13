package com.wh.auto.nova21.desktop.pages;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
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

public class RegisterPage extends AbstractWhPageObject{
	
	//@FindBy(xpath = "//div[@id='column-3']/div/a/span")
	//private WebElement register;
	private By register = By.xpath("//div[@id='column-3']/div/a/span");
	//private WebElement register = driver.findElement(By.xpath("//div[@id='column-3']/div/a/span"));
	//document.evaluate("//div[@id='column-6']/div[3]/a/span", document, null, 9, null).singleNodeValue;
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
		if (testName.contains("_HP_")) {
			
		}
		register();
	}
	
	public void register() throws InterruptedException {
		//driver = browsers.get_Driver();
		try {
			WebElement regButten = waitForElement(driver, register);
			if (testName == null) {
				regButten.click();
			}else if (testName.contains("_HP_")) {
				regButten.click();
			}
		} catch (Exception e) {}
		waitForElement(driver, By.id("title"));
		new Select(driver.findElement(By.id("title"))).selectByVisibleText(getGender());//Herr //Mr
		driver.findElement(By.id("firstName")).clear();
		driver.findElement(By.id("firstName")).sendKeys("first");
		driver.findElement(By.id("lastName")).clear();
		driver.findElement(By.id("lastName")).sendKeys("last");
		new Select(driver.findElement(By.id("birthDay"))).selectByVisibleText("01");
		new Select(driver.findElement(By.id("birthMonth"))).selectByVisibleText(getBirthMonth());// "August"
		new Select(driver.findElement(By.id("birthYear"))).selectByVisibleText("1980");
		driver.findElement(By.id("email")).clear();
		driver.findElement(By.id("email")).sendKeys("test@playtech.com");
		//driver.findElement(By.id("emailVerification")).clear();
		//driver.findElement(By.id("emailVerification")).sendKeys("test@playtech.com");
		new Select(driver.findElement(By.id("country"))).selectByVisibleText("Gibraltar (UK)");
		driver.findElement(By.id("city")).clear();
		driver.findElement(By.id("city")).sendKeys("city");
		driver.findElement(By.id("address")).clear();
		driver.findElement(By.id("address")).sendKeys("addr");
		driver.findElement(By.id("postCode")).clear();
		driver.findElement(By.id("postCode")).sendKeys("12345");
		driver.findElement(By.id("mobile")).clear();
		driver.findElement(By.id("mobile")).sendKeys("123456789");
		driver.findElement(By.id("userName")).clear();
		String userName = Utility.getTimeStamp();
		driver.findElement(By.id("userName")).sendKeys(userName);
		driver.findElement(By.id("userPassword")).clear();
		driver.findElement(By.id("userPassword")).sendKeys("123456");
		driver.findElement(By.id("passwordVerify")).clear();
		driver.findElement(By.id("passwordVerify")).sendKeys("123456");
		driver.findElement(By.id("termsAndConditions")).click();
		//new Select(driver.findElement(By.id("currency"))).selectByVisibleText("EUR");
		driver.findElement(By.cssSelector("button.large")).click();
		Thread.sleep(20000);
		//waitForElement(driver, By.linkText("Close"), 15).click();
		//new WebDriverWait(driver, 15).until(ExpectedConditions.presenceOfElementLocated(
		//		By.cssSelector(".cong-button.fn-cashier1")));
		try {
			if (getCasinoName().contains("21novaWebEN")) {
				waitForElement(driver, By.cssSelector("#text > p > a"), 25).click();
				Thread.sleep(10000);
			}
		} catch (Exception e) {}
		waitForElement(driver, By.cssSelector(".popupClose"), 25).click();
		String playersUsersNamesFile = (new File(Utility.get_mainTestsBuildPath())).getParent() + getPlayersUsersName();
		String cookieValue = Utility.readTrackingCookie(driver);
		if(testName == null){
			testName = getCasinoName();
		}
		String msg = userName +','+ cookieValue+ ',' + testName;
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
}
