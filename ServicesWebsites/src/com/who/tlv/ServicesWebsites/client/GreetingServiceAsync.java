package com.who.tlv.ServicesWebsites.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.who.tlv.ServicesWebsites.client.Tools.ReplayClass;

/**
 * The async counterpart of <code>GreetingService</code>.
 */
public interface GreetingServiceAsync {
	void greetServer(String input, AsyncCallback<String> callback) throws IllegalArgumentException;
	void Stop(String PanelID, AsyncCallback<String> callback) throws IllegalArgumentException;
	void LockExeReq(String[] args,String PanelId, AsyncCallback<Void> callback) throws IllegalArgumentException;
	void GetData(String PanelID, AsyncCallback<String[]> callback) throws IllegalArgumentException;
}
