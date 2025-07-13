package lib;

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
        try {
                featureElementRunner.run(notifier);
                Assert.assertEquals(0, this.getRuntime().exitStatus());
                
        } catch (AssumptionViolatedException e) {
            notifier.fireTestAssumptionFailed(new Failure(runner.getDescription(), e));
        } catch (Throwable e) {
            retry(notifier, featureElementRunner, e, null);
        } finally {
            notifier.fireTestFinished(runner.getDescription());
        }
        exampleCount++;
   }

    public void retry(RunNotifier notifier, ParentRunner child, Throwable currentThrowable, CucumberScenario scenario1) {
        Throwable caughtThrowable = currentThrowable;
        System.out.println("index:" + exampleCount);
        CucumberScenario scenario = scenariosList.get(exampleCount);
        int a = child.testCount();
        ParentRunner featureElementRunner = null;
        boolean failed = true;
        
        int failedAttempts = 0;
        while (retryCount > failedAttempts ) {
            try {
            	this.getRuntime().getErrors().clear();
                featureElementRunner = new ExecutionUnitRunner(runtime, scenario, jUnitReporter);
                featureElementRunner.run(notifier);
                Assert.assertEquals(0, this.getRuntime().exitStatus());
                failed = false;
                break;
            } catch (Throwable t) {
                failedAttempts++;
                caughtThrowable = t;
                //this.getRuntime().getErrors().clear();
            }
        }
        if (failed) {
            notifier.fireTestFailure(new Failure(featureElementRunner.getDescription(), caughtThrowable));
        }
    }
}