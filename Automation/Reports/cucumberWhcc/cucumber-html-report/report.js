$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("casino/migration/DepositLimit_desk.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser Deposit limit \"Daily\" limit Amount \"100\"",
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
  "line": 49,
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
      "line": 50,
      "id": "depositlimit-desktop;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Whcc",
        "Desk",
        "Wellcome to william hill casino club",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "Amount should be between 10 and 100 inclusively",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online"
      ],
      "line": 51,
      "id": "depositlimit-desktop;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1116316739,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "DepositLimit_Desk_Whcc_en",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Desk\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser Deposit limit \"Daily\" limit Amount \"100\"",
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
  "name": "migUser Read Limit Msg \"Amount should be between 10 and 100 inclusively\"",
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
  "duration": 21016490922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 825523,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 83721349221,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2953606115,
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
  "duration": 6110593665,
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
  "duration": 1054748578,
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
  "duration": 1036711370,
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
  "duration": 2024673527,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415044105");
formatter.result({
  "duration": 761278877,
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
  "duration": 1380526016,
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
  "duration": 605184737,
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
  "duration": 3839063345,
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
  "duration": 11872289355,
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
  "duration": 400601193,
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
  "duration": 341884793,
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
  "duration": 1185372163,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 36877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 342417263,
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
      "offset": 44
    }
  ],
  "location": "RegisterPage.user_Deposit_limit_limit_Amount(String,String)"
});
formatter.result({
  "duration": 1083015858,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 406694147,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3525482988,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 5274461978,
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
  "duration": 2653348401,
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
  "duration": 1638159319,
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
  "duration": 449530876,
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
  "duration": 863739665,
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
  "duration": 1213134072,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 647996324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amount should be between 10 and 100 inclusively",
      "offset": 24
    }
  ],
  "location": "DepositPage.user_Read_Limit_Msg(String)"
});
formatter.result({
  "duration": 340552221,
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
  "duration": 592857193,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 428846962,
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
  "duration": 3709079227,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 3731494087,
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
  "duration": 216737043,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2851447042,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £247");
formatter.result({
  "duration": 9532211216,
  "status": "passed"
});
formatter.after({
  "duration": 2504015454,
  "status": "passed"
});
formatter.uri("casino/migration/DepositLimit_mobi.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser Deposit limit \"Daily\" limit Amount \"100\"",
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
  "line": 49,
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
      "line": 50,
      "id": "depositlimit-mobile;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Whcc",
        "Mobi",
        "Wellcome to william hill casino club",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "Amount should be between 10 and 100 inclusively",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online"
      ],
      "line": 51,
      "id": "depositlimit-mobile;depositlimit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1562489,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "DepositLimit_Mobi_Whcc_en",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Mobi\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#And migUser Deposit limit \"No Limit\""
    }
  ],
  "line": 28,
  "name": "migUser Deposit limit \"Daily\" limit Amount \"100\"",
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
  "name": "migUser Read Limit Msg \"Amount should be between 10 and 100 inclusively\"",
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
  "duration": 4178079058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 524089,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 26281248874,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2518827393,
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
  "duration": 5237836093,
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
  "duration": 436184767,
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
  "duration": 425501565,
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
  "duration": 602879975,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415044254");
formatter.result({
  "duration": 382790550,
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
  "duration": 243163307,
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
  "duration": 270439120,
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
  "duration": 1018331659,
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
  "duration": 1815588015,
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
  "duration": 8332809617,
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
  "duration": 271791247,
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
  "duration": 223988803,
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
  "duration": 424842543,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 36597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 185043909,
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
      "offset": 44
    }
  ],
  "location": "RegisterPage.user_Deposit_limit_limit_Amount(String,String)"
});
formatter.result({
  "duration": 590416101,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 365414878,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3304719175,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 507247429,
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
  "duration": 2402663746,
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
  "duration": 502576724,
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
  "duration": 356114813,
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
  "duration": 636378367,
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
  "duration": 313205728,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 548442889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amount should be between 10 and 100 inclusively",
      "offset": 24
    }
  ],
  "location": "DepositPage.user_Read_Limit_Msg(String)"
});
formatter.result({
  "duration": 207579454,
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
  "duration": 408239595,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 222724397,
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
  "duration": 4518093501,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2256005162,
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
  "duration": 366387628,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2259288820,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £247");
formatter.result({
  "duration": 17000210921,
  "status": "passed"
});
formatter.after({
  "duration": 3665694103,
  "status": "passed"
});
formatter.uri("casino/migration/Deposit_desk.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "comments": [
    {
      "line": 47,
      "value": "# with css \"\u003ccss\u003e\""
    }
  ],
  "line": 50,
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
      "line": 51,
      "id": "deposit-desktop;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Whcc",
        "Desk",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online",
        "/en/deposit?cat\u003dMost-Popular"
      ],
      "line": 52,
      "id": "deposit-desktop;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1267759,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Deposit_Desk_Whcc_en",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Desk\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 15537607154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 1003200,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 31222348091,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2371927437,
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
  "duration": 5437983319,
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
  "duration": 576209826,
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
  "duration": 650370368,
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
  "duration": 1796595378,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415044446");
formatter.result({
  "duration": 562591335,
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
  "duration": 634964220,
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
  "duration": 1272144085,
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
  "duration": 3416768053,
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
  "duration": 11095830615,
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
  "duration": 1120607508,
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
  "duration": 403814731,
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
  "duration": 731169185,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 40787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 293934565,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 420811863,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3916352776,
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
  "duration": 3415693335,
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
  "duration": 645296539,
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
  "duration": 417951444,
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
  "duration": 729137921,
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
  "duration": 836833452,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 411062020,
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
  "duration": 3411592535,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 4243756958,
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
  "duration": 268892554,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2287510005,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 63421370872,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £250");
formatter.result({
  "duration": 9927220918,
  "status": "passed"
});
formatter.after({
  "duration": 1973143514,
  "status": "passed"
});
formatter.uri("casino/migration/Deposit_mobi.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "line": 48,
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
      "line": 49,
      "id": "deposit-mobile;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Whcc",
        "Mobi",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online",
        "/en/?cat\u003dMost-Popular"
      ],
      "line": 50,
      "id": "deposit-mobile;deposit-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 317638,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Deposit_Mobi_Whcc_en",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Mobi\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "name": "migUser back to home page \"Whcc\" \"/en/?cat\u003dMost-Popular\"",
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
  "duration": 5412718376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 698971,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 37230690772,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2381519160,
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
  "duration": 5225462733,
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
  "duration": 361039182,
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
  "duration": 336860132,
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
  "duration": 542089567,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415044733");
formatter.result({
  "duration": 506904369,
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
  "duration": 349533530,
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
  "duration": 315592625,
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
  "duration": 488243897,
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
  "duration": 1915946859,
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
  "duration": 7947348616,
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
  "duration": 339372462,
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
  "duration": 284465484,
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
  "duration": 422824688,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 73193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 188701357,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 308802376,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 2966937977,
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
  "duration": 2382753674,
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
  "duration": 526158492,
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
  "duration": 521874149,
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
  "duration": 587041649,
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
  "duration": 313696573,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 462471347,
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
  "duration": 5005669435,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2392616101,
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
  "duration": 480568341,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2202780521,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 63001335365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Whcc",
      "offset": 27
    },
    {
      "val": "/en/?cat\u003dMost-Popular",
      "offset": 34
    }
  ],
  "location": "DepositPage.miguser_back_to_home_page(String,String)"
});
formatter.result({
  "duration": 25036981,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £250");
formatter.result({
  "duration": 9330324664,
  "status": "passed"
});
formatter.after({
  "duration": 1860630611,
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
  "line": 17,
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
      "line": 18,
      "id": "innerpagenoredirecttohp-desktop;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Whcc",
        "Desk",
        "170129033419",
        "123456",
        "https://www.williamhillcasino.com/promotions?cat\u003dmost%20popular",
        "https://ww2.williamhillcasino.com/promotions?cat\u003dmost%20popular"
      ],
      "line": 19,
      "id": "innerpagenoredirecttohp-desktop;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 613206,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "InnerPageNoRedirectToHP_Desk_Whcc_En",
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
  "name": "migUser language \"En\" and Brand \"Whcc\" and \"Desk\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"https://ww2.williamhillcasino.com/promotions?cat\u003dmost%20popular\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Redirection To \"https://www.williamhillcasino.com/promotions?cat\u003dmost%20popular\"",
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
  "duration": 13840085542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 634997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://ww2.williamhillcasino.com/promotions?cat\u003dmost%20popular",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.result({
  "duration": 10492725752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.williamhillcasino.com/promotions?cat\u003dmost%20popular",
      "offset": 16
    }
  ],
  "location": "MainWebPage.no_Redirection(String)"
});
formatter.result({
  "duration": 34432589,
  "status": "passed"
});
formatter.after({
  "duration": 1517321056,
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
  "line": 17,
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
      "line": 18,
      "id": "innerpagenoredirecttohp-mobile;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Whcc",
        "Mobi",
        "170129033419",
        "123456",
        "https://www.williamhillcasino.com/promotions?cat\u003dmost%20popular",
        "https://ww2.williamhillcasino.com/en/promotions?cat\u003dmost%20popular"
      ],
      "line": 19,
      "id": "innerpagenoredirecttohp-mobile;innerpagenoredirecttohp-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 487771,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "InnerPageNoRedirectToHP_Mobi_Whcc_En",
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
  "name": "migUser language \"En\" and Brand \"Whcc\" and \"Mobi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "migUser is navigating to \"https://ww2.williamhillcasino.com/en/promotions?cat\u003dmost%20popular\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Redirection To \"https://www.williamhillcasino.com/promotions?cat\u003dmost%20popular\"",
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
  "duration": 2604980521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 595886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://ww2.williamhillcasino.com/en/promotions?cat\u003dmost%20popular",
      "offset": 26
    }
  ],
  "location": "MainWebPage.user_is_navigating_to(String)"
});
formatter.result({
  "duration": 8318999761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.williamhillcasino.com/promotions?cat\u003dmost%20popular",
      "offset": 16
    }
  ],
  "location": "MainWebPage.no_Redirection(String)"
});
formatter.result({
  "duration": 31112334,
  "status": "passed"
});
formatter.after({
  "duration": 1484720264,
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
  "line": 18,
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
        "Password"
      ],
      "line": 19,
      "id": "login-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Whcc",
        "Desk",
        "170129033419",
        "123456"
      ],
      "line": 20,
      "id": "login-desktop;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 386641,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login_Desk_Whcc_En",
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
  "name": "migUser language \"En\" and Brand \"Whcc\" and \"Desk\"",
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
  "name": "migUser Fill Username \"170129033419\" in popup window",
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
  "duration": 2668017584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 2100825,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 29928607687,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 544009643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "170129033419",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 1218014860,
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
  "duration": 1491865028,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 412117462,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 10458899106,
  "status": "passed"
});
formatter.after({
  "duration": 1675493673,
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
  "line": 18,
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
      "line": 19,
      "id": "login-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Whcc",
        "Mobi",
        "170129033419",
        "123456"
      ],
      "line": 20,
      "id": "login-mobile;login-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 387200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login_Mobi_Whcc_En",
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
  "name": "migUser language \"En\" and Brand \"Whcc\" and \"Mobi\"",
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
  "name": "migUser Fill Username \"170129033419\" in popup window",
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
  "duration": 2675670511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 720762,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 30059213392,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 1238285034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "170129033419",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 1053881150,
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
  "duration": 502137562,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 311710008,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 9176160936,
  "status": "passed"
});
formatter.after({
  "duration": 1753038724,
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
  "name": "TestPaymentMethod_\u003cType\u003e_\u003cBrand\u003e_\u003cMethod\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e",
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
  "line": 21,
  "name": "",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;",
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
      "line": 22,
      "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "payPal",
        "https://www.paypal.com/cgi-bin/webscr",
        "en",
        "Whcc",
        "Desk",
        "151007020423"
      ],
      "line": 23,
      "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;2"
    },
    {
      "cells": [
        "paySafeCard",
        "https://customer.cc.at.paysafecard.com/rest/payment/panel",
        "en",
        "Whcc",
        "Desk",
        "151007020423"
      ],
      "line": 24,
      "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;3"
    },
    {
      "cells": [
        "Skrill",
        "https://pay.skrill.com/app/",
        "en",
        "Whcc",
        "Desk",
        "151007020423"
      ],
      "line": 25,
      "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;4"
    },
    {
      "cells": [
        "EcoCard",
        "ecopayz.com/",
        "en",
        "Whcc",
        "Desk",
        "151007020423"
      ],
      "line": 26,
      "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;5"
    },
    {
      "cells": [
        "LocalBankPayment",
        "https://www.envoytransfers.com/default.aspx",
        "en",
        "Whcc",
        "Desk",
        "151007020423"
      ],
      "line": 27,
      "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 278806,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "TestPaymentMethod_Desk_Whcc_payPal_en",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;2",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Desk\"",
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
  "name": "migUser Fill Username \"151007020423\" in popup window",
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
  "duration": 8146235066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 749536,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 31901369587,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 484221878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "151007020423",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 706923087,
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
  "duration": 471162676,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 312488598,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £106");
formatter.result({
  "duration": 9165508466,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 357427271,
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
  "duration": 4080114372,
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
  "duration": 10818904358,
  "status": "passed"
});
formatter.after({
  "duration": 1677890346,
  "status": "passed"
});
formatter.before({
  "duration": 988673,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "TestPaymentMethod_Desk_Whcc_paySafeCard_en",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;3",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Desk\"",
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
  "name": "migUser Fill Username \"151007020423\" in popup window",
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
  "duration": 3112703150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 589460,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 31796184151,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 1582543033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "151007020423",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 752983969,
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
  "duration": 447081403,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 446147765,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £106");
formatter.result({
  "duration": 9538995878,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 360665392,
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
  "duration": 4136329058,
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
  "duration": 10369832758,
  "status": "passed"
});
formatter.after({
  "duration": 1727006086,
  "status": "passed"
});
formatter.before({
  "duration": 346133,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "TestPaymentMethod_Desk_Whcc_Skrill_en",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;4",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Desk\"",
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
  "name": "migUser Fill Username \"151007020423\" in popup window",
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
  "duration": 10207113195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 940902,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 32509397144,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 1264536694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "151007020423",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 759497925,
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
  "duration": 422107838,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 283212252,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £106");
formatter.result({
  "duration": 9728189197,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 401740445,
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
  "duration": 3915148713,
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
  "duration": 10376600936,
  "status": "passed"
});
formatter.after({
  "duration": 1480624493,
  "status": "passed"
});
formatter.before({
  "duration": 262882,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "TestPaymentMethod_Desk_Whcc_EcoCard_en",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;5",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Desk\"",
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
  "name": "migUser Fill Username \"151007020423\" in popup window",
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
  "duration": 3257470712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 712102,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 29567700085,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 1797238476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "151007020423",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 816846834,
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
  "duration": 387465166,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 351273137,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £106");
formatter.result({
  "duration": 9497287505,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 294784393,
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
  "duration": 4009008687,
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
  "duration": 10526585362,
  "status": "passed"
});
formatter.after({
  "duration": 1924160752,
  "status": "passed"
});
formatter.before({
  "duration": 533028,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "TestPaymentMethod_Desk_Whcc_LocalBankPayment_en",
  "description": "",
  "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;6",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Desk\"",
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
  "name": "migUser Fill Username \"151007020423\" in popup window",
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
  "duration": 8237700322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 653994,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 29649149263,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 466369609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "151007020423",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 784653636,
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
  "duration": 435028753,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 528738150,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £106");
formatter.result({
  "duration": 9976892314,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 290683872,
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
  "duration": 4068522396,
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
  "duration": 10447815295,
  "status": "passed"
});
formatter.after({
  "duration": 1488390284,
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
  "name": "TestPaymentMethod_\u003cType\u003e_\u003cBrand\u003e_\u003cMethod\u003e_\u003clanguage\u003e",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e",
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
  "line": 21,
  "name": "",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;",
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
      "line": 22,
      "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "payPal",
        "https://www.paypal.com/cgi-bin/webscr",
        "en",
        "Whcc",
        "Mobi",
        "151007020423"
      ],
      "line": 23,
      "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;2"
    },
    {
      "cells": [
        "paySafeCard",
        "https://customer.cc.at.paysafecard.com/rest/payment/panel",
        "en",
        "Whcc",
        "Mobi",
        "151007020423"
      ],
      "line": 24,
      "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;3"
    },
    {
      "cells": [
        "Skrill",
        "https://pay.skrill.com/app/",
        "en",
        "Whcc",
        "Mobi",
        "151007020423"
      ],
      "line": 25,
      "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;4"
    },
    {
      "cells": [
        "EcoCard",
        "ecopayz.com/",
        "en",
        "Whcc",
        "Mobi",
        "151007020423"
      ],
      "line": 26,
      "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;5"
    },
    {
      "cells": [
        "LocalBankPayment",
        "https://www.envoytransfers.com/default.aspx",
        "en",
        "Whcc",
        "Mobi",
        "151007020423"
      ],
      "line": 27,
      "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 589739,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "TestPaymentMethod_Mobi_Whcc_payPal_en",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;2",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Mobi\"",
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
  "name": "migUser Fill Username \"151007020423\" in popup window",
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
  "duration": 3120432904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 565156,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 31531882404,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 1050722927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "151007020423",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 920744117,
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
  "duration": 457201684,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 461245493,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £106");
formatter.result({
  "duration": 9549496933,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 370654650,
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
  "duration": 8065033126,
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
  "duration": 10025731762,
  "status": "passed"
});
formatter.after({
  "duration": 1830807826,
  "status": "passed"
});
formatter.before({
  "duration": 411505,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "TestPaymentMethod_Mobi_Whcc_paySafeCard_en",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;3",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Mobi\"",
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
  "name": "migUser Fill Username \"151007020423\" in popup window",
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
  "duration": 7890564862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 805130,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 29942982977,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 1027887623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "151007020423",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 1014711367,
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
  "duration": 584899757,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 346400729,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £106");
formatter.result({
  "duration": 9255941747,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 322659724,
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
  "duration": 8138946710,
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
  "duration": 10035520995,
  "status": "passed"
});
formatter.after({
  "duration": 1500073892,
  "status": "passed"
});
formatter.before({
  "duration": 1103492,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "TestPaymentMethod_Mobi_Whcc_Skrill_en",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;4",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Mobi\"",
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
  "name": "migUser Fill Username \"151007020423\" in popup window",
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
  "duration": 3036479776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 1715581,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 31756397251,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 1243252146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "151007020423",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 892103605,
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
  "duration": 766962003,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 427048410,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £106");
formatter.result({
  "duration": 9524579521,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 446336057,
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
  "duration": 8332185515,
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
  "duration": 10029317413,
  "status": "passed"
});
formatter.after({
  "duration": 1769879692,
  "status": "passed"
});
formatter.before({
  "duration": 546718,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "TestPaymentMethod_Mobi_Whcc_EcoCard_en",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;5",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Mobi\"",
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
  "name": "migUser Fill Username \"151007020423\" in popup window",
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
  "duration": 10045481758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 637232,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 27547774368,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 1133172232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "151007020423",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 898297130,
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
  "duration": 496235694,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 272536873,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £106");
formatter.result({
  "duration": 9241522317,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 410580116,
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
  "duration": 8128496499,
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
  "duration": 10035178773,
  "status": "passed"
});
formatter.after({
  "duration": 1654013290,
  "status": "passed"
});
formatter.before({
  "duration": 297245,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "TestPaymentMethod_Mobi_Whcc_LocalBankPayment_en",
  "description": "",
  "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;6",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Mobi\"",
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
  "name": "migUser Fill Username \"151007020423\" in popup window",
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
  "duration": 2420005056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 659860,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 27889012989,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 1076183985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "151007020423",
      "offset": 23
    }
  ],
  "location": "MainWebPage.migUser_Fill_Username_in_popup_window(String)"
});
formatter.result({
  "duration": 1018944587,
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
  "duration": 493746272,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 338048830,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £106");
formatter.result({
  "duration": 9392021333,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 302397651,
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
  "duration": 8203750197,
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
  "duration": 10086515185,
  "status": "passed"
});
formatter.after({
  "duration": 1484799325,
  "status": "passed"
});
formatter.uri("casino/migration/RegisterNonUKGC_desk.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "line": 43,
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
      "line": 44,
      "id": "registernonukgc-desktop;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Whcc",
        "Desk",
        "Wellcome to william hill casino club",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online"
      ],
      "line": 45,
      "id": "registernonukgc-desktop;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 386362,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "RegisterNonUKGC_Desk_Whcc_en",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Desk\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 2656897455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 552305,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 30215267863,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2403626160,
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
  "duration": 5427209045,
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
  "duration": 776711565,
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
  "duration": 711637373,
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
  "duration": 1816045615,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415050332");
formatter.result({
  "duration": 672206663,
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
  "duration": 668400593,
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
  "duration": 1596930057,
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
  "duration": 3372792631,
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
  "duration": 3544216095,
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
  "duration": 1463820681,
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
  "duration": 447116324,
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
  "duration": 788632913,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 41067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 354876109,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 507020026,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3462775017,
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
  "duration": 5201722565,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.not_visible_Timeout()"
});
formatter.result({
  "duration": 5277707083,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.not_visible_SelfExclude()"
});
formatter.result({
  "duration": 2049233073,
  "status": "passed"
});
formatter.after({
  "duration": 1548184196,
  "status": "passed"
});
formatter.uri("casino/migration/RegisterNonUKGC_mobi.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "line": 45,
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
      "line": 46,
      "id": "registernonukgc-mobile;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Whcc",
        "Mobi",
        "Wellcome to william hill casino club",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online"
      ],
      "line": 47,
      "id": "registernonukgc-mobile;registernonukgc-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 318756,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "RegisterNonUKGC_Mobi_Whcc_en",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Mobi\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 2665031450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 1240102,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 29383245636,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2402426007,
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
  "duration": 5472641914,
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
  "duration": 411157005,
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
  "duration": 385007312,
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
  "duration": 433137731,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415050444");
formatter.result({
  "duration": 465030891,
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
  "duration": 421027254,
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
  "duration": 336509808,
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
  "duration": 604678248,
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
  "duration": 1959786230,
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
  "duration": 2375567566,
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
  "duration": 371710929,
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
  "duration": 246400310,
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
  "duration": 355268058,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 36876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 201910298,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 445382304,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 2837796424,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Menu()"
});
formatter.write("Start open menu");
formatter.result({
  "duration": 2970757457,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_my_account()"
});
formatter.result({
  "duration": 746065771,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Responsible_Gaming()"
});
formatter.result({
  "duration": 2303545283,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.not_visible_Timeout()"
});
formatter.result({
  "duration": 5053396451,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.not_visible_SelfExclude()"
});
formatter.result({
  "duration": 2076130626,
  "status": "passed"
});
formatter.after({
  "duration": 1680455477,
  "status": "passed"
});
formatter.uri("casino/migration/Register_desk.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "line": 32,
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
      "line": 33,
      "id": "register-desktop;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Whcc",
        "Desk",
        ".popup-modal__inner",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online"
      ],
      "line": 34,
      "id": "register-desktop;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 498946,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Register_Desk_Whcc_en",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Desk\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 2121710441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 822172,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 35706157626,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2387454831,
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
  "duration": 5502417765,
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
  "duration": 827145629,
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
  "duration": 576508187,
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
  "duration": 1642037187,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415050559");
formatter.result({
  "duration": 615870453,
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
  "duration": 557148744,
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
  "duration": 1133095966,
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
  "duration": 3505099671,
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
  "duration": 10313171646,
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
  "duration": 420152282,
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
  "duration": 911203239,
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
  "duration": 759229455,
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
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 308865513,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 533174189,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3437279039,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit(RegisterPage.java:257)\r\n\tat ✽.Then migUser Account was Created(casino/migration/Register_desk.feature:29)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u00272.Register_Desk_Whcc_en-20170415_050622.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 05:05:16 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:05:16 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 05:05:16 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:05:32 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for gameadvisor not configure in org settings\"\r\nSat Apr 15 05:05:32 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 05:05:32 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Try to connect to Open API :\"\r\nSat Apr 15 05:05:32 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 05:05:33 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Open API server connected\"\r\nSat Apr 15 05:05:33 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier initialized\"\r\nSat Apr 15 05:05:33 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:34 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/components/requirejs/require.js 167:16 Uncaught Error: Module name \"playtech.dy.analytic\" has not been lo…)\nhttp://requirejs.org/docs/errors.html#notloaded\r\nSat Apr 15 05:05:34 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:34 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:34 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:34 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 87:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 05:05:34 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:34 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:34 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:34 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:34 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:34 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier started\"\r\nSat Apr 15 05:05:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:38 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:05:38 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:05:38 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:05:44 IDT 2017 SEVERE https://www.williamhillcasino.com/library/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)\r\nSat Apr 15 05:05:44 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:44 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:05:44 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 05:05:44 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:05:47 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for gameadvisor not configure in org settings\"\r\nSat Apr 15 05:05:47 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 05:05:47 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Try to connect to Open API :\"\r\nSat Apr 15 05:05:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier initialized\"\r\nSat Apr 15 05:05:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:05:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:05:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:05:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:48 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 87:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 05:05:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Open API server connected\"\r\nSat Apr 15 05:05:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:50 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/components/requirejs/require.js 167:16 Uncaught Error: Module name \"playtech.dy.analytic\" has not been lo…)\nhttp://requirejs.org/docs/errors.html#notloaded\r\nSat Apr 15 05:05:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier started\"\r\nSat Apr 15 05:05:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:05:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:00 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 05:06:17 IDT 2017 INFO console-api 7:11 27\r\nSat Apr 15 05:06:18 IDT 2017 FINE console-api 303:9 \"Register \u003e undefined \u003e Checked\"\r\nSat Apr 15 05:06:18 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/modules/webanalytics/webAnalytics.js 844:49 \"affiliate is tracked\"\r\nSat Apr 15 05:06:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:26 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:06:26 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:06:26 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:06:26 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:06:26 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\n");
formatter.after({
  "duration": 5666736694,
  "status": "passed"
});
formatter.before({
  "duration": 923022,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Register_Desk_Whcc_en",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Desk\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 3145907650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 529117,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 29506490071,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2365129925,
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
  "duration": 5433248639,
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
  "duration": 660108757,
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
  "duration": 892867669,
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
  "duration": 1762958979,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415050711");
formatter.result({
  "duration": 615498060,
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
  "duration": 612620040,
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
  "duration": 1388750805,
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
  "duration": 3688113992,
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
  "duration": 11913729259,
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
  "duration": 552036083,
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
  "duration": 555328121,
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
  "duration": 1443224768,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 33524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 302760826,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 500330349,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 2284959401,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit(RegisterPage.java:257)\r\n\tat ✽.Then migUser Account was Created(casino/migration/Register_desk.feature:29)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u00273.Register_Desk_Whcc_en-20170415_050737.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 05:06:34 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:06:34 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 05:06:34 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:06:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for gameadvisor not configure in org settings\"\r\nSat Apr 15 05:06:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 05:06:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Try to connect to Open API :\"\r\nSat Apr 15 05:06:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Open API server connected\"\r\nSat Apr 15 05:06:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier initialized\"\r\nSat Apr 15 05:06:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:48 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 87:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 05:06:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:48 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/components/requirejs/require.js 167:16 Uncaught Error: Module name \"playtech.dy.analytic\" has not been lo…)\nhttp://requirejs.org/docs/errors.html#notloaded\r\nSat Apr 15 05:06:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:48 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:49 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:49 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:49 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:06:49 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:06:49 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:06:49 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:49 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier started\"\r\nSat Apr 15 05:06:49 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:49 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:50 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:56 IDT 2017 SEVERE https://www.williamhillcasino.com/library/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)\r\nSat Apr 15 05:06:57 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:06:57 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:06:57 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 05:06:57 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:06:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for gameadvisor not configure in org settings\"\r\nSat Apr 15 05:06:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 05:06:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Try to connect to Open API :\"\r\nSat Apr 15 05:07:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier initialized\"\r\nSat Apr 15 05:07:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:07:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:07:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:02 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 87:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:02 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/components/requirejs/require.js 167:16 Uncaught Error: Module name \"playtech.dy.analytic\" has not been lo…)\nhttp://requirejs.org/docs/errors.html#notloaded\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier started\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Open API server connected\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:12 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:12 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:12 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 05:07:32 IDT 2017 INFO console-api 7:11 29\r\nSat Apr 15 05:07:32 IDT 2017 FINE console-api 303:9 \"Register \u003e undefined \u003e Checked\"\r\nSat Apr 15 05:07:33 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/modules/webanalytics/webAnalytics.js 844:49 \"affiliate is tracked\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:35 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:36 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:36 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:36 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:36 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:07:39 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:07:39 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:07:39 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:07:39 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:07:39 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\n");
formatter.after({
  "duration": 5492095504,
  "status": "passed"
});
formatter.before({
  "duration": 1055163,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Register_Desk_Whcc_en",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Desk\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 10138336576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 653435,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 34076458880,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2566573684,
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
  "duration": 5508264598,
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
  "duration": 579646296,
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
  "duration": 1276275895,
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
  "duration": 1455085772,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415050836");
formatter.result({
  "duration": 848058343,
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
  "duration": 936362862,
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
  "duration": 1058903855,
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
  "duration": 3641984945,
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
  "duration": 11298290146,
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
  "duration": 585909103,
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
  "duration": 352231079,
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
  "duration": 1304902998,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 36876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 645105454,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 489232850,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3842946240,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit(RegisterPage.java:257)\r\n\tat ✽.Then migUser Account was Created(casino/migration/Register_desk.feature:29)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u00274.Register_Desk_Whcc_en-20170415_050901.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 05:07:54 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:07:54 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 05:07:54 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:08:09 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for gameadvisor not configure in org settings\"\r\nSat Apr 15 05:08:09 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 05:08:09 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Try to connect to Open API :\"\r\nSat Apr 15 05:08:09 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Open API server connected\"\r\nSat Apr 15 05:08:10 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier initialized\"\r\nSat Apr 15 05:08:10 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:11 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/components/requirejs/require.js 167:16 Uncaught Error: Module name \"playtech.dy.analytic\" has not been lo…)\nhttp://requirejs.org/docs/errors.html#notloaded\r\nSat Apr 15 05:08:11 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:11 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:11 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:11 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 87:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 05:08:11 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:11 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:11 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:11 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:11 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:11 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier started\"\r\nSat Apr 15 05:08:12 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:12 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:12 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:12 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:14 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:08:14 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:08:14 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:08:20 IDT 2017 SEVERE https://www.williamhillcasino.com/library/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)\r\nSat Apr 15 05:08:20 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:21 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:08:21 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 05:08:21 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:08:24 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for gameadvisor not configure in org settings\"\r\nSat Apr 15 05:08:24 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 05:08:24 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Try to connect to Open API :\"\r\nSat Apr 15 05:08:24 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:08:24 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:08:24 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:08:24 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier initialized\"\r\nSat Apr 15 05:08:25 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:25 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Open API server connected\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:27 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 87:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:27 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/components/requirejs/require.js 167:16 Uncaught Error: Module name \"playtech.dy.analytic\" has not been lo…)\nhttp://requirejs.org/docs/errors.html#notloaded\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier started\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:37 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:37 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 05:08:37 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:57 IDT 2017 INFO console-api 7:11 29\r\nSat Apr 15 05:08:57 IDT 2017 FINE console-api 303:9 \"Register \u003e undefined \u003e Checked\"\r\nSat Apr 15 05:08:57 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:08:59 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/modules/webanalytics/webAnalytics.js 844:49 \"affiliate is tracked\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:00 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:09:03 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:09:03 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:09:03 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:09:03 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:09:03 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\n");
formatter.after({
  "duration": 3708741194,
  "status": "passed"
});
formatter.uri("casino/migration/Register_mobi.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "line": 32,
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
      "line": 33,
      "id": "register-mobile;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Whcc",
        "Mobi",
        ".popup-modal__inner",
        "I understand that my funds will be given a \u0027basic\u0027 level of protection",
        "free spins",
        "Your deposit has been approved and will be charged as WH Online"
      ],
      "line": 34,
      "id": "register-mobile;register-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1577295,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Register_Mobi_Whcc_en",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Mobi\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 3209125740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 779429,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 28339490913,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2437951471,
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
  "duration": 5266975272,
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
  "duration": 360786357,
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
  "duration": 279913788,
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
  "duration": 449985962,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415050946");
formatter.result({
  "duration": 395682971,
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
  "duration": 278003489,
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
  "duration": 277346423,
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
  "duration": 473367984,
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
  "duration": 1924618911,
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
  "duration": 7570765837,
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
  "duration": 286235821,
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
  "duration": 306811340,
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
  "duration": 415646681,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 36317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 217557539,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 298538502,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3083600290,
  "status": "passed"
});
formatter.after({
  "duration": 1712873005,
  "status": "passed"
});
formatter.uri("casino/migration/SelfExclude_desk.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "line": 53,
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
      "line": 54,
      "id": "selfexcludeen-desktop;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Whcc",
        "Desk",
        "Wellcome to william hill casino club",
        "I confirm that I have read and accepted the Self-Exclusion",
        "Sorry, the action cannot be performed because you have asked to be self excluded from playing"
      ],
      "line": 55,
      "id": "selfexcludeen-desktop;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 346692,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "SelfExclude_Desk_Whcc_En",
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
  "name": "migUser language \"En\" and Brand \"Whcc\" and \"Desk\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 7282528645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 490286,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 31928903534,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2448315918,
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
  "duration": 5379955553,
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
  "duration": 721369895,
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
  "duration": 633714062,
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
  "duration": 1684720823,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415051054");
formatter.result({
  "duration": 604142426,
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
  "duration": 729514226,
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
  "duration": 1470403362,
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
  "duration": 2871834549,
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
  "duration": 10030522594,
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
  "duration": 535439560,
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
  "duration": 431740347,
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
  "duration": 1453790914,
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
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 279440264,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 578994817,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 2812806097,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit(RegisterPage.java:257)\r\n\tat ✽.Then migUser Account was Created(casino/migration/SelfExclude_desk.feature:29)\r\n",
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
formatter.write("\u003cimg src\u003d\u00275.SelfExclude_Desk_Whcc_En-20170415_051117.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 05:10:15 IDT 2017 INFO https://www.williamhillcasino.com/En/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:10:15 IDT 2017 INFO https://www.williamhillcasino.com/En/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 05:10:15 IDT 2017 INFO https://www.williamhillcasino.com/En/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:10:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for gameadvisor not configure in org settings\"\r\nSat Apr 15 05:10:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 05:10:27 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Try to connect to Open API :\"\r\nSat Apr 15 05:10:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Open API server connected\"\r\nSat Apr 15 05:10:30 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier initialized\"\r\nSat Apr 15 05:10:31 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:31 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:31 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 87:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 05:10:31 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:31 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/components/requirejs/require.js 167:16 Uncaught Error: Module name \"playtech.dy.analytic\" has not been lo…)\nhttp://requirejs.org/docs/errors.html#notloaded\r\nSat Apr 15 05:10:31 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:31 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:31 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:10:31 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:10:31 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:10:31 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:31 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:31 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:31 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:32 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier started\"\r\nSat Apr 15 05:10:32 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:32 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:32 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:39 IDT 2017 SEVERE https://www.williamhillcasino.com/library/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)\r\nSat Apr 15 05:10:39 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:39 IDT 2017 INFO https://www.williamhillcasino.com/En/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:10:39 IDT 2017 INFO https://www.williamhillcasino.com/En/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 05:10:39 IDT 2017 INFO https://www.williamhillcasino.com/En/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:10:42 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for gameadvisor not configure in org settings\"\r\nSat Apr 15 05:10:42 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 05:10:42 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Try to connect to Open API :\"\r\nSat Apr 15 05:10:43 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier initialized\"\r\nSat Apr 15 05:10:43 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:43 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:10:43 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:10:43 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:45 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 87:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:45 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/components/requirejs/require.js 167:16 Uncaught Error: Module name \"playtech.dy.analytic\" has not been lo…)\nhttp://requirejs.org/docs/errors.html#notloaded\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier started\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Open API server connected\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:45 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:55 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:55 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:10:55 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 05:11:12 IDT 2017 INFO console-api 7:11 26\r\nSat Apr 15 05:11:12 IDT 2017 FINE console-api 303:9 \"Register \u003e undefined \u003e Checked\"\r\nSat Apr 15 05:11:13 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/modules/webanalytics/webAnalytics.js 844:49 \"affiliate is tracked\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:16 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:16 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:16 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:11:17 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:11:17 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:11:17 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:11:17 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:11:17 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\n");
formatter.after({
  "duration": 4536411472,
  "status": "passed"
});
formatter.before({
  "duration": 1128914,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "SelfExclude_Desk_Whcc_En",
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
  "name": "migUser language \"En\" and Brand \"Whcc\" and \"Desk\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 2573862320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 619352,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 33873959958,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2379601877,
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
  "duration": 5452028679,
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
  "duration": 606709512,
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
  "duration": 1706785360,
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
  "duration": 1391018133,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415051208");
formatter.result({
  "duration": 1785861611,
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
  "duration": 589091351,
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
  "duration": 1379267197,
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
  "duration": 3500845219,
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
  "duration": 11141600399,
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
  "duration": 964571754,
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
  "duration": 473462968,
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
  "duration": 678552721,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 34642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 343019574,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 718042377,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3605097575,
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
  "duration": 5268153914,
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
  "duration": 2933691572,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Set_exclude()"
});
formatter.result({
  "duration": 408507227,
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
  "duration": 2576946790,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_ok()"
});
formatter.result({
  "duration": 5402141333,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 61559465519,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "duration": 643453567,
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
  "duration": 349725175,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 2509344623,
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
  "duration": 2576394207,
  "status": "passed"
});
formatter.after({
  "duration": 1594483098,
  "status": "passed"
});
formatter.uri("casino/migration/SelfExclude_mobi.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "line": 55,
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
      "line": 56,
      "id": "selfexcludeen-mobile;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Whcc",
        "Mobi",
        "Wellcome to william hill casino club",
        "I confirm that I have read and accepted the Self-Exclusion",
        "Sorry, the action cannot be performed because you have asked to be self excluded from playing"
      ],
      "line": 57,
      "id": "selfexcludeen-mobile;selfexclude-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1144838,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "SelfExclude_Mobi_Whcc_En",
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
  "name": "migUser language \"En\" and Brand \"Whcc\" and \"Mobi\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 3709460560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 780546,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 31309656674,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2671450421,
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
  "duration": 5327886924,
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
  "duration": 422836701,
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
  "duration": 352303156,
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
  "duration": 549843346,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415051444");
formatter.result({
  "duration": 423851635,
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
  "duration": 384193522,
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
  "duration": 273392848,
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
  "duration": 1052970978,
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
  "duration": 2129869578,
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
  "duration": 8079379362,
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
  "duration": 394910805,
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
  "duration": 288802348,
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
  "duration": 527308917,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 34641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 243596323,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 291317193,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3464687272,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Menu()"
});
formatter.write("Start open menu");
formatter.result({
  "duration": 3599820089,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_my_account()"
});
formatter.result({
  "duration": 780406728,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Responsible_Gaming()"
});
formatter.result({
  "duration": 2305467874,
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
  "duration": 2317699316,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Set_exclude()"
});
formatter.result({
  "duration": 339020741,
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
  "duration": 2338896424,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_ok()"
});
formatter.result({
  "duration": 5466857379,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 590869789,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "duration": 1097121841,
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
  "duration": 386259985,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 2225740143,
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
  "duration": 2218570517,
  "status": "passed"
});
formatter.after({
  "duration": 1592075250,
  "status": "passed"
});
formatter.uri("casino/migration/TimeOut_desk.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "line": 52,
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
      "line": 53,
      "id": "timeouten-desktop;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Whcc",
        "Desk",
        "Wellcome to william hill casino club",
        "Sorry, you have asked to be timed-out from playing and were automatically logged off. You can play again after",
        "Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after"
      ],
      "line": 54,
      "id": "timeouten-desktop;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 588063,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "MobiTimeOut_Desk_Whcc_En",
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
  "name": "migUser language \"En\" and Brand \"Whcc\" and \"Desk\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 2725014493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 589181,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 32847659130,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2961647081,
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
  "duration": 5800582197,
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
  "duration": 1020297832,
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
  "duration": 719850428,
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
  "duration": 2240619967,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415051616");
formatter.result({
  "duration": 702410222,
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
  "duration": 709169741,
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
  "duration": 1356343055,
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
  "duration": 3354612667,
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
  "duration": 13213883329,
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
  "duration": 1312427976,
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
  "duration": 515918364,
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
  "duration": 779628416,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 38832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 538931624,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 770980111,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4786719541,
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
  "duration": 5521087456,
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
  "duration": 6048926330,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_save_TimeOut()"
});
formatter.result({
  "duration": 469930675,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Successfull_timeOut_ok_click()"
});
formatter.result({
  "duration": 665508605,
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
  "duration": 2250228451,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_Timeout_ok()"
});
formatter.result({
  "duration": 5491543478,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Logout_msg_OK_click()"
});
formatter.result({
  "duration": 5635153071,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 954661836,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "duration": 763244491,
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
  "duration": 486387236,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 738867090,
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
  "duration": 2304047023,
  "status": "passed"
});
formatter.after({
  "duration": 1520611139,
  "status": "passed"
});
formatter.uri("casino/migration/TimeOut_mobi.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "line": 54,
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
      "line": 55,
      "id": "timeouten-mobile;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "En",
        "Whcc",
        "Mobi",
        "Wellcome to william hill casino club",
        "Sorry, you have asked to be timed-out from playing and were automatically logged off. You can play again after",
        "Sorry, the action cannot be performed because you have asked to be timed-out from playing. You can login again after"
      ],
      "line": 56,
      "id": "timeouten-mobile;mobitimeout-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 752889,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "MobiTimeOut_Mobi_Whcc_En",
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
  "name": "migUser language \"En\" and Brand \"Whcc\" and \"Mobi\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 3109065258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "En",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 652038,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/En/?js_fast_load\u003d0");
formatter.result({
  "duration": 31319553463,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2425601019,
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
  "duration": 5284384188,
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
  "duration": 505514808,
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
  "duration": 424152791,
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
  "duration": 466861011,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415051800");
formatter.result({
  "duration": 457009760,
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
  "duration": 285111097,
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
  "duration": 328031076,
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
  "duration": 477556505,
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
  "duration": 1832480944,
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
  "duration": 7551584908,
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
  "duration": 337310468,
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
  "duration": 258138395,
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
  "duration": 394974221,
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
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 259089353,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 348150114,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3277257863,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Menu()"
});
formatter.write("Start open menu");
formatter.result({
  "duration": 3355170280,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_my_account()"
});
formatter.result({
  "duration": 672896695,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Responsible_Gaming()"
});
formatter.result({
  "duration": 2437301948,
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
  "duration": 5356261759,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_save_TimeOut()"
});
formatter.result({
  "duration": 385253153,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Successfull_timeOut_ok_click()"
});
formatter.result({
  "duration": 656040921,
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
  "duration": 2207572191,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_Timeout_ok()"
});
formatter.result({
  "duration": 5338786633,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Logout_msg_OK_click()"
});
formatter.result({
  "duration": 5333299344,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 314482707,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "duration": 1044114825,
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
  "duration": 419478733,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 2209353703,
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
  "duration": 2197435987,
  "status": "passed"
});
formatter.after({
  "duration": 1749042406,
  "status": "passed"
});
formatter.uri("casino/migration/Tracking_desk.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "line": 42,
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
      "line": 43,
      "id": "tracking-desktop;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Whcc",
        "Desk",
        "Wellcome to william hill casino club",
        "yonam"
      ],
      "line": 44,
      "id": "tracking-desktop;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 636394,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Tracking_Desk_Whcc_en",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Desk\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 2209064840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 599517,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 33109051569,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2442587815,
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
  "duration": 5506794578,
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
  "duration": 558729950,
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
  "duration": 653487524,
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
  "duration": 2417585196,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415051937");
formatter.result({
  "duration": 952254825,
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
  "duration": 1346799663,
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
  "duration": 978489445,
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
  "duration": 4272043514,
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
  "duration": 14103133499,
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
  "duration": 950304299,
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
  "duration": 957488172,
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
  "duration": 878977635,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 443353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 465601913,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 416184739,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 2220908244,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit(RegisterPage.java:257)\r\n\tat ✽.Then migUser Account was Created(casino/migration/Tracking_desk.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Username_in_popup_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Password_in_popup_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_AdminSearchUserUrl()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Select_internalaccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Click_Submit()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u00276.Tracking_Desk_Whcc_en-20170415_052006.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 05:18:56 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:18:56 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 05:18:56 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:19:09 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for gameadvisor not configure in org settings\"\r\nSat Apr 15 05:19:09 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 05:19:09 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Try to connect to Open API :\"\r\nSat Apr 15 05:19:10 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Open API server connected\"\r\nSat Apr 15 05:19:12 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier initialized\"\r\nSat Apr 15 05:19:12 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:13 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:13 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 87:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 05:19:13 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:13 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:13 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/components/requirejs/require.js 167:16 Uncaught Error: Module name \"playtech.dy.analytic\" has not been lo…)\nhttp://requirejs.org/docs/errors.html#notloaded\r\nSat Apr 15 05:19:13 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:13 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:13 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:13 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:14 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:14 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier started\"\r\nSat Apr 15 05:19:14 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:14 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:14 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:14 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:19:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:19:15 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:19:21 IDT 2017 SEVERE https://www.williamhillcasino.com/library/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)\r\nSat Apr 15 05:19:21 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:22 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:19:22 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 05:19:22 IDT 2017 INFO https://www.williamhillcasino.com/en/?js_fast_load\u003d0 0:34512 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 05:19:25 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for gameadvisor not configure in org settings\"\r\nSat Apr 15 05:19:25 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 05:19:25 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Try to connect to Open API :\"\r\nSat Apr 15 05:19:25 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier initialized\"\r\nSat Apr 15 05:19:25 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:26 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:19:26 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:19:26 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:28 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 87:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Open API server connected\"\r\nSat Apr 15 05:19:28 IDT 2017 SEVERE https://www.williamhillcasino.com/mobile-portlet/js/components/requirejs/require.js 167:16 Uncaught Error: Module name \"playtech.dy.analytic\" has not been lo…)\nhttp://requirejs.org/docs/errors.html#notloaded\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Push notifier started\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:28 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:38 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 05:19:39 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:19:39 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:02 IDT 2017 INFO console-api 7:11 33\r\nSat Apr 15 05:20:02 IDT 2017 FINE console-api 303:9 \"Register \u003e undefined \u003e Checked\"\r\nSat Apr 15 05:20:02 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/modules/webanalytics/webAnalytics.js 844:49 \"affiliate is tracked\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:05 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 05:20:08 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:20:08 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:20:08 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:20:08 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 05:20:08 IDT 2017 INFO https://www.williamhillcasino.com/mobile-portlet/js/app-out/util/logger.util.js 90:36 \"Message from CHAT can\u0027t be parsed:\"\r\n");
formatter.after({
  "duration": 5361730053,
  "status": "passed"
});
formatter.before({
  "duration": 2091606,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Tracking_Desk_Whcc_en",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Desk\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 2261689405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Desk",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 519899,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 32110231328,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2602527975,
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
  "duration": 5451851003,
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
  "duration": 742251041,
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
  "duration": 763971678,
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
  "duration": 1796243936,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415052056");
formatter.result({
  "duration": 1069192593,
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
  "duration": 1301493347,
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
  "duration": 504093956,
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
  "duration": 3413215367,
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
  "duration": 11436201528,
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
  "duration": 462903246,
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
  "duration": 529879636,
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
  "duration": 596841498,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 56711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 797741612,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 552173810,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4575973483,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_Admin()"
});
formatter.result({
  "duration": 6063168085,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Username_in_popup_window()"
});
formatter.result({
  "duration": 356126546,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Password_in_popup_window()"
});
formatter.result({
  "duration": 184324265,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Submit()"
});
formatter.result({
  "duration": 2238058469,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_AdminSearchUserUrl()"
});
formatter.result({
  "duration": 4917967507,
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
  "duration": 5606306667,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Select_internalaccount()"
});
formatter.result({
  "duration": 5319037196,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Click_Submit()"
});
formatter.result({
  "duration": 1065763945,
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
  "duration": 5515593463,
  "status": "passed"
});
formatter.after({
  "duration": 1884016824,
  "status": "passed"
});
formatter.uri("casino/migration/Tracking_mobi.feature");
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "line": 42,
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
      "line": 43,
      "id": "tracking-mobile;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;1"
    },
    {
      "cells": [
        "en",
        "Whcc",
        "Mobi",
        "Wellcome to william hill casino club",
        "yonam"
      ],
      "line": 44,
      "id": "tracking-mobile;tracking-\u003ctype\u003e-\u003cbrand\u003e-\u003clanguage\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 337473,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Tracking_Mobi_Whcc_en",
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
  "name": "migUser language \"en\" and Brand \"Whcc\" and \"Mobi\"",
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
  "line": 26,
  "name": "migUser click on I confirm I am 18 years of age",
  "keyword": "And "
});
formatter.step({
  "comments": [
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
  "duration": 2646451993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "en",
      "offset": 18
    },
    {
      "val": "Whcc",
      "offset": 33
    },
    {
      "val": "Mobi",
      "offset": 44
    }
  ],
  "location": "MainWebPage.miguser_language_and_Brand_and(String,String,String)"
});
formatter.result({
  "duration": 1008788,
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
formatter.write("User Navigate to:https://www.williamhillcasino.com/en/?js_fast_load\u003d0");
formatter.result({
  "duration": 30479595870,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2703208369,
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
  "duration": 5377723146,
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
  "duration": 514445271,
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
  "duration": 347676869,
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
  "duration": 471604072,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415052237");
formatter.result({
  "duration": 443617834,
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
  "duration": 279259514,
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
  "duration": 232960055,
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
  "duration": 526195927,
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
  "duration": 1982231820,
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
  "duration": 8998246145,
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
  "duration": 386688811,
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
  "duration": 354778331,
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
  "duration": 598003657,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 39390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 32
    }
  ],
  "location": "RegisterPage.click_on_I_confirm_I_am_years_of_age(int)"
});
formatter.result({
  "duration": 357653836,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 370713597,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3267004047,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_Admin()"
});
formatter.result({
  "duration": 5698644939,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Username_in_popup_window()"
});
formatter.result({
  "duration": 431378569,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Password_in_popup_window()"
});
formatter.result({
  "duration": 226592206,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Submit()"
});
formatter.result({
  "duration": 1946724793,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_AdminSearchUserUrl()"
});
formatter.result({
  "duration": 4448013085,
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
  "duration": 5583768049,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Select_internalaccount()"
});
formatter.result({
  "duration": 5247679803,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Click_Submit()"
});
formatter.result({
  "duration": 1075463781,
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
  "duration": 5524987673,
  "status": "passed"
});
formatter.after({
  "duration": 1655217353,
  "status": "passed"
});
});