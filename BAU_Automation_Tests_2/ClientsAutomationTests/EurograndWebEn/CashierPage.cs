using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using OpenQA.Selenium;
using System.Threading;
using System.IO;
using System.Windows.Automation;
using System.Windows;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Interactions;
using System.Windows.Forms;

namespace EurograndWebEn
{
    public class CashierPage : Automation_Lib
    {
        private readonly IWebDriver _driver;

        public CashierPage(IWebDriver driver)
        {
            _driver = driver;
        }

        /// <summary>
        /// Enter Cashier form Details
        /// </summary>
        public void EnterDetails()
        {
            //Cashier form
            _driver.SwitchTo().Frame("innerIframe");
            _driver.Manage().Window.Maximize();
            //find CardType elememt
            var CardType = WebSelenium.FindElement(_driver, By.Id("RC_CardType"), 10);
            //create select element object 
            (new SelectElement(CardType)).SelectByText("Visa Delta");
            //find ExpirationMonth" elememt
            var ExpirationMonth = _driver.FindElement(By.Id("RC_ExpirationMonth"));
            //create select element object 
            (new SelectElement(ExpirationMonth)).SelectByText("01");
            // select by text
            var ExpirationYear = _driver.FindElement(By.Id("RC_ExpirationYear"));
            //create select element object 
            (new SelectElement(ExpirationYear)).SelectByText("2023");
            // select by text
            _driver.FindElement(By.Id("RC_Amount")).Clear();
            _driver.FindElement(By.Id("RC_Amount")).SendKeys("");
            _driver.FindElement(By.Id("RC_CardNumber")).Clear();
            _driver.FindElement(By.Id("RC_CardNumber")).SendKeys("1111111111111111");
            _driver.FindElement(By.Id("RC_CVV2")).Clear();
            _driver.FindElement(By.Id("RC_CVV2")).SendKeys("111");
            _driver.FindElement(By.Id("RC_StateText")).Clear();
            _driver.FindElement(By.Id("RC_StateText")).SendKeys("state");
            //click on Save details and deposit
            Condition controlCondition = new PropertyCondition(AutomationElement.NameProperty, "Registration Done");
            AutomationElement mainWindow = waitforWindowNameClass("Registration Done - Google Chrome", controlCondition, 30, true);
            Rect rect = mainWindow.Current.BoundingRectangle;
            System.Drawing.Point p = Cursor.Position;
            int x = Convert.ToInt32(rect.Left) + 633;//676, 613
            int y = Convert.ToInt32(rect.Top) + 586;
            MouseClick(x, y);
            //FindElement(By.CssSelector("td.main > span"), 5).Click();

            //Actions action = new Actions(_driver);
            //IWebElement we = _driver.FindElement(By.CssSelector("td.main > span"));
            //action.MoveToElement(we).Click().Build().Perform();
        }

        /// <summary>
        /// Popup Your deposit has been approved and will be charged as WH ONLINE. Thank you and good luck!
        /// </summary>
        public DepositPage CloseApprovePopup()
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
            Thread.Sleep(1000);
            return new DepositPage(_driver);
        }

    }
}
