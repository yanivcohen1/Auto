package com.test;
import com.google.common.base.Function;


public class ToolTest {

	public static void main(String argv[]) {
		
		final String callBackTest = "call Back Test:";
		Tool tool = new Tool();
		tool.onBeforeApply(new Function<Integer, String>() {
			@Override
			public String apply(Integer arg0) {	
				return callBackTest + arg0;
			}
		});
		tool.apply();
	}
	
}
