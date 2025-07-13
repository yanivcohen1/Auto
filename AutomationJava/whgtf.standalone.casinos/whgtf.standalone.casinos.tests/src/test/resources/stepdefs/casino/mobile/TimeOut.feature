@TimeOut @All
Feature: TimeOut
	As a new user I want to be able to TimeOut
	
Scenario Outline: <Brand>TimeOut<language>
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
	Then User Set 24 Hours
	Then User save TimeOut
	Then User Successfull timeOut ok click
	Then User read msg "<Msg>"
	Then User Click on Timeout ok
	Then User Logout msg OK click
	#login
	And User Click on LOGIN top button on main page
	And User Fill Last Username in popup window
	And User Fill Password "123456" in popup window
	And User Click on LOGIN Butten in popup window
	#finish
	Then User read exclude "<Timeout_msg>"
    
    @WhccTimeOutEn
    Examples:
		| language | Brand | configurationFile       |  UserAccount  						 | Msg 														  													  | Timeout_msg 																										 |
    	| En	   | Whcc  | WhccMobileEnDeposit.xml |  Wellcome to william hill casino club | Sorry, you have asked to be timed-out from playing and were automatically logged off. You can play again after | Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after |
	
#	 @EgTimeOutEn
#    Examples:
#		| language | Brand | configurationFile       |  UserAccount  					  | Msg 													  														 | Timeout_msg 																											|
#    	| En	   | Eg    | EgMobileEnDeposit.xml   |  Wellcome to Eurogrand casino club | Sorry, you have asked to be timed-out from playing and were automatically logged off. You can play again after   | Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after |