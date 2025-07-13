package stepdefs.shared;

import java.io.File;
import java.nio.file.Paths;
import java.util.ArrayList;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.common.Zip;
import com.williamhill.whgtf.testrunner.CucumberGlobalHooks;
import com.wh.auto.common.ChromeConsoleLogging;
import com.wh.auto.common.GenericUtilities;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

/**
 * Created by yanivc on 02/12/14.
 */
public class SharedSteps extends WebDriverUtils{

	private static boolean closeBrowser = true;
	private static Scenario scenario;
	final static String CHROME_DRIVER_WIN_ZIP = "/src/test/resources/selenium/windows/chromeDriver/32bit/2.14/chromedriver_win32.zip";
	final static String CHROME_DRIVER_WIN = "/src/test/resources/selenium/windows/chromeDriver/32bit/2.14/chromedriver.exe";
	
	/*static {
		File f = new File(System.getProperty("user.dir") + CHROME_DRIVER_WIN);
		if(!f.exists()) { 
			String zipFile = System.getProperty("user.dir") + CHROME_DRIVER_WIN_ZIP;
			System.out.println(zipFile);
			Zip.unZipIt(zipFile, new File(zipFile).getParent());
		}
	}*/
	
    @Before
    public void before(Scenario _scenario) {
    	scenario = _scenario;
    	closeBrowser = true;
        new CucumberGlobalHooks().before(scenario);
        System.out.println(" ");
		System.out.println("----------------------------");
		System.out.println("Start senarios:" + scenario.getName());
		System.out.println("----------------------------");   
    }

    @After
    public void after(Scenario scenario) {
        //new CucumberGlobalHooks().after(scenario);
    	Reporter.log("Finished scenario execution: " + scenario.getName());
		final String scenarioStatus = scenario.getStatus();
		Reporter.log("Execution result: " + scenarioStatus);
		if (scenario.isFailed()) {
			System.out.println(" ");
			System.out.println("----------------------------");
			System.out.println("Fail senarios:" + scenario.getName());
			System.out.println("----------------------------");
			try {
				if (getProperty("test").contentEquals("ExtendTestRunner")) {//retry Dtest=ExtendTestRunner
					String screenshotFile = GenericUtilities.takeScreenShotPath(scenario.getName(), scenario.getClass().getName(), SharedData.getBrowsers().get_Driver());
					String fileName = Paths.get(screenshotFile).getFileName().toString();
					scenario.write("<img src='" + fileName + "' alt='screenShoot' >");
				} else {//no retry 
					ArrayList<byte[]> screenshotList = GenericUtilities.takeScreenShot(
					scenario.getName(), scenario.getClass().getName(), SharedData.getBrowsers().get_Driver());
					for (byte[] screenshot : screenshotList) {
						scenario.embed(screenshot, "image/png");
					}
					// clear screenShotList 
					GenericUtilities.clearScreenShotList();
				}
			} catch (Exception e) {	}
			if (!SharedData.isDebug()) {
				try {
					String chromeConsole = ChromeConsoleLogging.GetConsolLog(SharedData.getBrowsers().get_Driver());
					com.wh.auto.extendRunner.SharedData.setChromeConsole(chromeConsole);
					//System.out.println("The console:" + Utility.getNewline() + chromeConsole);
					scenario.write("The console:" + Utility.getNewline() + chromeConsole);
				} catch (Exception e) {
					System.out.println(e.getMessage());
				} 
			}
		}
		if (isCloseBrowser() && !SharedData.isDebug()) {
			GenericUtilities.tearDownDrivers();
			try {
				SharedData.getBrowsers().get_Driver().quit();
			} catch (Exception e) {	}
		}
	}

	public boolean isCloseBrowser() {
		return closeBrowser;
	}

	public static void setCloseBrowser(boolean closeBrowser1) {
		closeBrowser = closeBrowser1;
	}

	public static Scenario getScenario() {
		return scenario;
	}

}
