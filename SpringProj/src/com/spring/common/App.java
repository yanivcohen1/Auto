package com.spring.common;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"SpringBeans.xml");

		Customer cust = (Customer) context.getBean("customer");
		System.out.println(cust);
		System.out.println(cust.getSevicveAuto());
	}
}