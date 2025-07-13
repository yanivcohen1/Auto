package com.who.tlv.auto.poker;

import java.awt.AWTException;
import java.net.MalformedURLException;
import java.net.URL;

import org.ebayopensource.twin.Application;
import org.ebayopensource.twin.TwinException;

public class SetNickName {

	public static void main(String[] args) {
		SetNickName setNickName = new SetNickName();
		String result = setNickName.setNickName("u11111113","1qazxsw2","Yaniv");
		System.out.println(result);
	}
	
	public String setNickName(String username, String password,String nickName) {
		 String result = "Pass";
		 Application app = null;
		 try {
			  app = new Application(new URL("http://localhost:4444")); // URL of the remote control
			  LoginPage loginPage = new LoginPage(app);
			  NickNamePage nickNamePage = loginPage.login(username, password);
			  nickNamePage.insertNickName(nickName);
		 } catch (Exception e) {
				e.printStackTrace();
				result = "error: " + e.getMessage();
		 }
	     try {
			app.close();
		 } catch (TwinException e) {}
	     return result;
	}
	
}
