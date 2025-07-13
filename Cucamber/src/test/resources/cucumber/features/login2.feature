Feature: Logis

  Scenario: Login with guest account
    Given Prepared user with username <"SuccessfulUsername"> and password <"12345">
      And Prepared user with username <"BadUsername"> and password <"123456">
    When username <"BadUsername"> increases the password by '1'
    Then Check we logged in with username <"BadUsername"> should display password <"1234561">
    Then Check we logged in with username <"SuccessfulUsername"> should display password <"12345">
  @testw 
  Scenario Outline: Login with guest account <param1>
		Given a precondition has value <param1> val <param2>
		Then check <param3> is the output
		When something with <param2>
		
		@test6
		Examples:
		| param1 | param2 | param3 |
		| value41 | value12 | value13 |
		@test7
		Examples:
		| param1 | param2 | param3 |
		#| value21 | value22 | value23 | 
		| value51 | value32 | value33 |
@test8
Scenario: Login with guest account8
		Given a precondition has value value41 val value42
		When something with value42
		Then check value44 is the output
@test9
Scenario: Login with guest account9
		Given a precondition has value value41 val value42
		Then check value53 is the output
		When something with value42
			