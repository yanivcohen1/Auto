package com.who.tlv.ServicesWebsites.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.who.tlv.ServicesWebsites.shared.UserDto;

public interface SessionInterfaceServiceAsync  {
void getUserSessionTimeout(AsyncCallback<Integer> callback);
void isSessionAlive(AsyncCallback<Boolean> callback);
void isRegister(AsyncCallback<String> callback);
void UnRegister(AsyncCallback<Boolean> callback);
void ping(AsyncCallback callback);
void Register(UserDto UserData, AsyncCallback<String> callback);
}
