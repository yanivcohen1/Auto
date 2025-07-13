@SesionTimeReminder @All
Feature: SesionTimeReminder
	As a new user I want to be able to TimeOut
	
Scenario Outline: <Brand>SesionTimeReminder<language>
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
	#Start SesionTimeReminder
	Then User open Menu
	Then User open my account
	Then User open Responsible Gaming	
	Then User Set Time Reminders
	Then User save Session Remainder
	Then User read msg "<Msg>"
	Then User Successfull remaider ok click
	#Logout
	Then User open Menu
	Then User click on logout
	Then User Logout click
	Then User Logout msg OK click
	#login
	And User Click on LOGIN top button on main page
	And User Fill Last Username in popup window
	And User Fill Password "123456" in popup window
	And User Click on LOGIN Butten in popup window
	#Start SesionTimeReminder 
	Then User open Menu
	Then User open my account
	Then User open Responsible Gaming
    Then read Time reminder value
    
    @WhccSesionTimeReminderEn
    Examples:
		| language | Brand | configurationFile       |  UserAccount  						 | Msg 											   |
    	| En	   | Whcc  | WhccMobileEnDeposit.xml |  Wellcome to william hill casino club | Session Time Reminder was successfully applied. |
	
#	 @EgSesionTimeReminderEn
#    Examples:
#		| language | Brand | configurationFile       |  UserAccount  					  | Msg 											|
#    	| En	   | Eg    | EgMobileEnDeposit.xml   |  Wellcome to Eurogrand casino club | Session Time Reminder was successfully applied. |