package com.who.utils;

import org.springframework.context.ApplicationContext;

public class AppContextRepository {

	public static ApplicationContext ac;

	public static ApplicationContext getAc() {
		return ac;
	}

	public static void setAc(ApplicationContext _ac) {
		ac = _ac;
	}
	
}
