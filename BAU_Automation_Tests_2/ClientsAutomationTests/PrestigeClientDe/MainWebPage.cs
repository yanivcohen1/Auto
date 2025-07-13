using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;
using System.Threading;
using OpenQA.Selenium.Interactions;

namespace PrestigeClientDe
{
    class MainWebPage : Automation_Lib
    {
        private readonly IWebDriver driver;

        public MainWebPage(IWebDriver _driver)
        {
            driver = _driver;
            string URL = "http://serve.prestigecasino.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=14153373&lp=0";
            driver.Navigate().GoToUrl(URL);

            IWebElement webElement = FindElement(By.CssSelector("#flags"), 10);// > td
            //new Actions(driver).MoveToElement(webElement).Click(webElement).Perform();
            SafeClick(webElement);
            
            FindElement(By.PartialLinkText("Deutsch"), 10).Click();
        }

        public DownloadPage ClickOnDownload()
        {
            FindElement(By.PartialLinkText("Download"),20).Click();
            return new DownloadPage(driver);
        }

    }
}
