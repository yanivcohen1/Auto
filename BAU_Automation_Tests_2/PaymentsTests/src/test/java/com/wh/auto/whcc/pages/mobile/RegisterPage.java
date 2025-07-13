package com.wh.auto.whcc.pages.mobile;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.openqa.selenium.By;
import org.openqa.selenium.By.ById;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.sun.jna.platform.FileUtils;
import com.wh.auto.TestObjects.AbstractWhPageObject;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.CustomTouchAction;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;

public class RegisterPage extends AbstractWhPageObject{
	
	private String gender;
	private String PlayersUsersName;
	private String casinoName;
	private String birthMonth;
	private String joinNow;

	public RegisterPage(Browsers browsers) {
	       super(browsers);
	    }
	
	public String register() throws InterruptedException {
		waitForElement(driver, By.cssSelector("#application > div.page.fn-page > div.page-header.fn-header-container button.btn.btn_type_register.fr.fn-redirect")).click();
		Thread.sleep(2000);
		waitForElement(driver, By.name("title"));
		new Select(driver.findElement(By.name("title"))).selectByValue("Mr");
		driver.findElement(By.name("firstname")).sendKeys("first");
		driver.findElement(By.name("lastname")).clear();
		driver.findElement(By.name("lastname")).sendKeys("last");
		new Select(driver.findElement(By.id("day"))).selectByVisibleText("5");
		new Select(driver.findElement(By.id("month"))).selectByValue("01");
		new Select(driver.findElement(By.id("year"))).selectByValue("1980");
		driver.findElement(By.name("email")).clear();
		driver.findElement(By.name("email")).sendKeys("test@playtech.com");
		driver.findElement(By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet > div.form__actions.fn-register-controls > button")).click();
		waitForElement(driver, By.id("countryCode"));
		new Select(driver.findElement(By.id("countryCode"))).selectByVisibleText("United Kingdom");
		driver.findElement(By.name("state")).clear();
		driver.findElement(By.name("state")).sendKeys("state");
		driver.findElement(By.name("city")).clear();
		driver.findElement(By.name("city")).sendKeys("city");
		driver.findElement(By.name("address")).clear();
		driver.findElement(By.name("address")).sendKeys("address");
		driver.findElement(By.name("address2")).clear();
		driver.findElement(By.name("address2")).sendKeys("adress2");
		driver.findElement(By.name("address3")).clear();
		driver.findElement(By.name("address3")).sendKeys("123123123");
		driver.findElement(By.name("zip")).clear();
		driver.findElement(By.name("zip")).sendKeys("123");
		driver.findElement(By.name("cellphone")).clear();
		driver.findElement(By.name("cellphone")).sendKeys("+44123123123");
		driver.findElement(By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet > div.form__actions.fn-register-controls > button.btn.btn_type_success.fn-next")).click();
		String userName = Utility.getTimeStamp();
		driver.findElement(By.name("userName")).clear();
		driver.findElement(By.name("userName")).sendKeys(userName);
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys("123456");
		driver.findElement(By.name("passwordVerify")).clear();
		driver.findElement(By.name("passwordVerify")).sendKeys("123456");
		driver.findElement(By.id("terms-checkbox")).click();
		driver.findElement(By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet > div.form__actions.fn-register-controls > button.btn.btn_type_create_account.fn-submit")).click();

		Thread.sleep(5000);
		WebElement depositNow = (new WebDriverWait(driver, 30)).until(ExpectedConditions
				.visibilityOfElementLocated(By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet > article a.btn")));
		depositNow.click();
		return userName;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public void setPlayersUsersName(String playersUsersName) {
		PlayersUsersName = playersUsersName;
	}

	public void setCasinoName(String casinoName) {
		this.casinoName = casinoName;
	}

	public void setBirthMonth(String birthMonth) {
		this.birthMonth = birthMonth;
	}

	public String getJoinNow() {
		return joinNow;
	}

	public void setJoinNow(String joinNow) {
		this.joinNow = joinNow;
	}
}
