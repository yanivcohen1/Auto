Feature: Login2
   
   Scenario: Login with guest account3
    Given Prepared2 user with username and password
        | user    			 | pass   |
		| SuccessfulUsername | 12345  |
		| BadUsername 		 | 123456 |
	Given Prepared user with username <"SuccessfulUsername"> and password <12345>
    When username2 <"BadUsername"> increases the password by '1'
    Then Check2 we logged in with username <"BadUsername"> should display password <"1234561">
    Then Check2 we logged in with username <"SuccessfulUsername"> should display password <"12345">
    
		