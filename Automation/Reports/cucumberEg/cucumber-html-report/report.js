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
  "duration": 1565592275,
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
  "duration": 17777213026,
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
  "duration": 933918,
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
  "duration": 59570098155,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 6526667775,
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
  "duration": 5406759239,
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
  "duration": 855032972,
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
  "duration": 1024694758,
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
  "duration": 1415629360,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415033248");
formatter.result({
  "duration": 601411911,
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
  "duration": 563463233,
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
  "duration": 1530790366,
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
  "duration": 3452934382,
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
  "duration": 10209822199,
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
  "duration": 1127501121,
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
  "duration": 385502347,
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
  "duration": 788362487,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 47213,
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
  "duration": 2184884671,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 418014860,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4836595154,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 5810206325,
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
  "duration": 2887061624,
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
  "duration": 1153231486,
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
  "duration": 1003458540,
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
  "duration": 912308129,
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
  "duration": 400109791,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 608046833,
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
  "duration": 834533160,
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
  "duration": 1106723620,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 421774555,
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
  "duration": 3728615229,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2454932960,
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
  "duration": 164393240,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2795852266,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £198");
formatter.result({
  "duration": 10565847056,
  "status": "passed"
});
formatter.after({
  "duration": 5462740656,
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
  "duration": 336914,
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
  "duration": 6906775302,
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
  "duration": 531353,
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
  "duration": 31743452031,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4054546877,
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
  "duration": 5472395514,
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
  "duration": 693670284,
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
  "duration": 404377092,
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
  "duration": 475430537,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415033459");
formatter.result({
  "duration": 464540326,
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
  "duration": 405773360,
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
  "duration": 306651543,
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
  "duration": 508622743,
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
  "duration": 2022423520,
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
  "duration": 7211979456,
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
  "duration": 372165736,
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
  "duration": 259456998,
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
  "duration": 346621429,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 47212,
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
  "duration": 1120585158,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 368872300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3069436479,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.write("Start Deposit");
formatter.result({
  "duration": 495415758,
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
  "duration": 2541113745,
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
  "duration": 667713914,
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
  "duration": 472705888,
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
  "duration": 558693912,
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
  "duration": 275100607,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 464241125,
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
  "duration": 198825270,
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
  "duration": 417632967,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 310041919,
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
  "duration": 6827661616,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2296040140,
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
  "duration": 123039380,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2237365363,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £198");
formatter.result({
  "duration": 9517637298,
  "status": "passed"
});
formatter.after({
  "duration": 1591857066,
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
  "duration": 374070,
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
  "duration": 4103729105,
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
  "duration": 1043988,
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
  "duration": 25832053236,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 6234395154,
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
  "duration": 5710220153,
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
  "duration": 689002932,
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
  "duration": 624559825,
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
  "duration": 1680912239,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415033630");
formatter.result({
  "duration": 511097919,
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
  "duration": 486462665,
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
  "duration": 577810867,
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
  "duration": 3646426291,
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
  "duration": 10273662155,
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
  "duration": 344469479,
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
  "duration": 294347187,
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
  "duration": 550922812,
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
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 783594843,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3901450324,
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
  "duration": 3253602623,
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
  "duration": 823400181,
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
  "duration": 481323464,
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
  "duration": 1394263238,
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
  "duration": 530949603,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 466107284,
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
  "duration": 3548537594,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 4056593506,
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
  "duration": 799825677,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2740953669,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 62887181751,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £200");
formatter.result({
  "duration": 10133605808,
  "status": "passed"
});
formatter.after({
  "duration": 1811882236,
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
  "duration": 471289,
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
  "duration": 4124360219,
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
  "duration": 30187429128,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2477738931,
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
  "duration": 5296272851,
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
  "duration": 473384466,
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
  "duration": 346236743,
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
  "duration": 522522556,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415033908");
formatter.result({
  "duration": 376014270,
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
  "duration": 333750798,
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
  "duration": 366554408,
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
  "duration": 573021153,
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
  "duration": 1746476717,
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
  "duration": 8854931841,
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
  "duration": 399961727,
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
  "duration": 283497763,
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
  "duration": 478018854,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 45815,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 347303079,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3353298813,
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
  "duration": 2801297372,
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
  "duration": 501140229,
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
  "duration": 502354908,
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
  "duration": 680450169,
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
  "duration": 374161800,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.click_on_Save_details_and_Deposit()"
});
formatter.result({
  "duration": 326953566,
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
  "duration": 7601389841,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2355190395,
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
  "duration": 219611431,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 2295815809,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.I_Click_On_ACCEPT()"
});
formatter.result({
  "duration": 62236053465,
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
  "duration": 16440637,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £200");
formatter.result({
  "duration": 9005798503,
  "status": "passed"
});
formatter.after({
  "duration": 1858974255,
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
  "duration": 657905,
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
  "duration": 5284115998,
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
  "duration": 1261613,
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
  "duration": 10342771497,
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
  "duration": 37526836,
  "status": "passed"
});
formatter.after({
  "duration": 1562919589,
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
  "duration": 409550,
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
  "duration": 2200147505,
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
  "duration": 1046501,
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
  "duration": 8655545607,
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
  "duration": 24237997,
  "status": "passed"
});
formatter.after({
  "duration": 1477310664,
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
  "duration": 336635,
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
  "duration": 2180574068,
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
  "duration": 735289,
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
  "duration": 11691144266,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.miguser_see_login_Popup_window()"
});
formatter.result({
  "duration": 20487082855,
  "error_message": "java.lang.AssertionError: Login popup not find\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.wh.auto.common.WebDriverUtils.assertTrue(WebDriverUtils.java:54)\r\n\tat stepdefs.casino.migration.MainWebPage.miguser_see_login_Popup_window(MainWebPage.java:197)\r\n\tat ✽.Then migUser see login Popup window(casino/migration/LoginPopup_desk.feature:9)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u00272.Login_Desk_Eg_En-20170415_034202.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:41:31 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:41:31 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:41:31 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:41:32 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:41:32 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nSat Apr 15 03:41:32 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:32 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nSat Apr 15 03:41:32 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nSat Apr 15 03:41:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:33 IDT 2017 SEVERE https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4294 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:41:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nSat Apr 15 03:41:33 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:34 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:34 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier started\"\r\nSat Apr 15 03:41:34 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:34 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:41:36 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:41:36 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:41:36 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:41:36 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:41:48 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 5336890023,
  "status": "passed"
});
formatter.before({
  "duration": 1757207,
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
  "duration": 2676855019,
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
  "duration": 1065498,
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
  "duration": 7361960528,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.miguser_see_login_Popup_window()"
});
formatter.result({
  "duration": 20596069054,
  "error_message": "java.lang.AssertionError: Login popup not find\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.wh.auto.common.WebDriverUtils.assertTrue(WebDriverUtils.java:54)\r\n\tat stepdefs.casino.migration.MainWebPage.miguser_see_login_Popup_window(MainWebPage.java:197)\r\n\tat ✽.Then migUser see login Popup window(casino/migration/LoginPopup_desk.feature:9)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u00273.Login_Desk_Eg_En-20170415_034238.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:42:11 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:42:11 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:42:11 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:42:13 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:42:13 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nSat Apr 15 03:42:13 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:14 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nSat Apr 15 03:42:14 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:17 IDT 2017 SEVERE https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4294 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier started\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:17 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:17 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:42:18 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:42:18 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:42:18 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:42:28 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4016658542,
  "status": "passed"
});
formatter.before({
  "duration": 403403,
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
  "duration": 2785399262,
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
  "duration": 717131,
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
  "duration": 10923067876,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.miguser_see_login_Popup_window()"
});
formatter.result({
  "duration": 20118499977,
  "error_message": "java.lang.AssertionError: Login popup not find\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.wh.auto.common.WebDriverUtils.assertTrue(WebDriverUtils.java:54)\r\n\tat stepdefs.casino.migration.MainWebPage.miguser_see_login_Popup_window(MainWebPage.java:197)\r\n\tat ✽.Then migUser see login Popup window(casino/migration/LoginPopup_desk.feature:9)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u00274.Login_Desk_Eg_En-20170415_034316.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:42:46 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:42:46 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:42:46 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:42:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:42:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nSat Apr 15 03:42:47 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nSat Apr 15 03:42:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nSat Apr 15 03:42:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:48 IDT 2017 SEVERE https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4294 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:42:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:48 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nSat Apr 15 03:42:49 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:49 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:49 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier started\"\r\nSat Apr 15 03:42:50 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:50 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:42:51 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:42:51 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:42:51 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:42:51 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:43:02 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3761065722,
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
  "duration": 379099,
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
  "duration": 2802327949,
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
  "duration": 1016051,
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
  "duration": 6962563957,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.miguser_see_login_Popup_window()"
});
formatter.result({
  "duration": 20250618165,
  "error_message": "java.lang.AssertionError: Login popup not find\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.wh.auto.common.WebDriverUtils.assertTrue(WebDriverUtils.java:54)\r\n\tat stepdefs.casino.migration.MainWebPage.miguser_see_login_Popup_window(MainWebPage.java:197)\r\n\tat ✽.Then migUser see login Popup window(casino/migration/LoginPopup_mobi.feature:9)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u00275.Login_Mobi_Eg_En-20170415_034350.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:43:24 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:43:24 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:43:24 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:29 IDT 2017 SEVERE https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4294 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier started\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:29 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:39 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3073569406,
  "status": "passed"
});
formatter.before({
  "duration": 685283,
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
  "duration": 2751979092,
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
  "duration": 883073,
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
  "duration": 8522613629,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.miguser_see_login_Popup_window()"
});
formatter.result({
  "duration": 20329480143,
  "error_message": "java.lang.AssertionError: Login popup not find\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.wh.auto.common.WebDriverUtils.assertTrue(WebDriverUtils.java:54)\r\n\tat stepdefs.casino.migration.MainWebPage.miguser_see_login_Popup_window(MainWebPage.java:197)\r\n\tat ✽.Then migUser see login Popup window(casino/migration/LoginPopup_mobi.feature:9)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u00276.Login_Mobi_Eg_En-20170415_034424.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:43:57 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:43:57 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:43:57 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:43:58 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:43:58 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nSat Apr 15 03:43:58 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:59 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nSat Apr 15 03:43:59 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:59 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:59 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:59 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nSat Apr 15 03:43:59 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:43:59 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:00 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:00 IDT 2017 SEVERE https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4294 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:44:00 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:00 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nSat Apr 15 03:44:00 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier started\"\r\nSat Apr 15 03:44:00 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:01 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:11 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3069305735,
  "status": "passed"
});
formatter.before({
  "duration": 385803,
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
  "duration": 2842191396,
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
  "duration": 895365,
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
  "duration": 7203345677,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.miguser_see_login_Popup_window()"
});
formatter.result({
  "duration": 20282174411,
  "error_message": "java.lang.AssertionError: Login popup not find\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.wh.auto.common.WebDriverUtils.assertTrue(WebDriverUtils.java:54)\r\n\tat stepdefs.casino.migration.MainWebPage.miguser_see_login_Popup_window(MainWebPage.java:197)\r\n\tat ✽.Then migUser see login Popup window(casino/migration/LoginPopup_mobi.feature:9)\r\n",
  "status": "failed"
});
formatter.write("\u003cimg src\u003d\u00277.Login_Mobi_Eg_En-20170415_034458.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:44:32 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:44:32 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:44:32 IDT 2017 INFO https://www.eurogrand.com/login 0:764079 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Try to connect to Open API :\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier initialized\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Open API server connected\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"IMS server connected\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:37 IDT 2017 SEVERE https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4294 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"Push notifier started\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:37 IDT 2017 INFO https://www.eurogrand.com/eurogrand-desktop-theme/js/dist/main.min.js?t\u003d1490885666000 191:4337 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:44:47 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 2978059502,
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
  "duration": 700369,
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
  "duration": 2453033277,
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
  "duration": 1506616,
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
  "duration": 12206256382,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 15602774654,
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
  "duration": 797164164,
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
  "duration": 405076623,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 311527582,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 11952585036,
  "status": "passed"
});
formatter.after({
  "duration": 1929404715,
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
  "duration": 317638,
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
  "duration": 4954119029,
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
  "duration": 946210,
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
  "duration": 24094952292,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4917609919,
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
  "duration": 1063069469,
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
  "duration": 412308827,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 351890254,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.write("Find Amount: : £100");
formatter.result({
  "duration": 10022370999,
  "status": "passed"
});
formatter.after({
  "duration": 1567532187,
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
  "line": 30,
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
      "line": 31,
      "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;1"
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
      "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;2"
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
      "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;3"
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
      "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;4"
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
      "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;5"
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
      "id": "paymentmethods-desktop;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 566552,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TestPaymentMethod_Desk_Eg_payPal_en",
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
  "duration": 3116325399,
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
  "duration": 594489,
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
  "duration": 28961616071,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5156722991,
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
  "duration": 914542490,
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
  "duration": 328005096,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 453220451,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 27582866258,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u00278.TestPaymentMethod_Desk_Eg_payPal_en-20170415_034742.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:46:40 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 03:46:42 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:46:42 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:46:42 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:46:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:46:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:46:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:46:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:46:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:46:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:46:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:46:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:46:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:57 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:46:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:58 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:46:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:46:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:46:59 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:47:06 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:47:06 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:47:06 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:47:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:47:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:10 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:10 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:47:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:47:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:12 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:47:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:19 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:47:19 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:47:19 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:47:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:47:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:47:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:47:22 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:47:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:47:23 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:47:33 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4027731178,
  "status": "passed"
});
formatter.before({
  "duration": 1649930,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TestPaymentMethod_Desk_Eg_payPal_en",
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
  "duration": 2518952828,
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
  "duration": 1366375,
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
  "duration": 28529392422,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5928983432,
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
  "duration": 703809283,
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
  "duration": 633363458,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 808093208,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 30606281525,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u00279.TestPaymentMethod_Desk_Eg_payPal_en-20170415_034856.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:47:50 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 03:47:52 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:47:52 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:47:52 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:48:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:48:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:48:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:48:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:48:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:48:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:48:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:48:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:48:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:08 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:48:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:08 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:48:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:48:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:15 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:48:16 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:48:16 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:48:16 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:48:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:48:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:48:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:20 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:20 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:48:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:22 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:48:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:30 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:48:30 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:48:30 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:48:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:48:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:48:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:48:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:33 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:48:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:48:35 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:48:45 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4812115227,
  "status": "passed"
});
formatter.before({
  "duration": 818540,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TestPaymentMethod_Desk_Eg_payPal_en",
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
  "duration": 5264200059,
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
  "duration": 1180038,
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
  "duration": 29546856374,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5819164446,
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
  "duration": 742374241,
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
  "duration": 332657083,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 310659595,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 27956667118,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002710.TestPaymentMethod_Desk_Eg_payPal_en-20170415_035010.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:49:07 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 03:49:10 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:49:10 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:49:10 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:49:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:49:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:49:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:49:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:49:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:49:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:49:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:49:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:49:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:27 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:49:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:27 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:49:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:49:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:33 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:49:34 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:49:34 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:49:34 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:49:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:49:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:49:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:49:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:39 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:49:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:49:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:49:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:49:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:39 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:49:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:49:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:39 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:49:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:49:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:49:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:40 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:49:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:47 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:48 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:49:48 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:49:48 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:49:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:49:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:49:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:49:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:49:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:49:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:49:51 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:49:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:51 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:49:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:49:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:49:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:49:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:49:53 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:50:03 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4025857197,
  "status": "passed"
});
formatter.before({
  "duration": 1158248,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "TestPaymentMethod_Desk_Eg_paySafeCard_en",
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
  "duration": 3649815549,
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
  "duration": 1088406,
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
  "duration": 29020590327,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5770040605,
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
  "duration": 872322599,
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
  "duration": 646259511,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 833434138,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 28212179760,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002711.TestPaymentMethod_Desk_Eg_paySafeCard_en-20170415_035124.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:50:20 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 03:50:22 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:50:22 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:50:22 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:50:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:50:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:50:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:50:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:50:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:50:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:50:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:50:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:50:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:38 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:50:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:38 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:50:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:50:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:40 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:50:47 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:50:47 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:50:47 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:50:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:50:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:50:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:50:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:50:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:50:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:50:50 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:50:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:50 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:50:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:50:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:50:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:51 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:50:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:50:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:50:53 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:50:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:01 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:51:01 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:51:01 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:51:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:51:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:51:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:51:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:51:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:51:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:51:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:51:04 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:51:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:51:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:04 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:51:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:51:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:07 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:51:20 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3935260487,
  "status": "passed"
});
formatter.before({
  "duration": 404521,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "TestPaymentMethod_Desk_Eg_paySafeCard_en",
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
  "duration": 4036126938,
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
  "duration": 888102,
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
  "duration": 28064648720,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2013725487,
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
  "duration": 640706011,
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
  "duration": 372160149,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 306596788,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 27480542638,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002712.TestPaymentMethod_Desk_Eg_paySafeCard_en-20170415_035231.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:51:34 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 03:51:36 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:51:36 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:51:36 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:51:47 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:51:47 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:51:47 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:51:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:51:49 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:49 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:51:49 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:50 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:51:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:50 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:51:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:51:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:51:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:51:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:51:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:55 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:51:56 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:51:56 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:51:56 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:51:59 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:51:59 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:51:59 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:51:59 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:51:59 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:51:59 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:00 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:01 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:52:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:08 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:52:08 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:52:08 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:52:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:52:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:52:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:52:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:52:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:52:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:52:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:52:11 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:52:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:12 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:52:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:52:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:52:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:13 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:52:23 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4336995065,
  "status": "passed"
});
formatter.before({
  "duration": 678857,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "TestPaymentMethod_Desk_Eg_paySafeCard_en",
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
  "duration": 3068281583,
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
  "duration": 705676,
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
  "duration": 26211037995,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 1106666909,
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
  "duration": 749138228,
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
  "duration": 506853525,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 333182569,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 31559247334,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002713.TestPaymentMethod_Desk_Eg_paySafeCard_en-20170415_035339.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:52:40 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 03:52:42 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:52:42 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:52:42 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:52:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:52:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:52:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:52:59 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:52:59 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:52:59 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:52:59 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:52:59 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:53:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:53:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:00 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:53:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:00 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 03:53:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:00 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:53:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:53:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:53:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:53:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:53:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:04 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:53:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:13 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:53:13 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:53:13 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:53:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:53:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:53:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:16 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:53:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:53:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:53:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:53:18 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:53:29 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3955803601,
  "status": "passed"
});
formatter.before({
  "duration": 697295,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "TestPaymentMethod_Desk_Eg_Skrill_en",
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
  "duration": 2663235691,
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
  "duration": 1056558,
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
  "duration": 29811254503,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4832337629,
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
  "duration": 782727134,
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
  "duration": 311328116,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 282840417,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 27972532264,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002714.TestPaymentMethod_Desk_Eg_Skrill_en-20170415_035450.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:53:48 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 03:53:50 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:53:50 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:53:50 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:54:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:54:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:54:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:54:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:54:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:54:06 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 03:54:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:06 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:54:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:06 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:54:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:54:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:54:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:54:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:54:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:08 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:54:15 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:54:15 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:54:15 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:54:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:54:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:54:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:54:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:18 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:54:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:54:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:54:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:19 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:20 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:54:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:27 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:54:27 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:54:27 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:54:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:54:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:54:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:54:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:54:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:54:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:54:30 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:54:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:30 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:54:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:54:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:54:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:54:31 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:31 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:31 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:31 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:31 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:54:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:54:38 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4238061262,
  "status": "passed"
});
formatter.before({
  "duration": 406476,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "TestPaymentMethod_Desk_Eg_Skrill_en",
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
  "duration": 2774186663,
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
  "duration": 807085,
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
  "duration": 27697083848,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5046626596,
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
  "duration": 633675509,
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
  "duration": 304077194,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 411550909,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 30013337728,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002715.TestPaymentMethod_Desk_Eg_Skrill_en-20170415_035601.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:54:59 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 03:55:01 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:55:01 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:55:01 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:55:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:55:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:55:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:55:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:55:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:55:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:55:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:55:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:55:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:15 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:55:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:16 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:55:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:55:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:18 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:55:24 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:55:24 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:55:24 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:55:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:55:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:55:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:55:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:55:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:55:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:55:27 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:28 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:29 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:55:31 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:36 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:37 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:55:37 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:55:37 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:55:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:55:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:55:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:55:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:55:40 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:55:41 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:55:52 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3897252584,
  "status": "passed"
});
formatter.before({
  "duration": 402844,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "TestPaymentMethod_Desk_Eg_Skrill_en",
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
  "duration": 2226322061,
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
  "duration": 577169,
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
  "duration": 29861901722,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5007191138,
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
  "duration": 618841222,
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
  "duration": 362358345,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 314867672,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 31402298336,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002716.TestPaymentMethod_Desk_Eg_Skrill_en-20170415_035715.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:56:09 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 03:56:11 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:56:11 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:56:11 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:56:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:56:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:56:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:56:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:56:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:56:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:56:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:56:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:56:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:28 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:56:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:28 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:56:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:56:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:30 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:56:36 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:56:36 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:56:36 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:56:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:56:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:56:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:56:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:56:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:56:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:56:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:40 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:56:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:40 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:56:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:56:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:56:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:56:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:41 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:56:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:43 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:56:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:56:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:56:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:56:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:56:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:56:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:56:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:56:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:56:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:56:52 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:56:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:53 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:56:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:56:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:56:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:56:54 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:57:08 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3582288252,
  "status": "passed"
});
formatter.before({
  "duration": 562083,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "TestPaymentMethod_Desk_Eg_EcoCard_en",
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
  "duration": 2779594613,
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
  "duration": 825524,
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
  "duration": 26931563090,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5404624330,
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
  "duration": 856197366,
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
  "duration": 341797910,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 336841414,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 30994156800,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002717.TestPaymentMethod_Desk_Eg_EcoCard_en-20170415_035827.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:57:23 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 03:57:25 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:57:25 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:57:25 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:57:36 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 03:57:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:57:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:57:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:57:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:57:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:57:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:39 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:57:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:39 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:57:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:57:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:40 IDT 2017 INFO console-api 7:11 13\r\nSat Apr 15 03:57:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:41 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:57:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:57:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:57:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:57:48 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:57:48 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:57:48 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:57:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:57:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:57:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:57:51 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:52 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:57:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:57:53 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:57:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:01 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:58:01 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:58:01 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:58:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:58:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:58:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:58:04 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:58:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:06 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:58:19 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3992892393,
  "status": "passed"
});
formatter.before({
  "duration": 415695,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "TestPaymentMethod_Desk_Eg_EcoCard_en",
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
  "duration": 2746668920,
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
  "duration": 537220,
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
  "duration": 26024172625,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4725977184,
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
  "duration": 745517098,
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
  "duration": 338386024,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 220359850,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 29660196198,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002718.TestPaymentMethod_Desk_Eg_EcoCard_en-20170415_035935.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:58:35 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 03:58:37 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:58:37 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:58:37 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:58:49 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:58:49 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:58:49 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:58:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:58:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:58:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:58:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:58:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:58:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:52 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:58:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:58 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:58:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:58:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:58:58 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:58:59 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:58:59 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:58:59 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:02 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:02 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:59:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:59:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:59:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:03 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:59:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:11 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:59:11 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:59:11 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:59:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:59:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:59:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 03:59:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:59:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:59:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 03:59:14 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:59:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:14 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 03:59:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:59:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 03:59:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 03:59:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:15 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 03:59:24 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4033037159,
  "status": "passed"
});
formatter.before({
  "duration": 530514,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "TestPaymentMethod_Desk_Eg_EcoCard_en",
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
  "duration": 2358405048,
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
  "duration": 743950,
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
  "duration": 27002481600,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5800689473,
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
  "duration": 760055537,
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
  "duration": 412816433,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 356823005,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 31543148081,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002719.TestPaymentMethod_Desk_Eg_EcoCard_en-20170415_040047.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 03:59:43 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 03:59:45 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:59:45 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 03:59:45 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 03:59:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 03:59:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 03:59:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 03:59:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 03:59:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:00:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:00:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:00:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:00:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:00:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:01 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:00:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:01 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:00:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:01 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:00:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:07 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:00:08 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:00:08 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:00:08 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:00:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:00:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:00:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:00:12 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:12 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:00:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:14 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:00:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:21 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:00:21 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:00:21 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:00:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:00:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:00:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:00:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:00:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:00:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:00:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:25 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:00:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:00:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:00:25 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:00:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:00:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:00:27 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:00:38 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4157024985,
  "status": "passed"
});
formatter.before({
  "duration": 436647,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "TestPaymentMethod_Desk_Eg_LocalBankPayment_en",
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
  "duration": 2931312778,
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
  "duration": 554260,
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
  "duration": 28998869130,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5559679513,
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
  "duration": 1101902337,
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
  "duration": 1238193960,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 305977994,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 30814140904,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002720.TestPaymentMethod_Desk_Eg_LocalBankPayment_en-20170415_040203.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:00:56 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:00:59 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:00:59 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:00:59 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:01:10 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 04:01:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:01:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:01:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:01:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:01:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:01:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:14 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:01:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:14 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:01:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:14 IDT 2017 INFO console-api 7:11 14\r\nSat Apr 15 04:01:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:01:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:16 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:01:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:01:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:01:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:01:23 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:01:23 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:01:23 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:01:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:01:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:01:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:01:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:01:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:01:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:01:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:01:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:01:26 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:01:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:26 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:01:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:27 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:01:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:01:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:29 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:01:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:37 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:01:37 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:01:37 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:01:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:01:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:01:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:01:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:01:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:01:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:01:40 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:01:42 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:01:53 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3730409312,
  "status": "passed"
});
formatter.before({
  "duration": 340825,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "TestPaymentMethod_Desk_Eg_LocalBankPayment_en",
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
  "duration": 2781721979,
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
  "duration": 1080864,
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
  "duration": 27852886889,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5937003166,
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
  "duration": 812301843,
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
  "duration": 293646539,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 244590304,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 30984121446,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002721.TestPaymentMethod_Desk_Eg_LocalBankPayment_en-20170415_040316.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:02:11 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:02:13 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:02:13 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:02:13 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:02:23 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 04:02:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:02:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:02:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:02:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:02:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:02:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:27 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:02:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:28 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:02:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:28 IDT 2017 INFO console-api 7:11 14\r\nSat Apr 15 04:02:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:02:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:02:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:02:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:02:30 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:02:36 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:02:36 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:02:36 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:02:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:02:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:02:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:41 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:02:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:02:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:42 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:02:43 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:49 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:50 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:02:50 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:02:50 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:02:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:02:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:02:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:02:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:53 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:02:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:02:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:02:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:02:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:53 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:02:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:02:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:02:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:02:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:02:55 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:03:04 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3729864271,
  "status": "passed"
});
formatter.before({
  "duration": 392508,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "TestPaymentMethod_Desk_Eg_LocalBankPayment_en",
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
  "duration": 2255131867,
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
  "duration": 820216,
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
  "duration": 28013328231,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 6022069565,
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
  "duration": 873369101,
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
  "duration": 463670662,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 1210540446,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 31901500610,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_desk.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002722.TestPaymentMethod_Desk_Eg_LocalBankPayment_en-20170415_040430.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:03:23 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:03:25 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:03:25 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:03:25 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:03:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:03:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:03:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:03:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:03:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:03:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:40 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:03:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:40 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:03:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:03:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:03:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:03:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:03:43 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:03:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:03:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:03:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:03:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:03:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:03:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:03:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:03:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:03:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:03:53 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:03:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:53 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:03:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:53 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:03:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:03:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:03:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:03:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:55 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:03:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:03:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:04 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:04:04 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:04:04 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:04:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:04:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:04:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:04:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:04:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:04:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Message from CHAT can\u0027t be parsed:\"\r\nSat Apr 15 04:04:07 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:04:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:04:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:04:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:09 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:04:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:04:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:10 IDT 2017 SEVERE https://eurogrand.online-chat-support.com/chat_web/conf/eurogrand_eurogrand-portal/playtechchat 1066:38 \"postMessage is blocked from: https://www.eurogrand.com; command\u003d[object Object]\"\r\nSat Apr 15 04:04:20 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4509860611,
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
  "line": 30,
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
      "line": 31,
      "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;1"
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
      "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;2"
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
      "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;3"
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
      "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;4"
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
      "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;5"
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
      "id": "paymentmethods-mobile;testpaymentmethod-\u003ctype\u003e-\u003cbrand\u003e-\u003cmethod\u003e-\u003clanguage\u003e;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 417092,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TestPaymentMethod_Mobi_Eg_payPal_en",
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
  "duration": 2263662561,
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
  "duration": 1117181,
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
  "duration": 31128257083,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 1577291806,
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
  "duration": 1050290190,
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
  "duration": 509287354,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 464010370,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 30534682760,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002723.TestPaymentMethod_Mobi_Eg_payPal_en-20170415_040543.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:04:39 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:04:42 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:04:42 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:04:42 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:04:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:04:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:04:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:04:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:04:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:04:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:04:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:03 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:05:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:03 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:05:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:05:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:04 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:05:04 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:05:04 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:05:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:05:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:05:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:05:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:08 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:05:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:08 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:05:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:05:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:05:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:05:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:18 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:05:18 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:05:18 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:05:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:05:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:05:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:05:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:05:21 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:05:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:05:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:05:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:05:32 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4111825106,
  "status": "passed"
});
formatter.before({
  "duration": 527162,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TestPaymentMethod_Mobi_Eg_payPal_en",
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
  "duration": 2223218873,
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
  "duration": 741435,
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
  "duration": 25609380801,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5157456884,
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
  "duration": 1123538885,
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
  "duration": 508481944,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 262396478,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 30382930791,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002724.TestPaymentMethod_Mobi_Eg_payPal_en-20170415_040652.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:05:51 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:05:53 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:05:53 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:05:53 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:06:06 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 04:06:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:06:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:06:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:06:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:06:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:06:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:13 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:06:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:13 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:06:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:06:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:13 IDT 2017 INFO console-api 7:11 12\r\nSat Apr 15 04:06:14 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:06:14 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:06:14 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:06:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:06:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:06:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:06:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:06:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:18 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:06:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:06:18 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:06:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:06:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:27 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:06:27 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:06:27 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:06:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:06:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:06:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:06:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:30 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:06:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:06:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:06:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:06:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:06:41 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4195474286,
  "status": "passed"
});
formatter.before({
  "duration": 1385093,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TestPaymentMethod_Mobi_Eg_payPal_en",
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
  "duration": 2988222804,
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
  "duration": 796750,
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
  "duration": 23430483763,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4853854051,
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
  "duration": 902371390,
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
  "duration": 364235399,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 290955974,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 30450756451,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002725.TestPaymentMethod_Mobi_Eg_payPal_en-20170415_040759.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:07:01 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:07:03 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:07:03 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:07:03 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:07:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:07:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:07:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:07:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:07:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:07:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:21 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:07:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:21 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:07:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:07:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:22 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:07:22 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:07:22 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:07:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:07:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:07:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:07:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:26 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:07:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:07:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:07:26 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:07:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:07:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:35 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:07:35 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:07:35 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:07:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:07:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:07:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:07:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:39 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:07:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:07:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:07:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:07:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:07:49 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4037562037,
  "status": "passed"
});
formatter.before({
  "duration": 382731,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "TestPaymentMethod_Mobi_Eg_paySafeCard_en",
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
  "duration": 2861051334,
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
  "duration": 1285639,
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
  "duration": 25057612629,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5346389835,
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
  "duration": 1061801709,
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
  "duration": 703589423,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 201782908,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 30325586073,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002726.TestPaymentMethod_Mobi_Eg_paySafeCard_en-20170415_040909.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:08:09 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:08:11 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:08:11 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:08:11 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:08:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:08:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:08:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:08:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:08:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:08:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:25 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:08:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:25 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:08:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:08:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:31 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:08:31 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:08:31 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:08:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:08:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:08:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:08:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:35 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:08:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:35 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:08:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:36 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:08:36 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:08:36 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:08:36 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:36 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:45 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:08:45 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:08:45 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:08:47 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:08:47 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:08:47 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:47 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:08:47 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:48 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:08:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:08:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:08:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:08:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:49 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:49 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:08:59 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4171010561,
  "status": "passed"
});
formatter.before({
  "duration": 509003,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "TestPaymentMethod_Mobi_Eg_paySafeCard_en",
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
  "duration": 2861410039,
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
  "duration": 1219428,
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
  "duration": 31487598564,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4762922383,
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
  "duration": 1091405751,
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
  "duration": 542002126,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 335962531,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 31744410533,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002727.TestPaymentMethod_Mobi_Eg_paySafeCard_en-20170415_041027.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:09:18 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:09:21 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:09:21 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:09:21 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:09:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:09:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:09:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:09:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:09:36 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:37 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 04:09:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:09:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:39 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:09:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:39 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:09:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:09:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:41 IDT 2017 INFO console-api 7:11 14\r\nSat Apr 15 04:09:47 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:09:47 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:09:47 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:09:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:09:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:09:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:09:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:09:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:09:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:51 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:09:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:51 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:09:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:51 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:09:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:09:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:10:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:10:00 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:10:00 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:10:00 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:10:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:10:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:10:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:10:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:10:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:10:04 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:10:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:10:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:10:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:10:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:10:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:10:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:10:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:10:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:10:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:10:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:10:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:10:16 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4179056277,
  "status": "passed"
});
formatter.before({
  "duration": 499225,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "TestPaymentMethod_Mobi_Eg_paySafeCard_en",
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
  "duration": 2967983641,
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
  "duration": 639467,
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
  "duration": 27311198770,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4377605534,
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
  "duration": 1000187175,
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
  "duration": 407183874,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 261591068,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 30702756635,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002728.TestPaymentMethod_Mobi_Eg_paySafeCard_en-20170415_041138.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:10:35 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:10:37 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:10:37 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:10:37 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:10:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:10:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:10:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:10:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:10:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:10:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:10:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:00 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:11:00 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:11:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:11:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:11:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:11:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:04 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:11:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:04 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:11:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:11:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:11:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:11:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:13 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:11:13 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:11:13 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:11:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:11:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:11:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:11:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:16 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:11:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:11:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:11:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:11:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:11:27 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3924147063,
  "status": "passed"
});
formatter.before({
  "duration": 459276,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "TestPaymentMethod_Mobi_Eg_Skrill_en",
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
  "duration": 2827012930,
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
  "duration": 922464,
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
  "duration": 26355256045,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4866638917,
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
  "duration": 1004090464,
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
  "duration": 524785971,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 326183914,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 30507993893,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002729.TestPaymentMethod_Mobi_Eg_Skrill_en-20170415_041248.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:11:47 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:11:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:11:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:11:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:12:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:12:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:12:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:12:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:12:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:12:04 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:10 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:12:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:10 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:12:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:10 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 04:12:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:12:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:11 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:12:11 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:12:11 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:12:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:12:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:12:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:12:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:14 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:12:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:12:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:12:14 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:12:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:12:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:24 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:12:24 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:12:24 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:12:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:12:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:12:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:12:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:27 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:12:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:12:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:12:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:12:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:12:38 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3916291316,
  "status": "passed"
});
formatter.before({
  "duration": 423517,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "TestPaymentMethod_Mobi_Eg_Skrill_en",
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
  "duration": 2965247818,
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
  "duration": 800940,
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
  "duration": 23694414514,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4030879902,
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
  "duration": 1138268412,
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
  "duration": 355679563,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 273942638,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 29996698743,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002730.TestPaymentMethod_Mobi_Eg_Skrill_en-20170415_041355.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:12:57 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:12:59 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:12:59 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:12:59 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:13:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:13:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:13:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:13:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:13:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:13:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:18 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:13:18 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:13:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:13:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:13:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:13:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:22 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:13:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:22 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:13:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:13:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:13:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:13:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:22 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:30 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:13:30 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:13:30 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:13:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:13:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:13:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:13:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:13:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:13:34 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:13:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:13:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:35 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:13:44 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3687573141,
  "status": "passed"
});
formatter.before({
  "duration": 1292064,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "TestPaymentMethod_Mobi_Eg_Skrill_en",
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
  "duration": 2567097494,
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
  "duration": 1017169,
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
  "duration": 26654118610,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4731898607,
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
  "duration": 986196290,
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
  "duration": 612880128,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 266571590,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 29410649119,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002731.TestPaymentMethod_Mobi_Eg_Skrill_en-20170415_041504.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:14:03 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:14:05 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:14:05 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:14:05 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:14:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:14:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:14:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:14:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:14:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:14:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:27 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:14:27 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:14:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:14:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:14:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:31 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:14:31 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:31 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:31 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:14:31 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:14:32 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:14:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:14:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:14:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:40 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:14:40 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:14:40 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:14:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:14:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:14:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:14:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:43 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:14:44 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:14:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:14:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:14:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:45 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:14:53 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3972457114,
  "status": "passed"
});
formatter.before({
  "duration": 563480,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "TestPaymentMethod_Mobi_Eg_EcoCard_en",
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
  "duration": 2577107985,
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
  "duration": 805410,
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
  "duration": 27785841776,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4895470514,
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
  "duration": 897737840,
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
  "duration": 438095344,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 226805362,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 29364944427,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002732.TestPaymentMethod_Mobi_Eg_EcoCard_en-20170415_041614.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:15:13 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:15:15 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:15:15 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:15:15 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:15:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:15:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:15:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:15:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:15:31 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:31 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:15:31 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:32 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:15:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:32 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:15:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:32 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:15:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:38 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:15:38 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:15:38 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:15:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:15:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:15:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:15:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:41 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:15:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:41 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:15:42 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:15:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:15:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:15:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:43 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:43 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:43 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:43 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:45 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:50 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:50 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:15:50 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:15:50 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:15:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:15:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:15:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:15:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:15:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:15:54 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:15:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:15:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:15:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:04 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3700461092,
  "status": "passed"
});
formatter.before({
  "duration": 346692,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "TestPaymentMethod_Mobi_Eg_EcoCard_en",
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
  "duration": 2765519082,
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
  "duration": 893130,
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
  "duration": 32170078041,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5533778735,
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
  "duration": 1130506810,
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
  "duration": 583354309,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 262744288,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 29988432050,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002733.TestPaymentMethod_Mobi_Eg_EcoCard_en-20170415_041731.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:16:23 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:16:25 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:16:25 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:16:25 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:16:41 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 04:16:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:16:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:16:42 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:43 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:16:43 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:16:43 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:16:43 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:44 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:16:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:44 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:16:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:44 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:16:45 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:45 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:45 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:51 IDT 2017 INFO console-api 7:11 15\r\nSat Apr 15 04:16:52 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:16:52 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:16:52 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:16:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:16:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:16:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:16:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:56 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:16:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:16:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:16:57 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:16:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:16:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:16:58 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:00 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:06 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:17:06 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:17:06 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:17:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:17:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:17:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:17:09 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:17:10 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:17:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:17:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:17:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:20 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4029457934,
  "status": "passed"
});
formatter.before({
  "duration": 740877,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "TestPaymentMethod_Mobi_Eg_EcoCard_en",
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
  "duration": 2747183790,
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
  "duration": 614883,
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
  "duration": 26122877349,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4412149868,
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
  "duration": 1241991091,
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
  "duration": 590326983,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 296285701,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 30525964333,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002734.TestPaymentMethod_Mobi_Eg_EcoCard_en-20170415_041841.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:17:39 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:17:41 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:17:41 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:17:41 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:17:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:17:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:17:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:17:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:17:55 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:17:56 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:17:57 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:02 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:18:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:02 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:18:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:02 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 04:18:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:18:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:03 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:18:03 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:18:03 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:18:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:18:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:18:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:07 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:07 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:08 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:10 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:16 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:18:16 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:18:16 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:18:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:18:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:18:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:18:18 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:19 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:18:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:18:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:18:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:18:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:20 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:21 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:18:30 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3912363722,
  "status": "passed"
});
formatter.before({
  "duration": 382730,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "TestPaymentMethod_Mobi_Eg_LocalBankPayment_en",
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
  "duration": 2078917293,
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
  "duration": 930286,
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
  "duration": 25484003693,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4919568548,
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
  "duration": 1284635617,
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
  "duration": 585731147,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 304839581,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 30120323673,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002735.TestPaymentMethod_Mobi_Eg_LocalBankPayment_en-20170415_041950.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:18:49 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:18:51 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:18:51 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:18:51 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:19:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:19:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:19:02 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:19:03 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:19:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:05 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:19:06 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:11 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:19:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:11 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\nSat Apr 15 04:19:11 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:19:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:19:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:12 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:19:12 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:19:12 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:19:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:19:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:19:15 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:19:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:16 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:19:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:16 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:19:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:16 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:19:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:19:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:19:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:17 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:25 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:19:25 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:19:25 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:19:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:19:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:19:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:19:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:19:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:19:29 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:19:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:19:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:30 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:19:39 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4137779801,
  "status": "passed"
});
formatter.before({
  "duration": 1520864,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "TestPaymentMethod_Mobi_Eg_LocalBankPayment_en",
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
  "duration": 2549005809,
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
  "duration": 637791,
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
  "duration": 28365835881,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 1832987712,
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
  "duration": 1300095962,
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
  "duration": 529867344,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 245454939,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 31171408098,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002736.TestPaymentMethod_Mobi_Eg_LocalBankPayment_en-20170415_042100.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:19:58 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:20:00 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:20:00 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:20:00 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:20:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:20:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:20:11 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:20:12 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:20:13 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:20:14 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:19 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:20:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:19 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:20:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:20:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:19 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:20 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:20:20 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:20:20 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:20:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:20:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:20:23 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:20:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:20:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:20:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:25 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:20:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:25 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:20:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:20:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:26 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:29 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:34 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:34 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:20:34 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:20:34 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:20:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:20:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:20:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:20:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:38 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:20:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:20:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:20:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:20:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:20:50 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 4757255741,
  "status": "passed"
});
formatter.before({
  "duration": 476317,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "TestPaymentMethod_Mobi_Eg_LocalBankPayment_en",
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
  "duration": 3284144773,
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
  "duration": 632762,
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
  "duration": 30555721746,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2014023570,
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
  "duration": 1390157967,
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
  "duration": 730580004,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 530958264,
  "status": "passed"
});
formatter.match({
  "location": "DepositPage.miguser_read_the_Current_Balance_with_css()"
});
formatter.result({
  "duration": 31464459030,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.williamhill.whgtf.asl.AutomationScriptingLanguage.assertTrue(AutomationScriptingLanguage.java:3130)\r\n\tat stepdefs.casino.migration.DepositPage.miguser_read_the_Current_Balance_with_css(DepositPage.java:236)\r\n\tat ✽.Then migUser read the Current Balance(casino/migration/PaymentMethodsTest_mobi.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DepositPage.user_click_on_Deposit_top_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("\u003cimg src\u003d\u002737.TestPaymentMethod_Mobi_Eg_LocalBankPayment_en-20170415_042215.png\u0027 alt\u003d\u0027screenShoot\u0027 \u003e");
formatter.write("The console:\r\nSat Apr 15 04:21:10 IDT 2017 FINE http://cachestatic.eurogrand.com/functions.js 6:12 \"\u003d\u003d\u003d YES \u003d\u003d\u003d\"\r\nSat Apr 15 04:21:12 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:21:12 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:21:12 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:21:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:21:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:21:24 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:21:25 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:21:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:27 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:21:28 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:33 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:21:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:33 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:21:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:21:33 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:34 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:21:34 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:21:34 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:21:37 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:21:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:21:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:21:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:38 IDT 2017 SEVERE https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 88:38 \"PAS login is failed. Cookie doesn\u0027t exists.\"\r\nSat Apr 15 04:21:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:21:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:21:38 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:39 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:21:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:21:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:39 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:40 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:43 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:48 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:21:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] Creating viewport with next content: user-scalable\u003dno, initial-scale\u003d0.8, maximum-scale\u003d0.8, minimum-scale\u003d0.8\"\r\nSat Apr 15 04:21:49 IDT 2017 INFO https://www.eurogrand.com/en/?js_fast_load\u003d0 0:51229 \"[INFO] [viewport.js] ----------------------------------------------------------------\"\r\nSat Apr 15 04:21:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"URL for ims not configure in org settings\"\r\nSat Apr 15 04:21:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Try to connect to Open API :\"\r\nSat Apr 15 04:21:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier initialized\"\r\nSat Apr 15 04:21:52 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:53 IDT 2017 INFO console-api 198:9 \"Error: Module name \\\"playtech.dy.analytic\\\" has not been loaded yet for context: _. Use require([])\\nhttp://requirejs.org/docs/errors.html#notloaded\\n    at makeError (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:168:17)\\n    at Object.localRequire [as require] (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1433:44)\\n    at requirejs (https://www.eurogrand.com/mobile-portlet/js/components/requirejs/require.js:1794:24)\\n    at \\u003Canonymous\u003e:191:5160\\n    at Object.evalJavaScript (https://www.eurogrand.com/mobile-portlet/js/app-out/util/common.util.js:158:18)\\n    at klass.handleDataReceiving (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/app.model.js:111:19)\\n    at klass.\\u003Canonymous\u003e (https://www.eurogrand.com/mobile-portlet/js/app-out/modules/app/eurogrand-desktop-theme/app.model.js:55:32)\\n    at execute (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:67:35)\\n    at Deferred.resolve (https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:152:11)\\n    at https://www.eurogrand.com/mobile-portlet/js/components/simply-deferred/deferred.js:189:30\"\r\nSat Apr 15 04:21:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Open API server connected\"\r\nSat Apr 15 04:21:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"IMS server connected\"\r\nSat Apr 15 04:21:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"Push notifier started\"\r\nSat Apr 15 04:21:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:53 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:21:54 IDT 2017 INFO https://www.eurogrand.com/mobile-portlet/js/app-out/util/logger.util.js 91:36 \"%c [%s %s]: %O | %s | %s\"\r\nSat Apr 15 04:22:04 IDT 2017 INFO console-api 14:12 \"idle time started\"\r\n");
formatter.after({
  "duration": 3808526782,
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
  "duration": 340546,
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
  "duration": 2955654140,
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
  "duration": 1076114,
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
  "duration": 33512232700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2461737456,
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
  "duration": 5362798065,
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
  "duration": 691825637,
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
  "duration": 1024583571,
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
  "duration": 2092812634,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415042307");
formatter.result({
  "duration": 1365073494,
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
  "duration": 1212310503,
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
  "duration": 925489692,
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
  "duration": 4720497996,
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
  "duration": 3545589733,
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
  "duration": 733615306,
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
  "duration": 549778812,
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
  "duration": 1696313358,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 53638,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 492866552,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4902472801,
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
  "duration": 6141662138,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.not_visible_Timeout()"
});
formatter.result({
  "duration": 5147981936,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.not_visible_SelfExclude()"
});
formatter.result({
  "duration": 2118282631,
  "status": "passed"
});
formatter.after({
  "duration": 1668763488,
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
  "duration": 457321,
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
  "duration": 3307614795,
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
  "duration": 699530,
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
  "duration": 26890401713,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4292251390,
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
  "duration": 5418026034,
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
  "duration": 687760037,
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
  "duration": 478764480,
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
  "duration": 554710445,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415042424");
formatter.result({
  "duration": 450292146,
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
  "duration": 345436362,
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
  "duration": 263720389,
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
  "duration": 1188389307,
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
  "duration": 1931458607,
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
  "duration": 2623425044,
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
  "duration": 409306769,
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
  "duration": 226788600,
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
  "duration": 350419118,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 49447,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 349294393,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3446027078,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Menu()"
});
formatter.write("Start open menu");
formatter.result({
  "duration": 4510966617,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_my_account()"
});
formatter.result({
  "duration": 1161168528,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Responsible_Gaming()"
});
formatter.result({
  "duration": 2308546198,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.not_visible_Timeout()"
});
formatter.result({
  "duration": 5077997902,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.not_visible_SelfExclude()"
});
formatter.result({
  "duration": 2052649709,
  "status": "passed"
});
formatter.after({
  "duration": 2118634631,
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
  "duration": 431899,
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
  "duration": 3765652898,
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
  "duration": 725232,
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
  "duration": 30984904226,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5717247583,
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
  "duration": 5565170154,
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
  "duration": 668191348,
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
  "duration": 977163857,
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
  "duration": 1988392380,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415042543");
formatter.result({
  "duration": 598948470,
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
  "duration": 981450156,
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
  "duration": 957577849,
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
  "duration": 3590779834,
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
  "duration": 16144230342,
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
  "duration": 1432997769,
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
  "duration": 641620373,
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
  "duration": 2027157362,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 75987,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 551121441,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4722200168,
  "status": "passed"
});
formatter.after({
  "duration": 1643290697,
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
  "duration": 549232,
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
  "duration": 3470472644,
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
  "duration": 1140089,
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
  "duration": 25905416750,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 4399308292,
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
  "duration": 5523186047,
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
  "duration": 621894124,
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
  "duration": 407154261,
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
  "duration": 499411517,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415042658");
formatter.result({
  "duration": 542789377,
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
  "duration": 413056128,
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
  "duration": 301671302,
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
  "duration": 541161795,
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
  "duration": 2126647102,
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
  "duration": 9049685365,
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
  "duration": 483872951,
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
  "duration": 332391966,
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
  "duration": 589029891,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 95543,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 429890391,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3412559697,
  "status": "passed"
});
formatter.after({
  "duration": 1917721107,
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
  "duration": 328254,
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
  "duration": 3124038670,
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
  "duration": 576050,
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
  "duration": 29345622140,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5636484246,
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
  "duration": 5760705900,
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
  "duration": 934847306,
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
  "duration": 1773579603,
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
  "duration": 1762441315,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415042807");
formatter.result({
  "duration": 2030867890,
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
  "duration": 763667170,
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
  "duration": 1484922525,
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
  "duration": 4074961762,
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
  "duration": 14294458653,
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
  "duration": 690032951,
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
  "duration": 921987013,
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
  "duration": 1700528698,
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
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 615210872,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 5617107482,
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
  "duration": 5770966422,
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
  "duration": 3363999894,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Set_exclude()"
});
formatter.result({
  "duration": 529417565,
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
  "duration": 2522817565,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_ok()"
});
formatter.result({
  "duration": 5396008711,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 61356775791,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "duration": 705479886,
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
  "duration": 545346965,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 2671623349,
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
  "duration": 2331307750,
  "status": "passed"
});
formatter.after({
  "duration": 2368450739,
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
  "duration": 367086,
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
  "duration": 4625223317,
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
  "duration": 1207974,
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
  "duration": 32014619176,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 2695291720,
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
  "duration": 5478894106,
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
  "duration": 474902816,
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
  "duration": 345943130,
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
  "duration": 768986002,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415043054");
formatter.result({
  "duration": 501028762,
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
  "duration": 410922059,
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
  "duration": 346843244,
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
  "duration": 749142139,
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
  "duration": 2880926766,
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
  "duration": 9870859006,
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
  "duration": 518684358,
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
  "duration": 262857710,
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
  "duration": 423693514,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 45257,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 330996817,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3548861378,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Menu()"
});
formatter.write("Start open menu");
formatter.result({
  "duration": 4072329305,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_my_account()"
});
formatter.result({
  "duration": 931957833,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Responsible_Gaming()"
});
formatter.result({
  "duration": 2370542066,
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
  "duration": 2450089886,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Set_exclude()"
});
formatter.result({
  "duration": 453074064,
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
  "duration": 2468564580,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_ok()"
});
formatter.result({
  "duration": 5545761822,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 1058056820,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "duration": 1238331688,
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
  "duration": 617243532,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 2415985271,
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
  "duration": 2331397147,
  "status": "passed"
});
formatter.after({
  "duration": 1803123023,
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
  "duration": 620469,
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
  "duration": 5320008269,
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
  "duration": 774400,
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
  "duration": 29959136706,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5277560696,
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
  "duration": 5625981794,
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
  "duration": 735271383,
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
  "duration": 1003388140,
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
  "duration": 2079597267,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415043232");
formatter.result({
  "duration": 757295410,
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
  "duration": 1437657580,
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
  "duration": 656605797,
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
  "duration": 3456595740,
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
  "duration": 12633265122,
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
  "duration": 1258646280,
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
  "duration": 402748394,
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
  "duration": 1165883932,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 44419,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 815460904,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4445166355,
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
  "duration": 5791477688,
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
  "duration": 6121060359,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_save_TimeOut()"
});
formatter.result({
  "duration": 380914614,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Successfull_timeOut_ok_click()"
});
formatter.result({
  "duration": 560903690,
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
  "duration": 2381717230,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_Timeout_ok()"
});
formatter.result({
  "duration": 5279306169,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Logout_msg_OK_click()"
});
formatter.result({
  "duration": 5278948861,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 874977686,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "duration": 612954160,
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
  "duration": 356882230,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.migUser_Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 213518478,
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
  "duration": 2180731350,
  "status": "passed"
});
formatter.after({
  "duration": 1952988159,
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
  "duration": 365410,
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
  "duration": 3594801574,
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
  "duration": 703162,
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
  "duration": 24945075143,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 5049563282,
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
  "duration": 5319940104,
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
  "duration": 472761202,
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
  "duration": 311486795,
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
  "duration": 456137302,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415043411");
formatter.result({
  "duration": 352589785,
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
  "duration": 504560496,
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
  "duration": 297556254,
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
  "duration": 560144097,
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
  "duration": 2221304104,
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
  "duration": 8433291661,
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
  "duration": 365439183,
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
  "duration": 343395878,
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
  "duration": 447107942,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 46375,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 363020719,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3909415024,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Menu()"
});
formatter.write("Start open menu");
formatter.result({
  "duration": 4697389194,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_my_account()"
});
formatter.result({
  "duration": 902066883,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_open_Responsible_Gaming()"
});
formatter.result({
  "duration": 2454915639,
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
  "duration": 5710983659,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_save_TimeOut()"
});
formatter.result({
  "duration": 509071963,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Successfull_timeOut_ok_click()"
});
formatter.result({
  "duration": 686112341,
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
  "duration": 2316653374,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Click_on_Timeout_ok()"
});
formatter.result({
  "duration": 5302357143,
  "status": "passed"
});
formatter.match({
  "location": "PaymentsPage.user_Logout_msg_OK_click()"
});
formatter.result({
  "duration": 5394338107,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_top_button_on_main_page()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 423672283,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.user_Fill_Last_Username_in_popup_window()"
});
formatter.result({
  "duration": 1159055970,
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
  "duration": 532612944,
  "status": "passed"
});
formatter.match({
  "location": "MainWebPage.Click_on_LOGIN_Butten_in_popup_window()"
});
formatter.result({
  "duration": 2298206615,
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
  "duration": 2232163585,
  "status": "passed"
});
formatter.after({
  "duration": 1571597508,
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
  "duration": 279924,
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
  "duration": 4034232284,
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
  "duration": 586108,
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
  "duration": 29704966972,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 6419154390,
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
  "duration": 5561446776,
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
  "duration": 761212948,
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
  "duration": 1971699475,
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
  "duration": 1259478509,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415043556");
formatter.result({
  "duration": 1643593250,
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
  "duration": 882909141,
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
  "duration": 756271258,
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
  "duration": 4599132571,
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
  "duration": 12153719816,
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
  "duration": 508689792,
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
  "duration": 429198962,
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
  "duration": 670081254,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.select_currency_GBP()"
});
formatter.result({
  "duration": 35759,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.click_on_Create_Account()"
});
formatter.result({
  "duration": 833987839,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 4184256937,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_Admin()"
});
formatter.result({
  "duration": 6861944186,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Username_in_popup_window()"
});
formatter.result({
  "duration": 446781923,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Password_in_popup_window()"
});
formatter.result({
  "duration": 201561930,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Submit()"
});
formatter.result({
  "duration": 1524416930,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_AdminSearchUserUrl()"
});
formatter.result({
  "duration": 5123477146,
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
  "duration": 5705094921,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Select_internalaccount()"
});
formatter.result({
  "duration": 5446831371,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Click_Submit()"
});
formatter.result({
  "duration": 1375775134,
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
  "duration": 5607281931,
  "status": "passed"
});
formatter.after({
  "duration": 2061948656,
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
  "duration": 371835,
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
  "duration": 3579774804,
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
  "duration": 757359,
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
  "duration": 13619757818,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.Click_Register_top_Butten()"
});
formatter.write("Start Login");
formatter.result({
  "duration": 12112507874,
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
  "duration": 5439770697,
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
  "duration": 660411588,
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
  "duration": 350195905,
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
  "duration": 665579285,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.fill_user_name_with_timestamp()"
});
formatter.write("username: 170415043734");
formatter.result({
  "duration": 470307539,
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
  "duration": 379270549,
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
  "duration": 359172464,
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
  "duration": 583176912,
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
  "duration": 2619643558,
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
  "duration": 8807234159,
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
  "duration": 366187602,
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
  "duration": 271145635,
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
  "duration": 400734172,
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
  "duration": 330739801,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPage.miguser_Account_was_Created_Msg_with_css_and_deposit()"
});
formatter.result({
  "duration": 3521132714,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_Admin()"
});
formatter.result({
  "duration": 5887041789,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Username_in_popup_window()"
});
formatter.result({
  "duration": 464635310,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Fill_Password_in_popup_window()"
});
formatter.result({
  "duration": 224351977,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Submit()"
});
formatter.result({
  "duration": 1562121163,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_is_navigating_to_Playtech_AdminSearchUserUrl()"
});
formatter.result({
  "duration": 4662936770,
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
  "duration": 5557927055,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Select_internalaccount()"
});
formatter.result({
  "duration": 5274312797,
  "status": "passed"
});
formatter.match({
  "location": "Test_PT_Advertiser.user_Click_Submit()"
});
formatter.result({
  "duration": 1231255369,
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
  "duration": 5651669975,
  "status": "passed"
});
formatter.after({
  "duration": 1789700925,
  "status": "passed"
});
});