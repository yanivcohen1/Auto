@Payments
Feature: Payments
	As a new user
	I want to be able to Self Exclude
	
Scenario: SelfExclude
	Given user connect to the internet <"">
	When Run Senario <"RegisterDepositEn"> in feature file <"RegisterDeposit.feature">
	Then open Menu
	Then open my account
	Then open Responsible Gaming
	Then Set 6 months
	Then Set exclude
	Then Click on ok
	When click Deposit top Button
	#Then read exclude <"Deposits prohibited because of Self exclusion, Time Out or exceeded deposit limits">
	Then read exclude <"Deposits prohibited because of Self exclusion, Time Out or exceeded deposit limits">
	When Run Senario <"LogoutAndLogin"> in feature file <"DepositLimit.feature">
	When click Deposit top Button
	Then read exclude <"Deposits prohibited because of Self exclusion, Time Out or exceeded deposit limits"> 
	