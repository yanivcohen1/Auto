package com.yan.manag.service.util;

import java.util.function.BiFunction;
import java.util.function.Function;

public class CustomFunTest {

	public static void main1(String[] args) {
		CustomFunTest customFunTest = new CustomFunTest();
		System.out.println("the output integer is: " + (customFunTest.func1Params.apply("5") + 1));
		System.out.println("the output integer is: " + (customFunTest.func2Params.apply("5", 3) + 1));
	}
	
	Function<String, Integer> func1Params = (stringIn) -> {
		try {
			System.out.println("the input is: " + stringIn);
		} 
		catch (Exception e) {
			throw new IllegalStateException(e);
		}
		return Integer.valueOf(stringIn);
	};
	
	BiFunction<String, Integer, Double> func2Params = (stringIn, intIn) -> {
		try {
			System.out.println("the input is: " + stringIn);
		} 
		catch (Exception e) {
			throw new IllegalStateException(e);
		}
		return Double.valueOf(stringIn);
	};
	
}
