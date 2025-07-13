package com.who.tlv.ServicesWebsites.client;

import java.util.List;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.who.tlv.ServicesWebsites.client.Tools.ReplayClass;
import com.who.tlv.ServicesWebsites.server.DB.Tests;
import com.who.tlv.ServicesWebsites.shared.TestsData;

/**
 * The async counterpart of <code>GreetingService</code>.
 */
public interface MainServiceAsync {
	void greetServer(String input, AsyncCallback<String> callback) throws IllegalArgumentException;
	void Stop(String PanelID, AsyncCallback<String> callback) throws IllegalArgumentException;
	void LockExeReq(String[] args,String PanelId, AsyncCallback<Void> callback) throws IllegalArgumentException;
	void GetData(String PanelID, AsyncCallback<String[]> callback) throws IllegalArgumentException;
	void GetTests(AsyncCallback<List<TestsData>> callback) throws IllegalArgumentException;
	void UpdateTests(List<TestsData> testsData, AsyncCallback<Boolean> callback) throws IllegalArgumentException;
	void RemoveTests(List<TestsData> testsData, AsyncCallback<Boolean> callback) throws IllegalArgumentException;
	void AddTests(List<TestsData> testsData, AsyncCallback<Boolean> callback) throws IllegalArgumentException;
}
