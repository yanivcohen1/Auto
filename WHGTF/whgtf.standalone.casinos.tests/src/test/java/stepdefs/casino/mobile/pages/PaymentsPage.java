/*package com.wh.auto.general.mobile.pages;

import java.io.PrintStream;
import java.util.HashMap;
import java.util.Map;

import javax.validation.constraints.AssertTrue;

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
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.cucumber.AbstractCucumberTest;
import com.wh.auto.general.mobile.TestsPayments;
import com.wh.auto.repository.AppContextRepository;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.PendingException;

public class PaymentsPage extends AbstractWhPageObjectSpring{

	private String month;
	public PaymentsPage thisClass;
	private String currency;
	private static boolean init;
	public String str;
	public int limit;
	public boolean firstSet;
	public int amount;
	public String msg;
	public String method;
	public String url;

	public PaymentsPage() {
		if (!init) {
			init = true;
			thisClass = (PaymentsPage) AppContextRepository.getAc().getBean(PaymentsPage.class.getName());
			//loadVariables(this.getClass());
			init = false;
		} 
	}

	@When("^Run Senario <\"([^\"]*)\"> in feature file <\"([^\"]*)\">$")
	public void Run_Senario_in_feature_file_(String scenario, String feature) throws Throwable {
		String featureFile = TestsPayments.folderFile + feature;
		runAndRetry(scenario, featureFile);
	}

	@Then("^Run Senario <\"([^\"]*)\"> limit (\\d+) first set (true|false)$")
	public void Run_Senario_set_first_limit_true(String senario, int limit, boolean firstSet) throws Throwable {	
		Map<String, Object> vars = new HashMap<String, Object>();
		vars.put("limit", limit);
		vars.put("firstSet", firstSet);
		vars.put("str", "test");
		runAndRetryVar(senario, TestsPayments.thisFeature, vars, this.getClass().getName());
	}

	@Then("^Run Senario <\"([^\"]*)\"> amount (\\d+) limit (\\d+)$")
	public void Run_Senario_amount_limit(String senario, int amount, int limit) throws Throwable {
		Map<String, Object> vars = new HashMap<String, Object>();
		vars.put("limit", limit);
		vars.put("amount", amount);
		//CucumberTest cucumberTest = new CucumberTest();
		runAndRetryVar(senario, TestsPayments.thisFeature, vars, this.getClass().getName());
	}

	@Then("^Run Senario <\"([^\"]*)\"> amount (\\d+) limit (\\d+) msg <\"([^\"]*)\">$")
	public void Run_Senario_amount_limit_msg_(String senario, int amount, int limit, String msg) throws Throwable {
		Map<String, Object> vars = new HashMap<String, Object>();
		vars.put("limit", limit);
		vars.put("amount", amount);
		vars.put("msg", msg);
		runAndRetryVar(senario, TestsPayments.thisFeature, vars, this.getClass().getName());
	}

	@Then("^Run Senario <\"([^\"]*)\">$")
	public void Run_Senario_(String senario) throws Throwable {
		runAndRetry(senario, TestsPayments.thisFeature);
	}

	@Then("^Run Senario <\"([^\"]*)\"> amount (\\d+) msg <\"([^\"]*)\">$")
	public void Run_Senario_amount_msg_(String senario, int amount, String msg) throws Throwable {
		Map<String, Object> vars = new HashMap<String, Object>();
		vars.put("amount", amount);
		vars.put("msg", msg);
		runAndRetryVar(senario, TestsPayments.thisFeature, vars, this.getClass().getName());
	}
	
	@When("^PageUP$")
	public void PageUP() throws Throwable {
		Thread.sleep(2000);
		new Actions(driver).sendKeys(Keys.PAGE_UP).perform();
		Thread.sleep(1000);
	}
	
	@When("^click Deposit top Button second time$")
	public void click_Deposit_top_Button_second_time() throws Throwable {
		Thread.sleep(5000);
		waitForElement(driver, By.cssSelector("#application > div.page.fn-page > div.page-header.fn-header-container > div > button"), "deposit").click();
	}
	
	@When("^click Deposit Limit Link$")
	public void click_Deposit_Limit_Link() throws Throwable {
		String msg ="firstSet:"+firstSet+" limit:"+ limit;
		Utility.SystemOutPrintln(msg);
		Thread.sleep(3000);
		new Actions(driver).sendKeys(Keys.PAGE_UP).perform();
		Thread.sleep(1000);
		waitForElement(driver, By.cssSelector("#layout-column__column-1 > div.portlet-wrapper.portlet-56.portlet_type_border > div.fn-portlet.portlet > article > p > a")).click();
	}
	
	@When("^Click Set Limit$")
	public void Click_Set_Limit() throws Throwable {
		if (firstSet) {
			//#layout-column__column-1 > div.portlet-wrapper.portlet-ngresponsiblegaming > div > div.fn-limits-container > div > ul > li > div.info-list__field.fn-accordion-target
			waitForElement(driver, By.cssSelector("#layout-column__column-1 > div.portlet-wrapper.portlet-ngresponsiblegaming > div > div.fn-limits-container > div > ul > li > div.info-list__field.fn-accordion-target")).click();
		} else{
			waitForElement(driver, By.cssSelector("#layout-column__column-1 > div.portlet-wrapper.portlet-ngresponsiblegaming > div > div.fn-limits-container > div > ul > li:nth-child(2) > div.info-list__field.fn-accordion-target")).click();
		}
	}

	@When("^SetPeriod Daily$")
	public void SetPeriod_Daily() throws Throwable {
		new Select(WebDriverUtils.waitForElement(driver,By.id("timePeriod"))).selectByVisibleText("Daily");
	}

	@When("^Set Limit$")
	public void Set_Limit() throws Throwable {
		driver.findElement(By.id("depositlimitamount")).clear();
		driver.findElement(By.id("depositlimitamount")).sendKeys(String.valueOf(limit));
	}

	@When("^Click on Add$")
	public void Click_on_Add() throws Throwable {
		driver.findElement(By.cssSelector("div.field__control > button.btn")).click();//add limit
	}
	
	@Then("^Set Amount$")
	public void Set_Amount() throws Throwable {
		//waitForElement(driver, By.cssSelector("div.page-header.fn-header-container button1"), "deposit").click();
	    //throw new PendingException();
	    String msg ="amount:"+amount+" limit:"+ limit;
	    Utility.SystemOutPrintln(msg);
	    waitForElement(driver, By.name("amount")).clear();
	    waitForElement(driver, By.name("amount")).sendKeys(Integer.toString(amount));
	}

	@Then("^Set CVV (\\d+)$")
	public void Set_CVV(int cvv) throws Throwable {
		driver.findElement(By.name("cvv2")).clear();
		driver.findElement(By.name("cvv2")).sendKeys(Integer.toString(cvv));
	}

	@Then("^Click On Deposit$")
	public void Click_On_Deposit() throws Throwable {
		waitForElement(driver, By.cssSelector("#layout-column__column-1 div.info-list.info-list_type_sub > form > p > button")).click();
	    //#layout-column__column-1 > div.portlet-wrapper.portlet-mobile-cashier.portlet_type_border > div.fn-portlet.portlet > ul > li.info-list__row.info-list__row_type_collapse.payment-method.fn-accordion.fn-deposit-method.opened > div.info-list.info-list_type_sub > form > p > button
	}

	@Then("^Read msg$")
	public void Read_msg() throws Throwable {
		if (amount > limit) {
			String limitAlert = waitForElement(driver, By.cssSelector("div.field.field_name_amount.fn-validate.number.invalid > div.error-tooltip")).getText();
			//String msg = "Amount should be between 10 and "+limit+" inclusively";
			Assert.assertTrue(limitAlert.contains(msg), "Error msg:"+ limitAlert);
		}else{
			if (amount <= 400) {
				//div > div.popup-modal__buttons > span
				//waitForElement(driver, By.cssSelector("div.popup-modal__buttons > span.popup-modal__button.fn-accept.popup-modal__button_type_accept")).click();
				//Thread.sleep(2000);
			}
			
			String msgRead = waitForElement(driver, By.cssSelector("div > div.popup-modal__content > div"))
					.getText();
			if (msgRead.contains("Congratulations")) {
				waitForElement(driver, By.cssSelector(".popup-modal__button"), "ok").click();
				Thread.sleep(2000);
				msgRead = waitForElement(driver, By.cssSelector("div > div.popup-modal__content > div"))
						.getText();
			}
			if (msgRead.contains("You have 10 free spins")) {
				waitForElement(driver, By.cssSelector("div.popup-modal__buttons > span"), "ok").click();
				Thread.sleep(2000);
				msgRead = waitForElement(driver, By.cssSelector("div > div.popup-modal__content > div"))
						.getText();
			}
			Assert.assertTrue(msgRead.contains(msg), "Error msg:" + msgRead);
		}
	}

	@Then("^Read msg <\"([^\"]*)\">$")
	public void Read_msg(String msg) throws Throwable {
		
		String msgRead;
		try {
			msgRead = waitForElement(driver, By.cssSelector("#layout-column__column-1 > div.portlet-wrapper.portlet-mobile-cashier.portlet_type_border > div.fn-portlet.portlet > ul > li > span"))
					.getText();
		} catch (Exception e) {
			msgRead = waitForElement(driver, By.cssSelector("div.popup-modal__content > div"))
					.getText();
		}
		
		Assert.assertTrue(msgRead.contains(msg), "Error msg:" + msgRead);
	}
	
	@Then("^Read msg2 <\"([^\"]*)\">$")
	public void Read_msg2(String msg) throws Throwable {
		
		String msgRead;
			msgRead = waitForElement(driver, By.cssSelector("div.popup-modal__content > div"))
					.getText();
		
		Assert.assertTrue(msgRead.contains(msg), "Error msg:" + msgRead);
	}
	
	@Then("^Close Msg aproved$")
	public void Close_Msg_aproved() throws Throwable {
		if (amount < limit) {
			//waitForElement(driver, By.cssSelector("div > div.popup-modal__buttons > span")).click();
			try {
				Close_Msg_aproved(2);
				//waitForElement(driver, By.cssSelector(".popup-modal__button"), "ok").click();
			} catch (Exception e) {	}
			Thread.sleep(7000);
		}	
	}

	@Then("^Close Msg aproved(\\d+)$")
	public void Close_Msg_aproved(int arg1) throws Throwable {
		Thread.sleep(5000);
		waitForElement(driver, By.cssSelector(".popup-modal__button"), "ok").click();
	}
	
	@Then("^Return to cashier$")
	public void Return_to_cashier() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    //throw new PendingException();
	}
	
	@Then("^open Menu$")
	public void open_Menu() throws Throwable {
		Thread.sleep(5000);
		//waitForElementClick(driver, By.xpath("//div[@id='application']/div[2]/div/div/div/span"), "open Menu");
		waitForElement(driver, By.xpath("//div[@id='application']/div[2]/div/div/span")).click();
	}

	@Then("^open my account$")
	public void open_my_account() throws Throwable {
		Thread.sleep(1000);
		waitForElement(driver, By.cssSelector("#application > div.fn-slide-menu-container > div > div > div.slide-menu__wrap.fn-menu-wrap > div > ul > li:nth-child(5) > div > span.slide-menu__head__name"), "my account").click();;
	}

	@Then("^open Responsible Gaming$")
	public void open_Responsible_Gaming() throws Throwable {
		Thread.sleep(1000);
		waitForElementClick(driver, By.cssSelector("#application > div.fn-slide-menu-container > div > div > div.slide-menu__wrap.fn-menu-wrap > div > ul > li:nth-child(5) > ul > li:nth-child(5)"), "Responsible Gaming");
	}

	@Then("^Set (\\d+) months$")
	public void Set_months(int arg1) throws Throwable {
		new Select(waitForElementClick(driver, By.cssSelector("#period"), "period 6 months")).selectByVisibleText("6 months");
	}

	@Then("^Set exclude$")
	public void Set_exclude() throws Throwable {
		waitForElementClick(driver, By.cssSelector("form.form:nth-child(4) > div:nth-child(3) > button:nth-child(1)"), "exclude");
	}

	@Then("^Click on ok$")
	public void Click_on_ok() throws Throwable {
		waitForElementClick(driver, By.cssSelector("span.popup-modal__button.fn-self_exclusion-yes"), "ok");
	}

	@Then("^read exclude <\"([^\"]*)\">$")
	public void read_exclude_(String msg) throws Throwable {
		String txt = waitForElement(driver, By.cssSelector("span.info-list__field.info-list__field_type_message"), "read exclude").getText();
		Assert.assertTrue(txt.contains(msg));
	}
	
	@Then("^Set (\\d+) Hours$")
	public void Set_Hours(int arg1) throws Throwable {
		waitForElement(driver, By.cssSelector("#timeout"));
		new Select(driver.findElement(By.cssSelector("#timeout"))).selectByVisibleText("24 Hours");
	}

	@Then("^save TimeOut$")
	public void save_TimeOut() throws Throwable {
		waitForElementSafeClick(driver, By.cssSelector("#layout-column__column-1 > div:nth-child(1) > div.fn-portlet.portlet > div.fn-timeout-container > div > div > form > div.portlet__actions > button"), "save TimeOut");
	}

	@Then("^Successfull ok click$")
	public void Successfull_ok_click() throws Throwable {
		waitForElement(driver, By.cssSelector("div.popup-modal__buttons > span.popup-modal__button.fn-timeout-yes"), "confirm ok click").click();
	}
	
	@Then("^read Timeout <\"([^\"]*)\">$")
	public void read_Timeout_(String msg) throws Throwable {
		Thread.sleep(5000);

		String txt = waitForElement(driver, By.cssSelector("div.popup-modal__content > div"), "read timeout msg").getText();
		Assert.assertTrue(txt.contains(msg));
	}

	@Then("^Click OK$")
	public void Click_OK() throws Throwable {
		Thread.sleep(5000);
		waitForElement(driver, By.cssSelector("div.popup-modal__buttons > span")).click();
	}
	
	@Then("^read Login msg <\"([^\"]*)\">$")
	public void read_Login_msg_(String msg) throws Throwable {
	    //div.popup-modal__content > div.fn-popup-loader > div > div.form-messages.fn-form-messages
		Thread.sleep(5000);
		String txt = waitForElement(driver, By.cssSelector("div.popup-modal__content > div.fn-popup-loader > div > div.form-messages.fn-form-messages")).getText();
		Assert.assertTrue(txt.contains(msg));
	}
	
	@Then("^Click on paypal$")
	public void Click_on_paypal() throws Throwable {
		waitForElement(driver, By.cssSelector("#layout-column__column-1 > div.portlet-wrapper.portlet-mobile-cashier.portlet_type_border > div.fn-portlet.portlet > ul > li.info-list__row.info-list__row_type_collapse.payment-method.fn-accordion.fn-deposit-method.accordion_expanded.opened > div.info-list__field.fn-accordion-target.accordion-header_expanded")).click();
	}
	
	@Then("^Run Senario \"([^\"]*)\" Click on \"([^\"]*)\" Read URL \"([^\"]*)\"$")
	public void Run_Senario_Click_on_Read_URL(String senario, String method, String url) throws Throwable {
		Map<String, Object> vars = new HashMap<String, Object>();
		vars.put("method", method);
		vars.put("url", url);
		//CucumberTest cucumberTest = new CucumberTest();
		runAndRetryVar(senario, TestsPayments.thisFeature, vars, this.getClass().getName());
	}

	@Then("^Select Methode$")
	public void Select_Methode() throws Throwable {
		Thread.sleep(3000);
	    if (method.contentEquals("payPal")) {
	    	waitForElement(driver, By.cssSelector("#layout-column__column-1 > div.portlet-wrapper.portlet-mobile-cashier.portlet_type_border > div.fn-portlet.portlet > ul > li:nth-child(2) > div.info-list__field.fn-accordion-target")).click();
	    	driver.findElement(By.xpath("(//input[@name='amount'])[2]")).sendKeys("10");
	    	driver.findElement(By.xpath("(//button[@type='submit'])[2]")).click();
		}else if(method.contentEquals("paySafeCard")){
			waitForElement(driver, By.cssSelector("#layout-column__column-1 > div.portlet-wrapper.portlet-mobile-cashier.portlet_type_border > div.fn-portlet.portlet > ul > li:nth-child(3) > div.info-list__field.fn-accordion-target")).click();
			driver.findElement(By.xpath("(//input[@name='amount'])[3]")).sendKeys("10");
			driver.findElement(By.xpath("(//button[@type='submit'])[3]")).click();
		}else if(method.contentEquals("Skrill")){
			waitForElement(driver, By.cssSelector("#layout-column__column-1 > div.portlet-wrapper.portlet-mobile-cashier.portlet_type_border > div.fn-portlet.portlet > ul > li:nth-child(5) > div.info-list__field.fn-accordion-target")).click();
			driver.findElement(By.xpath("(//input[@name='amount'])[5]")).sendKeys("10");
			driver.findElement(By.xpath("(//button[@type='submit'])[5]")).click();
		}else if(method.contentEquals("EcoCard")){
			waitForElement(driver, By.cssSelector("#layout-column__column-1 > div.portlet-wrapper.portlet-mobile-cashier.portlet_type_border > div.fn-portlet.portlet > ul > li:nth-child(6) > div.info-list__field.fn-accordion-target")).click();
			driver.findElement(By.xpath("(//input[@name='amount'])[6]")).sendKeys("10");
			driver.findElement(By.xpath("(//button[@type='submit'])[6]")).click();
		}else if(method.contentEquals("LocalBankPayment")){
			waitForElement(driver, By.cssSelector("#layout-column__column-1 > div.portlet-wrapper.portlet-mobile-cashier.portlet_type_border > div.fn-portlet.portlet > ul > li:nth-child(7) > div.info-list__field.fn-accordion-target")).click();
			driver.findElement(By.xpath("(//input[@name='amount'])[7]")).clear();
			driver.findElement(By.xpath("(//input[@name='amount'])[7]")).sendKeys("10");
			driver.findElement(By.xpath("(//button[@type='submit'])[7]")).click();
		}
	}
	
	@Then("^Set Amount \"([^\"]*)\"$")
	public void Set_Amount(String amount) throws Throwable {
		waitForElement(driver, By.name("amount")).sendKeys(amount);
	}

	@Then("^Read URL$")
	public void Read_URL() throws Throwable {
	    Thread.sleep(10000);
	    Assert.assertTrue(driver.getCurrentUrl().contains(url), url);
	}

	@Then("^back main page$")
	public void back_main_page() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
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
	}
	
}
*/