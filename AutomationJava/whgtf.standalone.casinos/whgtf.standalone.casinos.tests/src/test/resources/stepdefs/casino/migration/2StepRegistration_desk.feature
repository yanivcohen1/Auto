@Register2Steps @AllMig
Feature: Register2Steps Desktop
  As a new migUser I want to be able Register

  Scenario Outline: Register2Steps_<Type>_<Brand>_<language>
    Given "<Type>" User is connect to the internet ""
    Given migUser language "<language>" and Brand "<Brand>" and "<Type>"
    Given migUser is navigating to "<landindPage>"
    #Register
    #And migUser Click Register top Button
    #And migUser fill Title "Mr"
    And user insert to iframe register
    And migUser fill first "first name"
    And migUser fill last "last name"
    And migUser fill date of birth 1/1/1980
    And migUser fill email with email: "test@playtech.com"
    Then User click on create accunt
    And migUser fill user name with timestamp
    And migUser fill password 123456
    #And migUser Contiue to step 2
    And migUser click enter address manualy
    And migUser fill City "city"
    #And migUser fill date of birth 1/1/1980
    And migUser select country "United Kingdom"
    And migUser fill Address "address"
    And migUser fill Post code 123
    And migUser fill Mobile 1227768276
    And migUser select currency GBP
    And migUser click on Create Account
    #And migUser click on Register Now
    Then migUser Account was Created

    @WhccDesk2StepRegisterEn @WhccAllMig
    Examples: 
      | language | Brand | Type | landindPage                                     |
      | en       | Whcc  | Desk | http://static.williamhillcasino.com/casino-step |

    @EgDesk2StepRegisterEn @EgAllMig
    Examples: 
      | language | Brand | Type | landindPage                             |
      | en       | Eg    | Desk | http://static.eurogrand.com/casino-step |
