package com.yan.manag.service.util;

import org.apache.commons.lang3.mutable.MutableInt;

public class MyString {
	public String value;
	
	MyString(String str){
		value = str;
	}
	
	@Override
    public String toString() {
        return value;
    }
	
	//test how to use it
	public static void main1(String[] args) {
		MutableInt inter = new MutableInt(1);
		MyString str3 = new MyString("test");
		change(inter, str3);
		int i = inter.getValue() + 1;
		String s = str3.value + "1";
		System.out.println(s + ""+i);
	}

	private static void change(MutableInt x, MyString str) {
		x.setValue(5);
		str.value = "testss";
	}
}
