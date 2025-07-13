package com.wh.auto.common;

//import il.co.topq.integframework.reporting.Reporter;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Set;
import org.openqa.selenium.internal.Locatable;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchWindowException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Reporter;

import com.wh.auto.common.Reporter.Color;
import com.wh.auto.common.Reporter.Style;

public class WebDriverUtils{
	
	public static void KillBrowsers(){
		if (!Utility.developmentMac) {
			Utility.terminateChrome();
			Utility.terminateSafari();
		}
	}
	
	/**
	 * switch To Window With Title
	 * @param driver
	 * @param windowHandles
	 * @param windowTitle
	 * @return
	 */
	private static boolean switchToWindowWithTitle(WebDriver driver, String[] windowHandles, String windowTitle) {
		for (String windowHandle : windowHandles) {
			try {
				driver.switchTo().window(windowHandle);
			} catch (NoSuchWindowException e) {
				Reporter.log("Ooops. Recieved 'NoSuchWindowException' while searching for window with title "
						+ windowTitle + ". Recovering", true);
				// Recovery in case we are in window that is not exist
				continue;
			}
			if (driver.getTitle().contains(windowTitle.trim())) {
				return true;
			}
		}
		return false;

	}

	/**
	 * right Click On Element
	 * @param driver
	 * @param webElement
	 */
	public static void rightClickOnElement(WebDriver driver, WebElement webElement) {
		Actions actions = new Actions(driver);
		Action action = actions.contextClick(webElement).build();
		action.perform();

	}

	/**
	 * left Click On Element
	 * @param driver
	 * @param webElement
	 */
	public static void leftClickOnElement(WebDriver driver, WebElement webElement) {
		Actions actions = new Actions(driver);
		Action action = actions.click(webElement).build();
		action.perform();
	}
	
	/**
	 * move To Element
	 * @param driver
	 * @param webElement
	 */
	public static void moveToElement(WebDriver driver, WebElement webElement) {
		Actions actions = new Actions(driver);
		Action action = actions.moveToElement(webElement).build();
		action.perform();
	}
	
	/**
	 * switch To Window
	 * @param driver
	 * @param windowTitle
	 */
	public static void switchToWindow(WebDriver driver, String windowTitle) {
		switchToWindow(driver, windowTitle, 30000);
	}

	/**
	 * wait For Element
	 * @param driver
	 * @param by
	 * @return
	 */
	public static WebElement waitForElement(WebDriver driver, By by) {
		return waitForElement(driver, by, 30);
	}

	/**
	 * wait For Element
	 * @param driver
	 * @param by
	 * @return
	 */
	public static WebElement waitForElement(WebDriver driver, By by, String name) {
		com.wh.auto.common.Reporter.log("Element:" + name, true,Style.BOLD, Color.BLACK);
		return waitForElement(driver, by);
	}
	
	/**
	 * wait For Element
	 * @param driver
	 * @param by
	 * @param timeout
	 * @return
	 */
	public static WebElement waitForElement(WebDriver driver, By by, int timeoutSec) {
		WebElement dynamicElement = (new WebDriverWait(driver, timeoutSec)).until(ExpectedConditions
				.presenceOfElementLocated(by));
		for (int i = 0; i < 5; i++) {
			try {
				dynamicElement.isDisplayed();
				break;
			} catch (Exception e) {
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e1) {	}
			} 
		}
		return dynamicElement;
	}

	/**
	 * wait For Element
	 * @param driver
	 * @param by
	 * @param timeout
	 * @return
	 */
	public static WebElement waitForElement(WebDriver driver, By by, int timeoutSec, String elementName) {
		//Reporter.log("Page: " + this.getClass().getSimpleName(), Style.BOLD, Color.GREEN);
		com.wh.auto.common.Reporter.log("Element:" + elementName, true,Style.BOLD, Color.BLACK);
		WebElement dynamicElement = (new WebDriverWait(driver, timeoutSec)).until(ExpectedConditions
				.presenceOfElementLocated(by));
		return dynamicElement;
	}
	
	/**
	 * wait For Element Click
	 * @param driver
	 * @param by
	 * @param timeout
	 * @return
	 */
	public static WebElement waitForElementClick(WebDriver driver, By by, int timeoutSec) {
		WebElement dynamicElement = null;
			try {
					dynamicElement = (new WebDriverWait(driver, timeoutSec))
							.until(ExpectedConditions.presenceOfElementLocated(by));
					Thread.sleep(100);
					dynamicElement.click();
				} catch (Exception e) {
					if (dynamicElement != null) {
						((Locatable) dynamicElement).getCoordinates().inViewPort();
					} else {
						throw new IllegalStateException(e);
					}
					try {
						dynamicElement.click();
					} catch (Exception ex) {
						new Actions(driver).sendKeys(Keys.PAGE_DOWN).perform();
						dynamicElement.click();
					}
				}
		return dynamicElement;
	}
	
	public static void waitForElementSafeClick(WebDriver driver, By by, String name) {
		com.wh.auto.common.Reporter.log("click on:" + name, true,Style.BOLD, Color.BLACK);
		WebElement dynamicElement = null;
		for (int i = 0; i < 10; i++) {
			try {
				dynamicElement = (new WebDriverWait(driver, 30)).until(ExpectedConditions
						.presenceOfElementLocated(by));
				dynamicElement.click();
				break;
			} catch (Exception e) {
					if (i == 3) {
						throw new IllegalStateException("click Error:"+e);
					}
					try {
					Thread.sleep(1000);
				    } catch (InterruptedException e1) {	}
			} 
		}
	}
	
	/**
	 * wait For Element Click
	 * @param driver
	 * @param by
	 * @param timeout
	 * @return
	 */
	public static WebElement waitForElementClick(WebDriver driver, By by, String name) {
		com.wh.auto.common.Reporter.log("Element:" + name, true,Style.BOLD, Color.BLACK);
		return waitForElementClick(driver, by, 30);
	}
	
	/**
	 * wait For Element
	 * @param driver
	 * @param by
	 * @param timeout
	 * @return
	 */
	public static WebElement waitForElement(WebDriver driver, By by, int timeoutSec, ExpectedConditions expectedConditions) {
		WebElement dynamicElement = (new WebDriverWait(driver, timeoutSec)).until(ExpectedConditions
				.presenceOfElementLocated(by));
		return dynamicElement;
	}
	
	/**
	 * switch To Window
	 * @param driver
	 * @param windowTitle
	 * @param timeoutInMillis
	 */
	public static void switchToWindow(WebDriver driver, String windowTitle, long timeoutInMillis) {
		if (driver.getTitle().contains(windowTitle.trim())) {
			return;
		}
		try {
			String[] windowHandles = driver.getWindowHandles().toArray(new String[] {});
			long start = System.currentTimeMillis();
			while ((System.currentTimeMillis() - start) < timeoutInMillis) {
				if (switchToWindowWithTitle(driver, windowHandles, windowTitle)) {
					Reporter.log("Switched to window with title '" + windowTitle + "'\n", true);
					return;
				}
				try {
					Reporter.log("Window with title '" + windowTitle + "' was not found. Waiting \n", true);
					Thread.sleep(500);
					windowHandles = driver.getWindowHandles().toArray(new String[] {});
				} catch (InterruptedException e) {
				}
			}

		} catch (NoSuchWindowException e) {
			Reporter.log("Recieved 'NoSuchWindowException' while trying to switch to '" + windowTitle + "' !!!!", true);
			throw new IllegalStateException("Failed to switch to window with title '" + windowTitle + "'");
		}
		throw new IllegalStateException("Failed to switch to window with title '" + windowTitle + "'");

	}

	/**
	 * add Screenshot
	 * @param driver
	 */
	public static void addScreenshot(WebDriver driver) {
		File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		File newFile = new File("screenShot" + System.currentTimeMillis() + ".png");
		scrFile.renameTo(newFile);
		logImage("Screenshot", newFile);
		scrFile.delete();
		newFile.delete();
	}
	
	/**
	 * log Image
	 * @param title
	 * @param file
	 */
	public static void logImage(String title, final File file) {
		File newFile = copyFileToReporterFolder(file);
		if (null == newFile) {
			return;
		}
		if (null == title) {
			title = file.getName();
		}
		log("<img src='" + newFile.getName() + "' alt='" + title + "' >", false);

	}
	
	 /**Appending <code>s</code> to the report
	 * 
	 * @param s
	 */
	 
	public static void log(String s, boolean logToStandardOut) {
		s = s + "\n";
		org.testng.Reporter.log(toHtml(s), false);
		if (logToStandardOut) {
			System.out.println(s);
		}
	}
	
	
	private static String toHtml(String str) {
		return str.replace("\n", "<br/>");
	}

	/**
	 * copy File To Reporter Folder
	 * @param file
	 * @return
	 */
	private static File copyFileToReporterFolder(File file) {
		if (null == file || !file.exists() || !file.isFile()) {
			// File is not exist
			return null;
		}

		// Creating parent folder
		final File parentFolder = new File(
				new File(org.testng.Reporter.getCurrentTestResult().getTestContext().getOutputDirectory()).getParent() + File.separator
						+ "html");
		if (!parentFolder.exists()) {
			if (!parentFolder.mkdirs()) {
				log("Failed to create folder for logging file", false);
			}
		}

		// Copying the file to the parent folder
		final File newFile = new File(parentFolder, file.getName());
		if (newFile.exists()) {
			newFile.delete();
		}
		try {
			FileUtils.copyFile(file, newFile);
		} catch (IOException e1) {
			log("Failed copying file " + file.getAbsolutePath(), false);
		}
		return newFile;
	}

	/**
	 * safe Click
	 * @param driver
	 * @param element
	 */
	public static void safeClick(WebDriver driver, WebElement element) {
		Actions builder = new Actions(driver);
		builder.moveToElement(element).click(element).perform();
	}
	
	/**
	 * go To URL Contain Window
	 * @param driver
	 * @param urlContain
	 */
	public void goToURLContainWindow(WebDriver driver, String urlContain){
		Set<String> windowHandles = driver.getWindowHandles();
		for (String windowHandle : windowHandles) {
            if (driver.switchTo().window(windowHandle).getCurrentUrl().contains(urlContain))
            {
                break;
            }
        }
	}
	
	/**
	 * Get Table Rows
	 * @param table
	 * @return
	 */
	public Collection<WebElement> GetTableRows(WebElement table)
    {
        return table.findElements(By.cssSelector("tbody tr"));
    }
    
	/**
	 * Get Row Cells
	 * @param table
	 * @return
	 */
    public Collection<WebElement> GetRowCells(WebElement table)
    {
        return table.findElements(By.cssSelector("td"));
    }
	
}