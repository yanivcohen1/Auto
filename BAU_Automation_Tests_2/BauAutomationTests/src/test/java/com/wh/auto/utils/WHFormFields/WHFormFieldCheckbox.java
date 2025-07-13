/**
 * 
 */
package com.wh.auto.utils.WHFormFields;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import com.wh.auto.utils.RandomString;

/**
 * @author Gregoryc
 * 
 */
public class WHFormFieldCheckbox extends WHFormField {

	/**
	 * @param name
	 * @param value
	 */
	public WHFormFieldCheckbox(String name, boolean setChecked) {
		super(name, (setChecked ? "1" : "0"));
	}

	/**
	 * @param name
	 * @param randomValuelength
	 */
	public WHFormFieldCheckbox(String name) {
		super(name, 1);
	}

	/**
	 * Get the CSS selector for the checkbox
	 * 
	 * @return
	 */
	@Override
	protected String getCSSSelector() {
		return "input[type='checkbox'][name='" + this.fieldName + "']";
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

		if (this.fieldValueIsRandom) {
			for (int i = 0; i < RandomString.nextNumberInRange(0, 2); i++) {
				elm.click();
			}
		} else {
			if (this.fieldValue == "1") {
				if (!elm.isSelected()) {
					elm.click();
				}
			} else {
				if (elm.isSelected()) {
					elm.click();
				}
			}
		}

		return true;
	}

}
