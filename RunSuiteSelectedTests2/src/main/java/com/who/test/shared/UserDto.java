package com.who.test.shared;

import com.google.gwt.user.client.rpc.IsSerializable;

public class UserDto implements IsSerializable {
	private int id;
	private String name;
	private String password;
	
	public int getId(){
		return id;
	}
	
	public String getName(){
		return name;
	}
	
	public String getPassword(){
		return password;
	}
	
	public void setId(int id){
		this.id = id;
	}
	
	public void setName(String name){
		this.name = name;
	}
	
	public void setPassword(String password){
		this.password = password;
	}
}
