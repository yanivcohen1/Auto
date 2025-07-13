@PaymentMethods @All
Feature: PaymentMethods
	As a new user I want to be able to open Payment Methods
		
Scenario Outline: TestPaymentMethod_<Method>_<Brand>_<language>
	Given user is connect to the internet <"">
	Given User language "<language>" and Brand "<Brand>" and configurationFile "<configurationFile>"
    Given User is navigating to <"">
	# Start Register
	And User Click on LOGIN top button on main page
	And User Fill Username "<UserName>" in popup window
	And User Fill Password "123456" in popup window
	And User Click on LOGIN Butten in popup window
	#And Click on Accept on terms and condition
	Then User read the Current Balance
	When User click on Deposit top Button
	Then User Select Payment Methode "<Method>"
	Then User Read Payment URL "<URL>"

@WhccEnPaymentMethods
	Examples:
		| Method           | URL 														  | language | Brand |  configurationFile    |  UserName    |
		| payPal	       | https://www.paypal.com/cgi-bin/webscr  					  |  en	     | Whcc  | WhccMobileEnLogin.xml | 170130060025 |
		| paySafeCard	   | https://customer.cc.at.paysafecard.com/rest/payment/panel    |  en	     | Whcc  | WhccMobileEnLogin.xml | 170130060025 |
		| Skrill           | https://pay.skrill.com/app/								  |  en	     | Whcc  | WhccMobileEnLogin.xml | 170130060025 |
		| EcoCard          | ecopayz.com/					 			                  |  en	     | Whcc  | WhccMobileEnLogin.xml | 170130060025 |
		| LocalBankPayment | https://www.envoytransfers.com/default.aspx 				  |  en	     | Whcc  | WhccMobileEnLogin.xml | 170130060025 |
		
#@EgEnPaymentMethods
#	Examples:
#		| Method           | URL 														  | language | Brand |  configurationFile  | UserName     |
#		| payPal	       | https://www.paypal.com/cgi-bin/webscr  					  | en	     | Eg    | EgMobileEnLogin.xml | 141215123054 |
#		| paySafeCard	   | https://customer.cc.at.paysafecard.com/rest/payment/panel    | en	     | Eg    | EgMobileEnLogin.xml | 141215123054 |
#		| Skrill           | https://pay.skrill.com/app/								  | en	     | Eg    | EgMobileEnLogin.xml | 141215123054 |
#		| EcoCard          | ecopayz.com/												  | en	     | Eg    | EgMobileEnLogin.xml | 141215123054 |
#		| LocalBankPayment | https://www.envoytransfers.com/default.aspx 				  | en	     | Eg    | EgMobileEnLogin.xml | 141215123054 |
 
#@WhccEnPaymentMethodsEcoCard	
#	Examples:
#		| Method           | URL 														  | language | Brand |  configurationFile    |  UserName    |
#		| EcoCard          | ecopayz.com/				 						  |  en	     | Whcc  | WhccMobileEnLogin.xml | 151007020423 |
