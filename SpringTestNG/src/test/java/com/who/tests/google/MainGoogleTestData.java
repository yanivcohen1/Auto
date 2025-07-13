package com.who.tests.google;

import org.openqa.selenium.WebDriver;
import org.springframework.beans.factory.annotation.Autowired;

import com.who.utils.Browsers;

public class MainGoogleTestData {


	private SearchPage searchPage;
	private ResultPage resultPage;
	
	public SearchPage getSearchPage() {
		return searchPage;
	}

	public void setSearchPage(SearchPage searchPage) {
		this.searchPage = searchPage;
	}
	
	public ResultPage getResultPage() {
		return resultPage;
	}

	public void setResultPage(ResultPage resultPage) {
		this.resultPage = resultPage;
	}
}

//private String browseName;
//private String expectedResult;
//private WebDriver driver;
/*public String getBrowseName() {
return browseName;
}
public void setBrowseName(String browseName) {
this.browseName = browseName;
}
public String getExpectedResult() {
return expectedResult;
}
public void setExpectedResult(String expectedResult) {
this.expectedResult = expectedResult;
}*/