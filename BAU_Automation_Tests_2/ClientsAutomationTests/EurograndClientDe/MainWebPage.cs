using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;
using System.Threading;

namespace EurograndClientDe
{
    class MainWebPage : Automation_Lib
    {
        private readonly IWebDriver driver;

        public MainWebPage(IWebDriver _driver)
        {
            driver = _driver;
            string URL = "http://serve.eurogrand.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=14153215&lp=0";
            driver.Navigate().GoToUrl(URL);
            Thread.Sleep(3000);
            driver.Navigate().GoToUrl("http://www.eurogrand.com/de");
            Thread.Sleep(3000);
            driver.Navigate().Refresh();
        }
        
        /// <summary>
        /// Click On Download
        /// </summary>
        /// <returns></returns>
        public DownloadPage ClickOnDownload()
        {
            FindElement(By.Id("download"),5).Click();
            return new DownloadPage(driver);
        }

    }
}
