package com.who.auto.records

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._
import io.gatling.http.response._
import com.who.auto.lib._

class LoginStress extends Simulation {//login

  val baseUrl = ReadFromPropertyFile.getFromEnvirmentProperty("Eg")
	val httpProtocol = http
		.baseURL(baseUrl)
		.inferHtmlResources()

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "en-US,en;q=0.8,pt;q=0.6,en-CA;q=0.4,fr-CA;q=0.2,fr;q=0.2,he;q=0.2,ja;q=0.2",
		"Cache-Control" -> "max-age=0",
		"Connection" -> "keep-alive",
		"Origin" -> baseUrl,
		"Upgrade-Insecure-Requests" -> "1",
		"User-Agent" -> "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36")

	val headers_1 = Map("User-Agent" -> "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36")

	val headers_3 = Map(
		"Accept" -> "image/webp,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, sdch, br",
		"Accept-Language" -> "en-US,en;q=0.8,pt;q=0.6,en-CA;q=0.4,fr-CA;q=0.2,fr;q=0.2,he;q=0.2,ja;q=0.2",
		"Connection" -> "keep-alive",
		"User-Agent" -> "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36")

	val headers_4 = Map(
		"accept" -> "*/*",
		"accept-encoding" -> "gzip, deflate, sdch, br",
		"accept-language" -> "en-US,en;q=0.8,pt;q=0.6,en-CA;q=0.4,fr-CA;q=0.2,fr;q=0.2,he;q=0.2,ja;q=0.2",
		"origin" -> baseUrl,
		"referer" -> "https://fonts.googleapis.com/css?family=Lato:400,400italic,700,700italic,900,300italic,300,900italic,100italic,100",
		"user-agent" -> "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
		"x-chrome-uma-enabled" -> "1",
		"x-client-data" -> "CK+1yQEIi7bJAQiktskBCMS2yQE=")

	val headers_5 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, sdch, br",
		"Accept-Language" -> "en-US,en;q=0.8,pt;q=0.6,en-CA;q=0.4,fr-CA;q=0.2,fr;q=0.2,he;q=0.2,ja;q=0.2",
		"Connection" -> "keep-alive",
		"Content-Type" -> "application/x-www-form-urlencoded; charset=UTF-8",
		"User-Agent" -> "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36")

	val headers_9 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, sdch, br",
		"Accept-Language" -> "en-US,en;q=0.8,pt;q=0.6,en-CA;q=0.4,fr-CA;q=0.2,fr;q=0.2,he;q=0.2,ja;q=0.2",
		"Connection" -> "keep-alive",
		"Origin" -> baseUrl,
		"User-Agent" -> "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36")

	val headers_10 = Map(
		"Accept" -> "image/webp,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, sdch",
		"Accept-Language" -> "en-US,en;q=0.8,pt;q=0.6,en-CA;q=0.4,fr-CA;q=0.2,fr;q=0.2,he;q=0.2,ja;q=0.2",
		"Connection" -> "keep-alive",
		"User-Agent" -> "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36")

	val headers_17 = Map(
		"accept" -> "image/webp,image/*,*/*;q=0.8",
		"accept-encoding" -> "gzip, deflate, sdch, br",
		"accept-language" -> "en-US,en;q=0.8,pt;q=0.6,en-CA;q=0.4,fr-CA;q=0.2,fr;q=0.2,he;q=0.2,ja;q=0.2",
		"cookie" -> "fr=0aTsgkFXmXQ4GTpWe..BX3-jF...1.0.BX3-jF.",
		"referer" -> (baseUrl + "/?cat=recentlyplayed"),
		"user-agent" -> "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36")

    val uri1 = "https://script.crazyegg.com/pages/scripts/0010/9787.js"
    val uri2 = baseUrl
    val uri3 = "http://safecontent.williamhillcasino.com"
    val uri4 = "px.dynamicyield.com"
    val uri5 = "fonts.gstatic.com"
    val uri6 = "www.facebook.com"
    val uri7 = "login.eurogrand.com"
  
    //var cookies1:List[org.asynchttpclient.cookie.Cookie] = Nil
    var body1 = ""

	val scn = scenario("Login")
		.exec(
		   http("request_Login")
			.post("https://" + uri7 + "/LoginAndGetTempToken.php?casinoname=eurogrand&realMode=1&systemId=304&serviceType=GamePlay&clientType=casino&clientPlatform=web&clientVersion=10H&clientSkin=eurogrand&deliveryPlatform=HTML5&deviceType=other&osName=windows&osVersion=7&deviceBrowser=chrome&languageCode=en&redirectUrl=https%3A//src-www-stg.eurogrand.com/%23requestId%3D1474294285005&messagesSupported=1")
			.headers(headers_0)
			.formParam("username", "stduser")
			.formParam("password", "123456")
			.transformResponse { case response if response.isReceived =>
                  new ResponseWrapper(response) {
                    body1 = response.body.string
                    //cookies1 = response.cookies
                    //println("body=> " + body1)
                    //println("cookies:")
                    //cookies1.foreach { println }
                  }
               }
		 .check(regex("sessionToken"))
		 )
		  //.check(jsonPath("$").saveAs("x_auth_token"))
		 
		 .exec {session =>
            //val Res1: String = session.getTypedAttribute("Res1")
            //println("Res1=> " + cookies1)
            session
           }
    
  	val users = scenario("Login").exec(scn)
  	//val users1 = lib.ReadFromPropertyFile.systemProperty("")
  	val injectUsers = ReadFromPropertyFile.systemProperty("injectUsers")
    val injectPeriodInSeconds = ReadFromPropertyFile.systemProperty("injectPeriodInSeconds")
  	println("injectUsers => " + injectUsers )
  	println("injectPeriodInSeconds =>" + injectPeriodInSeconds)
  	println("baseUrl =>" + baseUrl)
	  //setUp(scn.inject(atOnceUsers(100))).protocols(httpProtocol)
	  setUp(users.inject(rampUsers(injectUsers.toInt) over (injectPeriodInSeconds.toInt seconds))).protocols(httpProtocol)
  	//setUp(users.inject(rampUsers(injectUsers.toInt) over (injectPeriodInSeconds.toInt minutes))).protocols(httpProtocol)
}