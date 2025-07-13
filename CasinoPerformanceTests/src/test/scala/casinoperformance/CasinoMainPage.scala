package casinoperformance

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

import java.io.File
import com.typesafe.config.{ Config, ConfigFactory }

class CasinoMainPage extends Simulation {

  //set test config from config file
  var conf = ConfigFactory.load
  lazy val numberOfUsers = conf.getString("users")
  lazy val duration = conf.getString("duration")

  val commandLineParamUsers = Integer.getInteger("users", 1)
  val commandLineParamDuration = Integer.getInteger("duration", 1)

  System.out.println("Test will run with: " + commandLineParamUsers + " users per second rate")
  System.out.println("Duration for test execution: " + commandLineParamDuration + " minutes")

  val httpProtocol = http
    .baseURL("https://gaming.williamhill-pp1.com")
    .inferHtmlResources(BlackList(""".*\.css""", """.*\.js""", """.*\.ico"""), WhiteList())

  val headers_0 = Map("Origin" -> "https://casino.williamhill-pp1.com")

  val headers_2 = Map(
    "Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Encoding" -> "gzip, deflate")

  val headers_3 = Map("Accept" -> "*/*")

  val headers_10 = Map("Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")

  val uri1 = "https://gaming.williamhill-pp1.com:443"
  val uri2 = "https://casino.williamhill-pp1.com:443/api"
  val uri3 = "https://nexus.ensighten.com:443/williamhill/pp1"
  val uri4 = "casino.williamhill-pp1.com"
  val uri5 = "auth.williamhill-pp1.com"

  val scn = scenario("CasinoMainPage")
    .exec(http("sessioncheck")
      .get("/session/user/sessioncheck?wallet=casino")
      .headers(headers_0))
    .pause(4)
    .exec(http("/session/user/sessioncheck?wallet=casino")
      .get("/session/user/sessioncheck?wallet=casino")
      .headers(headers_0)
      .resources(http("http://" + uri4 + "/")
        .get("http://" + uri4 + "/")
        .headers(headers_2)))
    .pause(1)
    .exec(http(uri3 + "/serverComponent.php?r=88759298.32564384&ClientID=154&PageID=https%3A%2F%2Fcasino.williamhill-pp1.com%2F%23!%2F")
      .get(uri3 + "/serverComponent.php?r=88759298.32564384&ClientID=154&PageID=https%3A%2F%2Fcasino.williamhill-pp1.com%2F%23!%2F")
      .headers(headers_3)
      .resources(http(uri3 + "/code/fa615befd0c495b70176d4782988a802.js?conditionId0=257308")
        .get(uri3 + "/code/fa615befd0c495b70176d4782988a802.js?conditionId0=257308")
        .headers(headers_3),
        http(uri3 + "/code/39acef6cfe8b56a9c1bc621faa9d14c0.js?conditionId0=257307")
          .get(uri3 + "/code/39acef6cfe8b56a9c1bc621faa9d14c0.js?conditionId0=257307")
          .headers(headers_3),
        http(uri2 + "/integrations")
          .get(uri2 + "/integrations"),
        http(uri2 + "/util-navigation/desktop")
          .get(uri2 + "/util-navigation/desktop"),
        http(uri3 + "/code/33b667eca2090058d5f8d16671e735f2.js?conditionId0=209495")
          .get(uri3 + "/code/33b667eca2090058d5f8d16671e735f2.js?conditionId0=209495")
          .headers(headers_3),
        http(uri2 + "/promotions")
          .get(uri2 + "/promotions"),
        http(uri1 + "/session/auth/login?gateway=true&cust_login=true&returnUrl=https%3A%2F%2Fgaming.williamhill-pp1.com%2Fsession%2Fuser%2Fsessioncheck-iframe%3FdocUrl%3Dhttps%253A%252F%252Fcasino.williamhill-pp1.com%252F%2523!%252F")
          .get(uri1 + "/session/auth/login?gateway=true&cust_login=true&returnUrl=https%3A%2F%2Fgaming.williamhill-pp1.com%2Fsession%2Fuser%2Fsessioncheck-iframe%3FdocUrl%3Dhttps%253A%252F%252Fcasino.williamhill-pp1.com%252F%2523!%252F")
          .headers(headers_10),
        http(uri2 + "/customizations")
          .get(uri2 + "/customizations"),
        http(uri2 + "/mappings")
          .get(uri2 + "/mappings"),
        http(uri2 + "/account-options/desktop")
          .get(uri2 + "/account-options/desktop"),
        http(uri2 + "/menu/desktop")
          .get(uri2 + "/menu/desktop"),
        http(uri2 + "/recently-played-i18n")
          .get(uri2 + "/recently-played-i18n"),
        http(uri2 + "/toptiles")
          .get(uri2 + "/toptiles"),
        http(uri2 + "/accountinfo")
          .get(uri2 + "/accountinfo"),
        http(uri1 + "/casinoapi/v2/jackpots/getjackpots?info=2&casino=playtech&currency=gbp")
          .get(uri1 + "/casinoapi/v2/jackpots/getjackpots?info=2&casino=playtech&currency=gbp")
          .headers(headers_0),
        http(uri1 + "/session/user/sessioncheck?wallet=casino")
          .get(uri1 + "/session/user/sessioncheck?wallet=casino")
          .headers(headers_0),
        http("https://" + uri5 + ":443/cas/login?service=https%3A%2F%2Fgaming.williamhill-pp1.com%2Fsession%2Fauth%2Freturn&gateway=true&cust_login=true&joinin_link=http%3A%2F%2Fwilliamhill.com")
          .get("https://" + uri5 + ":443/cas/login?service=https%3A%2F%2Fgaming.williamhill-pp1.com%2Fsession%2Fauth%2Freturn&gateway=true&cust_login=true&joinin_link=http%3A%2F%2Fwilliamhill.com")
          .headers(headers_10),
        http(uri2 + "/categories")
          .get(uri2 + "/categories"),
        http(uri1 + "/session/auth/return")
          .get(uri1 + "/session/auth/return")
          .headers(headers_10),
        http(uri1 + "/session/user/sessioncheck-iframe?docUrl=https%3A%2F%2Fcasino.williamhill-pp1.com%2F%23!%2F")
          .get(uri1 + "/session/user/sessioncheck-iframe?docUrl=https%3A%2F%2Fcasino.williamhill-pp1.com%2F%23!%2F")
          .headers(headers_10)))
    .pause(4)
    .exec(http("/session/user/sessioncheck?wallet=casino")
      .get("/session/user/sessioncheck?wallet=casino")
      .headers(headers_0))
  setUp(scn.inject(constantUsersPerSec(commandLineParamUsers.toInt).during(commandLineParamDuration.toInt minutes).randomized)).maxDuration(commandLineParamDuration.toInt minutes).protocols(httpProtocol)
}
