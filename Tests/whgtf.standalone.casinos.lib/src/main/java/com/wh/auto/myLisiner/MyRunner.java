package com.wh.auto.myLisiner;


import java.io.IOException;

import org.junit.runner.notification.RunNotifier;
import org.junit.runners.BlockJUnit4ClassRunner;
import org.junit.runners.model.InitializationError;

import cucumber.api.junit.Cucumber;
//test6
public class MyRunner extends Cucumber {

    public MyRunner(Class<?> klass) throws InitializationError, IOException {
        super(klass);
    }

    @Override public void run(RunNotifier notifier){
        notifier.addListener(new JUnitExecutionListener());
        super.run(notifier);
    }
}