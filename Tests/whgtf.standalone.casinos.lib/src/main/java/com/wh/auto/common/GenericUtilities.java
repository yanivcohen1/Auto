package com.wh.auto.common;

import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.core.LoggerContext;
import org.apache.logging.log4j.core.config.Configuration;
import org.apache.logging.log4j.core.config.LoggerConfig;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;

import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Iterator;

public class GenericUtilities {

	private final static Logger log4j = LogManager.getRootLogger();

	/* Jenkins environment variables */
	public static final String JENKINS_JOB_URL = System.getProperty("JOB_URL");

	/* Screenshot related variables */
	public String testMethodName;
	public String testClassName;
	public static final SimpleDateFormat SIMPLE_DATE_FORMAT = new SimpleDateFormat("HHmmss");
	public static final String CURRENT_DATE = new SimpleDateFormat("yyyyMMdd").format(Calendar.getInstance().getTime());
	//public static String CURRENT_TIME = SIMPLE_DATE_FORMAT.format(Calendar.getInstance().getTime());

	public static int counter = 1;
	public static boolean skippedTest;
	private static ArrayList<byte[]> screenshotList = new ArrayList<byte[]>();

	public GenericUtilities() {
		try {

			java.util.logging.Logger utilLogger = java.util.logging.Logger.getLogger("org.openqa.selenium.safari.SafariDriverServer");
			utilLogger.setLevel(java.util.logging.Level.OFF);
			String logLevel = System.getProperty("logLevel").toUpperCase();
			if (!logLevel.isEmpty()) {
				LoggerContext ctx = (LoggerContext) LogManager.getContext(false);
				try {
					Configuration config = ctx.getConfiguration();
					LoggerConfig loggerConfig = config.getLoggerConfig(LogManager.ROOT_LOGGER_NAME);
					loggerConfig.setLevel(Level.valueOf(logLevel));
					ctx.updateLoggers();
				} catch (IllegalArgumentException e) {
					log4j.error("Log Level Parameter: " + logLevel
							+ " is invalid, using src/test/resources/log4j2.xml for logging configuration");
				}

			}
		} catch (NullPointerException e) {
			log4j.debug(
					"'-DlogLevel' parameter not provided, using src/test/resources/log4j2.xml for logging configuration");
		}
	}

	public static boolean isJenkinsExecution() {

		boolean isJenkinsExecution;

		if (JENKINS_JOB_URL != null) {
			isJenkinsExecution = true;
		} else {
			isJenkinsExecution = false;
		}
		return isJenkinsExecution;
	}

	public static ArrayList<byte[]> takeScreenShot(String testMethodName, String testClassName, WebDriver driver) {

		log4j.debug("Taking screenshot!");
		
		String CURRENT_TIME = SIMPLE_DATE_FORMAT.format(Calendar.getInstance().getTime());
		String screenshotsDir = System.getProperty("screenshotDirectory");
		String screenshotFileName = new StringBuilder().append(counter).append(".").append(testMethodName).append("-")
				.append(CURRENT_DATE).append("_").append(CURRENT_TIME).toString();

		File outputFolder = null;

		if (!GraphicsEnvironment.isHeadless()) {

			if (isJenkinsExecution() || screenshotsDir == null) {
				screenshotsDir = "src/test/resources/screenshots/";
			}

			String environment = System.getProperty("env");

			String folderString = (environment == null)
					? screenshotsDir + CURRENT_DATE + "/" + testClassName + "/"
					+ testMethodName.replaceAll("[^a-zA-Z0-9.-]", "") + "/" + CURRENT_TIME
					: screenshotsDir + CURRENT_DATE + "/" + testClassName + "/"
							+ testMethodName.replaceAll("[^a-zA-Z0-9.-]", "") + "/" + environment + "/" + CURRENT_TIME;
			try {

				outputFolder = new File(folderString);
				if (!outputFolder.exists()) {
					outputFolder.mkdirs();
				}
			} catch (Exception e1) {
				log4j.error("Unable to create outputFolder!");
			}

			// Save the page source code to a file and take screenshot
			if ( driver != null){ //MultiThreadedDriverFactory.getDriversMap().size() > 0) {

				try {
					log4j.debug("Web Page Title: " + driver.getTitle());
					log4j.debug("Web Page URL: " + driver.getCurrentUrl());
				} catch (Exception e) {
					log4j.debug("GetTitle & GetCurrentUrl Not supported on Android");
				}

				String pageSourceFileName = counter + ".pageSource.txt";
				log4j.debug("Saving Page Source Code!");
				log4j.debug("File Path: " + outputFolder);

				if (isJenkinsExecution()) {
					log4j.debug("File URL: " + JENKINS_JOB_URL + "ws/" + outputFolder.toString().replace("\\", "/")
							+ screenshotFileName.toString());
				}

				try (FileWriter fstream = new FileWriter(outputFolder + "//" + pageSourceFileName);
						BufferedWriter out = new BufferedWriter(fstream)) {
					out.write(driver.getPageSource());
					counter++;

				} catch (IOException e) {
					log4j.error("Unable to save page source file!");
					e.printStackTrace();
				}

				try {
					CURRENT_TIME = SIMPLE_DATE_FORMAT.format(Calendar.getInstance().getTime());
					screenshotFileName = new StringBuilder().append(counter).append(".").append(testMethodName)
							.append("-").append(CURRENT_DATE).append("_").append(CURRENT_TIME).toString();
					Screenshot driverScreenshot = new AShot()
							.takeScreenshot(driver);
					byte[] screenShot = saveScreenshot(screenshotFileName, driverScreenshot.getImage(), outputFolder);
					screenshotList.add(screenShot);
				} catch (WebDriverException e1) {
					log4j.debug("Unable to take screenshot!");

					e1.printStackTrace();
				}

			}

			else {
				try {
					Rectangle screenRect = new Rectangle(0, 0, 0, 0);
					for (GraphicsDevice gd : GraphicsEnvironment.getLocalGraphicsEnvironment().getScreenDevices()) {
						screenRect = screenRect.union(gd.getDefaultConfiguration().getBounds());
					}
					ByteArrayOutputStream baos = new ByteArrayOutputStream();
					ImageIO.write(new Robot().createScreenCapture(screenRect), "png", baos);
					CURRENT_TIME = SIMPLE_DATE_FORMAT.format(Calendar.getInstance().getTime());
					screenshotFileName = new StringBuilder().append(counter).append(".").append(testMethodName)
							.append("-").append(CURRENT_DATE).append("_").append(CURRENT_TIME).toString();
					byte[] screenShot = baos.toByteArray();
					saveScreenshot(screenshotFileName, screenShot, outputFolder);
					screenshotList.add(screenShot);
				} catch (AWTException | IOException e1) {
					log4j.error("Unable to take screenshot!");
				}
			}

		}

		return screenshotList;
	}

	private static void saveScreenshot(String screenshotFileName, byte[] screenShot, File outputFolder) {

		String screenShotPath = outputFolder + "/" + screenshotFileName + ".png";
		log4j.debug("Saving Screenshot!");
		log4j.debug("File Path: " + screenShotPath);

		try {
			ImageIO.write(ImageIO.read(new ByteArrayInputStream(screenShot)), "png", new File(screenShotPath));
		} catch (IOException e) {
			log4j.error("Unable to save screenshot to " + screenShotPath);
		}
	}

	private static byte[] saveScreenshot(String screenshotFileName, BufferedImage screenShot, File outputFolder) {

		String screenShotPath = outputFolder + "/" + screenshotFileName + ".png";
		byte[] screenShotData = null;
		log4j.debug("Saving Screenshot!");
		log4j.debug("File Path: " + screenShotPath);

		try {
			ImageIO.write(screenShot, "png", new File(screenShotPath));
			Path path = Paths.get(screenShotPath);
			screenShotData = Files.readAllBytes(path);
		} catch (IOException e) {
			log4j.error("Unable to save screenshot to " + screenShotPath);
		}

		return screenShotData;
	}

	/**
	 * Get skippedTest
	 * 
	 * @return skippedTest
	 */
	public static boolean isSkipped() {
		return skippedTest;
	}

	/**
	 * Set skippedTest
	 * 
	 * @param skipped
	 *            boolean
	 */
	public void setSkipped(boolean skipped) {
		skippedTest = skipped;
	}

	public static void tearDownDrivers() {

		if (System.getProperty("browserRetain") == null || System.getProperty("browserRetain").toLowerCase().isEmpty()){
			//forceDriverTeardown();
		}else{
			log4j.debug("Skipping browser teardown!");
		}
	}

	/*public static void forceDriverTeardown() {
			final int drivers = MultiThreadedDriverFactory.getDriversMap().size();

			if (drivers > 0) {

				log4j.debug("Tear down " + drivers + " WebDriver instances");

				try {
					synchronized (MultiThreadedDriverFactory.getDriversMap()) {

						Iterator<WebDriver> i = MultiThreadedDriverFactory.getDriversMap().values().iterator();
						while (i.hasNext())
							quitWebDriver(i.next());
					}
				} catch (Exception e) {
					log4j.error("Exception while quitting WebDriver instance" + e);
				} finally {
					synchronized (MultiThreadedDriverFactory.getDriversMap()) {
						MultiThreadedDriverFactory.getDriversMap().clear();
					}
				}
			}
	}*/

	public static void quitWebDriver(WebDriver next) {

		if (next != null) {
			log4j.debug("Quitting driver!");
			try {
				next.close();
				Thread.sleep(1000);
				next.quit();
			} catch (Exception e) {
			}
		}
		 else
			log4j.debug("Null driver! Skipping quit()");
	}

	public static void clearScreenShotList() {
		screenshotList.clear();
	}

	public static void addScreenShot(byte[] screenShot) {
		screenshotList.add(screenShot);
	}

}
