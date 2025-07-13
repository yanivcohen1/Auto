/*package com.wh.auto.cucumber;

import java.io.File;
import java.util.Map;
import java.util.Properties;
import java.util.ResourceBundle;
import java.util.regex.Pattern;

import org.openqa.selenium.WebDriver;
import org.testng.ITestContext;
import org.testng.internal.annotations.IAfterTest;

import com.wh.auto.TestObjects.AbstractWhPageObjectSpring;
import com.wh.auto.TestObjects.IAfterTestRun;
//import com.wh.auto.TestObjects.AbstractWhPageObjectSpring;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.common.Reporter.Color;
import com.wh.auto.common.Reporter.Style;
import com.wh.auto.cucumber.CucumberTestNgFormatter;
import com.wh.auto.cucumber.annotation.Feature;
import com.wh.auto.cucumber.annotation.Scenario;
import com.wh.auto.repository.SessionRepository;

import cucumber.runtime.Runtime;
import cucumber.runtime.RuntimeOptions;
import cucumber.runtime.io.MultiLoader;

public abstract class AbstractCucumberTest extends WebDriverUtils implements IAfterTestRun{

	protected long threadId;
	protected WebDriver driver;
	protected ITestContext myTestContext;
    public static final String CUCUMBER_STEPS_PACKAGE_PROPERTY = "cucumber.steps.package";
    protected static final String STEPS_PACKAGE = ResourceBundle.getBundle("cucumber").getString(CUCUMBER_STEPS_PACKAGE_PROPERTY);
    protected static final String RESOURCES =
            "src" + File.separator + "test" + File.separator + "resources" + File.separator;
    private ClassLoader classLoader = getClass().getClassLoader();
    private MultiLoader multiLoader = new MultiLoader(classLoader);

    private static final int RETRY = Integer.parseInt(System.getProperty("retry.tests", "0"));
    
    public void run() {
        run(0, null, this.getClass().getPackage().getName(), null);
    }

	public void run(int retry, String scenario, String packageName, String feature) {
        // setup
        RuntimeOptions runtimeOptions = new RuntimeOptions(new Properties());
        if (packageName != null) {
        	runtimeOptions.glue.add(packageName);
		}else{
			runtimeOptions.glue.add(this.getClass().getPackage().getName());
		}
        //runtimeOptions.glue.add(STEPS_PACKAGE);
        //runtimeOptions.glue.add("cucumber.api.spring");//{"com.wh.auto", "cucumber.api.spring"}
        StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();
        String scenarioName = null;
        String featureName = null;
        Class<?> featureClass = null;
        System.out.println("stacktrace:");
        for (StackTraceElement stackTraceElement : stackTrace) {
            System.out.println(stackTraceElement.toString());
            try {
                featureClass = classLoader.loadClass(stackTraceElement.getClassName());
                Feature annotation = featureClass.getAnnotation(Feature.class);
					if (annotation != null) {
						featureName = annotation.value();
						if (scenario == null) {
							try {
								scenarioName = featureClass.getMethod(stackTraceElement.getMethodName())
										.getAnnotation(Scenario.class).value();
							} catch (Exception e) {
								Class[] cArg = new Class[1];
								cArg[0] = String.class;
								scenarioName = featureClass.getMethod(stackTraceElement.getMethodName(), cArg)
										.getAnnotation(Scenario.class).value();
							} 
						}else{
							scenarioName = scenario;
						}
						break;
					} 
            } catch (NoSuchMethodException | ClassNotFoundException e) {
                throw new RuntimeException(e);
            }
        }
        if (featureClass == null || scenarioName == null || featureName == null) {
            throw new RuntimeException("cannot find test implementation");
        }
        Reporter.log("Try(" + retry + ") Running test featureName=" + featureName + "; scenario=" +
                scenarioName, true, Style.BOLD, Color.BLUE);
        runtimeOptions.formatters.clear();
        runtimeOptions.formatters.add(new CucumberTestNgFormatter(System.out));
        runtimeOptions.filters.add(Pattern.compile(scenarioName + "$"));
        getClass().getPackage().getName();
        //runtimeOptions.featurePaths
                //.add(RESOURCES + featureClass.getPackage().getName().replace(".", File.separator) + File.separator
                //        + featureName + ".feature");
        if (feature != null) {
        	runtimeOptions.featurePaths.add(RESOURCES + feature);
		}else{
			runtimeOptions.featurePaths.add(RESOURCES + featureClass.getPackage().getName().replace(".", File.separator) +
					File.separator + featureName + ".feature");
		}
        
        Runtime runtime = new Runtime(multiLoader, classLoader, runtimeOptions);

        // act
        runtime.run();

        // verify
        if (runtime.getErrors().size() > 0) {
            if (retry < RETRY) {
            	driver = SessionRepository.getWebDriver(Thread.currentThread().getId());
            	//Utility.logError(runtime.getErrors().get(0), myTestContext, driver, false);
                run(retry + 1, scenario, packageName, feature);
            } else {
            	//Utility.logError(runtime.getErrors().get(0), myTestContext, driver, false);
                throw new RuntimeException(runtime.getErrors().get(0));
            }
        }
    }
    
    protected void runAndRetry(int retry){
    	runAndRetry(retry, null, null, null);
    }
    
    protected void runAndRetry(int retry, String scenario){
    	runAndRetry(retry, scenario, null, null);
    }
    
    protected void runAndRetry(int retry,String scenario , String feature){
    	runAndRetry(retry, scenario, null, feature);
    }
    
    protected void runAndRetry(String scenario , String feature){
    	runAndRetry(1, scenario, null, feature);
    }
    
    protected void runAndRetryVar(int retry, String scenario , String feature, Map<String, Object> variables, String className){
    	runAndRetryVar(retry, scenario, feature, null , variables, className);
    }
    
    protected void runAndRetryVar(String scenario , String feature, Map<String, Object> variables, String className){
    	runAndRetryVar(1, scenario, feature, null , variables, className);
    }
    
    protected void runAndRetryVar(int retry, String scenario , String feature, String packageName, Map<String, Object> variables, String className){
    	if (AbstractWhPageObjectSpring.initVariable != null) {
			//while (AbstractWhPageObjectSpring.initVariable) {
				try {
					Thread.sleep(10);
				} catch (InterruptedException e) {}
			//} 
		}
		AbstractWhPageObjectSpring.initVariable = true;
    	AbstractWhPageObjectSpring.VariablesMap = variables;
    	AbstractWhPageObjectSpring.className = className;
    	System.err.println(scenario);
    	for (Map.Entry<String, Object> entry : variables.entrySet()) {
    		System.err.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());
    	}
    	runAndRetry(retry, scenario, packageName, feature);
    }
    
    protected void runAndRetry(int retry, String scenario, String packageName, String feature) {
    	for (int i = 0; i < retry; i++) {
    		if(!Utility.developmentMac){
    			if (retry > 1) {
    				Utility.terminateChrome();
    				Utility.terminateSafari();
    			}
    		}
			try {
				run(0, scenario, packageName, feature);
				if (!Utility.developmentMac) {
					this.afterTest();
				}
				break;
			} catch (Exception e) {
				e.printStackTrace();
				//Utility.printStackTrace(e);
				driver = SessionRepository.getWebDriver(Thread.currentThread().getId());				
				if (i >= retry - 1) {
					if (retry > 1) {
						//Utility.logError(e, myTestContext, driver, true);
					}else{
						throw new RuntimeException(e);
					}
				}
				//Utility.logError(e, myTestContext, driver, false);
				if (!Utility.developmentMac) {
					this.afterTest();
				}
				Utility.terminateChrome();
    			Utility.terminateSafari();
			}
		}			
	}
    
}
*/