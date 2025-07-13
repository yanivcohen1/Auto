package com.who.auto.records.eg;

import scala.concurrent.duration._
import com.who.auto.lib._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

 class RunAllSenarions extends Simulation{

    //val brand = ReadFromPropertyFile.systemProperty("brand")
    val baseUrl = ReadFromPropertyFile.getFromEnvirmentProperty("Eg")

		val LoginStress = new LoginStress
		val RegisterStress = new RegisterStress
		val CasinoMainPage = new CasinoMainPage
		
  	val injectUsers = ReadFromPropertyFile.systemProperty("injectUsers")
    val injectPeriodInSeconds = ReadFromPropertyFile.systemProperty("injectPeriodInSeconds")
  	println("injectUsers => " + injectUsers )
  	println("injectPeriodInSeconds =>" + injectPeriodInSeconds)
  	println("baseUrl =>" + baseUrl)
	  
	  setUp(LoginStress.users.inject(rampUsers(injectUsers.toInt) over (injectPeriodInSeconds.toInt seconds)).protocols(LoginStress.httpProtocol),
	        RegisterStress.users.inject(rampUsers(injectUsers.toInt) over (injectPeriodInSeconds.toInt seconds)).protocols(RegisterStress.httpProtocol),
	        CasinoMainPage.users.inject(rampUsers(injectUsers.toInt) over (injectPeriodInSeconds.toInt seconds))).protocols(CasinoMainPage.httpProtocol)  
}

	/*class Student {
	  var id: Long = _
	  var name: String = _
	}

		implicit def reflector(ref: AnyRef) = new {
		  def getV(name: String): Any = ref.getClass.getMethods.find(_.getName == name).get.invoke(ref)
		  def setV(name: String, value: Any): Unit = ref.getClass.getMethods.find(_.getName == name + "_$eq").get.invoke(ref, value.asInstanceOf[AnyRef])
		}

		val s = new Student
		s.setV("name", "Walter")
		println(s.getV("name"))  // prints "Walter"
		s.setV("id", 1234)
		println(s.getV("id"))    // prints "1234"*/