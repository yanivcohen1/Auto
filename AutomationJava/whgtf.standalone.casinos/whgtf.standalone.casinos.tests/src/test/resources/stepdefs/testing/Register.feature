@RegisterFromIframe
Feature: Register
	As a new user I want to be able Register
	
Scenario Outline: Register<Brand>_<language>
	Given user is connect to the internet <"">
    Given User language "<language>" and Brand "<Brand>" and configurationFile "<configurationFile>"
    Given User is navigating to url<"http://static.williamhillcasino.com/casino-uk-test/">
    #Register
    And Desktop User Click Join Now Butten
	And Desktop User fill first <"first name">
	And Desktop User fill last <"last name">
	And Desktop User fill date of birth "01" / "01" / "1980"
	And Desktop User fill Title <"Mr">
	And Desktop User fill email with email: <"test@playtech.com">
	And Desktop User select country <"United Kingdom">
	And Desktop User fill City <"city">
	And Desktop User fill Address <"address">
	And Desktop User fill Post code <123>
	And Desktop User fill Mobile <0222222222>
	And Desktop User fill user name with timestamp
	And Desktop User fill password "123456a"
	And Desktop User select currency GBP
	And Desktop User click on I confirm I am 18 years of age
	#And User Deposit limit <"No Limit">
	And Desktop User click on Create Account
	Then Desktop User Account was Created "<UserAccount>"
	
    #@WhccEnRegister
    Examples:
		| language | Brand | configurationFile       |  UserAccount  						 | RadioButten  														  |  freeSpins   | depositApproved 													 |  
    	| en	   | Whcc  | WhccMobileEnDeposit.xml |  Wellcome to william hill casino club | I understand that my funds will be given a 'basic' level of protection |  free spins  |  Your deposit has been approved and will be charged as WH Online  |
  	