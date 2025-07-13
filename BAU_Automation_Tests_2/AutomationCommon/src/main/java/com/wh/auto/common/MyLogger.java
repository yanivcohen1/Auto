package com.wh.auto.common;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import com.wh.auto.common.Reporter;

public class MyLogger {

	//static Calendar cal = Calendar.getInstance();
	public static SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	//static String strDate = sdf.format(cal.getTime());

	public static String strDate() {
		Calendar cal = Calendar.getInstance();
		return sdf.format(cal.getTime());
	}

	public static void INFO(String log) {
		Print(log, "INFO");
	}

	public static void DEBUG(String log) {
		Print(log, "DEBUG");
	}

	public static void WARN(String log) {
		Print(log, "WARN");
	}

	public static void ERROR(String log) {
		Print(log, "ERROR");
	}
	
	private static void Print(String log, String Type) {
		StackTraceElement stackTraceElement = find_page();
		if (stackTraceElement != null) {
			int getLineNumber = stackTraceElement.getLineNumber();
			String getMethodName = stackTraceElement.getMethodName();
			String ClassName = stackTraceElement.getClassName();
			Reporter.log(" ["+Type+"] " + "[" + ClassName + "."
					+ getMethodName + ":" + getLineNumber + "]" + " - " + log, true);
		}else{
			Reporter.log(log, true);
		}

	}
	
	public static StackTraceElement find_page(){
		StackTraceElement[] stackTraceElements = Thread.currentThread().getStackTrace();
		for (StackTraceElement stackTraceElement : stackTraceElements) {
			if (stackTraceElement.getClassName().contains("Page")){
				return stackTraceElement;
			}
		}
		for (StackTraceElement stackTraceElement : stackTraceElements) {
			
			if (stackTraceElement.getClassName().contains("com.wh.auto") && 
					!stackTraceElement.getClassName().contains("com.wh.auto.common")){
				return stackTraceElement;
			}
		}
		return null;
	}
	
	public static void main(String[] args) throws InterruptedException {
		MyLogger.INFO("sss");
		Thread.sleep(5000);
		MyLogger.ERROR("START");
	}

}
