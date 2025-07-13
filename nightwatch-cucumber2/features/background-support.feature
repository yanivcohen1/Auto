@Allgoogle
Feature: Background support

Background:
    Given I open Google`s search page

@Add
Scenario: Addition

  When I search1 for "500+120"
  Then the search result should contain "620"

@divide
Scenario: Division

  When I search for "36/6"
  Then the search result should contain "771"
