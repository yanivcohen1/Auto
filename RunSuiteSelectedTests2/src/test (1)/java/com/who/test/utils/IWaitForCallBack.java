package com.who.test.utils;

import org.openqa.selenium.WebElement;

public interface IWaitForCallBack {
	WebElement runCallBackFun(int timeout);
}



/*public class CallBackTest {
	public static void main(String argv[]) {
		CallBackClass ex = new CallBackClass();
		ex.savePointer(new CallBackInterface() {
			public String callBackFun(String s) {
				System.out.println("Hello!" + s);
				return "pass";
			} // end interfaceMethod
		}// end anonymous inner class definition
		); // end argument and exampleMethod call
		System.out.println("return " + ex.exeCallBack());
	}
}*/