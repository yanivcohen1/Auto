@Payments
Feature: Payments
	As a new user
	I want to be able to do deposit limit
	
Scenario: DepositLimit
	Given user connect to the internet <"">
	When Run Senario <"RegisterDepositEn"> in feature file <"RegisterDeposit.feature">
	Then Run Senario <"SetDepositLimits"> limit 500 first set true
	Then Run Senario <"CompareDepositMsg"> amount 501 limit 500 msg <"Amount should be between 10 and 500 inclusively">
	Then Run Senario <"CompareDepositMsg"> amount 100 limit 500 msg <"Your deposit has been approved and will be charged as WH Online">
	Then Run Senario <"LogoutAndLogin">
	Then Run Senario <"CompareDepositMsg"> amount 501 limit 500 msg <"Amount should be between 10 and 400 inclusively">
	Then Run Senario <"CompareDepositMsg"> amount 100 limit 500 msg <"Your deposit has been approved and will be charged as WH Online">
	#Then Run Senario <"CompareDepositMsg"> amount 400 limit 500 msg <"Your deposit has been approved and will be charged as WH Online">
	#Then PageUP
	#When click Deposit top Button
	#Then Read msg <"No withdraw found">

Scenario: DepositLimitExtended
	Given user connect to the internet <"">
	When Run Senario <"RegisterDepositEn"> in feature file <"RegisterDeposit.feature">
	Then Run Senario <"SetDepositLimits"> limit 500 first set true
	Then Run Senario <"CompareDepositMsg"> amount 501 limit 500 msg <"Amount should be between 10 and 500 inclusively">
	Then Run Senario <"CompareDepositMsg"> amount 100 limit 500 msg <"Your deposit has been approved and will be charged as WH Online">
	Then Run Senario <"SetDepositLimits"> limit 300 first set false
	Then Run Senario <"CompareDepositMsg"> amount 301 limit 300 msg <"Amount should be between 10 and 200 inclusively">
	Then Run Senario <"SetDepositLimits"> limit 500 first set false
	And Read msg2 <"Your new deposit limits have been set. The limits will become effective starting from">
	And Close Msg aproved2
	Then Run Senario <"CompareDepositMsg"> amount 100 limit 500 msg <"Your deposit has been approved and will be charged as WH Online">
			
Scenario: SetDepositLimits
	When click Deposit top Button
	When click Deposit Limit Link
	And Click Set Limit
	And SetPeriod Daily
	And Set Limit
	And Click on Add
	
Scenario: CompareDepositMsg
	When click Deposit top Button
	Then Set Amount
	And Set CVV 111
	And Click On Deposit
	And Read msg
	And Close Msg aproved
	Then Return to cashier

Scenario: LogoutAndLogin
	When Logout click
	Then Logout msg aprove
	Then Logout Signed out msg aprove
	And Click on LOGIN top button on main page
	And Fill Last Username in popup window
	And Fill Password <"123456"> in popup window
	And Click on LOGIN Butten in popup window
	