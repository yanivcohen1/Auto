@RegisterNonUKGC @AllMig
Feature: RegisterNonUKGC Desktop
	As a new user I want to be able Register
	
Scenario Outline: RegisterNonUKGC_<Type>_<Brand>_<language>
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
	And migUser select country "Germany"
	And migUser fill City "city"
	And migUser fill date of birth 1/1/1980
	And migUser fill Address "address"
	And migUser fill Post code 123
	And migUser fill Mobile 1227768276
	#And migUser click on I confirm I am 18 years of age
	#And migUser Deposit limit "No Limit"
	And migUser click on Register Now
	Then migUser Account was Created
	#Start SelfExclude
	Given migUser is navigating to url "/en/responsible-gaming"
	Then Not visible Timeout
	Then Not visible SelfExclude
	#Then User Set 24 Hours
	#Then User Set 6 months
	
    @EgDeskRegisterNonUKGCEn @EgAllMig
    Examples:
		| language | Brand | Type |  UserAccount  						  | RadioButten  														  |  freeSpins   | depositApproved 												   |  
    	| en	   | Eg    | Desk |  Wellcome to william hill casino club | I understand that my funds will be given a 'basic' level of protection |  free spins  |  Your deposit has been approved and will be charged as WH Online  |

	@WhccDeskRegisterNonUKGCEn @WhccAllMig
    Examples:
		| language | Brand | Type |  UserAccount  						 | RadioButten  														  |  freeSpins   | depositApproved 													   |  
    	| en	   | Whcc  | Desk |  Wellcome to william hill casino club | I understand that my funds will be given a 'basic' level of protection |  free spins  |  Your deposit has been approved and will be charged as WH Online  |
    	