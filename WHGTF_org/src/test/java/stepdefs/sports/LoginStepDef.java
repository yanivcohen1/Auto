package stepdefs.sports;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import static org.junit.Assert.*;

import com.williamhill.whgtf.asl.AutomationScriptingLanguage;
import com.williamhill.whgtf.properties.PropertyReader;

import stepdefs.shared.SharedData;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by sudhakar on 20/11/14.
 */
public class LoginStepDef extends AutomationScriptingLanguage {

	private Logger logger = LogManager.getRootLogger();

	// Set SportsbookUrl Property for multi environment support from prop file.
	protected String scratchcardUrl = getProperty("scratchcardUrl");
	protected String sportsbookUsername = getProperty("sportsbookUsername");
	protected String sportsbookPassword = getProperty("sportsbookPassword");

	public LoginStepDef(SharedData sharedData) {
		// Example:
		// this.bonusCreationPage = sharedData.bonusCreationPage;
	}

	@Given("^the customer is on the Scratchcard lobby$")
	public void the_customer_on_the_Scratchcard_lobby() throws Throwable {		
		assertTrue(navigateToPage(scratchcardUrl));
	}
	
	

	@When("^the customer clicks Login Menu button$")
	public void the_customer_clicks_Login() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementByClassName("account-tab"));
		assertTrue(click());
	}

	@When("^enter correct credentials$")
	public void enter_correct_credentials() throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementByAttributeValue("placeholder", "Username"));
        clickAndHold(2000);
		assertTrue(typeIn(sportsbookUsername));
		assertTrue(navigateToRootElement());
        assertTrue(navigateToElementByAttributeValue("placeholder", "Password"));
		assertTrue(typeIn(sportsbookPassword));
		sleep(500);
	}

	@Then("^the account is logged in$")
	public void the_account_is_logged_in() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementByClassName("balance"));
		// Make sure you cant see the Join button
		assertTrue(navigateToRootElement());
		assertFalse(navigateToElementByCSS("a.button.-join.-small.ng-scope.ng-isolate-scope"));
		
	}
	
	@When("^clicks the Log in button$")
	public void click_the_login_button() throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementByCSS(".button.-form.-small"));
		// Updated to the database
		assertTrue(startTimeout(20000));
		assertTrue(click());
		assertTrue(stopTimeout("Login Scratchcard"));
	}
	
	//--
	@When("^they select Ramesses Riches$")
	public void they_select_Ramesses_Riches() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		assertTrue(scrollToElementByAttribute("alt", "Ramesses Riches"));
		//assertTrue(click());
		logger.info("");
		assertTrue(findImageClick("src\\test\\resources\\images\\RamessesRiches.PNG"));
	}

	@When("^I select 'No' to play sound$")
	public void i_select_No_to_play_sound() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  throw new PendingException();
	}

	@Then("^the game loads with the PLAY button visible$")
	public void the_game_loads_with_the_PLAY_button_visible() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}

	@When("^I select betting tab$")
	public void i_select_betting_tab() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

}
