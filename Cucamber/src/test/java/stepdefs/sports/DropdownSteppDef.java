/*package stepdefs.sports;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import com.williamhill.whgtf.asl.AutomationScriptingLanguage;
import com.williamhill.whgtf.properties.PropertyReader;


import stepdefs.shared.SharedData;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

*//**
 * Created by sudhakar on 20/11/14.
 *//*
public class DropdownSteppDef extends AutomationScriptingLanguage {
	
	private Logger logger = LogManager.getRootLogger();
	String sbUrl =	getProperty("sportsbookUrl");
	private Scenario scenario;

    @Before
    public void before(Scenario scenario) {
        this.scenario = scenario;
    }
	
	
	@Given("^the user is on the Sportsbook Homepage$")
	public void the_user_is_on_the_Sportsbook_Homepage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		navigateToPage(sbUrl);
		//close pop up if appears
		navigateToRootElement();
		if (navigateToElementByCSS("#modalPopup2:not([style*='none'])")){
		    assertTrue(navigateToElementById("yesBtn"));
		    assertTrue(click());
		}
	    //throw new PendingException();
	}

	@When("^they change the odds to (.*)$")
	public void they_change_the_odds_to_(String oddsFormat) throws Throwable {
		waitForVisibilityOfElementById("oddsSelect");
		navigateToRootElement();
        assertTrue(buildDropdownListById("oddsSelect"));
        assertTrue(selectDropdownOptionByValue(oddsFormat.toUpperCase()));
		// Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}
	
	@Then("^bets are available in (.*) format$")
	public void bets_are_available_in_format(String oddsFormat) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		assertTrue(navigateToRootElement());
        assertTrue(navigateToElementByPartialId("selection"));

        if (oddsFormat.contains("DECIMAL")){
            assertTrue(hasPartialText("."));
        }

        else if (oddsFormat.contains("ODDS")){
            assertTrue(hasPartialText("/"));
        }

        else if (oddsFormat.contains("AMERICAN")){
            assertTrue(hasPartialText("+","-"));
           
        }
        logger.info("end");
        scenario.write("End 1 ");
        scenario.write("<h2 style='background-color:#FFFF00'> End 2 </h2>");
    }

	@After
    public void after() {
        if (scenario.isFailed()) {
        	
		}
		
    }
}
*/