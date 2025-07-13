package stepdefs.gaming;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import com.williamhill.whgtf.asl.AutomationScriptingLanguage;
import com.williamhill.whgtf.properties.PropertyReader;


import stepdefs.shared.SharedData;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by sudhakar on 20/11/14.
 */
public class GamingStepDef extends AutomationScriptingLanguage {
	
	private Logger logger = LogManager.getRootLogger();
	
	// Set SportsbookUrl  Property for multi environment support from prop file.
	String sbUrl =	getProperty("sportsbookUrl");
		

    public GamingStepDef(SharedData sharedData) {
        // Example:
        // this.bonusCreationPage = sharedData.bonusCreationPage;
    	
    }

    
}
