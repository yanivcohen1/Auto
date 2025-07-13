package cucumber_runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by atanas on 24/11/14.
 */
@CucumberOptions(
        plugin = {"pretty",
                "html:target/cucumber/cucumber-html-report",
                "json:target/cucumber/cucumber-json-report.json",
                "rerun:target/rerun.txt"
                },
        dryRun=false,
        monochrome=true,
        tags = {"@test2"},//,@google5
        //features = {
        //		"@target/test-classes/cucumber/features/rerun.txt"
        		//"./src/test/resources/cucumber/features",
        		//"./src/test/resources/cucumber/features/Simple.feature:15"
        //		},
        features = "./src/test/resources/cucumber/features",
        glue = {"stepdefs"})
@RunWith(Cucumber.class)
public class DropdownRunner {
}
