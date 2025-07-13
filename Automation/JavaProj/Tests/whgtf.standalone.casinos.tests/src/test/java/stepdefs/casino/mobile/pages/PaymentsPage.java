package stepdefs.casino.mobile.pages;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.junit.Assert;
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
import org.springframework.beans.BeansException;

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

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import stepdefs.casino.migration.MainWebPage;
import stepdefs.shared.SharedData;
import stepdefs.shared.SharedSteps;

public class PaymentsPage extends WebDriverUtils{

	private String PlayersUsersName;
	private String casinoName;
	private String depositlink;
	private PaymentsPage thisClass;
	private String userName;
	private static boolean init;
	
	public PaymentsPage() {
		if (!init) {
			init = true;
			if(AppContextRepository.getAc()!=null){			
				if(AppContextRepository.getAc().containsBean(PaymentsPage.class.getName()))
					thisClass = (PaymentsPage) AppContextRepository.getAc().getBean(PaymentsPage.class.getName());
				else
					Reporter.log("Propertys "+PaymentsPage.class.getName()+" error");
				assertTrue(navigateToRootElement());
			}
			init = false;
		} 
	}
	
	@Then("^User Select Payment Methode \"([^\"]*)\"$")
	public void user_Select_Methode(String method) throws Throwable {
			Thread.sleep(3000);
		    if (method.contentEquals("payPal")) {
		    	waitForElementByXpathClick("//div[@id='p_p_id_mobilecashier_WAR_cashierportlet_INSTANCE_iXcXPn5Wa5Q5_']/div[2]/ul/li[2]/div/div/img");
		    	assertTrue(navigateToRootElement());
		    	assertTrue(navigateToElementById("deposit-amount-PayPal-id"));
		    	assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("p.form__actions > button.btn.btn_type_success");
			}else if(method.contentEquals("paySafeCard")){
				waitForElementByXpathClick("//div[@id='p_p_id_mobilecashier_WAR_cashierportlet_INSTANCE_iXcXPn5Wa5Q5_']/div[2]/ul/li[3]/div/div/img");
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-PaySafeCard-id"));
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("p.form__actions > button.btn.btn_type_success");
			}else if(method.contentEquals("Skrill")){
				waitForElementByXpathClick("//div[@id='p_p_id_mobilecashier_WAR_cashierportlet_INSTANCE_iXcXPn5Wa5Q5_']/div[2]/ul/li[5]/div/div/img");
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-Moneybookers-id"));
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("p.form__actions > button.btn.btn_type_success");
			}else if(method.contentEquals("EcoCard")){
				waitForElementByXpathClick("//div[@id='p_p_id_mobilecashier_WAR_cashierportlet_INSTANCE_iXcXPn5Wa5Q5_']/div[2]/ul/li[6]/div/div/img");
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-EcoCard-id"));
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("p.form__actions > button.btn.btn_type_success");
			}else if(method.contentEquals("LocalBankPayment")){//
				waitForElementByXpathClick("//div[@id='p_p_id_mobilecashier_WAR_cashierportlet_INSTANCE_iXcXPn5Wa5Q5_']/div[2]/ul/li[7]/div/div/img");
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-Envoy-id"));
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("p.form__actions > button.btn.btn_type_success");
			}else{
				org.junit.Assert.assertTrue("no pay methode selected", true);
			}
		}
	
	@Then("^User Read Payment URL \"([^\"]*)\"$")
	public void user_Read(String url) throws Throwable {
		Thread.sleep(10000);
		String currentUrl = executeScript("return window.location.href");
		org.junit.Assert.assertTrue("error url"+ currentUrl, hasPartialURL(url));
		Reporter.log("current url:" + currentUrl);
	    //Assert.assertTrue(driver.getCurrentUrl().contains(url), url);
	}
	
	@Then("^User open Menu$")
	public void user_open_Menu() throws Throwable {
		SharedSteps.getScenario().write("Start open menu");
		assertTrue(refresh());
		assertTrue(navigateToRootElement());
		String css = "#application span.main-header__menu.fn-open-menu.left-header-block";
		assertTrue(waitForVisibilityOfElementByCss(css));
		assertTrue(navigateToElementByCSS(css));
		assertTrue(click());
	}

	@Then("^User open my account$")
	public void user_open_my_account() throws Throwable {
		assertTrue(navigateToRootElement());
		//String xpath = "#application > div.fn-slide-menu-container div.slide-menu__wrap.fn-menu-wrap.slide-menu__login li:nth-child(4) span.slide-menu__head__name";
		String xpath = "//span[contains(text(), 'My Account')]";
		assertTrue(waitForVisibilityOfElementByXPath(xpath));
		assertTrue(navigateToElementByXpath(xpath));
		//assertTrue(waitForVisibilityOfElementByCss(css));
		//assertTrue(navigateToElementByCSS(css));
		assertTrue(click());
	}

	@Then("^User open Responsible Gaming$")
	public void user_open_Responsible_Gaming() throws Throwable {
		Thread.sleep(2000);
		assertTrue(navigateToRootElement());
		String xpath = "//span[contains(text(), 'Responsible Gaming')]";
		assertTrue(waitForVisibilityOfElementByXPath(xpath));
		assertTrue(navigateToElementByXpath(xpath));
		/*String css = "#application > div.fn-slide-menu-container div.slide-menu__wrap.fn-menu-wrap.slide-menu__login li:nth-child(4)  li:nth-child(5) > span.slide-menu__point__name";
		assertTrue(waitForVisibilityOfElementByCss(css));
		assertTrue(navigateToElementByCSS(css));*/
		assertTrue(click());
	}

	@Then("^read Time reminder value$")
	public void read_Time_reminder_value() throws Throwable {
		Thread.sleep(5000);
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("timePeriod"));
		String msg = getValue();
		System.out.println(msg);
		Assert.assertTrue("find:"+ msg, msg.contentEquals("30"));
	}
	
	@Then("^User Set (\\d+) months$")
	public void user_Set_months(int months) throws Throwable {
		Thread.sleep(2000);
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("period"));
		assertTrue(selectDropdownOptionByValue(Integer.toString(months) + " months"));
	}

	@Then("^Not visible SelfExclude$")
	public void not_visible_SelfExclude() throws Throwable {
		Thread.sleep(2000);
		assertTrue(navigateToRootElement());
//		if (SharedSteps.getScenario().getName().contains("Whcc")) {
//			assertTrue(navigateToElementById("period"));
//			assertFalse(isDisplayed());
//		}else if (init) {
		assertFalse(navigateToElementById("period"));
//		}		
	}
	
	@Then("^P3 Not visible SelfExclude$")
	public void p3_not_visible_SelfExclude() throws Throwable {
		Thread.sleep(2000);
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("period"));
		assertFalse(isDisplayed());	
	}
	
	@Then("^User Set exclude$")
	public void user_Set_exclude() throws Throwable {
		waitForElementByCssClick("form.form.form_name_responsible-gaming-self-exclusion > div.form__actions > button.btn");
	}

	@Then("^User read msg \"(.*?)\"$")
	public void user_read_msg(String msg) throws Throwable {
		Thread.sleep(2000);
		assertTrue(navigateToRootElement());
		String css = "div.fn-popup-loader";
		assertTrue(waitForVisibilityOfElementByCss(css));
		assertTrue(navigateToElementByCSS(css));
		String msgTxt = getText();
		System.out.println(msgTxt);
		Assert.assertTrue(msgTxt.contains(msg));
	}
	
	@Then("^User Click on ok$")
	public void user_Click_on_ok() throws Throwable {
		waitForElementByCssClick("span.popup-modal__button.fn-self_exclusion-yes");
		Thread.sleep(5000);
	}

	@Then("^User Click on Timeout ok$")
	public void user_Click_on_Timeout_ok() throws Throwable {
		waitForElementByCssClick("span.popup-modal__button.fn-close");
		Thread.sleep(5000);
	}
	
	@Then("^User read exclude \"(.*?)\"$")
	public void user_read_exclude(String msg) throws Throwable {
		Thread.sleep(2000);
		assertTrue(navigateToRootElement());
		String css = "div.form-messages.fn-form-messages > p";
//		if (MainWebPage.getBrand().equals(MainWebPage.Brand.Whcc)) {
//			//css = "div.fn-popup-loader > div > div.form-messages.fn-form-messages > p";
//		} else if (MainWebPage.getBrand().equals(MainWebPage.Brand.Eg)) {
//			//css = "div.fn-popup-loader > div > div.left_wrapper > div.form-messages.fn-form-messages > p";
//		}
		assertTrue(waitForVisibilityOfElementByCss(css));
		assertTrue(navigateToElementByCSS(css));
		String msgTxt = getText();
		System.out.println(msgTxt);
		assertTrue(msg, msgTxt.contains(msg));
	}
	
	@Then("^User Set (\\d+) Hours$")
	public void user_Set_Hours(int arg1) throws Throwable {
		SharedSteps.getScenario().write("Start timeout");
		Thread.sleep(5000);
		assertTrue(navigateToRootElement());
		//assertTrue(waitForVisibilityOfElementById("timeout"));
		assertTrue(buildDropdownListById("timeout"));
		assertTrue(selectDropdownOptionByVisibleText("24 Hours"));
	}
	
	@Then("^Not visible Timeout$")
	public void not_visible_Timeout() throws Throwable {
		Thread.sleep(5000);
		assertTrue(navigateToRootElement());
		assertFalse(navigateToElementById("timeout"));
		
	}
	
	@Then("^P3 Not visible Timeout$")
	public void P3_not_visible_Timeout() throws Throwable {
		Thread.sleep(5000);
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("timeout"));
		assertFalse(isDisplayed());
	}
	
	@Then("^User Set Time Reminders$")
	public void user_Set_Time_Reminders() throws Throwable {
		Thread.sleep(2000);
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("timePeriod"));
		assertTrue(selectDropdownOptionByVisibleText("30 minutes"));
	}

	@Then("^User save TimeOut$")
	public void user_save_TimeOut() throws Throwable {
		waitForElementByXpathClick("(//button[@type='submit'])[2]");
	}
	
	@Then("^User save Session Remainder$")
	public void user_save_Session_Remainder() throws Throwable {
		waitForElementByXpathClick("(//button[@type='submit'])[1]");
	}
	
	@Then("^User Successfull timeOut ok click$")
	public void user_Successfull_timeOut_ok_click() throws Throwable {
		waitForElementByCssClick("span.popup-modal__button.fn-timeout-yes");
	}
	
	@Then("^User Successfull remaider ok click$")
	public void user_Successfull_remaider_ok_click() throws Throwable {
		waitForElementByCssClick("span.popup-modal__button.fn-close");
	}
}
