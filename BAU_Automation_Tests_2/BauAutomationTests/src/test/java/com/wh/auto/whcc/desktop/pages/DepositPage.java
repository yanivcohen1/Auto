package com.wh.auto.whcc.desktop.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.wh.auto.TestObjects.AbstractWhPageObject;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.WebDriverUtils;

public class DepositPage extends AbstractWhPageObject{

	@FindBy(css = "#RC_Submit > tbody > tr > td.main > span")
	private WebElement submit;
	//private By submit = By.cssSelector("#RC_Submit > tbody > tr > td.main > span");
	@FindBy(css= "#DCC_Submit > tbody > tr > td.main > span")
	private WebElement depositButten;
	//private By depositButten = By.cssSelector("#DCC_Submit > tbody > tr > td.main > span");
	public static By deposit = By.cssSelector("#column-3 > div.header-element.wrap-customLink.boundingBox.bBox-first > a");
	//#RC_Submit > tbody > tr > td.main > span
	private String month;
	
	public DepositPage(Browsers browsers) { 
		   super(browsers);
	    }
	
	public void deposit() throws InterruptedException {
		deposit(null);
	}
	
	public void deposit(String amount) throws InterruptedException {
		//driver = browsers.get_Driver();
		waitForElement(driver, deposit, 25).click();//deposit
		Thread.sleep(5000);
		waitForElement(driver, By.id("cashier-frame"), 30);
		Thread.sleep(5000);
		driver.switchTo().frame(driver.findElement(By.id("cashier-frame")));
		driver.findElement(By.id("RC_Amount")).clear();
		if (amount != null) {
			driver.findElement(By.id("RC_Amount")).sendKeys(amount);
		}else{
			driver.findElement(By.id("RC_Amount")).sendKeys("");
		}
		new Select(driver.findElement(By.id("RC_CardType"))).selectByVisibleText("Visa");
		driver.findElement(By.id("RC_CardNumber")).clear();
		driver.findElement(By.id("RC_CardNumber")).sendKeys("1111111111111111");
		new Select(driver.findElement(By.id("RC_ExpirationMonth"))).selectByVisibleText(getMonth());//01
		new Select(driver.findElement(By.id("RC_ExpirationYear"))).selectByVisibleText("2024");
		driver.findElement(By.id("RC_CVV2")).clear();
		driver.findElement(By.id("RC_CVV2")).sendKeys("111");
		Thread.sleep(1000);
		submit.click();//submit
		new WebDriverWait(driver, 35).until(ExpectedConditions.visibilityOf(
		driver.findElement(By.id("UM_Buttons")))).click();//OK button
		//new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOf(
		//driver.findElement(By.id("UM_OKButtonText")))).click();//OK button
	}
	
	public String depositNext() throws InterruptedException {//100 111
		//driver = browsers.get_Driver();
		//driver.switchTo().frame(driver.findElement(By.id("cashier-frame")));
		waitForElement(driver, By.id("D_Amount"), 25).sendKeys("100");
		waitForElement(driver, By.id("DCC_CVV2"), 25).sendKeys("111");
		Thread.sleep(1000);
		//new WebDriverWait(driver, 25).until(ExpectedConditions.visibilityOf(
		//		driver.findElement(By.cssSelector("#DCC_Submit > tbody > tr > td.main > span")))).click();//submit
		depositButten.click();
		waitForElement(driver, By.id("depositConfirmed"), 20).click();//confirm Deposit radio
		waitForElement(driver, By.id("UM_OKButtonText"), 10).click();//confirm butten
		driver.switchTo().defaultContent();
		try {
			waitForElement(driver, By.cssSelector("button.ok"), 45).click();
			//Thread.sleep(1000);
			//waitForElement(driver, By.cssSelector("button.ok"), 25).click();
		} catch (Exception e) {
			//e.printStackTrace();
		}
		//String bonusMsg = WebDriverUtils.waitForElement(driver, By.cssSelector(".message-area"), 25).getText();
		waitForElement(driver, By.cssSelector(".popupClose"), 25).click();
		return null;
	}

	private String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}
	
}
