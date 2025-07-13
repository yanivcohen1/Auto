/*package cucumber_runners;

import java.io.IOException;

import junit.framework.TestCase;
import lib.CucumberCostum;

import org.junit.runner.RunWith;
import org.junit.runner.notification.RunNotifier;
import org.junit.runners.model.InitializationError;

import com.beust.jcommander.Parameters;

import cucumber.api.junit.*;



@RunWith(CucumberCostum.class)
@Cucumber.Options(
        format = {"pretty", "html:target/cucumber/cucumber-html-report","json:target/cucumber/cucumber-json-report.json"}, // generate an html report
        tags={"@google5,s.xml"},
        features = {"src/test/resources/cucumber/features"}, // location of the .feature file
	    glue = {"stepdefs"})// must specify this if com.tendril.test.bdd.steps classes aren't in the same package or sub-package
public class runnerOld2{

	
	protected void runTest() throws Throwable {
		AbstractCucumberTest abstractCucumberTest = new AbstractCucumberTest(this.getClass());
		abstractCucumberTest.run(1,null,null,null);
    }
}
*/