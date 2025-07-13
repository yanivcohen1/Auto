package com.who.tlv.ServicesWebsites.client;

import java.util.List;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import com.who.tlv.ServicesWebsites.client.Tools.ReplayClass;
import com.who.tlv.ServicesWebsites.server.DB.Tests;
import com.who.tlv.ServicesWebsites.shared.TestsData;

/**
 * The client side stub for the RPC service.
 */
@RemoteServiceRelativePath("greet")
public interface MainService extends RemoteService {
	String greetServer(String name) throws IllegalArgumentException;
	String Stop(String PanelID) throws IllegalArgumentException;
	void LockExeReq(String[] args, String PanelId) throws IllegalArgumentException;
	String[] GetData(String PanelID) throws IllegalArgumentException;
	List<TestsData> GetTests() throws IllegalArgumentException;
	Boolean UpdateTests(List<TestsData> testsData) throws IllegalArgumentException;
	Boolean RemoveTests(List<TestsData> testsData) throws IllegalArgumentException;
	Boolean AddTests(List<TestsData> testsData) throws IllegalArgumentException;
}
