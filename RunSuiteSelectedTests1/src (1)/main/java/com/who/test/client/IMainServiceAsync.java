package com.who.test.client;

import java.util.List;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.who.test.shared.SuitesData;
import com.who.test.shared.TestsData;
import com.who.test.shared.UserDto;

/**
 * The async counterpart of <code>GreetingService</code>.
 */
public interface IMainServiceAsync {
	void runTests(SuitesData testsName, AsyncCallback<String[]> callback);
	void isRegister(AsyncCallback<String> callback);
	void UnRegister(AsyncCallback<Boolean> callback);
	void Register(UserDto UserData, AsyncCallback<String> callback);
	void GetTests(AsyncCallback<List<TestsData>> callback) throws IllegalArgumentException;
	void UpdateTests(List<TestsData> testsData, AsyncCallback<Boolean> callback) throws IllegalArgumentException;
	void RemoveTests(List<TestsData> testsData, AsyncCallback<Boolean> callback) throws IllegalArgumentException;
	void AddTests(List<TestsData> testsData, AsyncCallback<Boolean> callback) throws IllegalArgumentException;
}
