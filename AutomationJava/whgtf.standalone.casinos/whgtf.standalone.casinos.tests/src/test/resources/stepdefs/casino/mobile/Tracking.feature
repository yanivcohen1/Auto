@Tracking @All
Feature: Tracking
	As a new user I want to be able to get Tracking
	
Scenario Outline: Tracking<Brand>_<language>
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
	And User Contiue to step 2
	#Step 2
	And User fill City <"city">
	And User fill date of birth 1/1/1980
	And User select country <"United Kingdom">
	And User fill Address <"address">
	And User fill Post code <123>
	And User fill Mobile <1227768276>
	And User select currency GBP
	And User click on I confirm I am 18 years of age
	#And User Deposit limit <"No Limit">
	And User click on Register Now
	Then User Account was Created "<UserAccount>"
	
	#Tracking
	Given User is navigating to Playtech Admin
	And User Fill Username in popup window
	And User Fill Password in popup window
	And User Submit
	Given User is navigating to Playtech AdminSearchUserUrl
	And User fill username ""
	And User Select internalaccount
	And User Click Submit
	And User Find Advertiser "<Advertiser>"
	
    @WhccEnTracking
    Examples:
		| language | Brand | configurationFile       |  UserAccount  						 | Advertiser | 
    	| en	   | Whcc  | WhccMobileEnDeposit.xml |  Wellcome to william hill casino club | yonam    |
    	
#    @EgEnTracking
#    Examples:
#		| language | Brand | configurationFile       |  UserAccount  					  | Advertiser |  
#    	| en	   | Eg    | EgMobileEnDeposit.xml   |  Wellcome to Eurogrand casino club | yonam	   |