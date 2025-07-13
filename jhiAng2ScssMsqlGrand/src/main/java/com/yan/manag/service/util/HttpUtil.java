package com.yan.manag.service.util;

import java.io.IOException;
import java.lang.reflect.Type;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.httpclient.URI;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
//import org.apache.http.client.utils.URIBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.yan.manag.service.dto.RunTestsDTO;

/*try {
	List<RunTestsDTO> s = new ArrayList<RunTestsDTO>();
	List<RunTestsDTO> res = HttpUtil.getMsg("http://localhost:8081/api/run_tests", null, s);
	System.out.println(res);
} catch (URISyntaxException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
}*/

public class HttpUtil {

	public static <T> T postMsg(String postUrl, Map<String, String> paramsIn, T srcIn, T typeOut,
			Map<String, String> paramsOut) throws ClientProtocolException, IOException, URISyntaxException {
		return postMsg(postUrl, paramsIn, false, srcIn, typeOut, paramsOut, false);
	}
	
	public static <T> T postMsg(String postUrl, Map<String, String> paramsIn, boolean paramsInHeader, T srcIn, T typeOut,
			Map<String, String> paramsOut) throws ClientProtocolException, IOException, URISyntaxException {
		return postMsg(postUrl, paramsIn, paramsInHeader, srcIn, typeOut, paramsOut, false);
	}
	
	public static <T> T postMsg(String postUrl, Map<String, String> paramsIn, boolean paramsInHeader, T srcIn, T typeOut,
			Map<String, String> paramsOut, boolean labview) throws ClientProtocolException, IOException, URISyntaxException {
		// String postUrl=url;//"http://localhost:8081/";// put in your url
		Gson gson = new Gson();
		HttpPost postRequest = new HttpPost(postUrl);
		URIBuilder uriBuilder = new URIBuilder(postRequest.getURI());
		if (paramsIn != null && !paramsInHeader) {
			for (Map.Entry<String, String> entry : paramsIn.entrySet()) {
				System.out.println("ItemIn : " + entry.getKey() + " value : " + entry.getValue());
				uriBuilder.addParameter(entry.getKey(), entry.getValue());
			}
		}
		if (paramsIn != null && paramsInHeader) {
			for (Map.Entry<String, String> entry : paramsIn.entrySet()) {
				System.out.println("ItemIn : " + entry.getKey() + " value : " + entry.getValue());
				postRequest.setHeader(entry.getKey(), entry.getValue());
			}
		}
		postRequest.setHeader("Content-type", "application/json");
		StringEntity postingString = new StringEntity(gson.toJson(srcIn)); // convert to json
		postRequest.setEntity(postingString);
		java.net.URI uri = uriBuilder.build();
		postRequest.setURI(uri);
		HttpClient httpClient = HttpClientBuilder.create().build();
		HttpResponse response = httpClient.execute(postRequest);
		if (response.getStatusLine().getStatusCode() == 200) {
			if (paramsOut != null) {
				for (Map.Entry<String, String> entry : paramsOut.entrySet()) {
					String header = response.getHeaders(entry.getKey())[0].getValue();
					entry.setValue(header);
					System.out.println("ItemOut : " + entry.getKey() + " value : " + header);
				}
			}
			// String result = new String(response.content(), "UTF-8");
			HttpEntity entity = response.getEntity();
			String responseString1 = EntityUtils.toString(entity, "UTF-8");
			String responseString;
			if (labview) {
				responseString = responseString1.substring(10, responseString1.length() - 1);// remove result labview
			} else {
				responseString = responseString1;
			}
			if (responseString != null) {
				Type listType = typeOut.getClass();
				T obj = gson.fromJson(responseString, listType);
				return obj;
			}
		}
		return null;
	}

	public static <T> T getMsg(String getUrl, Map<String, String> paramsIn, T typeOut, Map<String, String> paramsOut)
			throws ClientProtocolException, IOException, URISyntaxException {
		return getMsg(getUrl, paramsIn, false, typeOut, paramsOut, false);
	}

	public static <T> T getMsg(String getUrl, Map<String, String> paramsIn, boolean paramsInHeader, T typeOut, Map<String, String> paramsOut)
			throws ClientProtocolException, IOException, URISyntaxException {
		return getMsg(getUrl, paramsIn, paramsInHeader, typeOut, paramsOut, false);
	}
	
	public static <T> T getMsg(String getUrl, Map<String, String> paramsIn, boolean paramsInHeader, T typeOut, Map<String, String> paramsOut,
			boolean labview) throws ClientProtocolException, IOException, URISyntaxException {
		// String postUrl= getUrl;//"http://localhost:8081/";// put in your url
		Gson gson = new Gson();
		HttpGet getRequest = new HttpGet(getUrl);
		// StringEntity getingString = new StringEntity(gson.toJson(typeIn)); //convert
		// to json
		URIBuilder uriBuilder = new URIBuilder(getRequest.getURI());
		if (paramsIn != null && !paramsInHeader) {
			for (Map.Entry<String, String> entry : paramsIn.entrySet()) {
				System.out.println("Item : " + entry.getKey() + " value : " + entry.getValue());
				uriBuilder.addParameter(entry.getKey(), entry.getValue());
			}
		}
		if (paramsIn != null && paramsInHeader) {
			for (Map.Entry<String, String> entry : paramsIn.entrySet()) {
				System.out.println("ItemIn : " + entry.getKey() + " value : " + entry.getValue());
				getRequest.setHeader(entry.getKey(), entry.getValue());
			}
		}
		getRequest.setHeader("Content-type", "application/json");
		java.net.URI uri = uriBuilder.build();
		getRequest.setURI(uri);
		HttpClient httpClient = HttpClientBuilder.create().build();
		HttpResponse response = httpClient.execute(getRequest);
		if (response.getStatusLine().getStatusCode() == 200) {
			if (paramsOut != null) {
				for (Map.Entry<String, String> entry : paramsOut.entrySet()) {
					String header = response.getHeaders(entry.getKey())[0].getValue();
					entry.setValue(header);
					System.out.println("ItemOut : " + entry.getKey() + " value : " + header);
				}
			}
			// String result = new String(response.content(), "UTF-8");
			HttpEntity entity = response.getEntity();
			String responseString1 = EntityUtils.toString(entity, "UTF-8");
			String responseString;
			if (labview) {
				responseString = responseString1.substring(10, responseString1.length() - 1);// remove result labview
			} else {
				responseString = responseString1;
			}
			if (responseString != null) {
				Type listType = typeOut.getClass();
				T obj = gson.fromJson(responseString, listType);
				return obj;
			}
		}
		return null;
	}

}
