package com.wh.auto.utils.WHFormFields;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import com.wh.auto.utils.RandomString;

public class WHFormFieldSelect extends WHFormField {

	public WHFormFieldSelect(String name, String value) {
		
		super(name, value);
	}
	
	/**
	 * Constructor for a random value
	 */
	public WHFormFieldSelect(String name) {
		
		// intialize the module. the length is not relevant because this is a select box
		super(name, 1);

	}

	/**
	 * Get the CSS selector for the selectbox
	 * @return
	 */
	@Override
	protected String getCSSSelector() {
		return "select[name='" + this.fieldName + "']";
	}
	
	/**
	 * fill the field with value
	 * 
	 * @param formName
	 * @return boolean
	 */
	@Override
	public boolean fillField(WebDriver driver, String formName) {

		WebElement elm = this.getElement(driver, formName);
		if (elm == null) {
			return false;
		}
		
		Select selEl = new Select(elm);
		if (this.fieldValueIsRandom) {
			int selectedOption = RandomString.nextNumberInRange(0, selEl.getOptions().size());
			selEl.selectByIndex(selectedOption);
		} else {
			selEl.selectByValue(this.fieldValue);
		}

		return true;
	}
	
}
