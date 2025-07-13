@PaymentMethods @AllMig
Feature: PaymentMethods mobile
	As a new migUser I want to be able to open Payment Methods
		
Scenario Outline: TestPaymentMethod_Mobile_<Type>_<Brand>_<Method>_<language>
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
	Then migUser Select Payment Methode "<Method>"
	Then migUser Read Payment URL "<URL>"

	@WhccMobiPaymentMethodsEn @WhccAllMig
	Examples:
		| Method           | URL 														  | language | Brand | Type |  migUserName | 
		| payPal	       | https://www.paypal.com/cgi-bin/webscr  					  |  en	     | Whcc  | Mobi | 151007020423 |
		| paySafeCard	   | https://customer.cc.at.paysafecard.com/rest/payment/panel    |  en	     | Whcc  | Mobi | 151007020423 |
		| Skrill           | https://pay.skrill.com/app/								  |  en	     | Whcc  | Mobi | 151007020423 |
		| EcoCard          | ecopayz.com/					 			                  |  en	     | Whcc  | Mobi | 151007020423 |
		| LocalBankPayment | https://www.envoytransfers.com/default.aspx 				  |  en	     | Whcc  | Mobi | 151007020423 |		
	
	@EgMobiPaymentMethodsEn @EgAllMig
	Examples:
		| Method           | URL 														  | language | Brand | Type | migUserName  |
		| payPal	       | https://www.paypal.com/cgi-bin/webscr  					  | en	     | Eg    | Mobi | 141215123054 |
		| paySafeCard	   | https://customer.cc.at.paysafecard.com/rest/payment/panel    | en	     | Eg    | Mobi | 141215123054 |
		| Skrill           | https://pay.skrill.com/app/								  | en	     | Eg    | Mobi | 141215123054 |
		| EcoCard          | ecopayz.com/												  | en	     | Eg    | Mobi | 141215123054 |
		| LocalBankPayment | https://www.envoytransfers.com/default.aspx 				  | en	     | Eg    | Mobi | 141215123054 |
 
#@WhccEnPaymentMethodsSkrill	
#	Examples:
#		| Method           | URL 														  | language | Brand |  configurationFile    |  migUserName    |
#		| Skrill           | https://pay.skrill.com/app/								  | en	     | Eg    | EgMobileEnLogin.xml | 141215123054 |
