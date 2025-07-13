@google
Feature: Perform search in google2
  
  As an Internet user
  I want to be able to navigate to https://www.google.co.uk
  So that I can perform a search
	
  @google2 
  @google3
  Scenario: google4
    Given that the user has access to the Internet
    And he navigates to https://www.google.co.uk/
    Then the Google Search is displayed
    Then the game loads with the PLAY button visible
    
    @google4
  Scenario: google4
    Given that the user has access to the Internet
    And he navigates to https://www.google.co.uk/
    Then the Google Search is displayed
    Then the game loads with the PLAY button visible