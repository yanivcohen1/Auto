package com.wh.auto.pt_admin;

import java.awt.AWTException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.wh.auto.common.WebDriverUtils;

public class PT_AdminUsersDataPage extends WebDriverUtils {

	private final WebDriver driver;
	  
	/**
	 * PT_AdminUsersDataPage Constructor
	 * @param driver
	 */
    public PT_AdminUsersDataPage(WebDriver driver) { 
       super();
       this.driver = driver;
    }
	
    /**
     * find Advertiser
     * @param userName
     * @return
     * @throws AWTException
     * @throws InterruptedException
     */
    public String findAdvertiser(String userName) throws AWTException, InterruptedException {  
    	
    	new WebDriverWait(driver, 60).until(ExpectedConditions
				.visibilityOfElementLocated(By.cssSelector("div#message-info-1.info")));
    	WebElement table = driver.findElement(By.cssSelector("table.result"));
    	Collection<WebElement> TableRows = GetTableRows(table);
        String advertiser = null;
        for (WebElement row : TableRows) {
        	Collection<WebElement> rowCell = GetRowCells(row);
        	List<WebElement> rowCellList = new ArrayList<WebElement>(rowCell);
        	if(rowCellList.get(0).findElements(By.linkText(userName)).size() > 0){
        		advertiser = rowCellList.get(9).getText();
        	}
		}
        return advertiser;
    }
    	/*(new WebDriverWait(driver, 10)).until(new ExpectedCondition() {
    		@Override
			public Boolean apply(Object _driver) {
				return ((WebDriver)_driver).findElement(By.linkText("Play Now")).isDisplayed();
			}
		});*/
    	//if (row.findElements(By.cssSelector("td img[title*='Overdue by']")).size() > 0)
        //          return true;
    
}
