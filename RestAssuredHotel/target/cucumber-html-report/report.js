$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/application/restApi.feature");
formatter.feature({
  "name": "A description",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "End to End",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a new hotel customer with \"\u003cemail\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Set request body",
  "keyword": "When "
});
formatter.step({
  "name": "Send Post HTTP request",
  "keyword": "And "
});
formatter.step({
  "name": "Able to view added customer",
  "keyword": "And "
});
formatter.step({
  "name": "Able to delete added customer",
  "keyword": "And "
});
formatter.step({
  "name": "Able to view valid HTTP response code",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email"
      ]
    },
    {
      "cells": [
        "priya@mail.net"
      ]
    },
    {
      "cells": [
        "priya1qwq@mail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "End to End",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a new hotel customer with \"priya@mail.net\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.addUser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Set request body",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.setRequestBody()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send Post HTTP request",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.postHttpRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Able to view added customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.viewAddedCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Able to delete added customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.deleteAddedCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Able to view valid HTTP response code",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "End to End",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a new hotel customer with \"priya1qwq@mail.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.addUser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Set request body",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.setRequestBody()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send Post HTTP request",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.postHttpRequest()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Please provide valid email id\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat stepdefinitions.RestEnd2End.postHttpRequest(RestEnd2End.java:71)\n\tat ✽.Send Post HTTP request(file:///Users/sakthi/Desktop/SoapUiAWS/src/test/resources/application/restApi.feature:9)\n",
  "status": "failed"
});
formatter.step({
  "name": "Able to view added customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.viewAddedCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Able to delete added customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.deleteAddedCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Able to view valid HTTP response code",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.response()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add User",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am a new hotel customer",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.newHotelCust()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Set request body",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.setRequestBody()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send Post HTTP request",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.postHttpRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Able to view valid HTTP response code",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get User",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am a existing hotel customer",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.deleteUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "execute via restAssured for view user",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.executedViaRestAssuredViewUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Able to view valid HTTP response code",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete User",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am a existing hotel customer",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.deleteUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "execute via restAssured for delete user",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.executedViaRestAssuredDeleteUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Able to view valid HTTP response code",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.RestEnd2End.response()"
});
formatter.result({
  "status": "passed"
});
});