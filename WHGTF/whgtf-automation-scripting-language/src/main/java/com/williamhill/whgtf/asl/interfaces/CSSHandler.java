package com.williamhill.whgtf.asl.interfaces;

import org.openqa.selenium.WebElement;

public interface CSSHandler {

	public boolean hasBorderColour( WebElement webelement, String colour );
	public boolean hasTextColour(WebElement webelement, String colour);
	public boolean hasBackgroundColour(WebElement webelement, String colour);
}
