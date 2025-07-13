package com.wh.auto.eurogrand.desktop;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.google.common.base.Function;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;
import com.wh.auto.utils.RandomString;
import com.wh.auto.utils.WHForm;
import com.wh.auto.utils.WHFormFields.WHFormField;
import com.wh.auto.utils.WHFormFields.WHFormFieldCheckbox;
import com.wh.auto.utils.WHFormFields.WHFormFieldEmail;
import com.wh.auto.utils.WHFormFields.WHFormFieldRadio;
import com.wh.auto.utils.WHFormFields.WHFormFieldSelect;

public class TestRegistrationOld {

	protected Browsers browser = new Browsers();
	protected Map<String, String> Baseurls = new HashMap<String, String>();

	// get the utility Properties
	protected Properties utilityProp = Utility.getPropertyFile("utility.properties");

	// define list of browsers and languages to test
	protected String[] TestBrowser;
	protected String[] TestLanguage;

	@BeforeClass
	public void setBaseurls() {

		try {
			System.out.println(this.getClass().getSimpleName());
			TestBrowser = Utility.getBrowsersPerTest(this.getClass().getSimpleName());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		// get euorogrand unsubscribe links per lang
		String registerLinksFile = Utility.getFilePathFromResource("EurograndRegisterLinks.csv");
		ArrayList<ArrayList<String>> links = CSVReader.readFile(registerLinksFile);
		TestLanguage = new String[links.size()];
		int counter = 0;
		for (ArrayList<String> csvline : links) {
			Baseurls.put(csvline.get(0), csvline.get(1));
			TestLanguage[counter++] = csvline.get(0);
		}

	}

	@DataProvider(name = "browsersAndLanguages")
	public Object[][] setBrowsersAndLanguages() {
		Object[][] browsersAndLanguages = new Object[TestBrowser.length * TestLanguage.length][2];
		for (int i = 0; i < TestBrowser.length; i++) {
			for (int j = 0; j < TestLanguage.length; j++) {
				browsersAndLanguages[(i + 1) * j][0] = TestBrowser[i];
				browsersAndLanguages[(i + 1) * j][1] = TestLanguage[j];
			}
		}
		return browsersAndLanguages;
	}

	/**
	 * Test a successful registration
	 * 
	 * @param browserName
	 * @param language
	 */
	@Test(dataProvider = "browsersAndLanguages")
	public void testSuccessfulRegistration(String browserName, String language) {

		// show start of test
		Reporter.log("Checking: " + Baseurls.get(language));

		// go to the integration page
		WebDriver driver = (new Browsers()).getDriver(browserName);

		// perform the registration
		register(driver, Baseurls.get(language));

		// check that the URL changed
		Assert.assertNotEquals(driver.getCurrentUrl(), Baseurls.get(language));

		driver.close();
	}

	/**
	 * Perform a successful registration process
	 * 
	 * @param driver
	 * @param registrationUrl
	 *            - (optional) if not supplied, the registration will be done on
	 *            the current page
	 */
	public static void register(final WebDriver driver, String... registrationUrl) {

		// define timeout for waiting for elements to appear (30 sec. - it's A
		// LOT)
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		// go to the page (if the URL was supplied)
		if (registrationUrl.length > 0) {
			driver.get(registrationUrl[0]);
		}

		// put a cookie to disable captcha
		setCookie(driver, "who_nocaptcha", "no");

		// fill the form
		WHForm f = new WHForm(driver, "registerform");
		f.addField(new WHFormField("firstname", 6, WHFormField.TYPE_ALPHA));
		f.addField(new WHFormField("lastname", 6, WHFormField.TYPE_ALPHA));
		f.addField(new WHFormFieldSelect("bday"));
		f.addField(new WHFormFieldSelect("bmonth"));
		f.addField(new WHFormFieldSelect("byear", "1975"));
		f.addField(new WHFormFieldRadio("sex"));

		// get Random email value
		String randEmailValue = (new WHFormFieldEmail("lambda_field1", 5)).getValue();
		f.addField(new WHFormFieldEmail("email", randEmailValue));
		f.addField(new WHFormFieldEmail("email_confirm", randEmailValue));

		f.addField(new WHFormField("address", 10, WHFormField.TYPE_ALPHA));
		f.addField(new WHFormField("city", 8, WHFormField.TYPE_ALPHA));
		f.addField(new WHFormField("zip", 6, WHFormField.TYPE_NUMERIC));

		f.addField(new WHFormFieldSelect("countrycode"));
		f.addField(new WHFormField("phonenumber", 10, WHFormField.TYPE_NUMERIC));

		String randUsername = (new WHFormField("lambda_field2", 8)).getValue(), randPassword = (new WHFormField("lambda_field3", 8)).getValue();
		Reporter.log("randUsername = " + randUsername + "; randPassword = " + randPassword);
		f.addField(new WHFormField("username", randUsername));
		f.addField(new WHFormField("password1", randPassword));
		f.addField(new WHFormField("password2", randPassword));

		f.addField(new WHFormFieldSelect("currency"));

		f.addField(new WHFormField("security_code", 4, WHFormField.TYPE_NUMERIC));

		f.addField(new WHFormFieldCheckbox("terms", true));

		f.onBeforeSubmit(new Function<WHForm, Void>() {
			@Override
			public Void apply(WHForm arg0) {

				// check username approved
				try {
					WebDriverWait wait = new WebDriverWait(driver, 30);
					wait.until(ExpectedConditions.visibilityOf(driver.findElement(By
							.xpath("//label[@for='username']//..//img[contains(@src, 'registration_v')]"))));
				} catch (Exception e) {
					Reporter.log("`check availability` did not return a response :( ");
				}

				return null;
			}
		});

		f.submit();

	}

	/**
	 * Set a cookie on the (current) page
	 * 
	 * @param driver
	 * @param cookieName
	 * @param cookieValue
	 * @return
	 */
	protected static boolean setCookie(WebDriver driver, String cookieName, String cookieValue) {
		URL regUrlObj;
		String regUrl = driver.getCurrentUrl();
		try {
			regUrlObj = new URL(regUrl);
			System.out.println("regUrlObj.getHost() = " + regUrlObj.getHost());
			String[] hostNameParts = regUrlObj.getHost().split("\\.");
			String domainForCookie = "." + hostNameParts[hostNameParts.length - 2] + "." + hostNameParts[hostNameParts.length - 1];
			driver.manage().addCookie(new Cookie(cookieName, cookieValue, domainForCookie, "/", null));
		} catch (MalformedURLException e1) {
			Reporter.log("Cannot create cookie");
			return false;
		}

		return true;
	}

	/**
	 * Get random string
	 * 
	 * @return
	 */
	protected String getRandomString(int numOfCharacters) {
		RandomString rs = new RandomString(numOfCharacters);
		return rs.nextString();
	}

	/**
	 * Get random number
	 * 
	 * @return
	 */
	protected String getRandomNumber(int numOfCharacters) {
		RandomString rs = new RandomString(numOfCharacters);
		return rs.nextNumber();
	}

	/**
	 * Get random alpha string
	 * 
	 * @return
	 */
	protected String getRandomAlpha(int numOfCharacters) {
		RandomString rs = new RandomString(numOfCharacters);
		return rs.nextAlpha();
	}

}
