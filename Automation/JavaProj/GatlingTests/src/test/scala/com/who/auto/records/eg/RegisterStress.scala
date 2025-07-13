package com.who.auto.records.eg

import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._
import io.gatling.http.response._
import com.who.auto.lib._
import io.gatling.http.protocol.HttpProtocolBuilder.toHttpProtocol
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder
import io.gatling.http.request.builder.ws.WsOpenRequestBuilder.toActionBuilder

class RegisterStress extends Simulation {

  val baseUrl = ReadFromPropertyFile.getFromEnvirmentProperty("Eg")
  var mainURL = "https://oapi.digitalarea1000.com"
  var mainWS = "wss://oapi.digitalarea1000.com"
	val httpProtocol = http
		.baseURL(mainURL)
		.inferHtmlResources()
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en")
		.doNotTrackHeader("1")
		.userAgentHeader("Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36")
		.wsBaseURL(mainWS)
		//.wsBaseURL("ws://echo.websocket.org")
	
	val headers_1 = Map(
	    "Origin" -> baseUrl,
	    "Content-Type" -> "application/json",
	    "Connection" -> "keep-alive",
	    "Referer" -> baseUrl)

	val scn = scenario("Register")
	  .exec(sesion => {
	          var calc_url = calcURL  
            println("body user_id=> " + calc_url)
            sesion.set("user_id", calc_url)
          })
         
	  //.exec(_.set("cardNumber", "12345"))
		.exec(
			 //.body(RawFileBody("RecordedSimulation_0000_request.txt"))
			 http("HTTP_Get_Token")
			.get(mainURL + "/socket.io/1/?t=" + "${user_id}")
			.headers(headers_1)
			//.formParam("password", "123456")
			//.body(StringBody("""{"id":null, "test_name":"SAMPLE_TEXT", "class_name":"SAMPLE_TEXT", "method_name":"SAMPLE_TEXT", "parameter_name":"SAMPLE_TEXT", "parameter_value":"SAMPLE_TEXT"}""")).asJSON
			//.check(headerRegex("Location", "(.*)").saveAs("new_tests_url")))
			//.exec(addCookie(Cookie("name", "value")))
			//.check(headerRegex("Set-Cookie", "yourRegexHere").saveAs("attributeName")) //yourRegexHere = (.*) //all string
			.check(status.is(200))
			.check(bodyString.transform(string => {
                      var res = string.split(":").apply(0)
                      //println("body token=> " + res)
                      //sesion.set("token", res)
                      if(res.size != 36) "error size"
                      else res
                    }).not("error size")
                    .saveAs("token")
        )
			.transformResponse ({
                			  case response if response.isReceived =>
                          import io.gatling.http.response._
                          new ResponseWrapper(response) {
                			    //transform body cookies headers and save to the response
                          //sesion.set("body", response.body.string)
                          //sesion.set("cookies", response.cookies)
                          //sesion.set("headers", response.headers)
                            //override val body = new StringResponseBody(response.body.string.replace(")]}',", ""), response.charset)
                          }
                    
                  
               })
			 //.check(bodyString.transform(_.split("&&")(1)).jsonPath("&.security_token").saveAs("security_token"))
  		 //.check(regex(",").find(1).exists)
               
      )
		  .exec(sesion => {
	          println("read user_id=> " + sesion.attributes.get("user_id").get)
	          println("read token=> " + sesion.attributes.get("token").get)
            sesion
          })
		 .pause(2)
		//websocket test
		//.exec(ws("Connect WS").open("/"))
		.exec(ws("Connect WS").open(mainWS + "/socket.io/1/websocket/" + "${token}"))//"/room/chat?username=${x_auth_token}"))
    //.exec(session => session.set("id", session.userId + ":::"))
    .pause(1)
    .repeat(1, "i") {
     exec(ws("WS Register Test")
        .sendText("""3:::{"ID":31007,"responses":[33006,31008],"description":"Create Player Info (Register)","clientVersion":"10H","realMode":1,"casinoName":"eurogrand","changeTimestamp":"2017-2-2 12:49:26.849","dataMap":{"title":"Mr","firstname":"sdfsdf","lastname":"sdfsdf","email":"test@playtech.com","userName":"161129012344sdf","password":"123456","birthdate":"1998-01-2","countrycode":"GB","address":"sdfsdf","city":"sdfsdf","zip":"sdfsdf","cellphone":"+4416516516","phone":"+441227768276","currencyCode":"GBP","sex":"M","clienttype":"casino","clientPlatform":"web","custom01":"yes","language":"EN","signupDeviceType":"other","signupOsName":"windows","signupOsVersion":"7","signupDeliveryPlatform":null,"signupDeviceBrowser":"chrome"}}""")
        //.sendText("""{"data":{"playerId":2530183,"sessionToken":"BDDFF8BC3E2625B41A494568EFF66581","playerMode":"anonymous","adminAvailable":true,"hasBanner":false,"languageCode":"EN"},"ID":36001}""") 
        .check(wsAwait.within(10).until(1)
          .message
          //.regex("Pong.*")
          //.jsonPath("$.adminAvailable")//.saveAs("x_auth_token")
          .transform(res => {
               println("body => " + res)
               if(res.contains(""""playerCode":63636375""")) "Reg pass"
                      else "fail"
              }
          )
          .is("Reg pass")
          //.not("") 
          //.is()
        )
    )
    .pause(1)
    }
    .exec(ws("Close WS").close)
 //   session
 // }
    val users = scenario("Register").exec(scn)
  	//val users1 = lib.ReadFromPropertyFile.systemProperty("")
  	val injectUsers = ReadFromPropertyFile.systemProperty("injectUsers")
    val injectPeriodInSeconds = ReadFromPropertyFile.systemProperty("injectPeriodInSeconds")
  	println("injectUsers => " + injectUsers )
  	println("injectPeriodInSeconds =>" + injectPeriodInSeconds)
  	println("baseUrl =>" + mainURL)
	  //setUp(scn.inject(atOnceUsers(100))).protocols(httpProtocol)
	  setUp(users.inject(rampUsers(injectUsers.toInt) over (injectPeriodInSeconds.toInt seconds))).protocols(httpProtocol)
	//setUp(scn.inject(atOnceUsers(2))).protocols(httpProtocol)
	
	//val x: Pair[Int, String] = new Pair(1, "abc")
	def calcURL() = {
    var result = "1484754264"//246
    var i = Counter.inc
    if (i < 10) {
      result = result + "00" + i
    } else if(i < 100){
      result = result + "0" + i
    } else{
       result = result + i
    }
    println("calcURL=> " + result)
    result
  }
   
   object Counter{
      private var current = 0
      def inc = {current += 1; current}
  }

}