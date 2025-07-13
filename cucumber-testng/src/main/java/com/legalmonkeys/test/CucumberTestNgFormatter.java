package com.legalmonkeys.test;

import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.testng.ITestResult;

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

    public CucumberTestNgFormatter(Appendable appendable) {
        out = new NiceAppendable(appendable);
    }

    @Override
    public void uri(String uri) {
        org.testng.Reporter.log("<div class=\"featureFile\">Feature File: " + uri + "</div>");
    }

    @Override
    public void feature(Feature feature) {
        org.testng.Reporter.log("<div class=\"feature\">Feature: " + feature.getName() + "</div>");
    }

    @Override
    public void background(Background background) {
    }

    @Override
    public void scenario(Scenario scenario) {
        org.testng.Reporter.log("<div class=\"scenario\">Scenario: " + scenario.getName() + "</div>");
    }

    @Override
    public void scenarioOutline(ScenarioOutline scenarioOutline) {
        org.testng.Reporter.log("<div class=\"scenario\">Scenario Outline: " + scenarioOutline.getName() + "</div>");
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
        out.close();
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
        org.testng.Reporter.log("<div class=\"result\">" + step.getKeyword() + " " + step.getName() +
                " (" + result.getStatus() + timing + ")</div>");

        if (Result.FAILED.equals(result.getStatus())) {
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
        }
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
}
