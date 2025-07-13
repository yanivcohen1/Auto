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

namespace RubyBingoEn
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
            _driver.FindElement(By.Id("RC_Amount")).SendKeys("50");
            _driver.FindElement(By.Id("RC_CardNumber")).Clear();
            _driver.FindElement(By.Id("RC_CardNumber")).SendKeys("1111111111111111");
            _driver.FindElement(By.Id("RC_CVV2")).Clear();
            _driver.FindElement(By.Id("RC_CVV2")).SendKeys("111");
            _driver.FindElement(By.Id("RC_StateText")).Clear();
            _driver.FindElement(By.Id("RC_StateText")).SendKeys("state");
            WebSelenium.FindElement(_driver, By.CssSelector("td.main > span"), 5).Click();
        }

        /// <summary>
        /// Popup Your deposit has been approved and will be charged as WH ONLINE. Thank you and good luck!
        /// </summary>
        public DepositPage CloseApprovePopup()
        {
            new WebDriverWait(_driver, TimeSpan.FromSeconds(400)).
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
            WebSelenium.goToURLContainWindow(_driver, "https://cashier1.digitalarea1000.com");
            return new DepositPage(_driver);
        }

    }
}
