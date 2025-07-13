package com.yan.manag.service.util;

import java.util.ArrayList;
import java.util.List;

public class CallBackServiceTest implements CallBackInterface{

	public static void main1(String[] args) {
		CallBackService callBackService = new CallBackService();
		CallBackServiceTest callBackServiceTest = new CallBackServiceTest();
		callBackService.registerCallBack(callBackServiceTest);	
		String ret = callBackService.callBack(5);
		System.out.println("The service return: " +ret);
	}
	
	@Override
	public String IntToString(int inte) {
		return Integer.toString(inte);
	}

}

class CallBackService {

	List<CallBackInterface> callBackList = new ArrayList<CallBackInterface>();
	
	void registerCallBack(CallBackInterface callBack){
		callBackList.add(callBack);
	}

	String callBack(int inte) {
		String ret = null;
		for (CallBackInterface callBackInterface : callBackList) {
			ret = callBackInterface.IntToString(inte);
		}
		return ret;
	}
	
}

interface CallBackInterface{
	String IntToString(int inte);
}
