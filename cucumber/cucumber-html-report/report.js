$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Perform search in google \u003coddType\u003e",
  "description": "",
  "id": "perform-search-in-google-\u003coddtype\u003e",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#@FormatOdds"
    },
    {
      "line": 4,
      "value": "#Scenario Outline: Format Odds"
    },
    {
      "line": 5,
      "value": "#    Given the user is on the Sportsbook Homepage"
    },
    {
      "line": 6,
      "value": "#    When they change the odds to \u003coddType\u003e"
    },
    {
      "line": 7,
      "value": "#    Then bets are available in \u003cseperetor\u003e format"
    },
    {
      "line": 8,
      "value": "#    Examples:"
    },
    {
      "line": 9,
      "value": "#      | oddType  | seperetor |"
    },
    {
      "line": 10,
      "value": "#      | DECIMAL  | .\t\t |"
    },
    {
      "line": 11,
      "value": "#      | AMERICAN | +,-\t\t |"
    }
  ],
  "line": 14,
  "name": "Format Odds2 \u003coddType\u003e",
  "description": "",
  "id": "perform-search-in-google-\u003coddtype\u003e;format-odds2-\u003coddtype\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "test \u003coddType\u003e",
  "keyword": "Given "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "perform-search-in-google-\u003coddtype\u003e;format-odds2-\u003coddtype\u003e;",
  "rows": [
    {
      "cells": [
        "oddType",
        "seperetor"
      ],
      "line": 19,
      "id": "perform-search-in-google-\u003coddtype\u003e;format-odds2-\u003coddtype\u003e;;1"
    },
    {
      "cells": [
        "ODDS1",
        "a1"
      ],
      "line": 20,
      "id": "perform-search-in-google-\u003coddtype\u003e;format-odds2-\u003coddtype\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 202956,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Format Odds2 ODDS1",
  "description": "",
  "id": "perform-search-in-google-\u003coddtype\u003e;format-odds2-\u003coddtype\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "test ODDS1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GamingStepDef.test_ODDS(int)"
});
formatter.result({
  "duration": 134439845,
  "status": "passed"
});
formatter.after({
  "duration": 31453,
  "status": "passed"
});
formatter.examples({
  "comments": [
    {
      "line": 21,
      "value": "#| ODDS2    | ab\t     |"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "perform-search-in-google-\u003coddtype\u003e;format-odds2-\u003coddtype\u003e;",
  "rows": [
    {
      "cells": [
        "oddType",
        "seperetor"
      ],
      "line": 25,
      "id": "perform-search-in-google-\u003coddtype\u003e;format-odds2-\u003coddtype\u003e;;1"
    },
    {
      "cells": [
        "ODDS2",
        "a2"
      ],
      "line": 26,
      "id": "perform-search-in-google-\u003coddtype\u003e;format-odds2-\u003coddtype\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 172827,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Format Odds2 ODDS2",
  "description": "",
  "id": "perform-search-in-google-\u003coddtype\u003e;format-odds2-\u003coddtype\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "test ODDS2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "GamingStepDef.test_ODDS(int)"
});
formatter.result({
  "duration": 376776,
  "status": "passed"
});
formatter.after({
  "duration": 59264,
  "status": "passed"
});
});