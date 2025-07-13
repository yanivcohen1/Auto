package stepdefs.shared;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

/**
 * Created by atanas on 02/12/14.
 */
public class SharedSteps {

	public static String glue;
    @Before
    public void before(Scenario scenario) {
    	System.out.println(scenario.getName());
    	scenario.getSourceTagNames();
        //new CucumberGlobalHooks().before(scenario);
    }

    @After
    public void after(Scenario scenario) {
        //new CucumberGlobalHooks().after(scenario);
    }
}
