package cucumber_runners;

import org.junit.runner.RunWith;
import com.wh.auto.extendRunner.ExtendedCucumber;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

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
        tags = "@WhccEnDeposit",//"@WhccEnDeposit",//,@google3;test2.xml,@WhccEnDeposit
        //name= {"google4,google5"},
        features = "src/test/resources/stepdefs",
        glue = {"stepdefs"})

@RunWith(Cucumber.class)//ExtendedCucumber
public class ExtendTestRunner {
}
