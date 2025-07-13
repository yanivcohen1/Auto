@Register @AllMig
Feature: Register Desktop
	As a new migUser I want to be able Register
	
Scenario Outline: Register_<Type>_<Brand>_<language>
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
	#And migUser Contiue to step 2
	#Step 2
	And migUser fill City "city"
	And migUser fill date of birth 1/1/1980
	And migUser select country "United Kingdom"
	And migUser fill Address "address"
	And migUser fill Post code 123
	And migUser fill Mobile 1227768276
	And migUser select currency GBP
	And migUser click on I confirm I am 18 years of age
	#And migUser Deposit limit "No Limit"
	And migUser click on Register Now
	Then migUser Account was Created
	
    @WhccDeskRegisterEn @WhccAllMig
    Examples:
		| language | Brand | Type |  css  			    | RadioButten  														  |  freeSpins   | depositApproved 													 |  
    	| en	   | Whcc  | Desk |  .popup-modal__inner | I understand that my funds will be given a 'basic' level of protection |  free spins  |  Your deposit has been approved and will be charged as WH Online  |
    	
    @EgDeskRegisterEn @EgAllMig
    Examples:
		| language | Brand | Type   |  css 				  | RadioButten  														  |  freeSpins   | depositApproved 													 |  
    	| en	   | Eg    | Desk   |  .popup-modal__inner | I understand that my funds will be given a 'basic' level of protection |  free spins  |  Your deposit has been approved and will be charged as WH Online  |
    	