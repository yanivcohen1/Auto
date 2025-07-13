package com.test;

import org.testng.annotations.Test;

import com.legalmonkeys.test.AbstractCucumberTest;
import com.legalmonkeys.test.annotation.Feature;
import com.legalmonkeys.test.annotation.Scenario;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.runtime.PendingException;

@Feature("login")
public class LoginTest extends AbstractCucumberTest {

    @Test
    @Scenario("Login with guest account")
    public void loginWithGuestAccount() {
        run();
    }
    
    @Given("^Prepared user with username <\"([^\"]*)\"> and password <\"([^\"]*)\">$")
    public void Prepared_user_with_username_and_password_(String arg1, String arg2) throws Throwable {
        // Express the Regexp above with the code you wish you had
        throw new PendingException();
    }

    @Then("^Open login page$")
    public void Open_login_page() throws Throwable {
        // Express the Regexp above with the code you wish you had
        throw new PendingException();
    }

    @Then("^Fill login form with user <\"([^\"]*)\"> and password <\"([^\"]*)\"> and click login$")
    public void Fill_login_form_with_user_and_password_and_click_login(String arg1, String arg2) throws Throwable {
        // Express the Regexp above with the code you wish you had
        throw new PendingException();
    }

    @Then("^Check we logged in with username <\"([^\"]*)\">$")
    public void Check_we_logged_in_with_username_(String arg1) throws Throwable {
        // Express the Regexp above with the code you wish you had
        throw new PendingException();
    }
}
