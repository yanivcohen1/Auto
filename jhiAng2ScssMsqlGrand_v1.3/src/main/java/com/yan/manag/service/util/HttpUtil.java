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

    public static <T> T postMsg(String postUrl, Map<String, String> paramsIn, T srcIn, T typeOut) throws ClientProtocolException, IOException, URISyntaxException {
        //String postUrl=url;//"http://localhost:8081/";// put in your url
        Gson gson= new Gson();
        HttpPost postRequest = new HttpPost(postUrl);
        URIBuilder uriBuilder = new URIBuilder(postRequest.getURI());
        if (paramsIn != null) {
	        for (Map.Entry<String, String> entry : paramsIn.entrySet()) {
	        	System.out.println("Item : " + entry.getKey() + " Count : " + entry.getValue());
	        	uriBuilder.addParameter(entry.getKey(), entry.getValue());
	        };
        }
        postRequest.setHeader("Content-type","application/json");
        StringEntity postingString = new StringEntity(gson.toJson(srcIn)); //convert to json
        postRequest.setEntity(postingString);
        java.net.URI uri = uriBuilder.build();
        postRequest.setURI(uri);
        HttpClient httpClient = HttpClientBuilder.create().build();
        HttpResponse  response = httpClient.execute(postRequest);
        if (response.getStatusLine().getStatusCode() == 200){
        	   //String result = new String(response.content(), "UTF-8");
        	HttpEntity entity = response.getEntity();
        	String responseString = EntityUtils.toString(entity, "UTF-8");
        	   if (responseString != null){
        		   Type listType = typeOut.getClass();
        		   T obj = gson.fromJson(responseString, listType);
        	       return obj;
        	   }
        }
        return null;
    }
    
    public static <T> T getMsg(String getUrl, Map<String, String> paramsIn, T typeOut) throws ClientProtocolException, IOException, URISyntaxException {
        //String postUrl= getUrl;//"http://localhost:8081/";// put in your url
        Gson gson= new Gson();
        HttpGet getRequest = new HttpGet(getUrl);
        //StringEntity  getingString = new StringEntity(gson.toJson(typeIn)); //convert to json
        URIBuilder uriBuilder = new URIBuilder(getRequest.getURI());
        if (paramsIn != null) {
			for (Map.Entry<String, String> entry : paramsIn.entrySet()) {
	        	System.out.println("Item : " + entry.getKey() + " Count : " + entry.getValue());
	        	uriBuilder.addParameter(entry.getKey(), entry.getValue());
			}
        };
        getRequest.setHeader("Content-type","application/json");
        java.net.URI uri = uriBuilder.build();
        getRequest.setURI(uri);
        HttpClient httpClient = HttpClientBuilder.create().build();
        HttpResponse  response = httpClient.execute(getRequest);
        if (response.getStatusLine().getStatusCode() == 200){
        	   //String result = new String(response.content(), "UTF-8");
        	HttpEntity entity = response.getEntity();
        	String responseString = EntityUtils.toString(entity, "UTF-8");
        	   if (responseString != null){
        		   Type listType = typeOut.getClass();
        		   T obj = gson.fromJson(responseString, listType);
        	       return obj;
        	   }
        }
        return null;
    }
    
}
