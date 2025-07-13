using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;

namespace Nova21ClientEn
{
    class MainWebPage : Automation_Lib
    {
        private readonly IWebDriver driver;

        public MainWebPage(IWebDriver _driver)
        {
            driver = _driver;
            string URL = "http://serve.21nova.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=853011616&lp=0";
            driver.Navigate().GoToUrl(URL); 
        }

        public DownloadPage ClickOnDownload()
        {
            FindElement(By.PartialLinkText("Download"),10).Click();
            return new DownloadPage(driver);
        }

    }
}
