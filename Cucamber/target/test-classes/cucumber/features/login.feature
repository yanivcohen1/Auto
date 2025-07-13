Feature: Login

  Scenario: Login with guest account
    Given Prepared user with username <"SuccessfulUsername"> and password <"12345">
      And Prepared user with username <"BadUsername"> and password <"123456">
    When username <"BadUsername"> increases the password by '1'
    Then Check we logged in with username <"BadUsername"> should display password <"1234561">
    Then Check we logged in with username <"SuccessfulUsername"> should display password <"12345">
   
  @test2
  Scenario Outline: Login with guest account <param1>
		Given a precondition has value <param1> val <param2>
		When something with <param2>
		Then check <param3> is the output
		
		Examples:
		#@source:C:/tmp/whgtf/src/test/resources/data/data.csv
		| param1 | param2 | param3 |
		| value11 | value12 | value33 |
		
@test4
Scenario: Login with guest account4
		Given a precondition has value value41 val value42
		When something with value42
		Then check value33 is the output
@test5
Scenario: Login with guest account5
		Given a precondition has value value41 val value42
		When something with value42
		Then check value55 is the output	