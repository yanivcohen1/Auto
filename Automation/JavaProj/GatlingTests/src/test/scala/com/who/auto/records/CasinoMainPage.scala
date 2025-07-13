package com.who.auto.records

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._
import com.who.auto.lib._

class CasinoMainPage extends Simulation {

  val brand = ReadFromPropertyFile.systemProperty("brand")
  val baseUrl = ReadFromPropertyFile.getFromEnvirmentProperty(brand)
	val httpProtocol = http
		.baseURL(baseUrl)
		.inferHtmlResources()
		.userAgentHeader("Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko")

	val headers_0 = Map(
		"Accept" -> "application/json, text/javascript, */*; q=0.01",
		"Accept-Encoding" -> "gzip, deflate, sdch",
		"Accept-Language" -> "en-US,en;q=0.8,pt;q=0.6,en-CA;q=0.4,fr-CA;q=0.2,fr;q=0.2,he;q=0.2,ja;q=0.2",
		"Origin" -> "http://www.di.fm",
		"User-Agent" -> "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36")

	val headers_1 = Map(
		"Accept" -> "application/json, text/javascript, */*; q=0.01",
		"Accept-Encoding" -> "gzip, deflate, sdch",
		"Accept-Language" -> "en-US,en;q=0.8,pt;q=0.6,en-CA;q=0.4,fr-CA;q=0.2,fr;q=0.2,he;q=0.2,ja;q=0.2",
		"Content-Type" -> "application/json",
		"User-Agent" -> "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
		"X-Api-Key" -> "364d048e9affece42fb525ce97681834",
		"X-CSRF-Token" -> "Z2VEn6kbsMJ8rsRbGQeaRUFDbVBew+YGXtf9am7SiEo=",
		"X-NewRelic-ID" -> "VgcPUVVACgUJXVZS",
		"X-Requested-With" -> "XMLHttpRequest")

	val headers_3 = Map(
		"Accept" -> "text/html, application/xhtml+xml, */*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "en",
		"Connection" -> "Keep-Alive",
		"DNT" -> "1")

	val headers_4 = Map(
		"Accept" -> "application/mapi-http",
		"Authorization" -> "Basic eWFuaXYuY29oZW5Ad2lsbGlhbWhpbGwuY29tOllhbmNvbjI1OA==",
		"Connection" -> "Keep-Alive",
		"Content-Type" -> "application/mapi-http",
		"Pragma" -> "no-cache",
		"User-Agent" -> "Microsoft Office/14.0 (Windows NT 6.1; Microsoft Outlook 14.0.7173; Pro)",
		"X-ClientApplication" -> "Outlook/14.0.7172.5000",
		"X-ClientInfo" -> "{A158C1A5-6290-42F0-A4D6-D5008CF261E9}:21",
		"X-RequestId" -> "{145748E2-D191-474C-AC5D-F7A6A34E660D}:2",
		"X-RequestType" -> "Connect")

	val headers_5 = Map(
		"Accept" -> "application/mapi-http",
		"Authorization" -> "Basic eWFuaXYuY29oZW5Ad2lsbGlhbWhpbGwuY29tOllhbmNvbjI1OA==",
		"Connection" -> "Keep-Alive",
		"Content-Type" -> "application/mapi-http",
		"Pragma" -> "no-cache",
		"User-Agent" -> "Microsoft Office/14.0 (Windows NT 6.1; Microsoft Outlook 14.0.7173; Pro)",
		"X-ClientApplication" -> "Outlook/14.0.7172.5000",
		"X-ClientInfo" -> "{A158C1A5-6290-42F0-A4D6-D5008CF261E9}:21",
		"X-RequestId" -> "{145748E2-D191-474C-AC5D-F7A6A34E660D}:3",
		"X-RequestType" -> "Execute")

	val headers_6 = Map(
		"Accept" -> "application/mapi-http",
		"Authorization" -> "Basic eWFuaXYuY29oZW5Ad2lsbGlhbWhpbGwuY29tOllhbmNvbjI1OA==",
		"Connection" -> "Keep-Alive",
		"Content-Type" -> "application/mapi-http",
		"Pragma" -> "no-cache",
		"User-Agent" -> "Microsoft Office/14.0 (Windows NT 6.1; Microsoft Outlook 14.0.7173; Pro)",
		"X-ClientApplication" -> "Outlook/14.0.7172.5000",
		"X-ClientInfo" -> "{A158C1A5-6290-42F0-A4D6-D5008CF261E9}:21",
		"X-RequestId" -> "{145748E2-D191-474C-AC5D-F7A6A34E660D}:4",
		"X-RequestType" -> "Execute")

	val headers_7 = Map(
		"Accept" -> "application/mapi-http",
		"Authorization" -> "Basic eWFuaXYuY29oZW5Ad2lsbGlhbWhpbGwuY29tOllhbmNvbjI1OA==",
		"Connection" -> "Keep-Alive",
		"Content-Type" -> "application/mapi-http",
		"Pragma" -> "no-cache",
		"User-Agent" -> "Microsoft Office/14.0 (Windows NT 6.1; Microsoft Outlook 14.0.7173; Pro)",
		"X-ClientApplication" -> "Outlook/14.0.7172.5000",
		"X-ClientInfo" -> "{A158C1A5-6290-42F0-A4D6-D5008CF261E9}:21",
		"X-RequestId" -> "{145748E2-D191-474C-AC5D-F7A6A34E660D}:5",
		"X-RequestType" -> "Execute")

	val headers_8 = Map(
		"Accept" -> "application/javascript, */*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "en",
		"DNT" -> "1",
		"Pragma" -> "no-cache")

	val headers_10 = Map(
		"Accept" -> "application/mapi-http",
		"Authorization" -> "Basic eWFuaXYuY29oZW5Ad2lsbGlhbWhpbGwuY29tOllhbmNvbjI1OA==",
		"Connection" -> "Keep-Alive",
		"Content-Type" -> "application/mapi-http",
		"Pragma" -> "no-cache",
		"User-Agent" -> "Microsoft Office/14.0 (Windows NT 6.1; Microsoft Outlook 14.0.7173; Pro)",
		"X-ClientApplication" -> "Outlook/14.0.7172.5000",
		"X-ClientInfo" -> "{A158C1A5-6290-42F0-A4D6-D5008CF261E9}:21",
		"X-RequestId" -> "{145748E2-D191-474C-AC5D-F7A6A34E660D}:6",
		"X-RequestType" -> "Execute")

	val headers_13 = Map(
		"Accept" -> "image/png, image/svg+xml, image/*;q=0.8, */*;q=0.5",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "en",
		"DNT" -> "1",
		"Pragma" -> "no-cache")

	val headers_15 = Map(
		"Accept" -> "application/mapi-http",
		"Authorization" -> "Basic eWFuaXYuY29oZW5Ad2lsbGlhbWhpbGwuY29tOllhbmNvbjI1OA==",
		"Connection" -> "Keep-Alive",
		"Content-Type" -> "application/mapi-http",
		"Pragma" -> "no-cache",
		"User-Agent" -> "Microsoft Office/14.0 (Windows NT 6.1; Microsoft Outlook 14.0.7173; Pro)",
		"X-ClientApplication" -> "Outlook/14.0.7172.5000",
		"X-ClientInfo" -> "{A158C1A5-6290-42F0-A4D6-D5008CF261E9}:21",
		"X-RequestId" -> "{145748E2-D191-474C-AC5D-F7A6A34E660D}:8",
		"X-RequestType" -> "Execute")

	val headers_17 = Map(
		"Accept" -> "application/mapi-http",
		"Authorization" -> "Basic eWFuaXYuY29oZW5Ad2lsbGlhbWhpbGwuY29tOllhbmNvbjI1OA==",
		"Connection" -> "Keep-Alive",
		"Content-Type" -> "application/mapi-http",
		"Pragma" -> "no-cache",
		"User-Agent" -> "Microsoft Office/14.0 (Windows NT 6.1; Microsoft Outlook 14.0.7173; Pro)",
		"X-ClientApplication" -> "Outlook/14.0.7172.5000",
		"X-ClientInfo" -> "{A158C1A5-6290-42F0-A4D6-D5008CF261E9}:21",
		"X-RequestId" -> "{145748E2-D191-474C-AC5D-F7A6A34E660D}:9",
		"X-RequestType" -> "Execute")

	val headers_20 = Map(
		"Accept" -> "application/mapi-http",
		"Authorization" -> "Basic eWFuaXYuY29oZW5Ad2lsbGlhbWhpbGwuY29tOllhbmNvbjI1OA==",
		"Connection" -> "Keep-Alive",
		"Content-Type" -> "application/mapi-http",
		"Pragma" -> "no-cache",
		"User-Agent" -> "Microsoft Office/14.0 (Windows NT 6.1; Microsoft Outlook 14.0.7173; Pro)",
		"X-ClientApplication" -> "Outlook/14.0.7172.5000",
		"X-ClientInfo" -> "{A158C1A5-6290-42F0-A4D6-D5008CF261E9}:21",
		"X-RequestId" -> "{145748E2-D191-474C-AC5D-F7A6A34E660D}:10",
		"X-RequestType" -> "Execute")

	val headers_22 = Map(
		"Accept" -> "application/mapi-http",
		"Authorization" -> "Basic eWFuaXYuY29oZW5Ad2lsbGlhbWhpbGwuY29tOllhbmNvbjI1OA==",
		"Connection" -> "Keep-Alive",
		"Content-Type" -> "application/mapi-http",
		"Pragma" -> "no-cache",
		"User-Agent" -> "Microsoft Office/14.0 (Windows NT 6.1; Microsoft Outlook 14.0.7173; Pro)",
		"X-ClientApplication" -> "Outlook/14.0.7172.5000",
		"X-ClientInfo" -> "{A158C1A5-6290-42F0-A4D6-D5008CF261E9}:21",
		"X-RequestId" -> "{145748E2-D191-474C-AC5D-F7A6A34E660D}:11",
		"X-RequestType" -> "Execute")

	val headers_23 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "en",
		"Connection" -> "Keep-Alive",
		"DNT" -> "1",
		"Origin" -> baseUrl)

	val headers_25 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "en",
		"Content-Type" -> "application/x-www-form-urlencoded; charset=UTF-8",
		"DNT" -> "1",
		"Pragma" -> "no-cache")

	val headers_26 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "en",
		"DNT" -> "1",
		"Origin" -> baseUrl,
		"Pragma" -> "no-cache")

	val headers_27 = Map(
		"Connection" -> "Upgrade",
		"DNT" -> "1",
		"Origin" -> baseUrl,
		"Sec-WebSocket-Key" -> "d7Zjb2PQKAbLluNQAZ98YQ==",
		"Sec-WebSocket-Version" -> "13",
		"Upgrade" -> "Websocket")

	val headers_29 = Map(
		"Accept" -> "application/mapi-http",
		"Authorization" -> "Basic eWFuaXYuY29oZW5Ad2lsbGlhbWhpbGwuY29tOllhbmNvbjI1OA==",
		"Connection" -> "Keep-Alive",
		"Content-Type" -> "application/mapi-http",
		"Pragma" -> "no-cache",
		"User-Agent" -> "Microsoft Office/14.0 (Windows NT 6.1; Microsoft Outlook 14.0.7173; Pro)",
		"X-ClientApplication" -> "Outlook/14.0.7172.5000",
		"X-ClientInfo" -> "{A158C1A5-6290-42F0-A4D6-D5008CF261E9}:21",
		"X-RequestId" -> "{145748E2-D191-474C-AC5D-F7A6A34E660D}:12",
		"X-RequestType" -> "Execute")

	val headers_30 = Map(
		"Accept" -> "application/javascript, */*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "en",
		"Connection" -> "Keep-Alive",
		"DNT" -> "1")

	val headers_32 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "en",
		"Content-Type" -> "application/x-www-form-urlencoded; charset=UTF-8",
		"DNT" -> "1")

	val headers_33 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "en",
		"DNT" -> "1",
		"GetContentFeatures.DLNA.ORG" -> "1",
		"Pragma" -> "getIfoFileURI.dlna.org")

	val headers_34 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "en",
		"DNT" -> "1",
		"GetContentFeatures.DLNA.ORG" -> "1",
		"Pragma" -> "getIfoFileURI.dlna.org",
		"Range" -> "bytes=0-")

	val headers_38 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "en",
		"Connection" -> "Keep-Alive",
		"Content-Type" -> "text/plain;charset=UTF-8",
		"DNT" -> "1",
		"Origin" -> baseUrl)

    //val uri01 = "http://bat.bing.com"
    val uri02 = "px.dynamicyield.com"
    val uri03 = baseUrl
    val uri04 = "bat.r.msn.com"
    val uri05 = "http://www.di.fm/_papi/v1/di"
    val uri06 = "https://oapi.digitalarea1000.com:443/socket.io/1"
    val uri07 = "api.audioaddict.com"
    val uri08 = "http://cdn.dynamicyield.com/api/8766593"
    val uri09 = baseUrl
    val uri10 = "static.dynamicyield.com"
    val uri11 = "http://st.dynamicyield.com"
    val uri12 = "login.eurogrand.com"

	val scn = scenario("MainPage")
		.exec(http("http://" + uri07 + "/v1/di/track_history/channel/6.json")
			.get("http://" + uri07 + "/v1/di/track_history/channel/6.json")
			.headers(headers_0)
			.resources(http(uri05 + "/tracks/21104/6.json")
			.get(uri05 + "/tracks/21104/6.json")
			.headers(headers_1),
            http(uri05 + "/tracks/21104")
			.get(uri05 + "/tracks/21104")
			.headers(headers_1)
			))
		.pause(4)
		.exec(http(uri03 + "/en/")
			.get(uri03 + "/en/")
			.headers(headers_3)
			.resources(http(uri08 + "/api_static.js")
			.get(uri08 + "/api_static.js")
			.headers(headers_8)
			//.check(status.is(304))
			,
            http("http://" + uri10 + "/scripts/12213/dy-coll-min.js")
			.get("http://" + uri10 + "/scripts/12213/dy-coll-min.js")
			.headers(headers_8)
			//.check(status.is(304))
			,
            http("request_13")
			.get(uri09 + "/eurogrand-desktop-theme/images/EuroGrandLogo.png")
			.headers(headers_13)
			//.check(status.is(304))
			,
            http(uri09 + "/eurogrand-desktop-theme/js/dist/main.min.js?t=1473687504000")
			.get(uri09 + "/eurogrand-desktop-theme/js/dist/main.min.js?t=1473687504000")
			.headers(headers_8)
			//.check(status.is(304))
			,
            http(uri09 + "/eurogrand-desktop-theme/images/spinner.png")
			.get(uri09 + "/eurogrand-desktop-theme/images/spinner.png")
			.headers(headers_13)
			//.check(status.is(304))
			,
            http("http://" + uri04 + "/action-uic/0?ti=5036968&Ver=2&mid=9387cfba-4a7e-bb7a-fdaf-2b7da53532d3&evt=pageLoad&lt=2506&pi=1001431019&lg=en-US&sw=1920&sh=1080&sc=24&tl=EuroGrand%20Casino%20-%20liferay.com&p=http%3A%2F%2Fwww-stg.eurogrand.com%2F&r=&rn=999997")
			.get("http://" + uri04 + "/action-uic/0?ti=5036968&Ver=2&mid=9387cfba-4a7e-bb7a-fdaf-2b7da53532d3&evt=pageLoad&lt=2506&pi=1001431019&lg=en-US&sw=1920&sh=1080&sc=24&tl=EuroGrand%20Casino%20-%20liferay.com&p=http%3A%2F%2Fwww-stg.eurogrand.com%2F&r=&rn=999997")
			.headers(headers_13),
            http(uri08 + "/api_dynamic.js")
			.get(uri08 + "/api_dynamic.js")
			.headers(headers_8)
			//.check(status.is(304))
			,
            http(uri06 + "/?t=1474377706508")
			.get(uri06 + "/?t=1474377706508")
			.headers(headers_23),
            http(uri11 + "/st?sec=8765453&inHead=true&id=0&ref=&sr=1920x1080&altip=")
			.get(uri11 + "/st?sec=8765453&inHead=true&id=0&ref=&sr=1920x1080&altip=")
			.headers(headers_8),
            http(uri09 + "/?p_p_id=mobileinfo_WAR_mobileportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=getJackpotsJson&languageId=en_GB&t=1474377606000&currencyCode=USD")
			.get(uri09 + "/?p_p_id=mobileinfo_WAR_mobileportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=getJackpotsJson&languageId=en_GB&t=1474377606000&currencyCode=USD")
			.headers(headers_25),
            http("http://" + uri02 + "/uia")
			.post("http://" + uri02 + "/uia")
			.headers(headers_26)
			.formParam("id", "-2837267613445192911")
			.formParam("se", "8765453")
			.formParam("us", "19.0.1")
			.formParam("cl", "dk.w.i11.ws.frv5.tos.")
			.formParam("rf", "")
			.formParam("trf", "0")
			.formParam("p", "1")
			.formParam("sub", "src-www-stg.eurogrand.com")
			.formParam("sd", "")
			.formParam("url", "http://src-www-stg.eurogrand.com/")
			.formParam("title", "EuroGrand Casino - liferay.com")
			.formParam("lay", "def")
			.formParam("ses", "83ffb2af884f1fde38814e1c37dd05c5")
			.formParam("nses", "false")
			.formParam("sesst", "0")
			.formParam("aud", "")
			.formParam("svars", "")
			.formParam("gv", "")
			.formParam("exps", """[["41485","447773","1392258",0,null,null,"2783692037908678036","2","3"]]""")
			.formParam("lts", "16:21")
			.formParam("ctx", "")
			.formParam("lpInfo", "false")
			.formParam("expSes", "0")
			.formParam("br", "Other")
			.formParam("tsrc", "Direct")
			.formParam("geoData", "")
			.formParam("feedProps[categories]", "")
			.formParam("feedProps[keywords]", ""),
            /*http(uri06 + "/websocket/fd495d28-bd03-4e32-b533-52f49c077897")
			.get(uri06 + "/websocket/fd495d28-bd03-4e32-b533-52f49c077897")
			.headers(headers_27)
			//.check(status.is(101))
			,*/
            http(uri09 + "/?p_p_id=mobileinfo_WAR_mobileportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=getInitialResources&translations=bonus-multi-view&languageId=en_GB&device=%7B%22os%22%3A%22windows%22%2C%22deviceName%22%3A%22windows%22%2C%22formFactor%22%3A%22desktop%22%7D&t=1474377606000")
			.get(uri09 + "/?p_p_id=mobileinfo_WAR_mobileportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=getInitialResources&translations=bonus-multi-view&languageId=en_GB&device=%7B%22os%22%3A%22windows%22%2C%22deviceName%22%3A%22windows%22%2C%22formFactor%22%3A%22desktop%22%7D&t=1474377606000")
			.headers(headers_25),
            http("https://" + uri12 + ":443/jswrapper/integration.js.php?casino=eurogrand")
			.get("https://" + uri12 + ":443/jswrapper/integration.js.php?casino=eurogrand")
			.headers(headers_30),
            http(uri09 + "/?url=/&role=guest&languageId=en_GB&p_p_id=mobileinfo_WAR_mobileportlet&p_p_lifecycle=2&p_p_resource_id=getPageInfoJson&device=%7B%22os%22%3A%22windows%22%2C%22deviceName%22%3A%22windows%22%2C%22formFactor%22%3A%22desktop%22%7D&t=1474377606000")
			.get(uri09 + "/?url=/&role=guest&languageId=en_GB&p_p_id=mobileinfo_WAR_mobileportlet&p_p_lifecycle=2&p_p_resource_id=getPageInfoJson&device=%7B%22os%22%3A%22windows%22%2C%22deviceName%22%3A%22windows%22%2C%22formFactor%22%3A%22desktop%22%7D&t=1474377606000")
			.headers(headers_25),
            http(uri09 + "/c/journal/view_article_plain_content?articleId=SIDE-MENU-BANNER&groupId=15023&languageId=en_GB&t=1474377606000")
			.get(uri09 + "/c/journal/view_article_plain_content?articleId=SIDE-MENU-BANNER&groupId=15023&languageId=en_GB&t=1474377606000")
			.headers(headers_32),
            http(uri09 + "/mobile-portlet/sounds/chat_out.mp3")
			.get(uri09 + "/mobile-portlet/sounds/chat_out.mp3")
			.headers(headers_33),
            http(uri09 + "/mobile-portlet/sounds/chat_out.mp3")
			.get(uri09 + "/mobile-portlet/sounds/chat_out.mp3")
			.headers(headers_34),
            http(uri09 + "/mobile-portlet/sounds/chat_in.mp3")
			.get(uri09 + "/mobile-portlet/sounds/chat_in.mp3")
			.headers(headers_33),
            http(uri09 + "/mobile-portlet/sounds/chat_in.mp3")
			.get(uri09 + "/mobile-portlet/sounds/chat_in.mp3")
			.headers(headers_34)))
		.pause(8)
		.exec(http("/socket.io/1/xhr-polling/fd495d28-bd03-4e32-b533-52f49c077897?t=1474377717190")
			.get("/socket.io/1/xhr-polling/fd495d28-bd03-4e32-b533-52f49c077897?t=1474377717190")
			.headers(headers_23)
			.resources(http(uri06 + "/xhr-polling/fd495d28-bd03-4e32-b533-52f49c077897?t=1474377717696")
			.post(uri06 + "/xhr-polling/fd495d28-bd03-4e32-b533-52f49c077897?t=1474377717696")
			.headers(headers_38)
			.body(RawFileBody("RecordedSimulation_0038_request.txt")),
            http(uri06 + "/xhr-polling/fd495d28-bd03-4e32-b533-52f49c077897?t=1474377717697")
			.get(uri06 + "/xhr-polling/fd495d28-bd03-4e32-b533-52f49c077897?t=1474377717697")
			.headers(headers_23)))
		.exec(http(uri05 + "/track_history")
			.get(uri05 + "/track_history")
			.headers(headers_1))

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