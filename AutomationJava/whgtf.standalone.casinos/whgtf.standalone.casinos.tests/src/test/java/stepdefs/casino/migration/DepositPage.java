package stepdefs.casino.migration;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import com.wh.auto.casino.CasinoHelper;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.WebDriverUtils;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import stepdefs.shared.SharedSteps;

public class DepositPage extends WebDriverUtils{
	
	private Logger log = LogManager.getRootLogger();
	
	@Given("^migUser close deposit popup$")
	public void user_close_deposit_popup() throws Throwable {
		//*[@id="view379"]/div/span
		//#view379 > div > span
		try {
			assertTrue(navigateToRootElement());
			String popupCss = "div.popup.popup-modal > div > span";
			assertTrue(waitForVisibilityOfElementByCss(popupCss));
			assertTrue(navigateToElementByCSS(popupCss));
			assertTrue(click());
		} catch (AssertionError e) {
		}
	}
	
	@When("^migUser click on Deposit top Button$")
	public void user_click_on_Deposit_top_Button() throws Throwable {
		SharedSteps.getScenario().write("Start Deposit");
		Thread.sleep(1000);
		waitForElementByIdClick("eg_hp_deposit"); 
		/*assertTrue(navigateToRootElement()); 
		String css = "div.page-header.fn-header-container > div > button";
		assertTrue(waitForVisibilityOfElementByCss(css));
		assertTrue(navigateToElementByCSS(css));
		assertTrue(click());*/
	}

	@Given("^user click on visa$")
	public void user_click_on_visa() throws Throwable {
		waitForElementByXpathClick("//img[@src='/library/payments2/pay_logo2.jpg']");
	}
	
	@When("^migUser insert card number \"(.*?)\"$")
	public void user_insert_card_number(String card) throws Throwable {
		Thread.sleep(2000);
		assertTrue(navigateToRootElement());
		String id = "add-card-cardNumber";
		assertTrue(waitForVisibilityOfElementById(id));
		assertTrue(navigateToElementById(id));
		assertTrue(typeIn(card));
	}
	
	@When("^migUser fill Amount to Deposit \"([^\"]*)\"$")
	public void fill_Amount_to_Deposit_(String amount) throws Throwable {
		assertTrue(navigateToRootElement());
		String id = "add-card-amount";
		assertTrue(waitForVisibilityOfElementById(id));
		assertTrue(navigateToElementById(id));
		assertTrue(clear());
		assertTrue(typeIn("0"));
		assertTrue(typeIn(amount));
	}

	@When("^migUser select On card type visa$")
	public void select_On_card_type_visa() throws Throwable {
		
	}

	@When("^migUser fill card owner first name \"([^\"]*)\"$")
	public void fill_card_owner_first_name_(String arg1) throws Throwable {
	}

	@When("^migUser fill card owner last name \"([^\"]*)\"$")
	public void fill_card_owner_last_name_(String arg1) throws Throwable {
	}

	@When("^migUser select Expiration Month \"([^\"]*)\"$")
	public void select_Expiration_Mouth(String month) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("month"));
		assertTrue(selectDropdownOptionByVisibleText("01"));
	}

	@When("^migUser select Expiration Year \"([^\"]*)\"$")
	public void select_Expiration_Year(String year) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("expirationYear"));
		assertTrue(selectDropdownOptionByVisibleText("2020"));
	}

	@When("^migUser fill CVV2 \"([^\"]*)\"$")
	public void fill_CVV_(String cvv) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("add-card-cvv2"));
		assertTrue(typeIn(cvv));
	}

	@When("^migUser fill Billing \"([^\"]*)\"$")
	public void fill_Billing_(String arg1) throws Throwable {
	}

	@When("^migUser fill \"([^\"]*)\"$")
	public void fill_(String arg1) throws Throwable {
	}

	@When("^migUser fill zip code \"([^\"]*)\"$")
	public void fill_zip_code_(String arg1) throws Throwable {
	}

	@When("^migUser fill State$")
	public void fill_State() throws Throwable {
	}

	@When("^migUser click on Deposit$")
	public void click_on_Save_details_and_Deposit() throws Throwable { 
		log.info("submit");
		assertTrue(navigateToRootElement());
		if (MainWebPage.getType().equals(MainWebPage.Type.MOBILE)) {
			waitForElementByCssClick("div.scroll_down_container.fn-scroll_down.show_animate");
			Thread.sleep(4000);
		}
		assertTrue(navigateToRootElement());
		assertTrue(waitForVisibilityOfElementByXpath("//button[@type='submit']"));
		assertTrue(scrollToElementById("add-card-cardNumber"));
		assertTrue(navigateToElementByXpath("//button[@type='submit']"));
		assertTrue(click());
	}

	@Then("^migUser Read Limit Msg \"(.*?)\"$")
	public void user_Read_Limit_Msg(String msg) throws Throwable {
		assertTrue(navigateToRootElement());
		String msgCss = "#eg_error_add-card-amount";		
		assertTrue(waitForVisibilityOfElementByCss(msgCss));
		assertTrue(navigateToElementByCSS(msgCss));
		String txt = getText();
		Assert.assertTrue("Read: "+ txt, txt.contains(msg));
	}
	
	@When("^migUser click on radio Butten \"(.*?)\"$")
	public void click_on_radio_Butten_I_understand_that_my_funds_will_be_given_a_basic_level_of_protection(String msg) throws Throwable {
		assertTrue(navigateToRootElement());
		String msgCss = "div.fn-popup-loader";
		assertTrue(waitForVisibilityOfElementByCss(msgCss));
		assertTrue(navigateToElementByCSS(msgCss));
		String txt = getText();
		assertTrue(txt.contains(msg));
	}

	@When("^migUser click on OK$")
	public void click_on_PROCEED() throws Throwable {
		Thread.sleep(2000);
		assertTrue(navigateToRootElement());
		String msgCss = "span.popup-modal__button.fn-accept.popup-modal__button_type_accept";//"div.popup-modal__buttons > span";
		assertTrue(waitForElementByCssClick(msgCss));
		//assertTrue(waitForVisibilityOfElementByCss(msgCss));
		//assertTrue(navigateToElementByCSS(msgCss));
		//assertTrue(click());	
	}

	@When("^migUser click On ACCEPT$")
	public void click_On_ACCEPT() throws Throwable {
	}

	@Then("^migUser read MSG You just \"(.*?)\"$")
	public void user_MSG_You_just(String msg) throws Throwable {
		Thread.sleep(3000);
		assertTrue(navigateToRootElement());
		try {
			String msgCss = "div.fn-popup-loader";
			waitForVisibilityOfElementByCss(msgCss);//error
			navigateToElementByCSS(msgCss);
			String txt = getText();
			txt.contains(msg);
		} catch (Exception e) {
			//e.printStackTrace();
		}
	}

	@When("^migUser Click On ACCEPT$")
	public void I_Click_On_ACCEPT() throws Throwable {
		Thread.sleep(2000);
		//assertTrue(navigateToRootElement());
		String msgCss = "div.popup-modal__buttons > span";
		waitForElementByCssClick(msgCss);
	}
	
	@When("^migUser click On OK$")
	public void click_On_OK() throws Throwable {
		//assertTrue(navigateToRootElement());
		waitForElementByCssClick("div.popup-modal__buttons > span");
		//assertTrue(click());
	}
	
	@Then("^migUser read MSG Your \"(.*?)\"$")
	public void msg_Your(String msg) throws Throwable {
		//div.fn-popup-loader
		assertTrue(navigateToRootElement());
		String msgCss = "div.fn-popup-loader";
		waitForVisibilityOfElementByCss(msgCss);
		navigateToElementByCSS(msgCss);
		String txt = getText();
		//assertTrue(txt, txt.contains(msg));
	}

	@Then("^migUser read MSG You just received a \"(.*?)\" Euro bonus$")
	public void MSG_You_just_received_a_Euro_bonus(String amount) throws Throwable {
	}

	@Then("^migUser read MSG Bonus was successfully accepted$")
	public void MSG_Bonus_was_successfully_accepted() throws Throwable {
	}
	
	@Then("^migUser back to home page \"([^\"]*)\" \"([^\"]*)\"$")
	public void miguser_back_to_home_page(String brand, String _url) throws Throwable {
		String brandURL = getProperty(MainWebPage.getBrand().toString()) + "/" + MainWebPage.getLanguage();
		if (MainWebPage.getBrand().equals(MainWebPage.Brand.Whcc)) {
			brandURL = getProperty(MainWebPage.getBrand().toString());
		}
		String url = getCurrentUrl();
		int index = url.lastIndexOf('/');
		String subURL = url.substring(0, index);
		assertTrue("URL not main desktop:"+ subURL + " expected " + brandURL, subURL.equals(brandURL));
	}
	
	@Then("^migUser read the Current Balance$")
	public void miguser_read_the_Current_Balance_with_css() throws Throwable {
		Thread.sleep(5000);
		assertTrue(refresh());
		Thread.sleep(5000);
		assertTrue(navigateToRootElement());
		String css = "";
		switch (MainWebPage.getType()) {
            case MOBILE:
            	css = "span.fn-redirect.main-header__balance > div:nth-child(1) > p:nth-child(2) > span";
                break;
                    
            case DESKTOP:
            	css = "div.user-info-wrap > div.fn-redirect.main-header__balance > div > span";
                break;
		}
		assertTrue(waitForVisibilityOfElementByCss(css));
		assertTrue(navigateToElementByCSS(css));
		String balance = getText();
		String currency = CasinoHelper.findCurrency(balance, "£");
		int amount = CasinoHelper.findAmount(balance, "£");
		Reporter.log("Find Amount: " + currency + amount, true);
		assertTrue("Error msg:"+ balance, amount >= 100);
		SharedSteps.getScenario().write("Find Amount: : " + currency + amount);
		//assertTrue(findImageClick("src\\test\\resources\\images\\spin.PNG"));
		//Assert.assertTrue(amount >= 100, "Error msg:"+ balance);
	}
	
	public void depositOnly() throws Throwable{
		user_insert_card_number("1111111111111111");
		fill_Amount_to_Deposit_("100");
		select_Expiration_Mouth("01");
		select_Expiration_Year("2020");
		fill_CVV_("111");
		click_on_Save_details_and_Deposit();
		I_Click_On_ACCEPT();
	}
}