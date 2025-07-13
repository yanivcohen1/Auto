@Deposit @AllMig
Feature: Deposit Desktop
	As a new migUser I want to be able Deposit
  
  Scenario Outline: Deposit_<Type>_<Brand>_<language>
  	Given "<Type>" User is connect to the internet ""
    Given migUser language "<language>" and Brand "<Brand>" and "<Type>"
    Given migUser is navigating to ""
    #Register
    And migUser Click Register top Button
	And migUser fill Title "Mr"
	And migUser fill first "first name"
	And migUser fill last "last name"
	And migUser fill email with email: "test@playtech.com"
	And migUser fill user name with timestamp
	And migUser fill password 123456
	#Step 2
	And migUser click enter address manualy
	And migUser fill City "city"
	And migUser fill date of birth 1/1/1980
	And migUser select country "United Kingdom"
	And migUser fill Address "address"
	And migUser fill Post code 123
	And migUser fill Mobile 1227768276
	And migUser select currency GBP
	And migUser click on Register Now
	Then migUser Account was Created
    #Deposit
    #When migUser click on Deposit top Button
	And migUser insert card number "1111111111111111"
	And migUser fill Amount to Deposit "100"
	And migUser select Expiration Month "01"
	And migUser select Expiration Year "2020"
	And migUser fill CVV2 "111"
	And migUser click on Deposit
	#And migUser click on OK
	Then migUser read MSG You just "<freeSpins>"
	When migUser Click On ACCEPT
	Then migUser read MSG Your "<depositApproved>"
	When migUser Click On ACCEPT
	When migUser Click On ACCEPT
	#Then migUser back to home page "<Brand>" "<homeURL>"
	Then migUser read the Current Balance
	# with css "<css>"
    
	@WhccDeskDepositEn @WhccAllMig
    Examples:
		| language | Brand | Type |  RadioButten  													       |  freeSpins   | depositApproved 												  |  homeURL 						|
    	| en	   | Whcc  | Desk | I understand that my funds will be given a 'basic' level of protection |  free spins  |  Your deposit has been approved and will be charged as WH Online  |  /en/deposit?cat=Most-Popular	|
    	
    @EgDeskDepositEn @EgAllMig
    Examples:
		| language | Brand | Type  | RadioButten  														   |  freeSpins   | depositApproved 											        		  |  homeURL 		      |
    	| en	   | Eg    | Desk  |I understand that my funds will be given a 'basic' level of protection |  free spins  |  Your deposit has been approved and will be charged as WH Online  | /en/?cat=Most-Popular |
    	