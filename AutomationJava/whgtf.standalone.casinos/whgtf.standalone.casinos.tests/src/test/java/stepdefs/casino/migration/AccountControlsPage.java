package stepdefs.casino.migration;

import com.wh.auto.common.Reporter;
import com.wh.auto.common.WebDriverUtils;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import stepdefs.shared.SharedSteps;

public class AccountControlsPage extends WebDriverUtils{
	
	@Then("^user click on Account Controls$")
	public void user_click_on_Account_Controls() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}

	@Then("^user click on Account Closure$")
	public void user_click_on_Account_Closure() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}

	@Then("^user select reason$")
	public void user_select_reason() throws Throwable {
		SharedSteps.getScenario().write("Start Account Closure");
		Thread.sleep(3000);
		assertTrue(navigateToRootElement());
		//assertTrue(waitForVisibilityOfElementById("timeout"));
		assertTrue(buildDropdownListById("close_my_account_reason_select"));
		assertTrue(selectDropdownOptionByVisibleText("I am not happy with your offers"));
	}

	@Then("^user click on confirm close$")
	public void user_click_on_confirm_close() throws Throwable {
		waitForElementByCssClick("#close_my_account_submit");
	}

	@Then("^user click on confirm close in popup$")
	public void user_click_on_confirm_close_in_popup() throws Throwable {
		waitForElementByCssClick("#close_my_account_modal_popup_submit");
	}

	@Then("^user click on OK in popup$")
	public void user_click_on_OK_in_popup() throws Throwable {
		waitForElementByCssClick("#close_my_account_confirm_popup_submit");
	}

	@Then("^user read msg \"(.*?)\"$")
	public void user_read_msg(String msg) throws Throwable {
		Thread.sleep(3000);
		assertTrue(navigateToRootElement());
		String css = "div.popup-modal__title.fn-popup-title";
		assertTrue(waitForVisibilityOfElementByCss(css));
		assertTrue(navigateToElementByCSS(css));
		String msgTxt = getText();
		System.out.println(msgTxt);
		assertTrue(msgTxt, msgTxt.contains(msg));
	}

	@Then("^user click on re-open my account$")
	public void user_click_on_re_open_my_account() throws Throwable {
		waitForElementByCssClick("#reopen_my_account_modal_popup_submit");
	}

	@Then("^user click on Log In$")
	public void user_click_on_Log_In() throws Throwable {
		waitForElementByCssClick("#reopen_my_account_confirm_popup_submit");
	}
	
	@Then("^user click on new limit$")
	public void user_click_on_new_limit() throws Throwable {
		waitForElementByCssClick("div.info-list__field.info-list__header.fn-accordion-target.fn-new-limit");
	}

	@Then("^user choose type \"(.*?)\"$")
	public void user_choose_type(String type) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("timePeriod"));
		assertTrue(selectDropdownOptionByValue(type));
	}

	@Then("^user choose limit \"(.*?)\"$")
	public void user_choose_limit(String value) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("daydepositlimit"));
		assertTrue(selectDropdownOptionByValue(value));
	}

	@Then("^user click on Confirme limit$")
	public void user_click_on_Confirme_limit() throws Throwable {
		String xpath = "//*[contains(text(), 'Confirm')]";
		waitForElementByXpathClick(xpath);
	}

	@Then("^user click on deposit top popup$")
	public void user_click_on_deposit_top_popup() throws Throwable {
		waitForElementByCssClick("article > div > a.btn");
	}
	
}
