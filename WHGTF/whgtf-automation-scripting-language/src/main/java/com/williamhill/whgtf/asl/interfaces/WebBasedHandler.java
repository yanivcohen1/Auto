package com.williamhill.whgtf.asl.interfaces;

// TODO: Auto-generated Javadoc

import org.openqa.selenium.WebElement;

/**
 * Generic DOM navigation and test interface. Implementations should maintain
 * internal pointers to DOM elements - see Selenium implementation :
 * <code>CommonPageObjectModelWebdriver</code><br/>
 * Interface comprises the following method categories :<br/>
 * <font color='blue'>Element navigation</font> :<br/>
 * <code> goToRootElement(), navigateToElementById(), navigateToElementByClass(), navigateToElementByXpath(), 
 * navigateToElementByTag(),
 *  navigateToListElement(), navigateToListFirstElement(), navigateToListLastElement(), navigateToNextListElement(), navigateToPreviousListElement(), navigateToListElementByAnchor(),
 * navigateToListElementByValue(), navigateToListElementByVisibleText(), followLinkToURL(),  stepIntoElement(), stepOutOfElement(), saveCurrentElementPosition(),
 *  restoreElementPosition()</code><br/>
 * <font color='blue'>Element test</font> :<br/>
 * <code>containsClass(), containsId(), containsImage(), containsLinkToURL(), containsText(), hasClass(), hasHref(), hasId(), hasValue(), hasText(), isActive(), isDisplayed(), 
 *  isEnabled(), isHidden(), isOfTagType(), isSelected(), isOptionSelected()</code>
 * <br/>
 * <font color='blue'>Element operations</font> :<br/>
 * <code>getFirstIntegerFromText(), getAllIntegersFromText(), getAttribute(), getCssAttribute(), getListByClass(), getListBySibling(), getListByTag(), getDropdownListById(), getTokenList(), 
 * getListSize(), getSource(), getText(), getTitle(), getURL(), getValue(), clear(), click(), submit()</code>
 * <br/>
 * <font color='blue'>Support operations</font> :<br/>
 * <code>login(), logout(), getUsername(),  getPassword(), goForward(),  goBack(), goTo(), gotoWindow(), 
 * waitForPresenceOfElementById(),waitForVisibilityOfElementById,waitForValueToBePresent  waitForTextToBePresent,getSource(), getWindowIdentifier(), refresh()</code>
 * <br/>
 * 
 * @author John Salmon
 * @version 1.3 December 2014
 */

public interface WebBasedHandler {

	// //////////////////////
	// Element Navigation //
	// //////////////////////

	/**
	 * Navigate to body root element.
	 */
	public boolean navigateToRootElement();

	/**
	 * Navigate to element using WebElement
	 * @param element WebElement
	 * @return false if the passed argument is null, else true
	 */
	boolean navigateToElement(WebElement element);

	/**
	 * From the current element, navigate to the element by identifier.
	 *
	 * @param id element identifier
	 * @return true if element exists and the current element pointer is set
	 */
	public boolean navigateToElementById(String id);

	/**
	 * From the current element, navigate to the element by name identifier.
	 * 
	 * @param name
	 *            element identifier
	 * @return true if element exists and the current element pointer is set to
	 *         this element location, false otherwise and the current pointer
	 *         element is unchanged.
	 * 
	 */
	public boolean navigateToElementByName(String name);

	/**
	 * From the current element, navigate to the label element for the element
	 * that has this identifier.
	 * 
	 * @param id
	 *            Element identifier
	 * 
	 * @return true if element exists and a label for this element exists. The
	 *         current element pointer is set to this label element location,
	 *         false otherwise and the current pointer element is unchanged.
	 */
	public boolean navigateToLabelForId(String id);

	/**
	 * Check for the existence of an element that has an identifier OR class
	 * that meets the search criterea.
	 * 
	 * @param criterea
	 *            identifier or class
	 * @return true if an element exists false otherwise. The current element
	 *         pointer is unchanged.
	 */

	public boolean probeExists(String criterea);

	/**
	 * Check for the existence of an element that has an identifier OR class
	 * that meets the search criterea AND is visible / displayed
	 * 
	 * @param criterea
	 *            identifier or class
	 * @return true if an element exists and is visible false otherwise. The
	 *         current element pointer is unchanged.
	 */
	public boolean probeVisible(String criterea);

	/**
	 * Navigate to element by class.
	 * 
	 * @param className
	 *            : class name
	 * @return true if element exists
	 */
	public boolean navigateToElementByClassName(String className);

	/**
	 * Navigate to element by Css.
	 * 
	 * @param cssSelector
	 *            the css name
	 * @return true if element exists
	 */
	boolean navigateToElementByCSS(String cssSelector);

	/**
	 * Navigate to element by xpath selector.
	 * 
	 * @param xpath
	 *            the xpath
	 * @return true if element exists
	 */
	public boolean navigateToElementByXpath(String xpath);

	/**
	 * Navigate to element by tag.
	 * 
	 * @param tagName
	 *            : html tag name ( 'img', 'li' ... )
	 * @return true if element exists
	 */
	public boolean navigateToElementByTag(String tagName);

    /**
     * Navigate to element by ATTRIBUTE and Value example usage
     *
     * i.e. {@code <input placeholder="Username" type="text" autocapitalize="off" name="username" class="input" data-trk-fieldname="Username">}
     * </br> </br>
     * navigateToElementByAttributeValue("placeholder", "Username")
     *
     * @param attribute
     *            : the attribute
     * @param value
     *            : the value of the attribute
     * @return true if element exists
     */
    boolean navigateToElementByAttributeValue(String attribute, String value);

    /**
	 * Navigate to element by href.
	 * 
	 * @param href
	 * 
	 * @return true if element exists
	 */
	public boolean navigateToElementByHref(String href);

	/**
	 * Step into child element. Current element pointer unaffected if the
	 * element has no child.
	 * 
	 * @return
	 */

	public boolean navigateToChild();

	/**
	 * Step out to parent element. Current element pointer unaffected if the
	 * element has no parent.
	 */
	public boolean navigateToParent();

	// ///////////////////////////
	// List element navigation //
	// ///////////////////////////

	/**
	 * Navigate to first DOM element in list. See getListByClass(),
	 * getListBySibling(), getListByTag()
	 * 
	 * @return true, if successful
	 */
	public boolean navigateToListFirstElement();

	/**
	 * Navigate to last DOM element in list. See getListByClass(),
	 * getListBySibling(), getListByTag()
	 * 
	 * @return true, if successful
	 */
	public boolean navigateToListLastElement();

	/**
	 * Navigate to specified element in list by value attribute. See
	 * getListByClass(), getListBySibling(), getListByTag()
	 * 
	 * @param value
	 *            the value
	 * @return true, if successful false if value not found
	 */
	public boolean navigateToListElementByValue(String value);

	/**
	 * Navigate to specified element in list by displayed text. See
	 * getListByClass(), getListBySibling(), getListByTag(),
	 * getDropdownListById()
	 * 
	 * @param text
	 *            the text
	 * @return true, if successful false if text not found
	 */
	public boolean navigateToListElementByVisibleText(String text);

	/**
	 * Navigate to specified element in list by id. See getListByClass(),
	 * getListBySibling(), getListByTag(), getDropdownListById()
	 * 
	 * @param id
	 *            the id
	 * @return true, if successful false if id not found
	 */
	public boolean navigateToListElementById(String id);

	/**
	 * Navigate to specified element in list by class.
	 * 
	 * @param className
	 *            the class name
	 * @return true, if successful false if text not found
	 */
	public boolean navigateToListElementByClassName(String className);

	/**
	 * Navigate to specified DOM element in list. See getListByClass(),
	 * getListBySibling(), getListByTag(), getDropdownListById()
	 * 
	 * @param index
	 *            the index
	 * @return true, if successful false if list is empty
	 */
	public boolean navigateToListElement(int index);

	/**
	 * Navigate to next DOM element in list. See getListByClass(),
	 * getListBySibling(), getListByTag(), getDropdownListById()
	 * 
	 * @return true, if successful false if list is empty or there are no more
	 *         elements in the list
	 */
	public boolean navigateToNextListElement();

	/**
	 * Navigate to previous DOM element in list. See getListByClass(),
	 * getListBySibling(), getListByTag(), getDropdownListById()
	 * 
	 * @return true, if successful false if list is empty or there is only one
	 *         element in the list
	 */
	public boolean navigateToPreviousListElement();

    /**
     * Navigate to List Item by Attributes and values Method used after build list by.
     *
     * @param attribute
     *            the attributev to check
     * @param value
     *             the value of the attribute
     * @return true, if successful false if list is empty or the list does not
     *         contain an anchor with this identifier.
     */
    boolean navigateToListElementByAttributeValue(String attribute, String value);

    /**
	 * Navigate to List item containing HTML anchor where the list contains
	 * embedded anchors.
	 * 
	 * @param anchorId
	 *            the anchor id
	 * @return true, if successful false if list is empty or the list does not
	 *         contain an anchor with this identifier.
	 */
	public boolean navigateToListElementByAnchorId(String anchorId);

	/**
	 * Navigate to List item containing HTML anchor where the list contains
	 * embedded anchors.
	 * 
	 * @param anchorText
	 *            the anchor text
	 * @return true, if successful false if list is empty or the list does not
	 *         contain an anchor with this text.
	 */
	public boolean navigateToListElementByAnchorText(String anchorText);

	// /////////////////
	// List creation //
	// /////////////////

	/**
	 * Build list by tag.
	 * 
	 * @param tagName
	 *            : html tag name ( 'img', 'li' ... ). See also
	 *            navigateToListElement(), navigateToListFirstElement(),
	 *            navigateToListLastElement()
	 * @return true if at least one child tag found
	 */
	public boolean buildListByTag(String tagName);

	/**
	 * Compile list by class. See also navigateToListElement(),
	 * navigateToListFirstElement(), navigateToListLastElement()
	 * 
	 * @param className
	 *            : class name
	 * @return true if at least one child element with the specified class found
	 */
	public boolean buildListByClassName(String className);

	/**
	 * Compile list by class. See also navigateToListElement(),
	 * navigateToListFirstElement(), navigateToListLastElement()
	 * 
	 * @param xpath
	 *            : xpath
	 * @return true if at least one child element with the specified xpath found
	 */
	public boolean buildListByXpath(String xpath);

	/**
	 * Compile list by name. See also navigateToListElement(),
	 * navigateToListFirstElement(), navigateToListLastElement()
	 * 
	 * @param name
	 *            : name
	 * @return true if at least one child element with the specified class found
	 */
	public boolean buildListByName(String name);

	/**
	 * Build list of siblings.
	 * 
	 * @return true if at least one sibling found.
	 */
	public boolean buildListBySibling();

	/**
	 * Retrieve first HTML Select element from the current element. Internal
	 * list will be populated with the Option elements from the Select element
	 * and can be accessed by navigateToListFirstElement(),
	 * navigateToListLastElement(), navigateToListElement() and clicked for both
	 * single and multiple selections
	 * 
	 * @return true if at least one select element found. false if no select
	 *         element exists as a child of the current element or the current
	 *         element is not a select element.
	 * 
	 */
	public boolean buildDropdownList();

	/**
	 * Retrieve HTML Select element with given identifier. Internal list will be
	 * populated with the Option elements from the Select element and can be
	 * accessed by navigateToListFirstElement(), navigateToListLastElement(),
	 * navigateToListElement() and clicked for both single and multiple
	 * selections
	 * 
	 * @param id
	 *            the id
	 * @return true if at least one select found. false if identifier does not
	 *         exist or does exist but element is not a Select Element.
	 */
	public boolean buildDropdownListById(String id);

	/**
	 * Retrieve HTML Select element with given identifier. Internal list will be
	 * populated with the Option elements from the Select element and can be
	 * accessed by navigateToListFirstElement(), navigateToListLastElement(),
	 * navigateToListElement() and clicked for both single and multiple
	 * selections
	 * 
	 * @param name
	 *            the name
	 * @return true if at least one select found. false if identifier does not
	 *         exist or does exist but element is not a Select Element.
	 */
	public boolean buildDropdownListByName(String name);

	/**
	 * Retrieve HTML Select element with given class. Internal list will be
	 * populated with the Option elements from the Select element and can be
	 * accessed by navigateToListFirstElement(), navigateToListLastElement(),
	 * navigateToListElement() and clicked for both single and multiple
	 * selections
	 * 
	 * @param className
	 *            the class
	 * @return true if at least one select found. false if class does not exist
	 *         or does exist but element is not a Select Element.
	 */
	public boolean buildDropdownListByClassName(String className);

	/*
	 * Select / Dropdown element utilities
	 */
	/**
	 * Select dropdown option by index.
	 * 
	 * @param index
	 *            the index
	 * @return true, if successful
	 */
	public boolean selectDropdownOptionByIndex(int index);

	/**
	 * Select dropdown option by value. Partial Matching is supported as the
	 * internal method uses contains
	 * 
	 * @param value
	 *            the value
	 * @return true, if successful
	 */
	public boolean selectDropdownOptionByValue(String value);

	/**
	 * Select dropdown option by visible text. Partial Matching is supported as
	 * the internal method uses contains
	 * 
	 * @param visibletext
	 *            the visibletext
	 * @return true, if successful
	 */
	public boolean selectDropdownOptionByVisibleText(String visibletext);

	/**
	 * Check dropdown selection by text
	 * 
	 * @param selectedOption
	 *            the visibletext
	 * @return true, if successful or false if there is no option selected or
	 *         the selected option does not match the parameter.
	 */
	public boolean isDropDownOptionSelected(String selectedOption);

	/**
	 * Compare the text contents of the internal list of elements with the
	 * passed string array array in any order. This can be used with all HTML
	 * elements that can contain text : <option>, <label>, <a>, <img>, <li>,
	 * <div>,
	 * <p>
	 * ....
	 * 
	 * @param elements
	 *            the elements
	 * @return true if list matches array false otherwise
	 */

	public boolean listContainsTextElements(String... elements);

	/**
	 * Compare the text contents of the internal list of elements with the text
	 * parameter. This can be used with all HTML elements that can contain text.
	 * 
	 * @param element
	 *            the text element
	 * @return true if the text element is contained in the list
	 */
	public boolean listContainsTextElement(String element);

	/**
	 * Compare the text contents of the internal list of elements with the
	 * passed string array and in the same order. This can be used with all HTML
	 * elements that can contain text : <option>, <label>, <a>, <img>, <li>,
	 * <div>,
	 * <p>
	 * ....
	 * 
	 * @param elements
	 *            the elements
	 * @return true if list matches array false otherwise
	 */
	public boolean listContainsTextElementsInOrder(String... elements);

	// /////////////
	// TOKENISER //
	// /////////////

	/**
	 * Tokenise text of current element. Tokenising "You have bet 50 pounds"
	 * will result in a token array of 5 elements :
	 * [You],[have],[bet],[50],[pounds]
	 * 
	 * @return true if text is tokenisable, false if null or empty
	 */
	public boolean buildTokenListByText();

	/**
	 * Tokenise numbers from text of the current element. Tokenising
	 * "You have bet 50 pounds out of 100" will result in a token array of 2
	 * elementS : [50],[100]
	 *
	 * @return true or false if string is null or empty.
	 */
	public boolean buildTokenListByNumber();

	/**
	 * Navigate to indexed token.
	 *
	 * @param index
	 *            the index
	 * @return true or false if tokens do not exist or index out of range
	 */
	public boolean navigateToToken(int index);

	/**
	 * Navigate to Window
	 *
	 * @param title
	 *            the title
	 * @return true if navigated to Window </br> false if no Window found
	 */
	public boolean navigateToWindowByPartialTitle(String title);

	/**
	 * Navigate to first token.
	 *
	 * @return true or false if tokens do not exist
	 */
	public boolean navigateToFirstToken();

	/**
	 * Navigate to last token.
	 *
	 * @return true or false if tokens do not exist
	 */
	public boolean navigateToLastToken();

	/**
	 * Navigate to next token.
	 *
	 * @return true or false if tokens do not exist or the token index is
	 *         already pointing to the last token.
	 */
	public boolean navigateToNextToken();

	/**
	 * Navigate to previous token.
	 *
	 * @return true or false if tokens do not exist or the token index is
	 *         already pointing to the first token.
	 */
	public boolean navigateToPreviousToken();

	/**
	 * Check if current token contains partial text.
	 * 
	 * @return true if text is found
	 */
	public boolean hasTokenPartialText(String text);

	/**
	 * Check if current token contains precise text.
	 * 
	 * @return true if text is found
	 */
	public boolean hasTokenPreciseText(String text);

	/**
	 * Parsing a date / SmipleDateFormat ( format dd MMM yyyy).
	 * 
	 * @param date
	 *            the date
	 * @return True or False
	 */
	public boolean isDate(String date);

	// ///////////////////////////////
	// Curent document element tests
	// ///////////////////////////////

	/**
	 * Check if element contains a placeholder.
	 * {@code <input type="text" placeholder="First name" id="input-firstName">}
	 * </br> </br> hasPlaceholder() matches true
	 * 
	 * @return true if text present
	 */
	public boolean hasPlaceHolder();

	/**
	 * Check if placeholder contains specified text. The text to be found can be
	 * a subset of element text string example code:
	 * {@code <input type="text" placeholder="First name" id="input-firstName">}
	 * </br> </br> hasPartialPlaceholder("First") matches true
	 * 
	 * @param text
	 *            the text
	 * @return true if text is found
	 */
	public boolean hasPartialPlaceholder(String text);

	/**
	 * Check if element has specified text. The text to be found must
	 * specifically match the element text string.
	 * 
	 * {@code <input type="text" placeholder="First name" id="input-firstName">}
	 * </br> </br> hasPrecisePlaceholder("First name") matches true </br>
	 * hasPrecisePlaceholder("First") matches false
	 * 
	 * @param text
	 *            the text
	 * @return true if text is found
	 */
	public boolean hasPrecisePlaceholder(String text);

	/**
	 * Check if element contains any text. i.e. </br> </br>
	 * {@code<div>Text</div>} match will return <b>true</b>. </br>
	 * {@code<div></div>} match will return <b>false</b> </br> </br> The text to
	 * be found can be anywhere in the element text string
	 * 
	 * @return true if text present
	 */
	public boolean hasAnyText();

	/**
	 * Check if element contains partial text. </br> </br> e.g.
	 * hasPartialText("hello") matching against {@code<div>hello there<\div>}
	 * will match <b>true</b> </br> </br>The text to be found can be a subset of
	 * element text string </br></br> The method can also be used for multiple
	 * String elements: i.e. To check if a Element contains and plus or a minus
	 * use: {@code hasPartialText("+","-"); } (Note once an item is matched it
	 * returns true, irrespective of the other checks)
	 * 
	 * @return true if text is found
	 */
	public boolean hasPartialText(String... textElements);

	/**
	 * Check if element contains partial text. </br> </br> e.g.
	 * hasPartialText("hello") matching against {@code<div>hello there<\div>}
	 * will match <b>true</b> </br> </br>The text to be found can be a subset of
	 * element text string </br></br> The method can also be used for multiple
	 * String elements: i.e. To check if a Element contains and plus or a minus
	 * use: {@code hasPartialText("+","-"); } (Note once an item is matched it
	 * returns true, irrespective of the other checks)
	 * 
	 * @return true if text is found
	 */
	boolean hasPartialText(boolean caseSensitive, String... textElements);

	/**
	 * Check if element has precise text. Exact Match Only. </br> The text to be
	 * found must specifically match the element text string.
	 * 
	 * </br> </br> i.e. hasPreciseText("hello") matching against
	 * {@code<div>hello there<\div>} will match <b>false</b>
	 * 
	 * @param text
	 *            the text
	 * @return true if whole text is found
	 */
	public boolean hasPreciseText(String text);

	/**
	 * Check if element contains specified identifier. The identifier to be
	 * found can be a subset of element identifier
	 * 
	 * @param text
	 *            the value to check
	 * @return true if identifier present
	 */
	public boolean hasPartialId(String text);

	/**
	 * Check if element contains specified url text. The identifier to be
	 * found can be a subset of element identifier
	 *
	 * @param text
	 *            the text to check
	 * @return true if identifier present
	 */
	public boolean hasPartialURL(String text);

	/**
	 * Check if element has specified identifier. The text to be identifier must
	 * specifically match the element identifier.
	 * 
	 * @param id
	 *            the id
	 * @return true if identifier present
	 */
	public boolean hasPreciseId(String id);

	/**
	 * Check if element contains specified class in its class list.
	 * 
	 * @param className
	 *            the class name
	 * @return true if class present
	 */
	public boolean containsClassName(String className);

	/**
	 * Check if element is of the specified class.
	 * 
	 * @param className
	 *            the class name
	 * @return true if class present
	 */
	public boolean hasClass(String className);

	/**
	 * Checks for specified value.
	 * 
	 * @param value
	 *            the value
	 * @return true value present and matches.
	 */
	public boolean hasValue(String value);

	/**
	 * Checks for specified hyperlink.
	 * 
	 * @param href
	 *            the href
	 * @return true if this hyperlink present
	 */
	public boolean hasHref(String href);

	/**
	 * Checks for hyperlink.
	 * 
	 * @return true if any hyperlink present
	 */
	public boolean hasHref();

	/**
	 * Checks type attribute.
	 * 
	 * @param type
	 *            the type
	 * @return true if any hyperlink present
	 */
	public boolean hasType(String type);

	/**
	 * Checks if element is displayed.
	 * 
	 * @return true if element displayed
	 */
	public boolean isDisplayed();

	/**
	 * Checks if element is hidden.
	 * 
	 * @return true if element hidden
	 */
	public boolean isHidden();

	/**
	 * Checks element is active.
	 * 
	 * @return true if active
	 */
	public boolean isActive();

	/**
	 * Checks element has text of specified hexademical colour.
	 * 
	 * @param hexColour
	 *            the hex colour
	 * @return true if text has specified colour.
	 */
	public boolean hasTextColour(String hexColour);

	/**
	 * Checks element has background of specified hexademical colour.
	 * 
	 * @param hexColour
	 *            the hex colour
	 * @return true if background has specified colour.
	 */
	public boolean hasBackgroundColour(String hexColour);

	/**
	 * Checks element has border of specified hexademical colour.
	 * 
	 * @param hexColour
	 *            the hex colour
	 * @return true if border has specified colour.
	 */
	public boolean hasBorderColour(String hexColour);

	/**
	 * Checks if element of specified HTML tag type.
	 * 
	 * @param tag
	 *            : tag name
	 * @return true, if element of specified tag type
	 */
	public boolean isOfTagType(String tag);

	/**
	 * Checks if element is enabled i.e. can receive focus.
	 * 
	 * @return true if element is enabled
	 */
	public boolean isEnabled();

	/**
	 * Checks element is disabled / non-selectable.
	 * 
	 * @return true if disabled
	 */
	public boolean isDisabled();

	/**
	 * Checks if element is selected. Checkboxes, options in select and radio
	 * buttons.
	 * 
	 * @return true if element is selected
	 */
	public boolean isSelected();

	/**
	 * Checks if drop-down option with selected test is selected. Dropdown list
	 * must have previously been populated with getDropdownListById()
	 * 
	 * @param selectedText
	 *            the selected text
	 * @return true if element is selected
	 */
	public boolean isOptionSelected(String selectedText);

	/**
	 * Contains image reference. Either exact or as a subset i.e. 'image.gif' =
	 * 'c:/images/image.gif' = true.
	 * 
	 * @param imagePath
	 * @return true if image found false if not found or the current element is
	 *         not an <IMG> tag
	 */
	public boolean hasPartialImagePath(String imagePath);

	/**
	 * Checks if drop-down option with selected test is selected. Dropdown list
	 * must have previously been populated with getDropdownListById()
	 * 
	 * @return true if element is selected
	 */

	// ////////////////////////////////////
	// Current document element operations
	// ////////////////////////////////////

	// Type in key sequence to current element. If this is not a HTML text
	// or textarea field an exception will be thrown.

	/**
	 * Sets the text.
	 * 
	 * @param keys
	 *            the text to enter
	 * @throws IllegalArgumentException
	 *             the illegal argument exception
	 */
	public boolean typeIn(CharSequence... keys);

	/**
	 * Type in specified number of random characters into current element.
	 * 
	 * @param numberOfCharacters
	 *            the number of characters
	 * @throws IllegalArgumentException
	 *             the illegal argument exception
	 */
	public boolean typeInRandomCharacters(int numberOfCharacters);

	// Get contents of HTML 'value' attribute
	/**
	 * Type in specified number of random numbers into current element.
	 * 
	 * @param numberOfNumbers
	 *            the number of numbers
	 */
	public boolean typeInRandomNumbers(int numberOfNumbers);

	/**
	 * Clear the text or textarea. Throws an exception if the current element
	 * not an input field.
	 */
	public boolean clear();

	/**
	 * If the current element is a form or has a form as parent, submit it.
	 * Otherwise throw an exception.
	 * 
	 * @return true if submission successful or false if element is not, or
	 *         within, a FORM
	 * 
	 */
	public boolean submit();

	/**
	 * Click on the current element.
	 * 
	 * @return false if no Element Present
	 */
	public boolean click();

	/**
	 * Navigate the current Alert and Accept
	 * 
	 * @return false if no Alert Present
	 * 
	 */
	public boolean clickAlertAccept();

	/**
	 * Navigate the current Alert and Dismiss
	 * 
	 * @return false if no Alert Present
	 * 
	 */
	public boolean clickAlertDismiss();

	/**
	 * Click and hold a specific amount of time in milliseconds before release
	 * @param duration in milliseconds
	 * @return false if no Element Present
	 */
	public boolean clickAndHold(int duration);

	/**
	 * Double click.
	 * 
	 * @return false if no Element Present
	 */
	public boolean doubleClick();

	/**
	 * Hover over element.
	 * 
	 * @return false if no Element Present
	 */
	public boolean hover();

	// /////////////////////
	// General operations
	// /////////////////////

	// Save / restore current document element.
	/**
	 * Save current element position. Enables users to navigate elsewhere and
	 * then restore saved position.
	 */
	public boolean saveCurrentElementPosition();


	// Throw exception if not previously saved

	boolean saveCurrentElementPosition(String identifier);

	/**
	 * Restore element position.
	 * 
	 * @throws IllegalStateException
	 *             if the element has not been previously stored
	 */
	public boolean restoreElementPosition();

	// Throw exception if not previously saved with this identifier
	/**
	 * Restore element position.
	 * 
	 * @param identifier
	 *            the identifier
	 * @throws IllegalStateException
	 *             if the element has not been previously stored with this
	 *             identifier
	 */
	public boolean restoreElementPosition(String identifier);

	// From anywhere to anywhere
	/**
	 * Navigate to - renamed from goto
	 * 
	 * @param url
	 *            the url
	 */
	public boolean navigateToPage(String url);

	// Check for anchor with this href from current element including from root
	// element ( e.g. check page for
	// gambleaware link )
	/**
	 * Contains link to url.
	 * 
	 * @param href
	 *            the href
	 * @return true, if successful
	 */
	public boolean hasLinkToURL(String href);

	// Locate and follow link - must exist. See also goTo()
	/**
	 * Follow link to url.
	 * 
	 * @param link
	 *            the link
	 * @return true, if successful
	 */
	public boolean followLinkToURL(String link);

	// Refresh current page
	/**
	 * Refresh.
	 */
	public boolean refresh();

	/**
	 * Allows a check to be made against the title
	 * 
	 * @return true, if successful
	 */
	public boolean titleHasPartialText(String text);

	// Move to window by identifier
	/**
	 * Goto window.
	 * 
	 * @param windowIdentifier
	 *            the window identifier
	 */
	public boolean navigateToWindow(String windowIdentifier);

	/**
	 * Navigate Backwards
	 * 
	 */
	public boolean navigateBack();

	/**
	 * Navigate Backwards
	 * 
	 */
	public boolean navigateForward();

	/**
	 * Goto other window. Move to child window from parent or vise-versa
	 * 
	 * @return true, if successful
	 */
	public boolean navigateToOtherWindow();

	/**
	 * Switch to IFrame following activation and focus.
	 * 
	 * @return true if successful, false if there is no IFrame
	 */
	public boolean navigateToActivateFrame();

	/**
	 * Switch to IFrame by Id
	 * 
	 * @param id
	 *            The Id
	 * @return true if successful, false if there is no such IFrame
	 */
	public boolean navigateToFrameById(String id);

	/**
	 * Switch to IFrame by name
	 * 
	 * @param id
	 *            The Id
	 * @return true if successful, false if there is no such IFrame
	 */
	public boolean navigateToFrameByName(String name);

	/**
	 * Switch to IFrame by className
	 * 
	 * @param className
	 *            The className
	 * @return true if successful, false if there is no such IFrame
	 */
	public boolean navigateToFrameByClass(String className);

	/**
	 * Switch to IFrame by xpath
	 * 
	 * @param xpath
	 *            The xpath
	 * @return true if successful, false if there is no such IFrame
	 */
	public boolean navigateToFrameByXpath(String xpath);

	/**
	 * Switch to IFrame by cssSelector
	 * 
	 * @param cssSelector
	 *            The cssSelector
	 * @return true if successful, false if there is no such IFrame
	 */
	public boolean navigateToFrameByCss(String cssSelector);

	/**
	 * Switch to parent window from child window or IFrame. Will have no effect
	 * if only one window open
	 * 
	 * @return true
	 */
	public boolean returnToDefaultWindow();

	/**
	 * Delete cookies.
	 */
	public boolean deleteCookies();

	/**
	 * Verify Cookie contains value.
	 */
	public boolean hasPartialCookieValue(String cookieName, String cookieValue);

	/**
	 * Verify Cookie equals value.
	 */
	public boolean hasPreciseCookieValue(String cookieName, String cookieValue);

	// Wait for presence of this DOM element
	/**
	 * An method for checking that an element is present on the DOM of a page.
	 * This does not necessarily mean that the element is visible.
	 * 
	 * @param id
	 *            the id
	 */
	// Wait for presence of this DOM element
	public boolean waitForPresenceOfElementById(String id);

	/**
	 * An method for checking that an element is present on the DOM of a page.
	 * This does not necessarily mean that the element is visible.
	 * 
	 * @param cssSelector
	 *            the css selector
	 */
	// Wait for presence of this DOM element
	public boolean waitForPresenceOfElementByCss(String cssSelector);

	// Wait for presence of this DOM element
	/**
	 * An method for checking that an element is present on the DOM of a page.
	 * This does not necessarily mean that the element is visible.
	 * 
	 * @param className
	 *            element identifier
	 */
	public boolean waitForPresenceOfElementByClassName(String className);

	// Wait for Visibility of this DOM element
	/**
	 * An method for checking that an element is present on the DOM of a page
	 * and visible. Visibility means that the element is not only displayed but
	 * also has a height and width that is greater than 0.
	 * 
	 * @param id
	 *            the id
	 * @return true, if successful
	 */
	public boolean waitForVisibilityOfElementById(String id);

	// Wait for presence of Value and text in current element
	/**
	 * A method for checking if the given text is present in the current
	 * elements value attribute.
	 * 
	 * @param text
	 *            the text
	 * @return True if Text is found
	 */
	public boolean waitForValueToBePresent(String text);


    /**
     * Workaround for DOM Releading unexpectantly which forces ASL and Webdriver currentElement to throw
     * a 'Stale Element' Exception
     * </n>
     * Handles {@link org.openqa.selenium.StaleElementReferenceException} and {@link org.openqa.selenium.NoSuchElementException}
     * Should be used in the Test Layer as a standalone call - a substitute to handle this implicitly will be worked on
     *
     * @param cssSelector
     *            the text
     * @return True if Element found
     */
    void waitForStaleElementByCss(String cssSelector);

    /**
	 * An method for checking if the given text is present in the current
	 * element.
	 * 
	 * @param text
	 *            the text
	 * @return True if Text is found
	 */
	public boolean waitForTextToBePresentInElement(String text);

	/**
	 * Navigate to element by partial Link Text.
	 * 
	 * @param tagName
	 *            the tag name
	 * @return true if element exists
	 */
	public boolean navigateToElementByPartialLinkText(String tagName);

	/**
	 * Navigate to element by partial id.
	 * 
	 * @param id
	 *            the id
	 * @return true, if successful
	 */
	public boolean navigateToElementByPartialId(String id);

	/**
	 * Navigate to list element by partial id.
	 * 
	 * @param id
	 *            the id
	 * @return true if successful
	 */
	public boolean navigateToListElementByPartialId(String id);

	/**
	 * Builds a list by partial id.
	 * 
	 * @param id
	 *            the id
	 * @return the list by partial id
	 */
	public boolean buildListByPartialId(String id);

	/**
	 * Builds a list by LinkText.
	 * 
	 * @param linkText
	 *            the linkText
	 * @return the list by partial id
	 */
	public boolean buildListByLinkText(String linkText);

	/**
	 * Builds a list by PartialLinkText.
	 * 
	 * @param partialLinkText
	 *            the PartialLinkText
	 * @return the list by PartialLinkText
	 */
	public boolean buildListByPartialLinkText(String partialLinkText);

	/**
	 * @param partialLinkText
	 *            the PartialLinkText
	 * Builds the list with immediate children of current element. The resulting
	 * list may contain different element types e.g. {@code 
	 * <form id="parent">
	 *    <input id="child1"/>
	 *    <button id="child2"/>
	 *    <select id="child3"/>
	 *  </form>   
	 * }
	 * 
	 * @return the list by children
	 */
	public boolean buildListByChildren();

	/**
	 * Gets the list by css.
	 * 
	 * @param css
	 *            the css
	 * @return the list by css
	 */
	public boolean buildListByCSS(String css);

	// Diagnostic functions
	/**
	 * Prints the list.
	 */
	public boolean printListToDebug();

	/**
	 * List has size.
	 * 
	 * @param size
	 *            the size
	 * @return true, if successful
	 */
	public boolean listHasSize(int size);

	/**
	 * List empty.
	 * 
	 * @return true, if successful
	 */
	public boolean listEmpty();

	/**
	 * Execute Javascript, with optional argument list, in current page context
	 * 
	 * @param script
	 *            : text
	 * @param args
	 *            : variable size object list consisting of Number, Boolean,
	 *            String, WebElement, List or any combination thereof
	 * @return Number, Boolean, String, WebElement, List or any combination
	 *         thereof Null if argument list invalid
	 */
	public <T> T executeScript(String script, Object... args);

	public <T> T executeScriptOnCurrentElement(String script);

	public <T> T executeScript(String script);

	public <T> T executeAsyncScript(String script, Object... args);

	public <T> T executeAsyncScript(String script);

	// Wait for Visibility of this DOM element
	/**
	 * Wait for DOM element to load. Can be used in conjunction with
	 * {@link #setWaitTime(int)} to control individual calls
	 * 
	 * @param className
	 *            the className
	 * @return true, if successful
	 */
	public boolean waitForVisibilityOfElementByClassName(String className);

	/**
	 * Wait for DOM element to load. Can be used in conjunction with
	 * {@link #setWaitTime(int)} to control individual calls
	 * 
	 * @param name
	 *            the name
	 * @return true, if successful
	 */
	public boolean waitForVisibilityOfElementByName(String name);

	// Wait for Visibility of this DOM element
	/**
	 * Wait for DOM element to load. Can be used in conjunction with
	 * {@link #setWaitTime(int)} to control individual calls
	 * 
	 * @param css
	 *            the css
	 * @return true, if successful
	 */
	public boolean waitForVisibilityOfElementByCss(String css);

	// Wait for Visibility of this DOM element
	/**
	 * Wait for DOM element to load. Can be used in conjunction with
	 * {@link #setWaitTime(int)} to control individual calls
	 * 
	 * @param xpath
	 *            the xpath
	 * @return true, if successful
	 */
	public boolean waitForVisibilityOfElementByXpath(String xpath);

	// Wait for Invisibility of this DOM element
	/**
	 * Wait for DOM element to be invisible. Can be used in conjunction with
	 * {@link #setWaitTime(int)} to control individual calls
	 * 
	 * @param id
	 *            the id
	 * @return true, if successful
	 */
	public boolean waitForInvisibilityOfElementById(String id);

	// Wait for Invisibility of this DOM element
	/**
	 * Wait for DOM element to be invisible. Can be used in conjunction with
	 * {@link #setWaitTime(int)} to control individual calls
	 * 
	 * @param className
	 *            the className
	 * @return true, if successful
	 */
	public boolean waitForInvisibilityOfElementByClassName(String className);

	// Wait for Invisibility of this DOM element
	/**
	 * Wait for DOM element to be invisible. Can be used in conjunction with
	 * {@link #setWaitTime(int)} to control individual calls
	 * 
	 * @param css
	 *            the css
	 * @return true, if successful
	 */
	public boolean waitForInvisibilityOfElementByCss(String css);

	// Wait for Invisibility of this DOM element
	/**
	 * Wait for DOM element to be invisible. Can be used in conjunction with
	 * {@link #setWaitTime(int)} to control individual calls
	 * 
	 * @param xpath
	 *            the xpath
	 * @return true, if successful
	 */
	public boolean waitForInvisibilityOfElementByXpath(String xpath);

	// //////////////////
	// TABLE HANDLERS //
	// //////////////////

	/**
	 * Build table array from first-found child
	 * <table>
	 * element from the current element
	 * 
	 * @return true if table found, false otherwise.
	 */
	public boolean buildTableByTag();

	/**
	 * Build table array from first-found child
	 * <table>
	 * element that matches the identifier parameter
	 * 
	 * @return true if table found, false otherwise.
	 */
	public boolean buildTableById(String id);

	/**
	 * Build table array from first-found child
	 * <table>
	 * element that matches the class parameter
	 * 
	 * @return true if table found, false otherwise.
	 */
	public boolean buildTableByClassName(String tableClass);

	/**
	 * Navigate to table array element at the row and column index
	 * 
	 * @return true if table elemnt index found, false if the indexes out of
	 *         bounds OR the table does not exist.
	 */
	public boolean navigateToTableElement(int row, int column);

	/**
	 * Wait for 20 seconds to check for FrameAvaibale if true SwitchFrame
	 * 
	 * @return true if true SwitchFrame
	 */
	boolean waitForFrameByIdToBeAvailableAndSwitch(String frameId);

	/**
	 * Stores the current list element value for comparison at a later time
	 * 
	 * @param index
	 * @return true if listElement element index exists
	 */
	boolean storeListTextValue(int index);

	/**
	 * 
	 * @return the stored list text value if it has been saved previously
	 * 
	 */
	String getStoredListTextValue();

	/**
	 * @deprecated use
	 *             {@link com.williamhill.whgtf.asl.AutomationScriptingLanguage.ManageBrowser#setBrowserDimensions(int, int)}
	 *             Sets the Browser dimensions
	 * 
	 *             Sets the browsers dimensions of the existing browser width
	 *             and height This feature will work well for responsive design
	 *             testing Tip: Switch the width and height params to mimic
	 *             landscape and portrait modes
	 *
	 * @param width
	 *            the width
	 * @param height
	 *            the height
	 */
	@Deprecated
	void setBrowserDimensions(int width, int height);

	/**
	 * Check HTML page title
	 * 
	 * @param title
	 *            the title
	 * @return true, if title found anywhere in HTML page title
	 */
	public abstract boolean hasPartialPageTitle(String title);

	/**
	 * Check HTML page title
	 * 
	 * @param title
	 *            the title
	 * @return true, if precise title found in HTML page title
	 */
	public abstract boolean hasPrecisePageTitle(String title);

	// ////////////////////
	// PUBLIC ACCESSORS //
	// ////////////////////

	// Get text from html elements.

	/**
	 * Return the text from current element. For input elements use getValue()
	 * 
	 * @return element text
	 */
	public abstract String getText();

	// Get contents of HTML 'value' attribute

	/**
	 * Gets the contents if the HTML 'value' attribute.
	 * 
	 * @return the value
	 */
	public abstract String getValue();

	/**
	 * // Return value of specified attribute.
	 * 
	 * @param attribute
	 *            the attribute
	 * @return the attribute value
	 */
	public abstract String getAttribute(String attribute);

	/**
	 * Gets the css attribute.
	 * 
	 * @param attribute
	 *            the attribute
	 * @return the css attribute value
	 */
	public String getCssAttribute(String attribute);

	/**
	 * Navigates to the head element, giving access to tags such as title, base,
	 * script etc
	 * 
	 * @return
	 */
	public boolean navigateToHeadElement();

	/**
	 * Checks if the specified attribute exists for the current element
	 * 
	 * @param attributeName
	 * @return true if attribute exists for current element
	 */
	public boolean hasAttribute(String attributeName);

	/**
	 * Checks if the value exists within the specified attribute
	 * 
	 * @param attributeName
	 * @param attributeValue
	 * @return
	 */
	public boolean hasAttributeValue(String attributeName, String attributeValue);

	/**
	 * Sets the timeout for webdriver wait function allowing you to overide for
	 * specific methods
	 * 
	 * @param seconds
	 * @return
	 */
	public boolean setWaitTime(int seconds);

	/**
	 * 
	 * @param cookieName
	 * @param cookieValue
	 * @return true if cookie is set correctly
	 */
	public boolean setCookie(String cookieName, String cookieValue);

	/**
	 * 
	 * @return true if all cookies cleared
	 */
	public boolean clearCookies();

	/**
	 * 
	 * @param cookieName
	 * @return true if cookie is deleted
	 */
	public boolean clearCookie(String cookieName);

	/**
	 * Webdriver wait for Element to By Visible By..
	 * Uses explicitWaitTime property in ASL
	 * @param xpath
	 * @return true
	 */
	boolean waitForVisibilityOfElementByXPath(String xpath);

	/**
	 * Webdriver wait for Element to By Clickable By..
	 * Uses explicitWaitTime property in ASL
	 * @param id
	 * @return true
	 */
	boolean waitForElementToBeClickableById(String id);

	/**
	 * Webdriver wait for Element to By Clickable By..
	 * Uses explicitWaitTime property in ASL
	 * @param className
	 * @return true
	 */
	boolean waitForElementToBeClickableByClassName(String className);

	/**
	 * Webdriver wait for Element to By Clickable By..
	 * Uses explicitWaitTime property in ASL
	 * @param css
	 * @return true
	 */
	boolean waitForElementToBeClickableByCss(String css);

	/**
	 * Webdriver wait for Element to By Clickable By..
	 * Uses explicitWaitTime property in ASL
	 * @param xpath
	 * @return true
	 */
	boolean waitForElementToBeClickableByXPath(String xpath);

	/**
	 * Webdriver wait for Element to By Clickable By..
	 * Uses explicitWaitTime property in ASL
	 * @param name
	 * @return true
	 */
	boolean waitForElementToBeClickableByName(String name);

	/**
	 * Webdriver wait for Element to By Clickable By..
	 * Uses explicitWaitTime property in ASL
	 * @param linkText
	 * @return true
	 */
	boolean waitForElementToBeClickableByPartialLinkText(String linkText);

	/**
	 * Webdriver wait for Element to By Clickable By..
	 * Uses explicitWaitTime property in ASL
	 * @param tag
	 * @return true
	 */
	boolean waitForElementToBeClickableByTagName(String tag);

    /**
     * Start Device for Appium Testing - Is used in conjunction with the argument -Ddevice
     * There is a property file held in src/test/resources/devices.mobile/ that holds all the main devices as key/pair
     * example usage -Ddevice=Galaxys4
     *
     * @return true if device successfuly setup
     * @throws exception on error
     */

	boolean scrollToElementByText(String value);

	boolean scrollToElementByExactText(String value);

	boolean scrollToElementByCSS(String cssSelector);

	boolean scrollToElementById(String id);

	boolean scrollToElementByName(String name);

	boolean scrollToElementByClassName(String className);

	boolean scrollToElementByXpath(String xpath);

	boolean scrollToElementByAttribute(String attribute, String value);

	boolean scrollToElementByTag(String tag, String value);

	/**
	 * Select all the text or textarea. 
	 * Sends the keys Ctrl + a
	 */
	public boolean selectAll();
	
	/**
	 * Copies the selected the text or textarea. 
	 * Sends the keys Ctrl + c
	 */
	public boolean copySelectedTextToClipboard();
	
	/**
	 * Pastes the copied the text or textarea. 
	 * Sends the keys Ctrl + v
	 */
	public boolean paste();
}
