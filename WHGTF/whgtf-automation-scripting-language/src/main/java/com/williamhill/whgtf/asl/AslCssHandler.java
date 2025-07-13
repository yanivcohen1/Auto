package com.williamhill.whgtf.asl;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.Color;

import static com.williamhill.whgtf.asl.CommonPageDefinitions.*;


/**
 * CSS Handlers
 * @version 1.0
 * @ 
 */

public class AslCssHandler implements com.williamhill.whgtf.asl.interfaces.CSSHandler{

	private final static Logger logger = LogManager.getRootLogger();
	
	@Override
	public boolean hasBorderColour(WebElement webelement, String colour) {

		boolean hasColour = true;
		Color expectedColour;
		Color actualColour;
		int testRepetitions;
		final int MAX_REPETITIONS = 4;
		
		String[] borderAttributes = {CSS_BORDER_TOP_COLOUR,
				                     CSS_BORDER_LEFT_COLOUR,
				                     CSS_BORDER_RIGHT_COLOUR,
				                     CSS_BORDER_BOTTOM_COLOUR};
				
		expectedColour = setColour(colour);
		
		if( expectedColour == null ) {
			logger.debug("Expected Colour is Null");
			return false;
		}
		
		// Ensure expected and actual are different to begin with
		if(colour.equals(COLOUR_WHITE)) {
			actualColour  = Color.fromString(COLOUR_BLACK);
		}
		else {
			actualColour  = Color.fromString(COLOUR_WHITE);
		}
			
		for( String  attr: borderAttributes) {
			if( ! hasColour) {
				break;
			}
			
			// Firefox : rgba(187, 187, 187)
			// Chrome : rgba(187, 187, 187, 1)
			// IE : 6 digit hexadecimal
			// fromString() will accept all formats			
			testRepetitions = 0;
			while( ! compareColours( expectedColour, actualColour)) {	
				actualColour = Color.fromString(webelement.getCssValue(attr));
				try {
				   Thread.sleep(500); 
				   logger.debug("Hex Value"+ actualColour.asHex());
				} catch(InterruptedException ex) {
				   Thread.currentThread().interrupt();
				}
				if( ++ testRepetitions == MAX_REPETITIONS ) {
					hasColour = false;
					logger.error("CSSHandler : hasBorderColour() : Fail : Expected = "+expectedColour.toString()+ ", Actual = "+actualColour.toString());
					break;
				}
			}
		}
		return hasColour;
	}

	@Override
	public boolean hasTextColour(WebElement webelement, String colour) {

		Color expectedColour = setColour(colour);		
		if( expectedColour == null ) {
			return false;
		}
		
		Color actualColour = Color.fromString(webelement.getCssValue(CSS_TEXT_COLOUR));
		return compareColours( expectedColour, actualColour);	
	}
	
	@Override
	public boolean hasBackgroundColour(WebElement webelement, String colour) {
		
		Color expectedColour = setColour(colour);		
		if( expectedColour == null ) {
			return false;
		}
		Color actualColour = Color.fromString(webelement.getCssValue(CSS_BACKGROUND_COLOUR));
		return compareColours( expectedColour, actualColour);		
	}	
	
	/////////////
	// PRIVATE //
	/////////////
	
	// Check color hex string #[nnnnnn]
	private Color setColour( String colour ) {
		
		try {			
			return Color.fromString(colour);
		}
		catch( IllegalArgumentException e) {
			logger.error("CSSHandler : hasBorderColour() : error processing color : "+colour+" : colour should have format : #[6 Hexadecimal Characters]");
			return null;
		}	
	}
	private boolean compareColours( Color expected, Color actual ) {
		
		if( expected.equals(actual)) {
			return true;
		}
		else {
			logger.error("CSSHandler : compareColours() : Fail : Expected = "+expected.asHex()+ ", Actual = "+actual.asHex());
			return false;
		}
	}
}
