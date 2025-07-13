package stepdefs.google;

import org.testng.Assert;

import junit.framework.JUnit4TestAdapter;
import junit.framework.TestResult;
import junit.textui.ResultPrinter;
import junit.textui.TestRunner;
import stepdefs.shared.SharedData;
import cucumber.api.PendingException;
//import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber_runners.DropdownRunner;
import cucumber_runners.tests;

/**
 * Created by sudhakar on 20/11/14.
 */
public class SampleStepDef {
	
	//private Logger logger = LogManager.getRootLogger();
	

    public SampleStepDef(SharedData sharedData) {
        // Example:
        // this.bonusCreationPage = sharedData.bonusCreationPage;
    }

    @Given("^that the user has access to the Internet$")
    public void that_the_user_has_access_to_the_Internet() throws Throwable {
    	System.out.println("test1");
    	// Assuming Connected to the Internet
    	//createBrowser("browserName", "Chrome");
    }

    @Given("^he navigates to (.*)$")
    public void he_navigates_to_url(String url) throws Throwable {
    	System.out.println("test");
    	
/*    	JUnit4TestAdapter jUnit4TestAdapter = new JUnit4TestAdapter(DropdownRunner.class);
    	TestResult result = new TestResult();
    	ResultPrinter fPrinter = new ResultPrinter(System.out);
		result.addListener(fPrinter);
		long startTime = System.currentTimeMillis();
    	jUnit4TestAdapter.run(result);*/
		//TestResult result = TestRunner.run(jUnit4TestAdapter);
        //tests.suite.addTest(new JUnit4TestAdapter(runnerOld2.class));
    	//navigateToPage(url);
        //logger.info("This is Information level Log4j2");
    }

    @Then("^the (.*) is displayed$")
    public void the_following_button_is_displayed(String buttonName) throws Throwable {
        //navigateToRootElement();
        switch(buttonName) {
            case "Google Search":
            	//assertTrue(navigateToElementByName("btnK"));
                //assertEquals(getAttribute("value"), buttonName);
                // Sikuli Image Example
                //assertTrue(findImage("src/test/resources/images/google/googleSearch.PNG"));
                break;
            case "I'm Feeling Lucky":
            	//assertTrue(navigateToElementByName("btnI"));
                //assertEquals(getAttribute("value"), buttonName);
                break;
            default:
                //throw new PendingException();
        }
        Assert.assertEquals(3,4);
    }
}
