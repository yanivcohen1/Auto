package stepdefs.shared;

import com.williamhill.whgtf.testrunner.CucumberGlobalHooks;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

/**
 * Created by atanas on 02/12/14.
 */
public class SharedSteps {

    @Before
    public void before(Scenario scenario) {
        new CucumberGlobalHooks().before(scenario);
        System.out.println("senarios:" + scenario.getSourceTagNames());
        
    }

    @After
    public void after(Scenario scenario) {
        new CucumberGlobalHooks().after(scenario);
    }
}
