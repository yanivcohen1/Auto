using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using OpenQA.Selenium;
using System.Threading;
using System.IO;

namespace RubyBingoEn
{
    class LoginPage : Automation_Lib
    {
        private readonly IWebDriver _driver;

        public LoginPage(IWebDriver driver)
        {
            _driver = driver;
        }

        /// <summary>
        /// Click OnR egister
        /// </summary>
        public RegistrationPage ClickOnRegister()
        {
            Thread.Sleep(2000);
            try
            {
                WebSelenium.FindElement(_driver, By.CssSelector("input[value='Register']"), 10).Click();
            }catch (Exception){}
            Thread.Sleep(2000);
            //FindElement(By.CssSelector(String.Format("input[value='{0}']", surveyName)), 5).Click();
            WebSelenium.goToURLContainWindow(_driver, "https://virtuefusion.rubybingo.com");
            return new RegistrationPage(_driver);
        }
    }
}
