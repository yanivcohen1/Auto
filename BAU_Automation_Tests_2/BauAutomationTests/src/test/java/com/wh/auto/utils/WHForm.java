package com.wh.auto.utils;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Reporter;

import com.google.common.base.Function;
import com.wh.auto.utils.WHFormFields.WHFormField;

/**
 * Generic class for testing forms
 * 
 * @author Gregoryc
 */
public class WHForm {

	/**
	 * List of fields in the form
	 */
	protected List<WHFormField> fieldsList = new ArrayList<WHFormField>();

	/**
	 * The name (HTML attribute name) of the form on the page
	 */
	protected String formName;

	/**
	 * The web driver (used to fill the form fields)
	 */
	protected WebDriver driver;

	/**
	 * before submit callback
	 */
	protected Function<WHForm, Void> beforeSubmitCallback = null;
	
	/**
	 * Define the name of the form as it appears in the `name` attribute of the
	 * \<form\> element
	 * 
	 * @param name
	 */
	public WHForm(WebDriver driver, String name) {
		this.formName = name;
		this.driver = driver;
	}

	/**
	 * Add field to the form
	 * 
	 * @param field
	 * @return
	 */
	public WHForm addField(WHFormField field) {
		this.fieldsList.add(field);
		return this;
	}

	/**
	 * fill the fields and submit the form
	 */
	public void submit() {

		// prepare the form element
		WebElement elm = null;
		try {
			elm = driver.findElement(By.cssSelector("form[name='" + this.formName + "']"));
		} catch (Exception e) {
			Reporter.log("Cannot find the form element");
			return;
		}

		// fill form elements
		for (WHFormField field : this.fieldsList) {
			field.fillField(this.driver, this.formName);
		}

		if (this.beforeSubmitCallback != null) {
			this.beforeSubmitCallback.apply(this);
		}
		
		// submit the form
		if (elm != null) {
			elm.submit();
		}
	}
	
	/**
	 * set before submit callback
	 * @param callback
	 */
	public void onBeforeSubmit(Function<WHForm, Void> callback) {
		this.beforeSubmitCallback = callback;
	}

}
