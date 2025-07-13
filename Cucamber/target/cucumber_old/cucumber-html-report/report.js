$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Login with guest account2",
  "description": "",
  "id": "login;login-with-guest-account2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "a precondition has value \u003cparam1\u003e val \u003cparam2\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "something with \u003cparam2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "check \u003cparam3\u003e is the output",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "login;login-with-guest-account2;",
  "rows": [
    {
      "cells": [
        "param1",
        "param2",
        "param3"
      ],
      "line": 21,
      "id": "login;login-with-guest-account2;;1"
    },
    {
      "comments": [
        {
          "line": 22,
          "value": "#| value21 | value22 | value23 |"
        }
      ],
      "cells": [
        "value31",
        "value32",
        "value33"
      ],
      "line": 23,
      "id": "login;login-with-guest-account2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4610437992,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "#| value21 | value22 | value23 |"
    }
  ],
  "line": 23,
  "name": "Login with guest account2",
  "description": "",
  "id": "login;login-with-guest-account2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "a precondition has value value31 val value32",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "something with value32",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
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
  "duration": 7284053741,
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
  "duration": 120185,
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
  "duration": 2311652,
  "status": "passed"
});
formatter.after({
  "duration": 33771,
  "status": "passed"
});
});