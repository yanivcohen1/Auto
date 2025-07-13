@SelfExclude @AllMig
Feature: SelfExcludeEn Mobile
	As a new user I want to be able to Self Exclude
	
Scenario Outline: SelfExclude_<Type>_<Brand>_<language>
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
	#Step 2
	And migUser fill City "city"
	And migUser fill date of birth 1/1/1980
	And migUser select country "United Kingdom"
	And migUser fill Address "address"
	And migUser fill Post code 123
	And migUser fill Mobile 1227768276
	And migUser select currency GBP
	And migUser click on I confirm I am 18 years of age
	And migUser Deposit limit "No Limit"
	And migUser click on Register Now
	Then migUser Account was Created
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
    
    @EgMobiSelfExcludeEn @EgAllMig
    Examples:
		| language | Brand | Type   |  UserAccount  						 | Msg 									 					  | Login_msg 																			 	      |
    	| En	   | Eg    | Mobi   |  Wellcome to william hill casino club | I confirm that I have read and accepted the Self-Exclusion | Sorry, the action cannot be performed because you have asked to be self excluded from playing |
	
	@WhccMobiSelfExcludeEn @WhccAllMig
    Examples:
		| language | Brand | Type   |  UserAccount  						 | Msg 									 					  | Login_msg 																			 	      |
    	| En	   | Whcc  | Mobi   |  Wellcome to william hill casino club | I confirm that I have read and accepted the Self-Exclusion | Sorry, the action cannot be performed because you have asked to be self excluded from playing |