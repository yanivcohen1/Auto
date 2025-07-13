Feature: Login

  Scenario: Login with guest account
    Given Prepared user with username <"SuccessfulUsername"> and password <"12345">
      And Prepared user with username <"BadUsername"> and password <"123456">
    When username <"BadUsername"> increases the password by '1'
    Then Check we logged in with username <"BadUsername"> should display password <"1234561">
    Then Check we logged in with username <"SuccessfulUsername"> should display password <"12345">
    
  Scenario Outline: Login with guest account2
		Given a precondition has value <param1> val <param2>
		When something with <param2>
		Then check <param3> is the output
		
		Examples:
		| param1 | param2 | param3 |
		| value11 | value12 | value13 |
		| value21 | value22 | value23 |
		| value31 | value32 | value33 |
		