package com.wh.auto.extendRunner;

import java.io.IOException;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.openqa.selenium.WebDriver;

public class LocalRemoteDriver {

	public void set_Driver(WebDriver driver){
		//super.setDriver(driver);
		ScriptEngineManager factory = new ScriptEngineManager();
		ScriptEngine engine = factory.getEngineByName("groovy");
		//String fact = "def factorial(n) { n == 1 ? 1 : n * factorial(n - 1) }";
		String fact = "def factorial(n) { com.williamhill.whgtf.asl.AutomationScriptingLanguage.setDriver(n); }";
		try {
			engine.eval(fact);
			Invocable inv = (Invocable) engine;
			Object[] params = {driver};
			//Object result = inv.invokeFunction("factorial", params);
		//} catch (NoSuchMethodException e) {
			//e.printStackTrace();
		} catch (ScriptException e) {
			e.printStackTrace();
		}
		//System.out.println(result);//120 
	}
}