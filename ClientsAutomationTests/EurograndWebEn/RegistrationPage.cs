using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System.Threading;
using System.IO;

namespace EurograndWebEn
{
    class RegistrationPage : Automation_Lib
    {
        private readonly IWebDriver _driver;

        public RegistrationPage(IWebDriver driver)
        {
            _driver = driver;
        }

        /// <summary>
        /// Fill Register Detail
        /// </summary>
        public CongragulationPage FillRegisterDetail()
        {
            WebSelenium.SelectElementByText(_driver,By.Id("countrycode"), "United Kingdom");//select country
            WebSelenium.SelectElementByText(_driver, By.Id("bday"), "1");//select day of birth 
            WebSelenium.SelectElementByText(_driver, By.Id("bmonth"), "1");//select month of birth 
            WebSelenium.SelectElementByText(_driver, By.Id("byear"), "1970");//select year of birth
            _driver.FindElement(By.Id("firstname")).Clear();
            _driver.FindElement(By.Id("firstname")).SendKeys("first");
            _driver.FindElement(By.Id("lastname")).Clear();
            _driver.FindElement(By.Id("lastname")).SendKeys("last");
            _driver.FindElement(By.Id("email")).Clear();
            _driver.FindElement(By.Id("email")).SendKeys("test@playtech.com");
            _driver.FindElement(By.Id("email_confirm")).Clear();
            _driver.FindElement(By.Id("email_confirm")).SendKeys("test@playtech.com");
            _driver.FindElement(By.Id("address")).Clear();
            _driver.FindElement(By.Id("address")).SendKeys("add");
            _driver.FindElement(By.Id("city")).Clear();
            _driver.FindElement(By.Id("city")).SendKeys("city");
            _driver.FindElement(By.Id("zip")).Clear();
            _driver.FindElement(By.Id("zip")).SendKeys("123456");
            _driver.FindElement(By.Id("phonenumber")).Clear();
            _driver.FindElement(By.Id("phonenumber")).SendKeys("123456");
            _driver.FindElement(By.Id("password1")).Clear();
            _driver.FindElement(By.Id("password1")).SendKeys("123456");
            _driver.FindElement(By.Id("password2")).Clear();
            _driver.FindElement(By.Id("password2")).SendKeys("123456");
            string passwordPath = _rootPath + @"\EurograndWebEn\PasswordWebEuro.txt";
            string password = File.ReadAllText(passwordPath);
            string newPassword = Convert.ToString(Convert.ToInt32(password) + 1);
            _driver.FindElement(By.Id("username")).Clear();
            _driver.FindElement(By.Id("username")).SendKeys("YANQAOLN" + _userName + newPassword);
            //driver.FindElement(By.Id("registrationForm:userDetailsSubview:usernameComponent:username")).SendKeys("YanQA" + newPassword);
            File.WriteAllText(passwordPath, newPassword);
            Cookie cookie = new Cookie("who_nocaptcha", "no", ".eurogrand.com", "/", null);
            _driver.Manage().Cookies.AddCookie(cookie);
            _driver.FindElement(By.Id("security_code")).Clear();
            _driver.FindElement(By.Id("security_code")).SendKeys("1234");
            _driver.FindElement(By.Id("terms")).Click();
            Thread.Sleep(2000);
            //FindElement(By.CssSelector("fieldset#personalinfo > div > div:nth(0) > img:nth(0)[style='display: none;']"), 15);
            //css=form input[type='search'][name='*search']>td:nth-of-type(3)
            WebSelenium.FindElement(_driver, By.CssSelector("img#username-loader[style='display: none;']"), 60);
            _driver.FindElement(By.CssSelector("#next > div")).Click();
            Thread.Sleep(2000);
            for (int i = 0; i < 30; i++)
            {
                if (_driver.Url.Contains("register_after"))
                {
                    break;
                }
                Thread.Sleep(1000);
            }
            _driver.Navigate().Refresh();
            //goToURLContainWindow("https://virtuefusion.eurogrand.com");
            return new CongragulationPage(_driver);
        }
    }
}
