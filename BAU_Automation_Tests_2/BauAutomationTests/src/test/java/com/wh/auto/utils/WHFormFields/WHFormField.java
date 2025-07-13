package com.wh.auto.utils.WHFormFields;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Reporter;

import com.wh.auto.utils.RandomString;

public class WHFormField {

	/**
	 * Constants for the random field value type
	 */
	public static int TYPE_ALPHA = 0b01;
	public static int TYPE_NUMERIC = 0b10;
	public static int TYPE_ALPHANUMERIC = 0b11;

	/**
	 * type of the field value, set by one of the values TYPE_ALPHANUMERIC /
	 * TYPE_ALPHA / TYPE_NUMERIC
	 */
	protected int fieldValueType;

	/**
	 * The name of the field
	 */
	protected String fieldName;

	/**
	 * The value of the field
	 */
	protected String fieldValue = "";

	/**
	 * The value length
	 */
	protected int fieldValueLength = 10;

	/**
	 * determines that the value is generated on-the-fly
	 */
	protected boolean fieldValueIsRandom = false;

	/**
	 * Constructor
	 * 
	 * @param name
	 *            of the field
	 * @param value
	 *            of the field
	 */
	public WHFormField(String name, String value) {
		this.fieldName = name;
		this.fieldValue = value;
	}

	/**
	 * 
	 * @param name
	 * @param randomValuelength
	 * @param valueType = TYPE_ALPHA / TYPE_NUMERIC / TYPE_ALPHANUMERIC
	 */
	public WHFormField(String name, int randomValuelength, int... valueType) {
		this.fieldName = name;
		this.fieldValueLength = randomValuelength;
		this.fieldValueIsRandom = true;
		this.fieldValueType = (valueType.length > 0) ? valueType[0] : WHFormField.TYPE_ALPHANUMERIC;
	}

	/**
	 * Get the CSS selector for the field
	 * 
	 * @return
	 */
	protected String getCSSSelector() {
		return "input[name='" + this.fieldName + "']";
	}

	/**
	 * Get the (web)element of the field
	 * 
	 * @param driver
	 * @param formName
	 * @return
	 */
	protected WebElement getElement(WebDriver driver, String formName) {
		WebElement elm = null;

		// get the element
		try {
			elm = driver.findElement(By.cssSelector("form[name='" + formName + "'] " + this.getCSSSelector()));
		} catch (Exception e) {
			// log exception
			Reporter.log("Cannot find input with name '" + this.fieldName + "'");
			return null;
		}

		return elm;
	}

	/**
	 * fill the field with value
	 * 
	 * @param formName
	 * @return boolean
	 */
	public boolean fillField(WebDriver driver, String formName) {
		WebElement elm = this.getElement(driver, formName);

		// put the value into the element
		if (elm != null) {
			elm.sendKeys(this.getValue());
		}

		return true;
	}

	/**
	 * Get the value of the string
	 * 
	 * @return String
	 */
	public String getValue() {
		if (this.fieldValueIsRandom) {
			String retVal = "";
			RandomString rs = new RandomString(fieldValueLength);
			
			if (this.fieldValueType == WHFormField.TYPE_ALPHA) {
				retVal = rs.nextAlpha();
			} else if (this.fieldValueType == WHFormField.TYPE_NUMERIC) {
				retVal = rs.nextNumber().toString();
			} else {
				retVal = rs.nextString();
			}
			
			return retVal;
		} else {
			return fieldValue;
		}
	}
}
