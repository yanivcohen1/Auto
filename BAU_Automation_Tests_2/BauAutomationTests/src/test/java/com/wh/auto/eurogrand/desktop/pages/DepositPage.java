package com.wh.auto.eurogrand.desktop.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

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
	private By deposit = By.cssSelector("#column-3 > div.header-element.wrap-customLink.boundingBox.bBox-first > a");
	//#RC_Submit > tbody > tr > td.main > span
	private String month;
	
	public DepositPage(Browsers browsers) { 
		   super(browsers);
	    }
	
	public void deposit() throws InterruptedException {
		waitForElementSafeClick(driver, By.cssSelector("#column-3 a"), "deposit");
		Thread.sleep(7000);
		driver.switchTo().frame("cashier-frame");
		WebElement element = waitForElement(driver, By.id("RC_Amount"));
		Thread.sleep(2000);
		element.clear();
		new Select(driver.findElement(By.id("RC_ExpirationMonth"))).selectByVisibleText(getMonth());
		new Select(driver.findElement(By.id("RC_ExpirationYear"))).selectByVisibleText("2025");
		driver.findElement(By.id("RC_CVV2")).clear();
		driver.findElement(By.id("RC_CVV2")).sendKeys("111");
		new Select(driver.findElement(By.id("RC_CardType"))).selectByVisibleText("Visa");
		driver.findElement(By.id("RC_CardNumber")).clear();
		driver.findElement(By.id("RC_CardNumber")).sendKeys("1111111111111111");
		Thread.sleep(2000);
		driver.findElement(By.cssSelector("#RC_Submit > tbody > tr > td.main > span")).click();
		(new WebDriverWait(driver, 60)).until(ExpectedConditions
				.visibilityOf(driver.findElement(By.id("UM_OKButtonText")))).click();
	}
	
	public String depositNext() throws InterruptedException {//100 111
		waitForElement(driver, By.id("D_Amount")).click();
		driver.findElement(By.id("D_Amount")).clear();
		driver.findElement(By.id("D_Amount")).sendKeys("100");
		driver.findElement(By.id("DCC_CVV2")).clear();
		driver.findElement(By.id("DCC_CVV2")).sendKeys("111");
		Thread.sleep(3000);
		driver.findElement(By.cssSelector("#DCC_Submit > tbody > tr > td.main > span")).click();		
		waitForElement(driver, By.id("depositConfirmed")).click();
		waitForElement(driver, By.id("UM_OKButtonText")).click();
		Thread.sleep(10000);
		driver.switchTo().defaultContent();
		return driver.findElement(By.cssSelector("span.balance-in-header")).getText();
	}

	private String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}
	
}
