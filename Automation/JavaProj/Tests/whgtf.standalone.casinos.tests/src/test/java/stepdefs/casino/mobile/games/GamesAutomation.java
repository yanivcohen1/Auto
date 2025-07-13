package stepdefs.casino.mobile.games;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;

import cucumber.api.java.en.Given;
import stepdefs.casino.mobile.games.ParsingGamesXml.GameType;
import stepdefs.shared.SharedData;
import stepdefs.shared.SharedSteps;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * Created by royba on 14/06/2016
 */
public class GamesAutomation extends WebDriverUtils{
    private static WebDriver driver;
    private String brand = System.getProperty("brand");
    private String url = getProperty(brand);
    
    public GamesAutomation() throws IOException{

    	if (driver == null) {
			String currentDir = System.getProperty("user.dir");
			System.out.println("currentDir:" + currentDir);
			String os = System.getProperty("os.name");
			System.out.println("OS: " + os);
			if (os.contains("Windows")) {
				String chromeWin = currentDir
						+ "/src/test/resources/selenium/windows/chromeDriver/32bit/2.14/chromedriver.exe";	
				System.setProperty("webdriver.chrome.driver", chromeWin);
			} else if (os.contains("Linux")) {
				//String chromeLinux = Utility.getFilePathFromResource("selenium/linux/chromeDriver/64bit/2.14") + "/chromedriver";
				String chromeLinux = currentDir
						+ "/src/test/resources/selenium/linux/chromeDriver/64bit/2.14/chromedriver";
				System.setProperty("webdriver.chrome.driver", chromeLinux);
			}
			Map<String, String> mobileEmulation = new HashMap<String, String>();
			mobileEmulation.put("deviceName", "Google Nexus 5");
			//here creating the second map with key mobileEmulation
			//Map<String, Object> chromeOptions = new HashMap<String, Object>();
			//chromeOptions.put("mobileEmulation", mobileEmulation);
			//setting DesiredCapabilities for chrome
			DesiredCapabilities capabilities = DesiredCapabilities.chrome();
			
			ChromeOptions options = new ChromeOptions();
			options.setExperimentalOption("mobileEmulation", mobileEmulation);
			//ArrayList<String> switches = new ArrayList<String>();
			//switches.add("--disable-extensions");
			//switches.add("--no-sandbox");
			options.addArguments("--no-sandbox");
			//capabilities.setCapability(ChromeOptions.CAPABILITY, options);
			
			capabilities.setCapability(ChromeOptions.CAPABILITY, options);
			//driver = new ChromeDriver(capabilities);
			driver = SharedData.getBrowsers().get_Driver("chrome", null, capabilities);
		}
    }

    //@After
    /*public void afterTest () throws IOException {
        driver.quit();

        // Kill chrome
        String killChrome[] = {"killall","Google Chrome"};
        Runtime.getRuntime().exec(killChrome);

        // Kill terminal
        String killTerminal[] = {"killall","Terminal"};
        Runtime.getRuntime().exec(killTerminal);
    }*/
    
    @Given("^login to casino$")
    public void login_to_casino() throws Throwable {
    	SharedSteps.setCloseBrowser(false);
    	brand = System.getProperty("brand");
    	url = getProperty(brand);
    	System.out.println(url);
        driver.navigate().to(url);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        WebElement LoginCTA = driver.findElement(By.className("btn_action_login"));
        LoginCTA.click();
        WebElement passWord = driver.findElement(By.name("password"));
        WebElement userName = driver.findElement(By.name("userName"));
        if (brand.contentEquals("Eg")) {
        	userName.sendKeys("eggametest");//real user
        	passWord.sendKeys("Br123456");
        	//userName.sendKeys("170129040528");
        	//passWord.sendKeys("123456");
		}else if(brand.contentEquals("Whcc")){
			userName.sendKeys("whccgametest");
			passWord.sendKeys("Br123456");
		}
        WebElement Login = driver.findElement(By.className("login_btn"));
        Login.click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    }

    private boolean isElementExists () {
        boolean isExist = true;
        try {
            driver.switchTo().frame(driver.findElement(By.className("game-iframe")));
            driver.findElement(By.id("messageBoxTextContainer"));
        } catch (NoSuchElementException e) {
                isExist = false;
            }
        return isExist;
    }

    @Given("^open URL \"(.*?)\" is this Mgp Game \"(.*?)\"$")
    public void open_URL_is_this_Mgp_Game(String gameName, String isMpg) throws Throwable {
    	SharedSteps.setCloseBrowser(false);
        //Thread.sleep(5000);
    	//pars = new Parsing();
    	//SharedSteps.setCloseBrowser(false);
        if(!gameName.equals("Not In List")){       
	            //System.out.println(getResultsFromMgpParaser(i));
	        driver.navigate().to(url);
	        driver.switchTo().defaultContent();
	        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	        Thread.sleep(2000);        
	        try {
	        	driver.findElement(By.xpath("//button[@data-event='Deposit']")).isEnabled();
			} catch (NoSuchElementException t) {
				login_to_casino();
	        	driver.navigate().to(url);
		        driver.switchTo().defaultContent();
		        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		        Thread.sleep(2000);
			}
	        if ( System.getProperty("env").contentEquals("ww2")) {
	        	driver.findElement(By.xpath("//input[@placeholder='Search for a game']")).sendKeys(gameName);
			}else{
				driver.findElement(By.xpath("//input[@placeholder='Search game']")).sendKeys(gameName);
			}
	        driver.findElement(By.xpath("//li[@data-index='0']")).click();//id= eg_homepage_search_gamecode_XXX
	        boolean isElementExists = true;
	        for (int i = 0; i < 2; i++) {
				if (isElementExists()) {
					driver.navigate().refresh();
				}else{
					isElementExists = false;
					break;
				}
			}
	        if(isElementExists){
	        	String errorMsg = ("Error Message been return for NGM game: " + gameName);;
                org.junit.Assert.assertTrue(errorMsg, false);
	        }
        }
    }
    
    @Given("^close browser$")
    public void close_browser() throws Throwable {
    	SharedSteps.setCloseBrowser(false);
    	driver.quit();
    }
    
}