package com.wh.auto.extendRunner;

import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import gherkin.formatter.Formatter;
import gherkin.formatter.NiceAppendable;
import gherkin.formatter.Reporter;
import gherkin.formatter.model.Background;
import gherkin.formatter.model.Examples;
import gherkin.formatter.model.Feature;
import gherkin.formatter.model.Match;
import gherkin.formatter.model.Result;
import gherkin.formatter.model.Scenario;
import gherkin.formatter.model.ScenarioOutline;
import gherkin.formatter.model.Step;

public class CucumberTestNgFormatter implements Formatter, Reporter {

    private final NiceAppendable out;

    private AtomicInteger failureCount = new AtomicInteger(0);
    private AtomicInteger skipCount = new AtomicInteger(0);
    private AtomicInteger passCount = new AtomicInteger(0);

    private LinkedList<Step> steps = new LinkedList<>();

    public static Step currentStep;
    public static String errorMsg = "";
    
    public CucumberTestNgFormatter(Appendable appendable) {
        out = new NiceAppendable(appendable);
    }

    @Override
    public void uri(String uri) {
        System.out.println("Feature File: " + uri);
    }

    @Override
    public void feature(Feature feature) {
        System.out.println("Feature: " + feature.getName());
    }

    @Override
    public void background(Background background) {
    }

    @Override
    public void scenario(Scenario scenario) {
        //System.out.println("Scenario: " + scenario.getName());
    }

    @Override
    public void scenarioOutline(ScenarioOutline scenarioOutline) {
        System.out.println("Scenario Outline: " + scenarioOutline.getName());
    }

    @Override
    public void examples(Examples examples) {
    }

    @Override
    public void step(Step step) {
        steps.add(step);
    }

    @Override
    public void eof() {
    }

    @Override
    public void syntaxError(String s, String s2, List<String> strings, String s3, Integer integer) {
    }

    @Override
    public void done() {
        steps.clear();
    }

    @Override
    public void close() {
        //out.close();
    }

    @Override
    public void before(Match match, Result result) {
    }

    @Override
    public void result(Result result) {
        String timing = result.getDuration() != null ?
                " : " + (Math.round(result.getDuration() / 1000000000f * 100f) / 100f) + "s" : "";
        Step step;
        if (steps.isEmpty()) {
            step = new Step(null, "MISMATCH BETWEEN STEPS AND RESULTS", "", 0, null, null);
        } else {
            step = steps.pop();
        }
        if ("failed".contentEquals(result.getStatus())) {
        	System.out.println(step.getKeyword() + " " + step.getName() +
                    " (" + result.getStatus() + timing+ ")");
        	System.err.println("fail:" + step.getKeyword() + " " + step.getName());
        	errorMsg = result.getErrorMessage();
        	currentStep = step;
        }else if("passed".contentEquals(result.getStatus())) {
        	System.out.println(step.getKeyword() + " " + step.getName() +
                    " (" + result.getStatus() + timing+ ")");
        	//out.println("test");
		}else{
			//System.out.println(step.getKeyword() + " " + step.getName() +
	        //        " (" + result.getStatus() + timing + ")");
		}
        try {
        	System.out.println("About to run step:" + steps.getFirst().getName());
		} catch (Exception e) {	}
        

        /*if (Result.FAILED.equals(result.getStatus())) {
            ITestResult tr = org.testng.Reporter.getCurrentTestResult();
            tr.setThrowable(result.getError());
            tr.setStatus(ITestResult.FAILURE);
            failureCount.incrementAndGet();
        } else if (Result.SKIPPED.equals(result)) {
            ITestResult tr = org.testng.Reporter.getCurrentTestResult();
            tr.setThrowable(result.getError());
            tr.setStatus(ITestResult.SKIP);
            skipCount.incrementAndGet();
        } else if (Result.UNDEFINED.equals(result)) {
            ITestResult tr = org.testng.Reporter.getCurrentTestResult();
            tr.setThrowable(result.getError());
            tr.setStatus(ITestResult.FAILURE);
            failureCount.incrementAndGet();
        } else {
            passCount.incrementAndGet();
        }*/
    }

    @Override
    public void after(Match match, Result result) {
    }

    @Override
    public void write(String s) {
    }

    @Override
    public void match(Match match) {
    }

    @Override
    public void embedding(String s, byte[] bytes) {
    }

	@Override
	public void endOfScenarioLifeCycle(Scenario arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void startOfScenarioLifeCycle(Scenario arg0) {
		// TODO Auto-generated method stub
		
	}
}
