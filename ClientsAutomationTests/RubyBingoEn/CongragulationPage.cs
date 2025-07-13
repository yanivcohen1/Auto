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

namespace RubyBingoEn
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
        public MainGamePage ClickGoToBingo()
        {
            WebSelenium.FindElement(_driver, By.CssSelector("span > span"), 5).Click();
            Thread.Sleep(2000);
            WebSelenium.goToURLContainWindow(_driver, "game_page");
            Thread.Sleep(10000);
            string passwordPath = _rootPath + "/RubyBingoEn/PasswordRuby.txt";
            string password = File.ReadAllText(passwordPath);
            string newPassword = Convert.ToString(Convert.ToInt32(password));
            SendKeys.SendWait("YANQAN" + _userName + newPassword);
            SendKeys.SendWait("{ENTER}");
            //goToURLContainWindow("game_page");
            _driver.Manage().Window.Maximize();
            return new MainGamePage(_driver);
        }

    }
}
