Feature: Login
	As a new user I want to be able Login

Scenario Outline: Login<Brand>_<language>
	Given read "<language>"
	
	@testing1
    Examples:
		| language | Brand | configurationFile 		 | UserName 	| Password |
		| en	   | Whcc  | WhccMobileEnLogin.xml   | 151007020423 | 123456   |
