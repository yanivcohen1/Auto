using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;
using System.Threading;
using OpenQA.Selenium.Interactions;
using System.Text.RegularExpressions;

namespace JoylandClientDe
{
    class MainWebPage : Automation_Lib
    {
        private readonly IWebDriver driver;

        public MainWebPage(IWebDriver _driver)
        {
            driver = _driver;
            string URL = "http://serve.joylandcasino.com/promoRedirect?member=goodaff&campaign=DEFAULT&channel=DEFAULT&zone=14153296&lp=0";
            driver.Navigate().GoToUrl(URL);

            //string FindBy = Regex.Replace("img[alt='Deutsch']" , "'", '"'.ToString());
            FindElement(By.CssSelector(ReplaceComma("img[alt='Deutsch']")), 10).Click();
        }

        public DownloadPage ClickOnDownload()
        {
            FindElement(By.PartialLinkText("Download"),20).Click();
            return new DownloadPage(driver);
        }

    }
}
