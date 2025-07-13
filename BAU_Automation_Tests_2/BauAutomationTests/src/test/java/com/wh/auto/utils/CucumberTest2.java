package com.wh.auto.utils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import javax.validation.constraints.AssertTrue;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.wh.auto.common.Reporter;
import com.wh.auto.common.Reporter.Color;
import com.wh.auto.common.Reporter.Style;
import com.wh.auto.cucumber.AbstractCucumberTest;
import com.wh.auto.cucumber.annotation.Feature;
import com.wh.auto.cucumber.annotation.Scenario;
import com.wh.auto.repository.SessionRepository;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.PendingException;

@Feature("login")
public class CucumberTest2 extends AbstractCucumberTest {

	private Map<String, String> users = new HashMap<>();
	
    @Test
    @Scenario("Login with guest account2")
    public void loginWithGuestAccount() {
        run();
    }
    
    @Given("^a precondition has value value(\\d+) val value(\\d+)$")
    public void a_precondition_has_value_value_val_value(int arg1, int arg2) throws Throwable {
        // Express the Regexp above with the code you wish you had
        //throw new PendingException();
    	com.wh.auto.common.Reporter.log("given1:"+arg1+" given2:"+ arg2, true);
    }

    @When("^something with value(\\d+)$")
    public void something_with_value(int arg1) throws Throwable {
        // Express the Regexp above with the code you wish you had
        //throw new PendingException();
    	com.wh.auto.common.Reporter.log("When:"+arg1, true);
    }

    @Then("^check value(\\d+) is the output$")
    public void check_value_is_the_output(int arg1) throws Throwable {
        // Express the Regexp above with the code you wish you had
    	com.wh.auto.common.Reporter.log("Then:"+arg1, true);
    	Assert.assertEquals(33, arg1);
    }

	@Override
	public void afterTest() {
		driver = SessionRepository.getWebDriver(Thread.currentThread().getId());
		driver.quit();
	}
     
}
