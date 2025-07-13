@Login
Feature: Login
	As a new user
	I want to be able Register And deposit

Background:
    #chrome firefox
	Given user connect to the internet <"">
	
Scenario: Login
	# Start MainPage
	When user navigates to <"">
	# Start Register
	And Click on LOGIN top button on main page
	And Fill Username <""> in popup window
	And Fill Password <"123456"> in popup window
	And Click on LOGIN Butten in popup window
	#And Click on Accept on terms and condition
	Then read the Current Balance
	