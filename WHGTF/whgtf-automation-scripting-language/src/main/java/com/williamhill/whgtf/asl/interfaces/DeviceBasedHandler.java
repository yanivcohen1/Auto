package com.williamhill.whgtf.asl.interfaces;

/**
 * Appium Methods - These methods only work with the AppiumDriver driver,
 * therefore, I created them on the AppiumMethods class. And they will be called
 * from the ASL. This way, only this class needs to be extended to be able to
 * use all the Appium Methods
 */
public interface DeviceBasedHandler {


	boolean deviceStart();

	boolean deviceSwitchToContextNativeApp();

	boolean deviceSwitchToContext(String context);

	boolean deviceTap();

	boolean deviceLongPress();

	boolean deviceTapOnCoordinates(int x, int y);

	boolean deviceScrollToElementByText(String value);


	boolean deviceFindImage(String imagePath);

	/**
	 * Captures a Screenshot on the Appium Driver (Real Device or Emulator)
	 * Compares with a given sub image and takes the Coordinates X,Y using
	 * Sikuli Taps on coordinates X,Y on the Appium Driver
	 */
	boolean deviceTapImage(String imagePath);

	/**
	 * Waits for an image and stores the coordinates
	 */

	boolean deviceWaitForImageStoreCoordinates(String imagePath);

	/**
	 * Taps on the Stored Coordinates
	 */

	boolean deviceTapOnStoredCoordinates();

	/**
	 * This method can be used to control the Wait Time for a particular
	 * Scenario If this is not used, default Wait Time will be used (Ex: int
	 * appiumImageWaitTime = 30)
	 */


	boolean deviceSetImageWaitTime(int time);

	boolean deviceWaitForImage(String imagePath);

	boolean deviceTypeInImage(String imagePath, String text);

	/**
	 * Method not tested
	 */
	boolean deviceScrollToImage(String imagePath);

	/**
	 * This method only works on Native Context, use the
	 * switchToContextNativeApp() method first
	 */
	boolean deviceRotateLandscape();

	/**
	 * This method only works on Native Context, use the
	 * switchToContextNativeApp() method first
	 */
	boolean deviceRotatePortrait();

	/**
	 * This method only works on Native Context, use the
	 * switchToContextNativeApp() method first
	 */
	boolean deviceScreenOrientation();

	// Native Apps Only Methods

	/**
	 * Method not tested
	 */
	boolean deviceInstallApp(String appPath);

	/**
	 * Swipe Android - Device needs to be on Native App Context Duration in
	 * milliseconds - Min recommended = 300
	 * @return 
	 */
	boolean deviceSwipe(int startX, int startY, int endX, int endY, int duration);

	/**
	 * Gets the Android device's screen height
	 */
	int deviceGetHeight();

	/**
	 * Gets the Android device's screen width
	 */
	int deviceGetWidth();

	boolean deviceStoreCurrentContext(String contextName);
}
