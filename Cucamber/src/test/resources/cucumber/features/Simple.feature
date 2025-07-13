@google
Feature: Perform search in google2
  
  As an Internet user
  I want to be able to navigate to https://www.google.co.uk
  So that I can perform a search
	@google2
  Scenario: test1 
    Given that the user has access to the Internet
    And he navigates to https://www.google.co.uk
    Then the Google Search is displayed
    #Then the game loads with the PLAY button visible
	
	@google5
  Scenario: test2
    Given that the user has access to the Internet
    Then the Google Search is displayed
    
	@google3
  Scenario Outline: Login with guest account2
		Given a precondition has value <param1> val <param2>
		When something with <param2>
		Then check <param3> is the output
		
		Examples:
		| param1 | param2 | param3 |
		| value11 | value12 | value13 |
		| value21 | value22 | value23 |
		| value31 | value32 | value33 |
		
	@google4
	Scenario: Login with guest account3
	    Given Prepared2 user with username and password
	        | user    			 | pass   |
			| SuccessfulUsername | 12345  |
			| BadUsername 		 | 123456 |
		Given Prepared user with username <"SuccessfulUsername"> and password <12345>
	    When username2 <"BadUsername"> increases the password by '1'
	    Then Check2 we logged in with username <"BadUsername"> should display password <"1234561">
	    Then Check2 we logged in with username <"SuccessfulUsername"> should display password <"12345">