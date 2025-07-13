@Allgoogle
Feature: Google Search

@google
Scenario: Searching Google

  Given I open Google's search page
  Then the title is "Google"
  And the Google search form exists
  
@google1
Scenario: Searching Google1

  Given I open Google's search page
  Then the title is "Google"
  And the Google1 search form exists