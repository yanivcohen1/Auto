package com.williamhill.whgtf.asl.interfaces;

import org.sikuli.script.Key;

/**
 * Generic Interface for Image Based Navigation </br>
 * </br>
 * <font color='blue'>Available Methods</font> :<br/> </br> <code>
 * <b>containsTextAPI</b>(String filePath, String text), <b>inputText</b>(String
 * filePath, String text), <b>findImage</b>(String filePath),
 * <b>findImageCaptureImageToRight</b>(String filePath, String savedImagePath),
 * <b>findImageClick</b>(String filePath), <b>findImageClickToLeft</b>(String
 * filePath), <b>findImageDoubleClick</b>(String filePath),
 * <b>findImageTypeOnCentre</b>(String filePath),
 * <b>findImageTypeOnBottom</b>(String filePath),
 * <b>findImageTypeToLeft</b>(String filePath),
 * <b>findImageTypeToRight</b>(String filePath),
 * <b>swipeBetweenImages</b>(String startPointImagePath, String
 * endPointImagePath), <b>findImageTypeToRight</b>(String filePath, String text)
 * <b>waitForImage</b>(String filePath, String text) </code>
 * 
 * @author Ben Kirby / Iain Macdonald
 * @version 1.0 December 2014
 * 
 */
public interface ImageBasedHandler {

	/**
	 * From the current screen click the image defined in the filepath
	 * 
	 * @author Iain Macdonald
	 *
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @return true if element exists and is clicked
	 */
	public boolean findImageClick(String filePath);

	/**
	 * From the current screen double-click the image defined in the filepath
	 * 
	 * @author Iain Macdonald
	 *
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @return true if element exists and is clicked
	 */
	public boolean findImageDoubleClick(String filePath);

	/**
	 * From the current screen find and image click and type a string param
	 * 
	 * @author Ben Kirby
	 * 
	 * @param filePath
	 *           Can be an individual file or a directory of images
	 * @param text
	 *            Text to enter in the
	 * @return true if element is clicked
	 */
	public boolean inputText(String filePath, String text);

	/**
	 * From the current screen Navigate to an image by filepath
	 * 
	 * @author Ben Kirby
	 * 
	 * @param filePath
	 *           Can be an individual file or a directory of images
	 * @return true if element appears
	 */
	public boolean findImage(String filePath);

	/**
	 * From the current screen wait for an image to be present
	 * 
	 * @author Ben Kirby
	 * 
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @return true if element appears
	 */
	public boolean waitForImage(String... filePath);

	/**
	 * From the current screen get the Image to the Right
	 * 
	 * @author Ben Kirby
	 * 
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @param savedImagePath
	 *            imagePath of saved Image
	 * @return true if element appears
	 */
	public boolean findImageCaptureImageToRight(String filePath, String savedImagePath);

	/**
	 * From the current screen get the Image to the Right
	 *
	 * @author Ben Kirby
	 *
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @param savedImagePath
	 *            imagePath of saved Image
	 * @param pixelSize
	 * 				Size of the image to be captured
	 * @return true if element appears
	 */
	public boolean findImageCaptureImageToRight(String filePath, String savedImagePath, int pixelSize);
	
	/**
     * From the current screen get the Image to the Left
     * 
     * @author Tony Lawson
     * 
     * @param filePath
     *            Can be an individual file or a directory of images
     * @param savedImagePath
     *            imagePath of saved Image
     * @return true if element appears
     */
    public boolean findImageCaptureImageToLeft(String filePath, String savedImagePath);

	/**
	 * From the current screen get the Image to the Left
	 *
	 * @author Tony Lawson
	 *
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @param savedImagePath
	 *            imagePath of saved Image
	 * @param pixelSize
	 * 				Size of the image to be captured
	 * @return true if element appears
	 */
	public boolean findImageCaptureImageToLeft(String filePath, String savedImagePath, int pixelSize);
    
    /**
     * From the current screen get the Image above
     * 
     * @author Tony Lawson
     * 
     * @param filePath
     *            Can be an individual file or a directory of images
     * @param savedImagePath
     *            imagePath of saved Image
     * @return true if element appears
     */
    public boolean findImageCaptureImageAbove(String filePath, String savedImagePath);

	/**
	 * From the current screen get the Image above
	 *
	 * @author Tony Lawson
	 *
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @param savedImagePath
	 *            imagePath of saved Image
	 * @param pixelSize
	 * 				Size of the image to be captured
	 * @return true if element appears
	 */
	public boolean findImageCaptureImageAbove(String filePath, String savedImagePath, int pixelSize);
    
    /**
     * From the current screen get the Image to the below
     * 
     * @author Tony Lawson
     * 
     * @param filePath
     *            Can be an individual file or a directory of images
     * @param savedImagePath
     *            imagePath of saved Image
     * @return true if element appears
     */
    public boolean findImageCaptureImageBelow(String filePath, String savedImagePath);

	/**
	 * From the current screen get the Image to the below
	 *
	 * @author Tony Lawson
	 *
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @param savedImagePath
	 *            imagePath of saved Image
	 * @param pixelSize
	 * 				Size of the image to be captured
	 * @return true if element appears
	 */
	public boolean findImageCaptureImageBelow(String filePath, String savedImagePath, int pixelSize);

	/**
	 * From the current screen navigate to image and type text to the right.
	 * 
	 * @author Iain Macdonald
	 * 
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @param text
	 *            Text to type
	 * @return true if element appears
	 */
	public boolean findImageTypeToRight(String filePath, String text);

	/**
	 * From the current screen navigate to image and type text to the left.
	 * 
	 * @author Iain Macdonald
	 * 
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @param text
	 *            Text to type
	 * @return true if element appears
	 */
	public boolean findImageTypeToLeft(String filePath, String text);

	/**
	 * From the current screen navigate to image and click to the left.
	 * 
	 * @author Iain Macdonald
	 * 
	 * @param filePath
	 *           Can be an individual file or a directory of images
	 * @return true if element appears
	 */
	public boolean findImageClickToLeft(String filePath);

	/**
	 * From the current screen navigate to image and click to the left.
	 * 
	 * @author Iain Macdonald
	 * 
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @return true if element appears
	 */
	boolean findImageClickToRight(String filePath);

	/**
	 * From the current screen navigate to image and type text underneath.
	 * 
	 * @author Iain Macdonald
	 * 
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @param text
	 *            Text to type
	 * @return true if element appears
	 */
	public boolean findImageTypeToBottom(String filePath, String text);

	/**
	 * From the current screen navigate to image and type text at Centre point.
	 * 
	 * @author Ben Kirby
	 * 
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @param text
	 *            Text to type
	 * @return true if element appears
	 */
	public boolean findImageTypeOnCentre(String filePath, String text);

	/**
	 * From the current screen an image is checked against the Abbyy API for its
	 * Text Value This is Matched against the string param
	 * 
	 * @author Iain Macdonald
	 *
	 * @param filePath
	 *            Can be an individual file or a directory of images
	 * @param text
	 *            Text to enter in the
	 * @return true if element text matches
	 */
	public boolean findPartialTextInImage(String filePath, String text) throws Exception;

	/**
	 * From the current screen an image is checked against the Abbyy API for its
	 * Text Value This is Matched against the string param
	 * 
	 * @author Iain Macdonald
	 *
	 * @param filePath
	 *           Can be an individual file or a directory of images
	 * @param text
	 *            Text to enter in the
	 * @return true if element text matches
	 */
	public boolean findPreciseTextInImage(String filePath, String text) throws Exception;

	/**
	 * From the current screen create a swipe/click and drag motion relative
	 * from Img1 to Img2
	 * 
	 * @author Ben Kirby
	 *
	 * @param startPointImagePath
	 * @param endPointImagePath
	 * @return true if element exists and is clicked
	 */
	public boolean swipeBetweenImages(String startPointImagePath, String endPointImagePath);

	/**
	 * @author Ben Kirby
	 * 
	 * @param imagePath
	 * @param iterations
	 * @return true if image is found
	 */
	public boolean findImageUsingScrollDown(String imagePath, int iterations);

	/**
	 * @author Ben Kirby
	 * 
	 * @param imagePath
	 * @param iterations
	 * @return true if image is found
	 */
	public boolean findImageUsingScrollUp(String imagePath, int iterations);

	/**
	 * @author Ben Kirby
	 * 
	 * @param imagePath
	 * @param iterations
	 * @return true if image is found
	 */
	public boolean findImageUsingScrollRight(String imagePath, int iterations);

	/**
	 * From the existing Screen press a set of generic shortcut keys i.e. SPACE,
	 * F12, ESC
	 * 
	 * Example usage: findPressButton(Key.F12) or findPressButton(Key.SPACE)
	 * 
	 * @author Iain Macdonald
	 * 
	 * @param specialKey
	 *            - to be used with the Key class {@link Key}
	 *
	 * @return true if button is pressed
	 */
	boolean findPressButton(String specialKey);

	/**
	 * 
	 * @param minSimilarity
	 * @return true if value is set with no errors
	 */
	boolean setMinimumSimilarityForImage(double minSimilarity);

	String getText(String filePath);

}
