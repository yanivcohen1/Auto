$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Login with guest account \u003cparam1\u003e",
  "description": "",
  "id": "login;login-with-guest-account-\u003cparam1\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a precondition has value \u003cparam1\u003e val \u003cparam2\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "something with \u003cparam2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "check \u003cparam3\u003e is the output",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;login-with-guest-account-\u003cparam1\u003e;",
  "rows": [
    {
      "cells": [
        "param1",
        "param2",
        "param3"
      ],
      "line": 16,
      "id": "login;login-with-guest-account-\u003cparam1\u003e;;1"
    },
    {
      "cells": [
        "value11",
        "value12",
        "value13"
      ],
      "line": 17,
      "id": "login;login-with-guest-account-\u003cparam1\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2947020588,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login with guest account value11",
  "description": "",
  "id": "login;login-with-guest-account-\u003cparam1\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a precondition has value value11 val value12",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "something with value12",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "check value13 is the output",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 30
    },
    {
      "val": "12",
      "offset": 42
    }
  ],
  "location": "GamingStepDef.a_precondition_has_value_value_val_value(int,int)"
});
formatter.result({
  "duration": 1582805638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 20
    }
  ],
  "location": "GamingStepDef.something_with_value(int)"
});
formatter.result({
  "duration": 201300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 11
    }
  ],
  "location": "GamingStepDef.check_value_is_the_output(int)"
});
formatter.result({
  "duration": 6185352,
  "error_message": "java.lang.AssertionError: expected [13] but found [33]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertEquals(Assert.java:123)\r\n\tat org.testng.Assert.assertEquals(Assert.java:370)\r\n\tat org.testng.Assert.assertEquals(Assert.java:380)\r\n\tat stepdefs.gaming.GamingStepDef.check_value_is_the_output(GamingStepDef.java:38)\r\n\tat ✽.Then check value13 is the output(login.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 25825,
  "status": "passed"
});
formatter.before({
  "duration": 1427661982,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 21,
      "value": "#| value21 | value22 | value23 |"
    }
  ],
  "line": 22,
  "name": "Login with guest account value31",
  "description": "",
  "id": "login;login-with-guest-account-\u003cparam1\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a precondition has value value31 val value32",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "something with value32",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "check value33 is the output",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "31",
      "offset": 30
    },
    {
      "val": "32",
      "offset": 42
    }
  ],
  "location": "GamingStepDef.a_precondition_has_value_value_val_value(int,int)"
});
formatter.result({
  "duration": 708801462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 20
    }
  ],
  "location": "GamingStepDef.something_with_value(int)"
});
formatter.result({
  "duration": 155941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "33",
      "offset": 11
    }
  ],
  "location": "GamingStepDef.check_value_is_the_output(int)"
});
formatter.result({
  "duration": 228781,
  "status": "passed"
});
formatter.after({
  "duration": 16223,
  "status": "passed"
});
formatter.before({
  "duration": 689763015,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 21,
      "value": "#| value21 | value22 | value23 |"
    }
  ],
  "line": 22,
  "name": "Login with guest account value31",
  "description": "",
  "id": "login;login-with-guest-account-\u003cparam1\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a precondition has value value31 val value32",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "something with value32",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "check value33 is the output",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "31",
      "offset": 30
    },
    {
      "val": "32",
      "offset": 42
    }
  ],
  "location": "GamingStepDef.a_precondition_has_value_value_val_value(int,int)"
});
formatter.result({
  "duration": 629033540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 20
    }
  ],
  "location": "GamingStepDef.something_with_value(int)"
});
formatter.result({
  "duration": 197990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "33",
      "offset": 11
    }
  ],
  "location": "GamingStepDef.check_value_is_the_output(int)"
});
formatter.result({
  "duration": 348633,
  "status": "passed"
});
formatter.after({
  "duration": 28804,
  "status": "passed"
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login;login-with-guest-account-\u003cparam1\u003e;",
  "rows": [
    {
      "cells": [
        "param1",
        "param2",
        "param3"
      ],
      "line": 20,
      "id": "login;login-with-guest-account-\u003cparam1\u003e;;1"
    },
    {
      "comments": [
        {
          "line": 21,
          "value": "#| value21 | value22 | value23 |"
        }
      ],
      "cells": [
        "value31",
        "value32",
        "value33"
      ],
      "line": 22,
      "id": "login;login-with-guest-account-\u003cparam1\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 64352715999,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 21,
      "value": "#| value21 | value22 | value23 |"
    }
  ],
  "line": 22,
  "name": "Login with guest account value31",
  "description": "",
  "id": "login;login-with-guest-account-\u003cparam1\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "a precondition has value value31 val value32",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "something with value32",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "check value33 is the output",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "31",
      "offset": 30
    },
    {
      "val": "32",
      "offset": 42
    }
  ],
  "location": "GamingStepDef.a_precondition_has_value_value_val_value(int,int)"
});
formatter.result({
  "duration": 780061131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 20
    }
  ],
  "location": "GamingStepDef.something_with_value(int)"
});
formatter.result({
  "duration": 213551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "33",
      "offset": 11
    }
  ],
  "location": "GamingStepDef.check_value_is_the_output(int)"
});
formatter.result({
  "duration": 182098,
  "status": "passed"
});
formatter.after({
  "duration": 56284,
  "status": "passed"
});
});