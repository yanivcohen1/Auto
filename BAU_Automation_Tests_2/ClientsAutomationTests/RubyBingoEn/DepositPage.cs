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

namespace RubyBingoEn
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
            WebSelenium.FindElement(_driver, By.Id("D_Amount"), 10).Clear();
            _driver.FindElement(By.Id("D_Amount")).SendKeys("50");
            _driver.FindElement(By.Id("DCC_CVV2")).Clear();
            _driver.FindElement(By.Id("DCC_CVV2")).SendKeys("111");
            WebSelenium.FindElement(_driver, By.CssSelector("td.main > span"), 5).Click();
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
