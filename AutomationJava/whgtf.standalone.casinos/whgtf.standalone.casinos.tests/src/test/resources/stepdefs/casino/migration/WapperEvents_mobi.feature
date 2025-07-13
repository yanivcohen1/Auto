@WapperEvents @AllMig
Feature: WapperEvents mobile
	As a new migUser I want to be able to open Wapper Events
		
Scenario Outline: WapperEvents_<Type>_<Brand>_<Event>_<language>
	Given "<Type>" User is connect to the internet ""
	Given migUser language "<language>" and Brand "<Brand>" and "<Type>"
    Given migUser is navigating to url "/?wrapper=1"
	# Start Events
	And migUser triger event "<Event>"
	Then migUser Read fired Event start with "nwt://?wrapper=[" and contain "<EventData>"

	@WhccWapperEventsEn @WhccAllMig
	Examples:
		| Event            	   | EventData 									  | language | Brand | Type |
		| menuOpened	       | {"action":"menuOpened"}  					  |  en	     | Whcc  | Mobi | 
		| menuClosed	       | {"action":"menuClosed"}  					  |  en	     | Whcc  | Mobi |	
		| loginPopupClose	   | {"action":"loginPopupClose"}  			      |  en	     | Whcc  | Mobi |		
		| loginPopupOpen	   | {"action":"loginPopupOpen"}				  |  en	     | Whcc  | Mobi |		
		| loggedin	       	   | "result":"success","action":"loggedin"  	  |  en	     | Whcc  | Mobi |		
		| loggedout	       	   | "action":"loggedout","result":"success" 	  |  en	     | Whcc  | Mobi |		
		| Registration	       | "action":"Registration","result":"success"   |  en	     | Whcc  | Mobi |		
		| successDeposit	   | "action":"successDeposit"  				  |  en	     | Whcc  | Mobi |		
		| lobbyLeave	       | {"action":"lobbyLeave"}  					  |  en	     | Whcc  | Mobi |
		| lobbyEnter	       | "action":"lobbyEnter"  					  |  en	     | Whcc  | Mobi |		
		| lobbyEnterFromGame   | {"action":"lobbyEnterFromGame"}  			  |  en	     | Whcc  | Mobi |
		| gameLaunch  		   | {"action":"gameLaunch"} 					  |  en	     | Whcc  | Mobi |
		| gameloggedin		   | "result":"success","action":"loggedin"		  |  en	     | Whcc  | Mobi |
		| RichInbox	       | "action":"openRichInbox"   			          |  en      | Whcc  | Mobi |

	@EgWapperEventsEn @EgAllMig
	Examples:
		| Event            	   | EventData 									  | language | Brand | Type |
		| menuOpened	       | {"action":"menuOpened"}  					  |  en	     | Eg    | Mobi | 
		| menuClosed	       | {"action":"menuClosed"}  					  |  en	     | Eg    | Mobi |	
		| loginPopupClose	   | {"action":"loginPopupClose"}  			      |  en	     | Eg    | Mobi |		
		| loginPopupOpen	   | {"action":"loginPopupOpen"}				  |  en	     | Eg    | Mobi |		
		| loggedin	       	   | "result":"success","action":"loggedin"  	  |  en	     | Eg    | Mobi |		
		| loggedout	       	   | "action":"loggedout","result":"success" 	  |  en	     | Eg    | Mobi |		
		| Registration	       | "action":"Registration","result":"success"   |  en	     | Eg    | Mobi |		
		| successDeposit	   | "action":"successDeposit"  				  |  en	     | Eg    | Mobi |		
		| lobbyLeave	       | {"action":"lobbyLeave"}  					  |  en	     | Eg    | Mobi |
		| lobbyEnter	       | "action":"lobbyEnter"  					  |  en	     | Eg    | Mobi |		
		| lobbyEnterFromGame   | {"action":"lobbyEnterFromGame"}  			  |  en	     | Eg    | Mobi |
		| gameLaunch  		   | {"action":"gameLaunch"} 					  |  en	     | Eg    | Mobi |
		| gameloggedin		   | "result":"success","action":"loggedin"		  |  en	     | Eg    | Mobi |
		| RichInbox	           | "action":"openRichInbox"   			      |   en     | Eg    | Mobi |		
		
	@EgWapperEventsEnManual
	Examples:
		| Event            	       | EventData 								  | language | Brand | Type | 
		|  RichInbox	       	   | "action":"openRichInbox"   			  |   en     | Whcc  | Mobi |