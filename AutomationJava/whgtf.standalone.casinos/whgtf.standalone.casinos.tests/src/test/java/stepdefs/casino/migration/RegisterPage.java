package stepdefs.casino.migration;

import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import com.wh.auto.common.ChromeConsoleLogging;
import com.wh.auto.common.SmartRobot;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.elasticSearch.ElasticSearch;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import stepdefs.shared.SharedData;
import stepdefs.shared.SharedSteps;

public class RegisterPage extends WebDriverUtils{

	private String depositlink;
	private String userName;
	
	@When("^migUser Click Register top Button$")
	public void Click_Register_top_Butten() throws Throwable {
		SharedSteps.getScenario().write("Start Login");
		Thread.sleep(2000);
		waitForElementByIdClick("eg_hp_joinnow"); 
	}
	
	@When("^migUser fill Title \"([^\"]*)\"$")
	public void fill_Title_(String title) throws Throwable {
		Thread.sleep(5000);
		assertTrue(navigateToRootElement());
		String id = "eg_reg_title";
		//assertTrue(waitForVisibilityOfElementByName(name));
		//assertTrue(navigateToElementByName(name));
		assertTrue(navigateToElementById(id));
		//assertTrue(waitForVisibilityOfElementById(id));
		assertTrue(buildDropdownListById(id));
		assertTrue(selectDropdownOptionByVisibleText(title));
	}

	@Given("^user insert to iframe register$")
	public void user_insert_to_iframe_register() throws Throwable {
		assertTrue(navigateToFrameById("register"));
	}

	@Then("^User click on create accunt$")
	public void user_click_on_create_accunt() throws Throwable {
		//if (MainWebPage.getType().equals(MainWebPage.Type.MOBILE)) {
			assertTrue(navigateToRootElement());
			executeScript("$('div > div > button.btn.btn_type_success').trigger('click');");
		//}else{
		//	executeScript("$('#eg_reg_submit_button').trigger('click');");
			//waitForElementByIdClick("eg_reg_submit_button");
		//}
		
		Thread.sleep(5000);
	}
	
	@When("^migUser fill first \"([^\"]*)\"$")
	public void fill_first_(String firstname) throws Throwable {
		assertTrue(navigateToRootElement());
		String id = "eg_reg_firstname";
		assertTrue(waitForVisibilityOfElementById(id));
		assertTrue(navigateToElementById(id));
		assertTrue(typeIn(firstname));
	}

	@When("^migUser fill last \"([^\"]*)\"$")
	public void fill_last_(String lastname) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("eg_reg_lastname"));
		assertTrue(typeIn(lastname));
	}

	@When("^migUser fill email with email: \"([^\"]*)\"$")
	public void fill_email_with_email_(String email) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("eg_reg_email"));
		assertTrue(typeIn(email));
	}
	
	@When("^migUser fill user name with timestamp$")
	public void fill_user_name_with_timestamp() throws Throwable {
		assertTrue(navigateToRootElement());
		String id = "eg_reg_userName";
		assertTrue(waitForVisibilityOfElementById(id));
		assertTrue(navigateToElementById(id));
		userName = Utility.getTimeStamp();
		SharedData.setUserName(userName);
		assertTrue(typeIn(userName));
		SharedSteps.getScenario().write("username: " + userName );
	}
	
	@When("^migUser fill password (\\d+)$")
	public void fill_password_(int password) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("eg_reg_password"));
		assertTrue(typeIn(String.valueOf(password)));
	}

	@When("^migUser Contiue to step (\\d+)$")
	public void Contiue_to_step(int arg1) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("eg_reg_next_button"));
		assertTrue(click());
		//driver.findElement(By.xpath("(//button[@type='button'])[2]")).click();
		//driver.findElement(By.cssSelector("div.form__actions.fn-register-controls > button")).click();
	}
	
	@When("^migUser select country \"([^\"]*)\"$")
	public void select_country_United_Kingdom(String cuntry) throws Throwable {
		assertTrue(navigateToRootElement());
		String id = "eg_reg_countryCode";
		assertTrue(waitForVisibilityOfElementById("eg_reg_cellphone"));
		assertTrue(buildDropdownListById(id));
		assertTrue(selectDropdownOptionByVisibleText(cuntry));
		//new Select(driver.findElement(By.id("test_countryField"))).selectByVisibleText(cuntry);
	}

	@Given("^User enter zip code \"(.*?)\"$")
	public void user_enter_zip_code(String code) throws Throwable {
		assertTrue(navigateToRootElement());
		String id = "eg_reg_zip";
		assertTrue(waitForVisibilityOfElementById(id));
		assertTrue(navigateToElementById(id));
		assertTrue(typeIn(code));
		Thread.sleep(3000);
		for (WebElement webElement : buildDropdownListByCss("div.fn-address-suggestions.suggestions-wrapper")) {
			webElement.click();
			break;
		}
	}
	
	@Given("^migUser click enter address manualy$")
	public void miguser_click_enter_address_manualy() throws Throwable {
			assertTrue(navigateToRootElement());
			String xpath = "//*[contains(text(), 'or enter address manually')]";
			if (//MainWebPage.getBrand().equals(MainWebPage.Brand.Eg) &&
					System.getProperty("env").equals("stging")) {
				xpath = "//*[contains(text(), 'or enter address manualy')]";
			}
			
			assertTrue(waitForVisibilityOfElementByXpath(xpath));
			assertTrue(navigateToElementByXpath(xpath));
			assertTrue(click());
	}
	
	@When("^migUser fill City \"([^\"]*)\"$")
	public void fill_City_(String city) throws Throwable {
		assertTrue(navigateToRootElement());
		String id = "eg_reg_city";
		assertTrue(waitForVisibilityOfElementById(id));
		assertTrue(navigateToElementById(id));
		assertTrue(typeIn(city));
	}

	@When("^migUser fill Address \"([^\"]*)\"$")
	public void fill_Address_(String address) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("eg_reg_address"));
		assertTrue(typeIn(address));
	}

	@When("^migUser fill Post code (\\d+)$")
	public void fill_Post_code_(int postcode) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("eg_reg_zip"));
		assertTrue(typeIn(String.valueOf(postcode)));
	}

	@When("^migUser fill Mobile (\\d+)$")
	public void fill_Mobile_(int mobile) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("eg_reg_cellphone"));
		assertTrue(typeIn(String.valueOf(mobile)));
	}

	@When("^migUser click Continue top Butten$")
	public void click_Continue_top_Butten() throws Throwable {
		//driver.findElement(By.cssSelector("button.btn.btn_type_success.fn-next")).click();//#test_continue > button
	}
	
	
	@When("^migUser select currency GBP$")
	public void select_currency_GBP() throws Throwable {
		
	}
	
	@When("^migUser click on I confirm I am (\\d+) years of age$")
	public void click_on_I_confirm_I_am_years_of_age(int arg1) throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "eg_reg_terms-checkbox";
		assertTrue(navigateToElementById(name));
		assertTrue(click());
	}

	@Given("^migUser Deposit limit \"([^\"]*)\"$")
	public void Deposit_limit_(String limit) throws Throwable {
		String value = "no";
		if (limit.contentEquals("No Limit")) {
			assertTrue(navigateToRootElement());
			assertTrue(navigateToElementById("eg_reg_is_deposit_limit_no"));
			assertTrue(click());
		} else if (limit.contentEquals("Daily")) {
			assertTrue(navigateToRootElement());
			assertTrue(navigateToElementById("eg_reg_is_deposit_limit_yes"));
			assertTrue(click());
			value = "yes";
		}
		try {
			assertTrue(navigateToRootElement());
			assertTrue(buildListByName("is_deposit_limit"));
			assertTrue(navigateToListElementByAttributeValue("value", value));
			assertTrue(click());
		} catch (Exception e) {	}
	}
	
	@Given("^migUser Deposit limit \"(.*?)\" limit Amount \"(.*?)\"$")
	public void user_Deposit_limit_limit_Amount(String limit, String amount) throws Throwable {
		String value = "no";
		if (limit.contentEquals("No Limit")) {
			value = "no";
		} else if (limit.contentEquals("Daily")) {
			value = "yes";
		}
		assertTrue(navigateToRootElement());
		assertTrue(buildListByName("is_deposit_limit"));
		assertTrue(navigateToListElementByAttributeValue("value", value));
		assertTrue(click());
		
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("termdepositlimit"));
		assertTrue(selectDropdownOptionByValue(amount));
	}
	
	@Given("^migUser Deposit limit \"(.*?)\" with limit Amount \"(.*?)\"$")
	public void miguser_Deposit_limit_with_limit_Amount(String limit, String amount) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("eg_reg_deposit_limit_toggle"));
		assertTrue(click());
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("eg_reg_is_deposit_limit"));
		assertTrue(click());
		String id = "";
		if (limit.contentEquals("Daily")) {
			id = "eg_reg_depositlimitperiod_daydepositlimit";
		} else if (limit.contentEquals("Weekly")) {
			id = "eg_reg_depositlimitperiod_weekdepositlimit";
		} else if (limit.contentEquals("Monthly")) {
			id = "eg_reg_depositlimitperiod_monthdepositlimit";
		}
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById(id));
		assertTrue(click());
		
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("termdepositlimit"));
		assertTrue(selectDropdownOptionByValue(amount));
	}
	
	@When("^migUser fill date of birth (\\d+)/(\\d+)/(\\d+)$")
	public void fill_date_of_birth_(int day, int month, int year) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("day"));
		assertTrue(selectDropdownOptionByValue("0" + Integer.toString(day)));
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("month"));
		assertTrue(selectDropdownOptionByValue("0" + Integer.toString(month)));
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("year"));
		assertTrue(selectDropdownOptionByVisibleText(Integer.toString(year)));
	}
	
	@When("^migUser click on Register Now$")
	public void click_on_Create_Account() throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("eg_reg_submit_button"));
		assertTrue(click());
	}

	@When("^migUser click on Create Account$")
	public void click_on_Create_Account2() throws Throwable {
		waitForElementByCssClick("button.btn.btn_type_create_account");
	}
	
	@Then("^migUser Account was Created$")
	public void miguser_Account_was_Created_Msg_with_css_and_deposit() throws Throwable {
		try {
			Thread.sleep(2000);
			assertTrue(navigateToRootElement());
			String depositCss = "";
			switch (MainWebPage.getType()) {
	            case MOBILE:
	            	//if (System.getProperty("env").equals("desktop-admin")) {
	            		//depositCss = "a.deposit.btn.fn-submit";//new
					//}else{
						depositCss = "a.btn.fn-submit.fr";//old
					//}
	                break;
	                    
	            case DESKTOP:
	            	if (System.getProperty("env").equals("desktop-admin")) {
	            		depositCss = "a.deposit.btn.fn-submit";//new
					}else{
						depositCss = "a.deposit.btn-2.fn-submit";//old
					}
	                break;
			}
			if (MainWebPage.getBrand().equals(MainWebPage.Brand.Whcc) &&
					MainWebPage.getType().equals(MainWebPage.Type.DESKTOP)) {
				depositCss = "a.deposit.btn.fn-submit";
			}
			String css = ".popup-modal__inner";
			boolean find = waitForVisibilityOfElementByCss(css);//20 sec
			if (!find) {
				find = waitForVisibilityOfElementByCss(css);//20 sec
			}
			if (find) {
				Thread.sleep(2000);
				waitForElementByCssClick(depositCss); 
//				assertTrue(navigateToRootElement());
//				assertTrue(navigateToElementByCSS(depositCss));//"a.btn.fn-submit.fr"));//a.deposit.btn-2.fn-submit
//				click();
			} else {
				if (SharedSteps.getScenario().getName().contains("Register")) {
					String console = ChromeConsoleLogging.GetConsolLog(SharedData.getBrowsers().get_Driver());
					ElasticSearch.elasticSearchAddResults("Portal3MigMobi", "RegistrationEndMsg", false, console);
					SharedSteps.getScenario().write(console);
					assertTrue("No Popup after registration", false);
				}
			} 
		} catch (Exception e) {	}
	}

	public void register() throws Throwable{
		Click_Register_top_Butten();
		fill_Title_("Mr");
		fill_first_("first name");
		fill_last_("last name");
		fill_email_with_email_("test@playtech.com");
		fill_user_name_with_timestamp();
		fill_password_(123456);
		Contiue_to_step(2);
		miguser_click_enter_address_manualy();
		fill_City_("city");
		fill_date_of_birth_(1, 1, 1980);
		select_country_United_Kingdom("United Kingdom");
		fill_Address_("Address");
		fill_Post_code_(123);
		fill_Mobile_(1227768276);
		select_currency_GBP();
		click_on_Create_Account();
		miguser_Account_was_Created_Msg_with_css_and_deposit();
	}
		
	public String getDepositlink() {
		return depositlink;
	}

	public void setDepositlink(String depositlink) {
		this.depositlink = depositlink;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

}