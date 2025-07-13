@Login @AllMig
Feature: Login mobile
	As a new migUser I want to be able Login

Scenario Outline: Login_<Type>_<Brand>_<language>
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
	
	@WhccMobiLoginEn @WhccAllMig
    Examples:
		| language | Brand | Type   | migUserName  | Password | 
		| En	   | Whcc  | Mobi   | 170129033419 | 123456   | 
		
#	@WhccDeLogin
#    Examples:
#		| language | Brand | configurationFile 		 | migUserName 	| Password |
#		| de	   | Whcc  | WhccMobileEnLogin.xml   | 151007020423 | 123456   |
		
	@EgMobiLoginEn @EgAllMig
    Examples:
		| language | Brand | Type	| migUserName  | Password  | 
		| En	   | Eg    | Mobi 	| 170129040528 | 123456    | 
	
#	@EgDeLogin
#    Examples:
#		| language | Brand | configurationFile 		 | migUserName 	| Password  |
#		| de	   | Eg  | EgMobileEnLogin.xml 	     | 141215123054 | 123456    |
		
#Background: RegisterDeposit
    #chrome firefox
	#Given migUser is connect to the internet <"">