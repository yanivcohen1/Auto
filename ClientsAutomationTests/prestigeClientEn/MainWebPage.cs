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
            string URL = "http://serve.prestigecasino.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=14153373&lp=0";
            driver.Navigate().GoToUrl(URL); 
        }

        public DownloadPage ClickOnDownload()
        {
            FindElement(By.PartialLinkText("Download"),5).Click();
            return new DownloadPage(driver);
        }

    }
}
