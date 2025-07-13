@imageBased
Feature: Use Image Based Testing on Scratchcards (Reuse Logon Steps prev written)
  
  As a customer on William Hill
  I need to be able to open a scratchcard game 
  because I want to demonstrate the image based test capabilities of whgtf

  Background: 
    Given the customer is on the Scratchcard lobby
    When the customer clicks Login Menu button
    And enter correct credentials
    And clicks the Log in button

  Scenario: Happy Path Play Ramesses
    When they select Ramesses Riches
    And I select 'No' to play sound
    Then the game loads with the PLAY button visible

  Scenario: Mix and Match Test Types with Web Testing and Image Based
    When they select Ramesses Riches
    And I select 'No' to play sound
    And I select betting tab
