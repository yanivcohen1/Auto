using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;
using System.Collections.ObjectModel;
using System.Threading;
using OpenQA.Selenium.Interactions;

namespace EurograndWebDe
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
            string URL = "http://serve.eurogrand.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=14153215&lp=0";
            //driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl(URL);
            Thread.Sleep(3000);
            driver.Navigate().GoToUrl("http://www.eurogrand.com/de");
            Thread.Sleep(3000);
            driver.Navigate().Refresh();
            //IWebElement webElement = FindElement(By.CssSelector("div.lang-bar"), 10);
            //new Actions(_driver).MoveToElement(webElement)..Perform();
            //SafeClick(webElement);
            //SafeClick(webElement);
            //Thread.Sleep(1000);
            //FindElement(By.PartialLinkText("Deutsch"), 10).Click();
            //driver.FindElement(By.PartialLinkText("Deutsch")).Click();
            //Thread.Sleep(1000);
            //driver.Navigate().Refresh();
        }

        /// <summary>
        /// Click On PlayBingo
        /// </summary>
        /// <returns></returns>
        public RegistrationPage ClickOnJoinNow()
        {
            WebSelenium.FindElement(_driver, By.Id("registerTopBtn"), 5).Click();
            Thread.Sleep(3000);
            WebSelenium.goToURLContainWindow(_driver, "https://virtuefusion.rubybingo.com");
            return new RegistrationPage(_driver);
        }

    }
}
