@Register @AllMig
Feature: Register Zip Code Mobile
	As a new migUser I want to be able Register
	
Scenario Outline: Register_Zip_Code_<Type>_<Brand>_<language>
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
	And migUser Contiue to step 2
	#And migUser Contiue to step 2
	And User enter zip code "123"
	#And migUser fill City "city"
	And migUser fill date of birth 1/1/1980
	And migUser select country "United Kingdom"
	#And migUser fill Address "address"
	#And migUser fill Post code 123
	And migUser fill Mobile 1227768276
	#And migUser select currency GBP
	And migUser click on Register Now
	Then migUser Account was Created
	
    @WhccMobiRegisterZipEn @WhccAllMig
    Examples:
		| language | Brand | Type |  css  			     | RadioButten  														  |  freeSpins   | depositApproved 													 |  
    	| en	   | Whcc  | Mobi |  .popup-modal__inner | I understand that my funds will be given a 'basic' level of protection |  free spins  |  Your deposit has been approved and will be charged as WH Online  |
    	
    @EgMobiRegisterZipEn @EgAllMig
    Examples:
		| language | Brand | Type   |  css 				  | RadioButten  														  |  freeSpins   | depositApproved 													 |  
    	| en	   | Eg    | Mobi   |  .popup-modal__inner | I understand that my funds will be given a 'basic' level of protection |  free spins  |  Your deposit has been approved and will be charged as WH Online  |
    	