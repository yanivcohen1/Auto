package com.who.test.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.who.test.shared.TestsName;

/**
 * The async counterpart of <code>GreetingService</code>.
 */
public interface MainServiceAsync {
	void runTests(TestsName testsName, AsyncCallback<String[]> callback);
}
