package stepdefs.casino.migration;

import java.util.List;

import javax.swing.text.Utilities;

import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import stepdefs.shared.SharedData;

public class EventsTrigers extends WebDriverUtils{

	MainWebPage mainWebPage = new MainWebPage();
	RegisterPage registerPage = new RegisterPage();
	DepositPage depositPage = new DepositPage();
	
	@Given("^migUser triger event \"(.*?)\"$")
	public void miguser_triger_event(String event) throws Throwable {
	    if ("menuOpened".equals(event)) {
	    	openSideMenu();
		}else if("menuClosed".equals(event)){
			openSideMenu();
			waitForElementByCssClick("div.slide-menu__header > span");
		}else if("loginPopupClose".equals(event)){
			mainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page();
			waitForElementByCssClick("#eg_popup_login_close");
		}else if("loginPopupOpen".equals(event)){
			mainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page();
		}else if("loggedin".equals(event)){
			mainWebPage.loginMainPage();
		}else if("loggedout".equals(event)){
			mainWebPage.loginMainPage();
			openSideMenu();
			waitForElementByCssClick("#eg_logout");
		}else if("Registration".equals(event)){
			registerPage.register();
		}else if("successDeposit".equals(event)){
			registerPage.register();
			depositPage.depositOnly();
		}else if("lobbyLeave".equals(event) ||
				"gameLaunch".equals(event) ||
				"gameloggedin".equals(event)){
			openGame("Great Blue");
			mainWebPage.login();
		}else if("lobbyEnterFromGame".equals(event)){
			openGame("Great Blue");
			mainWebPage.login();
			sound_popup();
			game_is_open();
			click_lobby();
			close_advertiser_win();
			openSideMenu();
		}else if("lobbyEnter".equals(event)){
			
		}else if("RichInbox".equals(event)){
			executeScript("setRichInboxMessages(2)");
			openSideMenu();
			waitForElementByCssClick("#eg_sidemenu_richInbox");
		}else{
			throw new Exception("Event not set" + event);
		}
	}	

	@Then("^migUser Read fired Event start with \"(.*?)\" and contain \"(.*?)\"$")
	public void miguser_Read_fired_Event_start_with_and_contain_action_menuOpened(String start, String contain) throws Throwable {
		Thread.sleep(3000);
		List<String> readNetworks = readNetwork();
		boolean find = false;
		String network = "";
		for (String readNetwork : readNetworks) {
			readNetwork = readNetwork.replace("\\\"", "\"");
			network = network + System.lineSeparator() + readNetwork;
			if (readNetwork.contains(start) && readNetwork.contains(contain)) {
				find = true;
				break;
			}
		}
		if (SharedData.isDebug()) {
			Utility.writeTofile("C:/Temp/tets.txt", network, false);
			assertTrue("Network Data:"+ network , find);
		}else{
			assertTrue(find);
		}
	}
	
	private void openGame(String gameName) {
		String css = "//*[@id='homepage_magnifying_glass_input']";
		//SharedSteps.setCloseBrowser(false);
        //if (MainWebPage.getBrand().equals(MainWebPage.Brand.Eg)) {
        	waitForElementByXpathClick(css);
		//}else if(MainWebPage.getBrand().equals(MainWebPage.Brand.Whcc)){
			//waitForElementByXpathClick("//input[@placeholder='Search for a game']");
		//}
        typeIn(gameName);
        assertTrue(waitForElementByXpathClick("//li[@data-index='0']"));
	}
	
	@Then("^sound popup$")
	public void sound_popup() throws Throwable {
		Thread.sleep(5000);
		assertTrue(navigateToFrameByClass("game-iframe"));
		assertTrue(waitForElementByIdClick("soundMuteConfirmButton"));
	}
	
	@Then("^game is open$")
	public void game_is_open() throws Throwable {
		Thread.sleep(5000);
		//assertTrue(navigateToFrameByClass("game-iframe"));
		try {
			returnToDefaultWindow();
			navigateToFrameByClass("game-iframe");
		} catch (Exception e) {	}
		assertTrue(waitForElementByIdClick("mainMenuButton"));
	}
	
	@Then("^click lobby$")
	public void click_lobby() throws Throwable {
		//CustomTouchAction cta = new CustomTouchAction();
		//cta.swipeLeft(elementToSwipe);
		String id = "lobby";
		assertTrue(scrollToElementById(id));
		Thread.sleep(2000);
		waitForElementByIdClick(id);
	}
	
	private void close_advertiser_win() throws InterruptedException {
		Thread.sleep(2000);
		waitForElementByIdClick("gameAdvisorMobileCloseButton");
	}
	
	private void openSideMenu() {
		if (MainWebPage.getBrand().equals(MainWebPage.Brand.Eg)) {
        	waitForElementByIdClick("eg_homepage_side_menu_hamburger");
		}else if(MainWebPage.getBrand().equals(MainWebPage.Brand.Whcc)){
			waitForElementByIdClick("wh_homepage_side_menu_hamburger");
		}
	}
	
}
