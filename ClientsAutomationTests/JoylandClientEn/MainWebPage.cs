using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;
using System.Threading;

namespace JoylandClientEn
{
    class MainWebPage : Automation_Lib
    {
        private readonly IWebDriver driver;

        public MainWebPage(IWebDriver _driver)
        {
            driver = _driver;
            string URL = "http://serve.joylandcasino.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=14153296&lp=0";
            driver.Navigate().GoToUrl(URL); 
        }

        public DownloadPage ClickOnDownload()
        {
            //Thread.Sleep(10000);
            //FindElement(By.PartialLinkText("Download Now"), 10).Click();
            FindElement(By.PartialLinkText("Download"), 10).Click();//a[@name='DownloadHP']
            return new DownloadPage(driver);
        }

    }
}
