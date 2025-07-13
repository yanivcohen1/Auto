package stepdefs.testing;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
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
public class GoogleStepDef extends AutomationScriptingLanguage {
	
	private Logger logger = LogManager.getRootLogger();
	

    public GoogleStepDef(SharedData sharedData) {
        // Example:
        // this.bonusCreationPage = sharedData.bonusCreationPage;
    }

    @When("^I click on button \"(.*?)\" \"(.*?)\" \"(.*?)\"$")
    public void i_click_on_button(String to, String subject, String msg) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    	System.out.println("to:"+to+" subject:"+subject+ " mmsg:"+msg);
    }
    
    @Given("^that the user has access to the Internet$")
    public void that_the_user_has_access_to_the_Internet() throws Throwable {
    	//System.out.println("asdasd");
    	//System.out.println("asdasd");
    	// Assuming Connected to the Internet
    	//createBrowser("browserName", "Chrome");
    }

    @Given("^he navigates to (.*)$")
    public void he_navigates_to_url(String url) throws Throwable {
        navigateToPage(url);
        logger.info("This is Information level Log4j2");
    }

    @Then("^the (.*) is displayed$")
    public void the_following_button_is_displayed(String buttonName) throws Throwable {
        navigateToRootElement();
        switch(buttonName) {
            case "Google Search":
            	String butn = "btnK";
            	assertTrue(navigateToElementByName(butn));
                assertEquals(getAttribute("value"), buttonName);
                // Sikuli Image Example
                //assertTrue(findImage("src/test/resources/images/google/googleSearch.PNG"));
                break;
            case "I'm Feeling Lucky":
            	assertTrue(navigateToElementByName("btnI"));
                assertEquals(getAttribute("value"), buttonName);
                break;
            default:
                throw new PendingException();
        }
    }
}
