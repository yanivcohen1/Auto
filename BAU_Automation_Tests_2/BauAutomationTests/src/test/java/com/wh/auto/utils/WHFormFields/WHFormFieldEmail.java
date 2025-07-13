package com.wh.auto.utils.WHFormFields;

import com.wh.auto.utils.RandomString;

public class WHFormFieldEmail extends WHFormField {

	public WHFormFieldEmail(String name, String value) {
		super(name, value);
	}
	
	public WHFormFieldEmail(String name, int randomValuelength, int... valueType) {
		super(name, randomValuelength);
	}

	
	/**
	 * @return String in email format
	 */
	@Override
	public String getValue() {
		if (this.fieldValueIsRandom) {
			RandomString rs = new RandomString(fieldValueLength);
			return "a" + rs.nextString() + "@" + rs.nextString() + ".com";
		} else {
			return fieldValue;
		}
	}
	
	
}
