Feature: RegisterDeposit
	As a new user
	I want to be able Register And deposit
	
  Background: RegisterDeposit
    #chrome firefox
	Given user is connect to the internet <"">
  
  @RegisterDepositEn
  Scenario Outline: Register&Deposit
    Given User language "<language>" and Brand "<Brand>" and configurationFile "<configurationFile>"
    Given User is navigating to <"">
    #Register
    And User Click Register top Butten
	And User fill Title <"Mr">
	And User fill first <"first name">
	And User fill last <"last name">
	And User fill email with email: <"test@playtech.com">
	And User fill user name with timestamp
	And User fill password <123456>
	And User Contiue to step 2
	#Step 2
	And User fill City <"city">
	And User fill date of birth 1/1/1980
	And User select country <"United Kingdom">
	And User fill Address <"address">
	And User fill Post code <123>
	And User fill Mobile <0222222222>
	And User select currency GBP
	And User click on I confirm I am 18 years of age
	#And User Deposit limit <"No Limit">
	And User click on Create Account
	Then User Account was Created <"Your real money account was created successfully">
    #Deposit
    #Given User Name "yan03456" Password "123456" Login
    When User click on Deposit top Button
	And User insert card number <"1111111111111111">
	And User fill Amount to Deposit <"100">
	And User select On card type visa
	And User fill card owner first name <"first name">
	And User fill card owner last name <"last name">
	And User select Expiration Month <"01">
	And User select Expiration Year <"2020">
	And User fill CVV2 <"111">
	And User fill Billing <"Address">
	And User fill <"City">
	And User fill zip code <"123">
	And User fill State
	And User click on Save details and Deposit
	And User click on radio Butten "I understand that my funds will be given a 'basic' level of protection"
	And User click on PROCEED
	And User click On ACCEPT 
	Then User MSG You just "free spins"
	When User Click On ACCEPT
	When User click On ACCEPT
	Then MSG Your "Your deposit has been approved and will be charged as WH Online"
	When User click On ACCEPT
	#Then MSG You just received a "100.00" Euro bonus
	#Then MSG Bonus was successfully accepted
	Then User read the Current Balance
    
    @WhccEnDeposit
    Examples:
		| language | Brand | configurationFile       |
    	| en	   | Whcc  | WhccMobileEnDeposit.xml |
    	
    @EgEnDeposit
    Examples:
		| language | Brand | configurationFile     |
    	| en	   | Eg    | EgMobileEnDeposit.xml |