/*package com.williamhill.whgtf.asl;

import com.gargoylesoftware.htmlunit.ElementNotFoundException;
import com.google.common.base.Strings;
import com.jamesmurty.utils.XMLBuilder;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.mashape.unirest.request.GetRequest;
import com.mashape.unirest.request.HttpRequestWithBody;
import com.williamhill.ocr.whgtf.AbbyyImageParser;
import com.williamhill.whgtf.appium.AppiumCapabilities;
import com.williamhill.whgtf.appium.AppiumDevice;
import com.williamhill.whgtf.appium.AppiumDeviceTypesEnum;
import com.williamhill.whgtf.appium.AppiumDriverInit;
import com.williamhill.whgtf.asl.interfaces.*;
import com.williamhill.whgtf.properties.PropertyReader;
import com.williamhill.whgtf.testrunner.GenericUtilities;
import com.williamhill.whgtf.testrunner.JUnitTestRunner;
import com.williamhill.whgtf.testrunner.TestRunnerTimeHandler;
import com.williamhill.whgtf.testrunner.interfaces.TimeHandler;
import com.williamhill.whgtf.webdriver.BrowserDriverInit;
import com.williamhill.whgtf.webdriver.BrowserTypes;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.NoSuchContextException;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpHost;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.Point;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.UnreachableBrowserException;
import org.openqa.selenium.support.pagefactory.ByAll;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.UnexpectedTagNameException;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.sikuli.basics.Settings;
import org.sikuli.script.*;
import org.sikuli.script.Image;
import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;
import ru.yandex.qatools.ashot.comparison.ImageDiff;
import ru.yandex.qatools.ashot.comparison.ImageDiffer;
import utils.DeviceHandler;
import utils.SSLCertificateHandler;

import javax.imageio.ImageIO;
import javax.script.ScriptException;
import javax.xml.parsers.FactoryConfigurationError;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.xpath.XPathExpressionException;
import java.awt.*;
import java.awt.geom.AffineTransform;
import java.awt.image.AffineTransformOp;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.UnknownHostException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static com.williamhill.whgtf.asl.CommonPageDefinitions.*;

*//**
 * Automation Scripting Language that brings together Image and Web Based
 * Testing Capabilities into 1 common Language.
 *
 * @author John Salmon
 *//*

// TODO all methods should be boolean
public class AutomationScriptingLanguage extends JUnitTestRunner implements WebBasedHandler, ImageBasedHandler,
        TimeHandler, Assertions, HttpRequestBasedHandler, XmlHandler, JsonHandler, DeviceBasedHandler {

    private Logger logger = LogManager.getLogger(AutomationScriptingLanguage.class);
    // Browser
    private static WebDriver driver;
    // Current element pointer
    private WebElement currentElement = null;
    // Global saved element pointer - see saveCurrentElementPosition()
    private WebElement elementStore = null;
    // Internal web element list - see getListByTag() getListByClass() ...
    private List<WebElement> elementList;
    //Returns the OS name
    private String operative_system = System.getProperties().getProperty("os.name");

    // Select box
    private Select currentSelect = null;
    // Internal token list for tokenising element text / numbers
    private List<String> tokenList = null;
    // Current token
    private String currentToken;
    // Current token index
    private int currentTokenIndex;
    // Two dimensional table array <tr><td>
    private List<List<WebElement>> tableArray = null;
    // Internally stored elements - see saveCurrentElementPosition(),
    // restoreElementPosition()
    private Map<String, WebElement> storedElementMap = null;

    // Services
    private AslCssHandler cssHandler = new AslCssHandler();
    private AslScriptHandler scriptHandler = new AslScriptHandler();
    private TestRunnerTimeHandler timeHandler = new TestRunnerTimeHandler();

    // Appium Properties
    private CreateDeviceDriver createAppiumDriver;
    private Map<String, String> AppiumContext = new HashMap<String, String>();
    private String device = System.getProperty("device");
    private boolean mobileBrowser;

    // Parse resolution into 2 values

    // Pass into setup

    // Sikuli screen instance
    // :TODO add multi monitor support
    private Screen screenRegion;

    private String storedListTextValue;

    // WebDriver handlers
    private static BrowserDriverInit browserDriverInit;
    private static CreateBrowser createBrowser;
    private DeviceMethods appiumMethods = new DeviceMethods();

    // Sets the wait time for waiting for an element
    private static int explicitWaitTime = 20;
    private static int implicitWaitTime = 20;

    // Http request variables
    private HttpRequestWithBody request;
    private HttpResponse response;
    private GetRequest getRequest;
    private HashMap<String, String> listOfExtractedValues;

    // Xml Variables
    // Xml Variables
    private XMLBuilder xmlBuilder;
    private HashMap<String, Object> postBodyFields;
    private String xmlString;

    // Json Variables
    private HashMap<String, JSONArray> jsonArrays;
    private HashMap<String, JSONObject> jsonObjects;

    // /////////////////
    // CONSTRUCTORS //
    // ///////////////

    *//**
     * Instantiates a new common page object model.
     *//*
    public AutomationScriptingLanguage() {
        if (System.getProperty("browser") == null && System.getProperty("device") == null) {
            logger.error("No Browser provided, defaulting to firefox");
            System.setProperty("browser", "firefox");
        }

        setScreenRegion();
    }

    *//**
     * Constructor for Mockito tests
     *//*
    public AutomationScriptingLanguage(String test) {
    }

    *//**
     * Sets the screen region.
     *//*
    private void setScreenRegion() {

        // Used as a placeholder so all test Layer projects can use the static
        // Assert and its not removed from ASL
        assertTrue(true);

        try {
            Settings.ActionLogs = false;
            //this.screenRegion = new Screen();
            //screenRegion.setAutoWaitTimeout(explicitWaitTime);
            //ImagePath.setBundlePath(System.getProperty("user.dir"));
        } catch (NoClassDefFoundError | ExceptionInInitializerError e) {
            logger.debug("No Screen(s) present, image based commands will not work!");
        }

    }

    *//**
     * Sets the timeout for webdriver wait function allowing you to overide for
     * specific methods
     *
     * @param seconds
     * @return
     *//*
    @Override
    public boolean setWaitTime(int seconds) {

        explicitWaitTime = seconds;
        screenRegion.setAutoWaitTimeout(explicitWaitTime);
        return true;
    }

    public boolean setMinimumSimilarityForImage(double minSimilarity) {
        if (minSimilarity > 1.0 || minSimilarity < 0) {
            logger.error("The value entered for minSimilarity is invalid, enter a value between 0 & 1");
            return false;
        }
        Settings.MinSimilarity = minSimilarity;
        logger.debug("MinSimilarity value set to " + Settings.MinSimilarity);
        return true;
    }

    // Actions getter

    *//**
     * Gets the actions.
     *
     * @return the actions
     *//*
    private Actions getActions() {
        return new Actions(driver);
    }

    *//**
     * Allows you to retrieve get a property from the property files. This
     * method is accessing the default xxx.envrironment.property files in
     * src/test/resources </br>
     * </br>
     * for using custom property files use
     * {@link #getProperty(String prop, String fileName)}
     *
     * @param prop the property to retrieve from the file
     * @return the property as a string
     *//*
    public String getProperty(String prop) {
        String retProp = null;
        PropertyReader pr = new PropertyReader();

        // Try to find the property key in the .properties file
        try {
            retProp = pr.getProperty(prop);
        } catch (Exception e) {
            logger.debug("Property: " + prop + "not found in .properties file so will attempt to find system property.");
        }
        // Try to find in the System Property
        if (retProp == null) {
            try {
                retProp = System.getProperty(prop);
            } catch (IllegalArgumentException e) {
                logger.error("System Property" + prop + "does not exist in System Property - please verify the existance of the System or item in .property file");
            }
        }
        logger.debug("Found property: " + retProp);
        return retProp;
    }

    *//**
     * Allows you to quickly get a property from the property files. This method
     * is accessing a bespoke property file in src/test/resources i.e.
     * data.properties </br>
     * </br>
     * Example: getProperty("username", "data.properties")
     *
     * @param prop     the property
     * @param fileName The filename of the custom property file (must be sat in
     *                 src/test/resources)
     * @return property the property to retrieve from the file
     *//*
    public String getProperty(String prop, String fileName) {
        PropertyReader pr = new PropertyReader(fileName);
        return pr.getProperty(prop);
    }

    // ////////////////////
    // ELEMENT LOCATORS //
    // ////////////////////

    // By identifier

    *//**
     * Method used to identify if it's a Native Device App running on NATIVE_APP
     * Context
     *//*
    private boolean isDeviceNativeApp() {
        Boolean isNativeApp = false;
        try {
            isNativeApp = driver.getClass().toString().contains("appium") && getCurrentContext().equals("NATIVE_APP");
        } catch (NullPointerException e) {
            isNativeApp = false;
        }
        return isNativeApp;
    }

    @Override
    public boolean navigateToElement(WebElement element) {

        if (element == null) {
            logger.error("navigateToElement : Null argument");
            return false;
        } else {
            currentElement = element;
            return true;
        }

    }

    @Override
    public boolean navigateToElementById(String id) {
        try {
            if (isDeviceNativeApp()) {
                currentElement = driver.findElement(By.id(id));
            } else {
                currentElement = currentElement.findElement(By.id(id));
            }
        } catch (NoSuchElementException nsee) {
            logger.error("navigateToElementById : Element not found with id  : " + id);
            return false;
        }
        return true;
    }

    @Override
    public boolean navigateToElementByName(String name) {
        try {
            if (isDeviceNativeApp()) {
                currentElement = driver.findElement(By.name(name));
            } else {
                currentElement = currentElement.findElement(By.name(name));
            }
        } catch (NoSuchElementException nsee) {
            logger.error("navigateToElementByName : Element not found with name : " + name);
            return false;
        }
        return true;
    }

    @Override
    public boolean navigateToElementByPartialId(String id) {
        try {

            currentElement = currentElement.findElement(By.cssSelector(String.format("[id*='%s']", id)));

        } catch (NoSuchElementException nsee) {
            logger.error("navigateToElementByPartialId : Element not found with id  : " + id);
            return false;
        }
        return true;
    }

    @Override
    public boolean navigateToElementByClassName(String className) {
        try {
            if (isDeviceNativeApp()) {
                currentElement = driver.findElement(By.className(className));
            } else {
                currentElement = currentElement.findElement(By.className(className));
            }
        } catch (NoSuchElementException nsee) {
            logger.error("navigateToElementByClass : Element not found with class  : " + className);
            return false;
        }
        return true;
    }

    // By Css
    @Override
    public boolean navigateToElementByCSS(String cssSelector) {
        try {
            currentElement = currentElement.findElement(By.cssSelector(cssSelector));
        } catch (NoSuchElementException nsee) {
            logger.error("navigateToElementByCSS : Element not found with CSS Selector  : " + cssSelector);
            return false;

        }
        return true;
    }

    // By Xpath
    @Override
    public boolean navigateToElementByXpath(String xpath) {
        try {
            if (isDeviceNativeApp()) {
                currentElement = driver.findElement(By.xpath(xpath));
            } else {
                currentElement = currentElement.findElement(By.xpath(xpath));
            }
        } catch (NoSuchElementException nsee) {
            logger.error("navigateToElementByXpath : Element not found with xpath  : " + xpath);
            return false;
        }
        return true;
    }

    // By HTML tag - see CommonPageDefinitions
    @Override
    public boolean navigateToElementByTag(String tag) {
        try {
            currentElement = currentElement.findElement(By.tagName(tag));
        } catch (NoSuchElementException nsee) {
            logger.error("navigateToElementByTag : Element not found with tag  : " + tag);
            return false;
        }
        return true;
    }

    // By partial link text <a>partialLinkText*</a>
    @Override
    public boolean navigateToElementByPartialLinkText(String partialLinkText) {
        try {
            currentElement = currentElement.findElement(By.partialLinkText(partialLinkText));
        } catch (NoSuchElementException nsee) {
            logger.error("navigateToElementByTag : Element not found with tag  : " + partialLinkText);
            return false;
        }
        return true;
    }

    @Override
    public boolean navigateToElementByAttributeValue(String attribute, String value) {
        try {
            currentElement = currentElement.findElement(By.cssSelector("[" + attribute + "='" + value + "']"));

        } catch (NoSuchElementException nsee) {
            logger.error("navigateToElementByAttributeValue : Element not found with CSS  : ");
            return false;
        }
        return true;
    }

    @Override
    public boolean navigateToElementByHref(String href) {
        boolean navigated = false;
        List<WebElement> anchors = currentElement.findElements(By.tagName(HTML_ANCHOR));
        for (WebElement anchor : anchors) {
            if (hasHref(anchor, href)) {
                currentElement = anchor;
                navigated = true;
            }
        }
        return navigated;
    }

    @Override
    public boolean navigateToLabelForId(String id) {
        boolean labelFound = false;
        saveCurrentElementPosition();
        List<WebElement> labelElements = currentElement.findElements(By.tagName(HTML_LABEL));
        if (!labelElements.isEmpty()) {
            for (WebElement labelElement : labelElements) {
                String s = labelElement.getAttribute(HTML_ATTRIBUTE_FOR);
                if (s.equals(id)) {
                    currentElement = labelElement;
                    labelFound = true;
                    break;
                }
            }
        }
        return labelFound;
    }

    // //////////
    // PROBES //
    // //////////

    @Override
    public boolean probeExists(String criterea) {

        return probe(criterea) == null ? false : true;
    }

    @Override
    public boolean probeVisible(String criterea) {

        WebElement webElement = probe(criterea);
        return webElement == null ? false : webElement.isDisplayed() ? true : false;

    }

    // ///////////////////
    // LIST COMPILERS //
    // //////////////////

    // By class
    @Override
    public boolean buildListByClassName(String className) {
        if (Strings.isNullOrEmpty(className) || Strings.isNullOrEmpty(className)) {
            return false;
        }
        if (elementList != null) {
            elementList.clear();
        }
        elementList = getElementsByClass(className);
        if (elementList.size() == 0) {
            logger.error("buildListByClass : Empty list for class : " + className);
            return false;
        } else {
            return true;
        }
    }

    // By xpath
    @Override
    public boolean buildListByXpath(String xpath) {
        if (Strings.isNullOrEmpty(xpath) || Strings.isNullOrEmpty(xpath)) {
            return false;
        }
        if (elementList != null) {
            elementList.clear();
        }
        elementList = getElementsByXpath(xpath);
        if (elementList.size() == 0) {
            logger.error("buildListByXpath : Empty list for xpath : " + xpath);
            return false;
        } else {
            return true;
        }
    }

    // By linkText
    @Override
    public boolean buildListByLinkText(String linkText) {
        if (Strings.isNullOrEmpty(linkText) || Strings.isNullOrEmpty(linkText)) {
            return false;
        }
        if (elementList != null) {
            elementList.clear();
        }
        elementList = getElementsByLinkText(linkText);
        if (elementList.size() == 0) {
            logger.error("buildListByLinkText : Empty list for : " + linkText);
            return false;
        } else {
            return true;
        }
    }

    // By linkText
    @Override
    public boolean buildListByPartialLinkText(String partialLinkText) {
        if (Strings.isNullOrEmpty(partialLinkText) || Strings.isNullOrEmpty(partialLinkText)) {
            return false;
        }
        if (elementList != null) {
            elementList.clear();
        }
        elementList = getElementsByPartialLinkText(partialLinkText);
        if (elementList.size() == 0) {
            logger.error("buildListByPartialLinkText : Empty list for : " + partialLinkText);
            return false;
        } else {
            return true;
        }
    }

    // By css
    @Override
    public boolean buildListByCSS(String cssSelector) {
        if (Strings.isNullOrEmpty(cssSelector) || Strings.isNullOrEmpty(cssSelector)) {
            logger.error("buildListByCSS : Empty list for css : " + cssSelector);
            return false;
        }
        if (elementList != null) {
            elementList.clear();
        }
        elementList = getElementsByCSS(cssSelector);
        if (elementList.size() == 0) {
            logger.error("buildListByCSS : Empty list for css : " + cssSelector);
            return false;
        } else {
            return true;
        }
    }

    // By css
    @Override
    public boolean buildListByName(String name) {
        if (Strings.isNullOrEmpty(name) || Strings.isNullOrEmpty(name)) {
            logger.error("buildListByName : Empty list for css : " + name);
            return false;
        }
        if (elementList != null) {
            elementList.clear();
        }
        elementList = getElementsByName(name);
        if (elementList.size() == 0) {
            logger.error("buildListByName : Empty list for css : " + name);
            return false;
        } else {
            return true;
        }
    }

    // By HTML tag
    @Override
    public boolean buildListByTag(String tag) {
        if (Strings.isNullOrEmpty(tag)) {
            logger.error("buildListByTag : Empty list for tag : " + tag);
            return false;
        }
        if (elementList != null) {
            elementList.clear();
        }
        elementList = getElementsByTag(tag);
        if (elementList.size() == 0) {
            logger.error("buildListByTag : Empty list for tag : " + tag);
            return false;
        } else {
            return true;
        }
    }

    // By partial id. Used for static prefixes with variable suffixes

    // By partial id. Used for static prefixes with variable suffixes
    @Override
    public boolean buildListByPartialId(String id) {
        if (Strings.isNullOrEmpty(id) || Strings.isNullOrEmpty(id)) {
            logger.error("buildListByPartialId : Empty list for PartialId : " + id);
            return false;
        }
        if (elementList != null) {
            elementList.clear();
        }
        elementList = getElementsByPartialId(id);
        if (elementList.size() == 0) {
            logger.error("buildListByPartialId : Empty list for PartialId : " + id);
            return false;
        } else {
            return true;
        }
    }

    // By children
    @Override
    public boolean buildListByChildren() {
        if (elementList != null) {
            elementList.clear();
        }
        // Immediate children
        elementList = currentElement.findElements(By.xpath("*"));
        if (elementList.size() == 0) {
            logger.error("getListByChildren : Empty list");
            return false;
        } else {
            return true;
        }
    }

    // ///////////////////////////
    // DROP-DOWN LIST BUILDERS //
    // ///////////////////////////

    // Search and build from current element
    @Override
    public boolean buildDropdownList() {
        boolean foundList = false;
        WebElement webelement = null;
        try {
            if (!currentElement.getTagName().equals(HTML_SELECT)) {
                webelement = currentElement.findElement(By.tagName(HTML_SELECT));
            }
            currentSelect = new Select(webelement);
            elementList = currentSelect.getOptions();
            currentElement = webelement;
            foundList = true;
        } catch (NoSuchElementException nsee) {
            logger.error(
                    "buildDropdownList : No <SELECT> element found : Select element must be current element or child of the current element");
        }
        return foundList;
    }

    // Search and build by identifier
    @Override
    public boolean buildDropdownListById(String id) {
        boolean foundList = false;
        try {
            WebElement webelement = currentElement.findElement(By.id(id));
            try {
                currentSelect = new Select(webelement);
                elementList = currentSelect.getOptions();
                currentElement = webelement;
                foundList = true;
            } catch (UnexpectedTagNameException utne) {
                logger.error("buildDropdownList : Identifier [ " + id + " ] found but is not a <SELECT> element");
            }
        } catch (NoSuchElementException nsee) {
            logger.error("buildDropdownList : No <SELECT> element found with identifier [ " + id + " ]");
        }
        return foundList;
    }

    // Search and build by identifier
    @Override
    public boolean buildDropdownListByName(String name) {
        boolean foundList = false;
        try {
            WebElement webelement = currentElement.findElement(By.name(name));
            try {
                currentSelect = new Select(webelement);
                elementList = currentSelect.getOptions();
                currentElement = webelement;
                foundList = true;
            } catch (UnexpectedTagNameException utne) {
                logger.error("buildDropdownList : Identifier [ " + name + " ] found but is not a <SELECT> element");
            }
        } catch (NoSuchElementException nsee) {
            logger.error("buildDropdownList : No <SELECT> element found with identifier [ " + name + " ]");
        }
        return foundList;
    }

    // Search and build by class
    @Override
    public boolean buildDropdownListByClassName(String className) {
        boolean foundList = false;
        try {
            WebElement webelement = currentElement.findElement(By.className(className));
            try {
                currentSelect = new Select(webelement);
                elementList = currentSelect.getOptions();
                currentElement = webelement;
                foundList = true;
            } catch (UnexpectedTagNameException utne) {
                logger.error("buildDropdownList : Class [ " + className + " ] found but is not a <SELECT> element");
            }

        } catch (NoSuchElementException nsee) {
            logger.error("buildDropdownList : No <SELECT> element found with class [ " + className + " ]");
        }
        return foundList;
    }

    // ////////////////////////////
    // DROP-DOWN LIST SELECTORS //
    // ////////////////////////////

    // Check for presence and click
    @Override
    public boolean selectDropdownOptionByIndex(int index) {

        boolean selected = false;
        if (currentSelect != null) {
            try {
                currentSelect.selectByIndex(index);
                selected = true;
            } catch (NoSuchElementException nsee) {
                logger.error("selectDropdownOptionByIndex : Cannot locate option with index: " + index);
            }
        } else {
            logger.error(
                    "selectDropdownOptionByIndex : Dropdown list has not been created : See buildDropdownList() /  buildDropdownListByClass() / buildDropdownListByClass()");
        }
        return selected;
    }

    // Check for presence and click
    @Override
    public boolean selectDropdownOptionByValue(String value) {
        boolean selected = false;
        if (currentSelect != null) {
            try {
                currentSelect.selectByValue(value);
                selected = true;
            } catch (NoSuchElementException nsee) {
                logger.error("selectDropdownOptionByValue : Cannot locate option with value : " + value);
            }
        } else {
            logger.error(
                    "selectDropdownOptionByValue : Dropdown list has not been created : See buildDropdownList() /  buildDropdownListByClass() / buildDropdownListByClass()");
        }
        return selected;
    }

    // Check for presence and click
    @Override
    public boolean selectDropdownOptionByVisibleText(String visibleText) {
        boolean selected = false;
        if (currentSelect != null) {
            // Selenium method selectByVisibleText() does not check if text is
            // present
            if (listContainsTextElement(visibleText)) {
                currentSelect.selectByVisibleText(visibleText);
                selected = true;
            } else {
                logger.error(
                        "selectDropdownOptionByVisibleText : Dropdown option [" + visibleText + "] does not exist");
            }
        } else {
            logger.error(
                    "selectDropdownOptionByVisibleText : Dropdown list has not been created : See buildDropdownList() /  buildDropdownListByClass() / buildDropdownListByClass()");
        }
        return selected;
    }

    @Override
    public boolean isDropDownOptionSelected(String selectedOption) {
        boolean selected = false;
        try {
            if (currentSelect.getFirstSelectedOption().getText().equals(selectedOption)) {
                selected = true;
            } else {
                logger.error("isDropDownOptionSelected : Dropdown option [" + selectedOption + "] does not exist");
            }
        } catch (NoSuchElementException nsee) {
            logger.error("isDropDownOptionSelected : No options are selected");

        }
        return selected;
    }

    // /////////////////////////
    // LIST CONTENT CHECKERS //
    // /////////////////////////

    // Compare text from list with passed array in order
    @Override
    public boolean listContainsTextElementsInOrder(String... elements) {
        boolean matches = true;
        if (elementList.size() != elements.length) {
            matches = false;
            logger.error("listContainsTextElementsInOrder : List length [" + elementList.size()
                    + "] differs from parameter length [" + elementList.size() + "]");
        } else {
            for (int i = 0; i < elementList.size(); i++) {
                if (!elementList.get(i).getText().equals(elements[i])) {
                    matches = false;
                    break;
                }
            }
        }
        return matches;
    }

    @Override
    public boolean listContainsTextElements(String... elements) {
        int matchCount = 0;
        if (elementList.size() != elements.length) {
            logger.error("listContainsTextElements : List length [" + elementList.size()
                    + "] differs from parameter length [" + elementList.size() + "]");
        } else {
            for (String element : elements) {
                if (listContainsTextElement(element)) {
                    matchCount++;
                } else {
                    logger.error("listContainsTextElements : Text Element : " + element + " : Not found in List");
                }
            }
        }
        return matchCount == elements.length ? true : false;
    }

    @Override
    public boolean listContainsTextElement(String element) {
        boolean contains = false;
        for (WebElement listElement : elementList) {
            if (listElement.getText().contains(element)) {
                contains = true;
                break;
            }
        }
        return contains;
    }

    // ///////////////////
    // LIST NAVIGATORS //
    // ///////////////////

    // By index
    @Override
    public boolean navigateToListElement(int index) {
        boolean retrieve = false;
        if (listPopulated()) {
            try {
                currentElement = elementList.get(index);
                retrieve = true;
            } catch (IndexOutOfBoundsException e) {
                logger.error("navigateToListElement : Index out of bounds  : " + index);
            }
        }
        return retrieve;
    }

    // To first
    @Override
    public boolean navigateToListFirstElement() {
        if (!listPopulated()) {
            logger.error("navigateToListFirstElement : List not Populated ");
            return false;
        }
        currentElement = elementList.get(0);
        logger.debug("navigateToListLastElement : Moved to First List Element");
        return true;
    }

    // To last
    @Override
    public boolean navigateToListLastElement() {
        if (!listPopulated()) {
            logger.error("navigateToListLastElement : List not Populated ");
            return false;
        }
        currentElement = elementList.get(elementList.size() - 1);
        logger.debug("navigateToListLastElement : Moved to Last List Element");
        return true;
    }

    // To next
    @Override
    public boolean navigateToNextListElement() {
        boolean retrieve = false;
        if (listPopulated()) {
            int index = elementList.indexOf(currentElement);
            if (index < (elementList.size() - 1)) {
                currentElement = elementList.get(index + 1);
                logger.debug("navigateToNextListElement : Moved to next List Element");
                retrieve = true;
            }
        }
        return retrieve;
    }

    // To previous
    @Override
    public boolean navigateToPreviousListElement() {
        boolean retrieve = false;
        if (listPopulated()) {
            int index = elementList.indexOf(currentElement);
            if (index > 0) {
                currentElement = elementList.get(index - 1);
                logger.debug("navigateToPreviousListElement : Moved to Previous List Element");
                retrieve = true;
            }
        }
        return retrieve;
    }

    // Navigate to List Item by Attributes and values Method
    // Used after build list by...
    @Override
    public boolean navigateToListElementByAttributeValue(String attribute, String value) {
        boolean navigated = false;
        for (WebElement webelement : elementList) {
            if (webelement.getAttribute(attribute).equals(value)) {
                navigated = true;
                currentElement = webelement;
                break;
            }
        }
        return navigated;
    }

    // Locate by anchor id
    @Override
    public boolean navigateToListElementByAnchorId(String anchorId) {
        boolean navigated = false;
        try {
            for (WebElement webelement : elementList) {
                WebElement anchor = webelement.findElement(By.tagName(HTML_ANCHOR));
                if (anchor.getAttribute("id").equals(anchorId)) {
                    navigated = true;
                    currentElement = webelement;
                    logger.debug("Navigated To List Element By AnchorId");
                    break;
                }
            }
        } catch (NoSuchElementException e) {
            logger.error("navigateToListElementByAnchor : no anchor with identifier :" + anchorId);
        }
        return navigated;
    }

    // By anchor text
    @Override
    public boolean navigateToListElementByAnchorText(String text) {
        boolean navigated = false;

        for (WebElement webelement : elementList) {
            try {
                if (webelement.findElement(By.tagName(HTML_ANCHOR)).getText().contains(text)) {
                    navigated = true;
                    currentElement = webelement;
                    logger.debug("Navigated To List Element By Anchor Text");
                    break;
                }
            } catch (NoSuchElementException e) {
                // Not an error, anchors may not be present in all list items
            }
        }
        return navigated;
    }

    @Override
    public boolean listEmpty() {
        return getListSize() == 0;
    }

    // ///////////////////
    // ELEMENT TESTERS //
    // ///////////////////

    // Contains text anywhere in the Element
    @Override
    public boolean hasAnyText() {

        if (currentElement.getText().isEmpty()) {
            return false;
        }
        logger.debug("Text found in Current Element");
        return true;
    }

    // Contains this text and only this text
    @Override
    public boolean hasPartialText(String... textElements) {

        boolean textFound = false;
        if (textElements != null && textElements.length > 0) {
            for (String textElement : textElements) {
                if (currentElement.getText().contains(textElement)) {
                    textFound = true;
                    break;
                }

            }
        }
        logger.debug("hasPartialText() " + textElements + " found in Current Element");
        return textFound;
    }

    @Override
    public boolean hasPartialText(boolean caseSensitive, String... textElements) {

        boolean textFound = false;
        if (textElements != null && textElements.length > 0 && caseSensitive) {
            for (String textElement : textElements) {
                if (currentElement.getText().contains(textElement)) {
                    textFound = true;
                    break;
                }

            }
        } else {
            if (textElements != null && textElements.length > 0) {
                for (String textElement : textElements) {
                    if (currentElement.getText().toLowerCase().contains(textElement.toLowerCase())) {
                        textFound = true;
                        break;
                    }

                }
            }
        }
        logger.debug("hasPartialText(): " + textElements + " found in Current Element");
        return textFound;
    }

    // Contains this text and only this text
    @Override
    public boolean hasPreciseText(String text) {
        boolean hasThisText = true;
        if (!currentElement.getText().trim().equals(text)) {
            logger.error("hasPreciseText() Expected : [" + text + "] Actual : [" + currentElement.getText() + "]");
            hasThisText = false;
        }
        logger.debug(text + " found in Current Element");
        return hasThisText;
    }

    @Override
    public boolean hasPartialURL(String text) {
        if (driver.getCurrentUrl().contains(text)) {
            logger.debug(text + " found in the URL");
            return true;
        } else {
            logger.error("Page url does not contain: " + text + " Actual URL: " + driver.getCurrentUrl());
            return false;
        }
    }

    // Present on screen
    @Override
    public boolean isDisplayed() {
        return currentElement.isDisplayed();
    }

    // Not present on screen
    @Override
    public boolean isHidden() {
        return !currentElement.isDisplayed();
    }

    // Contains this id anywhere in the identifier
    @Override
    public boolean hasPartialId(String id) {
        return currentElement.getAttribute("id").contains("id");
    }

    // Has precisely this id
    @Override
    public boolean hasPreciseId(String id) {
        return currentElement.getAttribute("id").equals(id);
    }

    // Has this value in attribute value
    @Override
    public boolean hasValue(String value) {
        return currentElement.getAttribute("value").equals(value);
    }

    // Has any href
    @Override
    public boolean hasHref() {
        return currentElement.getAttribute("href") == null ? false : true;
    }

    // Has this href
    @Override
    public boolean hasHref(String href) {
        return currentElement.getAttribute("href").equals(href);
    }

    // Has this type - form input fields
    @Override
    public boolean hasType(String type) {
        return currentElement.getAttribute("type").equals(type);
    }

    // Has this class name fully or in part
    @Override
    public boolean containsClassName(String className) {
        return currentElement.getAttribute("class").contains(className);
    }

    // Has precisely this class name
    @Override
    public boolean hasClass(String className) {
        return currentElement.getAttribute("class").equals(className);
    }

    // Has border colour
    @Override
    public boolean hasBorderColour(String colour) {

        return cssHandler.hasBorderColour(currentElement, colour);
    }

    // Has Text colour
    @Override
    public boolean hasTextColour(String hexColour) {
        return cssHandler.hasTextColour(currentElement, hexColour);
    }

    // Has background colour
    @Override
    public boolean hasBackgroundColour(String hexColour) {
        return cssHandler.hasBackgroundColour(currentElement, hexColour);
    }

    // Is of type this HTML tag
    @Override
    public boolean isOfTagType(String tag) {
        return currentElement.getTagName().equals(tag);
    }

    // Is enabled - buttons etc
    @Override
    public boolean isEnabled() {
        return currentElement.isEnabled();
    }

    // Is enabled - buttons etc
    @Override
    public boolean isDisabled() {
        return !currentElement.isEnabled();
    }

    // Is selected - radio, selections etc
    @Override
    public boolean isSelected() {
        return currentElement.isSelected();
    }

    // Is active - tabs etc
    @Override
    public boolean isActive() {
        return currentElement.getAttribute("class").contains("active");
    }

    // IMG tag contains src attribute matching full or partial imagePath
    @Override
    public boolean hasPartialImagePath(String imagePath) {
        boolean contains = false;
        if (!currentElement.getTagName().equals(HTML_IMAGE)) {
            logger.error("hasImage : Current element is not image container");
        } else {
            contains = currentElement.getAttribute("src").contains(imagePath);
        }
        return contains;
    }

    // Page, from HTML root, contains link to this URL
    @Override
    public boolean hasLinkToURL(String url) {
        boolean hasAnchorAndHref = false;
        List<WebElement> anchors = currentElement.findElements(By.tagName(HTML_ANCHOR));
        for (WebElement anchor : anchors) {
            if (hasHref(anchor, url)) {
                hasAnchorAndHref = true;
                break;
            }
        }
        return hasAnchorAndHref;
    }

    // ////////////////////
    // PUBLIC ACCESSORS //
    // ////////////////////

    // Get element text
    public String getText() {
        return currentElement.getText().trim();
    }

    // Get this attribute
    public String getAttribute(String attribute) {
        return currentElement.getAttribute(attribute);
    }

    // Get value of this this css attribute
    public String getCssAttribute(String attribute) {
        return currentElement.getCssValue(attribute);
    }

    // Get value attribute
    public String getValue() {
        return currentElement.getAttribute("value");
    }

    // ///////////
    // ACTIONS //
    // ///////////

    // Click element - buttons etc
    @Override
    public boolean click() {
        try {
            if (currentElement != null) {
                currentElement.click();
                logger.debug("Element Clicked");
                return true;
            } else {
                logger.error("click() : Element is Null");
                return false;
            }
        } catch (ElementNotVisibleException e) {
            logger.error("click() : Element is Not visible");
            return false;
        }

    }

    @Override
    public boolean clickAndHold(int duration) {
        if (currentElement != null) {
            logger.debug("Click and Hold Element");
            getActions().clickAndHold(currentElement).perform();
            sleep(duration);
            getActions().release(currentElement).perform();
            return true;
        } else {
            logger.error("clickAndHold() : Element is Null");
            return false;
        }
    }

    @Override
    public boolean clickAlertAccept() {
        try {
            new WebDriverWait(driver, explicitWaitTime).until(ExpectedConditions.alertIsPresent());
            Alert alert = driver.switchTo().alert();
            alert.accept();
            return true;
        } catch (NoAlertPresentException e) {
            return false;
        }

    }

    @Override
    public boolean clickAlertDismiss() {
        try {
            new WebDriverWait(driver, explicitWaitTime).until(ExpectedConditions.alertIsPresent());
            Alert alert = driver.switchTo().alert();
            alert.dismiss();
            return true;
        } catch (NoAlertPresentException e) {
            return false;
        }
    }

    @Override
    public boolean doubleClick() {
        if (currentElement != null) {
            logger.debug("Double Clicking Element");
            getActions().doubleClick(currentElement).perform();
            return true;
        } else {
            logger.error("doubleClick() : Element is Null");
            return false;
        }
    }

    @Override
    public boolean hover() {
        if (currentElement != null) {
            logger.debug("Hover over Element");
            getActions().moveToElement(currentElement).perform();
            return true;
        } else {
            logger.error("hover() : Element is Null");
            return false;
        }
    }

    *//**
     * Take screen shot at any time as evidence screenshot on failure is
     * automatically configured The output is configured to
     * ${user.home}/WHTF-Screenshots
     *
     * @param screenshotName the screenshot name
     *//*
    public boolean takeScreenShot(String screenshotName) {

        if (isDeviceNativeApp()) {
            deviceCaptureImage(screenshotName);
        } else
            try {
                String testClassName = "com.williamhill.whgtf.screenshot";
                GenericUtilities.takeScreenShot(screenshotName, testClassName);
            } catch (Exception ex) {
                logger.error("ScreenShot Failed" + ex);
            }
        return true;

    }

    // Type character sequence into input area
    @Override
    public boolean typeIn(CharSequence... keys) {
        boolean written = false;
        if (elementWriteable()) {
            currentElement.sendKeys(keys);
            written = true;
        }
        return written;
    }

    // Type character sequence into input area
    @Override
    public boolean typeInRandomCharacters(int numberOfCharacters) {

        return typeIn(RandomStringUtils.randomAlphabetic(numberOfCharacters));

    }

    @Override
    public boolean typeInRandomNumbers(int numberOfNumbers) {

        return typeIn(RandomStringUtils.randomNumeric(numberOfNumbers));
    }

    // Clear input text area
    @Override
    public boolean clear() {
        try {
            currentElement.clear();
            // Fire change event
            currentElement.sendKeys(Keys.BACK_SPACE);
        } catch (NoSuchElementException nsee) {
            logger.error("Clear() : Element not, or within FORM, element");
        }
        return true;
    }

    // Submit form
    @Override
    public boolean submit() {
        boolean submitted = false;
        try {
            currentElement.submit();
            submitted = true;
        } catch (NoSuchElementException nsee) {
            logger.error("submit() : Element not, or within FORM, element");
        }
        return submitted;
    }

    // Select all text within text box
    @Override
    public boolean selectAll() {
        try {
            currentElement.sendKeys(Keys.chord(Keys.CONTROL, "a"));
        } catch (NoSuchElementException nsee) {
            logger.error("selectAll() : Element not, or within FORM, element");
        }
        return true;
    }

    //Copy the selected text
    @Override
    public boolean copySelectedTextToClipboard() {
        try {
            currentElement.sendKeys(Keys.chord(Keys.CONTROL, "c"));
        } catch (NoSuchElementException nsee) {
            logger.error("copyTextToClipboard() : failed to copy");
        }
        return true;
    }

    //Copy the selected text

    *//**
     * Selects all and copies
     * Calls the selectAll and copySelectedTextToClipboard methods
     *//*
    public boolean copyTextToClipboard() {
        selectAll();
        copySelectedTextToClipboard();
        return true;
    }

    //Paste - control + v
    @Override
    public boolean paste() {
        try {
            currentElement.sendKeys(Keys.chord(Keys.CONTROL, "v"));
        } catch (NoSuchElementException nsee) {
            logger.error("paste() : failed to paste");
        }
        return true;
    }

    // Follow this link - if any - to URL
    @Override
    public boolean followLinkToURL(String link) {
        boolean canFollow = false;
        if (hasLinkToURL(link)) {
            driver.navigate().to(link);
            canFollow = true;
        }
        return canFollow;
    }

    // Navigate to root /body
    @Override
    public boolean navigateToRootElement() {

        try {
            currentElement = driver.findElement(By.xpath("/html/body"));
        } catch (NoSuchElementException nsee) {
            logger.error("Unable to return to Root Element - Body");
        }
        return true;

    }

    public static void setDriver(WebDriver driver) {
    	AutomationScriptingLanguage asl = new AutomationScriptingLanguage();
    	asl.set_Driver(driver);
    }
    
    public void set_Driver(WebDriver driver) {
    	this.driver = driver;
    }
    
    // Goto this URL - Initialises the Webdriver
    @Override
    public boolean navigateToPage(String url) {

        // The user wants new browser - createBrowser() has been called in the
        // test layer
        if (createBrowser != null)
            createBrowser.setDriver(); // create new browser
            // The user hasn't called createBrowser() and there is no active driver
        else if (driver == null) {
            //Checks if test should be run on a device
            if (device != null && System.getProperty("browser") == null) {
                assertTrue(deviceStart());
            } else {
                createBrowser = new CreateBrowser(); // create a new driver
            }
            if (createBrowser != null) {
                createBrowser.setDriver();
            }
        } else {
            // There is an active driver && createBrowser() hasn't been called -
            // reuse the existing browser session
            // Check if quit has been called upon the current driver object
            try {
                driver.getWindowHandle();
            } // Create new browser
            catch (Exception e) {
                //Checks if test should be run on a device
                if (device != null && System.getProperty("browser") == null) {
                    assertTrue(deviceStart());
                } else {
                    createBrowser = new CreateBrowser(); // create a new driver
                }
                if (createBrowser != null) {
                    createBrowser.setDriver();
                }
            }
        }

        boolean navigable = false;
        URL URL;
        HttpURLConnection huc;
        try {
            SSLCertificateHandler.setSSLSecurity();
            URL = new URL(url);
            huc = (HttpURLConnection) URL.openConnection();
            huc.setRequestMethod("GET");
            // Probe the address
            huc.connect();
            // Mac OS Chrome workaround -- Bring Chrome to the front
            try {
                if (this.operative_system.toLowerCase().contains("mac") && !System.getProperty("browser").toLowerCase().contains("firefox") && !(driver instanceof AppiumDriver)) {

                    if (System.getProperty("browser").toLowerCase().contains("safari")) {
                        try {
                            String[] launchCommand = {"osascript", "-e", "if application \"Safari\" is running then \n tell application \"Safari\" to activate\n" +
                                    "end if"};
                            Runtime.getRuntime().exec(launchCommand);
                        } catch (IOException e) {

                        }

                    } else {
                        macChromeMaximizeWorkaround();
                        Point targetPosition = new Point(0, 0);
                        driver.manage().window().setPosition(targetPosition);
                        driver.manage().window().setSize(new Dimension(screenRegion.getBounds().width, screenRegion.getBounds().height));
                    }

                }

            } catch (NullPointerException e) {
                //Handles if no browser present
                if (this.operative_system.toLowerCase().contains("mac") && DeviceHandler.getPlatformName().toLowerCase().equals("chromeemulator")) {
                    macChromeMaximizeWorkaround();
                }
            }
            // Now point webdriver to this address
            driver.navigate().to(URL);
            navigable = true;
        } catch (MalformedURLException mue) {
            logger.error("navigateToPage() : MalformedURLException : Cannot parse this url : " + url);
        } catch (TimeoutException toe) {
            logger.error("navigateToPage() : Timed out waiting for this url: " + url);
        } catch (UnknownHostException uhe) {
            logger.error("navigateToPage() : UnknownHostException : Cannot connect to this url : " + url);
        } catch (IOException ioe) {
            logger.error("navigateToPage() : IOException : For address : " + url);
        } catch (WebDriverException e) {
            logger.error("Unable to navigate to page - Are you running an app? Try deviceStart instead");
        } finally {
            this.createBrowser = null;
        }
        return navigable;
    }

    *//**
     * @deprecated use
     * {@link com.williamhill.whgtf.asl.AutomationScriptingLanguage.ManageBrowser#setBrowserDimensions(int, int)}
     * Sets the driverDimensions with arguments
     *//*
    @Override
    @Deprecated
    public void setBrowserDimensions(int width, int height) {
        driver.manage().window().setSize(new Dimension(width, height));
        logger.debug("-Dresolution using Browser Dimensions " + width + "x" + height);
        refresh();
    }

    @Override
    public boolean navigateBack() {
        try {
            driver.navigate().back();
        } catch (NoSuchWindowException nswe) {

        }
        return true;
    }

    @Override
    public boolean navigateForward() {
        try {
            driver.navigate().forward();
        } catch (NoSuchWindowException e) {

        }
        return true;

    }

    @Override
    public boolean refresh() {
        try {
            driver.navigate().refresh();
        } catch (Exception ex) {

        }

        return true;
    }

    @Override
    public boolean titleHasPartialText(String text) {

        if (driver.getTitle().contains(text)) {
            return true;
        } else {
            logger.error("Page title does not contain: " + text + " Actual Title: " + driver.getTitle());
            return false;
        }
    }

    @Deprecated
    public String getSource() {
        return driver.getPageSource();
    }

    @Override
    public boolean navigateToWindow(String windowIdentifier) {
        try {
            driver.switchTo().window(windowIdentifier);
        } catch (NoSuchWindowException nswe) {

        }
        return true;
    }

    // Switch to between parent-child windows. Makes no assumption
    // about parent-child relationship. Will return
    // false if there is only one window open.
    @Override
    public boolean navigateToOtherWindow() {

        boolean isAnotherWindow = false;
        Set<String> handles = driver.getWindowHandles();
        String currentWindow = driver.getWindowHandle();
        for (String handle : handles) {
            if (!handle.equals(currentWindow)) {

                driver.switchTo().window(handle);
                logger.debug("Switched to Other Window");
                isAnotherWindow = true;
            }
        }
        return isAnotherWindow;
    }

    // Switch to IFrame following activation and focus.
    @Override
    public boolean navigateToActivateFrame() {
        try {
            driver = driver.switchTo().frame(0);
            logger.debug("Switched to Active Frame");
            return true;
        } catch (NoSuchFrameException nsfe) {
            logger.error("Unable to Switch Frame - No Such Frame");
            return false;
        }
    }

    // Switch to IFrame following activation and focus.
    @Override
    public boolean navigateToFrameById(String id) {
        try {
            driver = driver.switchTo().frame(id);
            logger.debug("Switched to Active Frame by Id");
            return true;
        } catch (NoSuchFrameException nsfe) {
            logger.error("Unable to Switch Frame - No Such Frame");
            return false;
        }
    }

    // Switch to IFrame following activation and focus.
    @Override
    public boolean navigateToFrameByName(String name) {
        try {
            driver = driver.switchTo().frame(name);
            logger.debug("Switched to Active Frame by Name");
            return true;
        } catch (NoSuchFrameException nsfe) {
            logger.error("Unable to Switch Frame - No Such Frame");
            return false;
        }
    }

    // Switch to IFrame following activation and focus.
    @Override
    public boolean navigateToFrameByClass(String className) {
        try {
            driver = driver.switchTo().frame(driver.findElement(By.className(className)));
            logger.debug("Switched to Active Frame by className");
            return true;
        } catch (NoSuchFrameException nsfe) {
            logger.error("Unable to Switch Frame - No Such Frame");
            return false;
        }
    }

    // Switch to IFrame following activation and focus.
    @Override
    public boolean navigateToFrameByXpath(String xpath) {
        try {
            driver = driver.switchTo().frame(driver.findElement(By.xpath(xpath)));
            logger.debug("Switched to Active Frame by xpath");
            return true;
        } catch (NoSuchFrameException nsfe) {
            logger.error("Unable to Switch Frame - No Such Frame");
            return false;
        }
    }

    // Switch to IFrame following activation and focus.
    @Override
    public boolean navigateToFrameByCss(String cssSelector) {
        try {
            driver = driver.switchTo().frame(driver.findElement(By.cssSelector((cssSelector))));
            logger.debug("Switched to Active Frame by cssSelector");
            return true;
        } catch (NoSuchFrameException nsfe) {
            logger.error("Unable to Switch Frame - No Such Frame");
            return false;
        }
    }

    // Switch to Frame following Wait and focus.
    @Override
    public boolean waitForFrameByIdToBeAvailableAndSwitch(String frameId) {
        try {
            new WebDriverWait(driver, explicitWaitTime)
                    .until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(frameId));
            return true;
        } catch (NoSuchFrameException nsfe) {
            logger.error("Unable to Switch Frame - No Such Frame");
            return false;
        }
    }

    // Switch to parent window from child window or IFrame
    // Will have no effect if only one window open
    @Override
    public boolean returnToDefaultWindow() {
        // Will always return true
        return ((driver = driver.switchTo().defaultContent())) != null;
    }

    @Override
    public boolean deleteCookies() {
        try {
            driver.manage().deleteAllCookies();
        } catch (NoSuchWindowException nsw) {

        }
        return true;
    }


    @Override
    public boolean hasPartialCookieValue(String cookieName, String cookieValue) {

        try {

            if (driver.manage().getCookieNamed(cookieName).getValue().contains(cookieValue)) {
                return true;
            }
        } catch (NullPointerException e) {
            logger.error("Cookie: " + cookieName + " does not exist");
            logger.debug("Cookie Names:");
            for (Cookie cookie : driver.manage().getCookies()) {
                logger.debug(cookie.getName());
            }
            return false;
        }
        logger.error("Cookie does not contain the value: " + cookieValue + ", actual value: " + driver.manage().getCookieNamed(cookieName).getValue());
        return false;

    }

    @Override
    public boolean hasPreciseCookieValue(String cookieName, String cookieValue) {

        try {
            if (driver.manage().getCookieNamed(cookieName).getValue().equals(cookieValue)) {
                return true;
            }
        } catch (NullPointerException e) {
            logger.error("Cookie: " + cookieName + " does not exist");
            logger.debug("Cookie Names:");
            for (Cookie cookie : driver.manage().getCookies()) {
                logger.debug(cookie.getName());
            }
            return false;
        }
        logger.error("Cookie does not equal : " + cookieValue + ", actual value: " + driver.manage().getCookieNamed(cookieName).getValue());
        return false;
    }

    @Override
    public boolean navigateToChild() {
        WebElement elementStore = currentElement;
        // Step into child element
        if (!navigateToElementByXpath("./*[1]")) {
            // If not possible, restore.
            currentElement = elementStore;
            logger.debug("No Child Element Found");
            return true;
        } else {
            return true;
        }

    }

    @Override
    public boolean navigateToParent() {
        WebElement elementStore = currentElement;
        // Step up to parent element
        if (!navigateToElementByXpath("..")) {
            // If not possible, restore.
            logger.debug("No Parent Element Found");
            currentElement = elementStore;
            return true;
        } else {
            return true;
        }
    }

    @Override
    public boolean buildListBySibling() {
        if (elementList != null) {
            elementList.clear();
        }
        elementList = currentElement.findElements(By.xpath("../*"));
        if (elementList.size() == 0) {
            logger.warn("buildListBySibling : Empty sibling list for element : " + currentElement.toString());
            return false;
        } else {
            return true;
        }
    }

    @Override
    public boolean saveCurrentElementPosition() {
        if (currentElement == null) {
            logger.error("saveCurrentElementPosition : element has not been initialised");
            return false;
        } else {
            elementStore = currentElement;
            return true;
        }
    }

    @Override
    public boolean saveCurrentElementPosition(String identifier) {

        boolean saved = false;

        if (storedElementMap == null) {
            storedElementMap = new HashMap<>();
        }

        try {
            storedElementMap.put(identifier, currentElement);
            saved = true;
        } catch (Exception e) {
            logger.error("saveCurrentElementPosition : Unsuccessful attempt to save element with key :" + identifier);
        }
        return saved;
    }

    @Override
    public boolean restoreElementPosition() {
        boolean restored = false;

        if (elementStore != null) {
            currentElement = elementStore;
            elementStore = null;
            restored = true;
        } else {
            logger.error("restoreElementPosition : Attempt to restore unsaved element");
        }
        return restored;
    }

    @Override
    public boolean restoreElementPosition(String identifier) {
        boolean restored = false;
        if (storedElementMap == null) {
            logger.error("restoreElementPosition : No element map created");
        } else {
            WebElement webelement = storedElementMap.get(identifier);
            if (currentElement == null) {
                logger.error("restoreElementPosition : No mapping for key : " + identifier);
            } else {
                currentElement = webelement;
                restored = true;
            }
        }
        return restored;
    }

    @Override
    public boolean waitForPresenceOfElementById(String id) {
        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime).until(ExpectedConditions.presenceOfElementLocated(By.id(id)));
        } catch (Exception e) {
            logger.error("waitForPresenceOfElementById : Element Not Found: " + id);
            found = false;
        }
        return found;
    }

    @Override
    public boolean waitForVisibilityOfElementById(String id) {
        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime).until(ExpectedConditions.visibilityOfElementLocated(By.id(id)));
        } catch (Exception e) {
            logger.error("waitForPresenceOfElementById : Element Not Found: " + id);
            found = false;
        }
        return found;
    }

    @Override
    public boolean waitForVisibilityOfElementByClassName(String className) {
        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime)
                    .until(ExpectedConditions.visibilityOfElementLocated(By.className(className)));
        } catch (Exception e) {
            logger.error("waitForVisibilityOfElementByClass : Element Not Found: " + className);
            found = false;
        }
        return found;
    }

    @Override
    public boolean waitForVisibilityOfElementByName(String name) {
        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime)
                    .until(ExpectedConditions.visibilityOfElementLocated(By.name(name)));
        } catch (Exception e) {
            logger.error("waitForVisibilityOfElementByClass : Element Not Found: " + name);
            found = false;
        }
        return found;
    }

    @Override
    public boolean waitForVisibilityOfElementByCss(String css) {
        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime)
                    .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(css)));
        } catch (Exception e) {
            logger.error("waitForVisibilityOfElementByCss : Element Not Found: " + css);
            found = false;
        }
        return found;
    }

    @Override
    public boolean waitForVisibilityOfElementByXpath(String xpath) {
        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime)
                    .until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xpath)));
        } catch (Exception e) {
            logger.error("waitForVisibilityOfElementByXpath : Element Not Found: " + xpath);
            found = false;
        }
        return found;
    }

    @Override
    public boolean waitForInvisibilityOfElementById(String id) {
        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime)
                    .until(ExpectedConditions.invisibilityOfElementLocated(By.id(id)));
        } catch (Exception e) {
            logger.error(
                    "waitForInvisibilityOfElementById : Element Still Visable after explicitWaitTime Seconds : " + id);
            found = false;
        }
        return found;
    }

    @Override
    public boolean waitForInvisibilityOfElementByClassName(String className) {
        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime)
                    .until(ExpectedConditions.invisibilityOfElementLocated(By.className(className)));
        } catch (Exception e) {
            logger.error("waitForInvisibilityOfElementByClass : Element Still Visable after explicitWaitTime Seconds : "
                    + className);
            found = false;
        }
        return found;
    }

    @Override
    public boolean waitForInvisibilityOfElementByCss(String css) {
        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime)
                    .until(ExpectedConditions.invisibilityOfElementLocated(By.cssSelector(css)));
        } catch (Exception e) {
            logger.error("waitForInvisibilityOfElementByCss : Element Still Visable after explicitWaitTime Seconds : "
                    + css);
            found = false;
        }
        return found;
    }

    @Override
    public boolean waitForInvisibilityOfElementByXpath(String xpath) {
        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime)
                    .until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(xpath)));
        } catch (Exception e) {
            logger.error("waitForInvisibilityOfElementByXpath : Element Still Visable after explicitWaitTime Seconds : "
                    + xpath);
            found = false;
        }
        return found;
    }

    @Override
    public boolean waitForPresenceOfElementByCss(String cssSelector) {
        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime)
                    .until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(cssSelector)));
        } catch (Exception e) {
            logger.error("waitForPresenceOfElementByCss : Element Not Found: " + cssSelector);
            found = false;
        }
        return found;
    }

    @Override
    public boolean waitForPresenceOfElementByClassName(String className) {
        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime)
                    .until(ExpectedConditions.presenceOfElementLocated(By.className(className)));
        }
        // NoSuchElementException ?
        catch (Exception e) {
            logger.error("waitForPresenceOfElementByClass : Element Not Found: " + className);
            found = false;
        }
        return found;
    }

    @Override
    public boolean waitForValueToBePresent(String text) {
        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime)
                    .until(ExpectedConditions.textToBePresentInElementValue(currentElement, text));
        } catch (Exception e) {
            logger.error("waitForValueToBePresent : String Not Found: " + text);
            found = false;
        }
        return found;
    }

    @Override
    public void waitForStaleElementByCss(String cssSelector) {
        try {
            logger.debug("Trying to find element: " + cssSelector + " within waitForStale Method");
            navigateToElementByCSS(cssSelector);
        } catch (StaleElementReferenceException e) {
            logger.debug("Element By CSS: " + cssSelector + " Triggered Stale Element Reference");
            sleep(2000);
        } catch (NoSuchElementException e) {
            logger.debug("Element By CSS: " + cssSelector + " was not found");
            sleep(2000);
        }
        navigateToRootElement();
    }

    @Override
    public boolean waitForTextToBePresentInElement(String text) {

        boolean found = true;
        try {
            new WebDriverWait(driver, explicitWaitTime).until(ExpectedConditions.textToBePresentInElement(currentElement, text));
        } catch (Exception e) {
            logger.error("waitForTextToBePresent : String Not Found: " + text);
            return false;
        }
        return found;
    }

    @Override
    public boolean navigateToListElementByValue(String value) {
        boolean navigated = false;
        for (WebElement webelement : elementList) {
            if (webelement.getAttribute("value").equals(value)) {
                navigated = true;
                currentElement = webelement;
                break;
            }
        }
        return navigated;
    }

    @Override
    public boolean navigateToListElementByVisibleText(String text) {
        boolean navigated = false;
        for (WebElement webelement : elementList) {
            if (webelement.getText().equals(text)) {
                navigated = true;
                currentElement = webelement;
                break;
            }
        }
        return navigated;
    }

    @Override
    public boolean navigateToListElementByClassName(String className) {
        boolean navigated = false;
        for (WebElement webelement : elementList) {

            if (webelement.getAttribute("class").equals(className)) {
                navigated = true;
                currentElement = webelement;
                break;
            }
        }
        return navigated;
    }

    @Override
    public boolean isOptionSelected(String selectedText) {
        boolean selected = false;
        if (listPopulated()) {
            for (WebElement webelement : elementList) {
                if (webelement.getText().equals(selectedText)) {
                    // selected = true ( dropdown ) or class = active ( anchors
                    // )
                    if (webelement.isSelected() || webelement.getAttribute("class").contains("active")) {
                        selected = true;
                        break;
                    }
                }
            }
        }
        return selected;
    }

    @Override
    public boolean navigateToListElementById(String id) {
        boolean navigated = false;
        for (WebElement webelement : elementList) {
            if (webelement.getAttribute("id").equals(id)) {
                navigated = true;
                currentElement = webelement;
                break;
            }
        }
        return navigated;
    }

    @Override
    public boolean navigateToListElementByPartialId(String id) {
        boolean navigated = false;
        for (WebElement webelement : elementList) {
            if (webelement.getAttribute("id[id*='id']") != null) {
                navigated = true;
                currentElement = webelement;
                break;

            }
        }
        return navigated;
    }

    // /////////////
    // TOKENISER //
    // /////////////

    @Override
    public boolean buildTokenListByText() {
        return buildTokenList("[a-zA-Z0-9]+");
    }

    @Override
    public boolean buildTokenListByNumber() {
        return buildTokenList("[0-9]+");
    }

    @Override
    public boolean navigateToToken(int index) {
        boolean navigated = false;
        if (tokenList != null && tokenList.size() > 0) {
            try {
                currentToken = tokenList.get(index);
                currentTokenIndex = index;
                navigated = true;
            } catch (IndexOutOfBoundsException ioobe) {
                logger.error("navigateToToken : Index  : " + index + " Token List Size " + tokenList.size());
            }
        }
        return navigated;
    }

    @Override
    public boolean navigateToWindowByPartialTitle(String title) {

        try {
            WebDriver popup = null;
            Iterator<String> windowIterator = driver.getWindowHandles().iterator();
            while (windowIterator.hasNext()) {
                String windowHandle = windowIterator.next();
                popup = driver.switchTo().window(windowHandle);
                if (popup.getTitle().contains(title)) {
                    break;
                }
            }
            logger.debug("navigateToWindowByPartialTitle : Navigated to window by:" + title);
            return true;
        } catch (NoSuchWindowException nswe) {
            logger.error("navigateToWindowByPartialTitle : No Window found");
            return false;
        }

    }

    @Override
    public boolean navigateToFirstToken() {
        return navigateToToken(0);
    }

    @Override
    public boolean navigateToLastToken() {
        return navigateToToken(tokenList.size() - 1);
    }

    @Override
    public boolean navigateToNextToken() {
        return navigateToToken(currentTokenIndex + 1);
    }

    @Override
    public boolean navigateToPreviousToken() {
        return navigateToToken(currentTokenIndex - 1);
    }

    @Override
    public boolean hasTokenPartialText(String text) {
        return currentToken.contains(text);
    }

    @Override
    public boolean hasTokenPreciseText(String text) {
        return currentToken.contains(text);
    }

    // ///////////////
    // PLACEHOLDER //
    // ///////////////
    @Override
    public boolean hasPlaceHolder() {
        if ((getAttribute("placeholder") == null) || (getAttribute("placeholder").isEmpty())) {
            return false;
        } else {
            return true;
        }

    }

    @Override
    public boolean hasPartialPlaceholder(String text) {
        if ((getAttribute("placeholder") != null) && (getAttribute("placeholder").contains(text))) {
            return true;
        } else {
            return true;
        }
    }

    @Override
    public boolean hasPrecisePlaceholder(String text) {
        if ((getAttribute("placeholder") != null) && (getAttribute("placeholder").equals(text))) {
            return true;
        } else {
            return true;
        }
    }

    @Override
    public boolean isDate(String dateString) {
        boolean isDate = false;
        if (!Strings.isNullOrEmpty(dateString)) {
            SimpleDateFormat pattern = new SimpleDateFormat("dd MMM yyyy");
            try {
                pattern.parse(dateString.trim());
                isDate = true;
            } catch (ParseException e) {
                logger.error(dateString + "isDate() : date format is incorrect");
            }
        }
        return isDate;
    }

    // //////////////////////
    // Internal functions //
    // //////////////////////

    public int getListSize() {
        return elementList.size();
    }

    // /////////////////////
    // Private functions //
    // /////////////////////

    private boolean hasHref(WebElement webElement, String href) {

        String att = webElement.getAttribute("href");
        return att != null && att.contains(href);
    }

    private List<WebElement> getElementsByTag(String tag) {
        return currentElement.findElements(By.tagName(tag));
    }

    private List<WebElement> getElementsByClass(String className) {
        if (isDeviceNativeApp()) {
            return driver.findElements(By.className(className));
        } else {
            return currentElement.findElements(By.className(className));
        }
    }

    private List<WebElement> getElementsByXpath(String xpath) {
        if (isDeviceNativeApp()) {
            return driver.findElements(By.xpath(xpath));
        } else {
            return currentElement.findElements(By.xpath(xpath));
        }
    }

    private List<WebElement> getElementsByName(String name) {
        if (isDeviceNativeApp()) {
            return driver.findElements(By.name(name));
        } else {
            return currentElement.findElements(By.name(name));
        }
    }

    private List<WebElement> getElementsByCSS(String cssSelector) {
        return currentElement.findElements(By.cssSelector(cssSelector));
    }

    private List<WebElement> getElementsByPartialLinkText(String text) {
        return currentElement.findElements(By.partialLinkText(text));
    }

    private List<WebElement> getElementsByLinkText(String text) {
        return currentElement.findElements(By.linkText(text));
    }

    private List<WebElement> getElementsByPartialId(String id) {
        return currentElement.findElements(By.cssSelector(String.format("[id*='%s']", id)));
    }

    public List<WebElement> getElementList() {
        return elementList;
    }

    private boolean listPopulated() {
        if (elementList == null || elementList.isEmpty()) {
            logger.warn("navigateToListElement : Attempt to index empty or null list");
            return false;
        } else {
            return true;
        }
    }

    // Setters for Mockito tests
    public void setElementList(List<WebElement> elementList) {
        this.elementList = elementList;
    }

    public Map<String, WebElement> getStoredElementMap() {
        return storedElementMap;
    }

    public void setStoredElementMap(Map<String, WebElement> storedElementMap) {
        this.storedElementMap = storedElementMap;
    }

    // Diagnostic

    @Override
    public boolean printListToDebug() {

        int i = 0;
        logger.debug("WebElement List : size : " + elementList.size());
        logger.debug("WebElement List : tag type  : " + elementList.get(0).getTagName());

        for (WebElement webElement : elementList) {
            logger.debug("WebElement List : [" + i + "] : id :" + webElement.getAttribute(HTML_ATTRIBUTE_ID));
            logger.debug("WebElement List : [" + i + "] : class :" + webElement.getAttribute(HTML_ATTRIBUTE_CLASS));
            logger.debug("WebElement List : [" + i + "] : title :" + webElement.getAttribute(HTML_ATTRIBUTE_TITLE));
            logger.debug("WebElement List : [" + i + "] : text :" + webElement.getText());
            i++;
        }
        return true;
    }

    @Override
    public boolean listHasSize(int size) {
        return (elementList.size() == size);
    }

    @Override
    public boolean findImageClick(String filePath) {

        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "click");
        }
        try {
            screenRegion.click(filePath);
        } catch (FindFailed e) {
            return false;
        }
        return true;
    }

    @Override
    public boolean findImageDoubleClick(String filePath) {

        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "doubleClick");
        }
        try {
            screenRegion.doubleClick(filePath);
        } catch (FindFailed e) {
            return false;
        }
        return true;

    }

    @Override
    public boolean inputText(String filePath, String text) {
        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "inputText", text);
        }
        try {
            screenRegion.type(filePath, text, 0);
        } catch (FindFailed e) {
            return false;
        }
        return true;
    }

    @Override
    public boolean findImage(String filePath) {

        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "hover");
        }
        try {
            screenRegion.hover(filePath);

        } catch (FindFailed e) {
            return false;
        }
        return true;
    }

    @Override
    public boolean findPressButton(String specialKey) {

        int result = screenRegion.type(specialKey);

        if (result != 1) {

            return false;
        }
        return true;
    }

    @Override
    public boolean waitForImage(String... filePath) {

        int j = 0;
        final AtomicBoolean bool = new AtomicBoolean();
        bool.set(false);
        ExecutorService executor = Executors.newFixedThreadPool(filePath.length);
        do {
            for (final String file : filePath) {
                if (new File(file).listFiles() != null) {
                    return searchDirectory(file, null);
                }
                executor.submit(new Runnable() {

                    @Override
                    public void run() {

                        if (new File(file + ".png").exists() || new File(file).exists()) {
                            if (screenRegion.exists(file, 0) != null) {
                                bool.getAndSet(true);
                            }
                        }
                    }
                });
            }
            if (bool.get() != false) {
                executor.shutdown();
                return true;
            }
            sleep(1500);
            j++;
        } while (screenRegion.getAutoWaitTimeout() > j);
        logger.error("Unable to find any of the images in the specified timeframe");
        executor.shutdown();
        return false;
    }

    private boolean searchDirectory(String filePath, final String action) {

        final File[] folder = new File(filePath).listFiles();
        if (folder == null) {
            logger.error("Check folder exists and contains images");
            return false;
        }
        int j = 0;
        final AtomicBoolean bool = new AtomicBoolean();
        bool.set(false);
        ExecutorService executor = Executors.newFixedThreadPool(folder.length);
        do {
            for (final File file : folder) {

                executor.submit(new Runnable() {

                    @Override
                    public void run() {
                        if (!file.getName().contains(".DS_Store") && screenRegion.exists(file.getAbsolutePath(), 0) != null) {
                            bool.set(true);
                            if (action != null) {
                                switch (action) {
                                    case "hover":
                                        assertTrue(findImage(file.getAbsolutePath()));
                                        break;
                                    case "click":
                                        assertTrue(findImageClick(file.getAbsolutePath()));
                                        break;
                                    case "doubleClick":
                                        assertTrue(findImageDoubleClick(file.getAbsolutePath()));
                                        break;
                                    case "findImageClickToLeft":
                                        assertTrue(findImageClickToLeft(file.getAbsolutePath()));
                                        break;
                                    case "findImageClickToRight":
                                        assertTrue(findImageClickToRight(file.getAbsolutePath()));
                                        break;
                                }
                            }

                        }

                    }
                });
            }
            if (bool.get() != false) {
                executor.shutdown();
                return true;
            }
            sleep(1000);
            j++;
        } while (screenRegion.getAutoWaitTimeout() > j);
        logger.error("Unable to find any of the images in the specified timeframe");
        executor.shutdown();
        return false;
    }

    private boolean searchDirectory(String filePath, final String action, final String text) {

        final File[] folder = new File(filePath).listFiles();
        if (folder == null) {
            logger.error("Check folder exists and contains images");
            return false;
        }
        int j = 0;
        final AtomicBoolean bool = new AtomicBoolean();
        bool.set(false);
        ExecutorService executor = Executors.newFixedThreadPool(folder.length);
        do {
            for (final File file : folder) {

                executor.submit(new Runnable() {

                    @Override
                    public void run() {
                        if (!file.getName().contains(".DS_Store") && screenRegion.exists(file.getAbsolutePath(), 0) != null) {
                            bool.set(true);
                            if (action != null) {
                                switch (action) {
                                    case "inputText":
                                        assertTrue(inputText(file.getAbsolutePath(), text));
                                        break;
                                    case "findImageCaptureImageToRight":
                                        assertTrue(findImageCaptureImageToRight(file.getAbsolutePath(), text));
                                        break;
                                    case "findImageCaptureImageToLeft":
                                        assertTrue(findImageCaptureImageToLeft(file.getAbsolutePath(), text));
                                        break;
                                    case "findImageCaptureImageAbove":
                                        assertTrue(findImageCaptureImageAbove(file.getAbsolutePath(), text));
                                        break;
                                    case "findImageCaptureImageBelow":
                                        assertTrue(findImageCaptureImageBelow(file.getAbsolutePath(), text));
                                        break;
                                    case "findPartialTextInImage":
                                        assertTrue(findPartialTextInImage(file.getAbsolutePath(), text));
                                        break;
                                    case "findPreciseTextInImage":
                                        assertTrue(findPreciseTextInImage(file.getAbsolutePath(), text));
                                        break;
                                    case "findImageTypeToRight":
                                        assertTrue(findImageTypeToRight(file.getAbsolutePath(), text));
                                        break;
                                    case "findImageTypeOnCentre":
                                        assertTrue(findImageTypeOnCentre(file.getAbsolutePath(), text));
                                        break;
                                    case "findImageTypeToBottom":
                                        assertTrue(findImageTypeToBottom(file.getAbsolutePath(), text));
                                        break;
                                    case "findImageTypeToLeft":
                                        assertTrue(findImageTypeToLeft(file.getAbsolutePath(), text));
                                        break;
                                }
                            }
                        }

                    }
                });
            }
            if (bool.get() != false) {
                executor.shutdown();
                return true;
            }
            sleep(1000);
            j++;
        } while (screenRegion.getAutoWaitTimeout() > j);
        logger.error("Unable to find any of the images in the specified timeframe");
        executor.shutdown();
        return false;
    }

    @Override
    public boolean findImageCaptureImageToRight(String filePath, String savedImagePath) {
        return findImageCaptureImageToRight(filePath, savedImagePath, 75);
    }

    @Override
    public boolean findImageCaptureImageToRight(String filePath, String savedImagePath, int pixelSize) {
        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "findImageCaptureImageToRight", savedImagePath);
        }
        try {
            BufferedImage image = screenRegion.capture(screenRegion.find(filePath).right(pixelSize)).getImage();

            ImageIO.write(image, "png", new File(savedImagePath));
        } catch (FindFailed | IOException e1) {
            return false;
        }
        return true;
    }

    @Override
    public boolean findImageCaptureImageToLeft(String filePath, String savedImagePath) {
        return findImageCaptureImageToLeft(filePath, savedImagePath, 75);
    }

    @Override
    public boolean findImageCaptureImageToLeft(String filePath, String savedImagePath, int pixelSize) {
        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "findImageCaptureImageToLeft", savedImagePath);
        }
        try {
            BufferedImage image = screenRegion.capture(screenRegion.find(filePath).left(pixelSize)).getImage();

            ImageIO.write(image, "png", new File(savedImagePath));
        } catch (FindFailed | IOException e1) {
            return false;
        }
        return true;
    }

    @Override
    public boolean findImageCaptureImageAbove(String filePath, String savedImagePath) {
        return findImageCaptureImageAbove(filePath, savedImagePath, 75);
    }

    @Override
    public boolean findImageCaptureImageAbove(String filePath, String savedImagePath, int pixelSize) {
        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "findImageCaptureImageAbove", savedImagePath);
        }
        try {
            BufferedImage image = screenRegion.capture(screenRegion.find(filePath).above(pixelSize)).getImage();

            ImageIO.write(image, "png", new File(savedImagePath));
        } catch (FindFailed | IOException e1) {
            return false;
        }
        return true;
    }

    @Override
    public boolean findImageCaptureImageBelow(String filePath, String savedImagePath) {
        return findImageCaptureImageBelow(filePath, savedImagePath, 75);
    }

    @Override
    public boolean findImageCaptureImageBelow(String filePath, String savedImagePath, int pixelSize) {
        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "findImageCaptureImageBelow", savedImagePath);
        }
        try {
            BufferedImage image = screenRegion.capture(screenRegion.find(filePath).below(pixelSize)).getImage();

            ImageIO.write(image, "png", new File(savedImagePath));
        } catch (FindFailed | IOException e1) {
            return false;
        }
        return true;
    }

    public String getText(String filePath) {

        AbbyyImageParser abbyy = new AbbyyImageParser();
        abbyy.setImgDir(filePath);
        String value = "";
        try {
            value = abbyy.performRecognition();
        } catch (Exception e) {
            logger.debug("Unable To Process Image");
        }
        logger.debug("Fount Text in Image: " + value);
        return value;

    }

    @Override
    public boolean findPartialTextInImage(String filePath, String text) {
        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "findPartialTextInImage", text);
        }
        AbbyyImageParser abbyy = new AbbyyImageParser();
        abbyy.setImgDir(filePath);
        String value = "";
        try {
            value = abbyy.performRecognition();
        } catch (Exception e) {

            logger.debug("Unable To Process Image");
        }

        logger.debug("Fount Text in Image: " + value);

        if (value.contains(text)) {
            logger.debug("Text on Image: " + value + " matches the input: " + text);
            return true;
        } else {
            logger.debug("Text on Image: " + value + " does not match the input: " + text);
            return false;
        }

    }

    @Override
    public boolean findPreciseTextInImage(String filePath, String text) {
        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "findPreciseTextInImage", text);
        }
        AbbyyImageParser abbyy = new AbbyyImageParser();
        abbyy.setImgDir(filePath);
        String value = "";
        try {
            value = abbyy.performRecognition();
        } catch (Exception e) {

            logger.debug("Unable To Process Image");
        }

        logger.debug("Fount Text in Image: " + value);

        if (value.equals(text)) {
            logger.debug("Text on Image: " + value + " matches the input: " + text);
            return true;
        } else {
            logger.debug("Text on Image: " + value + " does not match the input: " + text);
            return false;
        }

    }

    @Override
    public boolean findImageTypeToRight(String filePath, String text) {
        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "findImageTypeToRight", text);
        }
        try {
            screenRegion.find(filePath).right(50).type(text);
        } catch (FindFailed e) {
            return false;
        }
        return true;
    }

    @Override
    public boolean findImageTypeOnCentre(String filePath, String text) {
        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "findImageTypeOnCentre", text);
        }
        try {
            screenRegion.type(screenRegion.find(filePath).getCenter(), text);
        } catch (FindFailed e) {
            return false;
        }
        return true;
    }

    @Override
    public boolean findImageTypeToBottom(String filePath, String text) {
        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "findImageTypeToBottom", text);
        }
        try {
            screenRegion.find(filePath).below(50).type(text);
        } catch (FindFailed e) {
            return false;
        }
        return true;
    }

    @Override
    public boolean findImageClickToLeft(String filePath) {
        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "findImageClickToLeft");
        }
        try {
            screenRegion.find(filePath).left(10).click();
        } catch (FindFailed e) {
            return false;
        }
        return true;
    }

    @Override
    public boolean findImageClickToRight(String filePath) {
        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "findImageClickToRight");
        }
        try {
            screenRegion.find(filePath).right(10).click();
        } catch (FindFailed e) {
            return false;
        }
        return true;
    }

    @Override
    public boolean findImageTypeToLeft(String filePath, String text) {
        if (new File(filePath).listFiles() != null) {
            return searchDirectory(filePath, "findImageTypeToLeft", text);
        }

        try {
            screenRegion.find(filePath).left(50).type(text);
        } catch (FindFailed e) {
            return false;
        }
        return true;
    }

    @Override
    public boolean swipeBetweenImages(String startPointImagePath, String endPointImagePath) {

        try {
            screenRegion.dragDrop(startPointImagePath, endPointImagePath);
        } catch (FindFailed e) {
            return false;
        }
        return true;
    }

    // //////////////////////
    // JAVASCRIPT SUPPORT //
    // //////////////////////

    @Override
    public <T> T executeScript(String script, Object... args) {
        return scriptHandler.executeScript(driver, script, args);
    }

    @Override
    public <T> T executeScript(String script) {
        return scriptHandler.executeScript(driver, script);
    }

    @Override
    public <T> T executeScriptOnCurrentElement(String script) {
        return scriptHandler.executeScript(driver, script, currentElement);
    }

    @Override
    public <T> T executeAsyncScript(String script, Object... args) {
        return scriptHandler.executeScript(driver, script, args);
    }

    @Override
    public <T> T executeAsyncScript(String script) {
        return scriptHandler.executeScript(driver, script);
    }

    // //////////////////
    // TABLE HANDLERS //
    // //////////////////

    @Override
    public boolean buildTableByTag() {
        boolean tableBuilt = false;
        if (navigateToElementByTag(HTML_TABLE)) {
            buildTable();
            tableBuilt = true;
        }
        return tableBuilt;
    }

    @Override
    public boolean buildTableById(String id) {
        boolean tableBuilt = false;
        WebElement table = currentElement.findElement(By.id(id));
        if (table != null && table.getTagName().equals(HTML_TABLE)) {
            buildTable();
            tableBuilt = true;
        }
        return tableBuilt;
    }

    @Override
    public boolean buildTableByClassName(String className) {
        boolean tableBuilt = false;
        WebElement table = currentElement.findElement(By.className(className));
        if (table != null && table.getTagName().equals(HTML_TABLE)) {
            buildTable();
            tableBuilt = true;
        }
        return tableBuilt;
    }

    @Override
    public boolean navigateToTableElement(int row, int column) {
        boolean navigated = false;
        try {
            currentElement = tableArray.get(row).get(column);
            navigated = true;
        } catch (IndexOutOfBoundsException ioobe) {
            logger.error("navigateToTableElement : index out of bounds : row : " + row + " : column : " + column);
        }
        return navigated;
    }

    private boolean buildTable() {

        try {
            tableArray = new ArrayList<List<WebElement>>();
            List<WebElement> rows;
            rows = currentElement.findElements(By.tagName(HTML_TABLE_ROW));
            for (WebElement row : rows) {
                tableArray.add(row.findElements(By.tagName(HTML_TABLE_DATA)));
            }
        } catch (ElementNotFoundException enfe) {
            return false;
        }
        return true;
    }

    private boolean buildTokenList(String regexp) {

        boolean tokenised = false;
        if (!Strings.isNullOrEmpty(getText())) {
            tokenList = new ArrayList<String>();
            Pattern p = Pattern.compile(regexp);
            Matcher m = p.matcher(getText());
            while (m.find()) {
                tokenList.add(m.group());
            }
            if (tokenList.size() > 0) {
                tokenised = true;
                currentTokenIndex = 0;
            }
        }
        return tokenised;
    }

    private boolean elementWriteable() {
        boolean writeable = false;
        if (isOfTagType(HTML_INPUT) || isOfTagType(HTML_TEXTAREA) || isOfTagType(UIA_SECURETEXTFIELD) || isOfTagType(UIA_TEXTFIELD) || isOfTagType("android.widget.EditText")) {
            writeable = true;
        } else {
            logger.error("elementWriteable() : Cannot write to this element : " + currentElement.toString());
        }
        return writeable;
    }

    private WebElement probe(String criterea) {

        WebElement webElement = null;
        List<WebElement> elements = currentElement.findElements(new ByAll(By.id(criterea), By.className(criterea)));
        if (elements.isEmpty()) {
            logger.info("probe : No identifier or class found for critera : " + criterea);
        } else {
            webElement = elements.get(0);
        }
        return webElement;
    }

    // ///////////////////////////
    // TIMER / TIMEOUT METHODS //
    // ///////////////////////////

    @Override
    public boolean startTimeout(long millis) {

        return timeHandler.startTimeout(millis);

    }

    @Override
    public boolean stopTimeout(String transaction) {
        return timeHandler.stopTimeout(transaction);
    }

    @Override
    public boolean sleep(long millis) {
        return timeHandler.sleep(millis);

    }

    @Override
    public boolean storeListTextValue(int index) {
        try {
            storedListTextValue = elementList.get(index).getText();
        } catch (IndexOutOfBoundsException | NullPointerException e) {
            logger.debug("Could not get text from list element");
            return false;
        }
        return true;
    }

    @Override
    public String getStoredListTextValue() {
        return storedListTextValue.trim();
    }

    // /////////////////////////////////////////////////
    //
    // Managed Assertions for ASL
    //
    // /////////////////////////////////////////////////

    @Override
    public void assertTrue(boolean condition) {
        Assert.assertTrue(condition);
    }

    @Override
    public void assertTrue(String errorMessage, boolean condition) {
        // TODO Auto-generated method stub

    }

    @Override
    public void assertFalse(boolean condition) {
        Assert.assertFalse(condition);
    }

    @Override
    public void assertNull(Object object) {
        Assert.assertNull(object);
    }

    @Override
    public void assertNotNull(Object object) {
        Assert.assertNotNull(object);
    }

    @Override
    public void assertEquals(Object expected, Object actual) {
        Assert.assertEquals(expected, actual);
    }

    @Override
    public void assertEquals(float expected, float actual) {
        Assert.assertEquals(expected, actual, 0);
    }

    @Override
    public void assertEquals(double expected, double actual) {
        Assert.assertEquals(expected, actual, 0);
    }

    @Override
    public void assertEquals(long expected, long actual) {
        Assert.assertEquals(expected, actual);
    }

    // /////////////////////
    //
    // Test HTML page title
    //
    // /////////////////////

    @Override
    public boolean hasPartialPageTitle(String title) {
        if (driver.getTitle().contains(title)) {
            logger.debug(title + " partially found in the page title");
            return true;
        } else {
            logger.error(title + " not found in title: " + driver.getTitle());
            return false;
        }
    }

    @Override
    public boolean hasPrecisePageTitle(String title) {
        if (driver.getTitle().equals(title)) {
            logger.debug(title + " found in the page title");
            return true;
        } else {
            logger.error(title + " not found in title: " + driver.getTitle());
            return false;
        }
    }

    public boolean findImageUsingScrollDown(String imagePath, int iterations) {

        screenRegion.setAutoWaitTimeout(2.5);
        int i = 0;
        boolean imageFound = false;
        do {
            if (findImage(imagePath)) {
                imageFound = true;
                break;
            }
            screenRegion.type(Key.DOWN);
            screenRegion.type(Key.DOWN);
            screenRegion.type(Key.DOWN);
            i++;
        } while (i < iterations);
        screenRegion.setAutoWaitTimeout(30);
        if (!imageFound) {
            logger.error("Image not found via scrolling within timeout limit");
        }
        return imageFound;
    }

    @Override
    public boolean scrollToElementByText(String value) {
        currentElement = driver.findElement(By.xpath("//*[contains(text(), \"" + value + "\")]"));
        executeScript("arguments[0].scrollIntoView(true);", currentElement);
        return true;
    }

    @Override
    public boolean scrollToElementByExactText(String value) {
        currentElement = driver.findElement(By.xpath("//*[.=\"" + value + "\"]"));
        executeScript("arguments[0].scrollIntoView(true);", currentElement);
        return true;
    }

    @Override
    public boolean scrollToElementByCSS(String cssSelector) {
        currentElement = driver.findElement(By.cssSelector(cssSelector));
        executeScript("arguments[0].scrollIntoView(true);", currentElement);
        return true;
    }

    @Override
    public boolean scrollToElementById(String id) {
        currentElement = driver.findElement(By.id(id));
        executeScript("arguments[0].scrollIntoView(true);", currentElement);
        return true;
    }

    @Override
    public boolean scrollToElementByName(String name) {
        currentElement = driver.findElement(By.name(name));
        executeScript("arguments[0].scrollIntoView(true);", currentElement);
        return true;
    }

    @Override
    public boolean scrollToElementByClassName(String className) {
        currentElement = driver.findElement(By.className(className));
        executeScript("arguments[0].scrollIntoView(true);", currentElement);
        return true;
    }

    @Override
    public boolean scrollToElementByXpath(String xpath) {
        currentElement = driver.findElement(By.xpath(xpath));
        executeScript("arguments[0].scrollIntoView(true);", currentElement);
        return true;
    }

    @Override
    public boolean scrollToElementByAttribute(String attribute, String value) {
        currentElement = driver.findElement(By.xpath("//*[contains(@" + attribute + ", '" + value + "')]"));
        executeScript("arguments[0].scrollIntoView(true);", currentElement);
        return true;
    }

    @Override
    public boolean scrollToElementByTag(String tag, String value) {
        currentElement = driver.findElement(By.xpath("//*[contains(" + tag + ", '" + value + "')]"));
        executeScript("arguments[0].scrollIntoView(true);", currentElement);
        return true;
    }

    public boolean findImageUsingScrollUp(String imagePath, int iterations) {

        screenRegion.setAutoWaitTimeout(2.5);
        int i = 0;
        boolean imageFound = false;
        do {
            if (findImage(imagePath)) {
                imageFound = true;
                break;
            }
            screenRegion.type(Key.UP);
            screenRegion.type(Key.UP);
            screenRegion.type(Key.UP);
            i++;
        } while (i < iterations);
        screenRegion.setAutoWaitTimeout(30);
        if (!imageFound) {
            logger.error("Image not found via scrolling within timeout limit");
        }
        return imageFound;
    }

    @Override
    public boolean findImageUsingScrollRight(String imagePath, int iterations) {

        screenRegion.setAutoWaitTimeout(2.5);
        int i = 0;
        boolean imageFound = false;
        do {
            if (findImage(imagePath)) {
                imageFound = true;
                break;
            }
            screenRegion.type(Key.RIGHT);
            screenRegion.type(Key.RIGHT);
            screenRegion.type(Key.RIGHT);
            i++;
        } while (i < iterations);
        screenRegion.setAutoWaitTimeout(30);
        if (!imageFound) {
            logger.error("Image not found via scrolling within timeout limit");
        }
        return imageFound;
    }

    @Override
    public boolean navigateToHeadElement() {

        try {
            currentElement = driver.findElement(By.xpath("/html/head"));
        } catch (NoSuchElementException nsee) {
            logger.error("Unable to return to Root Element - Head");
        }
        return true;
    }

    @Override
    public boolean hasAttribute(String attributeName) {

        if (currentElement.getAttribute(attributeName) == null) {
            logger.error("Attribute: " + attributeName + " does not exist for current element - " + currentElement);
            return false;
        } else {
            return true;
        }

    }

    @Override
    public boolean hasAttributeValue(String attributeName, String attributeValue) {

        try {
            if (currentElement.getAttribute(attributeName).contains(attributeValue)) {
                return true;
            } else {
                logger.error("Attribute: " + attributeName + " does not contain - " + attributeValue
                        + " Actual attribute value is: " + currentElement.getAttribute(attributeName));
                return false;
            }

        } catch (NullPointerException e) {
            logger.error("Attribute: " + attributeName + " does not exist for current element - " + currentElement);
            return false;
        }

    }

    *//**
     * Take a screenshot of the current element and save it in the path passed
     * as parameter, e.g, "src/test/resources/images/image.png".
     *
     * @param imagePath Path to the expected image, e.g,
     *                  "src/test/resources/images/image.png"
     * @return true if the screenshot is took correctly
     *//*
    public boolean takeScreenshotOfCurrentElement(String imagePath) throws IOException {
        return takeScreenshotOfCurrentElement(imagePath, false);
    }

    *//**
     * Take a screenshot of the current element and save it in the path passed
     * as parameter, e.g, "src/test/resources/images/image.png".
     *
     * @param imagePath   Path to the expected image, e.g,
     *                    "src/test/resources/images/image.png"
     * @param saveCurrent A boolean to keep any previous screenshot under the same path
     *                    as "/PATH/TO/IMAGE/image.old.png"
     * @return true if the screenshot is took correctly
     *//*
    public boolean takeScreenshotOfCurrentElement(String imagePath, boolean saveCurrent) {
        Screenshot screenshot = new AShot().takeScreenshot(driver, currentElement);
        return saveScreenshot(screenshot, imagePath, saveCurrent);

    }

    *//**
     * Take a screenshot of the current list elements and save it in the path
     * passed as parameter, e.g, "src/test/resources/images/image.png".
     *
     * @param imagePath Path to the expected image, e.g,
     *                  "src/test/resources/images/image.png"
     * @return true if the screenshot is took correctly
     *//*
    public boolean takeScreenshotOfListElements(String imagePath) throws IOException {
        return takeScreenshotOfListElements(imagePath, false);
    }

    *//**
     * Take a screenshot of the current list elements and save it in the path
     * passed as parameter, e.g, "src/test/resources/images/image.png".
     *
     * @param imagePath   Path to the expected image, e.g,
     *                    "src/test/resources/images/image.png"
     * @param saveCurrent A boolean to keep any previous screenshot under the same path
     *                    as "/PATH/TO/IMAGE/image.old.png"
     * @return true if the screenshot is took correctly
     *//*
    public boolean takeScreenshotOfListElements(String imagePath, boolean saveCurrent) {
        Screenshot screenshot = new AShot().takeScreenshot(driver, elementList);
        return saveScreenshot(screenshot, imagePath, saveCurrent);

    }

    private boolean saveScreenshot(Screenshot screenshot, String imagePath, boolean saveCurrent) {
        try {
            File baseline = new File(imagePath);
            if (saveCurrent && baseline.exists()) {
                String currentImagePath = StringUtils.substringBeforeLast(imagePath, ".") + ".old.png";
                FileUtils.copyFile(baseline, new File(currentImagePath));
            }

            return ImageIO.write(screenshot.getImage(), "PNG", baseline);
        } catch (Exception e) {
            logger.error("There was a problem taking the screenshot: " + e.getMessage());
            return false;
        }

    }

    *//**
     * Validate a fresh screenshot of the current element against an expected
     * image.
     *
     * @param expectedImagePath Path to the expected image, e.g,
     *                          "src/test/resources/images/image.png"
     * @return true if both images are equal (size and content)
     * @link {@takeScreenshotOfCurrentElement()}
     *//*
    public boolean isCurrentElementEqualToImage(String expectedImagePath) {
        return isCurrentElementEqualToImage(expectedImagePath, 0);
    }

    *//**
     * Validate a fresh screenshot of the current element against an expected
     * image.
     *
     * @param expectedImagePath Path to the expected image, e.g,
     *                          "src/test/resources/images/image.png"
     * @param diffSizeTrigger   maximum number of different points between images to consider
     *                          them as equal.
     * @return true if diffSizeTrigger >= number of differences between both
     * images
     * @link {@takeScreenshotOfCurrentElement()}
     *//*
    public boolean isCurrentElementEqualToImage(String expectedImagePath, int diffSizeTrigger) {
        Screenshot screenshot = new AShot().takeScreenshot(driver, currentElement);
        return checkImageDiff(screenshot, expectedImagePath, diffSizeTrigger);

    }

    *//**
     * Validate a fresh screenshot of the current list elements against an
     * expected image.
     *
     * @param expectedImagePath Path to the expected image, e.g,
     *                          "src/test/resources/images/image.png"
     * @return true if both images are equal (size and content)
     * @link {@takeScreenshotOfCurrentElement()}
     *//*
    public boolean isListOfElementsEqualToImage(String expectedImagePath) {
        return isListOfElementsEqualToImage(expectedImagePath, 0);
    }

    *//**
     * Validate a fresh screenshot of the current list elements against an
     * expected image.
     *
     * @param expectedImagePath Path to the expected image, e.g,
     *                          "src/test/resources/images/image.png"
     * @param diffSizeTrigger   maximum number of different points between images to consider
     *                          them as equal.
     * @return true if diffSizeTrigger >= number of differences between both
     * images
     * @link {@takeScreenshotOfCurrentElement()}
     *//*
    public boolean isListOfElementsEqualToImage(String expectedImagePath, int diffSizeTrigger) {
        Screenshot screenshot = new AShot().takeScreenshot(driver, elementList);
        return checkImageDiff(screenshot, expectedImagePath, diffSizeTrigger);
    }

    private boolean checkImageDiff(Screenshot screenshot, String expectedImagePath, int diffSizeTrigger) {
        try {
            BufferedImage currentImage = screenshot.getImage();
            BufferedImage expectedImage = ImageIO.read(new File(expectedImagePath));
            ImageDiff diff = new ImageDiffer().makeDiff(expectedImage, currentImage);

            if (diff.getDiffSize() >= diffSizeTrigger) {
                // validation failed
                File directory = new File("target/diff_screenshots");
                if (!directory.exists())
                    directory.mkdir();

                String diffImagePath = directory + File.separator + "diff_"
                        + StringUtils.substringAfterLast(expectedImagePath, "/");
                logger.error("The current element doesn't match the expected image: " + diffImagePath);
                ImageIO.write(diff.getMarkedImage(), "PNG", new File(diffImagePath));

                // add diff image to the cucumber report
                Path path = Paths.get(diffImagePath);
                byte[] imageData = Files.readAllBytes(path);
                GenericUtilities.addScreenShot(imageData);

                return false;
            }

            return true;

        } catch (Exception e) {
            logger.error("There was a problem validating the images: " + e.getMessage());
            return false;
        }

    }

    *//**
     * @author Atanas Kanchev Inner class CreateBrowser. Handles Selenium
     *         WebDriver initialisation.
     *//*
    protected final class CreateBrowser {

        *//**
         * Default constructor Instantiates BrowserDriverInit instance
         *//*
        CreateBrowser() {
            browserDriverInit = new BrowserDriverInit();
        }

        *//**
         * Instantiates new WebDriver instance
         *//*
        private void setDriver() {

            if (browserDriverInit == null)
                browserDriverInit = new BrowserDriverInit();

            driver = browserDriverInit.initBrowser();
        }

        *//**
         * Set custom FirefoxProfile
         *
         * @param firefoxProfile FirefoxProfile
         * @return browserHandler BrowserHandler
         *//*
        public final CreateBrowser setFirefoxProfile(FirefoxProfile firefoxProfile) {
            browserDriverInit.getDesiredCapabilitiesFactory().setCustomFirefoxProfile(firefoxProfile);
            return createBrowser;
        }

        *//**
         * Set custom Selenium proxy
         *
         * @param seleniumProxy Proxy
         * @return browserHandler BrowserHandler
         *//*
        public final CreateBrowser setSeleniumProxy(Proxy seleniumProxy) {
            browserDriverInit.getDesiredCapabilitiesFactory().setCustomCapabilities(CapabilityType.PROXY,
                    seleniumProxy);
            return createBrowser;
        }

        *//**
         * Set custom ChromeOptions
         *
         * @param chromeOptions ChromeOptions
         * @return browserHandler BrowserHandler
         *//*
        public final CreateBrowser setChromeOptions(ChromeOptions chromeOptions) {
            browserDriverInit.getDesiredCapabilitiesFactory().setCustomChromeOptions(chromeOptions);
            return createBrowser;
        }

        public final CreateBrowser setChromeOptions(HashMap chromeOptions) {
            browserDriverInit.getDesiredCapabilitiesFactory().setCustomChromeOptions(chromeOptions);
            return createBrowser;
        }

        *//**
         * Set custom browser type
         *
         * @param browserType BrowserTypes
         * @return browserHandler BrowserHandler
         *//*
        public final CreateBrowser setBrowserType(BrowserTypes browserType) {
            browserDriverInit.getWebDriverProperties().setBrowserType(browserType);
            return createBrowser;
        }

        *//**
         * Set custom browser name
         *
         * @param name String
         * @return browserHandler BrowserHandler
         *//*
        public final CreateBrowser setBrowserName(String name) {
            browserDriverInit.getMultiThreadedDriverFactory().setBrowserSessionName(name);
            return createBrowser;
        }

        *//**
         * Set as Selenium Grid execution
         *
         * @return browserHandler BrowserHandler
         *//*
        public final CreateBrowser setGridExecution() {
            browserDriverInit.getRemoteWebDriverFactory().setGridExecution(true);
            return createBrowser;
        }

        *//**
         * Set custom Selenium Grid browser version
         *
         * @param version String
         * @return browserHandler BrowserHandler
         *//*
        public final CreateBrowser setGridBrowserVersion(String version) {
            browserDriverInit.getRemoteWebDriverFactory().setBrowserVersion(version);
            return createBrowser;
        }

        *//**
         * Set custom Selenium Grid Hub URL
         *
         * @param url String
         * @return browserHandler BrowserHandler
         *//*
        public final CreateBrowser setGridHubURL(String url) {
            browserDriverInit.getRemoteWebDriverFactory().setHubUrl(url);
            return createBrowser;
        }

        *//**
         * Set custom user agent
         *
         * @param userAgent String
         * @return browserHandler BrowserHandler
         *//*
        public final CreateBrowser setUserAgent(String userAgent) {
            browserDriverInit.getWebDriverProperties().setUserAgent(userAgent);
            return createBrowser;
        }

        *//**
         * Set custom DesiredCapabilities
         *
         * @param caps HashMap
         * @return browserHandler BrowserHandler
         *//*
        public final CreateBrowser setCustomCapability(HashMap<String, Object> caps) {
            browserDriverInit.getDesiredCapabilitiesFactory().setCustomCapabilities(caps);
            return createBrowser;
        }

        *//**
         * Set custom page load timeout
         *
         * @param timeout int
         * @return browserHandler BrowserHandler
         *//*
        public final CreateBrowser setPageLoadTimeout(int timeout) {
            browserDriverInit.getWebDriverProperties().setPageLoadTimeout(timeout);
            return createBrowser;
        }

        *//**
         * Set custom implicitly wait
         *
         * @param wait int
         * @return browserHandler BrowserHandler
         *//*
        public final CreateBrowser setImplicitlyWait(int wait) {
            browserDriverInit.getWebDriverProperties().setImplicitlyWait(wait);
            return createBrowser;
        }

    }

    *//**
     * Gives access to the CreateBrowser methods
     *
     * @param name String browser session name
     * @param type String browser type
     * @return CreateBrowser instance
     *//*
    protected final CreateBrowser createBrowser(final String name, final String type) {

        this.createBrowser = new CreateBrowser();

        if (name != null && !name.isEmpty())
            createBrowser.setBrowserName(name);

        if (type != null && !type.isEmpty())
            if (BrowserTypes.getBrowserEnum(type) != null)
                createBrowser.setBrowserType(BrowserTypes.getBrowserEnum(type));
            else
                throw new RuntimeException("Wrong browser type: " + type + ". WHGTF supported browser types are: "
                        + Arrays.toString(BrowserTypes.values()).toLowerCase());

        return createBrowser;
    }

    *//**
     * Gives access to the CreateBrowser methods
     *
     * @return CreateBrowser instance
     *//*
    protected final CreateBrowser createBrowser() {
        return this.createBrowser = new CreateBrowser();
    }

    *//**
     * @author Atanas Kanchev Inner class ManageBrowser. Manages existing
     *         Selenium WebDriver instance.
     *//*
    protected final class ManageBrowser {

        *//**
         * Default constructor
         *//*
        ManageBrowser() {

            if (browserDriverInit == null)
                throw new RuntimeException("No active browser instances");
        }

        *//**
         * Set custom browser dimensions
         *
         * @param width  int
         * @param height int
         *//*
        public final boolean setBrowserDimensions(int width, int height) {

            if (driver != null) {
                driver.manage().window().setSize(new Dimension(width, height));
                logger.debug("Setting browser dimensions to " + width + "x" + height);
                return true;
            } else {
                logger.error("Unable to set browser dimensions: WebDriver is not initialised");
                return false;
            }

        }

        public final boolean setBrowserMaximize() {

            if (driver != null) {
                driver.manage().window().maximize();
                logger.debug("Window maximized");
                return true;
            } else {
                logger.error("Unable to maximize browser: WebDriver is not initialised");
                return false;
            }

        }

        *//**
         * Switch to browser by name
         *
         * @param name String browser session name
         * @return boolean result
         *//*
        public final boolean switchBrowser(String name) {

            boolean hasSwitched = false;

            if (name != null && !name.isEmpty()) {
                driver = browserDriverInit.getMultiThreadedDriverFactory().getDriverByName(name);
                hasSwitched = true;
            }

            return hasSwitched;
        }

        *//**
         * Quit browser session by name
         *
         * @param name String browser session name
         * @return boolean result
         *//*
        public final boolean quitBrowserByName(String name) {
            return browserDriverInit.getMultiThreadedDriverFactory().quitDriverByName(name);
        }
    }

    *//**
     * Gives access to the ManageBrowser methods
     *
     * @return ManageBrowser instance
     *//*
    protected final ManageBrowser manageBrowser() {
        return new ManageBrowser();

    }

     Http Request Methods 
    @Override
    public boolean httpCreateRequest(String requestType, String url) {

        boolean validRequestType;
        switch (requestType.toLowerCase()) {
            case "get":
                getRequest = Unirest.get(url);
                validRequestType = true;
                break;
            case "post":
                request = Unirest.post(url);
                validRequestType = true;
                postBodyFields = new HashMap<>();
                break;
            case "put":
                request = Unirest.put(url);
                validRequestType = true;
                break;
            default:
                logger.error("Invalid request type, valid options are: get, post, put");
                validRequestType = false;
                break;
        }
        return validRequestType;
    }

    @Override
    public boolean httpSendRequest() {

        if (request == null && getRequest == null) {
            logger.error("Request has not been initialised, must call createHttpRequest first");
            return false;
        }
        try {
            if (request != null) {
                if (postBodyFields.size() > 0) {
                    request.fields(postBodyFields);
                }
                response = request.asString();
            } else {
                response = getRequest.asString();

            }
            getRequest = null;
            request = null;
            logger.debug(response.getBody().toString());
            listOfExtractedValues = new HashMap<>();
        } catch (UnirestException e) {
            logger.error(e.getMessage());
            getRequest = null;
            request = null;
            return false;
        }
        return true;
    }

    @Override
    public boolean httpAddHeader(String name, String value) {
        if (request == null && getRequest == null) {
            logger.error("Request has not been initialised, must call createHttpRequest first");
            return false;
        }
        if (request != null) {
            request.header(name, value);
        } else {
            getRequest.header(name, value);
        }
        return true;
    }

    @Override
    public boolean httpAddHeaders(HashMap<String, String> listOfHeaders) {
        if (request == null && getRequest == null) {
            logger.error("Request has not been initialised, must call createHttpRequest first");
            return false;
        }
        if (request != null) {
            request.headers(listOfHeaders);
        } else {
            getRequest.headers(listOfHeaders);
        }

        return true;
    }

    @Override
    public boolean httpAddQueryData(String name, String value) {
        if (request == null && getRequest == null) {
            logger.error("Request has not been initialised, must call createHttpRequest first");
            return false;
        }
        if (request != null) {
            request.queryString(name, value);
        } else {
            getRequest.queryString(name, value);
        }
        return true;
    }

    @Override
    public boolean httpAddQueryData(HashMap<String, Object> listOfQueryData) {
        if (request == null && getRequest == null) {
            logger.error("Request has not been initialised, must call createHttpRequest first");
            return false;
        }
        if (request != null) {
            request.queryString(listOfQueryData);
        } else {
            getRequest.queryString(listOfQueryData);
        }
        return true;
    }

    @Override
    public boolean httpAddPostBody(String body) {
        if (request == null) {
            logger.error("Request has not been initialised, must call createHttpRequest first");
            return false;
        }
        if (body.toLowerCase().equals("xml") && xmlBuilder != null) {
            assertTrue(xmlBuildString());
            request.body(xmlString);
        } else if (jsonObjects != null && jsonObjects.containsKey(body)) {
            request.body(jsonObjects.get(body).toString());
        } else {
            request.body(body);
        }
        return true;
    }

    @Override
    public boolean httpAddField(String name, String value) {
        if (request == null) {
            logger.error("Request has not been initialised, must call createHttpRequest first");
            return false;
        }
        if (listOfExtractedValues.containsKey(value)) {
            postBodyFields.put(name, listOfExtractedValues.get(value));
        } else {
            postBodyFields.put(name, value);
        }
        return true;
    }

    @Override
    public boolean httpAddField(String name, File file) {
        if (request == null) {
            logger.error("Request has not been initialised, must call createHttpRequest first");
            return false;
        }
        postBodyFields.put(name, file);
        return true;
    }

    @Override
    public boolean httpAddFields(HashMap<String, Object> listOfPostData) {
        if (request == null) {
            logger.error("Request has not been initialised, must call createHttpRequest first");
            return false;
        }
        postBodyFields.putAll(listOfExtractedValues);
        return true;
    }

    @Override
    public boolean httpSendRequestAndValidateResponseCode(int responseCode) {
        assertTrue(httpSendRequest());
        if (response.getStatus() != responseCode) {
            logger.error("Response code did not match, actual response code returned: " + response.getStatus());
            return false;
        }
        return true;
    }

    @Override
    public boolean httpSendRequestAndValidateResponseContainsText(String text) {

        assertTrue(httpSendRequest());
        if (!response.getBody().toString().contains(text)) {
            logger.error("Response text did not contain specified text, run in debug to output response");
            return false;
        }
        return true;
    }

    @Override
    public boolean httpExtractTextFromHttpResponse(String before, String after, String identifier) {
        if (response == null) {
            logger.error("Response doesn't exist, make sure you send a request first");
            return false;
        }
        String textAfterBefore = null;
        try {
            textAfterBefore = response.getBody().toString().split(Pattern.quote(before))[1];

        } catch (ArrayIndexOutOfBoundsException e) {
            logger.error("Before tag cannot be found in response");
            return false;
        }
        try {
            if (!textAfterBefore.contains(after)) {
                logger.error("After tag cannot be found in response");
                return false;

            }

            listOfExtractedValues.put(identifier, textAfterBefore.split(Pattern.quote(after))[0]);
            logger.debug("Extracted text: " + listOfExtractedValues.get(identifier));
            // Update the item as a system Property so can be used with getProperty
            System.setProperty(identifier, textAfterBefore.split(Pattern.quote(after))[0]);

        } catch (ArrayIndexOutOfBoundsException e) {
            logger.error("Unable to extract text");
            return false;
        }

        return true;
    }

    @Override
    public boolean httpResponseContainsText(String... text) {

        if (response == null) {
            logger.error("Response doesn't exist, make sure you send a request first");
            return false;
        }
        for (String string : text) {
            if (!response.getBody().toString().contains(string)) {
                logger.error("Response text did not contain specified text, run in debug to output response");
                return false;
            }
        }

        return true;
    }

    @Override
    public boolean httpUseProxy(String host, int port) {
        Unirest.setProxy(new HttpHost(host, port));
        return true;
    }

    @Override
    public boolean xmlCreateBody(String parentElement) {

        try {
            xmlBuilder = XMLBuilder.create(parentElement);
        } catch (ParserConfigurationException | FactoryConfigurationError e) {
            logger.error(e.getMessage());
            return false;
        }
        return true;
    }

    @Override
    public boolean xmlCreateBody(String parentElement, String... attributes) {
        assertTrue(xmlCreateBody(parentElement));
        for (String attribute : attributes) {
            assertTrue(xmlAddAttribute(parentElement, attribute));
        }
        return true;
    }

    @Override
    public boolean xmlAddElement(String parentElement, String elementName) {

        if (xmlBuilder == null) {
            logger.error("Xml Builder not created yet, call createXmlBody first");
            return false;
        }
        assertTrue(xmlGoToElement(parentElement));
        if (listOfExtractedValues != null) {
            if (listOfExtractedValues.containsKey(elementName)) {
                xmlBuilder = xmlBuilder.element(listOfExtractedValues.get(elementName));
            }
        } else {
            xmlBuilder = xmlBuilder.element(elementName);
        }
        try {
            logger.debug("Current Element: " + xmlBuilder.elementAsString());
        } catch (TransformerException e) {

        }
        return true;
    }

    @Override
    public boolean xmlAddElement(String parentElement, String elementName, String text) {
        assertTrue(xmlAddElement(parentElement, elementName));
        if (text.contains("=")) {
            assertTrue(xmlAddAttribute(elementName, text));
        } else {
            assertTrue(xmlAddText(elementName, text));
        }
        return true;
    }

    @Override
    public boolean xmlAddElement(String parentElement, String elementName, String... attributes) {
        assertTrue(xmlAddElement(parentElement, elementName));
        for (String attribute : attributes) {
            assertTrue(xmlAddAttribute(elementName, attribute));
        }
        return true;
    }

    @Override
    public boolean xmlAddAttribute(String elementName, String attribute) {
        try {
            if (xmlBuilder == null) {
                logger.error("Xml Builder not created yet, call createXmlBody first");
                return false;
            }
            assertTrue(xmlGoToElement(elementName));
            String attributeName = attribute.split("=")[0];
            String attributeValue = attribute.split("=")[1];

            if (listOfExtractedValues != null) {
                if (listOfExtractedValues.containsKey(attributeName)) {
                    xmlBuilder = xmlBuilder.attribute(listOfExtractedValues.get(attributeName), attributeValue);
                } else if (listOfExtractedValues.containsKey(attributeValue)) {
                    xmlBuilder = xmlBuilder.attribute(attributeName, listOfExtractedValues.get(attributeValue));
                }
            } else {
                xmlBuilder = xmlBuilder.attribute(attributeName, attributeValue);
            }
            logger.debug("Current Element: " + xmlBuilder.elementAsString());
        } catch (TransformerException e) {

        } catch (ArrayIndexOutOfBoundsException e) {
            logger.error("Attributes are entered incorrectly, each key/pair should be separated with '='");
            return false;
        }
        return true;
    }

    @Override
    public boolean xmlAddText(String elementName, String value) {
        if (xmlBuilder == null) {
            logger.error("Xml Builder not created yet, call createXmlBody first");
            return false;
        }
        assertTrue(xmlGoToElement(elementName));
        if (listOfExtractedValues != null) {
            if (listOfExtractedValues.containsKey(value)) {
                xmlBuilder = xmlBuilder.text(listOfExtractedValues.get(value));
            }
        } else {
            xmlBuilder = xmlBuilder.text(value);
        }

        try {
            logger.debug("Current Element: " + xmlBuilder.elementAsString());
        } catch (TransformerException e) {

        }
        return true;
    }

    @Override
    public boolean xmlGoToElement(String element) {

        if (xmlBuilder == null) {
            logger.error("Xml Builder not created yet, call createXmlBody first");
            return false;
        }
        try {
            xmlBuilder = xmlBuilder.xpathFind("//" + element);
            logger.debug("Current Element: " + xmlBuilder.elementAsString());
        } catch (TransformerException e) {
        } catch (XPathExpressionException e) {
            logger.error("Unable to find element: " + element);
            return false;
        }
        return true;
    }

    @Override
    public boolean xmlBuildString() {

        if (xmlBuilder == null) {
            logger.error("Xml Builder not created yet, call createXmlBody first");
            return false;
        }
        try {
            xmlString = xmlBuilder.asString();
            logger.debug(xmlString);
        } catch (TransformerException e) {
            logger.error(e.getMessage());
            return false;
        }

        return true;
    }

    @Override
    public boolean jsonCreateObject(String identifier, String... arguments) {
        try {

            if (jsonObjects == null) {
                jsonObjects = new HashMap<>();
            }
            JSONObject tmpJsonObject = new JSONObject();
            for (String string : arguments) {
                String keyName = string.split("=")[0];
                String keyValue;
                if (string.split("=").length > 1) {
                    keyValue = string.split("=")[1];
                } else {
                    keyValue = "";
                }
                if (jsonArrays != null && jsonArrays.containsKey(keyValue)) {
                    tmpJsonObject.put(keyName, jsonArrays.get(keyValue));
                } else if (jsonObjects.containsKey(keyValue)) {
                    tmpJsonObject.put(keyName, jsonObjects.get(keyValue));
                } else if (listOfExtractedValues != null && listOfExtractedValues.containsKey(keyValue)) {
                    tmpJsonObject.put(keyName, listOfExtractedValues.get(keyValue));
                } else {
                    tmpJsonObject.put(keyName, keyValue);
                }
            }
            jsonObjects.put(identifier, tmpJsonObject);
            logger.debug("Current Object: " + tmpJsonObject.toString());
        } catch (ArrayIndexOutOfBoundsException e) {
            logger.error("Arguments must be key pair values written as key=value");
            return false;
        }
        return true;
    }

    @Override
    public boolean jsonCreateArray(String identifier, String... arguments) {
        try {
            if (jsonArrays == null) {
                jsonArrays = new HashMap<>();
            }
            JSONArray tmpJsonArray = new JSONArray();
            JSONObject tmpJsonObject = new JSONObject();
            for (String string : arguments) {
                String keyName = string.split("=")[0];
                String keyValue;
                if (string.split("=").length > 1) {
                    keyValue = string.split("=")[1];
                } else {
                    keyValue = "";
                }

                if (jsonArrays.containsKey(keyValue)) {
                    tmpJsonObject.put(keyName, jsonArrays.get(keyValue));
                } else if (jsonObjects != null && jsonObjects.containsKey(keyValue)) {
                    tmpJsonObject.put(keyName, jsonObjects.get(keyValue));
                } else if (listOfExtractedValues != null && listOfExtractedValues.containsKey(keyValue)) {
                    tmpJsonObject.put(keyName, listOfExtractedValues.get(keyValue));
                } else {
                    tmpJsonObject.put(keyName, keyValue);
                }
            }
            tmpJsonArray.put(tmpJsonObject);
            jsonArrays.put(identifier, tmpJsonArray);
            logger.debug("Current Array: " + tmpJsonArray.toString());
        } catch (ArrayIndexOutOfBoundsException e) {
            logger.error("Arguments must be key pair values written as key=value");
            return false;
        }
        return true;
    }

    @Override
    public boolean jsonAddToArray(String identifier, String... arguments) {
        try {
            if (jsonArrays == null || !jsonArrays.containsKey(identifier)) {
                logger.error("The specified json array doesn't exist , call jsonCreateArray first");
                return false;
            } else {
                JSONArray tmpJsonArray = jsonArrays.get(identifier);
                JSONObject tmpJsonObject = new JSONObject();
                for (String string : arguments) {
                    String keyName = string.split("=")[0];
                    String keyValue;
                    if (string.split("=").length > 1) {
                        keyValue = string.split("=")[1];
                    } else {
                        keyValue = "";
                    }
                    if (jsonArrays.containsKey(keyValue)) {
                        tmpJsonObject.put(keyName, jsonArrays.get(keyValue));
                    } else if (jsonObjects != null && jsonObjects.containsKey(keyValue)) {
                        tmpJsonObject.put(keyName, jsonObjects.get(keyValue));
                    } else if (listOfExtractedValues != null && listOfExtractedValues.containsKey(keyValue)) {
                        tmpJsonObject.put(keyName, listOfExtractedValues.get(keyValue));
                    } else {
                        tmpJsonObject.put(keyName, keyValue);
                    }
                }
                tmpJsonArray.put(tmpJsonObject);
                jsonArrays.put(identifier, tmpJsonArray);
                logger.debug("Current Array: " + tmpJsonArray.toString());
            }

        } catch (ArrayIndexOutOfBoundsException e) {
            logger.error("Arguments must be key pair values written as key=value");
        }
        return true;
    }

    @Override
    public boolean setCookie(String cookieName, String cookieValue) {

        try {
            driver.manage().addCookie(new Cookie(cookieName, cookieValue));
        } catch (NullPointerException e) {
            logger.error("Driver has not been initialised, initialise driver before calling this method");
            return false;
        }
        return true;

    }

    @Override
    public boolean clearCookies() {
        try {
            driver.manage().deleteAllCookies();
        } catch (NullPointerException e) {
            logger.error("No driver exists, no cookies to clear");
            return false;
        }
        return true;
    }

    @Override
    public boolean clearCookie(String cookieName) {

        try {
            driver.manage().deleteCookieNamed(cookieName);
        } catch (NullPointerException e) {
            logger.error("No driver exists, no cookies to clear");
            return false;
        }
        return true;
    }

    *//**
     * Created by Alexis Giovoglanian on 18/06/2015.
     *//*
    private class DeviceMethods {
        private Logger logger = LogManager.getLogger(DeviceMethods.class);

        // Current element pointer
        private WebElement currentElement = null;
        // Global saved element pointer - see saveCurrentElementPosition()
        private WebElement elementStore = null;
        // Internal web element list - see getListByTag() getListByClass() ...
        private List<WebElement> elementList;
        // Device Context
        private String currentContext = null;
        // WebDriver
        AppiumDriver driver;

        // Appium Methods
        private String getCurrentContext(AppiumDriver driver) {
            currentContext = driver.getContext();
            logger.debug("Context: " + currentContext);
            return currentContext;
        }

        private boolean switchToContextNativeApp(AppiumDriver driver) {
            try {
                driver.context("NATIVE_APP");
                this.logger.info("Switched to context: " + "NATIVE_APP");
                return true;
            } catch (NoSuchContextException var2) {
                this.logger.error("Wrong context: " + "NATIVE_APP");
                return false;
            }
        }

        private boolean switchToContext(AppiumDriver driver, String context) {
            try {
                driver.context(context);
                this.logger.info("Switched to context: " + context);
                return true;
            } catch (NoSuchContextException var2) {
                this.logger.error("Wrong context: " + context);
                return false;
            }
        }

        private boolean tapAndroid(AppiumDriver driver, WebElement el) {

            TouchAction action = new TouchAction(driver);
            try {
                if (mobileBrowser) {
                    String javascriptToExecute = "var e = document.createEvent('TouchEvent'); e.initUIEvent('touchstart',true,true); e.initUIEvent('touchend',true,true); arguments[0].dispatchEvent(e);";
                    executeScript(javascriptToExecute, el);

                } else {
                    action.tap(el).perform();
                }
                return true;
            } catch (UnsupportedCommandException var2) {
                this.logger.error("Tap Action not supported for this element");
                return false;
            }
        }

        private boolean tapAndroid(ChromeDriver driver, WebElement el) {

            try {
                String javascriptToExecute = "var e = document.createEvent('TouchEvent'); e.initUIEvent('touchstart',true,true); e.initUIEvent('touchend',true,true); arguments[0].dispatchEvent(e);";
                executeScript(javascriptToExecute, el);
                return true;
            } catch (UnsupportedCommandException var2) {
                this.logger.error("Tap Action not supported for this element");
                return false;
            }
        }

        private boolean tapAndroid(RemoteWebDriver driver, WebElement el) {

            try {
                String javascriptToExecute = "var e = document.createEvent('TouchEvent'); e.initUIEvent('touchstart',true,true); e.initUIEvent('touchend',true,true); arguments[0].dispatchEvent(e);";
                executeScript(javascriptToExecute, el);
                return true;
            } catch (UnsupportedCommandException var2) {
                this.logger.error("Tap Action not supported for this element");
                return false;
            }
        }

        private boolean longPressAndroid(AppiumDriver driver, WebElement el) {

            try {
                if (mobileBrowser) {
                    String javascriptToExecute = "var e = document.createEvent('TouchEvent'); e.initUIEvent('touchstart',true,true);arguments[0].dispatchEvent(e);";
                    executeScript(javascriptToExecute, el);
                } else {

                    TouchAction action = new TouchAction(driver);
                    action.longPress(el).perform();
                }
                return true;
            } catch (UnsupportedCommandException var2) {
                this.logger.error("Tap Action not supported for this element");
                return false;
            }
        }

        private boolean longPressAndroid(ChromeDriver driver, WebElement el) {

            try {
                String javascriptToExecute = "var e = document.createEvent('TouchEvent'); e.initUIEvent('touchstart',true,true);arguments[0].dispatchEvent(e);";
                executeScript(javascriptToExecute, el);
                return true;
            } catch (UnsupportedCommandException var2) {
                this.logger.error("Tap Action not supported for this element");
                return false;
            }
        }

        private boolean longPressAndroid(RemoteWebDriver driver, WebElement el) {

            try {
                String javascriptToExecute = "var e = document.createEvent('TouchEvent'); e.initUIEvent('touchstart',true,true);arguments[0].dispatchEvent(e);";
                executeScript(javascriptToExecute, el);
                return true;
            } catch (UnsupportedCommandException var2) {
                this.logger.error("Tap Action not supported for this element");
                return false;
            }
        }

        private boolean scrollToElementByText(AppiumDriver driver, String value) {
            currentContext = getCurrentContext(driver);
            if (!currentContext.equals("NATIVE_APP")) {
                assertTrue(switchToContextNativeApp(driver));
            }
            try {
                driver.scrollTo(value);
                assertTrue(switchToContext(driver, currentContext));
                return true;
            } catch (Exception var2) {
                this.logger.error("Not possible to Scroll to element by text: " + value);
                assertTrue(switchToContext(driver, currentContext));
                return false;
            }
        }

        // Capture an image in the Appium Driver, compare that image using
        // sikuli to get X and Y coordinates, and use them
        // With the Tap() function on the Appium Driver.

        
         * This function captures takes a screenshot of the Appium Driver
		 
        private Screen appiumScreen = null;
        private File appiumSikuliImageFile = null;
        private File appiumScreenShot = null;
        private String appiumImageFolder = System.getProperty("user.dir");
        private String appiumSikuliScreenshot = "/appiumSikuliScreenshot";
        private Finder finder;
        private Match match;
        private int x;
        private int y;
        private int appiumImageWaitTime = 30;
        private boolean waitForImage;

        private boolean captureImageAppium(AppiumDriver driver, String imageName) {
            driver = (AppiumDriver) new Augmenter().augment(driver);
            // Get the screenshot
            appiumSikuliImageFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            logger.debug("Appium Screenshot Completed");
            try {
                if (waitForImage) {
                    appiumScreenShot = new File(appiumImageFolder + "/" + imageName + ".png");
                } else {
                    appiumScreenShot = createAppiumFile(imageName);
                }
                // Copy the file to screenshot folder
                FileUtils.copyFile(appiumSikuliImageFile, appiumScreenShot);
                if (driver.getOrientation().toString().contains("LANDSCAPE")) {
                    rotateScreenshotToLandscape();
                }
                return true;

            } catch (IOException e) {
                e.printStackTrace();
                logger.error("Take Appium Driver screenshot failed");
                return false;
            }
        }

        private File createAppiumFile(String imageName) {
            String screenshotsDir = System.getProperty("screenshotDirectory");
            String screenshotFileName = new StringBuilder().append(GenericUtilities.counter).append(".").append(imageName).append("-")
                    .append(GenericUtilities.CURRENT_DATE).append("_").append(GenericUtilities.CURRENT_TIME).toString();

            File outputFolder = null;

            if (!GraphicsEnvironment.isHeadless()) {

                if (GenericUtilities.isJenkinsExecution() || screenshotsDir == null) {
                    screenshotsDir = "src/test/resources/screenshots/mobile/";
                }

                String environment = System.getProperty("env");

                String folderString = (environment == null)
                        ? screenshotsDir + GenericUtilities.CURRENT_DATE + "/ " + imageName.replaceAll("[^a-zA-Z0-9.-]", "")
                        : screenshotsDir + GenericUtilities.CURRENT_DATE + "com.williamhill.whgtf"
                        + imageName.replaceAll("[^a-zA-Z0-9.-]", "") + "/" + environment + "/" + GenericUtilities.CURRENT_TIME;
                try {

                    outputFolder = new File(folderString);
                    if (!outputFolder.exists()) {
                        outputFolder.mkdirs();
                    }
                } catch (Exception e1) {
                    logger.error("Unable to create outputFolder!");
                }
                appiumImageFolder = folderString;
                appiumSikuliScreenshot = "/" + screenshotFileName + ".png";
            }

            return new File(outputFolder + "/" + screenshotFileName + ".png");
        }


        private void rotateScreenshotToLandscape() {
            try {
                BufferedImage bufferedImage = (BufferedImage) ImageIO
                        .read(appiumScreenShot);
                // Rotate the image to landscape
                AffineTransform tx = new AffineTransform();
                tx.translate(bufferedImage.getHeight() / 2, bufferedImage.getWidth() / 2);
                tx.rotate(Math.toRadians(90));
                tx.translate(-bufferedImage.getWidth() / 2, -bufferedImage.getHeight() / 2);
                sleep(500);

                AffineTransformOp op = new AffineTransformOp(tx, AffineTransformOp.TYPE_NEAREST_NEIGHBOR);
                sleep(500);
                bufferedImage = op.filter(bufferedImage, null);
                sleep(500);
                File outputfile = appiumScreenShot;
                ImageIO.write(bufferedImage, "png", outputfile);
                wait(1000);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        private boolean findImageAppium(AppiumDriver driver, String imagePath) {
            captureImageAppium(driver, appiumSikuliScreenshot);
            Image.reset();
            Image image = Image.create(appiumImageFolder + appiumSikuliScreenshot);
            logger.debug("Sikuli Image Similarity: " + image.getSimilarity());
            this.finder = new Finder(image);
            this.finder.find(imagePath);
            this.match = null;
            if (this.finder.hasNext()) {
                this.match = this.finder.next();
                return true;
            } else {
                return false;
            }

        }

        private boolean setImageAsScreen(AppiumDriver driver, String imagePath) {
            boolean found = findImageAppium(driver, imagePath);
            if (this.match == null) {
                logger.error("Sub Image: '" + imagePath
                        + "' does not exist on the Appium Driver Screen. Be sure of capturing the sub image on a 100% resolution");
            }
            return found;
        }

        private boolean getCoordinatesAppium(AppiumDriver driver, String imagePath) {
            try {

                setImageAsScreen(driver, imagePath);
                this.x = this.match.getX();
                this.y = this.match.getY();
                boolean validCoordinates = (this.x >= 0 && this.y >= 0);
                logger.debug("X: " + x);
                logger.debug("Y: " + y);

                return validCoordinates;
            } catch (NullPointerException e) {
                return false;
            }
        }

        
         * Captures a Screenshot on the Appium Driver (Real Device or Emulator)
		 * Compares with a given sub image and takes the Coordinates X,Y using
		 * Sikuli Taps on coordinates X,Y on the Appium Driver
		 
        private boolean tapImageAppium(AppiumDriver driver, String imagePath) {
            String context = driver.getContext();
            switchToContextNativeApp(driver);
            boolean coordinates = getCoordinatesAppium(driver, imagePath);
            if (coordinates) {
                logger.debug("Tapping on Coordinates X,Y: " + this.x + "," + this.y);
                driver.tap(1, this.x, this.y, 100);
                switchToContext(driver, context);
                return true;
            } else {
                logger.error("Coordinates are not valid");
                return false;
            }
        }

        private boolean tapOnCoordinatesAppium(AppiumDriver driver, int x, int y) {
            String context = driver.getContext();
            switchToContextNativeApp(driver);
            logger.debug("Tapping on Coordinates X,Y: " + x + "," + y);
            driver.tap(1, x, y, 100);
            switchToContext(driver, context);
            return true;
        }


        
         * This method can be used to control the Wait Time for a particular
		 * Scenario If this is not used, default Wait Time will be used (Ex: int
		 * appiumImageWaitTime = 30)
		 
        private boolean setAppiumImageWaitTime(int time) {
            if (time > 0) {
                this.appiumImageWaitTime = time;
                logger.debug("Appium Image Wait Time changed to: " + this.appiumImageWaitTime);
                return true;
            } else {
                logger.error("Appium Image Wait Time needs to be positive");
                logger.debug("Using default wait time: " + this.appiumImageWaitTime);
                return false;
            }
        }

        private boolean wait(int time) {
            try {
                Thread.sleep(time);
                return true;
            } catch (InterruptedException e) {
                e.printStackTrace();
                return false;
            }
        }

        private boolean waitForImageAppium(AppiumDriver driver, String imagePath) {
            int waitTime = 0;
            boolean found = false;
            String context = driver.getContext();
            switchToContextNativeApp(driver);
            waitForImage = true;
            while (waitTime < appiumImageWaitTime && !found) {
                if (findImageAppium(driver, imagePath)) {
                    found = true;
                    logger.debug("Image found: " + imagePath);
                    break;
                } else {
                    wait(1000);
                    waitTime++;
                }
            }
            switchToContext(driver, context);
            waitForImage = false;
            return found;
        }

        private boolean waitForImageAndStoreCoordinatesAppium(AppiumDriver driver, String imagePath) {
            int waitTime = 0;
            boolean found = false;
            String context = driver.getContext();
            switchToContextNativeApp(driver);
            waitForImage = true;
            while (waitTime < appiumImageWaitTime && !found) {
                if (getCoordinatesAppium(driver, imagePath)) {
                    found = true;
                    logger.debug("Image found: " + imagePath);
                    logger.debug("Storing coordinates - X: " + this.x);
                    logger.debug("Storing coordinates - Y: " + this.y);
                    break;
                } else {
                    wait(1000);
                    waitTime++;
                }
            }
            switchToContext(driver, context);
            waitForImage = false;
            return found;
        }

        private boolean tapOnStoredCoordinatesAppium(AppiumDriver driver) {
            String context = driver.getContext();
            switchToContextNativeApp(driver);
            try {
                logger.debug("Tapping on Coordinates X,Y: " + this.x + "," + this.y);
                driver.tap(1, this.x, this.y, 100);
                switchToContext(driver, context);
                return true;
            } catch (NullPointerException e) {
                logger.error("Coordinates are not valid");
                return false;
            }
        }

        private boolean typeInImageAppium(AppiumDriver driver, String imagePath, String text) {
            String context = driver.getContext();
            switchToContextNativeApp(driver);
            boolean validCoordinates = getCoordinatesAppium(driver, imagePath);
            logger.debug("Tapping on Coordinates X,Y: " + this.x + "," + this.y);
            driver.tap(1, this.x, this.y, 100);
            Actions actions = new Actions(driver);
            actions.sendKeys(new CharSequence[]{text});
            switchToContext(driver, context);
            return validCoordinates;
        }

        
		 * This method will only work for Web Apps at the moment !!! WORK IN
		 * PROGRESS !!!
		 
        private boolean scrollToImageAppium(AppiumDriver driver, String imagePath) {
            boolean found = false;
            int originalScrollPosition = 0;
            int scrollPositionWeb = getScrollPositionAppium(driver);
            String context = driver.getContext();
            switchToContextNativeApp(driver);
            int nativeX = getDimensionsAppium(driver).getWidth();
            int nativeY = getDimensionsAppium(driver).getHeight();
            logger.debug("Native X,Y:" + nativeX + "," + nativeY);
            switchToContext(driver, context);
            while (!found && scrollPositionWeb != originalScrollPosition) {
                if (findImageAppium(driver, imagePath)) {
                    found = true;
                    logger.debug("Image found: " + imagePath);
                    break;
                } else {
                    originalScrollPosition = getScrollPositionAppium(driver);
                    switchToContextNativeApp(driver);
                    driver.swipe(nativeX / 2, Math.round(nativeY / 1.25f), nativeX / 2, Math.round(nativeY / 2.5f),
                            500);
                    switchToContext(driver, context);
                    scrollPositionWeb = getScrollPositionAppium(driver);
                    logger.debug("Scroll Position: " + scrollPositionWeb);
                    wait(3000);

                }
            }
            return found;
        }

        private int getScrollPositionAppium(AppiumDriver driver) {
            return Integer.parseInt(driver.findElement(By.xpath("/html/body")).getAttribute("scrollTop"));
        }

        private int getPageHeightAppium(AppiumDriver driver) {
            return Integer.parseInt(driver.findElement(By.xpath("/html")).getAttribute("clientHeight"));
        }

        private Dimension getDimensionsAppium(AppiumDriver driver) {
            logger.debug("Position Y: " + driver.manage().window().getPosition().getY());
            logger.debug("Size: " + driver.manage().window().getSize());
            return driver.manage().window().getSize();
        }

        
		 * This method only works on Native Context, use the
		 * switchToContextNativeApp() method first
		 
        private boolean rotateDeviceLandscape(AppiumDriver driver) {
            currentContext = getCurrentContext(driver);
            if (!currentContext.equals("NATIVE_APP")) {
                assertTrue(switchToContextNativeApp(driver));
            }
            driver.rotate(ScreenOrientation.LANDSCAPE);
            if (screenOrientation(driver) == ScreenOrientation.LANDSCAPE) {
                logger.debug("Screen Orientation switched to Landscape");
                assertTrue(switchToContext(driver, currentContext));
                return true;
            } else {
                logger.debug("Couldn't switch the Screen Orientation to Landscape");
                assertTrue(switchToContext(driver, currentContext));
                return false;
            }
        }

        
		 * This method only works on Native Context, use the
		 * switchToContextNativeApp() method first
		 
        private boolean rotateDevicePortrait(AppiumDriver driver) {
            currentContext = getCurrentContext(driver);
            if (!currentContext.equals("NATIVE_APP")) {
                assertTrue(switchToContextNativeApp(driver));
            }
            driver.rotate(ScreenOrientation.PORTRAIT);
            if (screenOrientation(driver) == ScreenOrientation.PORTRAIT) {
                logger.debug("Screen Orientation switched to Portrait");
                assertTrue(switchToContext(driver, currentContext));
                return true;
            } else {
                logger.debug("Couldn't switch the Screen Orientation to Portrait");
                assertTrue(switchToContext(driver, currentContext));
                return false;
            }
        }

        
		 * This method only works on Native Context, use the
		 * switchToContextNativeApp() method first
		 
        private ScreenOrientation screenOrientation(AppiumDriver driver) {
            return driver.getOrientation();
        }

        private boolean installAppAppium(String appPath) {
            driver.installApp(appPath);
            if (driver.isAppInstalled(appPath)) {
                logger.debug("App installed");
                return true;
            } else {
                logger.debug("App was not installed");
                return false;
            }
        }

        private void swipeAndroid(AppiumDriver driver, int startX, int startY, int endX, int endY, int duration) {
            assertTrue(deviceStoreCurrentContext("currentContext"));
            assertTrue(deviceSwitchToContextNativeApp());
            driver.swipe(startX, startY, endX, endY, duration);
            assertTrue(deviceSwitchToContext("currentContext"));
        }

        private int getDeviceHeightAndroid(AppiumDriver driver) {
            return driver.manage().window().getSize().getHeight();
        }

        private int getDeviceWidthAndroid(AppiumDriver driver) {
            return driver.manage().window().getSize().getWidth();
        }

    }

    ////////////////////////////////////////
    // Appium Implementation and Methods //
    ///////////////////////////////////////

	
	 * These methods are missing in the ASL, but will work for Appium and
	 * Webdriver as well.
	 

    public boolean waitForInvisibilityOfElementByID(String id) {
        boolean found = true;
        try {
            (new WebDriverWait(driver, explicitWaitTime)).until(ExpectedConditions.invisibilityOfElementLocated(By.id(id)));
        } catch (Exception var4) {
            this.logger.error("waitForInvisibilityOfElementByID : Element Still Visable: " + id);
            found = false;
        }

        return found;
    }

    public boolean navigateToActiveFrame() {
        try {
            driver.switchTo().activeElement();
            this.logger.debug("Switched to Active Frame");
            return true;
        } catch (NoSuchFrameException var2) {
            this.logger.error("Unable to Switch Frame - No Such Frame");
            return false;
        }
    }

    public boolean navigateToHTMLRoot() {
        try {
            this.currentElement = driver.findElement(By.tagName("html"));
            return true;
        } catch (NoSuchElementException var2) {
            this.logger.error("HTML Element does not exist or is not reachable");
            return false;
        }
    }

    public boolean waitForElementByID(String elementId) {
        int counter = 0;
        int isEnabled = 0;
        int isHidden = 0;
        try {
            while (!(driver.findElement(By.id(elementId)).isEnabled())) {
                if (isEnabled <= 10) {
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    isEnabled++;
                }
            }
            while ((driver.findElement(By.id(elementId)).getAttribute("hidden")) == "true") {
                if (isHidden <= 10) {
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    isHidden++;
                }
            }
            return true;
        } catch (NoSuchElementException var2) {
            this.logger.error("Element not found");
            return false;
        }
    }

    public boolean verifyElementExistsById(String id) {
        if (driver.findElements(By.id(id)).size() > 0) {
            this.logger.debug("Element with id: '" + id + "' exists");
            return true;
        } else {
            this.logger.debug("Element with id: '" + id + "' does not exist");
            return false;
        }
    }

    public boolean verifyElementExistsByClassName(String className) {
        if (driver.findElements(By.className(className)).size() > 0) {
            this.logger.debug("Element with id: '" + className + "' exists");
            return true;
        } else {
            this.logger.debug("Element with id: '" + className + "' does not exist");
            return false;
        }
    }

    @Override
    public boolean waitForVisibilityOfElementByXPath(String xpath) {
        boolean found = true;
        try {
            (new WebDriverWait(driver, explicitWaitTime))
                    .until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xpath)));
        } catch (Exception var4) {
            this.logger.error("waitForVisibilityOfElementByClass : Element Not Found: " + xpath);
            found = false;
        }
        return found;
    }

    @Override
    public boolean waitForElementToBeClickableById(String id) {
        boolean found = true;
        try {
            (new WebDriverWait(driver, explicitWaitTime)).until(ExpectedConditions.elementToBeClickable(By.id(id)));
        } catch (Exception var4) {
            this.logger.error("waitForElementToBeClickableById : Element Not Found: " + id);
            found = false;
        }

        return found;
    }

    @Override
    public boolean waitForElementToBeClickableByClassName(String className) {
        boolean found = true;
        try {
            (new WebDriverWait(driver, explicitWaitTime))
                    .until(ExpectedConditions.elementToBeClickable(By.className(className)));
        } catch (Exception var4) {
            this.logger.error("waitForElementToBeClickableByClassName : Element Not Found: " + className);
            found = false;
        }

        return found;
    }

    @Override
    public boolean waitForElementToBeClickableByCss(String css) {
        boolean found = true;
        try {
            (new WebDriverWait(driver, explicitWaitTime))
                    .until(ExpectedConditions.elementToBeClickable(By.cssSelector(css)));
        } catch (Exception var4) {
            this.logger.error("waitForElementToBeClickableByCss : Element Not Found: " + css);
            found = false;
        }

        return found;
    }

    @Override
    public boolean waitForElementToBeClickableByXPath(String xpath) {
        boolean found = true;
        try {
            (new WebDriverWait(driver, explicitWaitTime))
                    .until(ExpectedConditions.elementToBeClickable(By.xpath(xpath)));
        } catch (Exception var4) {
            this.logger.error("waitForElementToBeClickableByXPath : Element Not Found: " + xpath);
            found = false;
        }

        return found;
    }

    @Override
    public boolean waitForElementToBeClickableByName(String name) {
        boolean found = true;
        try {
            (new WebDriverWait(driver, explicitWaitTime)).until(ExpectedConditions.elementToBeClickable(By.name(name)));
        } catch (Exception var4) {
            this.logger.error("waitForElementToBeClickableByName : Element Not Found: " + name);
            found = false;
        }

        return found;
    }

    @Override
    public boolean waitForElementToBeClickableByPartialLinkText(String linkText) {
        boolean found = true;
        try {
            (new WebDriverWait(driver, explicitWaitTime))
                    .until(ExpectedConditions.elementToBeClickable(By.partialLinkText(linkText)));
        } catch (Exception var4) {
            this.logger.error("waitForElementToBeClickableByPartialLinkText : Element Not Found: " + linkText);
            found = false;
        }

        return found;
    }

    @Override
    public boolean waitForElementToBeClickableByTagName(String tag) {
        boolean found = true;
        try {
            (new WebDriverWait(driver, explicitWaitTime))
                    .until(ExpectedConditions.elementToBeClickable(By.tagName(tag)));
        } catch (Exception var4) {
            this.logger.error("waitForElementToBeClickableByTagName : Element Not Found: " + tag);
            found = false;
        }

        return found;
    }

    /////////////////////
    // Appium methods //
    ////////////////////
    String webContext = "webContext";

    @Override
    public boolean deviceStoreCurrentContext(String contextName) {
        AppiumContext.put(contextName, appiumMethods.getCurrentContext((AppiumDriver) driver));
        return true;
    }

    @Override
    public boolean deviceSwitchToContextNativeApp() {
        return appiumMethods.switchToContextNativeApp((AppiumDriver) driver);
    }

    @Override
    public boolean deviceSwitchToContext(String context) {
        if (AppiumContext.containsKey(context)) {
            return appiumMethods.switchToContext((AppiumDriver) driver, AppiumContext.get(context));
        } else {
            return appiumMethods.switchToContext((AppiumDriver) driver, context);
        }
    }

    public String getCurrentContext() {
        return appiumMethods.getCurrentContext((AppiumDriver) driver);
    }


    //TODO: Custom Capabilities Setup
    @Override
    public boolean deviceStart() {
        try {
            DeviceHandler.setCapabilities();
        } catch (Exception e) {
            return false;
        }
        try {

            if (DeviceHandler.getPlatformName().equalsIgnoreCase("Android")) {
                setupDevice().setDeviceType(AppiumDeviceTypesEnum.ANDROID_DEVICE).setPlatformName(DeviceHandler.getPlatformName())
                        .setPlatformVersion(DeviceHandler.getPlatFormVersion()).setDeviceName(DeviceHandler.getDeviceName()).setDeviceUDID(DeviceHandler.getUdid());
                setupDeviceServer().setBrowserName("Chrome").setFullReset(false).setAutoLaunch(false);
                ChromeOptions options = new ChromeOptions();
                options.addArguments("disable-translate");
                options.addArguments("disable-popup-blocking");
                options.addArguments("disable-save-password-bubble");
                options.addArguments("enable-automatic-password-saving");
                setupAndroidDriver().setChromeOptions(options).setAndroidDeviceReadyTimeout(60)
                        .setEnablePerformanceLogging(true);
                createAndroidDriver("http://" + DeviceHandler.getAppiumServerIP() + ":" + DeviceHandler.getAppiumServerPort() + "/wd/hub");
            } else if (DeviceHandler.getPlatformName().equalsIgnoreCase("iOS")) {
                setupDevice().setDeviceType(AppiumDeviceTypesEnum.IPHONE_DEVICE).setPlatformName(DeviceHandler.getPlatFormVersion())
                        .setPlatformVersion(DeviceHandler.getPlatFormVersion()).setDeviceName(DeviceHandler.getDeviceName());
                setupDeviceServer().setBrowserName("Safari").setFullReset(false).setAutoLaunch(false);
                createIOSDriver("http://" + DeviceHandler.getAppiumServerIP() + ":" + DeviceHandler.getAppiumServerPort() + "/wd/hub");
                try {
                    String[] launchCommand = {"osascript", "-e", "if application \"Simulator\" is running then \n tell application \"Simulator\" to activate\n" +
                            "end if"};
                    Runtime.getRuntime().exec(launchCommand);
                } catch (IOException e) {

                }

            } else {

                Map<String, String> mobileEmulation = new HashMap<String, String>();
                mobileEmulation.put("deviceName", DeviceHandler.getDeviceName());
                HashMap<String, Object> chromeOptions = new HashMap<String, Object>();
                chromeOptions.put("mobileEmulation", mobileEmulation);

                createBrowser().setBrowserType(BrowserTypes.CHROME).setChromeOptions(chromeOptions);
            }
        } catch (UnreachableBrowserException e) {
            logger.error(e.getMessage());
            return false;
        }
        mobileBrowser = true;
        return true;
    }

    public boolean deviceStart(String... options) {
        try {
            DeviceHandler.setCapabilities();
        } catch (Exception e) {
            return false;
        }
        try {

            if (DeviceHandler.getPlatformName().equalsIgnoreCase("Android")) {
                setupDevice().setDeviceType(AppiumDeviceTypesEnum.ANDROID_DEVICE).setPlatformName(DeviceHandler.getPlatformName())
                        .setPlatformVersion(DeviceHandler.getPlatFormVersion()).setApp("Chrome").setDeviceName(DeviceHandler.getDeviceName()).setDeviceUDID(DeviceHandler.getUdid());

                setupDeviceServer().setBrowserName("Chrome").setFullReset(false).setAutoLaunch(false);
                ChromeOptions chromeOptions = new ChromeOptions();
                for (int i = 0; i < options.length; i++) {
                    chromeOptions.addArguments(options[i]);
                }
                setupAndroidDriver().setChromeOptions(chromeOptions).setAndroidDeviceReadyTimeout(60)
                        .setEnablePerformanceLogging(true);
                createAndroidDriver("http://" + DeviceHandler.getAppiumServerIP() + ":" + DeviceHandler.getAppiumServerPort() + "/wd/hub");
            } else if (DeviceHandler.getPlatformName().equalsIgnoreCase("iOS")) {
                setupDevice().setDeviceType(AppiumDeviceTypesEnum.IPHONE_DEVICE).setPlatformName(DeviceHandler.getPlatFormVersion())
                        .setPlatformVersion(DeviceHandler.getPlatFormVersion()).setApp("Safari").setDeviceName(DeviceHandler.getDeviceName());
                setupDeviceServer().setBrowserName("Safari").setFullReset(false).setAutoLaunch(false);
                createIOSDriver("http://" + DeviceHandler.getAppiumServerIP() + ":" + DeviceHandler.getAppiumServerPort() + "/wd/hub");
            } else {

                Map<String, String> mobileEmulation = new HashMap<String, String>();
                mobileEmulation.put("deviceName", DeviceHandler.getDeviceName());
                HashMap<String, Object> chromeOptions = new HashMap<String, Object>();
                chromeOptions.put("mobileEmulation", mobileEmulation);

                createBrowser().setBrowserType(BrowserTypes.CHROME).setChromeOptions(chromeOptions);

            }
        } catch (UnreachableBrowserException e) {
            logger.error(e.getMessage());
            return false;
        }
        mobileBrowser = true;
        return true;
    }


    public boolean openApp(String... appArguments) {
        try {
            DeviceHandler.setCapabilities();
        } catch (Exception e) {
            return false;
        }
        try {


            if (DeviceHandler.getPlatformName().equalsIgnoreCase("Android")) {
                setupDevice().setDeviceType(AppiumDeviceTypesEnum.ANDROID_DEVICE).setPlatformName(DeviceHandler.getPlatformName())
                        .setPlatformVersion(DeviceHandler.getPlatFormVersion()).setApp(appArguments[0]).setDeviceName(DeviceHandler.getDeviceName()).setDeviceUDID(DeviceHandler.getUdid());
                try {
                    setupAndroidDriver().setAndroidDeviceReadyTimeout(60).setAppActivity(appArguments[1]);
                } catch (IndexOutOfBoundsException e) {
                    logger.error("When launching an android app you need to provide the app launch activity as the second argument");
                    return false;
                }
                createAndroidDriver("http://" + DeviceHandler.getAppiumServerIP() + ":" + DeviceHandler.getAppiumServerPort() + "/wd/hub");
            } else {
                setupDevice().setDeviceType(AppiumDeviceTypesEnum.IPHONE_DEVICE).setPlatformName(DeviceHandler.getPlatFormVersion())
                        .setPlatformVersion(DeviceHandler.getPlatFormVersion()).setApp(appArguments[0]).setDeviceName(DeviceHandler.getDeviceName());
                setupDeviceServer().setBrowserName("");
                createIOSDriver("http://" + DeviceHandler.getAppiumServerIP() + ":" + DeviceHandler.getAppiumServerPort() + "/wd/hub");
                try {
                    String[] launchCommand = {"osascript", "-e", "if application \"Simulator\" is running then \n tell application \"Simulator\" to activate\n" +
                            "end if"};
                    Runtime.getRuntime().exec(launchCommand);
                } catch (IOException e) {

                }
            }
        } catch (UnreachableBrowserException e) {
            logger.error(e.getMessage());
            return false;
        }
        return true;
    }

    ;


    @Override
    public boolean deviceTap() {
        if (driver instanceof AppiumDriver) {
            return appiumMethods.tapAndroid((AppiumDriver) driver, currentElement);
        } else if (driver instanceof ChromeDriver) {
            return appiumMethods.tapAndroid((ChromeDriver) driver, currentElement);
        } else {
            return appiumMethods.tapAndroid((RemoteWebDriver) driver, currentElement);
        }

    }

    @Override
    public boolean deviceLongPress() {
        if (driver instanceof AppiumDriver) {
            return appiumMethods.longPressAndroid((AppiumDriver) driver, currentElement);
        } else if (driver instanceof ChromeDriver) {
            return appiumMethods.longPressAndroid((ChromeDriver) driver, currentElement);
        } else {
            return appiumMethods.longPressAndroid((RemoteWebDriver) driver, currentElement);
        }

    }

    @Override
    public boolean deviceScrollToElementByText(String value) {
        if (driver instanceof AppiumDriver) {
            return appiumMethods.scrollToElementByText((AppiumDriver) driver, value);
        } else {
            return scrollToElementByText(value);
        }
    }

    // Internal Method just to seperate web and device captures
    private boolean deviceCaptureImage(String imageName) {

        return appiumMethods.captureImageAppium((AppiumDriver) driver, imageName);
    }

    @Override
    public boolean deviceFindImage(String imagePath) {
        return appiumMethods.findImageAppium((AppiumDriver) driver, imagePath);
    }

    @Override
    public boolean deviceTapImage(String imagePath) {
        return appiumMethods.tapImageAppium((AppiumDriver) driver, imagePath);
    }

    @Override
    public boolean deviceSetImageWaitTime(int time) {
        return appiumMethods.setAppiumImageWaitTime(time);
    }

    @Override
    public boolean deviceWaitForImage(String imagePath) {
        return appiumMethods.waitForImageAppium((AppiumDriver) driver, imagePath);
    }

    @Override
    public boolean deviceWaitForImageStoreCoordinates(String imagePath) {
        return appiumMethods.waitForImageAndStoreCoordinatesAppium((AppiumDriver) driver, imagePath);
    }

    @Override
    public boolean deviceTapOnStoredCoordinates() {
        return appiumMethods.tapOnStoredCoordinatesAppium((AppiumDriver) driver);
    }

    @Override
    public boolean deviceTapOnCoordinates(int x, int y) {
        return appiumMethods.tapOnCoordinatesAppium((AppiumDriver) driver, x, y);
    }

    @Override
    public boolean deviceTypeInImage(String imagePath, String text) {
        return appiumMethods.typeInImageAppium((AppiumDriver) driver, imagePath, text);
    }

    @Override
    public boolean deviceScrollToImage(String imagePath) {
        return appiumMethods.scrollToImageAppium((AppiumDriver) driver, imagePath);
    }

    @Override
    public boolean deviceRotateLandscape() {
        if (driver instanceof AppiumDriver) {
            return appiumMethods.rotateDeviceLandscape((AppiumDriver) driver);
        } else {
            logger.warn("Screen Rotation Not Supported when using Chrome");
            return true;
        }

    }

    @Override
    public boolean deviceRotatePortrait() {
        if (driver instanceof AppiumDriver) {
            return appiumMethods.rotateDevicePortrait((AppiumDriver) driver);
        } else {
            logger.warn("Screen Rotation Not Supported when using Chrome");
            return true;
        }
    }

    @Override
    public boolean deviceScreenOrientation() {

        appiumMethods.screenOrientation((AppiumDriver) driver);
        return true;
    }

    @Override
    public boolean deviceInstallApp(String appPath) {
        return appiumMethods.installAppAppium(appPath);
    }

    @Override
    public boolean deviceSwipe(int startX, int startY, int endX, int endY, int duration) {

        appiumMethods.swipeAndroid((AppiumDriver) driver, startX, startY, endX, endY, duration);
        return true;
    }

    @Override
    public int deviceGetHeight() {
        assertTrue(deviceStoreCurrentContext("currentContext"));
        assertTrue(deviceSwitchToContextNativeApp());
        int height = driver.manage().window().getSize().getHeight();
        assertTrue(deviceSwitchToContext("currentContext"));
        return height;

    }

    @Override
    public int deviceGetWidth() {
        assertTrue(deviceStoreCurrentContext("currentContext"));
        assertTrue(deviceSwitchToContextNativeApp());
        int width = driver.manage().window().getSize().getWidth();
        assertTrue(deviceSwitchToContext("currentContext"));
        return width;
    }

    *//**
     * @author Atanas Kanchev Inner class CreateAppiumDriver Handles Appium
     *         iOSDriver and Android driver initalization
     *//*
    final class CreateDeviceDriver {

        private AppiumDevice device;
        private AppiumCapabilities deviceCapabilities;
        private AppiumCapabilities.AppiumServerCapabilities deviceServerCapabilities;
        private AppiumCapabilities.IOSCapabilities iosCapabilities;
        private AppiumCapabilities.AndroidCapabilities androidCapabilities;
        private URL appiumServerURL;

        *//**
         * Constructor
         *//*
        CreateDeviceDriver() {
            this.device = new AppiumDevice();
            this.deviceCapabilities = new AppiumCapabilities();
            this.deviceServerCapabilities = deviceCapabilities.new AppiumServerCapabilities();
            this.iosCapabilities = deviceCapabilities.new IOSCapabilities();
            this.androidCapabilities = deviceCapabilities.new AndroidCapabilities();
        }

        //////////////
        // SETTERS //
        /////////////

        AppiumDevice setDevice() {
            return this.device;
        }

        AppiumDevice setDevice(AppiumDevice appiumDevice) {
            return this.device = appiumDevice;
        }

        AppiumCapabilities.AppiumServerCapabilities setDeviceServerCapabilities() {
            return this.deviceServerCapabilities;
        }

        AppiumCapabilities.IOSCapabilities setIOSCapabilities() {
            return this.iosCapabilities;
        }

        AppiumCapabilities.AndroidCapabilities setAndroidCapabilities() {
            return this.androidCapabilities;
        }

        CreateDeviceDriver setDeviceServerURL(URL appiumServerURL) {
            this.appiumServerURL = appiumServerURL;
            return createAppiumDriver;
        }

        //////////////
        // GETTERS //
        /////////////

        IOSDriver getIOSDriver() {
            return new AppiumDriverInit(device, deviceServerCapabilities, iosCapabilities, appiumServerURL)
                    .getIOSDriver();
        }

        AndroidDriver getAndroidDriver() {

            AndroidDriver androidDriver = new AppiumDriverInit(device, deviceServerCapabilities, androidCapabilities,
                    appiumServerURL).getAndroidDriver();
            driver = androidDriver;

            return androidDriver;
        }

    }

    *//**
     * Setup Appium Device capabilities
     *
     * @return AppiumDevice instance
     *//*
    public AppiumDevice setupDevice() {
        if (createAppiumDriver == null)
            this.createAppiumDriver = new CreateDeviceDriver();
        return createAppiumDriver.setDevice();
    }

    *//**
     * Setup Appium Device capabilities using appiumDevice instance
     *
     * @param appiumDevice AppiumDevice
     * @return AppiumDevice instance
     *//*
    public AppiumDevice setupDevice(AppiumDevice appiumDevice) {
        if (createAppiumDriver == null)
            this.createAppiumDriver = new CreateDeviceDriver();
        return createAppiumDriver.setDevice(appiumDevice);
    }

    *//**
     * Setup Appium Server capabilities
     *
     * @return AppiumCapabilities.AppiumServerCapabilities instance
     *//*
    public AppiumCapabilities.AppiumServerCapabilities setupDeviceServer() {
        if (createAppiumDriver == null)
            this.createAppiumDriver = new CreateDeviceDriver();
        return createAppiumDriver.setDeviceServerCapabilities();
    }

    *//**
     * Setup IOSDriver capabilities
     *
     * @return AppiumCapabilities.IOSCapabilities instance
     *//*
    public AppiumCapabilities.IOSCapabilities setupIOSDriver() {
        if (createAppiumDriver == null)
            this.createAppiumDriver = new CreateDeviceDriver();
        return createAppiumDriver.setIOSCapabilities();
    }

    *//**
     * Setup AndroidDriver capabilities
     *
     * @return AppiumCapabilities.AndroidCapabilities instance
     *//*
    public AppiumCapabilities.AndroidCapabilities setupAndroidDriver() {
        if (createAppiumDriver == null)
            this.createAppiumDriver = new CreateDeviceDriver();
        return createAppiumDriver.setAndroidCapabilities();
    }

    *//**
     * Create IOSDriver
     *
     * @param appiumServerURL Appium server URL String, e.g. "http://127.0.0.1:4723/wd/hub"
     * @return IOSDriver instance
     *//*
    public IOSDriver createIOSDriver(String appiumServerURL) {
        try {
            this.createAppiumDriver.setDeviceServerURL(new URL(appiumServerURL));
            driver = this.createAppiumDriver.getIOSDriver();
        } catch (MalformedURLException e) {
            logger.error(e);
        }
        return (IOSDriver) driver;
    }

    *//**
     * Create AndroidDriver
     *
     * @param appiumServerURL Appium server URL String, e.g. "http://127.0.0.1:4723/wd/hub"
     * @return AndroidDriver instance
     *//*
    public AndroidDriver createAndroidDriver(String appiumServerURL) {
        try {
            this.createAppiumDriver.setDeviceServerURL(new URL(appiumServerURL));
            driver = this.createAppiumDriver.getAndroidDriver();
        } catch (MalformedURLException e) {
            logger.error(e);
        }
        return (AndroidDriver) driver;
    }


    *//**
     * Returns a string that contains the driver class:
     *//*
    private String getDriverClass() {
        String driverType = "";
        try {
            driverType = driver.getClass().toString();
        } catch (NullPointerException e) {
            logger.error(e);
        }
        return driverType;
    }

    *//**
     * Returns the device type
     * e.g. "Android", "iOS", "Default"
     *//*
    public String getDeviceType() {
        String deviceType = getDriverClass().toLowerCase();
        if (deviceType.contains("android")) {
            return "Android";
        } else if (deviceType.contains("ios")) {
            return "iOS";
        } else {
            return "Default";
        }
    }

    *//**
     * Returns a String with the Device's screen resolution - It will return the visible screen resolution
     * So it can be different than the expected resolution:
     * Expected: "1440*2560" - Visible Resolution: "1440x2392"
     *//*
    public String deviceResolution() {
        String width = String.valueOf(deviceGetWidth());
        String height = String.valueOf(deviceGetHeight());
        return width + "x" + height;
    }

    
    Due to a selenium defect, Chrome is not on the fron when opened.
    This workaround creates a JavaScript alert that forces the browser to be at the front, and closes the alert.
     
    private void macChromeMaximizeWorkaround() {
        try {
            String currentWindowHandle = this.driver.getWindowHandle();
            ((JavascriptExecutor) this.driver).executeScript("alert('Bringing Chrome to Front!')");
            this.driver.switchTo().alert().accept();
            this.driver.switchTo().window(currentWindowHandle);
        } catch (NoAlertPresentException e) {
            this.logger.error("Imposible to launch the JavaScript Alert popup");
        }
    }
}
*/