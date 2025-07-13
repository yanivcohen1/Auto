package com.who.rest.tests.jersey;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.annotate.JsonSerialize;
 
@JsonSerialize()
public class User {
 
	private int age = 29;
	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	private String name = "mkyong";
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	private List<String> messages = new ArrayList<String>() {
		{
			add("msg 1");
			add("msg 2");
			add("msg 3");
		}
	};
 
	//getter and setter methods
 
	@Override
	public String toString() {
		return "User [age=" + age + ", name=" + name + ", " +
				"messages=" + messages + "]";
	}
}