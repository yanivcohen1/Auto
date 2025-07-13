package com.wh.auto.utils;

import java.util.HashMap;
import java.util.Map;

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

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Feature("login")
public class CucumberTest extends AbstractCucumberTest {

	private Map<String, String> users = new HashMap<>();
	
    @Test
    @Scenario("Login with guest account")
    public void loginWithGuestAccount() {
        run();
    }
    
    @Given("^Prepared ser with username <\"([^\"]*)\"> and password <\"([^\"]*)\">$")
    public void Prepared_user_with_username_and_password_(String userName, String password) throws Throwable {
    	users.put(userName, password);
    	//this.employees = employees.stream().collect(Collectors.toMap(Employee::getId, Function.<Employee> identity()));
    	//Reporter.log("userName:" + userName + " password:" + password, true);
    }

    @When("^username <\"([^\"]*)\"> increases the password by '(\\d+)'$")
	public void the_boss_increases_the_salary_for_the_employee_with_id_by(String userName, final int id) throws Throwable {
    	String password = users.get(userName);
    	users.put(userName, password + id);
	}

    @Then("^Check we logged in with username <\"([^\"]*)\"> should display password <\"([^\"]*)\">$$")
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
