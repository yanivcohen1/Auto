package com.who.auto.records

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._
//import com.ning.http.util.Base64
import io.gatling.http.response._
import java.nio.charset.StandardCharsets.UTF_8

class RecordedSimulation2 extends Simulation {

  val baseURL = Option(System.getProperty("baseURL")) getOrElse """https://login.eurogrand.com"""
  
  val headers_http_authenticated = Map(
        "Accept" -> """application/json""",
        "x-auth-token" -> "${x_auth_token}"
    )
    
	val httpProtocol = http
		.baseURL("https://login.eurogrand.com")
		.inferHtmlResources()
		.acceptHeader("image/png,image/*;q=0.8,*/*;q=0.5")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en")
		.userAgentHeader("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:46.0) Gecko/20100101 Firefox/46.0")
		.connectionHeader("keep-alive")

	val headers_login = Map(
		"Accept" -> "text/html, application/xhtml+xml, */*",
		"Referer" -> "https://portal-admin-stg.eurogrand.com/en_US/",
		"Content-Type" -> "application/x-www-form-urlencoded",
		"Accept-Encoding" -> "gzip, deflate",
		"Host" -> "login.eurogrand.com",
		"DNT" -> "1",
		"Connection" -> "Keep-Alive",
		"Cache-Control" -> "no-cache",
		"Cookie" -> "GUEST_LANGUAGE_ID=en_US; _dyid=8777515821248184534; _dycst=dk.w.i11.ms.frv1.frs.; _dyus_8765453=0%7C0%7C0%7C0%7C0%7C0.0.1474199839849.1474199839849.0.0%7C261%7C39%7C8%7C116%7C1%7C0%7C0%7C0%7C0%7C0%7C0%7C1%7C0%7C0%7C0%7C0%7C0%7C1%7C0%7C0%7C0%7C0%7C0; _dy_geo=IL.AS.IL_05.IL_05_Tel%20Aviv; _dy_df_geo=Israel..Tel%20Aviv; _dy_toffset=-73; _ga=GA1.2.571703505.1474199846; _gat=1"	
	)

	val headers_19 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
		"Origin" -> "http://www.williamhillcasino.com")

  var body1 = ""
	val scn = scenario("RecordedSimulation")
		      .exec( http("login")
		          .post("/LoginAndGetTempToken.php?casinoname=eurogrand&realMode=1&systemId=304&serviceType=GamePlay&clientType=casino&clientPlatform=web&clientVersion=10H&clientSkin=eurogrand&deliveryPlatform=HTML5&deviceType=other&osName=windows&osVersion=7&deviceBrowser=chrome&languageCode=en&redirectUrl=https%3A//portal-admin-stg.eurogrand.com/%23requestId%3D1474195884914&messagesSupported=1")
              .headers(headers_login)
              //.body(StringBody("""{ "myContent": "myValue" }"""))
              //.asJSON
              .formParam("username", "admin")
              .formParam("password", "admin")
              //.check(jsonPath("$.Cookie").saveAs("x_auth_token"))      
              //.check(regex("Unknown+password.+Please+contact+Customer").notExists)
              .check(status.is(200))
              .check(bodyString.saveAs("Res1"))
              .transformResponse { case response if response.isReceived =>
                  new ResponseWrapper(response) {
                    body1 = response.body.string
                    println("body=> " + body1)
                    println("cookies:")
                    response.cookies.foreach { println }
                  }
               }
		           .check(regex("Unknown+password").notExists)
		           //regex("Unknown+password").find(1).exists
		          
         )
        .exec {session =>
            //val Res1: String = session.getTypedAttribute("Res1")
            println("Res1=> " + body1)
            session
        }

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}