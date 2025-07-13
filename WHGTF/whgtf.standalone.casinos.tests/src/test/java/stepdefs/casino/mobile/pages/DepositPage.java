package stepdefs.casino.mobile.pages;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
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

import com.wh.auto.TestObjects.AbstractWhPageObject;
import com.wh.auto.TestObjects.AbstractWhPageObjectSpring;
import com.wh.auto.casino.CasinoHelper;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.CustomTouchAction;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.repository.AppContextRepository;
import com.williamhill.whgtf.asl.AutomationScriptingLanguage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DepositPage extends WebDriverUtils{
	
	private String month;
	private DepositPage thisClass;
	private String currency;
	private static boolean init;
	private Logger log = LogManager.getRootLogger();

	public DepositPage() {
		if (!init) {
			init = true;
			thisClass = (DepositPage) AppContextRepository.getAc().getBean(DepositPage.class.getName());
			assertTrue(navigateToRootElement());
			init = false;
		} 
	}
	
	@Given("^User Name \"(.*?)\" Password \"(.*?)\" Login$")
	public void user_Name_Password_Login(String name, String pass) throws Throwable {
		assertTrue(waitForVisibilityOfElementByXPath("//*[@id='application']/div[2]/div[1]/div[1]/div/button[1]"));
		assertTrue(navigateToElementByXpath("//div[@id='application']/div[2]/div/div/div/button"));
		assertTrue(click());
		assertTrue(navigateToRootElement());
		assertTrue(waitForVisibilityOfElementByName("userName"));
		assertTrue(navigateToElementByName("userName"));
		assertTrue(typeIn(name));
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementByName("password"));
		assertTrue(typeIn(pass));
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementByXpath("//button[@type='submit']"));
		assertTrue(click());
	}
	
	@When("^User click on Deposit top Button$")
	public void user_click_on_Deposit_top_Button() throws Throwable {
		Thread.sleep(5000);
		assertTrue(navigateToRootElement());
		String css = "div.page-header.fn-header-container > div > button";
		assertTrue(waitForVisibilityOfElementByCss(css));
		assertTrue(navigateToElementByCSS(css));
		assertTrue(click());
	}

	@When("^User insert card number <\"(.*?)\">$")
	public void user_insert_card_number(String card) throws Throwable {
		Thread.sleep(2000);
		assertTrue(navigateToRootElement());
		String id = "add-card-cardNumber";
		assertTrue(waitForVisibilityOfElementById(id));
		assertTrue(navigateToElementById(id));
		assertTrue(typeIn(card));
	}
	
	@When("^User fill Amount to Deposit <\"([^\"]*)\">$")
	public void fill_Amount_to_Deposit_(String amount) throws Throwable {
		assertTrue(navigateToRootElement());
		String id = "add-card-amount";
		assertTrue(waitForVisibilityOfElementById(id));
		assertTrue(navigateToElementById(id));
		assertTrue(typeIn("0"));
		assertTrue(typeIn(amount));
	}

	@When("^User select On card type visa$")
	public void select_On_card_type_visa() throws Throwable {
		
	}

	@When("^User fill card owner first name <\"([^\"]*)\">$")
	public void fill_card_owner_first_name_(String arg1) throws Throwable {
	}

	@When("^User fill card owner last name <\"([^\"]*)\">$")
	public void fill_card_owner_last_name_(String arg1) throws Throwable {
	}

	@When("^User select Expiration Month <\"([^\"]*)\">$")
	public void select_Expiration_Mouth(String month) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("month"));
		assertTrue(selectDropdownOptionByVisibleText("01"));
	}

	@When("^User select Expiration Year <\"([^\"]*)\">$")
	public void select_Expiration_Year(String year) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("expirationYear"));
		assertTrue(selectDropdownOptionByVisibleText("2021"));
	}

	@When("^User fill CVV2 <\"([^\"]*)\">$")
	public void fill_CVV_(String cvv) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("add-card-cvv2"));
		assertTrue(typeIn(cvv));
	}

	@When("^User fill Billing <\"([^\"]*)\">$")
	public void fill_Billing_(String arg1) throws Throwable {
	}

	@When("^User fill <\"([^\"]*)\">$")
	public void fill_(String arg1) throws Throwable {
	}

	@When("^User fill zip code <\"([^\"]*)\">$")
	public void fill_zip_code_(String arg1) throws Throwable {
	}

	@When("^User fill State$")
	public void fill_State() throws Throwable {
	}

	@When("^User click on Save details and Deposit$")
	public void click_on_Save_details_and_Deposit() throws Throwable { 
		log.info("submit");
		
		assertTrue(navigateToRootElement());
		assertTrue(waitForVisibilityOfElementByXpath("//button[@type='submit']"));
		assertTrue(navigateToElementByXpath("//button[@type='submit']"));
		assertTrue(click());
	}

	@When("^User click on radio Butten \"(.*?)\"$")
	public void click_on_radio_Butten_I_understand_that_my_funds_will_be_given_a_basic_level_of_protection(String msg) throws Throwable {
		assertTrue(navigateToRootElement());
		String msgCss = "div.fn-popup-loader";
		assertTrue(waitForVisibilityOfElementByCss(msgCss));
		assertTrue(navigateToElementByCSS(msgCss));
		String txt = getText();
		assertTrue(txt.contains(msg));
	}

	@When("^User click on PROCEED$")
	public void click_on_PROCEED() throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementByCSS("span.popup-modal__button.fn-accept.popup-modal__button_type_accept"));
		assertTrue(click());	
	}

	@When("^User click On ACCEPT$")
	public void click_On_ACCEPT() throws Throwable {
	}

	@Then("^User MSG You just \"(.*?)\"$")
	public void user_MSG_You_just(String msg) throws Throwable {
		Thread.sleep(3000);
		assertTrue(navigateToRootElement());
		String msgCss = "div.freespin__popup-message-available";
		assertTrue(waitForVisibilityOfElementByCss(msgCss));
		assertTrue(navigateToElementByCSS(msgCss));
		String txt = getText();
		assertTrue(txt.contains(msg));
	}

	@When("^User Click On ACCEPT$")
	public void I_Click_On_ACCEPT() throws Throwable {
		Thread.sleep(2000);
		assertTrue(navigateToRootElement());
		String msgCss = "div.popup-modal__buttons > span";
		assertTrue(waitForVisibilityOfElementByCss(msgCss));
		assertTrue(navigateToElementByCSS(msgCss));
		assertTrue(click());
	}
	
	@When("^User click On OK$")
	public void click_On_OK() throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementByCSS("div.popup-modal__buttons > span"));
		assertTrue(click());
	}
	
	@Then("^MSG Your \"(.*?)\"$")
	public void msg_Your(String msg) throws Throwable {
		//div.fn-popup-loader
		assertTrue(navigateToRootElement());
		String msgCss = "div.fn-popup-loader";
		assertTrue(waitForVisibilityOfElementByCss(msgCss));
		assertTrue(navigateToElementByCSS(msgCss));
		String txt = getText();
		//assertTrue(txt, txt.contains(msg));
	}

	@Then("^MSG You just received a \"(.*?)\" Euro bonus$")
	public void MSG_You_just_received_a_Euro_bonus(String amount) throws Throwable {
	}

	@Then("^MSG Bonus was successfully accepted$")
	public void MSG_Bonus_was_successfully_accepted() throws Throwable {
	}

	@Then("^User read the Current Balance$")
	public void read_the_Current_Balance() throws Throwable {
		Thread.sleep(5000);
		assertTrue(navigateToRootElement());
		String msgCss = "span.fn-redirect.main-header__balance > div:nth-child(1) > p:nth-child(2) > span";
		assertTrue(waitForVisibilityOfElementByCss(msgCss));
		assertTrue(navigateToElementByCSS(msgCss));
		String balance = getText();
		String currency = CasinoHelper.findCurrency(balance, "£");
		int amount = CasinoHelper.findAmount(balance, "£");
		Reporter.log("Find Amount: " + currency + amount, true);
		assertTrue("Error msg:"+ balance, amount >= 100);
		//Assert.assertTrue(amount >= 100, "Error msg:"+ balance);
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
	
}