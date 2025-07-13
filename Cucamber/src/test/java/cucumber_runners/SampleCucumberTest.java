package cucumber_runners;

import org.junit.runner.RunWith;

import lib.ExtendedCucumber;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(ExtendedCucumber.class)//Extended
@CucumberOptions(
        plugin = {"html:target/cucumber-html-report",
                  "json:target/cucumber.json",
                  "pretty:target/cucumber-pretty.txt",
                  "usage:target/cucumber-usage.json",
                  "junit:target/cucumber-results.xml"
                 },
        features = {"./src/test/resources/cucumber/features" },
        glue = {"stepdefs" },
        tags = { "@test2,@test3,@test4,@test5,@test8,@test9,@testw" }
)
public class SampleCucumberTest {
}
