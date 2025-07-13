@Tracking @AllMig
Feature: Tracking Mobile
	As a new migUser I want to be able to get Tracking
	
Scenario Outline: Tracking_<Type>_<Brand>_<language>
	Given "<Type>" User is connect to the internet ""
    Given migUser language "<language>" and Brand "<Brand>" and "<Type>"
    Given migUser is navigating to ""
    #Register
    And migUser Click Register top Button
	And migUser fill Title "Mr"
	And migUser fill first "first name"
	And migUser fill last "last name"
	And migUser fill email with email: "test@playtech.com"
	And migUser fill user name with timestamp
	And migUser fill password 123456
	And migUser Contiue to step 2
	#Step 2
	And migUser click enter address manualy
	And migUser fill City "city"
	And migUser fill date of birth 1/1/1980
	And migUser select country "United Kingdom"
	And migUser fill Address "address"
	And migUser fill Post code 123
	And migUser fill Mobile 1227768276
	And migUser select currency GBP
	And migUser click on Register Now
	Then migUser Account was Created
	#Tracking
	Given User is navigating to Playtech Admin
	And User Fill Username in popup window
	And User Fill Password in popup window
	And User Submit
	Given User is navigating to Playtech AdminSearchUserUrl
	And User fill username ""
	And User Select internalaccount
	And User Click Submit
	And User Find Advertiser "<Advertiser>"
	
    @WhccMobiTrackingEn @WhccAllMig
    Examples:
		| language | Brand | Type |  migUserAccount  					  | Advertiser | 
    	| en	   | Whcc  | Mobi |  Wellcome to william hill casino club | yonam      |
    	
    @EgMobiTrackingEn @EgAllMig
    Examples:
   		| language | Brand | Type   |  migUserAccount  				     | Advertiser |  
    	| en	   | Eg    | Mobi   |  Wellcome to Eurogrand casino club | yonam      |