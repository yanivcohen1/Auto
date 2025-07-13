package stepdefs.mobileTests;

import com.williamhill.whgtf.asl.AutomationScriptingLanguage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import stepdefs.shared.SharedData;

/**
 * Created by sudhakar on 20/11/14.
 */
public class MobileStepDef extends AutomationScriptingLanguage {

    // Set SportsbookUrl Property for multi environment support from prop file.
    protected String whccMobileHomePage = "https://github.com";//getProperty("whccMobileHomePage");
    //System.setProperty("browser", "firefox");

    private Logger logger = LogManager.getRootLogger();

    public MobileStepDef(SharedData sharedData) {
        // Example:
        // this.bonusCreationPage = sharedData.bonusCreationPage;
    }

    @Given("^the user is on the GitHub Homepage$")
    public void the_user_is_on_the_GitHub_Homepage() throws Throwable {

        //get the page
        assertTrue(navigateToPage(whccMobileHomePage));

        //login
        assertTrue(navigateToRootElement());
        waitForElementToBeClickableByClassName("btn btn_action_login fr fn -login");
        assertTrue(navigateToElementByClassName("btn btn_action_login fr fn -login"));
        assertTrue(click());


    }
//
//    @When("^the user logs into GitHub$")
//    public void the_user_logs_into_GitHub() throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }
//
//    @Then("^I verify Im logged into GitHub$")
//    public void i_verify_Im_logged_into_GitHub() throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }
//
//    @When("^I logout of GitHub$")
//    public void i_logout_of_GitHub() throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }

}
