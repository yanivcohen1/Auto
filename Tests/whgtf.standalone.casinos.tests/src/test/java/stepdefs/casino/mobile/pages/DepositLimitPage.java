package stepdefs.casino.mobile.pages;

import com.wh.auto.common.Reporter;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.repository.AppContextRepository;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;

public class DepositLimitPage extends WebDriverUtils{

	private DepositLimitPage thisClass;
	private static boolean init;
	
	public DepositLimitPage() {
		if (!init) {
			init = true;
			if(AppContextRepository.getAc().containsBean(DepositLimitPage.class.getName()))
				thisClass = (DepositLimitPage) AppContextRepository.getAc().getBean(DepositLimitPage.class.getName());
		    else
				Reporter.log("Propertys DepositPage error");
			assertTrue(navigateToRootElement());
			init = false;
		}
	}
	
	@Then("^User click on Deposit limit page$")
	public void user_click_on_Deposit_limit_page() throws Throwable {
	    waitForElementByXpathClick("//a[@href='/deposit-limits']");
	}

	@Then("^User click on new limit$")
	public void user_click_on_new_limit() throws Throwable {
		waitForElementByXpathClick("//div[contains(text(), 'New Limit')]");
	}

	@Then("^User choose Deposit limit <\"(.*?)\">$")
	public void user_choose_Deposit_limit(String limit) throws Throwable {
			assertTrue(navigateToRootElement());
			assertTrue(buildDropdownListById("timePeriod"));
			assertTrue(selectDropdownOptionByValue(limit));
			//assertTrue(click());
	}

	@Then("^User choose amount (\\d+)$")
	public void user_choose_amount(int amount) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(buildDropdownListById("daydepositlimit"));
		assertTrue(selectDropdownOptionByValue(Integer.toString(amount)));
		//assertTrue(click());
	}

	@Then("^user click on confirm$")
	public void user_click_on_confirm() throws Throwable {
		waitForElementByXpathClick("//button[@type='submit']");
	}
}