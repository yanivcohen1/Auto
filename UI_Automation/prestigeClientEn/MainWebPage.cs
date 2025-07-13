using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;

namespace PrestigeClientEn
{
    class MainWebPage : Automation_Lib
    {
        private readonly IWebDriver driver;

        public MainWebPage(IWebDriver _driver)
        {
            driver = _driver;
            string URL = "http://www.prestigecasino.com/";
            driver.Navigate().GoToUrl(URL); 
        }

        public DownloadPage ClickOnDownload()
        {
            WebSelenium.FindElement(By.PartialLinkText("Download1"), 5).Click();
            return new DownloadPage(driver);
        }

    }
}
