package cucumber_runners;

import lib.CucumberCostum;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import org.junit.runner.RunWith;

/**
 * Created by atanas on 24/11/14.
 */
@CucumberOptions(
        plugin = {"pretty",
                "html:target/cucumber/cucumber-html-report",
                "json:target/cucumber/cucumber-json-report.json"
                },
        dryRun=false,
        monochrome=true,
        tags = "@testt1,@testt2",//,s.xml
        features = "src/test/resources/cucumber/features",
        glue = {"stepdefs"})
@RunWith(Cucumber.class)
public class SimpleRunnerTest {
}
