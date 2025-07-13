package com.who.test.client;

import java.io.IOException;
import java.util.List;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import com.who.test.shared.SuitesData;
import com.who.test.shared.TestsData;
import com.who.test.shared.UserDto;


/**
 * The client side stub for the RPC service.
 */
@RemoteServiceRelativePath("greet")
public interface MainService extends RemoteService {
	String[] runTests(SuitesData testsName) throws IllegalArgumentException;
	String isRegister() throws IllegalArgumentException;
	Boolean UnRegister() throws IllegalArgumentException;
	String Register(UserDto UserData) throws IllegalArgumentException;
	List<TestsData> GetTests() throws IllegalArgumentException;
	Boolean UpdateTests(List<TestsData> testsData) throws IllegalArgumentException;
	Boolean RemoveTests(List<TestsData> testsData) throws IllegalArgumentException;
	Boolean AddTests(List<TestsData> testsData) throws IllegalArgumentException;
}
