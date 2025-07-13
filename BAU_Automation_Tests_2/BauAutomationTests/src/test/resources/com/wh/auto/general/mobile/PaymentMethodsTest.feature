@Payments
Feature: Payments
	As a new user
	I want to be able to Time Out
	
Scenario: PaymentMethodsTest
	Given user connect to the internet <"">
	When Run Senario <"Login"> in feature file <"Login.feature">
	Then Run Senario "TestPaymentLink" Click on "payPal" Read URL "https://www.paypal.com/cgi-bin/webscr"
	Then Run Senario "TestPaymentLink" Click on "paySafeCard" Read URL "https://customer.cc.at.paysafecard.com/rest/payment/panel"
	Then Run Senario "TestPaymentLink" Click on "Skrill" Read URL "https://pay.skrill.com/app/"
	Then Run Senario "TestPaymentLink" Click on "EcoCard" Read URL "https://m.ecopayz.com/"
	Then Run Senario "TestPaymentLink" Click on "LocalBankPayment" Read URL "https://www.envoytransfers.com/default.aspx"
	
Scenario: TestPaymentLink
	When user navigates to <"">
	Then click Deposit top Button
	Then Select Methode
	Then Read URL
	
# Scenario Outline: Login with guest account2
#	Given a precondition has value <param1> val <param2>
#	When something with <param2>
#	Then check <param3> is the output
#	
#	Examples:
#	| PayMethode | ExpectedUrl | param3 |
#	| value11 | value12 | value13 |
#	| value21 | value22 | value23 |
#	| value31 | value32 | value33 |