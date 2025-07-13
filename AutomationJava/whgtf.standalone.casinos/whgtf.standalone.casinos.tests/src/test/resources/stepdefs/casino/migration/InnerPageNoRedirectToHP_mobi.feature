@RedirectEn @AllMig
Feature: InnerPageNoRedirectToHP mobile
	As a new migUser I want to be able Login

Scenario Outline: InnerPageNoRedirectToHP_<Type>_<Brand>_<language>
	Given "<Type>" User is connect to the internet ""
    Given migUser language "<language>" and Brand "<Brand>" and "<Type>"
    Given migUser is navigating to "<URL>"
    Then Redirection To "<Home>"
		
	@EgMobiRedirectEn @EgAllMig
    Examples:
		| language | Brand | Type 		 | migUserName 	| Password  | Home 									  | URL |
		| En	   | Eg    | Mobi 	     | 170129040528 | 123456    | https://www.eurogrand.com/en/promotions | https://ww2.eurogrand.com/en/promotions?cat=most%20popular |
	
	@WhccMobiRedirectEn @WhccAllMig
    Examples:
		| language | Brand | Type 	 | migUserName 	| Password| Home 									        			    | URL |
		| En	   | Whcc  | Mobi 	 | 170129033419 | 123456  | https://www.williamhillcasino.com/promotions | https://ww2.williamhillcasino.com/en/promotions?cat=most%20popular |
#	@EgDeLogin
#    Examples:
#		| language | Brand | configurationFile 		 | migUserName 	| Password  |
#		| de	   | Eg  | EgMobileEnLogin.xml 	     | 141215123054 | 123456    |
		
#Background: RegisterDeposit
    #chrome firefox
	#Given migUser is connect to the internet <"">