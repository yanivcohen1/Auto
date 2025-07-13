package com.williamhill.whgtf.asl.interfaces;

import java.io.File;
import java.util.HashMap;

public interface HttpRequestBasedHandler {

	public boolean httpCreateRequest(String requestType, String url);

	public boolean httpSendRequest();

	public boolean httpSendRequestAndValidateResponseCode(int responseCode);

	public boolean httpSendRequestAndValidateResponseContainsText(String text);

	public boolean httpAddHeader(String name, String value);

	public boolean httpAddHeaders(HashMap<String, String> listOfHeaders);

	public boolean httpAddQueryData(String name, String value);

	public boolean httpAddQueryData(HashMap<String, Object> listOfQueryData);

	public boolean httpAddPostBody(String body);

	public boolean httpAddField(String name, String value);

	public boolean httpAddField(String name, File file);

	public boolean httpAddFields(HashMap<String, Object> listOfPostData);

	public boolean httpExtractTextFromHttpResponse(String before, String after,
			String identifier);

	public boolean httpUseProxy(String host, int port);

	public boolean httpResponseContainsText(String... text);

}
