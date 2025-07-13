package cucumber_runners;

import java.util.Random;

import org.junit.internal.runners.JUnit4ClassRunner;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;

import junit.framework.JUnit4TestAdapter;
import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestResult;
import junit.framework.TestSuite;
import junit.textui.TestRunner;

public class TestAdd extends TestCase {
	     //private Adder adder;
	     private long expected;
	 
	     public TestAdd(int a, int b, long expected) {
	         super("test" + a + "addedTo" + b + "equals" + expected);
	         //this.adder = new Adder(a, b);        
	         this.expected = expected;
	     }
	    
	    protected void runTest() throws Throwable {
	        //assertEquals(expected, adder.sum());
	    }
	    
	    public static Test suite() {
	        TestSuite suite = new TestSuite(DropdownRunner.class.getName()); 
	        
	        //suite.run(result);.addTestSuite(new JUnit4ClassRunner(runnerOld.class));
	    	//JUnitCore junit = new JUnitCore();
	    	//Result result = JUnitCore.runClasses(runnerOld2.class);
	        
	        JUnit4TestAdapter jUnit4TestAdapter = new JUnit4TestAdapter(DropdownRunner.class);
			//TestResult result = TestRunner.run(jUnit4TestAdapter);
	        suite.addTest(jUnit4TestAdapter);
			//suite.run(result);
			//suite.run(result);
	    	//suite.createTest(theClass, name);
	       /* Random r = new Random();
	        for(int i = 0; i < 10; i++) {
	            int a = r.nextInt(100);
	            int b = r.nextInt(100);
	            long expected = a + b;
	            suite.addTestSuite(runnerOld.class);
	            //suite.addTest(new TestAdd(a, b, expected));
	        }*/
	        return suite;
	    }
	}
