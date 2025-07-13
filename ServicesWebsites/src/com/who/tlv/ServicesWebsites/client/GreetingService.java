package com.who.tlv.ServicesWebsites.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import com.who.tlv.ServicesWebsites.client.Tools.ReplayClass;

/**
 * The client side stub for the RPC service.
 */
@RemoteServiceRelativePath("greet")
public interface GreetingService extends RemoteService {
	String greetServer(String name) throws IllegalArgumentException;
	String Stop(String PanelID) throws IllegalArgumentException;
	void LockExeReq(String[] args, String PanelId) throws IllegalArgumentException;
	String[] GetData(String PanelID) throws IllegalArgumentException;
}
