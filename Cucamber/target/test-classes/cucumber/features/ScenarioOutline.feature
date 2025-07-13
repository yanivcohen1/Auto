@google_search
Feature: Perform search in google

  As an Internet user
  I want to be able to navigate to https://www.google.co.uk
  So that I can perform a search

  Background:
    Given that the user has access to the Internet

  Scenario Outline:
    And he navigates to https://www.google.co.uk
    Then the <BUTTON> is displayed
  Examples:
    | BUTTON            |
    | Google Search     |
    | I'm Feeling Lucky |


