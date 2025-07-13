package stepdefs.casino.mobile.pages;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.openqa.selenium.By;
import org.openqa.selenium.By.ById;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
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
import com.wh.auto.TestObjects.AbstractWhPageObjectSpring;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.CustomTouchAction;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.cucumber.annotation.Feature;
import com.wh.auto.cucumber.annotation.Scenario;
import com.wh.auto.repository.AppContextRepository;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterPage extends WebDriverUtils{

	private String PlayersUsersName;
	private String casinoName;
	private String linkOrder;
	private RegisterPage thisClass;
	private String userName;
	private static boolean init;
	
	public RegisterPage() {
		if (!init) {
			init = true;
			thisClass = (RegisterPage) AppContextRepository.getAc().getBean(RegisterPage.class.getName());
			assertTrue(navigateToRootElement());
			init = false;
		} 
	}
	
	@When("^User Click Register top Butten$")
	public void Click_Register_top_Butten() throws Throwable {
		Thread.sleep(5000);
		assertTrue(navigateToRootElement());
		String css = "button.btn.btn_type_register.fr.fn-redirect";
		assertTrue(waitForVisibilityOfElementByCss(css));
		assertTrue(navigateToElementByCSS(css));
		assertTrue(click());
		//waitForElement(driver, By.cssSelector("button.btn.btn_type_register.fr.fn-redirect")).click();
	}

	@When("^User fill Title <\"([^\"]*)\">$")
	public void fill_Title_(String title) throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "title";
		assertTrue(buildDropdownListByName(name));
		assertTrue(selectDropdownOptionByVisibleText(title));
	}

	@When("^User fill first <\"([^\"]*)\">$")
	public void fill_first_(String firstname) throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "firstname";
		assertTrue(waitForVisibilityOfElementByName(name));
		assertTrue(navigateToElementByName(name));
		assertTrue(typeIn(firstname));
	}

	@When("^User fill last <\"([^\"]*)\">$")
	public void fill_last_(String lastname) throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "lastname";
		assertTrue(navigateToElementByName(name));
		assertTrue(typeIn(lastname));
	}

	@When("^User fill email with email: <\"([^\"]*)\">$")
	public void fill_email_with_email_(String email) throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "email";
		assertTrue(navigateToElementByName(name));
		assertTrue(typeIn(email));
	}
	
	@When("^User fill user name with timestamp$")
	public void fill_user_name_with_timestamp() throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "userName";
		userName = Utility.getTimeStamp();
		assertTrue(navigateToElementByName(name));
		assertTrue(typeIn(userName));
	}
	
	@When("^User fill password <(\\d+)>$")
	public void fill_password_(int password) throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "password";
		assertTrue(navigateToElementByName(name));
		assertTrue(typeIn(Integer.toString(password)));
	}

	@When("^User Contiue to step (\\d+)$")
	public void Contiue_to_step(int arg1) throws Throwable {
		assertTrue(navigateToRootElement());
		String xPath = "(//button[@type='button'])[2]";
		assertTrue(navigateToElementByXpath(xPath));
		assertTrue(click());
		//driver.findElement(By.xpath("(//button[@type='button'])[2]")).click();
		//driver.findElement(By.cssSelector("div.form__actions.fn-register-controls > button")).click();
	}
	
	@When("^User select country <\"([^\"]*)\">$")
	public void select_country_United_Kingdom(String cuntry) throws Throwable {
		assertTrue(navigateToRootElement());
		String id = "countryCode";
		//assertTrue(waitForVisibilityOfElementById(id));
		assertTrue(buildDropdownListById("countryCode"));
		assertTrue(selectDropdownOptionByVisibleText(cuntry));
		//new Select(driver.findElement(By.id("test_countryField"))).selectByVisibleText(cuntry);
	}

	@When("^User fill City <\"([^\"]*)\">$")
	public void fill_City_(String city) throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "city";
		assertTrue(waitForVisibilityOfElementByName(name));
		assertTrue(navigateToElementByName(name));
		assertTrue(typeIn(city));
	}

	@When("^User fill Address <\"([^\"]*)\">$")
	public void fill_Address_(String address) throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "address";
		assertTrue(navigateToElementByName(name));
		assertTrue(typeIn(address));
	}

	@When("^User fill Post code <(\\d+)>$")
	public void fill_Post_code_(int postcode) throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "zip";
		assertTrue(navigateToElementByName(name));
		assertTrue(typeIn(Integer.toString(postcode)));	
	}

	@When("^User fill Mobile <(\\d+)>$")
	public void fill_Mobile_(int mobile) throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "cellphone";
		assertTrue(navigateToElementByName(name));
		assertTrue(typeIn(Integer.toString(mobile)));	
		//driver.findElement(By.name("cellphone")).sendKeys(Integer.toString(mobile));
	}

	@When("^User click Continue top Butten$")
	public void click_Continue_top_Butten() throws Throwable {
		//driver.findElement(By.cssSelector("button.btn.btn_type_success.fn-next")).click();//#test_continue > button
	}
	
	
	@When("^User select currency GBP$")
	public void select_currency_GBP() throws Throwable {
		
	}

	@Given("^User Deposit limit <\"([^\"]*)\">$")
	public void Deposit_limit_(String limit) throws Throwable {
		String value = "no";
		if (limit.contentEquals("No Limit")) {
			value = "no";
		} else if (limit.contentEquals("Daily")) {
			value = "yes";
		}
		try {
			assertTrue(navigateToRootElement());
			assertTrue(buildListByName("is_deposit_limit"));
			assertTrue(navigateToListElementByAttributeValue("value", value));
			assertTrue(click());
		} catch (Exception e) {	}
	}
	
	@When("^User click on I confirm I am (\\d+) years of age$")
	public void click_on_I_confirm_I_am_years_of_age(int arg1) throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "terms-checkbox";
		assertTrue(navigateToElementById(name));
		assertTrue(click());
		/*WebElement  terms_checkbox = driver.findElement(By.cssSelector("#terms-checkbox"));
		terms_checkbox.click();
		if (!terms_checkbox.isSelected()) {
			terms_checkbox.click();
		}*/
	}

	@When("^User fill date of birth (\\d+)/(\\d+)/(\\d+)$")
	public void fill_date_of_birth_(int day, int month, int year) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("day"));
		assertTrue(selectDropdownOptionByVisibleText(Integer.toString(day)));
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("month"));
		assertTrue(selectDropdownOptionByValue("0" + Integer.toString(month)));
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("year"));
		assertTrue(selectDropdownOptionByVisibleText(Integer.toString(year)));
		/*Select select = new Select(driver.findElement(By.id("day")));
		select.selectByVisibleText(Integer.toString(day));
		new Select(driver.findElement(By.id("month"))).selectByValue("0" + Integer.toString(month));
		new Select(driver.findElement(By.id("year"))).selectByValue(Integer.toString(year));*/
	}
	
	@When("^User click on Create Account$")
	public void click_on_Create_Account() throws Throwable {
		assertTrue(navigateToRootElement());
		String css = ".fn-submit";
		assertTrue(navigateToElementByCSS(css));
		assertTrue(click());
	}

	@Then("User Account was Created <\"([^\"]*)\">$")
	public void _EG_Account_was_Created_(String msg) throws Throwable {
		//#p_p_id_56_INSTANCE_cct46VLLiBDe_ > div.fn-portlet.portlet__content.portlet__content_border_show.portlet__content_type_56 > article > div > p:nth-child(4) > a
		////*[@id="p_p_id_56_INSTANCE_cct46VLLiBDe_"]/div[2]/article/div/p[3]/a
		assertTrue(navigateToRootElement());
		String css = "#p_p_id_56_INSTANCE_cct46VLLiBDe_ a";
		assertTrue(waitForVisibilityOfElementByCss(css));
		assertTrue(navigateToElementByCSS(css));
		assertTrue(click());
/*		String msg2 = waitForElement(driver, By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet > article")).getText();
		String playersUsersNamesFile = (new File(Utility.get_mainTestsBuildPath())).getParent() + Utility.playersUsersName;
		String cookieValue = Utility.readTrackingCookie(driver);
		String msg3 = userName +','+ cookieValue+ ',' + thisClass.getCasinoName();
		Utility.writeTofile(playersUsersNamesFile, msg3);
		//close popup
		System.out.println("-----------------------------link order: "+ thisClass.getLinkOrder());
		waitForElement(driver, By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet > article > div > p:nth-child("+ thisClass.getLinkOrder() +") > a")).click();*/
	}
	
		private String getPlayersUsersName() {
		return PlayersUsersName;
	}
	
	//@Then("^Account was Created <\"([^\"]*)\">$")
	public void Account_was_Created(String msg) throws Throwable {//micon-close-btn popup-modal__button_type_close fn-close		
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

	public String getLinkOrder() {
		return linkOrder;
	}

	public void setLinkOrder(String linkOrder) {
		this.linkOrder = linkOrder;
	}

}