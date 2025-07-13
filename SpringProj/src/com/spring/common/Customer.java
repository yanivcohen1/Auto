package com.spring.common;

import org.springframework.beans.factory.annotation.Autowired;

public class Customer {

	@Autowired(required=false)
	private Person person;
	private int type;
	private String action;
	@Autowired
	private ServiceAutowire serviceAutowire;

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	@Override
	public String toString() {
		return "Customer [person=" + person + ", type=" + type + ", action="
				+ action + "]";
	}

	public String getSevicveAuto() {
		serviceAutowire.setName("Yaniv");
		return serviceAutowire.getName();
	}
	
}