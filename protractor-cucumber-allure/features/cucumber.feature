Feature: To search cucumber in google

    @CucumberScenario
    Scenario: Cucumber Google
      Given I am on google page
      When I type "cucumber"
      Then I click search button
      Then I clear search textbox
