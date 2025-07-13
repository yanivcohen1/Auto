package com.who.manager.cucumber.stepdefs;

import com.who.manager.GatwayApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = GatwayApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
