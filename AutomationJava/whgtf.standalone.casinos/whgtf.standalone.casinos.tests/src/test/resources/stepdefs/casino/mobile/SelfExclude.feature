@SelfExclude @All
Feature: SelfExclude
	As a new user I want to be able to Self Exclude
	
Scenario Outline: <Brand>SelfExclude<language>
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
	
	#Start SelfExclude
	Then User open Menu
	Then User open my account
	Then User open Responsible Gaming
	Then User Set 6 months
	Then User Set exclude
	Then User read msg "<Msg>"
	Then User Click on ok
	#login
	And User Click on LOGIN top button on main page
	And User Fill Last Username in popup window
	And User Fill Password "123456" in popup window
	And User Click on LOGIN Butten in popup window
	#And User Click on Accept on terms and condition
	#Then User read the Current Balance
	#finish
	#When User click Deposit top Button
	Then User read exclude "<Login_msg>"
    
    @WhccSelfExcludeEn
    Examples:
		| language | Brand | configurationFile       |  UserAccount  						 | Msg 														  | Login_msg 																					  |
    	| En	   | Whcc  | WhccMobileEnDeposit.xml |  Wellcome to william hill casino club | I confirm that I have read and accepted the Self-Exclusion | Sorry, the action cannot be performed because you have asked to be self excluded from playing |
	
#	@EgSelfExcludeEn
#    Examples:
#		| language | Brand | configurationFile       |  UserAccount  					  | Msg 													   | Login_msg 																					   |
#    	| En	   | Eg    | EgMobileEnDeposit.xml   |  Wellcome to Eurogrand casino club | I confirm that I have read and accepted the Self-Exclusion | Sorry, the action cannot be performed because you have asked to be self excluded from playing |