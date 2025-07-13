package de.vogella.junit.first;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.Result;

public class MyClassTest {
	
	MyClass tester = new MyClass();
	@Test
	public void testMultiply() {
		
	    //assertEquals("Result", 50, tester.multiply(10, 5));
	    assertEquals("Test multiply",51,tester.multiply(10, 5));
	}
	
	@Test
	public void testdivision() {
		//MyClass tester = new MyClass();
	    assertEquals("Result", 2, tester.division(10, 5));
	}
}
