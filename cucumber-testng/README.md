#Cucumber-TestNg

##If you ever dreamt about running cucumber test with testng look into this project :).

#Configuration:
You need to put configuration file in your project like:

<b>src/test/resources/cucumber.properties</b> with content:

<pre><code>
# java package with steps classes in your project
cucumber.steps.package=com.yourpackage
</code></pre>

To check you didn't forget to implement TestNG @Test add such additional test:

<pre><code>
public class StateTest {

    @Test(priority = -1)
    public void testState() {
        // setup

        // act
        String result = CucumberTestsStateUtil.checkTests();

        // verify
        Assert.assertNull(result, result);
    }
}
</code></pre>

Then for each feature scenario you need to create TestNG test.
Feature Name shoud be same as feature file name
Scenario name should be same as feature scenario name in cucumber

> src/test/java/com/example/LoginTest.java

<pre><code>

@Feature("login")
public class LoginTest extends AbstractCucumberTest {

    @Test
    @Scenario("Login with guest account")
    public void loginWithGuestAccount() {
        run();
    }
</code></pre>

> resources/com/example/test/login.feature

<pre><code>
Feature: Login

  Scenario: Login with guest account
    Given Prepared user with username <"SuccessfulUsername"> and password <"12345">
    Then Open login page
    Then Fill login form with user <"SuccessfulUsername"> and password <"12345"> and click login
    Then Check we logged in with username <"SuccessfulUsername">

</code></pre>

#Changelog:
<p>
<b>0.1.1<b>
</p>
<ul>
<li>
[+] CucumberTestsStateUtil. Added check tests names are unique because cucumber starts tests using regexp 
instead check name for equal (so one test name shouldn't start with another test name)
</li>
</ul>
<p>
<b>0.1.0<b>
</p>
<ul>
<li>
[+] Feature. Retry run failed test support added.
Need to be added java property at runtime -Dretry.tests=3 to rerun this test max 3 times more if it failed
at first run. 0 by default.
</li>
</ul>
