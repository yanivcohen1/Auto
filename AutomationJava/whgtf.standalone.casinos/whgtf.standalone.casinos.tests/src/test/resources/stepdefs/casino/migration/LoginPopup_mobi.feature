@LoginPopup @AllMig
Feature: LoginPopup mobile
	As a new migUser I want to be able Login

Scenario Outline: LoginPopup_<Type>_<Brand>_<language>
	Given "<Type>" User is connect to the internet ""
    Given migUser language "<language>" and Brand "<Brand>" and "<Type>"
    Given migUser is navigating to "<LoginURL>"
	Then migUser see login Popup window
	
	@WhccMobiLoginPopupEn @WhccAllMig
    Examples:
		| language | Brand | Type   | migUserName  | Password | LoginURL 								|
		| En	   | Whcc  | Mobi   | 170129033419 | 123456   | https://www.williamhillcasino.com/login |
		
#	@WhccDeLogin
#    Examples:
#		| language | Brand | configurationFile 		 | migUserName 	| Password |
#		| de	   | Whcc  | WhccMobileEnLogin.xml   | 151007020423 | 123456   |
		
	@EgMobiLoginPopupEn @EgAllMig
    Examples:
		| language | Brand | Type	| migUserName  | Password  | LoginURL						 |
		| En	   | Eg    | Mobi 	| 170129040528 | 123456    | https://www.eurogrand.com/login |
	
#	@EgDeLogin
#    Examples:
#		| language | Brand | configurationFile 		 | migUserName 	| Password  |
#		| de	   | Eg  | EgMobileEnLogin.xml 	     | 141215123054 | 123456    |
		
#Background: RegisterDeposit
    #chrome firefox
	#Given migUser is connect to the internet <"">