using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;
using Spring.Objects.Factory.Attributes;
using System.Threading;

namespace com.who.tests.clients
{
    public class MainWebPage : Automation_Lib
    {
        protected readonly IWebDriver _driver;

        [Required]
        public string URL_Main { get; set; }
        public string URL_Language { get; set; }

        public void init()
        {
            _driver.Navigate().GoToUrl(URL_Main);
            Thread.Sleep(3000);
        }

        public MainWebPage(WebSelenium webSelenium)
        {
            _driver = webSelenium.Driver;
            //_driver.Navigate().GoToUrl(URL);
            //string URL = "http://serve.21nova.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=853011616&lp=0";
        }

        public DownloadPage ClickOnDownload(By by)
        {
            WebSelenium.FindElement(_driver, by, 10).Click();
            return new DownloadPage(_driver);
        }

        public void NavigateToLanguageUrl()
        {
            _driver.Navigate().GoToUrl(URL_Language);
            Thread.Sleep(3000);
        }

    }
}
