package com.wh.auto.common;

import java.util.List;
import java.util.Properties;
import java.util.Set;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.NoSuchFrameException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.UnexpectedTagNameException;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.base.Strings;

public class SeleniumRaper {

	protected static WebDriver driver = null;
	private final static Logger logger = LogManager.getRootLogger();
	private WebElement currentElement = null;
	// Sets the wait time for waiting for an element
    private static int explicitWaitTime = 20;
    private static int implicitWaitTime = 20;
    private List<WebElement> elementList;
 // Select box
    private Select currentSelect = null;
	
    public <T> T executeScript(String script, Object... args) {
        return (T) ((JavascriptExecutor) driver).executeScript(script, args);
    }

    public <T> T executeScript(String script) {
        return (T) ((JavascriptExecutor) driver).executeScript(script);
    }

    /*public <T> T executeScriptOnCurrentElement(String script) {
        return ((JavascriptExecutor) driver).executeScript(driver, script, currentElement);
    }*/

    public <T> T executeAsyncScript(String script, Object... args) {
        return (T) ((JavascriptExecutor) driver).executeScript(script, args);
    }

    public <T> T executeAsyncScript(String script) {
        return (T) ((JavascriptExecutor) driver).executeScript(script);
    }
    
    public boolean navigateToRootElement() {

        try {
            currentElement = driver.findElement(By.xpath("/html/body"));
        } catch (NoSuchElementException nsee) {
            logger.error("Unable to return to Root Element - Body");
        }
        return true;

    }
    
    public void assertTrue(boolean condition) {
        Assert.assertTrue(condition);
    }

    public void assertTrue(String errorMessage, boolean condition) {
    	Assert.assertTrue(errorMessage, condition);
    }
    
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
    
    private List<WebElement> getElementsByCSS(String cssSelector) {
        return currentElement.findElements(By.cssSelector(cssSelector));
    }
    
    public List<WebElement> getElementList() {
        return elementList;
    }
    
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
    
    private boolean listPopulated() {
        if (elementList == null || elementList.isEmpty()) {
            logger.warn("navigateToListElement : Attempt to index empty or null list");
            return false;
        } else {
            return true;
        }
    }
    
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
    
    private List<WebElement> getElementsByXpath(String xpath) {
        if (isDeviceNativeApp()) {
            return driver.findElements(By.xpath(xpath));
        } else {
            return currentElement.findElements(By.xpath(xpath));
        }
    }
    
    private boolean isDeviceNativeApp() {
        Boolean isNativeApp = false;
        try {
            isNativeApp = driver.getClass().toString().contains("appium");
        } catch (NullPointerException e) {
            isNativeApp = false;
        }
        return isNativeApp;
    }
    
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
    
    private List<WebElement> getElementsByPartialId(String id) {
        return currentElement.findElements(By.cssSelector(String.format("[id*='%s']", id)));
    }
    
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
    
    private List<WebElement> getElementsByName(String name) {
        if (isDeviceNativeApp()) {
            return driver.findElements(By.name(name));
        } else {
            return currentElement.findElements(By.name(name));
        }
    }
    
    public boolean navigateToElementByCSS(String cssSelector) {
        try {
            currentElement = currentElement.findElement(By.cssSelector(cssSelector));
        } catch (NoSuchElementException nsee) {
            logger.error("navigateToElementByCSS : Element not found with CSS Selector  : " + cssSelector);
            return false;

        }
        return true;
    }
    
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
    
    public boolean isOfTagType(String tag) {
        return currentElement.getTagName().equals(tag);
    }
    
    /*private boolean elementWriteable() {
        boolean writeable = false;
        if (isOfTagType(HTML_INPUT) || isOfTagType(HTML_TEXTAREA) || isOfTagType(UIA_SECURETEXTFIELD) || isOfTagType(UIA_TEXTFIELD) || isOfTagType("android.widget.EditText")) {
            writeable = true;
        } else {
            logger.error("elementWriteable() : Cannot write to this element : " + currentElement.toString());
        }
        return writeable;
    }*/
    
    public boolean typeIn(CharSequence... keys) {
        boolean written = false;
        //if (elementWriteable()) {
            currentElement.sendKeys(keys);
            written = true;
        //}
        return written;
    }
    
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
    
    public boolean scrollToElementById(String id) {
        currentElement = driver.findElement(By.id(id));
        executeScript("arguments[0].scrollIntoView(true);", currentElement);
        return true;
    }
    
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
    
    // Get element text
    public String getText() {
        return currentElement.getText().trim();
    }
    
    public boolean refresh() {
        try {
            driver.navigate().refresh();
        } catch (Exception ex) {

        }

        return true;
    }
    
    /**
     * Allows you to retrieve get a property from the property files. This
     * method is accessing the default xxx.envrironment.property files in
     * src/test/resources </br>
     * </br>
     * for using custom property files use
     * {@link #getProperty(String prop, String fileName)}
     *
     * @param prop the property to retrieve from the file
     * @return the property as a string
     */
    public String getProperty(String prop) {
        String retProp = null;
        ReadFromPropertyFile pr = new ReadFromPropertyFile();
        //admin.environment.properties
        // Try to find the property key in the .properties file
        try {
            retProp = pr.getFromEnvirmentProperty(prop);
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
    
    public boolean navigateToPage(String url) {
            driver.navigate().to(url);
            boolean navigable = true;
        return navigable;
    }
    
    public boolean hasPartialURL(String text) {
        if (driver.getCurrentUrl().contains(text)) {
            logger.debug(text + " found in the URL");
            return true;
        } else {
            logger.error("Page url does not contain: " + text + " Actual URL: " + driver.getCurrentUrl());
            return false;
        }
    }
    
    public boolean scrollToElementByXpath(String xpath) {
        currentElement = driver.findElement(By.xpath(xpath));
        executeScript("arguments[0].scrollIntoView(true);", currentElement);
        return true;
    }
    
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
    
    public boolean scrollToElementByText(String value) {
        currentElement = driver.findElement(By.xpath("//*[contains(text(), \"" + value + "\")]"));
        executeScript("arguments[0].scrollIntoView(true);", currentElement);
        return true;
    }
    
 // Get value attribute
    public String getValue() {
        return currentElement.getAttribute("value");
    }
    
    public void assertFalse(boolean condition) {
        Assert.assertFalse(condition);
    }
    
 // Present on screen
    public boolean isDisplayed() {
        return currentElement.isDisplayed();
    }
    
 // Switch to IFrame following activation and focus.
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
    
 // Search and build by identifier
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
    
}
