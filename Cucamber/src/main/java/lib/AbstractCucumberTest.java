/*package lib;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.ResourceBundle;
import java.util.regex.Pattern;

import org.junit.runner.Description;
import org.junit.runner.notification.RunNotifier;
import org.junit.runners.ParentRunner;
import org.junit.runners.model.InitializationError;

import cucumber.runtime.Runtime;
import cucumber.runtime.RuntimeOptions;
import cucumber.runtime.io.MultiLoader;
import cucumber.runtime.io.ResourceLoader;
import cucumber.runtime.junit.Assertions;
import cucumber.runtime.junit.FeatureRunner;
import cucumber.runtime.junit.JUnitReporter;
import cucumber.runtime.junit.RuntimeOptionsFactory;
import cucumber.runtime.model.CucumberFeature;
import cucumber.runtime.snippets.SummaryPrinter;

public class AbstractCucumberTest extends ParentRunner<FeatureRunner>{

	private final JUnitReporter jUnitReporter;
    private final List<FeatureRunner> children = new ArrayList<FeatureRunner>();
    private final Runtime runtime;
    private ClassLoader classLoader = getClass().getClassLoader();
    private MultiLoader multiLoader = new MultiLoader(classLoader);
    private static final int RETRY = Integer.parseInt(System.getProperty("retry.tests", "0"));
    
    public AbstractCucumberTest(Class clazz) throws InitializationError, IOException {
        super(clazz);
        ClassLoader classLoader = clazz.getClassLoader();
        Assertions.assertNoCucumberAnnotatedMethods(clazz);

        RuntimeOptionsFactory runtimeOptionsFactory = new RuntimeOptionsFactory(clazz);
        RuntimeOptions runtimeOptions = runtimeOptionsFactory.create();

        ResourceLoader resourceLoader = new MultiLoader(classLoader);
        runtime = new Runtime(resourceLoader, classLoader, runtimeOptions);

        jUnitReporter = new JUnitReporter(runtimeOptions.reporter(classLoader), runtimeOptions.formatter(classLoader), runtimeOptions.strict);
        addChildren(runtimeOptions.cucumberFeatures(resourceLoader));
    }

	//protected long threadId;
    //public static final String CUCUMBER_STEPS_PACKAGE_PROPERTY = "cucumber.steps.package";
    //protected static final String STEPS_PACKAGE = ResourceBundle.getBundle("cucumber").getString(CUCUMBER_STEPS_PACKAGE_PROPERTY);
    //protected static final String RESOURCES =
            //"src" + File.separator + "test" + File.separator + "resources" + File.separator;
    
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
        }
        if (featureClass == null || scenarioName == null || featureName == null) {
            //throw new RuntimeException("cannot find test implementation");
        }
        //Reporter.log("Try(" + retry + ") Running test featureName=" + featureName + "; scenario=" +
        //        scenarioName, true, Style.BOLD, Color.BLUE);
        runtimeOptions.formatters.clear();
        //runtimeOptions.formatters()
        //runtimeOptions.formatters.add(new CucumberTestNgFormatter(System.out));
        runtimeOptions.filters.add(Pattern.compile(scenario + "$"));
        getClass().getPackage().getName();
        //runtimeOptions.featurePaths
                //.add(RESOURCES + featureClass.getPackage().getName().replace(".", File.separator) + File.separator
                //        + featureName + ".feature");
        //if (feature != null) {
        	//runtimeOptions.featurePaths.add(RESOURCES + feature);
		//}else{
			runtimeOptions.featurePaths.add(feature);
		//}
        
        //Runtime runtime = new Runtime(multiLoader, classLoader, runtimeOptions);
        //JUnitReporter jUnitReporter = new JUnitReporter(runtimeOptions.reporter(classLoader), runtimeOptions.formatter(classLoader), runtimeOptions.strict);
        //addChildren(runtimeOptions.cucumberFeatures(multiLoader));
        // act
        //runtime.run();
		
		super.run(new RunNotifier());
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

	@Override
    public List<FeatureRunner> getChildren() {
        return children;
    }

    @Override
    protected Description describeChild(FeatureRunner child) {
        return child.getDescription();
    }

    @Override
    protected void runChild(FeatureRunner child, RunNotifier notifier) {
        child.run(notifier);
    }

    @Override
    public void run(RunNotifier notifier) {
        super.run(notifier);
        jUnitReporter.done();
        new SummaryPrinter(System.out).print(runtime);
        jUnitReporter.close();
    }

    private void addChildren(List<CucumberFeature> cucumberFeatures) throws InitializationError {
        for (CucumberFeature cucumberFeature : cucumberFeatures) {
            children.add(new FeatureRunner(cucumberFeature, runtime, jUnitReporter));
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