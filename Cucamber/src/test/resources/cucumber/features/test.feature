Feature: Perform search in google <oddType>

#@FormatOdds
#Scenario Outline: Format Odds
#    Given the user is on the Sportsbook Homepage
#    When they change the odds to <oddType>
#    Then bets are available in <seperetor> format
#    Examples:
#      | oddType  | seperetor |
#      | DECIMAL  | .		 |
#      | AMERICAN | +,-		 |


Scenario Outline: Format Odds2 <oddType>
    Given test <oddType>
    
@testt1    
    Examples:
      | oddType  | seperetor |
      | ODDS1    | a1		 |
      #| ODDS2    | ab	     |
      
@testt2
    Examples:
      | oddType  | seperetor |
      | ODDS2    | a2		 |