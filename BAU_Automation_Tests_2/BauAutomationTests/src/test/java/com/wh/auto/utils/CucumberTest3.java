package com.wh.auto.utils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.wh.auto.common.Reporter;
import com.wh.auto.common.Reporter.Color;
import com.wh.auto.common.Reporter.Style;
import com.wh.auto.cucumber.AbstractCucumberTest;
import com.wh.auto.cucumber.annotation.Feature;
import com.wh.auto.cucumber.annotation.Scenario;
import com.wh.auto.repository.SessionRepository;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/*import cucumber.api.CucumberOptions;

*//**
 * Created by atanas on 24/11/14.
 *//*
@CucumberOptions(
        plugin = {"pretty",
                "html:target/cucumber/cucumber-html-report",
                "json:target/cucumber/cucumber-json-report.json"
                },
        dryRun=false,
        monochrome=true,
        tags = {"@format"},//, "@google"
        features = "src/test/resources/cucumber/features",
        glue = {"stepdefs"})*/
@Feature("login2")
public class CucumberTest3 extends AbstractCucumberTest {

	private Map<String, String> users = new HashMap<>();
	
    @Test
    @Scenario("Login with guest account3")
    public void loginWithGuestAccount() {
        run();
    }
    
    @Given("^Prepared2 user with username and password$")
    public void Prepared_user_with_username_and_password_(List<CulumberTypes> culumberType) throws Throwable {
    	for (CulumberTypes culumberType2 : culumberType) {
    		users.put(culumberType2.getUser(), culumberType2.getPass());
		}
    	//this.employees = employees.stream().collect(Collectors.toMap(Employee::getId, Function.<Employee> identity()));
    	//Reporter.log("userName:" + userName + " password:" + password, true);
    }

    @When("^username2 <\"([^\"]*)\"> increases the password by '(\\d+)'$")
	public void the_boss_increases_the_salary_for_the_employee_with_id_by(String userName, final int id) throws Throwable {
    	String password = users.get(userName);
    	users.put(userName, password + id);
	}

    @Then("^Check2 we logged in with username <\"([^\"]*)\"> should display password <\"([^\"]*)\">$$")
    public void Check_we_logged_in_with_username_(String user ,String password) throws Throwable {
    	Reporter.log("userName:" + user + " password:" + password, true,Style.BOLD, Color.BLACK);
    	Assert.assertEquals( users.get(user), password );
    }

    @Override
	public void afterTest() {
    	driver = SessionRepository.getWebDriver(Thread.currentThread().getId());
		driver.quit();
	}
}