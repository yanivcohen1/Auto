@Login @AllMig
Feature: Close My Account Desktop
	As a new migUser I want to be able To Close My Account

Scenario Outline: Close_My_Account_<Type>_<Brand>_<language>
	Given "<Type>" User is connect to the internet ""
    Given migUser language "<language>" and Brand "<Brand>" and "<Type>"
    Given migUser is navigating to ""
	# Start Register
	And migUser Click on LOGIN top button on main page
	And migUser Fill Username "<migUserName>" in popup window
	And migUser Fill Password "<Password>" in popup window
	And migUser Click on LOGIN Butten in popup window
	#And migUser Click on Accept on terms and condition
	Then migUser read the Current Balance
	Given migUser is navigating to url "/close-my-account"
	Then user click on Account Controls
	Then user click on Account Closure
	Then user select reason
	Then user click on confirm close
	Then user click on confirm close in popup
	Then user click on OK in popup
	#start login
	And migUser Click on LOGIN top button on main page
	And migUser Fill Username "<migUserName>" in popup window
	And migUser Fill Password "<Password>" in popup window
	And migUser Click on LOGIN Butten in popup window
	Then user read msg "Sorry, your account is closed"
	Then user click on re-open my account
	Then user read msg "Your account is open"
	Then user click on Log In
	And migUser Fill Username "<migUserName>" in popup window
	And migUser Fill Password "<Password>" in popup window
	And migUser Click on LOGIN Butten in popup window
	Then migUser read the Current Balance
		
	@WhccDeskCloseAccountEn @WhccAllMig
    Examples:
		| language | Brand | Type   | migUserName  | Password | 
		| En	   | Whcc  | Desk   | 170129033419 | 123456   | 
		
	@EgDeskCloseAccountEn @EgAllMig
    Examples:
		| language | Brand | Type	| migUserName  | Password  | 
		| En	   | Eg    | Desk 	| 170129040528 | 123456    | 
