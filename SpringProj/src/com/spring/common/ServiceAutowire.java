package com.spring.common;

import org.springframework.stereotype.Service;

@Service
public class ServiceAutowire {
	
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
