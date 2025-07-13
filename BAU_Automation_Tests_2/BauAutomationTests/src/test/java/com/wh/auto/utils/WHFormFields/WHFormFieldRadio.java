/**
 * 
 */
package com.wh.auto.utils.WHFormFields;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Reporter;

import com.wh.auto.utils.RandomString;

/**
 * @author Gregoryc
 * 
 */
public class WHFormFieldRadio extends WHFormField {

	/**
	 * @param name
	 * @param value
	 */
	public WHFormFieldRadio(String name, String value) {
		super(name, value);
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param name
	 * @param isRandom
	 */
	public WHFormFieldRadio(String name) {
		super(name, 1);
		// TODO Auto-generated constructor stub
	}

	/**
	 * fill the field with value
	 * 
	 * @param formName
	 * @return boolean
	 */
	@Override
	public boolean fillField(WebDriver driver, String formName) {

		if (this.fieldValueIsRandom) {
			try {
				// get list of all the relevant radio buttons
				List<WebElement> radioButtons = driver.findElements(By.cssSelector("form[name='" + formName + "'] " + "input[type='radio'][name='"
						+ this.fieldName + "']"));

				// select random radio button
				WebElement elm = radioButtons.get(RandomString.nextNumberInRange(0, radioButtons.size()));
				elm.click();

			} catch (Exception e) {
				Reporter.log("Cannot find radio buttons with the name '" + this.fieldName + "'");
				return false;
			}

		} else {
			try {
				WebElement elm = driver.findElement(By.cssSelector("form[name='" + formName + "'] " + "input[type='radio'][name='" + this.fieldName
						+ "'][value='" + this.fieldValue + "']"));
				elm.click();
			} catch (Exception e) {
				Reporter.log("Cannot find radio button with value '" + this.fieldValue + "'");
				return false;
			}
		}

		return true;
	}
}
