@openMgpGames
Feature: Games
	As a new user I want to be able open games
	
Scenario:
	Given login to casino
	
Scenario Outline: Casino
	Given open URL "<casinoUrl>" is this Mgp Game "<MgpGame>"
	
    Examples:
		| casinoUrl | MgpGame |