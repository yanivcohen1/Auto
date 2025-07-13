package com.who.tlv.ServicesWebsites.client.Tools;

import java.util.ArrayList;
import java.util.List;
import com.google.gwt.user.client.rpc.IsSerializable;

public class ReplayClass implements IsSerializable {
	
	private List<String> BrandList = new ArrayList<String>();
	private boolean All;
	
	public List<String> getBrandList() {
		return BrandList;
	}
	public void setBrandList(List<String> brandList) {
		BrandList = brandList;
	}
	public boolean GetAll() {
		return All;
	}
	public void setAll(boolean all) {
		All = all;
	}
	
}
	
