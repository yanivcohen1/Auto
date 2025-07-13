package com.who.test.utils;

import java.util.Collection;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class WaitForCallBack implements IWaitForCallBack{

		  IWaitForCallBack WaitForCallBack;
		  public void savePointer(IWaitForCallBack e) {
			  WaitForCallBack = e;
		  }

		@Override
		public WebElement runCallBackFun(int timeoutSec) {
			
			WebElement ret = null;
			for (int i = 0; i < timeoutSec; i++) {
				try {
					ret = WaitForCallBack.runCallBackFun(timeoutSec);
					if (ret != null) {
						break;
					}
				} catch (Exception e) {
				}
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {}
			}
			 return ret;
		}
	
}
