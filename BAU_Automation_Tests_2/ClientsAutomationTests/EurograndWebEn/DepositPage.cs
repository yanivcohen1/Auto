using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Windows;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace EurograndWebEn
{
	/// <summary>
	/// The Deposit Page
	/// </summary>
	public class DepositPage : Automation_Lib
	{
		private readonly IWebDriver _driver;

		public DepositPage(IWebDriver driver)
		{
			_driver = driver;
		}

		/// <summary>
		/// Deposit 50 URO
		/// </summary>
		/// <returns></returns>
		public void Deposit()
		{
			//driver.SwitchTo().Frame("innerIframe");
			WebSelenium.FindElement(_driver, By.Id("D_Amount"), 20);
			_driver.FindElement(By.Id("D_Amount")).Clear();
			_driver.FindElement(By.Id("D_Amount")).SendKeys("100");
			_driver.FindElement(By.Id("DCC_CVV2")).Clear();
			_driver.FindElement(By.Id("DCC_CVV2")).SendKeys("111");
			//FindElement(By.CssSelector("td.main > span"), 5).Click();
			//click on deposit
			Condition controlCondition = new PropertyCondition(AutomationElement.NameProperty, "Registration Done");
			AutomationElement mainWindow = waitforWindowNameClass("Registration Done - Google Chrome", controlCondition, 30, true);
			Rect rect = mainWindow.Current.BoundingRectangle;
			System.Drawing.Point p = Cursor.Position;
			int x = Convert.ToInt32(rect.Left) + 690;//690, 358
			int y = Convert.ToInt32(rect.Top) + 382;
			MouseClick(x, y);
		}

		/// <summary>
		/// confirmDeposit
		/// </summary>
		public void confirmDeposit()
		{
			//new WebDriverWait(_driver, 25).until(ExpectedConditions.visibilityOf(
			//	_driver.findElement(By.cssSelector("#DCC_Submit > tbody > tr > td.main > span"))))
			WebSelenium.FindElement(_driver, By.Id("depositConfirmed"), 25).Click();//confirm Deposit radio
			WebSelenium.FindElement(_driver, By.Id("UM_OKButtonText"), 10).Click();//confirm butten
			//waitForElement(driver, By.id("depositConfirmed"), 25).click();//confirm Deposit radio
			//waitForElement(driver, By.id("UM_OKButtonText"), 10).click();//confirm butten
			//Condition controlNameCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "check box");
			//AutomationElement mainWindow2 = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 60, false);
			//AutomationElement control = mainWindow2.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
			//ClickElement(control);//PROCEED chackBox
			//Thread.Sleep(1000);
			//SendKeys.SendWait("{TAB}");
			//SendKeys.SendWait("{ENTER}");
			//controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "PROCEED");
			//control = mainWindow2.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
			//ClickElement(control);//PROCEED button
		}

		/// <summary>
		/// Popup Your deposit has been approved and will be charged as WH ONLINE. Thank you and good luck!
		/// </summary>
		public void CloseApprovePopup()
		{
			new WebDriverWait(_driver, TimeSpan.FromSeconds(300)).
				Until(drv => (drv.FindElement(By.Id("UM_OKButtonText")).
					Displayed) ? drv.FindElement(By.Id("UM_OKButtonText")) : null).Click();
			//for (int i = 0; i < 200; i++)
			//{
			//    if (driver.FindElement(By.Id("UM_OKButtonText")).Displayed)
			//    {
			//        driver.FindElement(By.Id("UM_OKButtonText")).Click();
			//        break;
			//    }
			//    Thread.Sleep(1000);
			//}
		}

		/// <summary>
		/// Read Current Balance
		/// </summary>
		public string ReadCurrentBalance()
		{
			return WebSelenium.FindElement(_driver, By.Id("PH_UserBalance"), 5).Text;
		}

	}
}
