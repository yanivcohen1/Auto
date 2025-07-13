using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;
using System.Collections.ObjectModel;
using System.Threading;

namespace EurograndWebEn
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
            driver.Navigate().GoToUrl(URL);
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
