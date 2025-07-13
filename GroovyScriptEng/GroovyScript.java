package com.GroovyScriptEng;

import java.io.IOException;

import groovy.lang.Binding;
import groovy.util.GroovyScriptEngine;
import groovy.util.ResourceException;
import groovy.util.ScriptException;

public class GroovyScript {

	public static void main(String[] args) throws IOException, ResourceException, ScriptException {
		
		//String[] roots = new String[] {"C:\\Users\\yanivc\\workspace\\Tester"};//{ "/my/groovy/script/path" };
		String[] roots = new String[] {"C:\\Users\\yanivc\\workspace\\Tester\\src\\com\\GroovyScriptEng"};
		GroovyScriptEngine gse = new GroovyScriptEngine(roots);
		Binding binding = new Binding();
		binding.setVariable("input", "world");
		gse.run("hello.groovy", binding);
		System.out.println(binding.getVariable("output"));
		String a = test(1);
	}

	private static String test(int a) {
		return Integer.toString(a+1);
		
	}

}
