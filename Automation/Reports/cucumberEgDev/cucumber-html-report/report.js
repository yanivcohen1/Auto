$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("casino/migration/DepositLimit_desk_new.feature");
formatter.feature({
  "line": 2,
  "name": "DepositLimit Desktop",
  "description": "As a new migUser I want to be able Deposit",
  "id": "depositlimit-desktop",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DepositLimitMobile"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "DepositLimit_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "depositlimit-desktop;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser Deposit limit \"Daily\" with limit Amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Deposit"
    }
  ],
  "line": 32,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "migUser insert card number \"1111111111111111\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "migUser fill Amount to Deposit \"102\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "migUser select Expiration Month \"01\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "migUser select Expiration Year \"2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "migUser fill CVV2 \"111\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "migUser click on Deposit",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "migUser Read Limit Msg \"\u003cDepositLimitMsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "migUser fill Amount to Deposit \"99\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "migUser click on Deposit",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "migUser read MSG You just \"\u003cfreeSpins\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "migUser read MSG Your \"\u003cdepositApproved\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "depositlimit-desktop;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "migUserAccount",
        "RadioButten",
        "DepositLimitMsg",
        "freeSpins",
        "depositApproved"
      ],
      "line": 55,
      "id": "depositlimit-desktop;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Eg",
        "Desk",
        "Wellcome to Eurogrand casino club",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "Amount should be between",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online"
      ],
      "line": 56,
      "id": "depositlimit-desktop;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1174901838,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "DepositLimit_Desk_Eg_en",
  "description": "",
  "id": "depositlimit-desktop;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@DepositLimitMobile"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser Deposit limit \"Daily\" with limit Amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Deposit"
    }
  ],
  "line": 32,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "migUser insert card number \"1111111111111111\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "migUser fill Amount to Deposit \"102\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "migUser select Expiration Month \"01\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "migUser select Expiration Year \"2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "migUser fill CVV2 \"111\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "migUser click on Deposit",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "migUser Read Limit Msg \"Amount should be between\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "migUser fill Amount to Deposit \"99\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "migUser click on Deposit",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "migUser read MSG You just \"free spins\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "migUser read MSG Your \"Your deposit has been approved and will be charged as WH Online\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 7667650497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 1242896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 19254322826,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 57228808690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5430440182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 608105500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 754464045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 1663447729,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405065914");
formatter.result({
  "duration": 545453682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 537588996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 727953134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 3188857243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 10549556997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 430946671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 280645166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 932127407,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 43022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Daily",
      "offset": 23
    },
    {
      "val": "100",
      "offset": 49
    }
  ],
  "location": "RegisterPage.miguser_Deposit_limit_with_limit_Amount(String,String)"
});
formatter.result({
  "duration": 1680877039,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 548971447,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3870450015,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 4836105986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111111111111111",
      "offset": 28
    }
  ],
  "location": "DepositPage.user_insert_card_number(String)"
});
formatter.result({
  "duration": 2709432344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "102",
      "offset": 32
    }
  ],
  "location": "DepositPage.fill_Amount_to_Deposit_(String)"
});
formatter.result({
  "duration": 1427956625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 33
    }
  ],
  "location": "DepositPage.select_Expiration_Mouth(String)"
});
formatter.result({
  "duration": 584277052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020",
      "offset": 32
    }
  ],
  "location": "DepositPage.select_Expiration_Year(String)"
});
formatter.result({
  "duration": 699472419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 19
    }
  ],
  "location": "DepositPage.fill_CVV_(String)"
});
formatter.result({
  "duration": 356499219,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 1102497385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amount should be between",
      "offset": 24
    }
  ],
  "location": "DepositPage.user_Read_Limit_Msg(String)"
});
formatter.result({
  "duration": 406587709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 32
    }
  ],
  "location": "DepositPage.fill_Amount_to_Deposit_(String)"
});
formatter.result({
  "duration": 571742219,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 367067044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "free spins",
      "offset": 27
    }
  ],
  "location": "DepositPage.user_MSG_You_just(String)"
});
formatter.result({
  "duration": 3457645874,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2378904022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your deposit has been approved and will be charged as WH Online",
      "offset": 23
    }
  ],
  "location": "DepositPage.msg_Your(String)"
});
formatter.result({
  "duration": 217313373,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2648802292,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £198");
formatter.result({
  "duration": 13381219121,
  "status": "passed"
});
formatter.after({
  "duration": 2268874675,
  "status": "passed"
});
formatter.uri("casino/migration/DepositLimit_mobi_new.feature");
formatter.feature({
  "line": 2,
  "name": "DepositLimit mobile",
  "description": "As a new migUser I want to be able Deposit",
  "id": "depositlimit-mobile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DepositLimitMobile"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "DepositLimit_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "depositlimit-mobile;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser Deposit limit \"Daily\" with limit Amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Deposit"
    }
  ],
  "line": 32,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "migUser insert card number \"1111111111111111\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "migUser fill Amount to Deposit \"102\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "migUser select Expiration Month \"01\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "migUser select Expiration Year \"2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "migUser fill CVV2 \"111\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "migUser click on Deposit",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "migUser Read Limit Msg \"\u003cDepositLimitMsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "migUser fill Amount to Deposit \"99\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "migUser click on Deposit",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "migUser read MSG You just \"\u003cfreeSpins\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "migUser read MSG Your \"\u003cdepositApproved\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "depositlimit-mobile;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "migUserAccount",
        "RadioButten",
        "DepositLimitMsg",
        "freeSpins",
        "depositApproved"
      ],
      "line": 55,
      "id": "depositlimit-mobile;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Eg",
        "Mobi",
        "Wellcome to Eurogrand casino club",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "Amount should be between",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online"
      ],
      "line": 56,
      "id": "depositlimit-mobile;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1506616,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "DepositLimit_Mobi_Eg_en",
  "description": "",
  "id": "depositlimit-mobile;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@DepositLimitMobile"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser Deposit limit \"Daily\" with limit Amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Deposit"
    }
  ],
  "line": 32,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "migUser insert card number \"1111111111111111\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "migUser fill Amount to Deposit \"102\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "migUser select Expiration Month \"01\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "migUser select Expiration Year \"2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "migUser fill CVV2 \"111\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "migUser click on Deposit",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "migUser Read Limit Msg \"Amount should be between\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "migUser fill Amount to Deposit \"99\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "migUser click on Deposit",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "migUser read MSG You just \"free spins\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "migUser read MSG Your \"Your deposit has been approved and will be charged as WH Online\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 3032699407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 692267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 13387316265,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 21105035137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5320720091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 377381762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 295621371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 483741928,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405070104");
formatter.result({
  "duration": 423359952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 300870083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "RegisterPage.Contiue_to_step(int)"
});
formatter.result({
  "duration": 241413364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 973124518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 2192759695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 7583650157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 394055949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 273377483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 415482974,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 33244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Daily",
      "offset": 23
    },
    {
      "val": "100",
      "offset": 49
    }
  ],
  "location": "RegisterPage.miguser_Deposit_limit_with_limit_Amount(String,String)"
});
formatter.result({
  "duration": 1183100646,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 462209303,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4089805548,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 776828899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111111111111111",
      "offset": 28
    }
  ],
  "location": "DepositPage.user_insert_card_number(String)"
});
formatter.result({
  "duration": 2764986891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "102",
      "offset": 32
    }
  ],
  "location": "DepositPage.fill_Amount_to_Deposit_(String)"
});
formatter.result({
  "duration": 799983239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 33
    }
  ],
  "location": "DepositPage.select_Expiration_Mouth(String)"
});
formatter.result({
  "duration": 553972642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020",
      "offset": 32
    }
  ],
  "location": "DepositPage.select_Expiration_Year(String)"
});
formatter.result({
  "duration": 523199457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 19
    }
  ],
  "location": "DepositPage.fill_CVV_(String)"
});
formatter.result({
  "duration": 280667515,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 454036477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amount should be between",
      "offset": 24
    }
  ],
  "location": "DepositPage.user_Read_Limit_Msg(String)"
});
formatter.result({
  "duration": 213706770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 32
    }
  ],
  "location": "DepositPage.fill_Amount_to_Deposit_(String)"
});
formatter.result({
  "duration": 449782025,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 349851168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "free spins",
      "offset": 27
    }
  ],
  "location": "DepositPage.user_MSG_You_just(String)"
});
formatter.result({
  "duration": 6538826862,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2380828010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your deposit has been approved and will be charged as WH Online",
      "offset": 23
    }
  ],
  "location": "DepositPage.msg_Your(String)"
});
formatter.result({
  "duration": 507257766,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2313442630,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £198");
formatter.result({
  "duration": 11034212449,
  "status": "passed"
});
formatter.after({
  "duration": 1564549684,
  "status": "passed"
});
formatter.uri("casino/migration/Deposit_desk_new.feature");
formatter.feature({
  "line": 2,
  "name": "Deposit Desktop",
  "description": "As a new migUser I want to be able Deposit",
  "id": "deposit-desktop",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Deposit"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Deposit_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "deposit-desktop;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "# with css \"\u003cMsgCss\u003e\" and deposit \"\u003cDepositCss\u003e\""
    },
    {
      "line": 31,
      "value": "#Deposit"
    },
    {
      "line": 32,
      "value": "#When migUser click on Deposit top Button"
    }
  ],
  "line": 33,
  "name": "migUser insert card number \"1111111111111111\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "migUser fill Amount to Deposit \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "migUser select Expiration Month \"01\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "migUser select Expiration Year \"2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "migUser fill CVV2 \"111\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "migUser click on Deposit",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#And migUser click on OK"
    }
  ],
  "line": 40,
  "name": "migUser read MSG You just \"\u003cfreeSpins\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "migUser read MSG Your \"\u003cdepositApproved\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 45,
      "value": "#Then migUser back to home page \"\u003cBrand\u003e\" \"\u003chomeURL\u003e\""
    }
  ],
  "line": 46,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.examples({
  "line": 55,
  "name": "",
  "description": "",
  "id": "deposit-desktop;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "RadioButten",
        "freeSpins",
        "depositApproved",
        "homeURL"
      ],
      "line": 56,
      "id": "deposit-desktop;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Eg",
        "Desk",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online",
        "/en/?cat\u003dMost-Popular"
      ],
      "line": 57,
      "id": "deposit-desktop;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1512762,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Deposit_Desk_Eg_en",
  "description": "",
  "id": "deposit-desktop;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Deposit"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "# with css \"\u003cMsgCss\u003e\" and deposit \"\u003cDepositCss\u003e\""
    },
    {
      "line": 31,
      "value": "#Deposit"
    },
    {
      "line": 32,
      "value": "#When migUser click on Deposit top Button"
    }
  ],
  "line": 33,
  "name": "migUser insert card number \"1111111111111111\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "migUser fill Amount to Deposit \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "migUser select Expiration Month \"01\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "migUser select Expiration Year \"2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "migUser fill CVV2 \"111\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "migUser click on Deposit",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#And migUser click on OK"
    }
  ],
  "line": 40,
  "name": "migUser read MSG You just \"free spins\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "migUser read MSG Your \"Your deposit has been approved and will be charged as WH Online\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 45,
      "value": "#Then migUser back to home page \"\u003cBrand\u003e\" \"\u003chomeURL\u003e\""
    }
  ],
  "line": 46,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2295157904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 1215517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 26586472023,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5429365744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5759192299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 768686802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 605223010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 1460234750,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405070238");
formatter.result({
  "duration": 627938746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 477774968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 538851725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 2886580836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 10042576360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 563652643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 297496749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 478011032,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 304229,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 388423948,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3724109628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111111111111111",
      "offset": 28
    }
  ],
  "location": "DepositPage.user_insert_card_number(String)"
});
formatter.result({
  "duration": 3205015721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 32
    }
  ],
  "location": "DepositPage.fill_Amount_to_Deposit_(String)"
});
formatter.result({
  "duration": 817771812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 33
    }
  ],
  "location": "DepositPage.select_Expiration_Mouth(String)"
});
formatter.result({
  "duration": 609048077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020",
      "offset": 32
    }
  ],
  "location": "DepositPage.select_Expiration_Year(String)"
});
formatter.result({
  "duration": 1106572483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 19
    }
  ],
  "location": "DepositPage.fill_CVV_(String)"
});
formatter.result({
  "duration": 423023317,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 475757114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "free spins",
      "offset": 27
    }
  ],
  "location": "DepositPage.user_MSG_You_just(String)"
});
formatter.result({
  "duration": 3524073590,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 3184214474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your deposit has been approved and will be charged as WH Online",
      "offset": 23
    }
  ],
  "location": "DepositPage.msg_Your(String)"
});
formatter.result({
  "duration": 248285746,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2550692058,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 63099716305,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £200");
formatter.result({
  "duration": 11641231218,
  "status": "passed"
});
formatter.after({
  "duration": 2573360860,
  "status": "passed"
});
formatter.uri("casino/migration/Deposit_mobi_new.feature");
formatter.feature({
  "line": 2,
  "name": "Deposit Mobile",
  "description": "As a new migUser I want to be able Deposit",
  "id": "deposit-mobile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Deposit"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Deposit_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "deposit-mobile;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Deposit"
    },
    {
      "line": 31,
      "value": "#When migUser click on Deposit top Button"
    }
  ],
  "line": 32,
  "name": "migUser insert card number \"1111111111111111\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "migUser fill Amount to Deposit \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "migUser select Expiration Month \"01\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "migUser select Expiration Year \"2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "migUser fill CVV2 \"111\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "migUser click on Deposit",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#And migUser click on OK"
    }
  ],
  "line": 39,
  "name": "migUser read MSG You just \"\u003cfreeSpins\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "migUser read MSG Your \"\u003cdepositApproved\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "migUser back to home page \"\u003cBrand\u003e\" \"\u003chomeURL\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "deposit-mobile;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "RadioButten",
        "freeSpins",
        "depositApproved",
        "homeURL"
      ],
      "line": 54,
      "id": "deposit-mobile;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Eg",
        "Mobi",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online",
        "/en/?cat\u003dMost-Popular"
      ],
      "line": 55,
      "id": "deposit-mobile;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1149308,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Deposit_Mobi_Eg_en",
  "description": "",
  "id": "deposit-mobile;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Deposit"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Deposit"
    },
    {
      "line": 31,
      "value": "#When migUser click on Deposit top Button"
    }
  ],
  "line": 32,
  "name": "migUser insert card number \"1111111111111111\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "migUser fill Amount to Deposit \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "migUser select Expiration Month \"01\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "migUser select Expiration Year \"2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "migUser fill CVV2 \"111\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "migUser click on Deposit",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#And migUser click on OK"
    }
  ],
  "line": 39,
  "name": "migUser read MSG You just \"free spins\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "migUser read MSG Your \"Your deposit has been approved and will be charged as WH Online\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "migUser Click On ACCEPT",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "migUser back to home page \"Eg\" \"/en/?cat\u003dMost-Popular\"",
  "matchedColumns": [
    1,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 3148874229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 686959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 27967406752,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4680130575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5329505565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 479536086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 417327063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 564664783,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405070514");
formatter.result({
  "duration": 492313687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 442274367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "RegisterPage.Contiue_to_step(int)"
});
formatter.result({
  "duration": 341297846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 466221266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 2166458866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 8782223439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 418761602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 355734318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 575860619,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 33803,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 315142567,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 2871428072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111111111111111",
      "offset": 28
    }
  ],
  "location": "DepositPage.user_insert_card_number(String)"
});
formatter.result({
  "duration": 2457630788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 32
    }
  ],
  "location": "DepositPage.fill_Amount_to_Deposit_(String)"
});
formatter.result({
  "duration": 595394387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 33
    }
  ],
  "location": "DepositPage.select_Expiration_Mouth(String)"
});
formatter.result({
  "duration": 500575631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020",
      "offset": 32
    }
  ],
  "location": "DepositPage.select_Expiration_Year(String)"
});
formatter.result({
  "duration": 700415835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 19
    }
  ],
  "location": "DepositPage.fill_CVV_(String)"
});
formatter.result({
  "duration": 254666445,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 367449494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "free spins",
      "offset": 27
    }
  ],
  "location": "DepositPage.user_MSG_You_just(String)"
});
formatter.result({
  "duration": 5613452269,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2375237915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your deposit has been approved and will be charged as WH Online",
      "offset": 23
    }
  ],
  "location": "DepositPage.msg_Your(String)"
});
formatter.result({
  "duration": 345219016,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2362926015,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 63014993805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eg",
      "offset": 27
    },
    {
      "val": "/en/?cat\u003dMost-Popular",
      "offset": 32
    }
  ],
  "location": "DepositPage.miguser_back_to_home_page(String,String)"
});
formatter.result({
  "duration": 16210719,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £200");
formatter.result({
  "duration": 8740867066,
  "status": "passed"
});
formatter.after({
  "duration": 2213251685,
  "status": "passed"
});
formatter.uri("casino/migration/InnerPageNoRedirectToHP_desk.feature");
formatter.feature({
  "line": 2,
  "name": "InnerPageNoRedirectToHP Desktop",
  "description": "As a new migUser I want to be able Login",
  "id": "innerpagenoredirecttohp-desktop",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RedirectEn"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "InnerPageNoRedirectToHP_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "innerpagenoredirecttohp-desktop;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Redirection To \"\u003cHome\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "innerpagenoredirecttohp-desktop;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "migUserName",
        "Password",
        "Home",
        "URL"
      ],
      "line": 13,
      "id": "innerpagenoredirecttohp-desktop;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Eg",
        "Desk",
        "170129040528",
        "123456",
        "https://www.eurogrand.com/en/promotions",
        "https://ww2.eurogrand.com/en/promotions?cat\u003dmost%20popular"
      ],
      "line": 14,
      "id": "innerpagenoredirecttohp-desktop;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 847314,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "InnerPageNoRedirectToHP_Desk_Eg_En",
  "description": "",
  "id": "innerpagenoredirecttohp-desktop;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@RedirectEn"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"https://ww2.eurogrand.com/en/promotions?cat\u003dmost%20popular\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Redirection To \"https://www.eurogrand.com/en/promotions\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2376841470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 725232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://ww2.eurogrand.com/en/promotions?cat\u003dmost%20popular",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.result({
  "duration": 13572074383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.eurogrand.com/en/promotions",
      "offset": 16
    }
  ],
  "location": "MainWebPage.no_Redirection(String)"
});
formatter.result({
  "duration": 766263310,
  "status": "passed"
});
formatter.after({
  "duration": 1420874162,
  "status": "passed"
});
formatter.uri("casino/migration/InnerPageNoRedirectToHP_mobi.feature");
formatter.feature({
  "line": 2,
  "name": "InnerPageNoRedirectToHP mobile",
  "description": "As a new migUser I want to be able Login",
  "id": "innerpagenoredirecttohp-mobile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RedirectEn"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "InnerPageNoRedirectToHP_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "innerpagenoredirecttohp-mobile;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Redirection To \"\u003cHome\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "innerpagenoredirecttohp-mobile;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "migUserName",
        "Password",
        "Home",
        "URL"
      ],
      "line": 13,
      "id": "innerpagenoredirecttohp-mobile;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Eg",
        "Mobi",
        "170129040528",
        "123456",
        "https://www.eurogrand.com/en/promotions",
        "https://ww2.eurogrand.com/en/promotions?cat\u003dmost%20popular"
      ],
      "line": 14,
      "id": "innerpagenoredirecttohp-mobile;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 289143,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "InnerPageNoRedirectToHP_Mobi_Eg_En",
  "description": "",
  "id": "innerpagenoredirecttohp-mobile;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@RedirectEn"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"https://ww2.eurogrand.com/en/promotions?cat\u003dmost%20popular\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Redirection To \"https://www.eurogrand.com/en/promotions\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 1822393348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 718807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://ww2.eurogrand.com/en/promotions?cat\u003dmost%20popular",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.result({
  "duration": 8099940355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.eurogrand.com/en/promotions",
      "offset": 16
    }
  ],
  "location": "MainWebPage.no_Redirection(String)"
});
formatter.result({
  "duration": 28368968,
  "status": "passed"
});
formatter.after({
  "duration": 1504519708,
  "status": "passed"
});
formatter.uri("casino/migration/LoginPopup_desk.feature");
formatter.feature({
  "line": 2,
  "name": "LoginPopup Desktop",
  "description": "As a new migUser I want to be able Login",
  "id": "loginpopup-desktop",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginPopup"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "loginpopup-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\u003cLoginURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "migUser see login Popup window",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 16,
      "value": "#\t@WhccDeLogin"
    },
    {
      "line": 17,
      "value": "#    Examples:"
    },
    {
      "line": 18,
      "value": "#\t\t| language | Brand | configurationFile \t\t | migUserName \t| Password |"
    },
    {
      "line": 19,
      "value": "#\t\t| de\t   | Whcc  | WhccMobileEnLogin.xml   | 151007020423 | 123456   |"
    }
  ],
  "line": 22,
  "name": "",
  "description": "",
  "id": "loginpopup-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "migUserName",
        "Password",
        "LoginURL"
      ],
      "line": 23,
      "id": "loginpopup-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Eg",
        "Desk",
        "170129040528",
        "123456",
        "https://www.eurogrand.com/login"
      ],
      "line": 24,
      "id": "loginpopup-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 321270,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login_Desk_Eg_En",
  "description": "",
  "id": "loginpopup-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@LoginPopup"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"https://www.eurogrand.com/login\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "migUser see login Popup window",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2358918801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 716013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.eurogrand.com/login",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.result({
  "duration": 11038863040,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.miguser_see_login_Popup_window()"
});
formatter.result({
  "duration": 20100144851,
  "error_message": "java.lang.AssertionError: Login popup not find\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.wh.auto.common.WebDriverUtils.assertTrue(WebDriverUtils.java:54)\r\n\tat stepdefs.casino.migration.MainWebPage.miguser_see_login_Popup_window(MainWebPage.java:197)\r\n\tat ✽.Then migUser see login Popup window(casino/migration/LoginPopup_desk.feature:9)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u00272.Login_Desk_Eg_En-20170405_190806.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nWed Apr 05 19:07:36 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:07:36 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:07:36 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:07:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nWed Apr 05 19:07:38 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nWed Apr 05 19:07:38 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:07:38 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nWed Apr 05 19:07:38 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:07:38 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nWed Apr 05 19:07:38 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nWed Apr 05 19:07:39 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:07:39 IDT 2017 SEVERE https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4294 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nWed Apr 05 19:07:39 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:07:39 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:07:40 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:07:42 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:07:42 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:07:42 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:07:46 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:07:46 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:07:46 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:07:46 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:07:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:07:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:07:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier started\"\r\nWed Apr 05 19:07:48 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\n");
formatter.after({
  "duration": 4114497513,
  "status": "passed"
});
formatter.before({
  "duration": 359822,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login_Desk_Eg_En",
  "description": "",
  "id": "loginpopup-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@LoginPopup"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"https://www.eurogrand.com/login\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "migUser see login Popup window",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2401869232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 965486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.eurogrand.com/login",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.result({
  "duration": 11043345732,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.miguser_see_login_Popup_window()"
});
formatter.result({
  "duration": 20114071202,
  "error_message": "java.lang.AssertionError: Login popup not find\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.wh.auto.common.WebDriverUtils.assertTrue(WebDriverUtils.java:54)\r\n\tat stepdefs.casino.migration.MainWebPage.miguser_see_login_Popup_window(MainWebPage.java:197)\r\n\tat ✽.Then migUser see login Popup window(casino/migration/LoginPopup_desk.feature:9)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u00273.Login_Desk_Eg_En-20170405_190843.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nWed Apr 05 19:08:14 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:08:14 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:08:14 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:08:15 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nWed Apr 05 19:08:15 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nWed Apr 05 19:08:15 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:15 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nWed Apr 05 19:08:15 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:16 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:16 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:16 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:16 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nWed Apr 05 19:08:16 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:16 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:16 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:16 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nWed Apr 05 19:08:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:17 IDT 2017 SEVERE https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4294 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nWed Apr 05 19:08:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier started\"\r\nWed Apr 05 19:08:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:18 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:19 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:08:19 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:08:19 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\n");
formatter.after({
  "duration": 3031473833,
  "status": "passed"
});
formatter.before({
  "duration": 378540,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login_Desk_Eg_En",
  "description": "",
  "id": "loginpopup-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@LoginPopup"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"https://www.eurogrand.com/login\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "migUser see login Popup window",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2500342083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 955988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.eurogrand.com/login",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.result({
  "duration": 10972676415,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.miguser_see_login_Popup_window()"
});
formatter.result({
  "duration": 20427827280,
  "error_message": "java.lang.AssertionError: Login popup not find\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.wh.auto.common.WebDriverUtils.assertTrue(WebDriverUtils.java:54)\r\n\tat stepdefs.casino.migration.MainWebPage.miguser_see_login_Popup_window(MainWebPage.java:197)\r\n\tat ✽.Then migUser see login Popup window(casino/migration/LoginPopup_desk.feature:9)\r\n",
  "status": "failed"
});
formatter.write("The console:\r\nWed Apr 05 19:08:51 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:08:51 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:08:51 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:08:52 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nWed Apr 05 19:08:52 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nWed Apr 05 19:08:52 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:52 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nWed Apr 05 19:08:52 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:53 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:53 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:53 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:53 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nWed Apr 05 19:08:53 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:53 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:53 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:53 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nWed Apr 05 19:08:53 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:53 IDT 2017 SEVERE https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4294 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nWed Apr 05 19:08:53 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:54 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier started\"\r\nWed Apr 05 19:08:54 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:54 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:08:56 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:08:56 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:08:56 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\n");
formatter.after({
  "duration": 2948071613,
  "status": "passed"
});
formatter.uri("casino/migration/LoginPopup_mobi.feature");
formatter.feature({
  "line": 2,
  "name": "LoginPopup mobile",
  "description": "As a new migUser I want to be able Login",
  "id": "loginpopup-mobile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginPopup"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "loginpopup-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\u003cLoginURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "migUser see login Popup window",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 16,
      "value": "#\t@WhccDeLogin"
    },
    {
      "line": 17,
      "value": "#    Examples:"
    },
    {
      "line": 18,
      "value": "#\t\t| language | Brand | configurationFile \t\t | migUserName \t| Password |"
    },
    {
      "line": 19,
      "value": "#\t\t| de\t   | Whcc  | WhccMobileEnLogin.xml   | 151007020423 | 123456   |"
    }
  ],
  "line": 22,
  "name": "",
  "description": "",
  "id": "loginpopup-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "migUserName",
        "Password",
        "LoginURL"
      ],
      "line": 23,
      "id": "loginpopup-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Eg",
        "Mobi",
        "170129040528",
        "123456",
        "https://www.eurogrand.com/login"
      ],
      "line": 24,
      "id": "loginpopup-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 647847,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login_Mobi_Eg_En",
  "description": "",
  "id": "loginpopup-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@LoginPopup"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"https://www.eurogrand.com/login\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "migUser see login Popup window",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 3018712434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 585828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.eurogrand.com/login",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.result({
  "duration": 9544412208,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.miguser_see_login_Popup_window()"
});
formatter.result({
  "duration": 20053847626,
  "error_message": "java.lang.AssertionError: Login popup not find\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.wh.auto.common.WebDriverUtils.assertTrue(WebDriverUtils.java:54)\r\n\tat stepdefs.casino.migration.MainWebPage.miguser_see_login_Popup_window(MainWebPage.java:197)\r\n\tat ✽.Then migUser see login Popup window(casino/migration/LoginPopup_mobi.feature:9)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u00275.Login_Mobi_Eg_En-20170405_190957.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nWed Apr 05 19:09:29 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:09:29 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:09:29 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:09:30 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nWed Apr 05 19:09:30 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nWed Apr 05 19:09:30 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:09:31 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nWed Apr 05 19:09:31 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:09:31 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nWed Apr 05 19:09:31 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nWed Apr 05 19:09:32 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:09:32 IDT 2017 SEVERE https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4294 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nWed Apr 05 19:09:32 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:09:32 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:09:36 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:09:36 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:09:36 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:09:36 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:09:36 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:09:36 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier started\"\r\n");
formatter.after({
  "duration": 3151455283,
  "status": "passed"
});
formatter.before({
  "duration": 1040076,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login_Mobi_Eg_En",
  "description": "",
  "id": "loginpopup-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@LoginPopup"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"https://www.eurogrand.com/login\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "migUser see login Popup window",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2804762617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 555657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.eurogrand.com/login",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.result({
  "duration": 8703398057,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.miguser_see_login_Popup_window()"
});
formatter.result({
  "duration": 20365579704,
  "error_message": "java.lang.AssertionError: Login popup not find\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.wh.auto.common.WebDriverUtils.assertTrue(WebDriverUtils.java:54)\r\n\tat stepdefs.casino.migration.MainWebPage.miguser_see_login_Popup_window(MainWebPage.java:197)\r\n\tat ✽.Then migUser see login Popup window(casino/migration/LoginPopup_mobi.feature:9)\r\n",
  "status": "failed"
});
formatter.write("The console:\r\nWed Apr 05 19:10:04 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:10:04 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:10:04 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:10:05 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nWed Apr 05 19:10:05 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nWed Apr 05 19:10:05 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:06 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nWed Apr 05 19:10:06 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:06 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:06 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:06 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nWed Apr 05 19:10:06 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nWed Apr 05 19:10:06 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:06 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:07 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:07 IDT 2017 SEVERE https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4294 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nWed Apr 05 19:10:07 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:07 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier started\"\r\nWed Apr 05 19:10:07 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:07 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\n");
formatter.after({
  "duration": 3426632156,
  "status": "passed"
});
formatter.before({
  "duration": 629410,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login_Mobi_Eg_En",
  "description": "",
  "id": "loginpopup-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@LoginPopup"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"https://www.eurogrand.com/login\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "migUser see login Popup window",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 3012623672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 648965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.eurogrand.com/login",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.result({
  "duration": 10103662896,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.miguser_see_login_Popup_window()"
});
formatter.result({
  "duration": 20258502686,
  "error_message": "java.lang.AssertionError: Login popup not find\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.wh.auto.common.WebDriverUtils.assertTrue(WebDriverUtils.java:54)\r\n\tat stepdefs.casino.migration.MainWebPage.miguser_see_login_Popup_window(MainWebPage.java:197)\r\n\tat ✽.Then migUser see login Popup window(casino/migration/LoginPopup_mobi.feature:9)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u00277.Login_Mobi_Eg_En-20170405_191109.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nWed Apr 05 19:10:40 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:10:40 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:10:40 IDT 2017 INFO https://www.eurogrand.com/login 1980:50 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:10:42 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nWed Apr 05 19:10:42 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nWed Apr 05 19:10:42 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:42 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nWed Apr 05 19:10:42 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:43 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:43 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:43 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nWed Apr 05 19:10:43 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:43 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:43 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nWed Apr 05 19:10:44 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:44 IDT 2017 SEVERE https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4294 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nWed Apr 05 19:10:44 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:44 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier started\"\r\nWed Apr 05 19:10:44 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:10:44 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\n");
formatter.after({
  "duration": 3628606709,
  "status": "passed"
});
formatter.uri("casino/migration/Login_desk.feature");
formatter.feature({
  "line": 2,
  "name": "Login Desktop",
  "description": "As a new migUser I want to be able Login",
  "id": "login-desktop",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "login-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"\u003cmigUserName\u003e\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"\u003cPassword\u003e\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And migUser Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 22,
      "value": "#\t@WhccDeLogin"
    },
    {
      "line": 23,
      "value": "#    Examples:"
    },
    {
      "line": 24,
      "value": "#\t\t| language | Brand | configurationFile \t\t | migUserName \t| Password |"
    },
    {
      "line": 25,
      "value": "#\t\t| de\t   | Whcc  | WhccMobileEnLogin.xml   | 151007020423 | 123456   |"
    }
  ],
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "migUserName",
        "Password",
        "css"
      ],
      "line": 29,
      "id": "login-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Eg",
        "Desk",
        "170129040528",
        "123456",
        "div.user-info-wrap \u003e div.fn-redirect.main-header__balance \u003e div \u003e span"
      ],
      "line": 30,
      "id": "login-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 968000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login_Desk_Eg_En",
  "description": "",
  "id": "login-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"170129040528\" in popup window",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And migUser Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 3169321799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 574374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 36278599934,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 6214525869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "170129040528",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 787325763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 319477755,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 331616448,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 10543006723,
  "status": "passed"
});
formatter.after({
  "duration": 1937561618,
  "status": "passed"
});
formatter.uri("casino/migration/Login_mobi.feature");
formatter.feature({
  "line": 2,
  "name": "Login mobile",
  "description": "As a new migUser I want to be able Login",
  "id": "login-mobile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "login-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"\u003cmigUserName\u003e\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"\u003cPassword\u003e\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And migUser Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 22,
      "value": "#\t@WhccDeLogin"
    },
    {
      "line": 23,
      "value": "#    Examples:"
    },
    {
      "line": 24,
      "value": "#\t\t| language | Brand | configurationFile \t\t | migUserName \t| Password |"
    },
    {
      "line": 25,
      "value": "#\t\t| de\t   | Whcc  | WhccMobileEnLogin.xml   | 151007020423 | 123456   |"
    }
  ],
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "migUserName",
        "Password"
      ],
      "line": 29,
      "id": "login-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Eg",
        "Mobi",
        "170129040528",
        "123456"
      ],
      "line": 30,
      "id": "login-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 503974,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login_Mobi_Eg_En",
  "description": "",
  "id": "login-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"170129040528\" in popup window",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And migUser Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2786170309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 898997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 29736014772,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4464370472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "170129040528",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 848849225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 430978797,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 336139370,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 10213789741,
  "status": "passed"
});
formatter.after({
  "duration": 1528110975,
  "status": "passed"
});
formatter.uri("casino/migration/PaymentMethodsTest_desk.feature");
formatter.feature({
  "line": 2,
  "name": "PaymentMethods Desktop",
  "description": "As a new migUser I want to be able to open Payment Methods",
  "id": "paymentmethods-desktop",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PaymentMethods"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "TestPaymentMethod_Mobile_\u003cType\u003e_\u003cBrand\u003e_\u003cMethod\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"\u003cmigUserName\u003e\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Desktop MigUser Select Payment Methode \"\u003cMethod\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Desktop migUser Read Payment URL \"\u003cURL\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "Method",
        "URL",
        "language",
        "Brand",
        "Type",
        "migUserName"
      ],
      "line": 31,
      "id": "paymentmethods-desktop;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "payPal",
        "https://www.paypal.com/cgi-bin/webscr",
        "en",
        "Eg",
        "Desk",
        "141215123054"
      ],
      "line": 32,
      "id": "paymentmethods-desktop;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;2"
    },
    {
      "cells": [
        "paySafeCard",
        "https://customer.cc.at.paysafecard.com/rest/payment/panel",
        "en",
        "Eg",
        "Desk",
        "141215123054"
      ],
      "line": 33,
      "id": "paymentmethods-desktop;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;3"
    },
    {
      "cells": [
        "Skrill",
        "https://pay.skrill.com/app/",
        "en",
        "Eg",
        "Desk",
        "141215123054"
      ],
      "line": 34,
      "id": "paymentmethods-desktop;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;4"
    },
    {
      "cells": [
        "EcoCard",
        "ecopayz.com/",
        "en",
        "Eg",
        "Desk",
        "141215123054"
      ],
      "line": 35,
      "id": "paymentmethods-desktop;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;5"
    },
    {
      "cells": [
        "LocalBankPayment",
        "https://www.envoytransfers.com/default.aspx",
        "en",
        "Eg",
        "Desk",
        "141215123054"
      ],
      "line": 36,
      "id": "paymentmethods-desktop;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 893968,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TestPaymentMethod_Mobile_Desk_Eg_payPal_en",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PaymentMethods"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"141215123054\" in popup window",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Desktop MigUser Select Payment Methode \"payPal\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Desktop migUser Read Payment URL \"https://www.paypal.com/cgi-bin/webscr\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2867766713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 544762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 13506406820,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 14638406278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "141215123054",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 1087287630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 330458759,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 311267494,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 11148763320,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 374815235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "payPal",
      "offset": 40
    }
  ],
  "location": "PaymentsPage.desk_user_Select_Methode(String)"
});
formatter.result({
  "duration": 4648914597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.paypal.com/cgi-bin/webscr",
      "offset": 34
    }
  ],
  "location": "PaymentsPage.desk_user_Read(String)"
});
formatter.result({
  "duration": 10754840070,
  "status": "passed"
});
formatter.after({
  "duration": 1506780051,
  "status": "passed"
});
formatter.before({
  "duration": 2886959,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "TestPaymentMethod_Mobile_Desk_Eg_paySafeCard_en",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PaymentMethods"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"141215123054\" in popup window",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Desktop MigUser Select Payment Methode \"paySafeCard\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Desktop migUser Read Payment URL \"https://customer.cc.at.paysafecard.com/rest/payment/panel\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2343996792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 1304636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 35109818985,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2033204500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "141215123054",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 610398808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 310757373,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 279456467,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 10369677431,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 465798028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "paySafeCard",
      "offset": 40
    }
  ],
  "location": "PaymentsPage.desk_user_Select_Methode(String)"
});
formatter.result({
  "duration": 4298748305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://customer.cc.at.paysafecard.com/rest/payment/panel",
      "offset": 34
    }
  ],
  "location": "PaymentsPage.desk_user_Read(String)"
});
formatter.result({
  "duration": 10302390387,
  "status": "passed"
});
formatter.after({
  "duration": 2256387055,
  "status": "passed"
});
formatter.before({
  "duration": 564317,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "TestPaymentMethod_Mobile_Desk_Eg_Skrill_en",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PaymentMethods"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"141215123054\" in popup window",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Desktop MigUser Select Payment Methode \"Skrill\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Desktop migUser Read Payment URL \"https://pay.skrill.com/app/\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2122448803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 681093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 31597901968,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5036859712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "141215123054",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 685289890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 338038773,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 254000997,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 10389610412,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 535290938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skrill",
      "offset": 40
    }
  ],
  "location": "PaymentsPage.desk_user_Select_Methode(String)"
});
formatter.result({
  "duration": 4399802768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://pay.skrill.com/app/",
      "offset": 34
    }
  ],
  "location": "PaymentsPage.desk_user_Read(String)"
});
formatter.result({
  "duration": 10169301127,
  "status": "passed"
});
formatter.after({
  "duration": 1447109060,
  "status": "passed"
});
formatter.before({
  "duration": 276013,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "TestPaymentMethod_Mobile_Desk_Eg_EcoCard_en",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PaymentMethods"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"141215123054\" in popup window",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Desktop MigUser Select Payment Methode \"EcoCard\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Desktop migUser Read Payment URL \"ecopayz.com/\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2214457983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 588623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 32683852557,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5261924351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "141215123054",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 618167393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 351017238,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 283657839,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 10691546272,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 365228263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EcoCard",
      "offset": 40
    }
  ],
  "location": "PaymentsPage.desk_user_Select_Methode(String)"
});
formatter.result({
  "duration": 4373945571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ecopayz.com/",
      "offset": 34
    }
  ],
  "location": "PaymentsPage.desk_user_Read(String)"
});
formatter.result({
  "duration": 10246254202,
  "status": "passed"
});
formatter.after({
  "duration": 2134754557,
  "status": "passed"
});
formatter.before({
  "duration": 353677,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "TestPaymentMethod_Mobile_Desk_Eg_LocalBankPayment_en",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PaymentMethods"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"141215123054\" in popup window",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Desktop MigUser Select Payment Methode \"LocalBankPayment\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Desktop migUser Read Payment URL \"https://www.envoytransfers.com/default.aspx\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2818884802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 716292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 32809350350,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5329797502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "141215123054",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 673032187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 343635015,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 274940530,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 10734648957,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 319046974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LocalBankPayment",
      "offset": 40
    }
  ],
  "location": "PaymentsPage.desk_user_Select_Methode(String)"
});
formatter.result({
  "duration": 4279268175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.envoytransfers.com/default.aspx",
      "offset": 34
    }
  ],
  "location": "PaymentsPage.desk_user_Read(String)"
});
formatter.result({
  "duration": 10172576683,
  "status": "passed"
});
formatter.after({
  "duration": 1524999965,
  "status": "passed"
});
formatter.uri("casino/migration/PaymentMethodsTest_mobi.feature");
formatter.feature({
  "line": 2,
  "name": "PaymentMethods mobile",
  "description": "As a new migUser I want to be able to open Payment Methods",
  "id": "paymentmethods-mobile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PaymentMethods"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "TestPaymentMethod_Mobile_\u003cType\u003e_\u003cBrand\u003e_\u003cMethod\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"\u003cmigUserName\u003e\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "migUser Select Payment Methode \"\u003cMethod\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "migUser Read Payment URL \"\u003cURL\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "Method",
        "URL",
        "language",
        "Brand",
        "Type",
        "migUserName"
      ],
      "line": 31,
      "id": "paymentmethods-mobile;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "payPal",
        "https://www.paypal.com/cgi-bin/webscr",
        "en",
        "Eg",
        "Mobi",
        "141215123054"
      ],
      "line": 32,
      "id": "paymentmethods-mobile;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;2"
    },
    {
      "cells": [
        "paySafeCard",
        "https://customer.cc.at.paysafecard.com/rest/payment/panel",
        "en",
        "Eg",
        "Mobi",
        "141215123054"
      ],
      "line": 33,
      "id": "paymentmethods-mobile;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;3"
    },
    {
      "cells": [
        "Skrill",
        "https://pay.skrill.com/app/",
        "en",
        "Eg",
        "Mobi",
        "141215123054"
      ],
      "line": 34,
      "id": "paymentmethods-mobile;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;4"
    },
    {
      "cells": [
        "EcoCard",
        "ecopayz.com/",
        "en",
        "Eg",
        "Mobi",
        "141215123054"
      ],
      "line": 35,
      "id": "paymentmethods-mobile;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;5"
    },
    {
      "cells": [
        "LocalBankPayment",
        "https://www.envoytransfers.com/default.aspx",
        "en",
        "Eg",
        "Mobi",
        "141215123054"
      ],
      "line": 36,
      "id": "paymentmethods-mobile;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1431467,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TestPaymentMethod_Mobile_Mobi_Eg_payPal_en",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PaymentMethods"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"141215123054\" in popup window",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "migUser Select Payment Methode \"payPal\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "migUser Read Payment URL \"https://www.paypal.com/cgi-bin/webscr\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2326587039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 817143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 13530944296,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 12727150239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "141215123054",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 993468164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 349538838,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 332369617,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 11016913882,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 444141923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "payPal",
      "offset": 32
    }
  ],
  "location": "PaymentsPage.user_Select_Methode(String)"
});
formatter.result({
  "duration": 8470238256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.paypal.com/cgi-bin/webscr",
      "offset": 26
    }
  ],
  "location": "PaymentsPage.user_Read(String)"
});
formatter.result({
  "duration": 11869985431,
  "status": "passed"
});
formatter.after({
  "duration": 2180653407,
  "status": "passed"
});
formatter.before({
  "duration": 540012,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "TestPaymentMethod_Mobile_Mobi_Eg_paySafeCard_en",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PaymentMethods"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"141215123054\" in popup window",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "migUser Select Payment Methode \"paySafeCard\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "migUser Read Payment URL \"https://customer.cc.at.paysafecard.com/rest/payment/panel\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2670577685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 523251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 13280294004,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 32083546093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "141215123054",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 706039176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 249902152,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 375021686,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 11273990409,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 230829058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "paySafeCard",
      "offset": 32
    }
  ],
  "location": "PaymentsPage.user_Select_Methode(String)"
});
formatter.result({
  "duration": 8617442440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://customer.cc.at.paysafecard.com/rest/payment/panel",
      "offset": 26
    }
  ],
  "location": "PaymentsPage.user_Read(String)"
});
formatter.result({
  "duration": 10048018673,
  "status": "passed"
});
formatter.after({
  "duration": 1614975646,
  "status": "passed"
});
formatter.before({
  "duration": 446705,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "TestPaymentMethod_Mobile_Mobi_Eg_Skrill_en",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PaymentMethods"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"141215123054\" in popup window",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "migUser Select Payment Methode \"Skrill\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "migUser Read Payment URL \"https://pay.skrill.com/app/\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2646255040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 645892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 14305313664,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 32526599610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "141215123054",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 1052589644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 439203307,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 261134865,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 13530800423,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 588731808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skrill",
      "offset": 32
    }
  ],
  "location": "PaymentsPage.user_Select_Methode(String)"
});
formatter.result({
  "duration": 8662692326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://pay.skrill.com/app/",
      "offset": 26
    }
  ],
  "location": "PaymentsPage.user_Read(String)"
});
formatter.result({
  "duration": 10043745224,
  "status": "passed"
});
formatter.after({
  "duration": 1768638472,
  "status": "passed"
});
formatter.before({
  "duration": 300597,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "TestPaymentMethod_Mobile_Mobi_Eg_EcoCard_en",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PaymentMethods"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"141215123054\" in popup window",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "migUser Select Payment Methode \"EcoCard\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "migUser Read Payment URL \"ecopayz.com/\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2888369332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 562362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 14406667049,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 29109904192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "141215123054",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 2525747546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 343602050,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 346472526,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 12877929737,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 1246672971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EcoCard",
      "offset": 32
    }
  ],
  "location": "PaymentsPage.user_Select_Methode(String)"
});
formatter.result({
  "duration": 8847429213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ecopayz.com/",
      "offset": 26
    }
  ],
  "location": "PaymentsPage.user_Read(String)"
});
formatter.result({
  "duration": 10040730595,
  "status": "passed"
});
formatter.after({
  "duration": 1798557079,
  "status": "passed"
});
formatter.before({
  "duration": 294451,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "TestPaymentMethod_Mobile_Mobi_Eg_LocalBankPayment_en",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-mobile-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PaymentMethods"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Start Register"
    }
  ],
  "line": 10,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser Fill Username \"141215123054\" in popup window",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And Click on Accept on terms and condition"
    }
  ],
  "line": 15,
  "name": "migUser read the Current Balance",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "migUser click on Deposit top Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "migUser Select Payment Methode \"LocalBankPayment\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "migUser Read Payment URL \"https://www.envoytransfers.com/default.aspx\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 3013718224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 834184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 29813517919,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5171041292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "141215123054",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 913362452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 498556940,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 461971004,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 10437581313,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 625243711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LocalBankPayment",
      "offset": 32
    }
  ],
  "location": "PaymentsPage.user_Select_Methode(String)"
});
formatter.result({
  "duration": 8335531192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.envoytransfers.com/default.aspx",
      "offset": 26
    }
  ],
  "location": "PaymentsPage.user_Read(String)"
});
formatter.result({
  "duration": 10050238508,
  "status": "passed"
});
formatter.after({
  "duration": 2221581793,
  "status": "passed"
});
formatter.uri("casino/migration/RegisterNonUKGC_desk_new.feature");
formatter.feature({
  "line": 2,
  "name": "RegisterNonUKGC Desktop",
  "description": "As a new user I want to be able Register",
  "id": "registernonukgc-desktop",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegisterNonUKGC"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "RegisterNonUKGC_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "registernonukgc-desktop;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"Germany\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start SelfExclude"
    }
  ],
  "line": 31,
  "name": "migUser is navigating to url \"/en/responsible-gaming\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Not visible Timeout",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Not visible SelfExclude",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 34,
      "value": "#Then User Set 24 Hours"
    },
    {
      "line": 35,
      "value": "#Then User Set 6 months"
    }
  ],
  "line": 38,
  "name": "",
  "description": "",
  "id": "registernonukgc-desktop;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "UserAccount",
        "RadioButten",
        "freeSpins",
        "depositApproved"
      ],
      "line": 39,
      "id": "registernonukgc-desktop;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Eg",
        "Desk",
        "Wellcome to william hill casino club",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online"
      ],
      "line": 40,
      "id": "registernonukgc-desktop;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 637511,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "RegisterNonUKGC_Desk_Eg_en",
  "description": "",
  "id": "registernonukgc-desktop;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@RegisterNonUKGC"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"Germany\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start SelfExclude"
    }
  ],
  "line": 31,
  "name": "migUser is navigating to url \"/en/responsible-gaming\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Not visible Timeout",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Not visible SelfExclude",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2832815903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 557612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 31238643738,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 6167561520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5612013258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 869082803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 1880417762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 899131593,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405072559");
formatter.result({
  "duration": 746064094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 1476489609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 618790098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 4879817686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Germany",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 4268864060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 562460592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 559768909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 1577509432,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 1083378,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 642880869,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4026472638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/en/responsible-gaming",
      "offset": 30
    }
  ],
  "location": "MainWebPage.user_is_navigating_to_url(String)"
});
formatter.result({
  "duration": 5978414016,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.not_visible_Timeout()"
});
formatter.result({
  "duration": 5376376327,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.not_visible_SelfExclude()"
});
formatter.result({
  "duration": 2123245831,
  "status": "passed"
});
formatter.after({
  "duration": 1694698349,
  "status": "passed"
});
formatter.uri("casino/migration/RegisterNonUKGC_mobi_new.feature");
formatter.feature({
  "line": 2,
  "name": "RegisterNonUKGC Mobile",
  "description": "As a new user I want to be able Register",
  "id": "registernonukgc-mobile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegisterNonUKGC"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "RegisterNonUKGC_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "registernonukgc-mobile;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"Germany\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start SelfExclude"
    }
  ],
  "line": 31,
  "name": "User open Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User open my account",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User open Responsible Gaming",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Not visible Timeout",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Not visible SelfExclude",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 36,
      "value": "#Then User Set 24 Hours"
    },
    {
      "line": 37,
      "value": "#Then User Set 6 months"
    }
  ],
  "line": 40,
  "name": "",
  "description": "",
  "id": "registernonukgc-mobile;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "UserAccount",
        "RadioButten",
        "freeSpins",
        "depositApproved"
      ],
      "line": 41,
      "id": "registernonukgc-mobile;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Eg",
        "Mobi",
        "Wellcome to william hill casino club",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online"
      ],
      "line": 42,
      "id": "registernonukgc-mobile;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 518222,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "RegisterNonUKGC_Mobi_Eg_en",
  "description": "",
  "id": "registernonukgc-mobile;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@RegisterNonUKGC"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"Germany\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start SelfExclude"
    }
  ],
  "line": 31,
  "name": "User open Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User open my account",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User open Responsible Gaming",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Not visible Timeout",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Not visible SelfExclude",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 3170404060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 1073041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 28445558863,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5303822133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5277327426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 576573559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 346386482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 526649896,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405072717");
formatter.result({
  "duration": 438396221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 309316687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "RegisterPage.Contiue_to_step(int)"
});
formatter.result({
  "duration": 272828530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 582962360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 2247476984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Germany",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 2568123043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 448552819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 368625901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 412916447,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 32965,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 322546860,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3424365667,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Menu()"
});
formatter.write("Start open menu");
formatter.result({
  "duration": 7534248068,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_my_account()"
});
formatter.result({
  "duration": 844612374,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Responsible_Gaming()"
});
formatter.result({
  "duration": 2359181125,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.not_visible_Timeout()"
});
formatter.result({
  "duration": 5095844863,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.not_visible_SelfExclude()"
});
formatter.result({
  "duration": 2124074987,
  "status": "passed"
});
formatter.after({
  "duration": 2349162533,
  "status": "passed"
});
formatter.uri("casino/migration/Register_desk_new.feature");
formatter.feature({
  "line": 2,
  "name": "Register Desktop",
  "description": "As a new migUser I want to be able Register",
  "id": "register-desktop",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Register_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "register-desktop;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "register-desktop;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "css",
        "RadioButten",
        "freeSpins",
        "depositApproved"
      ],
      "line": 38,
      "id": "register-desktop;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Eg",
        "Desk",
        ".popup-modal__inner",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online"
      ],
      "line": 39,
      "id": "register-desktop;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 518222,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Register_Desk_Eg_en",
  "description": "",
  "id": "register-desktop;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2727010555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 983086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 32399088431,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5036644322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5788462221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 573893889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 1092019516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 1556015918,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405072839");
formatter.result({
  "duration": 712818529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 608474541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 739877555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 4051401505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 12990108519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 1262969456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 685258881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 629397312,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 46095,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 525333807,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4109349932,
  "status": "passed"
});
formatter.after({
  "duration": 1652130927,
  "status": "passed"
});
formatter.uri("casino/migration/Register_mobi_new.feature");
formatter.feature({
  "line": 2,
  "name": "Register mobile",
  "description": "As a new migUser I want to be able Register",
  "id": "register-mobile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Register_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "register-mobile;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "register-mobile;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "css",
        "RadioButten",
        "freeSpins",
        "depositApproved"
      ],
      "line": 38,
      "id": "register-mobile;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Eg",
        "Mobi",
        ".popup-modal__inner",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online"
      ],
      "line": 39,
      "id": "register-mobile;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1292064,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Register_Mobi_Eg_en",
  "description": "",
  "id": "register-mobile;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2821346847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 897321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 17998305371,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 56883345229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5174426638,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.RegisterPage.fill_Title_(RegisterPage.java:32)\r\n\tat ✽.And migUser fill Title \"Mr\"(casino/migration/Register_mobi_new.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "RegisterPage.Contiue_to_step(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u00278.Register_Mobi_Eg_en-20170405_193030.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nWed Apr 05 19:29:12 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nWed Apr 05 19:29:18 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:29:18 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:29:18 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:29:27 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:29:27 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:29:27 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:30:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nWed Apr 05 19:30:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nWed Apr 05 19:30:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:30:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nWed Apr 05 19:30:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nWed Apr 05 19:30:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:30:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nWed Apr 05 19:30:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:30:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:30:19 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nWed Apr 05 19:30:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:30:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:30:22 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nWed Apr 05 19:30:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:30:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:30:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:30:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:30:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:30:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nWed Apr 05 19:30:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\n");
formatter.after({
  "duration": 3728875039,
  "status": "passed"
});
formatter.before({
  "duration": 427987,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Register_Mobi_Eg_en",
  "description": "",
  "id": "register-mobile;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2657125137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 538895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 13082409077,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 30501158947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5361621379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 385015414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 292724633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 444379104,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405073127");
formatter.result({
  "duration": 421750250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 373284872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "RegisterPage.Contiue_to_step(int)"
});
formatter.result({
  "duration": 255950687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 409465728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 2069487043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 8089095402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 334802328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 372527234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 403262426,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 40508,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 448457555,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4379996341,
  "status": "passed"
});
formatter.after({
  "duration": 1503762071,
  "status": "passed"
});
formatter.uri("casino/migration/SelfExclude_desk_new.feature");
formatter.feature({
  "line": 2,
  "name": "SelfExcludeEn Desktop",
  "description": "As a new user I want to be able to Self Exclude",
  "id": "selfexcludeen-desktop",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SelfExclude"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "SelfExclude_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "selfexcludeen-desktop;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start SelfExclude"
    }
  ],
  "line": 31,
  "name": "migUser is navigating to url \"/en/responsible-gaming\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User Set 6 months",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User Set exclude",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User read msg \"\u003cMsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User Click on ok",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "#login"
    }
  ],
  "line": 37,
  "name": "User Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Fill Last Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 41,
      "value": "#And User Click on Accept on terms and condition"
    },
    {
      "line": 42,
      "value": "#Then User read the Current Balance"
    },
    {
      "line": 43,
      "value": "#finish"
    },
    {
      "line": 44,
      "value": "#When User click Deposit top Button"
    }
  ],
  "line": 45,
  "name": "User read exclude \"\u003cLogin_msg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "selfexcludeen-desktop;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "UserAccount",
        "Msg",
        "Login_msg"
      ],
      "line": 49,
      "id": "selfexcludeen-desktop;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Eg",
        "Desk",
        "Wellcome to william hill casino club",
        "I confirm that I have read and accepted the Self-Exclusion",
        "Sorry, the action cannot be performed because you have asked to be self excluded from playing"
      ],
      "line": 50,
      "id": "selfexcludeen-desktop;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 353117,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "SelfExclude_Desk_Eg_En",
  "description": "",
  "id": "selfexcludeen-desktop;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@SelfExclude"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start SelfExclude"
    }
  ],
  "line": 31,
  "name": "migUser is navigating to url \"/en/responsible-gaming\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User Set 6 months",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User Set exclude",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User read msg \"I confirm that I have read and accepted the Self-Exclusion\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User Click on ok",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "#login"
    }
  ],
  "line": 37,
  "name": "User Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Fill Last Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 41,
      "value": "#And User Click on Accept on terms and condition"
    },
    {
      "line": 42,
      "value": "#Then User read the Current Balance"
    },
    {
      "line": 43,
      "value": "#finish"
    },
    {
      "line": 44,
      "value": "#When User click Deposit top Button"
    }
  ],
  "line": 45,
  "name": "User read exclude \"Sorry, the action cannot be performed because you have asked to be self excluded from playing\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2878367781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 1075555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 47315457132,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 6351534902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5706372178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 635035179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 628118099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 1816644294,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405073252");
formatter.result({
  "duration": 620127698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 491550742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 564547450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 3013292751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 10866420174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 593695009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 423972599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 1124655787,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 35480,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 594318831,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3499728038,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit(RegisterPage.java:256)\r\n\tat ✽.Then migUser Account was Created(casino/migration/SelfExclude_desk_new.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "/en/responsible-gaming",
      "offset": 30
    }
  ],
  "location": "MainWebPage.user_is_navigating_to_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "PaymentsPage.user_Set_months(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PaymentsPage.user_Set_exclude()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "I confirm that I have read and accepted the Self-Exclusion",
      "offset": 15
    }
  ],
  "location": "PaymentsPage.user_read_msg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_ok()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_top_button_on_main_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 20
    }
  ],
  "location": "MainWebPage.Fill_Password_in_popup_window(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, the action cannot be performed because you have asked to be self excluded from playing",
      "offset": 19
    }
  ],
  "location": "PaymentsPage.user_read_exclude(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u00279.SelfExclude_Desk_Eg_En-20170405_193314.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nWed Apr 05 19:31:52 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nWed Apr 05 19:31:55 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:31:55 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:31:55 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:32:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nWed Apr 05 19:32:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nWed Apr 05 19:32:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nWed Apr 05 19:32:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nWed Apr 05 19:32:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nWed Apr 05 19:32:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:28 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nWed Apr 05 19:32:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:32:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:32:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:32:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:35 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nWed Apr 05 19:32:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:36 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"Page https://www.eurogrand.com/En/?js_fast_load\u003d0 was not fetched\"\r\nWed Apr 05 19:32:36 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:32:36 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:32:36 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:32:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nWed Apr 05 19:32:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nWed Apr 05 19:32:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nWed Apr 05 19:32:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:32:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:32:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:32:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:40 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nWed Apr 05 19:32:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nWed Apr 05 19:32:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nWed Apr 05 19:32:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:40 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nWed Apr 05 19:32:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nWed Apr 05 19:32:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:42 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nWed Apr 05 19:32:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:48 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nWed Apr 05 19:32:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:32:53 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nWed Apr 05 19:33:10 IDT 2017 INFO console-api 7:11 27\r\nWed Apr 05 19:33:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/modules/webanalytics/webAnalytics.js 868:56 \"affiliate is tracked\"\r\nWed Apr 05 19:33:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:13 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nWed Apr 05 19:33:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:33:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:33:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\n");
formatter.after({
  "duration": 4434416106,
  "status": "passed"
});
formatter.before({
  "duration": 558171,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "SelfExclude_Desk_Eg_En",
  "description": "",
  "id": "selfexcludeen-desktop;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@SelfExclude"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start SelfExclude"
    }
  ],
  "line": 31,
  "name": "migUser is navigating to url \"/en/responsible-gaming\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User Set 6 months",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User Set exclude",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User read msg \"I confirm that I have read and accepted the Self-Exclusion\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User Click on ok",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "#login"
    }
  ],
  "line": 37,
  "name": "User Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Fill Last Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 41,
      "value": "#And User Click on Accept on terms and condition"
    },
    {
      "line": 42,
      "value": "#Then User read the Current Balance"
    },
    {
      "line": 43,
      "value": "#finish"
    },
    {
      "line": 44,
      "value": "#When User click Deposit top Button"
    }
  ],
  "line": 45,
  "name": "User read exclude \"Sorry, the action cannot be performed because you have asked to be self excluded from playing\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2817454733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 701765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 13686195033,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 31565852923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5532612944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 666674675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 519334999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 1731721210,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405073414");
formatter.result({
  "duration": 496176470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 378496988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 667520034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 2996946819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 10913091189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 463284580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 483435465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 990955834,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 39670,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 746293454,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4803254324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/en/responsible-gaming",
      "offset": 30
    }
  ],
  "location": "MainWebPage.user_is_navigating_to_url(String)"
});
formatter.result({
  "duration": 7988462780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "PaymentsPage.user_Set_months(int)"
});
formatter.result({
  "duration": 2098584596,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.PaymentsPage.user_Set_months(PaymentsPage.java:175)\r\n\tat ✽.Then User Set 6 months(casino/migration/SelfExclude_desk_new.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PaymentsPage.user_Set_exclude()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "I confirm that I have read and accepted the Self-Exclusion",
      "offset": 15
    }
  ],
  "location": "PaymentsPage.user_read_msg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_ok()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_top_button_on_main_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 20
    }
  ],
  "location": "MainWebPage.Fill_Password_in_popup_window(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, the action cannot be performed because you have asked to be self excluded from playing",
      "offset": 19
    }
  ],
  "location": "PaymentsPage.user_read_exclude(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002710.SelfExclude_Desk_Eg_En-20170405_193448.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nWed Apr 05 19:33:23 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nWed Apr 05 19:33:26 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:33:26 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:33:26 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:33:34 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:33:34 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:33:34 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:33:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nWed Apr 05 19:33:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nWed Apr 05 19:33:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:33:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nWed Apr 05 19:33:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nWed Apr 05 19:33:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:34:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:34:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:34:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nWed Apr 05 19:34:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:03 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nWed Apr 05 19:34:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:03 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nWed Apr 05 19:34:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nWed Apr 05 19:34:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:05 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nWed Apr 05 19:34:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:11 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nWed Apr 05 19:34:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:16 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nWed Apr 05 19:34:32 IDT 2017 INFO console-api 7:11 26\r\nWed Apr 05 19:34:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/modules/webanalytics/webAnalytics.js 868:56 \"affiliate is tracked\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:36 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nWed Apr 05 19:34:36 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:36 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:36 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:36 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:34:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:34:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:41 IDT 2017 INFO https://www.eurogrand.com/en/responsible-gaming 0:764300 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:34:41 IDT 2017 INFO https://www.eurogrand.com/en/responsible-gaming 0:764300 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:34:41 IDT 2017 INFO https://www.eurogrand.com/en/responsible-gaming 0:764300 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:34:42 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nWed Apr 05 19:34:42 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nWed Apr 05 19:34:42 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:42 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nWed Apr 05 19:34:42 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:34:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\n");
formatter.after({
  "duration": 2552197276,
  "status": "passed"
});
formatter.before({
  "duration": 604546,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "SelfExclude_Desk_Eg_En",
  "description": "",
  "id": "selfexcludeen-desktop;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@SelfExclude"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start SelfExclude"
    }
  ],
  "line": 31,
  "name": "migUser is navigating to url \"/en/responsible-gaming\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User Set 6 months",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User Set exclude",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User read msg \"I confirm that I have read and accepted the Self-Exclusion\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User Click on ok",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "#login"
    }
  ],
  "line": 37,
  "name": "User Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Fill Last Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 41,
      "value": "#And User Click on Accept on terms and condition"
    },
    {
      "line": 42,
      "value": "#Then User read the Current Balance"
    },
    {
      "line": 43,
      "value": "#finish"
    },
    {
      "line": 44,
      "value": "#When User click Deposit top Button"
    }
  ],
  "line": 45,
  "name": "User read exclude \"Sorry, the action cannot be performed because you have asked to be self excluded from playing\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 3174302321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 539734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 13157898839,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 33556569899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5485785484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 495381676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 545170964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 1053792870,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405073548");
formatter.result({
  "duration": 1209100039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 347943943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 498590743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 3090242475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 10431909083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 722452714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 332949579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 515369690,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 32685,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 434438175,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4359298738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/en/responsible-gaming",
      "offset": 30
    }
  ],
  "location": "MainWebPage.user_is_navigating_to_url(String)"
});
formatter.result({
  "duration": 7353743004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "PaymentsPage.user_Set_months(int)"
});
formatter.result({
  "duration": 2485505281,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Set_exclude()"
});
formatter.result({
  "duration": 644160641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I confirm that I have read and accepted the Self-Exclusion",
      "offset": 15
    }
  ],
  "location": "PaymentsPage.user_read_msg(String)"
});
formatter.result({
  "duration": 2217777958,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_ok()"
});
formatter.result({
  "duration": 5413005564,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 61035018417,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "duration": 458830941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 20
    }
  ],
  "location": "MainWebPage.Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 302991861,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 2279013115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, the action cannot be performed because you have asked to be self excluded from playing",
      "offset": 19
    }
  ],
  "location": "PaymentsPage.user_read_exclude(String)"
});
formatter.result({
  "duration": 2306722781,
  "status": "passed"
});
formatter.after({
  "duration": 2693458526,
  "status": "passed"
});
formatter.uri("casino/migration/SelfExclude_mobi_new.feature");
formatter.feature({
  "line": 2,
  "name": "SelfExcludeEn Mobile",
  "description": "As a new user I want to be able to Self Exclude",
  "id": "selfexcludeen-mobile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SelfExclude"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "SelfExclude_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "selfexcludeen-mobile;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start SelfExclude"
    }
  ],
  "line": 31,
  "name": "User open Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User open my account",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User open Responsible Gaming",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User Set 6 months",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User Set exclude",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User read msg \"\u003cMsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User Click on ok",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#login"
    }
  ],
  "line": 39,
  "name": "User Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Fill Last Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 43,
      "value": "#And User Click on Accept on terms and condition"
    },
    {
      "line": 44,
      "value": "#Then User read the Current Balance"
    },
    {
      "line": 45,
      "value": "#finish"
    },
    {
      "line": 46,
      "value": "#When User click Deposit top Button"
    }
  ],
  "line": 47,
  "name": "User read exclude \"\u003cLogin_msg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "selfexcludeen-mobile;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "UserAccount",
        "Msg",
        "Login_msg"
      ],
      "line": 51,
      "id": "selfexcludeen-mobile;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Eg",
        "Mobi",
        "Wellcome to william hill casino club",
        "I confirm that I have read and accepted the Self-Exclusion",
        "Sorry, the action cannot be performed because you have asked to be self excluded from playing"
      ],
      "line": 52,
      "id": "selfexcludeen-mobile;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 707911,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "SelfExclude_Mobi_Eg_En",
  "description": "",
  "id": "selfexcludeen-mobile;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@SelfExclude"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start SelfExclude"
    }
  ],
  "line": 31,
  "name": "User open Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User open my account",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User open Responsible Gaming",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User Set 6 months",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User Set exclude",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User read msg \"I confirm that I have read and accepted the Self-Exclusion\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User Click on ok",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#login"
    }
  ],
  "line": 39,
  "name": "User Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Fill Last Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 43,
      "value": "#And User Click on Accept on terms and condition"
    },
    {
      "line": 44,
      "value": "#Then User read the Current Balance"
    },
    {
      "line": 45,
      "value": "#finish"
    },
    {
      "line": 46,
      "value": "#When User click Deposit top Button"
    }
  ],
  "line": 47,
  "name": "User read exclude \"Sorry, the action cannot be performed because you have asked to be self excluded from playing\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2977776784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 718807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 14999630400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 43835065071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5448156120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 543976958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 331598290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 564300491,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405073846");
formatter.result({
  "duration": 484399274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 416971151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "RegisterPage.Contiue_to_step(int)"
});
formatter.result({
  "duration": 273017660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 1066978066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 1901607886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 8040495929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 312514300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 266221265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 457802318,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 43301,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 425959444,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3600443073,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Menu()"
});
formatter.write("Start open menu");
formatter.result({
  "duration": 10783119922,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_my_account()"
});
formatter.result({
  "duration": 582099122,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Responsible_Gaming()"
});
formatter.result({
  "duration": 2391581891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "PaymentsPage.user_Set_months(int)"
});
formatter.result({
  "duration": 2394446780,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Set_exclude()"
});
formatter.result({
  "duration": 313452129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I confirm that I have read and accepted the Self-Exclusion",
      "offset": 15
    }
  ],
  "location": "PaymentsPage.user_read_msg(String)"
});
formatter.result({
  "duration": 2228619560,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_ok()"
});
formatter.result({
  "duration": 5366490433,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 747444158,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "duration": 794355148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 20
    }
  ],
  "location": "MainWebPage.Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 333058811,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 2229355965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, the action cannot be performed because you have asked to be self excluded from playing",
      "offset": 19
    }
  ],
  "location": "PaymentsPage.user_read_exclude(String)"
});
formatter.result({
  "duration": 22077063426,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.PaymentsPage.user_read_exclude(PaymentsPage.java:238)\r\n\tat ✽.Then User read exclude \"Sorry, the action cannot be performed because you have asked to be self excluded from playing\"(casino/migration/SelfExclude_mobi_new.feature:47)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u002711.SelfExclude_Mobi_Eg_En-20170405_193954.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nWed Apr 05 19:37:42 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nWed Apr 05 19:37:46 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:37:46 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:37:46 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:37:54 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:37:54 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:37:54 IDT 2017 INFO https://www.eurogrand.com/En/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:38:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nWed Apr 05 19:38:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nWed Apr 05 19:38:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nWed Apr 05 19:38:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nWed Apr 05 19:38:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:31 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nWed Apr 05 19:38:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:32 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nWed Apr 05 19:38:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:37 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nWed Apr 05 19:38:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nWed Apr 05 19:38:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:46 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:47 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:47 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:47 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:38:57 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/modules/webanalytics/webAnalytics.js 868:56 \"affiliate is tracked\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:06 IDT 2017 INFO https://www.eurogrand.com/en/Deposit 0:764300 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:39:06 IDT 2017 INFO https://www.eurogrand.com/en/Deposit 0:764300 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nWed Apr 05 19:39:06 IDT 2017 INFO https://www.eurogrand.com/en/Deposit 0:764300 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nWed Apr 05 19:39:08 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nWed Apr 05 19:39:08 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nWed Apr 05 19:39:08 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:08 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nWed Apr 05 19:39:08 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:08 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:08 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:09 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:10 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:10 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:10 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:10 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:10 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:10 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:10 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:14 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:14 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:14 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier started\"\r\nWed Apr 05 19:39:14 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:14 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:14 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:14 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:14 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:14 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:14 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:14 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:19 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:19 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:19 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:19 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:19 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:19 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:22 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:27 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:27 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:27 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:27 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:27 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:27 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:27 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:27 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:27 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:27 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:27 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:27 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:27 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nWed Apr 05 19:39:41 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 5285110538,
  "status": "passed"
});
formatter.before({
  "duration": 518222,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "SelfExclude_Mobi_Eg_En",
  "description": "",
  "id": "selfexcludeen-mobile;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@SelfExclude"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start SelfExclude"
    }
  ],
  "line": 31,
  "name": "User open Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User open my account",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User open Responsible Gaming",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User Set 6 months",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User Set exclude",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User read msg \"I confirm that I have read and accepted the Self-Exclusion\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User Click on ok",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#login"
    }
  ],
  "line": 39,
  "name": "User Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Fill Last Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 43,
      "value": "#And User Click on Accept on terms and condition"
    },
    {
      "line": 44,
      "value": "#Then User read the Current Balance"
    },
    {
      "line": 45,
      "value": "#finish"
    },
    {
      "line": 46,
      "value": "#When User click Deposit top Button"
    }
  ],
  "line": 47,
  "name": "User read exclude \"Sorry, the action cannot be performed because you have asked to be self excluded from playing\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 3066091920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 1463315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 28646858749,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4536120373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5369294142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 461688008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 359648503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 386236798,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405074042");
formatter.result({
  "duration": 359026636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 464867463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "RegisterPage.Contiue_to_step(int)"
});
formatter.result({
  "duration": 346526164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 538878824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 2145576323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 7587515173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 420995126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 316643596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 356961010,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 60064,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 349840553,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3099325752,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Menu()"
});
formatter.write("Start open menu");
formatter.result({
  "duration": 3494068660,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_my_account()"
});
formatter.result({
  "duration": 472835514,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Responsible_Gaming()"
});
formatter.result({
  "duration": 2323146657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "PaymentsPage.user_Set_months(int)"
});
formatter.result({
  "duration": 2449503498,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Set_exclude()"
});
formatter.result({
  "duration": 282543172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I confirm that I have read and accepted the Self-Exclusion",
      "offset": 15
    }
  ],
  "location": "PaymentsPage.user_read_msg(String)"
});
formatter.result({
  "duration": 2250568438,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_ok()"
});
formatter.result({
  "duration": 5275849025,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 961765531,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "duration": 790562208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 20
    }
  ],
  "location": "MainWebPage.Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 288072087,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 2286203693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, the action cannot be performed because you have asked to be self excluded from playing",
      "offset": 19
    }
  ],
  "location": "PaymentsPage.user_read_exclude(String)"
});
formatter.result({
  "duration": 2242942329,
  "status": "passed"
});
formatter.after({
  "duration": 1602623797,
  "status": "passed"
});
formatter.uri("casino/migration/TimeOut_desk_new.feature");
formatter.feature({
  "line": 2,
  "name": "TimeOutEn Desktop",
  "description": "As a new user I want to be able to TimeOut",
  "id": "timeouten-desktop",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TimeOut"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "MobiTimeOut_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "timeouten-desktop;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start TimeOut"
    }
  ],
  "line": 31,
  "name": "migUser is navigating to url \"/en/responsible-gaming\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User Set 24 Hours",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User save TimeOut",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User Successfull timeOut ok click",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User read msg \"\u003cMsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User Click on Timeout ok",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User Logout msg OK click",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#login"
    }
  ],
  "line": 39,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Fill Last Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 43,
      "value": "#finish"
    }
  ],
  "line": 44,
  "name": "User read exclude \"\u003cTimeout_msg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "timeouten-desktop;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "UserAccount",
        "Msg",
        "Timeout_msg"
      ],
      "line": 48,
      "id": "timeouten-desktop;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Eg",
        "Desk",
        "Wellcome to william hill casino club",
        "Sorry, you have asked to be timed-out from playing and were automatically logged off. You can play again after",
        "Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after"
      ],
      "line": 49,
      "id": "timeouten-desktop;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1038400,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "MobiTimeOut_Desk_Eg_En",
  "description": "",
  "id": "timeouten-desktop;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TimeOut"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start TimeOut"
    }
  ],
  "line": 31,
  "name": "migUser is navigating to url \"/en/responsible-gaming\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User Set 24 Hours",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User save TimeOut",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User Successfull timeOut ok click",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User read msg \"Sorry, you have asked to be timed-out from playing and were automatically logged off. You can play again after\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User Click on Timeout ok",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User Logout msg OK click",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#login"
    }
  ],
  "line": 39,
  "name": "migUser Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Fill Last Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "migUser Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 43,
      "value": "#finish"
    }
  ],
  "line": 44,
  "name": "User read exclude \"Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 3461227893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 716851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 32035392487,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5023795203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5796296736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 666252834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 548588717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 1405129702,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405074212");
formatter.result({
  "duration": 697535022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 517925044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 568469177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 2884559630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 10728776144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 439947256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 412911976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 649433658,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 35200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 647501010,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3672859819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/en/responsible-gaming",
      "offset": 30
    }
  ],
  "location": "MainWebPage.user_is_navigating_to_url(String)"
});
formatter.result({
  "duration": 6000482184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 9
    }
  ],
  "location": "PaymentsPage.user_Set_Hours(int)"
});
formatter.write("Start timeout");
formatter.result({
  "duration": 5699761841,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_save_TimeOut()"
});
formatter.result({
  "duration": 352253428,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Successfull_timeOut_ok_click()"
});
formatter.result({
  "duration": 533454950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, you have asked to be timed-out from playing and were automatically logged off. You can play again after",
      "offset": 15
    }
  ],
  "location": "PaymentsPage.user_read_msg(String)"
});
formatter.result({
  "duration": 2263023094,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_Timeout_ok()"
});
formatter.result({
  "duration": 5277187463,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Logout_msg_OK_click()"
});
formatter.result({
  "duration": 5344434838,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 780789738,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "duration": 679185484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 20
    }
  ],
  "location": "MainWebPage.Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 290159224,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 353575105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after",
      "offset": 19
    }
  ],
  "location": "PaymentsPage.user_read_exclude(String)"
});
formatter.result({
  "duration": 2247728133,
  "status": "passed"
});
formatter.after({
  "duration": 2291913637,
  "status": "passed"
});
formatter.uri("casino/migration/TimeOut_mobi_new.feature");
formatter.feature({
  "line": 2,
  "name": "TimeOutEn Mobile",
  "description": "As a new user I want to be able to TimeOut",
  "id": "timeouten-mobile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TimeOut"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "MobiTimeOut_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "timeouten-mobile;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start TimeOut"
    }
  ],
  "line": 31,
  "name": "User open Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User open my account",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User open Responsible Gaming",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User Set 24 Hours",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User save TimeOut",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User Successfull timeOut ok click",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User read msg \"\u003cMsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User Click on Timeout ok",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User Logout msg OK click",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#login"
    }
  ],
  "line": 41,
  "name": "User Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User Fill Last Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 45,
      "value": "#finish"
    }
  ],
  "line": 46,
  "name": "User read exclude \"\u003cTimeout_msg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "timeouten-mobile;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "UserAccount",
        "Msg",
        "Timeout_msg"
      ],
      "line": 50,
      "id": "timeouten-mobile;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Eg",
        "Mobi",
        "Wellcome to william hill casino club",
        "Sorry, you have asked to be timed-out from playing and were automatically logged off. You can play again after",
        "Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after"
      ],
      "line": 51,
      "id": "timeouten-mobile;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 410946,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "MobiTimeOut_Mobi_Eg_En",
  "description": "",
  "id": "timeouten-mobile;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TimeOut"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"En\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start TimeOut"
    }
  ],
  "line": 31,
  "name": "User open Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User open my account",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User open Responsible Gaming",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User Set 24 Hours",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User save TimeOut",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User Successfull timeOut ok click",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User read msg \"Sorry, you have asked to be timed-out from playing and were automatically logged off. You can play again after\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User Click on Timeout ok",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User Logout msg OK click",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#login"
    }
  ],
  "line": 41,
  "name": "User Click on LOGIN top button on main page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User Fill Last Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User Fill Password \"123456\" in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User Click on LOGIN Butten in popup window",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 45,
      "value": "#finish"
    }
  ],
  "line": 46,
  "name": "User read exclude \"Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2977721191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 926933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 32108827519,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5302596839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5372228873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 584113624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 282787617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 562370636,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405074353");
formatter.result({
  "duration": 538637452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 302053753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "RegisterPage.Contiue_to_step(int)"
});
formatter.result({
  "duration": 366040656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 492162551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 1932946226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 7982445255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 334462900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 262117392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 449148984,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 36038,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 330742873,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3277834474,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Menu()"
});
formatter.write("Start open menu");
formatter.result({
  "duration": 3965491424,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_my_account()"
});
formatter.result({
  "duration": 760994204,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Responsible_Gaming()"
});
formatter.result({
  "duration": 2328410175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 9
    }
  ],
  "location": "PaymentsPage.user_Set_Hours(int)"
});
formatter.write("Start timeout");
formatter.result({
  "duration": 5547184349,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_save_TimeOut()"
});
formatter.result({
  "duration": 360911792,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Successfull_timeOut_ok_click()"
});
formatter.result({
  "duration": 603475022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, you have asked to be timed-out from playing and were automatically logged off. You can play again after",
      "offset": 15
    }
  ],
  "location": "PaymentsPage.user_read_msg(String)"
});
formatter.result({
  "duration": 2293372761,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_Timeout_ok()"
});
formatter.result({
  "duration": 5248996171,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Logout_msg_OK_click()"
});
formatter.result({
  "duration": 5306880064,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 441451637,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "duration": 841075891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 20
    }
  ],
  "location": "MainWebPage.Fill_Password_in_popup_window(String)"
});
formatter.result({
  "duration": 354079080,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 2314653398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after",
      "offset": 19
    }
  ],
  "location": "PaymentsPage.user_read_exclude(String)"
});
formatter.result({
  "duration": 2273942359,
  "status": "passed"
});
formatter.after({
  "duration": 1943331066,
  "status": "passed"
});
formatter.uri("casino/migration/Tracking_desk_new.feature");
formatter.feature({
  "line": 2,
  "name": "Tracking Desktop",
  "description": "As a new migUser I want to be able to get Tracking",
  "id": "tracking-desktop",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Tracking"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Tracking_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "tracking-desktop;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Tracking"
    }
  ],
  "line": 31,
  "name": "User is navigating to Playtech Admin",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User Fill Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Fill Password in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User Submit",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User is navigating to Playtech AdminSearchUserUrl",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User fill username \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Select internalaccount",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Click Submit",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Find Advertiser \"\u003cAdvertiser\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "tracking-desktop;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "migUserAccount",
        "Advertiser"
      ],
      "line": 48,
      "id": "tracking-desktop;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Eg",
        "Desk",
        "Wellcome to Eurogrand casino club",
        "yonam"
      ],
      "line": 49,
      "id": "tracking-desktop;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 869105,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Tracking_Desk_Eg_en",
  "description": "",
  "id": "tracking-desktop;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@Tracking"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Desk\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And migUser Contiue to step 2"
    },
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Tracking"
    }
  ],
  "line": 31,
  "name": "User is navigating to Playtech Admin",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User Fill Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Fill Password in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User Submit",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User is navigating to Playtech AdminSearchUserUrl",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User fill username \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Select internalaccount",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Click Submit",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Find Advertiser \"yonam\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Desk",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2870929686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 959339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 29284966106,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5792831212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5607519950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 499537232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 731901122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 1604479341,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405074530");
formatter.result({
  "duration": 994578361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 416825323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 545708463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 3267551881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 10406274820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 376852644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 323008650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 612144840,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 476597,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 768154332,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4131018607,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_Admin()"
});
formatter.result({
  "duration": 6399514184,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Username_in_popup_window()"
});
formatter.result({
  "duration": 446664590,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Password_in_popup_window()"
});
formatter.result({
  "duration": 303345816,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Submit()"
});
formatter.result({
  "duration": 2051530571,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_AdminSearchUserUrl()"
});
formatter.result({
  "duration": 5628359191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "Test_PT_Advertiser.user_fill_username(String)"
});
formatter.result({
  "duration": 5678106017,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Select_internalaccount()"
});
formatter.result({
  "duration": 5316618732,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Click_Submit()"
});
formatter.result({
  "duration": 1059553100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yonam",
      "offset": 22
    }
  ],
  "location": "Test_PT_Advertiser.user_Find_Advertiser(String)"
});
formatter.result({
  "duration": 5658397086,
  "status": "passed"
});
formatter.after({
  "duration": 2886562398,
  "status": "passed"
});
formatter.uri("casino/migration/Tracking_mobi_new.feature");
formatter.feature({
  "line": 2,
  "name": "Tracking Mobile",
  "description": "As a new migUser I want to be able to get Tracking",
  "id": "tracking-mobile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Tracking"
    },
    {
      "line": 1,
      "name": "@AllMig"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Tracking_\u003cType\u003e_\u003cBrand\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "tracking-mobile;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "\"\u003cType\u003e\" User is connect to the internet \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"\u003clanguage\u003e\" and Brand \"\u003cBrand\u003e\" and \"\u003cType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Tracking"
    }
  ],
  "line": 31,
  "name": "User is navigating to Playtech Admin",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User Fill Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Fill Password in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User Submit",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User is navigating to Playtech AdminSearchUserUrl",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User fill username \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Select internalaccount",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Click Submit",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Find Advertiser \"\u003cAdvertiser\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "tracking-mobile;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;",
  "rows": [
    {
      "cells": [
        "language",
        "Brand",
        "Type",
        "migUserAccount",
        "Advertiser"
      ],
      "line": 48,
      "id": "tracking-mobile;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Eg",
        "Mobi",
        "Wellcome to Eurogrand casino club",
        "yonam"
      ],
      "line": 49,
      "id": "tracking-mobile;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 628292,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Tracking_Mobi_Eg_en",
  "description": "",
  "id": "tracking-mobile;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllMig"
    },
    {
      "line": 1,
      "name": "@Tracking"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Mobi\" User is connect to the internet \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "migUser language \"en\" and Brand \"Eg\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Register"
    }
  ],
  "line": 10,
  "name": "migUser Click Register top Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "migUser fill Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "migUser fill first \"first name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "migUser fill last \"last name\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "migUser fill email with email: \"test@playtech.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "migUser fill user name with timestamp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "migUser fill password 123456",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "migUser Contiue to step 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Step 2"
    }
  ],
  "line": 19,
  "name": "migUser fill City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "migUser fill date of birth 1/1/1980",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "migUser select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "migUser fill Address \"address\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "migUser fill Post code 123",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "migUser fill Mobile 1227768276",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "migUser select currency GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And migUser click on I confirm I am 18 years of age"
    },
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser click on Register Now",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "migUser Account was Created",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Tracking"
    }
  ],
  "line": 31,
  "name": "User is navigating to Playtech Admin",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User Fill Username in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Fill Password in popup window",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User Submit",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User is navigating to Playtech AdminSearchUserUrl",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User fill username \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Select internalaccount",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Click Submit",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Find Advertiser \"yonam\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobi",
      "offset": 1
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MainWebPage.user_is_connect_to_the_internet(String,String)"
});
formatter.result({
  "duration": 2097297282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Eg",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 42
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 691708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.write("User Navigate to:https://www.eurogrand.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 25826019508,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4704400140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Title_(String)"
});
formatter.result({
  "duration": 5294447199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_first_(String)"
});
formatter.result({
  "duration": 380624911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_last_(String)"
});
formatter.result({
  "duration": 369739171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@playtech.com",
      "offset": 32
    }
  ],
  "location": "RegisterPage.fill_email_with_email_(String)"
});
formatter.result({
  "duration": 395114183,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170405074707");
formatter.result({
  "duration": 368977063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_password_(int)"
});
formatter.result({
  "duration": 328154556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "RegisterPage.Contiue_to_step(int)"
});
formatter.result({
  "duration": 289685701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 19
    }
  ],
  "location": "RegisterPage.fill_City_(String)"
});
formatter.result({
  "duration": 601852191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 31
    }
  ],
  "location": "RegisterPage.fill_date_of_birth_(int,int,int)"
});
formatter.result({
  "duration": 1781111287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 24
    }
  ],
  "location": "RegisterPage.select_country_United_Kingdom(String)"
});
formatter.result({
  "duration": 8042282469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 22
    }
  ],
  "location": "RegisterPage.fill_Address_(String)"
});
formatter.result({
  "duration": 427407953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "RegisterPage.fill_Post_code_(int)"
});
formatter.result({
  "duration": 298389600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1227768276",
      "offset": 20
    }
  ],
  "location": "RegisterPage.fill_Mobile_(int)"
});
formatter.result({
  "duration": 507109982,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 49448,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 396927542,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3287340430,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_Admin()"
});
formatter.result({
  "duration": 6134806239,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Username_in_popup_window()"
});
formatter.result({
  "duration": 471195920,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Password_in_popup_window()"
});
formatter.result({
  "duration": 263018904,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Submit()"
});
formatter.result({
  "duration": 1360845582,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_AdminSearchUserUrl()"
});
formatter.result({
  "duration": 5201091479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "Test_PT_Advertiser.user_fill_username(String)"
});
formatter.result({
  "duration": 5578595045,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Select_internalaccount()"
});
formatter.result({
  "duration": 5338905085,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Click_Submit()"
});
formatter.result({
  "duration": 1314228484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yonam",
      "offset": 22
    }
  ],
  "location": "Test_PT_Advertiser.user_Find_Advertiser(String)"
});
formatter.result({
  "duration": 5625709692,
  "status": "passed"
});
formatter.after({
  "duration": 1535639585,
  "status": "passed"
});
});