package stepdefs.casino.migration;

import com.wh.auto.common.Reporter;
import com.wh.auto.common.WebDriverUtils;
import cucumber.api.java.en.Then;

public class PaymentsPage extends WebDriverUtils{
	
	@Then("^migUser Select Payment Methode \"([^\"]*)\"$")
	public void user_Select_Methode(String method) throws Throwable {
			Thread.sleep(7000);
		    if (method.contentEquals("payPal")) {
		    	//img[@value='Next' and @title='next']
		    	waitForElementByXpathClick("//img[@src='/library/payments2/PayPal.jpg']");
		    	//waitForElementByXpathClick("//div[@id='p_p_id_mobilecashier_WAR_cashierportlet_INSTANCE_iXcXPn5Wa5Q5_']/div[2]/ul/li[2]/div/div/img");
		    	assertTrue(navigateToRootElement());
		    	assertTrue(navigateToElementById("deposit-amount-PayPal-id"));
		    	assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("p.form__actions > button.btn.btn_type_success");
			}else if(method.contentEquals("paySafeCard")){
				waitForElementByXpathClick("//img[@src='/library/payments2/PaySafeCard.jpg']");
				//waitForElementByXpathClick("//div[@id='p_p_id_mobilecashier_WAR_cashierportlet_INSTANCE_iXcXPn5Wa5Q5_']/div[2]/ul/li[3]/div/div/img");
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-PaySafeCard-id"));
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("p.form__actions > button.btn.btn_type_success");
			}else if(method.contentEquals("Skrill")){
				//waitForElementByXpathClick("//div[@id='p_p_id_mobilecashier_WAR_cashierportlet_INSTANCE_iXcXPn5Wa5Q5_']/div[2]/ul/li[5]/div/div/img");
				assertTrue(scrollToElementByXpath("//img[@src='/library/payments2/Neteller.jpg']"));		
				waitForElementByXpathClick("//img[@src='/library/payments2/Skrill.jpg']");
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-Moneybookers-id"));
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("p.form__actions > button.btn.btn_type_success");
			}else if(method.contentEquals("EcoCard")){
				//waitForElementByXpathClick("//div[@id='p_p_id_mobilecashier_WAR_cashierportlet_INSTANCE_iXcXPn5Wa5Q5_']/div[2]/ul/li[6]/div/div/img");
				waitForElementByXpathClick("//img[@src='/library/payments2/Ecopayz.jpg']");
				assertTrue(scrollToElementById("deposit-amount-EcoCard-id"));
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-EcoCard-id"));
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("p.form__actions > button.btn.btn_type_success");
			}else if(method.contentEquals("LocalBankPayment")){//
				//waitForElementByXpathClick("//div[@id='p_p_id_mobilecashier_WAR_cashierportlet_INSTANCE_iXcXPn5Wa5Q5_']/div[2]/ul/li[7]/div/div/img");
				waitForElementByXpathClick("//img[@src='/library/payments2/Envoy_EN.jpg']");
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-Envoy-id"));
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("p.form__actions > button.btn.btn_type_success");
			}else{
				org.junit.Assert.assertTrue("no pay methode selected", true);
			}
		}

	@Then("^Desktop MigUser Select Payment Methode \"([^\"]*)\"$")
	public void desk_user_Select_Methode(String method) throws Throwable {
			Thread.sleep(3000);
		    if (method.contentEquals("payPal")) {
		    	waitForElementByXpathClick("//li[@data-id='PayPal']/img");
		    	assertTrue(navigateToRootElement());
		    	assertTrue(navigateToElementById("deposit-amount-PayPal-id"));
		    	assertTrue(typeIn("0245"));
		    	//button[@value='Next' and @title='next']
		    	waitForElementByCssClick("form.form.form_name_cashier-deposit > p.form__actions > button.btn.btn-green-desk");
			}else if(method.contentEquals("paySafeCard")){
				waitForElementByXpathClick("//li[@data-id='PaySafeCard']/img");
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-PaySafeCard-id"));
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("li.deposit-method-container.opened > div.info-list.info-list_type_sub > form.form.form_name_cashier-deposit > p.form__actions > button.btn.btn-green-desk");
			}else if(method.contentEquals("Skrill")){
				waitForElementByXpathClick("//li[@data-id='Moneybookers']/img");
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-Moneybookers-id"));
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("li.deposit-method-container.opened > div.info-list.info-list_type_sub > form.form.form_name_cashier-deposit > p.form__actions > button.btn.btn-green-desk");
			}else if(method.contentEquals("EcoCard")){
				waitForElementByXpathClick("//li[@data-id='EcoCard']/img");
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-EcoCard-id"));
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("li.deposit-method-container.opened > div.info-list.info-list_type_sub > form.form.form_name_cashier-deposit > p.form__actions > button.btn.btn-green-desk");
			}else if(method.contentEquals("LocalBankPayment")){//
				if (MainWebPage.getBrand().equals(MainWebPage.Brand.Eg)) {
					waitForElementByXpathClick("//li[@data-id='Envoy']/img");
				}else if(MainWebPage.getBrand().equals(MainWebPage.Brand.Whcc)){
					waitForElementByXpathClick("//img[@src='/library/payments2/Envoy_EN.jpg']");
				}
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-Envoy-id"));
				assertTrue(typeIn("0245"));
				if (MainWebPage.getBrand().equals(MainWebPage.Brand.Eg)) {
					waitForElementByCssClick("li.deposit-method-container.opened > div.info-list.info-list_type_sub > form.form.form_name_cashier-deposit > p.form__actions > button.btn.btn-green-desk");
				}else if(MainWebPage.getBrand().equals(MainWebPage.Brand.Whcc)){
					waitForElementByCssClick("#eg_deposit_Envoy_deposit_btn");
				}
		    	
			}else{
				org.junit.Assert.assertTrue("no pay methode selected", true);
			}
		}
	
	@Then("^migUser Read Payment URL \"([^\"]*)\"$")
	public void user_Read(String url) throws Throwable {
		Thread.sleep(10000);
		String currentUrl = readCurrentURL();
		org.junit.Assert.assertTrue("error url"+ currentUrl, hasPartialURL(url));
		Reporter.log("current url:" + currentUrl);
	    //Assert.assertTrue(driver.getCurrentUrl().contains(url), url);
	}
	
	@Then("^Desktop migUser Read Payment URL \"([^\"]*)\"$")
	public void desk_user_Read(String url) throws Throwable {
		Thread.sleep(10000);
		navigateToOtherWindow();
		String currentUrl = executeScript("return window.location.href");
		assertTrue("error url"+ currentUrl, hasPartialURL(url));
		Reporter.log("current url:" + currentUrl);
	    //Assert.assertTrue(driver.getCurrentUrl().contains(url), url);
	}
}
