@TimeOut @AllMig
Feature: TimeOutEn Desktop 
	As a new user I want to be able to TimeOut
	
Scenario Outline: MobiTimeOut_<Type>_<Brand>_<language>
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
	And migUser Deposit limit "No Limit"
	And migUser click on Register Now
	Then migUser Account was Created
	#Start TimeOut
	Given migUser is navigating to url "/en/responsible-gaming"
	Then User Set 24 Hours
	Then User save TimeOut
	Then User Successfull timeOut ok click
	Then User read msg "<Msg>"
	Then User Click on Timeout ok
	Then User Logout msg OK click
	#login
	And migUser Click on LOGIN top button on main page
	And User Fill Last Username in popup window
	And User Fill Password "123456" in popup window
	And migUser Click on LOGIN Butten in popup window
	#finish
	Then User read exclude "<Timeout_msg>"
    
    @EgDeskTimeOutEn @EgAllMig
    Examples:
		| language | Brand | Type   |  UserAccount  					    | Msg 														  													  | Timeout_msg 																										 |
    	| En	   | Eg    | Desk   |  Wellcome to william hill casino club | Sorry, you have asked to be timed-out from playing and were automatically logged off. You can play again after | Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after |
	
	@WhccDeskTimeOutEn @WhccAllMig
    Examples:
		| language | Brand | Type   |  UserAccount  					    | Msg 														  												    | Timeout_msg 																										   |
    	| En	   | Whcc    | Desk   |  Wellcome to william hill casino club | Sorry, you have asked to be timed-out from playing and were automatically logged off. You can play again after | Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after |
