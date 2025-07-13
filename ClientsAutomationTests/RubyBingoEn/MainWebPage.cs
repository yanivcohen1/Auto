using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;
using System.Collections.ObjectModel;
using System.Threading;

namespace RubyBingoEn
{
    class MainWebPage : Automation_Lib
    {
        private readonly IWebDriver _driver;

        /// <summary>
        /// Open the WebPage
        /// </summary>
        /// <param name="_driver"></param>
        public MainWebPage(IWebDriver driver)
        {
            _driver = driver;
            string URL = "http://serve.rubybingo.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=734601858&lp=0";
            _driver.Navigate().GoToUrl(URL);
        }

        /// <summary>
        /// Click On PlayBingo
        /// </summary>
        /// <returns></returns>
        public LoginPage ClickOnPlayBingo()
        {
            WebSelenium.FindElement(_driver, By.PartialLinkText("Play Bingo"), 5).Click();
            Thread.Sleep(3000);
            WebSelenium.goToURLContainWindow(_driver, "https://virtuefusion.rubybingo.com");
            return new LoginPage(_driver);
        }

    }
}
