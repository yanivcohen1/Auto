/*package cucumber_runners;

import java.io.IOException;

import junit.framework.TestCase;
import lib.AbstractCucumberTest;

import org.junit.runner.RunWith;
import org.junit.runner.notification.RunNotifier;
import org.junit.runners.model.InitializationError;

import cucumber.api.junit.*;



@RunWith(Cucumber.class)
@Cucumber.Options(
        format = {"pretty", "html:target/cucumber/cucumber-html-report","json:target/cucumber/cucumber-json-report.json"}, // generate an html report
        tags={"@google2"},
        features = {"src/test/resources/cucumber/features"}, // location of the .feature file
	    glue = {"stepdefs"},
        name = "s.xml") 		 // must specify this if com.tendril.test.bdd.steps classes aren't in the same package or sub-package
public class runnerOld{

	
	protected void runTest() throws Throwable {
		AbstractCucumberTest abstractCucumberTest = new AbstractCucumberTest(this.getClass());
		abstractCucumberTest.run(1,null,null,null);
    }
}
*/