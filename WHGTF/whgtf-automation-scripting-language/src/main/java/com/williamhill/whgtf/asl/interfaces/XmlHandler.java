package com.williamhill.whgtf.asl.interfaces;

public interface XmlHandler {

	public boolean xmlCreateBody(String parentElement);

	boolean xmlCreateBody(String parentElement, String... attributes);

	public boolean xmlAddElement(String parentElement, String elementName);

	public boolean xmlAddElement(String parentElement, String elementName,
			String... attributes);

	public boolean xmlAddElement(String parentElement, String elementName,
			String text);

	public boolean xmlAddText(String elementName, String value);

	public boolean xmlGoToElement(String elementName);

	boolean xmlAddAttribute(String elementName, String attribute);

	boolean xmlBuildString();

}
