@DepositLimit @All
Feature: DepositLimit 
	As a new user I want to be able Deposit
  
Scenario Outline: DepositLimit<Brand>_<language> 
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
	And User click on Register Now 
	Then User Account was Created "<UserAccount>" 
	#Deposit Limit Page
	When User click on Deposit top Button 
	Then User click on Deposit limit page 
	Then User click on new limit 
	Then User choose Deposit limit <"daily"> 
	Then User choose amount 500 
	Then user click on confirm 
	#continue deposit detail
	When User click on Deposit top Button 
	And User insert card number <"1111111111111111"> 
	And User fill Amount to Deposit <"102"> 
	And User select Expiration Month <"01"> 
	And User select Expiration Year <"2020"> 
	And User fill CVV2 <"111"> 
	#deposit over
	And User fill Deposit Amount to "501" 
	And User click on Deposit 
	Then User Read Limit Msg "<DepositLimitMsg>" 
	#Deposit under
	And User fill Amount to Deposit <"100"> 
	And User click on Deposit 
	And User click on OK 
	Then User MSG You just "<freeSpins>" 
	When User Click On ACCEPT 
	When User click On ACCEPT 
	Then MSG Your "<depositApproved>" 
	When User click On ACCEPT 
	Then User read the Current Balance 
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
	#deposit over
	Then User Account was Created ""
	Then user Close welcome bonus popup
	When User click on Deposit top Button 
	And User fill Deposit Amount to "501" 
	And User fill CVV2 "111" 
	And User click on Deposit2 
	Then User Read Limit in redeposit Msg "<DepositLimitMsg2>" 
	
	@WhccEnDepositLimitExc 
	Examples: 
	| language | Brand | configurationFile       |  UserAccount  						 | RadioButten  														  |DepositLimitMsg		   |  freeSpins   | depositApproved 	   											  | DepositLimitMsg2	    |
	| en	   | Whcc  | WhccMobileEnDeposit.xml |  Wellcome to william hill casino club | I understand that my funds will be given a 'basic' level of protection |Amount should be between|  free spins  |  Your deposit has been approved and will be charged as WH Online  | Amount should be between|
	
#	@EgEnDepositLimitExc 
#	Examples: 
#	| language | Brand | configurationFile       |  UserAccount  					  | RadioButten  														   |DepositLimitMsg			 |  freeSpins   | depositApproved 												    |  DepositLimitMsg2 	  |
#	| en	   | Eg    | EgMobileEnDeposit.xml   |  Wellcome to Eurogrand casino club | I understand that my funds will be given a 'basic' level of protection |Amount should be between |  free spins  |  Your deposit has been approved and will be charged as WH Online  | Amount should be between|
