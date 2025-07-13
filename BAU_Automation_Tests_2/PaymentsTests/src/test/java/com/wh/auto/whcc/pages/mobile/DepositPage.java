package com.wh.auto.whcc.pages.mobile;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.wh.auto.TestObjects.AbstractWhPageObject;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.CustomTouchAction;
import com.wh.auto.common.WebDriverUtils;

public class DepositPage extends AbstractWhPageObject{

	@FindBy(css = "#RC_Submit > tbody > tr > td.main > span")
	private WebElement submit;
	//private By submit = By.cssSelector("#RC_Submit > tbody > tr > td.main > span");
	@FindBy(css= "#DCC_Submit > tbody > tr > td.main > span")
	private WebElement depositButten;
	//private By depositButten = By.cssSelector("#DCC_Submit > tbody > tr > td.main > span");
	private By deposit = By.xpath("//div[@id='column-6']/div[3]/a/span");
	//#RC_Submit > tbody > tr > td.main > span
	private String month;
	
	public DepositPage(Browsers browsers) { 
		   super(browsers);
	    }
	
	public void deposit() throws InterruptedException {
		Thread.sleep(2000);
		//driver = browsers.get_Driver();
		/*driver.get(baseUrl + "/");
		driver.findElement(By.linkText("Login")).click();
		driver.findElement(By.id("test_passwordField")).clear();
		driver.findElement(By.id("test_passwordField")).sendKeys("123456");
		driver.findElement(By.id("test_usernameField")).clear();
		driver.findElement(By.id("test_usernameField")).sendKeys("user123");
		driver.findElement(By.cssSelector("#test_submitButton > button.gwt-Button")).click();*/
		WebElement webElement = waitForElement(driver, By.cssSelector(".fn-card-add"), 30);
		Thread.sleep(3000);
		webElement.click();//deposit
		waitForElement(driver, By.name("cardNumber"), 30).clear();//deposit
		driver.findElement(By.name("cardNumber")).sendKeys("1111111111111111");
		new Select(driver.findElement(By.id("month"))).selectByValue("01");
		new Select(driver.findElement(By.id("expirationYear"))).selectByValue("2020");
		driver.findElement(By.name("cvv2")).clear();
		driver.findElement(By.name("cvv2")).sendKeys("111");
		/*driver.findElement(By.id("firstName")).clear();
		driver.findElement(By.id("firstName")).sendKeys("first");
		driver.findElement(By.id("lastName")).clear();
		driver.findElement(By.id("lastName")).sendKeys("last");
		new Select(driver.findElement(By.id("countryCode"))).selectByValue("GB");
		driver.findElement(By.id("zip")).clear();
		driver.findElement(By.id("zip")).sendKeys("123");
		driver.findElement(By.id("billingAddress")).clear();
		driver.findElement(By.id("billingAddress")).sendKeys("addr");
		driver.findElement(By.id("city")).clear();
		driver.findElement(By.id("city")).sendKeys("city");*/
		driver.findElement(By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet.button-text-size > form > p > button.btn.fn-submit.fr")).click();
		
		/*String javascriptToExecute = "document.getElementById(\"test_submitButton\").scrollIntoView()";
		((JavascriptExecutor) driver).executeScript(javascriptToExecute,"");
		//CustomTouchAction customTouchAction = new CustomTouchAction(driver);
		//customTouchAction.scrollIntoView(By.id("test_submitButton"));
		driver.findElement(By.cssSelector("#test_submitButton > button:nth-child(1)")).click();
		Thread.sleep(5000);
		waitForElement(driver, By.cssSelector("#test_btnOk"), 30).click();//deposit
		try {
			waitForElement(driver,By.cssSelector("#test_btnClose")).click();
		} catch (Exception e) {	}
		
		//driver.findElement(By.cssSelector("#test_btnOk")).click();
		//driver.findElement(By.cssSelector("#test_btnClose")).click();
		try {
			waitForElement(driver, By.cssSelector("#test_btnCancel > button:nth-child(1)"),15).click();
		} catch (Exception e) {	}*/
		//new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOf(
		//driver.findElement(By.id("UM_OKButtonText")))).click();//OK button
	}
	
	public void depositNext(int amount) throws InterruptedException {//100 111
		//driver = browsers.get_Driver();
		//driver.switchTo().frame(driver.findElement(By.id("cashier-frame")));
		String amount_str = Integer.toString(amount);
		Thread.sleep(5000);
		waitForElement(driver, By.name("amount"), 25).sendKeys(amount_str);
		driver.findElement(By.name("amount")).clear();
		driver.findElement(By.name("amount")).sendKeys(amount_str);
		driver.findElement(By.name("cvv2")).clear();
		driver.findElement(By.name("cvv2")).sendKeys("111");
		//driver.findElement(By.cssSelector("p > button.btn")).click();
		//String bonusMsg = WebDriverUtils.waitForElement(driver, By.cssSelector(".message-area"), 25).getText();
		//waitForElement(driver, By.cssSelector("span.popup-modal__button.fn-confirm-deposit"), 30).click();
		waitForElement(driver, By.cssSelector("p > button.btn"), "Deposit").click();
		//waitForElement(driver, By.cssSelector("#depositConfirmed"), "depositConfirmed radio").click();
		waitForElement(driver, By.cssSelector("span.popup-modal__button.fn-confirm-deposit"), "depositConfirmed button").click();
		Thread.sleep(7000);
		waitForElementSafeClick(driver, By.cssSelector("span.popup-modal__button:nth-child(1)"), "Decline");
		Thread.sleep(5000);
		waitForElementSafeClick(driver, By.cssSelector("span.popup-modal__button:nth-child(1)"), "Decline");
		Thread.sleep(5000);
		waitForElementSafeClick(driver, By.cssSelector(".popup-modal__button"), "ok approve");
	}
	
	public void depositNext() throws InterruptedException {//100 111
		depositNext(100);
	}

	private String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}
	
}
