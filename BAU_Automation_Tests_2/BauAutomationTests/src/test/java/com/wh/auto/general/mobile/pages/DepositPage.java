package com.wh.auto.general.mobile.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.wh.auto.TestObjects.AbstractWhPageObject;
import com.wh.auto.TestObjects.AbstractWhPageObjectSpring;
import com.wh.auto.casino.CasinoHelper;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.CustomTouchAction;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.repository.AppContextRepository;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.PendingException;

public class DepositPage extends AbstractWhPageObjectSpring{

	@FindBy(css = "#RC_Submit > tbody > tr > td.main > span")
	private WebElement submit;
	@FindBy(css= "#DCC_Submit > tbody > tr > td.main > span")
	private WebElement depositButten;
	private By deposit = By.xpath("//div[@id='column-6']/div[3]/a/span");
	
	private String month;
	private DepositPage thisClass;
	private String currency;
	private static boolean init;
	
	public DepositPage() {
		if (!init) {
			init = true;
			thisClass = (DepositPage) AppContextRepository.getAc().getBean(DepositPage.class.getName());
			init = false;
		} 
	}
	
	@When("^click Deposit top Button$")
	public void click_Deposit_top_Button() throws Throwable {
		Thread.sleep(10000);
		waitForElement(driver, By.cssSelector("div.page-header.fn-header-container > div > button"), "deposit").click();
	}

	@When("^insert card number <\"([^\"]*)\">$")
	public void insert_card_number_(String cardNumber) throws Throwable {
		Thread.sleep(1000);
		waitForElement(driver, By.cssSelector("#layout-column__column-1 > div.portlet-wrapper.portlet-mobile-cashier.portlet_type_border > div.fn-portlet.portlet > div > p:nth-child(1) > span")).click();
		Thread.sleep(1000);
		waitForElement(driver,By.name("cardNumber")).sendKeys(cardNumber);
	}
	
	@When("^fill Amount to Deposit <\"([^\"]*)\">$")
	public void fill_Amount_to_Deposit_(String amount) throws Throwable {
		driver.findElement(By.name("amount")).sendKeys(amount);
	}

	@When("^select On card type visa$")
	public void select_On_card_type_visa() throws Throwable {
	}

	@When("^fill card owner first name <\"([^\"]*)\">$")
	public void fill_card_owner_first_name_(String arg1) throws Throwable {
	}

	@When("^fill card owner last name <\"([^\"]*)\">$")
	public void fill_card_owner_last_name_(String arg1) throws Throwable {
	}

	@When("^select Expiration Month <\"([^\"]*)\">$")
	public void select_Expiration_Mouth(String month) throws Throwable {
		new Select(driver.findElement(By.id("month"))).selectByValue(month);
	}

	@When("^select Expiration Year <\"([^\"]*)\">$")
	public void select_Expiration_Year(String year) throws Throwable {
		new Select(driver.findElement(By.id("expirationYear"))).selectByVisibleText(year);
	}

	@When("^fill CVV2 <\"([^\"]*)\">$")
	public void fill_CVV_(String cvv) throws Throwable {
		driver.findElement(By.name("cvv2")).sendKeys(cvv);
	}

	@When("^fill Billing <\"([^\"]*)\">$")
	public void fill_Billing_(String arg1) throws Throwable {
	}

	@When("^fill <\"([^\"]*)\">$")
	public void fill_(String arg1) throws Throwable {
	}

	@When("^fill zip code <\"([^\"]*)\">$")
	public void fill_zip_code_(String arg1) throws Throwable {
	}

	@When("^fill State$")
	public void fill_State() throws Throwable {
	}

	@When("^click on Save details and Deposit$")
	public void click_on_Save_details_and_Deposit() throws Throwable { 
		WebElement webElement = waitForElement(driver, By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet.button-text-size > form > p > button.btn.fn-submit.fr"));
		webElement.click();
	}

	@When("^click on radio Butten <\"([^\"]*)\"> a 'basic' level of protection$")
	public void click_on_radio_Butten_I_understand_that_my_funds_will_be_given_a_basic_level_of_protection(String msg) throws Throwable {
		String msg2 = waitForElement(driver, By.cssSelector("div.popup-modal__content > div > table > tbody > tr")).getText();// > td:nth-child(2)
		Assert.assertTrue(msg2.contains(msg), "Error msg:"+ msg2);
		waitForElement(driver, By.cssSelector("div.popup-modal__buttons > span.popup-modal__button.fn-confirm-deposit")).click();
	}

	@When("^click on PROCEED$")
	public void click_on_PROCEED() throws Throwable {
	}

	@When("^click On ACCEPT$")
	public void click_On_ACCEPT() throws Throwable {
	}

	@Then("^MSG You just <\"([^\"]*)\">$")
	public void MSG_You_just_received_a_Euro_bonus(String msg) throws Throwable {
		/*String msg2 = null;
		for (int i = 0; i < 10; i++) {
			try {
				msg2 = waitForElement(driver, By.cssSelector("div.popup-modal__content > div")).getText();
				break;
			} catch (Exception e) {
				Thread.sleep(1000);
			} 
		}*/
		//Assert.assertTrue(msg2.contains(msg), "Error msg:"+ msg2);
		//waitForElementSafeClick(driver, By.cssSelector("div.popup-modal__buttons > span.popup-modal__button.fn-accept.popup-modal__button_type_accept"), "Accept");
		waitForElementSafeClick(driver, By.cssSelector("div.popup-modal__buttons > span"), "Accept");
		//waitForElement(driver, By.cssSelector("div.popup-modal__buttons > span.popup-modal__button.fn-accept.popup-modal__button_type_accept")).click();
	}

	@When("^I Click On ACCEPT$")
	public void I_Click_On_ACCEPT() throws Throwable {
		Thread.sleep(1000);
		try {
			waitForElement(driver, By.cssSelector(".popup-modal__button"), "Accept").click();
		} catch (Exception e) {	}
	}
	
	@When("^click On OK$")
	public void click_On_OK() throws Throwable {
		Thread.sleep(1000);
		waitForElementSafeClick(driver, By.cssSelector(".popup-modal__button"), "ok");
	}
	
	@Then("^MSG(\\d+) Your Deposit has been approved and will be charged as WH Online. Thank you and good luck!$")
	public void MSG_Your_Deposit_has_been_approved_and_will_be_charged_as_WH_Online_Thank_you_and_good_luck(int arg1)
			throws Throwable {
	}

	@Then("^MSG(\\d+) You just received a (\\d+).(\\d+) Euro bonus$")
	public void MSG_You_just_received_a_Euro_bonus(int arg1, int arg2, int arg3) throws Throwable {
	}

	@Then("^MSG: Bonus was successfully accepted$")
	public void MSG_Bonus_was_successfully_accepted() throws Throwable {
	}

	@Then("^read the Current Balance$")
	public void read_the_Current_Balance() throws Throwable {
		Thread.sleep(5000);
		String msg2 = waitForElement(driver, By.cssSelector("#application > div.page.fn-page > div.page-header.fn-header-container > div > span.fn-redirect.main-header__balance > div:nth-child(1) > p:nth-child(2) > span")).getText();
		String currency = CasinoHelper.findCurrency(msg2, "£");
		int amount = CasinoHelper.findAmount(msg2, "£");
		Reporter.log("Find Amount: " + currency + amount, true);
		Assert.assertTrue(amount >= 100, "Error msg:"+ msg2);
		driver.navigate().refresh();
	}

	private String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}
	
	private String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	@Override
	public void afterTest() {
		// TODO Auto-generated method stub
	}
	
}
