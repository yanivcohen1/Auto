package com.who.test.client;

import java.io.IOException;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import com.who.test.shared.TestsName;


/**
 * The client side stub for the RPC service.
 */
@RemoteServiceRelativePath("greet")
public interface MainService extends RemoteService {
	String[] runTests(TestsName testsName) throws IllegalArgumentException;
}
