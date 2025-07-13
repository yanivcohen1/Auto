package com.wh.auto.common;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

import org.testng.IAnnotationTransformer;
import org.testng.annotations.ITestAnnotation;


public class MyTransformer implements IAnnotationTransformer {
	int index = 1;
	 /* public void transform(ITest annotation, Class testClass,
	                        Constructor testConstructor, Method testMethod)
	  {
	    if ("verify".equals(testMethod.getName())) {
	      annotation.setInvocationCount(15);
	    }
	  }*/

	public void transform(ITestAnnotation annotation, Class testClass, Constructor testConstructor, Method testMethod) {
		System.out.println("start test: "+testMethod.getName());
		//String s = "<style> img { height: 200px; width: 300px;} img:hover {height: 100%; width: 100%;} </style>";
		//arg0.addInjector(moduleInstances, injector);
		org.testng.Reporter.log("<style> img { height: 200px; width: 300px;} img:hover {height: 100%; width: 100%;} </style>");
		/*System.out.println(index);
		if ("browserTarget".equals(testMethod.getName())) {
		      //annotation.setInvocationCount(5);
		      System.out.println(index);
		      TransformerUtil.setTestAnnotation(annotation);
		      //annotation.setSuiteName(Integer.toString(index));
		      //annotation.setTestName(Integer.toString(index)+ "1");
		      //index++;
		    }
		index++;*/
	}
}
