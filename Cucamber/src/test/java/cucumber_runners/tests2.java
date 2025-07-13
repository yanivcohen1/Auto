package cucumber_runners;

import junit.framework.JUnit4TestAdapter;
import junit.framework.TestSuite;

import org.junit.Test;
import org.junit.internal.runners.JUnit4ClassRunner;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;
import org.junit.runners.AllTests;

import cucumber.api.junit.Cucumber;

@RunWith(AllTests.class)
public class tests2
{
	public static TestSuite suite;
    public static TestSuite suite()
    {
        suite = new TestSuite();
        suite.addTest(new JUnit4TestAdapter(DropdownRunner.class));
        //JUnitCore junit = new JUnitCore();
        //Result result = junit.run(runnerOld.class);
        //suite.run(result.);//(new JUnit4TestAdapter(runnerOld.class));

        return suite;
     }
}

/*@RunWith(Cucumber.class)
public class test1 {

	public void main() {
		JUnitCore junit = new JUnitCore();
		Result result = junit.run(runnerOld.class);
	}

}*/
