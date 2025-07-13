using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;
using System.Collections.ObjectModel;
using System.Threading;
using System.Windows.Forms;
using System.IO;

namespace EurograndWebDe
{
    class CongragulationPage : Automation_Lib
    {
        private readonly IWebDriver _driver;

        /// <summary>
        /// Open the WebPage
        /// </summary>
        /// <param name="_driver"></param>
        public CongragulationPage(IWebDriver driver)
        {
            _driver = driver;
        }

        /// <summary>
        /// Click On PlayBingo
        /// </summary>
        /// <returns></returns>
        public CashierPage ClickOnDeposit()
        {
            WebSelenium.FindElement(_driver, By.CssSelector("a.depositBtn > div"), 5).Click();
            Thread.Sleep(5000);
            //driver.Manage().Window.Maximize();
            string passwordPath = _rootPath + "/EurograndWebDe/PasswordWebEuro.txt";
            string password = File.ReadAllText(passwordPath);
            WriteToPlayersUsersfile("YANQALN" + _userName + password + ", EurograndWebDe");

            return new CashierPage(_driver);
        }

    }
}
