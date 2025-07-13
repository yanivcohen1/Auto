package com.wh.auto.extendRunner;

import com.wh.auto.common.Utility;

/**
 * Created by yanivc on 20/10/14.
 */
public class SharedData {

	private static int retryCount = 0;
	private static boolean isFail = false;
	private static String chromeConsole;
	
	public static String getChromeConsole() {
		return chromeConsole;
	}

	public static void setChromeConsole(String chromeConsole) {
		SharedData.chromeConsole = chromeConsole;
	}
	
	public static int getRetryCount() {
		return retryCount;
	}

	public static void setRetryCount(int retryCount) {
		SharedData.retryCount = retryCount;
	}

	public static boolean isFail() {
		return isFail;
	}

	public static void setFail(boolean isFail) {
		SharedData.isFail = isFail;
	}
	
}
