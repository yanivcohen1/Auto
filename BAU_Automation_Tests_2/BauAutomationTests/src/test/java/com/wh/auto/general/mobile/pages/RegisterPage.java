package com.wh.auto.general.mobile.pages;

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
import org.testng.Assert;
import org.testng.annotations.Test;

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
import cucumber.runtime.PendingException;

public class RegisterPage extends AbstractWhPageObjectSpring{

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
			init = false;
		} 
	}
	
	@When("^Click Register top Butten$")
	public void Click_Register_top_Butten() throws Throwable {
		waitForElement(driver, By.cssSelector("button.btn.btn_type_register.fr.fn-redirect")).click();										
	}

	@When("^fill Title <\"([^\"]*)\">$")
	public void fill_Title_(String title) throws Throwable {
		//new Select(driver.findElement(By.id("test_genderField"))).selectByVisibleText(title);
	}

	@When("^fill first <\"([^\"]*)\">$")
	public void fill_first_(String firstname) throws Throwable {
		waitForElement(driver, By.name("firstname"));
		driver.findElement(By.name("firstname")).sendKeys(firstname);
	}

	@When("^fill last <\"([^\"]*)\">$")
	public void fill_last_(String lastname) throws Throwable {
		driver.findElement(By.name("lastname")).sendKeys(lastname);
	}

	@When("^fill date of birth (\\d+)/(\\d+)/(\\d+)$")
	public void fill_date_of_birth_(int day, int month, int year) throws Throwable {
		Select select = new Select(driver.findElement(By.id("day")));
		select.selectByVisibleText(Integer.toString(day));
		new Select(driver.findElement(By.id("month"))).selectByValue("0" + Integer.toString(month));
		new Select(driver.findElement(By.id("year"))).selectByValue(Integer.toString(year));
	}

	@When("^fill email with email: <\"([^\"]*)\">$")
	public void fill_email_with_email_(String email) throws Throwable {
		driver.findElement(By.name("email")).sendKeys(email);
		driver.findElement(By.cssSelector("div.form__actions.fn-register-controls > button")).click();
	}
	
	@When("^select country <\"([^\"]*)\">$")
	public void select_country_United_Kingdom(String cuntry) throws Throwable {
		//new Select(driver.findElement(By.id("test_countryField"))).selectByVisibleText(cuntry);
	}

	@When("^fill City <\"([^\"]*)\">$")
	public void fill_City_(String city) throws Throwable {
		WebElement cityElement = waitForElement(driver, By.name("city"));
	    Thread.sleep(1000);
		cityElement.sendKeys(city);
	}

	@When("^fill Address <\"([^\"]*)\">$")
	public void fill_Address_(String address) throws Throwable {
		driver.findElement(By.name("address")).sendKeys(address);
		//driver.findElement(By.name("address2")).sendKeys(address);
	}

	@When("^fill Post code <(\\d+)>$")
	public void fill_Post_code_(int postcode) throws Throwable {
		driver.findElement(By.name("zip")).sendKeys(Integer.toString(postcode));	
	}

	@When("^fill Mobile <(\\d+)>$")
	public void fill_Mobile_(int mobile) throws Throwable {
		driver.findElement(By.name("cellphone")).sendKeys(Integer.toString(mobile));
	}

	@When("^click Continue top Butten$")
	public void click_Continue_top_Butten() throws Throwable {
		driver.findElement(By.cssSelector("button.btn.btn_type_success.fn-next")).click();//#test_continue > button
	}
	
	@When("^fill user name with timestamp$")
	public void fill_user_name_with_timestamp() throws Throwable {
		waitForElement(driver, By.name("userName")).click();
		userName = Utility.getTimeStamp();
		Reporter.log("User name: " + userName, true);
		driver.findElement(By.name("userName")).sendKeys(userName);
	}

	@When("^fill password <(\\d+)>$")
	public void fill_password_(int password) throws Throwable {
		Reporter.log("password" + userName, true);
		driver.findElement(By.name("password")).sendKeys(Integer.toString(password));
		driver.findElement(By.name("passwordVerify")).sendKeys(Integer.toString(password));
	}

	@When("^Contiue to step (\\d+)$")
	public void Contiue_to_step(int arg1) throws Throwable {
		driver.findElement(By.cssSelector("div.form__actions.fn-register-controls > button")).click();
	}
	
	@When("^select currency GBP$")
	public void select_currency_GBP() throws Throwable {
		
	}

	@Given("^Deposit limit <\"([^\"]*)\">$")
	public void Deposit_limit_(String limit) throws Throwable {
		String value = "0";
		if (limit.contentEquals("No Limit")) {
			value = "0";
		} else if (limit.contentEquals("Daily")) {
			value = "daydepositlimit";
		}
		try {
			new Select(driver.findElement(By.cssSelector("#depositlimitperiod"))).selectByValue(value);
		} catch (Exception e) {	}
	}
	
	@When("^click on I confirm I am (\\d+) years of age$")
	public void click_on_I_confirm_I_am_years_of_age(int arg1) throws Throwable {
		WebElement  terms_checkbox = driver.findElement(By.cssSelector("#terms-checkbox"));
		terms_checkbox.click();
		if (!terms_checkbox.isSelected()) {
			terms_checkbox.click();
		}
	}

	@When("^click on Create Account$")
	public void click_on_Create_Account() throws Throwable {
		WebElement webElement =waitForElement(driver, By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet > div.form__actions.fn-register-controls > button"));
		/*try {
			new Actions(driver).sendKeys(Keys.PAGE_DOWN).perform();
		} catch (Exception e) {	}*/
		webElement.click();
	}

	@Then("Account was Created <\"([^\"]*)\">$")
	public void _EG_Account_was_Created_(String msg) throws Throwable {
		String msg2 = waitForElement(driver, By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet > article")).getText();
		//Assert.assertTrue(msg2.contains(msg), "Error msg:"+ msg2);
		//write username to file
		String playersUsersNamesFile = (new File(Utility.get_mainTestsBuildPath())).getParent() + Utility.playersUsersName;
		String cookieValue = Utility.readTrackingCookie(driver);
		String msg3 = userName +','+ cookieValue+ ',' + thisClass.getCasinoName();
		Utility.writeTofile(playersUsersNamesFile, msg3);
		//close popup
		System.out.println("-----------------------------link order: "+ thisClass.getLinkOrder());
		waitForElement(driver, By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet > article > div > p:nth-child("+ thisClass.getLinkOrder() +") > a")).click();
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

	@Override
	public void afterTest() {
		// TODO Auto-generated method stub
		
	}

}
