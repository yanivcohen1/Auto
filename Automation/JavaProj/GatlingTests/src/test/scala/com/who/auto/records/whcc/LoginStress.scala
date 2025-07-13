package com.who.auto.records.whcc

import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._
import io.gatling.http.response._
import com.who.auto.lib._
import io.gatling.http.protocol.HttpProtocolBuilder.toHttpProtocol
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

class LoginStress extends Simulation {//login

  val baseUrl = ReadFromPropertyFile.getFromEnvirmentProperty("Whcc")
	val httpProtocol = http
		.baseURL(baseUrl)
		.inferHtmlResources()

		var headers_1 = Map(
		    "Host" -> "login.williamhillcasino.com",
        "Connection" -> "keep-alive",
        "Content-Length" -> "1621",
        "Cache-Control" -> "max-age=0",
        "Origin" -> baseUrl,
        "Upgrade-Insecure-Requests" -> "1",
        "User-Agent" -> "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36",
        "Content-Type" -> "application/x-www-form-urlencoded",
        "Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Referer" -> baseUrl,
        "Accept-Encoding" -> "gzip, deflate, br",
        "Accept-Language" -> "en-US,en;q=0.8,pt;q=0.6,en-CA;q=0.4,fr-CA;q=0.2,fr;q=0.2,he;q=0.2,ja;q=0.2"
        //,"Cookie" -> "_dyid=-9223371781966971500; _dyfs=true; _dyus_8765454=240%7C16%7C2%7C42%7C0%7C0.0.1484733702629.1485242221865.508519.0%7C23%7C4%7C0%7C117%7C1%7C0%7C1%7C0%7C0%7C0%7C10%7C2%7C10%7C0%7C0%7C0%7C0%7C12%7C0%7C0%7C0%7C0%7C0; refuser=; EGABTEST=SU; WHCCABTEST=SU; COMPANY_ID=10154; ID=77456338767637663737504f567831636a2b646370773d3d; PTSESSIONID=9VQT9YSj; JSESSIONID=5C5773A0FBB475570F78E6D952629BF2; GUEST_LANGUAGE_ID=en_US; gba=bad; _vwo_uuid_v2=E6B779345DE3353FF550B23C13287AA3|1e8b73f1af52e1a13e069443c68e8d25; _ceg.s=okpgls; _ceg.u=okpgls; _dy_df_geo=Israel..Tel%20Aviv; _dyus_8766593=430%7C0%7C0%7C0%7C0%7C0.0.1484734497078.1486023873546.1289376.0%7C32%7C5%7C1%7C117%7C1%7C1%7C0%7C4%7C0%7C0%7C0%7C6%7C12%7C20%7C0%7C0%7C0%7C2%7C36%7C0%7C0%7C0%7C0; _gat=1; __utmt=1; _gat_playtechwpl=1; _dy_csc_ses=t; _dy_ses_load_seq=97094%3A1486024095374; _dy_c_exps=; _dy_soct=31108.37482.1486024095; _dycst=d.an.c.ms.frv2.ltos.; _dy_geo=IL.AS.IL_05.IL_05_Tel%20Aviv; _dy_toffset=155; _dyus_8765453=607%7C0%7C0%7C0%7C0%7C0.0.1485357306617.1486024095674.666789.0%7C32%7C5%7C1%7C117%7C2%7C0%7C10%7C4%7C1%7C0%7C0%7C17%7C6%7C0%7C0%7C0%7C0%7C2%7C21%7C0%7C0%7C0%7C0; _ga=GA1.2.988407090.1484733692; __utma=118991702.988407090.1484733692.1485968442.1486023874.14; __utmb=118991702.9.9.1486024400591; __utmc=118991702; __utmz=118991702.1485416545.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)"
		    )
  
    //var cookies1:List[org.asynchttpclient.cookie.Cookie] = Nil

	val scn = scenario("Login")
		.exec(
		   http("request_Login")
			.post("https://login.williamhillcasino.com/LoginAndGetTempToken.php?casinoname=whcasinoclub&realMode=1&systemId=304&serviceType=GamePlay&clientType=casino&clientPlatform=mobile&clientVersion=10H&clientSkin=whcasinoclub&deliveryPlatform=HTML5&deviceType=nexus_5&osName=android&osVersion=6&deviceBrowser=chrome&languageCode=en&redirectUrl=https%3A//ww2.williamhillcasino.com/%23requestId%3D1486024813370&messagesSupported=1")
			.headers(headers_1)
			.formParam("username", "170130060025")
			.formParam("password", "123456")
			.transformResponse { case response if response.isReceived =>
                  new ResponseWrapper(response) {
                    var body1 = response.body.string
                    println("body=> " + body1)
                    //cookies1.foreach { println }
                  }
               }
		 .check(regex("sessionToken"))
		)
		//.check(jsonPath("$").saveAs("x_auth_token"))
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