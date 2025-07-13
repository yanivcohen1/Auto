package com.wh.auto.extendRunner;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.internal.AssumptionViolatedException;
import org.junit.runner.Description;
import org.junit.runner.Runner;
import org.junit.runner.notification.Failure;
import org.junit.runner.notification.RunNotifier;
import org.junit.runners.ParentRunner;
import org.junit.runners.Suite;
import org.junit.runners.model.InitializationError;

import com.wh.auto.common.Utility;
import com.wh.auto.elasticSearch.ElasticSearch;

import cucumber.runtime.CucumberException;
import cucumber.runtime.Runtime;
import cucumber.runtime.junit.ExecutionUnitRunner;
import cucumber.runtime.junit.JUnitReporter;
import cucumber.runtime.model.CucumberExamples;
import cucumber.runtime.model.CucumberScenario;
import cucumber.runtime.model.CucumberScenarioOutline;
import cucumber.runtime.model.CucumberTagStatement;

public class ExtendedExamplesRunner extends Suite {
    private int retryCount = 2;
    private Runtime runtime;

    private final CucumberExamples cucumberExamples;
    private Description description;
    private JUnitReporter jUnitReporter;
    private static int exampleCount = 0;
    private static List<Runner> runners;
    private static List<CucumberScenario> exampleScenarios;
    private static List<CucumberScenario> scenariosList = new ArrayList<CucumberScenario>();
    
    private boolean isPass = false;
    private final static String suite = System.getProperty("suite");
	String testName = "";
	String errorMsg = "";

    protected ExtendedExamplesRunner(Runtime runtime, CucumberExamples cucumberExamples, JUnitReporter jUnitReporter) throws InitializationError {
        super(ExtendedExamplesRunner.class, buildRunners(runtime, cucumberExamples, jUnitReporter));
        this.cucumberExamples = cucumberExamples;
        this.jUnitReporter = jUnitReporter;
        this.runtime = runtime;
    }

    private static List<Runner> buildRunners(Runtime runtime, CucumberExamples cucumberExamples, JUnitReporter jUnitReporter) {
        runners = new ArrayList<Runner>();
        exampleScenarios = cucumberExamples.createExampleScenarios();
        for (CucumberScenario scenario : exampleScenarios) {
            try {
                ExecutionUnitRunner exampleScenarioRunner = new ExecutionUnitRunner(runtime, scenario, jUnitReporter);
                runners.add(exampleScenarioRunner);
                scenariosList.add(scenario);
                System.out.println("Senario: " + scenario.getGherkinModel().getName());       
            } catch (InitializationError initializationError) {
                initializationError.printStackTrace();
            }
        }
        return runners;
    }

    
    public final Runtime getRuntime() {
        return runtime;
    }

    @Override
    protected String getName() {
        return cucumberExamples.getExamples().getKeyword() + ": " + cucumberExamples.getExamples().getName();
    }

    @Override
    public Description getDescription() {
        if (description == null) {
            description = Description.createSuiteDescription(getName(), cucumberExamples.getExamples());
            for (Runner child : getChildren()) {
                description.addChild(describeChild(child));
            }
        }
        return description;
    }

    @Override
    public void run(final RunNotifier notifier) {
        jUnitReporter.examples(cucumberExamples.getExamples());
        super.run(notifier);
    }


    @Override
    protected void runChild(Runner runner, RunNotifier notifier) {
        ParentRunner featureElementRunner = null;
        featureElementRunner = (ExecutionUnitRunner)runner;
        errorMsg = "";
        isPass = true;
        testName = scenariosList.get(exampleCount).getGherkinModel().getName();
        try {
                featureElementRunner.run(notifier);
                Assert.assertEquals(0, this.getRuntime().exitStatus());
                
        } catch (AssumptionViolatedException e) {
            notifier.fireTestAssumptionFailed(new Failure(runner.getDescription(), e));
        } catch (Throwable e) {
            retry(notifier, featureElementRunner, e, null);
        } finally {
        	if (isPass) {
        		errorMsg = "";
			}else{
				errorMsg = "step fail: " + CucumberTestNgFormatter.currentStep.getName() +
						Utility.getNewline() + " The error msg: " + CucumberTestNgFormatter.errorMsg +
						Utility.getNewline() + " The chrome console: " +
						Utility.getNewline() + SharedData.getChromeConsole(); 
			}
        	ElasticSearch.elasticSearchAddResults(suite, testName, isPass, errorMsg);
        	SharedData.setChromeConsole("");
            notifier.fireTestFinished(runner.getDescription());
        }
        exampleCount++;
   }

    public void retry(RunNotifier notifier, ParentRunner child, Throwable currentThrowable, CucumberScenario scenario1) {
        Throwable caughtThrowable = currentThrowable;
        CucumberScenario scenario = scenariosList.get(exampleCount);
        int a = child.testCount();
        ParentRunner featureElementRunner = null;
        boolean failed = true;
        this.getRuntime().getErrors().clear();
        int failedAttempts = 0;
        while (retryCount > failedAttempts ) {
            try {
                featureElementRunner = new ExecutionUnitRunner(runtime, scenario, jUnitReporter);
                featureElementRunner.run(notifier);
                Assert.assertEquals(0, this.getRuntime().exitStatus());
                failed = false;
                break;
            } catch (Throwable t) {
                failedAttempts++;
                caughtThrowable = t;
                this.getRuntime().getErrors().clear();
            }
        }
        isPass = !failed;
    	errorMsg = caughtThrowable.getMessage();
        if (failed) {
            notifier.fireTestFailure(new Failure(featureElementRunner.getDescription(), caughtThrowable));
        }
        
    }
}