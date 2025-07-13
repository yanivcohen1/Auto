package stepdefs.gaming;

import org.junit.*;

import stepdefs.shared.SharedData;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by sudhakar on 20/11/14.
 */
public class GamingStepDef {

    public GamingStepDef(SharedData sharedData) {
        // Example:
        // this.bonusCreationPage = sharedData.bonusCreationPage;	
    }

    @Given("^a precondition has value value(\\d+) val value(\\d+)$")
    public void a_precondition_has_value_value_val_value(int arg1, int arg2) throws Throwable {
        // Express the Regexp above with the code you wish you had
        //throw new PendingException();
    	System.out.println("given1:"+arg1+" given2:"+ arg2);
    }

    @When("^something with value(\\d+)$")
    public void something_with_value(int arg1) throws Throwable {
        // Express the Regexp above with the code you wish you had
        //throw new PendingException();
    	System.out.println("When:"+arg1);
    }

    @Then("^check value(\\d+) is the output$")
    public void check_value_is_the_output(int arg1) throws Throwable {
        // Express the Regexp above with the code you wish you had
    	System.out.println("Then:needed33 "+arg1);
    	Assert.assertEquals(33, arg1);
    }
    
    @Given("^test ODDS(\\d+)$")
    public void test_ODDS(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println(arg1);
    }
    
}
