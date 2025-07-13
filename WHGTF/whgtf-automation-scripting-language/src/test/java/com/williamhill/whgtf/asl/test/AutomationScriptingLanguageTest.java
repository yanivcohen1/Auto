package com.williamhill.whgtf.asl.test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.mockito.Matchers.anyObject;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriver.Navigation;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.UnexpectedTagNameException;

import com.williamhill.whgtf.asl.AutomationScriptingLanguage;

@RunWith(MockitoJUnitRunner.class)
public class AutomationScriptingLanguageTest {

	// Interface
	private static WebElement webElement = mock(WebElement.class);
	private static Navigation navigation = mock(Navigation.class);

	private static List<WebElement> elementlistNull;
	private static List<WebElement> elementListNoentries;
	private static List<WebElement> elementListOneEntry;
	private static Map<String, WebElement> storedElementMapNull;
	private static Map<String, WebElement> storedElementMapNoentries;

	@Mock
	WebDriver driver = mock(WebDriver.class);
	@Mock
	WebElement currentElement = mock(WebElement.class);
	@Mock
	List<WebElement> elementList = mock(List.class);
	@Mock
	Map<String, WebElement> storedElementMap = mock(Map.class);

	@InjectMocks
	AutomationScriptingLanguage commonPageObjectModelWebdriver = new AutomationScriptingLanguage(
			"test");

	@Before
	public void setUp() throws Exception {

		elementlistNull = null;
		elementListNoentries = new ArrayList<WebElement>();
		elementListOneEntry = new ArrayList<WebElement>();
		elementListOneEntry.add(webElement);

		storedElementMapNull = null;
		storedElementMapNoentries = new HashMap<String, WebElement>();

	}

	@Ignore
	@Test
	public void testGetElementById() {
		when(currentElement.findElement(By.id(anyString())))
				.thenReturn(webElement).thenReturn(webElement)
				.thenThrow(new NoSuchElementException(null));

		//assertTrue(commonPageObjectModelWebdriver.getElementById("element") instanceof WebElement);
		//assertNull(commonPageObjectModelWebdriver.getElementById(""));
		//assertNull(commonPageObjectModelWebdriver.getElementById(""));
	}

	@Ignore
	@Test
	public void testGetElementByClass() {
		when(currentElement.findElement(By.className(anyString()))).thenReturn(
				webElement).thenThrow(new NoSuchElementException(null));

		// assertTrue(commonPageObjectModelWebdriver.getElementByClass("class") instanceof WebElement);
		// assertNull(commonPageObjectModelWebdriver.getElementByClass(""));
		// assertNull(commonPageObjectModelWebdriver.getElementByClass(null));
		
	}

	@Test
	public void testGetListByTag() {
		when(currentElement.findElements(By.tagName(anyString())))
				.thenReturn(elementListNoentries)
				.thenReturn(elementListOneEntry)
				.thenReturn(elementlistNull);
		

		assertFalse(commonPageObjectModelWebdriver.buildListByTag("nolist"));
		assertTrue(commonPageObjectModelWebdriver.buildListByTag("list"));
		assertFalse(commonPageObjectModelWebdriver.buildListByTag(null));
	}


	@Ignore
	@Test
	public void testGetAllIntegersFromText() {
		int[] numbers;

		when(currentElement.getText()).thenReturn("").thenReturn("1 2 3 4 5");

		//numbers = commonPageObjectModelWebdriver.getAllIntegersFromText();
		//assertNull(numbers);
		//numbers = commonPageObjectModelWebdriver.getAllIntegersFromText();
		//assertEquals(numbers.length, 5);
	}

	@Test
	public void testNavigateToElementById() {
		when(currentElement.findElement(By.id(anyString()))).thenThrow(
				new NoSuchElementException("")).thenReturn(webElement);

		assertFalse(commonPageObjectModelWebdriver.navigateToElementById(""));
		assertTrue(commonPageObjectModelWebdriver.navigateToElementById(""));
	}

	@Ignore
	@Test
	public void testContainsLinkToURL() {
		when(driver.findElements(By.tagName(anyString())))
				.thenReturn(elementListOneEntry)
				.thenReturn(elementListNoentries)
				.thenReturn(elementListOneEntry);

		when(webElement.getAttribute(anyString())).thenReturn(" ").thenReturn(
				"nomatch");

		assertTrue(commonPageObjectModelWebdriver.hasLinkToURL(" "));
		assertFalse(commonPageObjectModelWebdriver.hasLinkToURL(" "));
		assertFalse(commonPageObjectModelWebdriver.hasLinkToURL(" "));
	}

	@Ignore
	@Test
	public void testFollowLinkToURL() {
		when(driver.findElements(By.tagName(anyString()))).thenReturn(
				elementListOneEntry).thenReturn(elementListNoentries);
		when(webElement.getAttribute(anyString())).thenReturn(" ");

		when(driver.navigate()).thenReturn(navigation);
		doNothing().when(navigation).to(anyString());

		assertTrue(commonPageObjectModelWebdriver.followLinkToURL(" "));
		assertFalse(commonPageObjectModelWebdriver.followLinkToURL(" "));
	}

	@Test
	public void testNavigateToElementByClass() {
			when(currentElement.findElement(By.className(anyString()))).thenThrow(
					new NoSuchElementException("")).thenReturn(webElement);

			assertFalse(commonPageObjectModelWebdriver.navigateToElementByClassName(""));
			assertTrue(commonPageObjectModelWebdriver.navigateToElementByClassName(""));
	}

	@Test
	public void testNavigateToElementByXpath() {
		when(currentElement.findElement(By.xpath(anyString()))).thenThrow(
				new NoSuchElementException("")).thenReturn(webElement);

		assertFalse(commonPageObjectModelWebdriver.navigateToElementByXpath(""));
		assertTrue(commonPageObjectModelWebdriver.navigateToElementByXpath(""));
	}

	@Test
	public void testNavigateToElementByTag() {
		when(currentElement.findElement(By.tagName(anyString()))).thenThrow(
				new NoSuchElementException("")).thenReturn(webElement);

		assertFalse(commonPageObjectModelWebdriver.navigateToElementByTag(""));
		assertTrue(commonPageObjectModelWebdriver.navigateToElementByTag(""));
	}

	@Test
	public void testNavigateToElementByPartialLinkText() {
		when(currentElement.findElement(By.partialLinkText(anyString())))
				.thenThrow(new NoSuchElementException("")).thenReturn(
						webElement);

		assertFalse(commonPageObjectModelWebdriver
				.navigateToElementByPartialLinkText(""));
		assertTrue(commonPageObjectModelWebdriver
				.navigateToElementByPartialLinkText(""));
	}

	@Test
	public void testNavigateToListElement() {

		commonPageObjectModelWebdriver.setElementList(elementlistNull);
		assertFalse(commonPageObjectModelWebdriver.navigateToListElement(0));

		commonPageObjectModelWebdriver.setElementList(elementListNoentries);
		assertFalse(commonPageObjectModelWebdriver.navigateToListElement(0));

		commonPageObjectModelWebdriver.setElementList(elementListOneEntry);
		assertTrue(commonPageObjectModelWebdriver.navigateToListElement(0));

		commonPageObjectModelWebdriver.setElementList(elementListOneEntry);
		assertFalse(commonPageObjectModelWebdriver.navigateToListElement(2));

	}

	@Test
	public void testNavigateToListLastElement() {
		commonPageObjectModelWebdriver.setElementList(elementlistNull);
		assertFalse(commonPageObjectModelWebdriver.navigateToListLastElement());

		commonPageObjectModelWebdriver.setElementList(elementListNoentries);
		assertFalse(commonPageObjectModelWebdriver.navigateToListLastElement());

		commonPageObjectModelWebdriver.setElementList(elementListOneEntry);
		assertTrue(commonPageObjectModelWebdriver.navigateToListLastElement());
	}

	@Test
	public void testNavigateToListFirstElement() {
		commonPageObjectModelWebdriver.setElementList(elementlistNull);
		assertFalse(commonPageObjectModelWebdriver.navigateToListFirstElement());

		commonPageObjectModelWebdriver.setElementList(elementListNoentries);
		assertFalse(commonPageObjectModelWebdriver.navigateToListFirstElement());

		commonPageObjectModelWebdriver.setElementList(elementListOneEntry);
		assertTrue(commonPageObjectModelWebdriver.navigateToListFirstElement());
	}

	@Ignore
	@Test
	public void testContainsTextString() {
		when(currentElement.getText()).thenReturn(null).thenReturn("")
				.thenReturn("").thenReturn(" ");

		assertFalse(commonPageObjectModelWebdriver.hasAnyText());
		assertFalse(commonPageObjectModelWebdriver.hasAnyText());
		assertFalse(commonPageObjectModelWebdriver.hasAnyText());

	}

	// REWRITE TEST METHODS

	@Test
	public void testtypeIn() {
		when(currentElement.getTagName()).thenReturn("input")
				.thenReturn("textarea").thenReturn("invalid tag");

		doNothing().when(currentElement).sendKeys(anyString());

		commonPageObjectModelWebdriver.typeIn("text");
		commonPageObjectModelWebdriver.typeIn("text");

		try {
			commonPageObjectModelWebdriver.typeIn("text");
		} catch (Exception e) {
			assertTrue(e instanceof IllegalArgumentException);
		}
	}


	@Test
	public void testSaveCurrentElementPosition() {
		commonPageObjectModelWebdriver
				.setStoredElementMap(storedElementMapNull);
		when(storedElementMap.put(anyString(), (WebElement) anyObject()))
				.thenReturn(webElement).thenThrow(
						new IllegalArgumentException());

		commonPageObjectModelWebdriver.saveCurrentElementPosition("position");

		try {
			commonPageObjectModelWebdriver
					.saveCurrentElementPosition("position");
		} catch (Exception e) {
			assertTrue(e instanceof IllegalArgumentException);
		}
	}

	@Test
	public void testRestoreElementPosition() {
		try {
			commonPageObjectModelWebdriver.restoreElementPosition();
		} catch (Exception e) {
			assertTrue(e instanceof IllegalStateException);
		}
	}

	@Test
	public void testRestoreElementPositionString() {

		when(storedElementMap.get(anyString())).thenReturn(null);

		commonPageObjectModelWebdriver.setStoredElementMap(null);
		try {
			commonPageObjectModelWebdriver.restoreElementPosition("");
		} catch (Exception e) {
			assertTrue(e instanceof IllegalStateException);
		}
		commonPageObjectModelWebdriver.setStoredElementMap(storedElementMap);
		try {
			commonPageObjectModelWebdriver.restoreElementPosition("");
		} catch (Exception e) {
			assertTrue(e instanceof IllegalStateException);
		}
	}

	@Test
	public void testNavigateToListElementByValue() {

		WebElement we = mock(WebElement.class);

		when(we.getAttribute(anyString())).thenReturn("right").thenReturn(
				"right");

		elementListNoentries.add(we);
		commonPageObjectModelWebdriver.setElementList(elementListNoentries);

		assertTrue(commonPageObjectModelWebdriver
				.navigateToListElementByValue("right"));
		assertFalse(commonPageObjectModelWebdriver
				.navigateToListElementByValue("wrong"));
	}

	@Test
	public void testNavigateToListElementByVisibleText() {
		WebElement we = mock(WebElement.class);

		when(we.getText()).thenReturn("right").thenReturn("right");

		elementListNoentries.add(we);
		commonPageObjectModelWebdriver.setElementList(elementListNoentries);

		assertTrue(commonPageObjectModelWebdriver
				.navigateToListElementByVisibleText("right"));
		assertFalse(commonPageObjectModelWebdriver
				.navigateToListElementByVisibleText("wrong"));
	}

	@Ignore
	@Test
	public void testGetDropdownListById() {

		when(currentElement.findElement(By.tagName(anyString()))).thenThrow(
				new NoSuchElementException(null)).thenReturn(webElement);

		assertFalse(commonPageObjectModelWebdriver.buildDropdownListById("id"));
		try {
			commonPageObjectModelWebdriver.buildDropdownListById("id");
		} catch (Exception e) {
			assertTrue(e instanceof UnexpectedTagNameException);
		}

	}

	@Test
	public void testNavigateToListElementById() {
		WebElement we = mock(WebElement.class);

		when(we.getAttribute(anyString())).thenReturn("right").thenReturn(
				"right");

		elementListNoentries.add(we);
		commonPageObjectModelWebdriver.setElementList(elementListNoentries);

		assertTrue(commonPageObjectModelWebdriver
				.navigateToListElementById("right"));
		assertFalse(commonPageObjectModelWebdriver
				.navigateToListElementById("wrong"));
	}

	@Test
	public void testNavigateToListElementByPartialId() {
		WebElement we = mock(WebElement.class);

		when(we.getAttribute(anyString())).thenReturn("id").thenReturn(null);

		elementListNoentries.add(we);
		commonPageObjectModelWebdriver.setElementList(elementListNoentries);

		assertTrue(commonPageObjectModelWebdriver
				.navigateToListElementByPartialId("right"));
		assertFalse(commonPageObjectModelWebdriver
				.navigateToListElementByPartialId("wrong"));
	}
	
	@Ignore
	@Test
	public void testbuildTokenList(){
		//webElemen
		when(currentElement.getText()).thenReturn("")
		.thenReturn(null)
		.thenReturn("a b c");
		
		assertFalse(commonPageObjectModelWebdriver.buildTokenListByText());
		assertFalse(commonPageObjectModelWebdriver.buildTokenListByText());
		assertTrue(commonPageObjectModelWebdriver.buildTokenListByText());
		assertTrue(commonPageObjectModelWebdriver.navigateToToken(1));
		assertFalse(commonPageObjectModelWebdriver.navigateToToken(4));
		
		
		
		
	}

	@Test
	public void testIsDate() {
		assertTrue(commonPageObjectModelWebdriver
				.isDate("        10 Jan 2014      "));
		assertTrue(commonPageObjectModelWebdriver.isDate("10 Jan 2014"));
		assertTrue(commonPageObjectModelWebdriver.isDate("10 JAN 2014"));
		assertTrue(commonPageObjectModelWebdriver.isDate("1 JAN 2014"));
		assertFalse(commonPageObjectModelWebdriver.isDate(""));
		assertFalse(commonPageObjectModelWebdriver.isDate("10 ABC 2014"));
	}
}
