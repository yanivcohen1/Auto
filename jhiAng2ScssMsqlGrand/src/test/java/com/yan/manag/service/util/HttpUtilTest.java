package com.yan.manag.service.util;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.http.client.ClientProtocolException;

import com.yan.manag.service.dto.RunTestsDTO;

public class HttpUtilTest {

	public static void main(String[] args) throws ClientProtocolException, IOException {
		Params param1 = new Params();
		String[] key1 = { "k1", "k11" };
		param1.setKey(key1);
		String[] value1 = { "v1", "v11" };
		param1.setValue(value1);
		Params param2 = new Params();
		String[] key2 = { "k2", "k22" };
		param2.setKey(key2);
		String[] value2 = { "v2", "v22" };
		param2.setValue(value2);
		List<Params> srcIn = List.of(param1, param2);
		Map<String, String> paramsIn = Map.of("test1", "1", "test2", "2");
		Map<String, String> paramsOut = Map.of("test1", "", "test2", "");
		try {
			//List<Params> res = HttpUtil.getMsg("http://127.0.0.1:8001/front-panel-controls/slide/get_json",
					//paramsIn, false, srcIn, paramsOut, true);
			List<Params> res = HttpUtil.postMsg("http://127.0.0.1:8001/front-panel-controls/slide/post_json", 
				paramsIn, false, srcIn, srcIn, paramsOut, true);
		System.out.println(res);
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
//List<RunTestsDTO> res = HttpUtil.getMsg("http://localhost:8081/api/run_tests", null, s);
class Params {
	private String[] Key;
	private String[] Value;
	
	public String[] getKey() {
		return Key;
	}
	public void setKey(String[] key) {
		Key = key;
	}
	public String[] getValue() {
		return Value;
	}
	public void setValue(String[] value) {
		Value = value;
	}
	
	
}