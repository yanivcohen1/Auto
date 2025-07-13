package yan.tests.maneg.cucumber.stepdefs;

import yan.tests.maneg.TestManagerApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = TestManagerApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
