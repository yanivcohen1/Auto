package cucumber_runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@CucumberOptions(
	strict = true, 
	glue = { "stepdefs" },
	features = {"@target/rerun.txt"},
	dryRun=false,
	monochrome=true,
	plugin = { "json:target/cucumber/cucumber-json-report.json", "pretty",
        "html:target/cucumber/cucumber-html-report"})
@RunWith(Cucumber.class)
public class DropdownRunnerRerun {
}

