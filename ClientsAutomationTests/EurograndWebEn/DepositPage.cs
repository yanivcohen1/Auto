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
            _driver.FindElement(By.Id("D_Amount")).SendKeys("50");
            _driver.FindElement(By.Id("DCC_CVV2")).Clear();
            _driver.FindElement(By.Id("DCC_CVV2")).SendKeys("111");
            //FindElement(By.CssSelector("td.main > span"), 5).Click();
            //click on deposit
            Condition controlCondition = new PropertyCondition(AutomationElement.NameProperty, "Registration Done");
            AutomationElement mainWindow = waitforWindowNameClass("Registration Done - Google Chrome", controlCondition, 30, true);
            Rect rect = mainWindow.Current.BoundingRectangle;
            System.Drawing.Point p = Cursor.Position;
            int x = Convert.ToInt32(rect.Left) + 690;//690, 358
            int y = Convert.ToInt32(rect.Top) + 358;
            MouseClick(x, y);
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
            return WebSelenium.FindElement(_driver, By.Id("C_CurrentBalance"), 5).Text;
        }

    }
}
