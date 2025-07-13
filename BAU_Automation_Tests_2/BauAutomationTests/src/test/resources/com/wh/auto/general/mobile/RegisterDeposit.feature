@RegisterDeposit
Feature: RegisterDeposit
	As a new user
	I want to be able Register And deposit

Background:
    #chrome firefox
	Given user connect to the internet <"">
	
Scenario: RegisterDepositEn
	# Start MainPage
	When user navigates to <"">
	# Start Register
	And Click Register top Butten
	And fill Title <"Male">
	And fill first <"first name">
	And fill last <"last name">
	And fill email with email: <"test@playtech.com">
	And fill user name with timestamp
	And fill password <123456>
	And Contiue to step 2
	#Step 2
	And select country <"United Kingdom">
	And fill City <"city">
	And fill Address <"address">
	And fill Post code <123>
	And fill Mobile <0222222222>
	And select currency GBP
	And click on I confirm I am 18 years of age
	And fill date of birth 1/1/1980
	#And Deposit limit <"No Limit">
	And click on Create Account
	Then Account was Created <"Your real money account was created successfully">	     
	# Start Deposit
	When click Deposit top Button
	And insert card number <"1111111111111111">
	And fill Amount to Deposit <"100">
	And select On card type visa
	And fill card owner first name <"first name">
	And fill card owner last name <"last name">
	And select Expiration Month <"01">
	And select Expiration Year <"2020">
	And fill CVV2 <"111">
	And fill Billing <"Address">
	And fill <"City">
	And fill zip code <"123">
	#And select country United Kingdom
	And fill State
	And click on Save details and Deposit
	And click on radio Butten <"I understand that my funds will be given"> a 'basic' level of protection
	And click on PROCEED
	And click On ACCEPT 
	Then MSG You just <"Select any of the games below to play">
	When I Click On ACCEPT
	Then MSG2 Your Deposit has been approved and will be charged as WH Online. Thank you and good luck!
	When click On OK 
	Then MSG3 You just received a 100.00 Euro bonus
	Then MSG: Bonus was successfully accepted
	Then read the Current Balance

Scenario: RegisterDepositDe
	# Start MainPage
	When user navigates to <"">
	# Start Register
	And Click Register top Butten
	And fill Title <"Male">
	And fill first <"first name">
	And fill last <"last name">
	And fill email with email: <"test@playtech.com">
	And fill user name with timestamp
	And fill password <123456>
	And Contiue to step 2
	#Step 2
	And select country <"United Kingdom">
	And fill City <"city">
	And fill Address <"address">
	And fill Post code <123>
	And fill Mobile <0222222222>
	And select currency GBP
	And click on I confirm I am 18 years of age
	And fill date of birth 1/1/1980
	#And Deposit limit <"No Limit">
	And click on Create Account
	Then Account was Created <"Ihr Echtgeld-Benutzerkonto wurde erfolgreich erstellt">        
	# Start Deposit
	When click Deposit top Button
	And insert card number <"1111111111111111">
	And fill Amount to Deposit <"100">
	And select On card type visa
	And fill card owner first name <"first name">
	And fill card owner last name <"last name">
	And select Expiration Month <"01">
	And select Expiration Year <"2020">
	And fill CVV2 <"111">
	And fill Billing <"Address">
	And fill <"City">
	And fill zip code <"123">
	#And select country United Kingdom
	And fill State
	And click on Save details and Deposit
	And click on radio Butten <"Ich verstehe, dass mein Guthaben auf"> a 'basic' level of protection
	And click on PROCEED
	And click On ACCEPT 
	Then MSG You just <"Glückwunsch!">
	When I Click On ACCEPT
	Then MSG2 Your Deposit has been approved and will be charged as WH Online. Thank you and good luck!
	When click On OK 
	Then MSG3 You just received a 100.00 Euro bonus
	Then MSG: Bonus was successfully accepted
	Then read the Current Balance
	