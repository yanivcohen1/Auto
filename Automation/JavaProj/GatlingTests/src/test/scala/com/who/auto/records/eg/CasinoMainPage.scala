package com.who.auto.records.eg

import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._
import com.who.auto.lib._
import io.gatling.http.protocol.HttpProtocolBuilder.toHttpProtocol
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

class CasinoMainPage extends Simulation {

  //val brand = ReadFromPropertyFile.systemProperty("brand")
  val baseUrl = ReadFromPropertyFile.getFromEnvirmentProperty("Eg")
	val httpProtocol = http
		.baseURL(baseUrl)
		.inferHtmlResources()
		.userAgentHeader("Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko")

	val headers_main = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, sdch",
		"Accept-Language" -> "en-US,en;q=0.8,pt;q=0.6,en-CA;q=0.4,fr-CA;q=0.2,fr;q=0.2,he;q=0.2,ja;q=0.2",
		"Cache-Control" -> "max-age=0",
		"Connection" -> "keep-alive",
		"Host" -> baseUrl.substring(7),
		"Upgrade-Insecure-Requests" -> "1",
		"User-Agent" -> "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36"
		)

	val scn = scenario("MainPage")
		.exec(http(baseUrl)
			.get(baseUrl)
			.headers(headers_main)
			//.check(status.is(200))
			)

			val users = scenario("MainPage").exec(scn)
			val injectUsers = ReadFromPropertyFile.systemProperty("injectUsers")
      val injectPeriodInSeconds = ReadFromPropertyFile.systemProperty("injectPeriodInSeconds")
    	println("injectUsers => " + injectUsers )
    	println("injectPeriodInSeconds =>" + injectPeriodInSeconds)
    	println("baseUrl =>" + baseUrl)
  	  //setUp(scn.inject(atOnceUsers(100))).protocols(httpProtocol)
  	  setUp(users.inject(rampUsers(injectUsers.toInt) over (injectPeriodInSeconds.toInt seconds))).protocols(httpProtocol)
			//setUp(users.inject(rampUsers(600) over (1 minutes))).protocols(httpProtocol)
	    //setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}