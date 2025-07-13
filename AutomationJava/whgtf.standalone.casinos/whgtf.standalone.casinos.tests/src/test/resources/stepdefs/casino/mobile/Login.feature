@Login @All
Feature: Login
	As a new user I want to be able Login

Scenario Outline: Login<Brand>_<language>
	Given user is connect to the internet <"">
    Given User language "<language>" and Brand "<Brand>" and configurationFile "<configurationFile>"
    Given User is navigating to <"">
	# Start Register
	And User Click on LOGIN top button on main page
	And User Fill Username "<UserName>" in popup window
	And User Fill Password "<Password>" in popup window
	And User Click on LOGIN Butten in popup window
	#And User Click on Accept on terms and condition
	Then User read the Current Balance
	
	@WhccEnLogin
    Examples:
		| language | Brand | configurationFile 		 | UserName 	| Password |
		| en	   | Whcc  | WhccMobileEnLogin.xml   | 170130060025 | 123456   |
		
#	@WhccDeLogin
#    Examples:
#		| language | Brand | configurationFile 		 | UserName 	| Password |
#		| de	   | Whcc  | WhccMobileEnLogin.xml   | 170130060025 | 123456   |
		
#	@EgEnLogin
#    Examples:
#		| language | Brand | configurationFile 		 | UserName 	| Password  |
#		| en	   | Eg  | EgMobileEnLogin.xml 	     | 141215123054 | 123456    |
#	
#	@EgDeLogin
#    Examples:
#		| language | Brand | configurationFile 		 | UserName 	| Password  |
#		| de	   | Eg  | EgMobileEnLogin.xml 	     | 141215123054 | 123456    |
		
#Background: RegisterDeposit
    #chrome firefox
	#Given user is connect to the internet <"">