package stepdefs.casino.migration;

import com.wh.auto.common.Reporter;
import com.wh.auto.common.WebDriverUtils;
import cucumber.api.java.en.Then;
import stepdefs.shared.SharedSteps;

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
			}else if(method.contentEquals("LocalBankPayment")){
				waitForElementByXpathClick("//img[@src='/library/payments2/Envoy_EN.jpg']");//click on image 				
				waitForElementByXpathClick("//*[@id='deposit-amount-Fast Bank Transfer-id']");//fill amount			
				assertTrue(typeIn("0245"));
				waitForElementByXpathClick("//*[@id='eg_deposit_Fast Bank Transfer_deposit_btn']");//click on deposit
			}else{
				org.junit.Assert.assertTrue("no pay methode selected", true);
			}
		}

	@Then("^Desktop MigUser Select Payment Methode \"([^\"]*)\"$")
	public void desk_user_Select_Methode(String method) throws Throwable {
			Thread.sleep(3000);
		    if (method.contentEquals("payPal")) {
		    	if (MainWebPage.getType().equals(MainWebPage.Type.DESKTOP)) {
		    		waitForElementByXpathClick("//li[@data-id='PayPal']/img");
		    	}else{
		    		waitForElementByXpathClick("//img[@src='/library/payments2/PayPal.jpg']");
		    	}
		    	assertTrue(navigateToRootElement());
		    	assertTrue(navigateToElementById("deposit-amount-PayPal-id"));
		    	assertTrue(clear());
		    	assertTrue(typeIn("0245"));
		    	//button[@value='Next' and @title='next']
		    	waitForElementByIdClick("eg_deposit_PayPal_deposit_btn");
		    	//waitForElementByCssClick("form.form.form_name_cashier-deposit > p.form__actions > button.btn.btn-green-desk");
			}else if(method.contentEquals("paySafeCard")){
				waitForElementByXpathClick("//li[@data-id='PaySafeCard']/img");
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-PaySafeCard-id"));
				assertTrue(clear());
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("li.deposit-method-container.opened > div.info-list.info-list_type_sub > form.form.form_name_cashier-deposit > p.form__actions > button.btn.btn-green-desk");
			}else if(method.contentEquals("Skrill")){
				waitForElementByXpathClick("//li[@data-id='Moneybookers']/img");
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-Moneybookers-id"));
				assertTrue(clear());
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("li.deposit-method-container.opened > div.info-list.info-list_type_sub > form.form.form_name_cashier-deposit > p.form__actions > button.btn.btn-green-desk");
			}else if(method.contentEquals("EcoCard")){
				waitForElementByXpathClick("//li[@data-id='EcoCard']/img");
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-EcoCard-id"));
				assertTrue(clear());
				assertTrue(typeIn("0245"));
		    	waitForElementByCssClick("li.deposit-method-container.opened > div.info-list.info-list_type_sub > form.form.form_name_cashier-deposit > p.form__actions > button.btn.btn-green-desk");
			}else if(method.contentEquals("LocalBankPayment")){
				if (MainWebPage.getBrand().equals(MainWebPage.Brand.Eg)) {//click on pic
					waitForElementByXpathClick("//li[@data-id='BANKTRANSFER']/img");
				}else if(MainWebPage.getBrand().equals(MainWebPage.Brand.Whcc)){
					if (MainWebPage.getType().equals(MainWebPage.Type.DESKTOP)) {
						waitForElementByXpathClick("//img[@src='/library/payments_desk/deposit_big_img/fastbank_EN.png']");
					} else {
						waitForElementByXpathClick("//img[@src='/library/payments2/Envoy_EN.jpg']");
					}
				}
				assertTrue(navigateToRootElement());
				assertTrue(navigateToElementById("deposit-amount-Fast Bank Transfer-id"));
				assertTrue(clear());
				assertTrue(typeIn("0245"));//fill amount
				if (MainWebPage.getBrand().equals(MainWebPage.Brand.Eg)) {//click on deposit
					waitForElementByIdClick("eg_deposit_Fast Bank Transfer_deposit_btn");
				}else if(MainWebPage.getBrand().equals(MainWebPage.Brand.Whcc)){
					waitForElementByXpathClick("//*[@id='eg_deposit_Fast Bank Transfer_deposit_btn']");
				}
			}else{
				org.junit.Assert.assertTrue("no pay methode selected", true);
			}
		}
	
	@Then("^migUser Read Payment URL \"([^\"]*)\"$")
	public void user_Read(String url) throws Throwable {
		Thread.sleep(10000);
		String currentUrl = readCurrentURL();
		assertTrue("error url"+ currentUrl, hasPartialURL(url));
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
	
	@Then("^Not visible Timeout$")
	public void not_visible_Timeout() throws Throwable {
		Thread.sleep(5000);
		assertTrue(navigateToRootElement());
		assertFalse(navigateToElementById("timeout"));
		
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
		String xpath = "#eg_sidemenu_account-controls";//"//span[contains(text(), 'Responsible Gaming')]";
		assertTrue(waitForVisibilityOfElementByCss(xpath));
		assertTrue(navigateToElementByCSS(xpath));
		/*String css = "#application > div.fn-slide-menu-container div.slide-menu__wrap.fn-menu-wrap.slide-menu__login li:nth-child(4)  li:nth-child(5) > span.slide-menu__point__name";
		assertTrue(waitForVisibilityOfElementByCss(css));
		assertTrue(navigateToElementByCSS(css));*/
		assertTrue(click());
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

	@Then("^User read timeout msg \"(.*?)\"$")
	public void user_read_timeout_msg(String msg) throws Throwable {
		Thread.sleep(2000);
		String msgTxt;
		if (MainWebPage.getBrand().equals(MainWebPage.Brand.Eg)){
			assertTrue(navigateToRootElement());
			String css = "div.fn-popup-loader";
			assertTrue(waitForVisibilityOfElementByCss(css));
			assertTrue(navigateToElementByCSS(css));
		}else if (MainWebPage.getBrand().equals(MainWebPage.Brand.Whcc)){
			//waitForElementByCssClick("div.popup-modal__buttons > span");
			Thread.sleep(1000);
			assertTrue(navigateToRootElement());
			String css = "div.fn-popup-loader.popup-loader-wrapper";
			assertTrue(waitForVisibilityOfElementByCss(css));
			assertTrue(navigateToElementByCSS(css));
		}
		msgTxt = getText();
		System.out.println(msgTxt);
		assertTrue(msgTxt, msgTxt.contains(msg));
	}
	
	@Then("^User read msg \"(.*?)\"$")
	public void user_read_msg(String msg) throws Throwable {
		Thread.sleep(2000);
		String msgTxt;
		assertTrue(navigateToRootElement());
		String css = "div.fn-popup-loader";
		assertTrue(waitForVisibilityOfElementByCss(css));
		assertTrue(navigateToElementByCSS(css));
		msgTxt = getText();
		System.out.println(msgTxt);
		assertTrue(msgTxt, msgTxt.contains(msg));
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

	@Then("^user click on timeout$")
	public void user_click_on_timeout() throws Throwable {
		waitForElementByCssClick("#my_account_time_out_link");
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
	
	@Then("^User save TimeOut$")
	public void user_save_TimeOut() throws Throwable {
		if (MainWebPage.getType().equals(MainWebPage.Type.DESKTOP)) {
			waitForElementByXpathClick("(//button[@type='submit'])[2]");
		}else{
			waitForElementByXpathClick("//button[@type='submit']");
		}
		
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
	
	@Then("^User Logout msg OK click$")
	public void user_Logout_msg_OK_click() throws Throwable {
		waitForElementByCssClick("span.popup-modal__button.fn-close");
		Thread.sleep(5000);
	}
}
