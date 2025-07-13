@all
Feature: Searching for cucumbers
  As an internet user
  In order to find out more about cucumbers
  I want to be able to search for information about cucumbers
  
  @a
  Scenario: Google cucumber search1
    When I search Google for "cucumbers"
    Then I should see some results
  @b
  Scenario: Google cucumber search2
    When I search Google for "cucumbers"
    Then I should see some results