package com.wh.auto.common;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class CustomTouchAction {

	// Javascripts to trigger the touch events. This will be appended to the
	// javascript string

	private static String DOUBLETAP = ".trigger('touchend').trigger('touchend');";
	private static String SINGLETAP = ".trigger('tap');";

	private static String SWIPERIGHT = ".trigger('swiperight');";
	private static String SWIPELEFT = ".trigger('swipeleft');";

	private WebDriver driver;

	public CustomTouchAction(WebDriver driver) {
		this.driver = driver;
	}

	/**
	 * Return the x coordinate of the element in the screen
	 * 
	 * @param elementToLocate
	 * @return
	 */
	private int getElementXPosition(By elementToLocate) {
		return driver.findElement(elementToLocate).getLocation().getX();
	}

	/**
	 * Return the y coordinate of the element in the screen
	 * 
	 * @param elementToLocate
	 * @return
	 */
	private int getElementYPosition(By elementToLocate) {
		return driver.findElement(elementToLocate).getLocation().getY();
	}

	/**
	 * Get the common part of all touch action javascript trigger
	 * 
	 * @param elementToTap
	 * @return
	 */
	private String addCommonScript(By elementToTap) {
		return "window.jQuery(document.elementFromPoint(" + getElementXPosition(elementToTap) + "," + getElementYPosition(elementToTap) + "))";
	}

	/**
	 * Simulate double tap on the element in the screen
	 * 
	 * @param elementToTap
	 */
	public void doubleTap(By elementToTap) {
		String javascriptToExecute = addCommonScript(elementToTap) + DOUBLETAP;
		executeScript(javascriptToExecute);
	}

	/**
	 * Simulate single tap on the element in the screen
	 * 
	 * @param elementToTap
	 */
	public void singleTap(By elementToTap) {
		String javascriptToExecute = "window.jQuery(document.elementFromPoint(" + getElementXPosition(elementToTap) + ","
				+ getElementYPosition(elementToTap) + "))" + SINGLETAP;
		executeScript(javascriptToExecute);
	}

	public void Click(By elementToTap) {
		String javascriptToExecute = "document.elementFromPoint(" + getElementXPosition(elementToTap) + ","
				+ getElementYPosition(elementToTap) + ")";
		((JavascriptExecutor) driver).executeScript("arguments[0].click();",javascriptToExecute);
	}
	
	public void scrollIntoView(By elementToTap) {
		String javascriptToExecute = "document.elementFromPoint(" + getElementXPosition(elementToTap) + ","
				+ getElementYPosition(elementToTap) + ").scrollIntoView()";
		((JavascriptExecutor) driver).executeScript(javascriptToExecute);
	}
	
	public void FindElementByID(String ID, String Value) {
		String javascriptToExecute = "document.getElementById('" + ID + "').value = \"" + Value + "\"";
		executeScript(javascriptToExecute);
	}

	/**
	 * Simulate the swipe action. This will swipe from right to left from the
	 * position of the element
	 * 
	 * @param elementToSwipe
	 */
	public void swipeLeft(By elementToSwipe) {
		String javascriptToExecute = "window.jQuery(document.elementFromPoint(" + getElementXPosition(elementToSwipe) + ","
				+ getElementYPosition(elementToSwipe) + "))" + SWIPELEFT;
		executeScript(javascriptToExecute);
	}

	/**
	 * Simulate the swipe action. This will swipe from left to right from the
	 * position of the element
	 * 
	 * @param elementToSwipe
	 */
	public void swipeRight(By elementToSwipe) {
		String javascriptToExecute = "window.jQuery(document.elementFromPoint(" + getElementXPosition(elementToSwipe) + ","
				+ getElementYPosition(elementToSwipe) + "))" + SWIPERIGHT;
		executeScript(javascriptToExecute);
	}

	/**
	 * Execute the javascript code using javascript driver
	 * 
	 * @param javascriptToExecute
	 */
	private void executeScript(String javascriptToExecute) {

		((JavascriptExecutor) driver).executeScript(javascriptToExecute);
	}

}