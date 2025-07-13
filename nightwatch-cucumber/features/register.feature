Feature: Registeration
As a new migUser I want to be able Register

  @allRegistrations
  Scenario Outline: Register_<Type>_<Brand>_<language>
    #Given "mobile" User is connect to the internet ""
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
    # #Step 2
    And User enter zip code "123"
    #And migUser fill City "city"
    And migUser fill date of birth 1/1/1980
    And migUser select country "United Kingdom"
    #And migUser fill Address "address"
    #And migUser fill Post code 123
    And migUser fill Mobile 1227768276
    #And migUser select currency GBP
    And migUser click on Register Now
    Then migUser Account was Created

    @WhccDeskRegisterEn
    Examples: 
      | language | Brand | Type |
      | en       | WHCC  | DESK |

    @WhccMobiRegisterEn
    Examples: 
      | language | Brand | Type |                                                                                                          
      | en       | WHCC  | MOBI |

    @EgDeskRegisterEn
    Examples: 
      | language | Brand | Type |                                                                                                          
      | en       | EG  | DESK |

    @EgMobiRegisterEn
    Examples: 
      | language | Brand | Type |                                                                                                          
      | en       | EG  | MOBI |