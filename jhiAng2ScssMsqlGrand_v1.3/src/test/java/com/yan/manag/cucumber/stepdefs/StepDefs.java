package com.yan.manag.cucumber.stepdefs;

import com.yan.manag.TestsManagerApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = TestsManagerApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
