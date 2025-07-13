
/*package ExtendRunner;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.ResourceBundle;
import java.util.regex.Pattern;

import org.openqa.selenium.WebDriver;

import cucumber.runtime.ClassFinder;
import cucumber.runtime.Runtime;
import cucumber.runtime.RuntimeOptions;
import cucumber.runtime.io.MultiLoader;
import cucumber.runtime.io.ResourceLoaderClassFinder;
import cucumber.runtime.junit.ExecutionUnitRunner;
import cucumber.runtime.junit.JUnitReporter;
import cucumber.runtime.model.CucumberFeature;

public class AbstractCucumberTest {

	protected long threadId;
	protected WebDriver driver;
    public static final String CUCUMBER_STEPS_PACKAGE_PROPERTY = "cucumber.steps.package";
    //protected static final String STEPS_PACKAGE = ResourceBundle.getBundle("cucumber").getString(CUCUMBER_STEPS_PACKAGE_PROPERTY);
    //protected static final String RESOURCES =
    //        "src" + File.separator + "test" + File.separator + "resources" + File.separator;
    private ClassLoader classLoader = getClass().getClassLoader();
    private MultiLoader multiLoader = new MultiLoader(classLoader);

    private static final int RETRY = Integer.parseInt(System.getProperty("retry.tests", "0"));
    
    public void run() {
        run(0, null, this.getClass().getPackage().getName(), null);
    }

	public void run(int retry, String scenario, String packageName, String feature) {
        // setup
        //RuntimeOptions runtimeOptions = new RuntimeOptions(new Properties());
		//--name 'the fox' --plugin pretty --strict
		if (packageName == null) {
        	packageName = this.getClass().getPackage().getName();
		}
		if (feature == null) {
			feature = "src/test/resources/cucumber/features";
		}
		plugin = {"pretty",
	        "html:target/cucumber/cucumber-html-report",
	        "json:target/cucumber/cucumber-json-report.json"
	        },
		dryRun=false,
		monochrome=true,
		tags = "@google2",
		features = "src/test/resources/cucumber/features",
		glue = {"stepdefs"})
		String option = "--plugin pretty "+
        		//"--[no-]-dry-run "+
        		//"--[yes-]-monochrome "+
        		"--paths "+feature+" "+
        		"--glue "+ packageName +" "+//stepdefs
        		"--tags "+ scenario;
        RuntimeOptions runtimeOptions = new RuntimeOptions(option);
        runtimeOptions.addPlugin("html:target/cucumber/cucumber-html-report");
        runtimeOptions.addPlugin("json:target/cucumber/cucumber-json-report.json");
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
        
        System.out.println("Try(" + retry + ") Running test featureName=" + feature + "; scenario=" +
                scenario);
        //runtimeOptions.formatters.clear();
        //runtimeOptions.formatter(classLoader);
        //runtimeOptions.formatters.add(new CucumberTestNgFormatter(System.out));
        //runtimeOptions.filters.add(Pattern.compile(scenarioName + "$"));
        //getClass().getPackage().getName();
        //runtimeOptions.featurePaths
                //.add(RESOURCES + featureClass.getPackage().getName().replace(".", File.separator) + File.separator
                //        + featureName + ".feature");
        if (feature != null) {
        	runtimeOptions.featurePaths.add(RESOURCES + feature);
		}else{
			runtimeOptions.featurePaths.add(RESOURCES + featureClass.getPackage().getName().replace(".", File.separator) +
					File.separator + featureName + ".feature");
		}
        
        //Runtime runtime = new Runtime(multiLoader, classLoader, runtimeOptions);
        final List<CucumberFeature> cucumberFeatures = runtimeOptions.cucumberFeatures(multiLoader);
        JUnitReporter jUnitReporter = new JUnitReporter(runtimeOptions.reporter(classLoader), runtimeOptions.formatter(classLoader), runtimeOptions.isStrict());
        //addChildren(cucumberFeatures);
        ClassFinder classFinder = new ResourceLoaderClassFinder(multiLoader, classLoader);
        Runtime runtime = new Runtime(multiLoader, classFinder ,classLoader, runtimeOptions);
        //CucumberScenario.
        //ExecutionUnitRunner featureElementRunner = new ExecutionUnitRunner(runtime, scenario, jUnitReporter);
        //featureElementRunner.run();

        // act
        try {
			runtime.run();
		} catch (IOException e) {
			System.out.println(runtime.exitStatus());
			System.err.println(e);
		}

        // verify
        if (runtime.getErrors().size() > 0) {
            if (retry < RETRY) {
            	//driver = SessionRepository.getWebDriver(Thread.currentThread().getId());
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
						Utility.logError(e, myTestContext, driver, true);
					}else{
						throw new RuntimeException(e);
					}
				}
				Utility.logError(e, myTestContext, driver, false);
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