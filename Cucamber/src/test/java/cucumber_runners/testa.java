/*package cucumber_runners;

import junit.framework.JUnit4TestAdapter;
import junit.framework.TestResult;
import junit.framework.TestSuite;
import junit.runner.BaseTestRunner;
import junit.textui.ResultPrinter;
import junit.textui.TestRunner;

import org.junit.Test;
import org.junit.runners.Suite;

public class testa extends BaseTestRunner{

	public static TestRunner testRunner = new TestRunner();
	public static ResultPrinter fPrinter = new ResultPrinter(System.out);
	public static TestResult result;
	
	@Test
	public void test1() {
		JUnit4TestAdapter jUnit4TestAdapter = new JUnit4TestAdapter(runnerOld.class);
		result = createTestResult();
		result.addListener(this.fPrinter);
		long startTime = System.currentTimeMillis();
		jUnit4TestAdapter.run(result);
		long endTime = System.currentTimeMillis();
		long runTime = endTime - startTime;
		//this.fPrinter.print(result, runTime);
		//TestResult result = testRunner.run(jUnit4TestAdapter);
		//TestSuite.createTest(jUnit4TestAdapter, null);
	}
	
	protected TestResult createTestResult() {
		return new TestResult();
	}
	
	@Override
	protected void runFailed(String paramString) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void testEnded(String paramString) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void testFailed(int paramInt, junit.framework.Test paramTest,
			Throwable paramThrowable) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void testStarted(String paramString) {
		// TODO Auto-generated method stub
		
	}
}
*/