/*package com.wh.auto.cucumber;

import cucumber.runtime.io.FileResourceLoader;
import cucumber.runtime.model.CucumberFeature;
import cucumber.runtime.model.CucumberTagStatement;
import org.apache.commons.io.FileUtils;

import com.wh.auto.cucumber.annotation.Feature;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Method;
import java.util.*;

public class CucumberTestsStateUtil {

    protected static final String RESOURCES =
            "src" + File.separator + "test" + File.separator + "resources" + File.separator;
    protected static final String TEST_DIR = "src" + File.separator + "test" + File.separator + "java" + File.separator;
    static Map<String, List<Scenario>> scenarioMap = new HashMap<>();
    private static ClassLoader classLoader = CucumberTestsStateUtil.class.getClassLoader();

    *//**
     * Checks if there is no TestNG tests for Cucumber Scenarios
     *
     * @return String error message if there is any problem. If no problem found returns null;
     *//*
    public static String checkTests() {
        try {
            File featuresDir = new File(RESOURCES);
            Collection<File> featuresFiles = FileUtils.listFiles(featuresDir, new String[]{"feature"}, true);
            ArrayList<String> featurePaths = new ArrayList<>();
            for (File featuresFile : featuresFiles) {
                String featureDir = featuresFile.getParent();
                if (!featurePaths.contains(featureDir)) {
                    featurePaths.add(featureDir);
                }
            }
            List<CucumberFeature> features = CucumberFeature
                    .load(new FileResourceLoader(), featurePaths, new ArrayList<>());
            for (CucumberFeature cucumberFeature : features) {
                for (CucumberTagStatement scenarioTagStatement : cucumberFeature.getFeatureElements()) {
                    String featureName = cucumberFeature.getUri();
                    featureName = featureName.substring(0, featureName.indexOf("."));
                    if (scenarioMap.get(featureName) == null) {
                        scenarioMap.put(featureName, new ArrayList<Scenario>());
                    }
                    String scenarioName = scenarioTagStatement.getVisualName();
                    scenarioName = scenarioName.substring(scenarioName.indexOf(":") + 1).trim();
                    scenarioMap.get(featureName).add(new Scenario(scenarioName));
                }
            }
            String uniqueCheck = checkTestNamesUnique(scenarioMap);
            Collection<File> testngTests = FileUtils.listFiles(new File(TEST_DIR), new String[]{"java"}, true);
            for (File testngTest : testngTests) {
                String classPath = testngTest.getCanonicalPath();
                classPath = classPath.substring(classPath.indexOf("java") + 5).replace(File.separator, ".");
                classPath = classPath.substring(0, classPath.lastIndexOf("."));
                Class<?> test = classLoader.loadClass(classPath);
                if (test.getAnnotation(Feature.class) != null) {
                    String featureName = test.getAnnotation(Feature.class).value();
                    for (Method method : test.getMethods()) {
                        if (method.getAnnotation(com.wh.auto.cucumber.annotation.Scenario.class) != null) {
                            String scenarioName = method.getAnnotation(com.wh.auto.cucumber.annotation.Scenario.class)
                                    .value();
                            List<Scenario> scenarios = scenarioMap.get(featureName);
                            for (Scenario scenario : scenarios) {
                                if (scenario.getScenarioName().equals(scenarioName)) {
                                    if (method.getAnnotation(org.testng.annotations.Test.class) != null) {
                                        scenario.setFoundInTestNG(true);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            int testCount = 0;
            boolean fail = false;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("\n");
            if (uniqueCheck != null) {
                fail = true;
                stringBuilder.append(uniqueCheck);
            }
            for (String featureName : scenarioMap.keySet()) {
                for (Scenario scenario : scenarioMap.get(featureName)) {
                    testCount++;
                    if (!scenario.isFoundInTestNG()) {
                        stringBuilder.append("Feature: \"").append(featureName).append(".feature\". Scenario: \"")
                                .append(scenario.getScenarioName()).append("\" TestNG test not found.").append("\n");
                        fail = true;
                    }
                }
            }
            if (fail) {
                return stringBuilder.toString();
            }
            if (testCount == 0) {
                return "Error: 0 scenarios found.";
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            return "Error checking tests state." + e.getLocalizedMessage();
        } catch (IOException e) {
            e.printStackTrace();
            return "Error checking tests state." + e.getLocalizedMessage();
        }
        return null;
    }

    private static String checkTestNamesUnique(Map<String, List<Scenario>> scenarioMap) {
        StringBuilder stringBuilder = new StringBuilder();
        for (String feature : scenarioMap.keySet()) {
            List<Scenario> scenarios = scenarioMap.get(feature);
            for (Scenario scenario : scenarios) {
                for (Scenario scenario1 : scenarios) {
                    if (!scenario1.equals(scenario) && scenario1.getScenarioName().startsWith(scenario.getScenarioName())) {
                        stringBuilder.append("Feature '").append(feature).append("' scenario '").append(scenario.getScenarioName()).append("' name crosses with scenario '").append(scenario1.getScenarioName()).append("'");
                        stringBuilder.append("\n");
                    }
                }
            }
        }
        String result = stringBuilder.toString();
        if (result.length() > 0) {
            return result;
        }
        return null;
    }

    public static class Scenario {
        private String scenarioName;
        private boolean foundInTestNG;

        Scenario(String scenarioName) {
            this.scenarioName = scenarioName;
        }

        boolean isFoundInTestNG() {
            return foundInTestNG;
        }

        void setFoundInTestNG(boolean foundInTestNG) {
            this.foundInTestNG = foundInTestNG;
        }

        public String getScenarioName() {
            return scenarioName;
        }
    }
}
*/