package cucumber_runners;

import org.junit.runner.RunWith;
import com.wh.auto.extendRunner.ExtendedCucumber;

import cucumber.api.CucumberOptions;

/**
 * Created by yanivc.
 */
@CucumberOptions(
        plugin = {"pretty",
                "html:target/cucumber/cucumber-html-report",
                "json:target/cucumber/cucumber-json-report.json",
                "rerun:target/rerun.txt"
                },
        dryRun=false,
        monochrome=true,
        tags = "@EgMobiDepositEn",
        //name= {"google4,google5"},
        features = "src/test/resources/stepdefs",
        glue = {"stepdefs"})

@RunWith(ExtendedCucumber.class)//ExtendedCucumber
public class ExtendTestRunner {
}
