package com.wh.auto.extendRunner;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.internal.AssumptionViolatedException;
import org.junit.runner.Description;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;
import org.junit.runner.notification.RunNotifier;
import org.junit.runners.ParentRunner;
import org.junit.runners.model.InitializationError;

import cucumber.runtime.CucumberException;
import cucumber.runtime.Runtime;
import cucumber.runtime.junit.ExecutionUnitRunner;
import cucumber.runtime.junit.FeatureRunner;
import cucumber.runtime.junit.JUnitReporter;
import cucumber.runtime.model.CucumberFeature;
import cucumber.runtime.model.CucumberScenario;
import cucumber.runtime.model.CucumberScenarioOutline;
import cucumber.runtime.model.CucumberTagStatement;

public class ExtendedFeatureRunner extends FeatureRunner {
    private final List<ParentRunner> children = new ArrayList<ParentRunner>();

    private final int retryCount = 2;
    private int failedAttempts = 0;
    private int scenarioCount = 0;
    private Runtime runtime;
    private CucumberFeature cucumberFeature;
    private JUnitReporter jUnitReporter;
    
    public ExtendedFeatureRunner(CucumberFeature cucumberFeature,
            Runtime runtime, JUnitReporter jUnitReporter)
            throws InitializationError {
        super(cucumberFeature, runtime, jUnitReporter);
        this.cucumberFeature = cucumberFeature;
        this.runtime = runtime;
        this.jUnitReporter = jUnitReporter;
        buildFeatureElementRunners();
    }

    private void buildFeatureElementRunners() {
        for (CucumberTagStatement cucumberTagStatement : cucumberFeature.getFeatureElements()) {
            try {
                ParentRunner featureElementRunner;
                if (cucumberTagStatement instanceof CucumberScenario) {
                    featureElementRunner = new ExecutionUnitRunner(runtime, (CucumberScenario) cucumberTagStatement, jUnitReporter);
                } else {
                    featureElementRunner = new ExtendedScenarioOutlineRunner(runtime, (CucumberScenarioOutline) cucumberTagStatement, jUnitReporter);
                }
                children.add(featureElementRunner);
            } catch (InitializationError e) {
                throw new CucumberException("Failed to create scenario runner", e);
            }
        }
    }
    
    public final Runtime getRuntime() {
        return runtime;
    }

    @Override
    protected void runChild(ParentRunner child, RunNotifier notifier) {
        notifier.fireTestStarted(child.getDescription());
        try {
            child.run(notifier);
            Assert.assertEquals(0, this.getRuntime().exitStatus());
        } catch (AssumptionViolatedException e) {
            notifier.fireTestAssumptionFailed(new Failure(child.getDescription(), e));
        } catch (Throwable e) {
            retry(notifier, child, e);
        } finally {
            notifier.fireTestFinished(child.getDescription());
        }
        scenarioCount++;
        failedAttempts = 0;
    }

    public void retry(RunNotifier notifier, ParentRunner child, Throwable currentThrowable) {
        Throwable caughtThrowable = currentThrowable;
        ParentRunner featureElementRunner = null;
        boolean failed = true;

        Class<? extends ParentRunner> clazz = child.getClass();
        CucumberTagStatement cucumberTagStatement = this.cucumberFeature.getFeatureElements().get(scenarioCount);

        if (cucumberTagStatement instanceof CucumberScenarioOutline) {
            return;
        }
        while (retryCount > failedAttempts) {
            try {
                featureElementRunner = new ExecutionUnitRunner(runtime, (CucumberScenario) cucumberTagStatement , jUnitReporter);
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
        if (failed) {
            notifier.fireTestFailure(new Failure(featureElementRunner.getDescription(), caughtThrowable));
        }
    }

    @Override
    protected List getChildren() {
        return children;
    }

    @Override
    protected Description describeChild(ParentRunner child) {
        return child.getDescription();
    }
}
