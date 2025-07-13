package com.GroovyScriptEng;

import java.io.IOException;

import groovy.lang.Binding;
import groovy.util.GroovyScriptEngine;
import groovy.util.ResourceException;
import groovy.util.ScriptException;

public class GroovyScript {

	public static void main(String[] args) throws IOException, ResourceException, ScriptException {
		
		String[] roots = new String[] {"C:\\Users\\yanivc\\workspace\\Tester"};//{ "/my/groovy/script/path" };
		GroovyScriptEngine gse = new GroovyScriptEngine(roots);
		Binding binding = new Binding();
		binding.setVariable("input", "world");
		gse.run("hello.groovy", binding);
		System.out.println(binding.getVariable("output"));
	}

}
