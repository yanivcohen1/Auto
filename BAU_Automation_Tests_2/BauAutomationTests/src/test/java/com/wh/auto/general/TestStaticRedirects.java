package com.wh.auto.general;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;

public class TestStaticRedirects {
	protected ArrayList<ArrayList<String>> urls = CSVReader.readFile(Utility.getFilePathFromResource("static_redirects.csv"));
	protected String[] TestBrowser = Utility.getBrowsersPerTest(this.getClass().getSimpleName());

	@DataProvider(name = "browsersList")
	public Object[][] setBrowsersList() {
		Object[][] browsers = new Object[TestBrowser.length][1];
		for (int i = 0; i < TestBrowser.length; i++) {
			browsers[i][0] = TestBrowser[i];
		}
		return browsers;
	}

	/**
	 * test static redirects. The urls are taken from static_redirects.csv file
	 * only 302 redirects are taken
	 * @param browserName
	 */
	@Test(dataProvider = "browsersList")
	public void testRedirects(String browserName) {
		
		System.out.println("------ 302 redirects -------");
		
		List<String> errorMessages = new ArrayList<String>();
		WebDriver driver = (new Browsers()).getDriver(browserName);
		int counter = 0;
		boolean error = false;

		for (ArrayList<String> line : urls) {
			counter++;
			String sourceUrl = line.get(0);
			String targetUrl = line.get(1);
			String redirectCode = line.get(2);
			
			// check that the expected redirect code is 302 (the redirect code isn't being checked strictly)
			if (!redirectCode.equals("302")) {
				continue;
			}
			
			if (sourceUrl.startsWith("http://")
					&& targetUrl.startsWith("http://")) {

				System.out.println("checking:" + sourceUrl);
				driver.get(sourceUrl);

				if (targetUrl.compareToIgnoreCase(driver.getCurrentUrl()) != 0) {
					System.out.println(sourceUrl + " is not redirected to "
							+ targetUrl);
					errorMessages.add(sourceUrl + " is not redirected to "
							+ targetUrl);
					error = true;
				}
			}
		}

		System.out.println("Checked " + counter + " URLs");

		if (error) {
			Assert.fail();
		}
	}

	/**
	 * test static 301 redirects. The urls are taken from static_redirects.csv file
	 * only 301 redirects are taken in this test
	 * @param browserName
	 */
	@Test(dataProvider = "browsersList")
	public void test301Redirects(String browserName) {

		System.out.println("------ 301 redirects -------");

		WebDriver driver = (new Browsers()).getDriver(browserName);
		List<String> errorMessages = new ArrayList<String>();
		int counter = 0;
		boolean error = false;

		for (ArrayList<String> line : urls) {
			counter++;
			String sourceUrl = line.get(0);
			String targetUrl = line.get(1);
			String redirectCode = line.get(2);
			
			if (!redirectCode.equals("301")) {
				continue;
			}

			// check the redirect
			if (sourceUrl.startsWith("http://")
					&& targetUrl.startsWith("http://")) {

				if (!is301Redirect(sourceUrl)) {
					errorMessages.add(sourceUrl + " is not 301 redirect");
					error = true;
				}

				System.out.println("checking:" + sourceUrl);
				driver.get(sourceUrl);

				if (targetUrl.compareToIgnoreCase(driver.getCurrentUrl()) != 0) {
					System.out.println(sourceUrl + " is not redirected to "
							+ targetUrl);
					errorMessages.add(sourceUrl + " is not redirected to "
							+ targetUrl);
					error = true;
				}
			}
		}

		System.out.println("Checked " + counter + " URLs");

		if (error) {
			for (String errorMessage : errorMessages)
				System.out.println(errorMessage);
			Assert.fail();
		}
	}

	/**
	 * Check if the URL has 301 redirect
	 * 
	 * @param url
	 * @return
	 */
	protected boolean is301Redirect(String url) {
		URL obj;
		HttpURLConnection conn;
		try {

			// define the request
			obj = new URL(url);
			conn = (HttpURLConnection) obj.openConnection();
			conn.setReadTimeout(5000);
			conn.addRequestProperty("Accept-Language", "en-US,en;q=0.8");
			conn.addRequestProperty("User-Agent", "Mozilla");

			// get the response status
			int status = conn.getResponseCode();
			return (status == HttpURLConnection.HTTP_MOVED_PERM);

		} catch (MalformedURLException e) {
			return false;
		} catch (IOException e) {
			return false;
		}

	}

}
