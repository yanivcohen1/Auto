using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;

namespace EurograndClientEn
{
    class MainWebPage
    {
        private readonly IWebDriver driver;
        private readonly Automation_Lib auto;

        public MainWebPage(IWebDriver _driver)
        {
            driver = _driver;
            string URL = "http://www.eurogrand.com/";
            driver.Navigate().GoToUrl(URL); 
        }

        public DownloadPage ClickOnDownload()
        {
            WebSelenium.FindElement(By.Id("download"),5).Click();
            return new DownloadPage(driver);
        }

    }
}
