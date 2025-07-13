@PaymentMethods @AllMig
Feature: PaymentMethods Desktop
	As a new migUser I want to be able to open Payment Methods
		
Scenario Outline: TestPaymentMethod_<Type>_<Brand>_<Method>_<language>
	Given "<Type>" User is connect to the internet ""
	Given migUser language "<language>" and Brand "<Brand>" and "<Type>"
    Given migUser is navigating to ""
	# Start Register
	And migUser Click on LOGIN top button on main page
	And migUser Fill Username "<migUserName>" in popup window
	And migUser Fill Password "123456" in popup window
	And migUser Click on LOGIN Butten in popup window
	#And Click on Accept on terms and condition
	Then migUser read the Current Balance
	When migUser click on Deposit top Button
	Then Desktop MigUser Select Payment Methode "<Method>"
	Then Desktop migUser Read Payment URL "<URL>"

	@WhccDeskPaymentMethodsEn @WhccAllMig
	Examples:
		| Method           | URL 														  | language | Brand | Type |  migUserName | 
		| payPal	       | https://www.paypal.com/cgi-bin/webscr  					  |  en	     | Whcc  | Desk | 151007020423 |
		| paySafeCard	   | https://customer.cc.at.paysafecard.com/rest/payment/panel    |  en	     | Whcc  | Desk | 151007020423 |
		| Skrill           | https://pay.skrill.com/app/								  |  en	     | Whcc  | Desk | 151007020423 |
		| EcoCard          | ecopayz.com/					 			                  |  en	     | Whcc  | Desk | 151007020423 |
		| LocalBankPayment | https://www.envoytransfers.com/default.aspx 				  |  en	     | Whcc  | Desk | 151007020423 |
		
	@EgDeskPaymentMethodsEn @EgAllMig
	Examples:
		| Method           | URL 														  | language | Brand | Type | migUserName  |
		| payPal	       | https://www.paypal.com/cgi-bin/webscr  					  | en	     | Eg    | Desk | 141215123054 |
		| paySafeCard	   | https://customer.cc.at.paysafecard.com/rest/payment/panel    | en	     | Eg    | Desk | 141215123054 |
		| Skrill           | https://pay.skrill.com/app/								  | en	     | Eg    | Desk | 141215123054 |
		| EcoCard          | ecopayz.com/												  | en	     | Eg    | Desk | 141215123054 |
		| LocalBankPayment | https://www.envoytransfers.com/default.aspx 				  | en	     | Eg    | Desk | 141215123054 |
 
@WhccEnPaymentMethodsLocalBank	
	Examples:
		| Method           | URL 														  | language | Brand | Type |  migUserName | 
		| LocalBankPayment | https://www.envoytransfers.com/default.aspx 				  |  en	     | Whcc  | Desk | 151007020423 |

@EgDeskPaymentMethodsLocalBankEn	
	Examples:
		| Method           | URL 														  | language | Brand | Type |  migUserName |
		| LocalBankPayment | https://www.envoytransfers.com/default.aspx 				  | en	     | Eg    | Desk | 141215123054 | 