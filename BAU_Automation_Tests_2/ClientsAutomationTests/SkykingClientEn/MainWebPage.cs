using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;
using System.Threading;

namespace SkykingClientEn
{
    class MainWebPage : Automation_Lib
    {
        private readonly IWebDriver driver;

        public MainWebPage(IWebDriver _driver)
        {
            driver = _driver;
            string URL = "http://serve.skykingscasino.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=14153423&lp=0";
            driver.Navigate().GoToUrl(URL); 
        }

        public DownloadPage ClickOnDownload()
        {
            //Thread.Sleep(10000);
            //FindElement(By.PartialLinkText("Download Now"), 10).Click();
            FindElement(By.XPath("//div[@name='DownloadHP']"), 10).Click();//a[@name='DownloadHP']
            return new DownloadPage(driver);
        }

    }
}
