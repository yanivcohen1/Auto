@format
Feature: Perform search in google 

@FormatOdds
Scenario Outline: Format Odds
    Given the user is on the Sportsbook Homepage
    When they change the odds to <oddType>
    Then bets are available in <seperetor> format
    Examples:
      | oddType  | seperetor |
      | DECIMAL  | .		 |
      | AMERICAN | +,-		 |

@FormatOdds2
Scenario Outline: Format Odds2
    Given the user is on the Sportsbook Homepage
    When they change the odds to <oddType>
    Then bets are available in <seperetor> format
    Examples:
      | oddType  | seperetor |
      | ODDS     | /		 |
      