package com.who.auto.records

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

import io.gatling.http.response._
import java.nio.charset.StandardCharsets.UTF_8

class RecordedSimulation3 extends Simulation {

	val httpProtocol = http
		.baseURL("https://oapi.digitalarea1000.com")
		.inferHtmlResources()
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en")
		.doNotTrackHeader("1")
		.userAgentHeader("Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko")

	val headers_0 = Map(
		"Content-Type" -> "text/plain;charset=UTF-8",
		"Origin" -> "https://src-www-stg.eurogrand.com")

	val headers_1 = Map("Origin" -> "https://src-www-stg.eurogrand.com")
	
  val uri1 = "https://oapi.digitalarea1000.com:443/socket.io/1/xhr-polling/e1044aa2-0492-4089-a971-cd42fd208907"
  
  var body1 = ""
	val scn = scenario("RecordedSimulation3")
		.exec(http("request_0")
			.post("/socket.io/1/xhr-polling/e1044aa2-0492-4089-a971-cd42fd208907?t=1474985661308")
			.headers(headers_0)
			.body(RawFileBody("RecordedSimulation3_0000_request.txt"))
			.resources(http("request_1")
			.get(uri1 + "?t=1474985649695")
			.headers(headers_1),
            http("request_2")
			.post(uri1 + "?t=1474985661452")
			.headers(headers_0)
			.body(RawFileBody("RecordedSimulation3_0002_request.txt"))
			.transformResponse { case response if response.isReceived =>
                  new ResponseWrapper(response) {
                    body1 = response.body.string
                    println("body=> " + body1)
                    println("cookies:")
                    response.cookies.foreach { println }
                  }
               }   
			,
            http("request_3")
			.get(uri1 + "?t=1474985661453")
			.headers(headers_1),
            http("request_4")
			.post(uri1 + "?t=1474985661640")
			.headers(headers_0)
			.body(RawFileBody("RecordedSimulation3_0004_request.txt")),
            http("request_5")
			.get(uri1 + "?t=1474985661641")
			.headers(headers_1),
            http("request_6")
			.post(uri1 + "?t=1474985661851")
			.headers(headers_0)
			.body(RawFileBody("RecordedSimulation3_0006_request.txt")),
            http("request_7")
			.get(uri1 + "?t=1474985661852")
			.headers(headers_1)//,
         //  http("request_8")
			//.get(uri1 + "?t=1474985661998")
			//.headers(headers_1)
			))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}