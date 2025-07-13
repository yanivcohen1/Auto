package stepdefs.ptAdmin;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;

import cucumber.api.java.en.Given;
import stepdefs.shared.SharedData;

public class Test_PT_Advertiser extends WebDriverUtils {
	
	public static String UserName;
	//private Logger logger = LogManager.getRootLogger();
	
	@Given("^User is navigating to Playtech Admin$")
	public void user_is_navigating_to_Playtech_Admin() throws Throwable {
		Thread.sleep(3000);
		assertTrue(navigateToPage(Utility.getUtilityProp("playtechAdminUrl")));
	}

	@Given("^User Fill Username in popup window$")
	public void user_Fill_Username_in_popup_window() throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "username";
		assertTrue(waitForVisibilityOfElementByName(name));
		String user = Utility.getUtilityProp("playtechAdminUser");
		assertTrue(navigateToElementByName(name));
		assertTrue(typeIn(user));	
	}

	@Given("^User Fill Password in popup window$")
	public void user_Fill_Password_in_popup_window() throws Throwable {
		assertTrue(navigateToRootElement());
		String name = "password";
		assertTrue(navigateToElementByName(name));
		assertTrue(typeIn(Utility.getUtilityProp("playtechAdminPass")));
	}
	
	@Given("^User Submit$")
	public void user_Submit() throws Throwable {
		assertTrue(navigateToRootElement());
		//assertTrue(waitForVisibilityOfElementByXpath("//input[@type='submit']"));
		assertTrue(navigateToElementByXpath("//input[@type='submit']"));
		assertTrue(click());
	}

	@Given("^User is navigating to Playtech AdminSearchUserUrl$")
	public void user_is_navigating_to_Playtech_AdminSearchUserUrl() throws Throwable {
		assertTrue(navigateToPage(Utility.getUtilityProp("playtechAdminSearchUserUrl")));
	}

	@Given("^User Select internalaccount$")
	public void user_Select_internalaccount() throws Throwable {
		assertTrue(navigateToRootElement());
		String msgCss = "input#internalaccount";
		assertTrue(waitForVisibilityOfElementByCss(msgCss));
		Thread.sleep(5000);
		assertTrue(navigateToElementByCSS(msgCss));
		assertTrue(click());
	}

	@Given("^User fill username \"(.*?)\"$")
	public void user_fill_username(String username) throws Throwable {
		Thread.sleep(5000);
		assertTrue(navigateToRootElement());
		String msgCss = "input#username";
		assertTrue(waitForVisibilityOfElementByCss(msgCss));
		assertTrue(navigateToElementByCSS(msgCss));
		if (username.trim().isEmpty()) {
			username = SharedData.getUserName();
		}
		setUserName(username);
		assertTrue(typeIn(username));
	}
	
	@Given("^User Click Submit$")
	public void user_Click_Submit() throws Throwable {
		assertTrue(navigateToRootElement());
		String msgCss = "input#submit";
		assertTrue(waitForVisibilityOfElementByCss(msgCss));
		assertTrue(navigateToElementByCSS(msgCss));
		assertTrue(click());
	}

	@Given("^User Find Advertiser \"([^\"]*)\"$")
	public void user_Find_Advertiser(String acspectedAdvertiser) throws Throwable {
		Thread.sleep(5000);
		assertTrue(navigateToRootElement());
		assertTrue(waitForVisibilityOfElementByCss("div#message-info-1.info"));
		String css = "table.result";
		assertTrue(waitForVisibilityOfElementByCss(css));
    	//WebElement table = driver.findElement(By.cssSelector("table.result"));
		//navigateToElementByCSS(css);
    	buildListByCSS(css);
    	WebElement table =getElementList().get(0);
    	List<WebElement> TableRows = GetTableRows(table);
    	//TableRows.get(0).getClass().
        String advertiser = null;
        for (WebElement row : TableRows) {
        	List<WebElement> rowCell = GetRowCells(row);
        	List<WebElement> rowCellList = new ArrayList<WebElement>(rowCell);
        	if(rowCellList.get(0).findElements(By.linkText(getUserName())).size() > 0){
        		advertiser = rowCellList.get(9).getText();
        	}
		}
        Reporter.log("find advertiser:" + advertiser, true);
        assertTrue("Test Fail find:" + advertiser, advertiser.contains(acspectedAdvertiser.trim()));
	}

	public static String getUserName() {
		return UserName;
	}

	public static void setUserName(String userName) {
		UserName = userName;
	}

}