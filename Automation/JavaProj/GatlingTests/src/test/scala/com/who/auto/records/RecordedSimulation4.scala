package com.who.auto.records

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation4 extends Simulation {

	val httpProtocol = http
		.baseURL("https://oapi.digitalarea1000.com")
		.inferHtmlResources()

	val headers_0 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "en",
		"Connection" -> "Keep-Alive",
		"Content-Type" -> "text/plain;charset=UTF-8",
		"DNT" -> "1",
		"Origin" -> "https://src-www-stg.eurogrand.com",
		"User-Agent" -> "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko")

	val headers_1 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "en",
		"Connection" -> "Keep-Alive",
		"DNT" -> "1",
		"Origin" -> "https://src-www-stg.eurogrand.com",
		"User-Agent" -> "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko")

	val headers_9 = Map(
		"Accept" -> "application/json, text/javascript, */*; q=0.01",
		"Accept-Encoding" -> "gzip, deflate, sdch",
		"Accept-Language" -> "en-US,en;q=0.8,pt;q=0.6,en-CA;q=0.4,fr-CA;q=0.2,fr;q=0.2,he;q=0.2,ja;q=0.2",
		"Content-Type" -> "application/json",
		"User-Agent" -> "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
		"X-Api-Key" -> "364d048e9affece42fb525ce97681834",
		"X-CSRF-Token" -> "FrTATsXpp1xcBr+Ja/HEgEXP5WK5UbS+h+u3a6guM2E=",
		"X-NewRelic-ID" -> "VgcPUVVACgUJXVZS",
		"X-Requested-With" -> "XMLHttpRequest")

    val uri1 = "getgreenshot.org"
    val uri2 = "https://oapi.digitalarea1000.com:443/socket.io/1/xhr-polling/fd620999-b7ec-47d8-856f-ca3b5a7bcfb6"
    val uri3 = "www.di.fm"

	val scn = scenario("RecordedSimulation")
		.exec(http("request_0")
			.post("/socket.io/1/xhr-polling/fd620999-b7ec-47d8-856f-ca3b5a7bcfb6?t=1474969261318")
			.headers(headers_0)
			.body(RawFileBody("RecordedSimulation_0000_request.txt"))
			.resources(http("request_1")
			.get(uri2 + "?t=1474969247647")
			.headers(headers_1),
            http("request_2")
			.post(uri2 + "?t=1474969261501")
			.headers(headers_0)
			.body(RawFileBody("RecordedSimulation_0002_request.txt")),
            http("request_3")
			.get(uri2 + "?t=1474969261508")
			.headers(headers_1),
            http("request_4")
			.post(uri2 + "?t=1474969261690")
			.headers(headers_0)
			.body(RawFileBody("RecordedSimulation_0004_request.txt")),
            http("request_5")
			.get(uri2 + "?t=1474969261691")
			.headers(headers_1),
            http("request_6")
			.post(uri2 + "?t=1474969261882")
			.headers(headers_0)
			.body(RawFileBody("RecordedSimulation_0006_request.txt")),
            http("request_7")
			.get(uri2 + "?t=1474969261884")
			.headers(headers_1),
            http("request_8")
			.get(uri2 + "?t=1474969262023")
			.headers(headers_1)))
		.pause(21)
		.exec(http("request_9")
			.get("http://" + uri3 + "/_papi/v1/di/track_history")
			.headers(headers_9))
		.pause(16)
		.exec(http("request_10")
			.head("http://" + uri1 + "/project-feed/"))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}