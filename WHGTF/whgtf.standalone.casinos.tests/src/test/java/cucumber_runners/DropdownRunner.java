package cucumber_runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

import com.wh.auto.myLisiner.MyRunner;

//test1234
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
        tags = {"@FormatOdds2"},
        features = "./",
        glue = {"stepdefs"})
@RunWith(MyRunner.class)
public class DropdownRunner {
}
