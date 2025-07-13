@Payments
Feature: Payments
	As a new user
	I want to be able to Time Out
	
Scenario: TimeOut
	Given user connect to the internet <"">
	When Run Senario <"RegisterDepositEn"> in feature file <"RegisterDeposit.feature">
	Then open Menu
	Then open my account
	Then open Responsible Gaming
	Then Read user name
	Then Set 24 Hours
	Then save TimeOut
	Then Successfull ok click
	Then read Timeout <"Sorry, you have asked to be timed-out from playing and were automatically logged off. You can play again after">
	Then Click OK
	Then Logout Signed out msg aprove
	
	And Click on LOGIN top button on main page
	And Fill Last Username in popup window
	And Fill Password <"123456"> in popup window
	And Click on LOGIN Butten in popup window no refresh
	#Then read exclude <"Deposits prohibited because of Self exclusion, Time Out or exceeded deposit limits">
	Then read Login msg <"Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after"> 
	