using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;
using System.Threading;
using OpenQA.Selenium.Interactions;

namespace SkykingClientDe
{
    class MainWebPage : Automation_Lib
    {
        private readonly IWebDriver driver;

        public MainWebPage(IWebDriver _driver)
        {
            driver = _driver;
            string URL = "http://serve.skykingscasino.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=14153423&lp=0";
            driver.Navigate().GoToUrl(URL);

            IWebElement webElement = FindElement(By.Id("flags"), 10);
            //new Actions(driver).MoveToElement(webElement).Click(webElement).Perform();
            //SafeClick(webElement);

            SelectElementByText(By.CssSelector("select.flags-box"), "German");
            //FindElement(By.PartialLinkText("German"), 10).Click();
        }

        public DownloadPage ClickOnDownload()
        {
            FindElement(By.PartialLinkText("Download"),20).Click();
            return new DownloadPage(driver);
        }

    }
}
