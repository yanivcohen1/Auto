#comment
@main
Feature: Angular Task List
  As a basic user
  I should be able to add and remove tasks from the task list
  So that I can keep track of my tasks

  @main1
  Scenario: Protractor and Cucumber Test1
    Given I go to "https://angularjs.org/"
    When I add "Be Awesome" in the task field
    And I click the add button
    Then I should see my new task in the list
	
  @main2
  Scenario: Protractor and Cucumber Test2
    Given I go to "https://angularjs.org/"
    When I add "Be Awesome" in the task field
    And I click the add button
    Then I should see my new task in the list