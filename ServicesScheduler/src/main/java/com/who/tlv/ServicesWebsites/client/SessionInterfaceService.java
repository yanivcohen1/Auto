package com.who.tlv.ServicesWebsites.client;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import com.who.tlv.ServicesWebsites.shared.UserDto;

@RemoteServiceRelativePath("sessionService")
public interface SessionInterfaceService extends RemoteService {
Integer getUserSessionTimeout();
Boolean isSessionAlive();
String isRegister();
Boolean UnRegister();
void ping();
String Register(UserDto UserData);
}
