@RegisterNonUKGC @All
Feature: RegisterNonUKGC
	As a new user I want to be able Register
	
Scenario Outline: RegisterNonUKGC_<Brand>_<language>
	Given user is connect to the internet <"">
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
	#Step 2
	And User Contiue to step 2
	And User fill City <"city">
	And User fill date of birth 1/1/1980
	And User select country <"Germany">
	And User fill Address <"address">
	And User fill Post code <123>
	And User fill Mobile <1227768276>
	And User select currency GBP
	And User click on I confirm I am 18 years of age
	#And User Deposit limit <"No Limit">
	And User click on Register Now
	Then User Account was Created "<UserAccount>"
	#Start SelfExclude
	Then User open Menu
	Then User open my account
	Then User open Responsible Gaming
	Then P3 Not visible Timeout
	Then P3 Not visible SelfExclude
	#Then User Set 24 Hours
	#Then User Set 6 months
	
    @WhccEnRegisterNonUKGC
    Examples:
		| language | Brand | configurationFile       |  UserAccount  						 | RadioButten  														  |  freeSpins   | depositApproved 													 |  
    	| en	   | Whcc  | WhccMobileEnDeposit.xml |  Wellcome to william hill casino club | I understand that my funds will be given a 'basic' level of protection |  free spins  |  Your deposit has been approved and will be charged as WH Online  |
    	
#    @EgEnRegisterNonUKGC
#    Examples:
#		| language | Brand | configurationFile       |  UserAccount  					  | RadioButten  														  |  freeSpins   | depositApproved 													 |  
#    	| en	   | Eg    | EgMobileEnDeposit.xml   |  Wellcome to Eurogrand casino club | I understand that my funds will be given a 'basic' level of protection |  free spins  |  Your deposit has been approved and will be charged as WH Online  |
    	