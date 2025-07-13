using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System.Threading;
using System.IO;

namespace RubyBingoEn
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
            //new SelectElement(_driver.FindElement(By.Id("registrationForm:personalDetailsSubview:titleComponent:title")))
            //    .SelectByText("Mr");
            WebSelenium.SelectElementByText(_driver, By.Id("registrationForm:personalDetailsSubview:titleComponent:title"), "Mr");//select title
            WebSelenium.SelectElementByText(_driver, By.Id("registrationForm:personalDetailsSubview:dobComponent:dobDay"), "01");//select bDay
            WebSelenium.SelectElementByText(_driver, By.Id("registrationForm:personalDetailsSubview:dobComponent:dobMonth"), "01");//select bMonth
            WebSelenium.SelectElementByText(_driver, By.Id("registrationForm:personalDetailsSubview:dobComponent:dobYear"), "1970");//select bYear
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:firstNameComponent:firstName")).Clear();
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:firstNameComponent:firstName")).SendKeys("WHO");
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:lastNameComponent:lastName")).Clear();
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:lastNameComponent:lastName")).SendKeys("Online");
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:addressLine1Component:addressLine1")).Clear();
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:addressLine1Component:addressLine1")).SendKeys("Addr");
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:cityComponent:city")).Clear();
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:cityComponent:city")).SendKeys("Town");
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:postcodeComponent:postcode")).Clear();
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:postcodeComponent:postcode")).SendKeys("12345");
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:homePhoneComponent:homePhoneNumber")).Clear();
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:homePhoneComponent:homePhoneNumber")).SendKeys("123456789");
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:emailComponent:email")).Clear();
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:emailComponent:email")).SendKeys("test@playtech.com");
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:confirmEmailComponent:confirmEmail")).Clear();
            _driver.FindElement(By.Id("registrationForm:personalDetailsSubview:confirmEmailComponent:confirmEmail")).SendKeys("test@playtech.com");
            _driver.FindElement(By.Id("registrationForm:userDetailsSubview:usernameComponent:username")).Clear();
            string passwordPath = _rootPath + "/RubyBingoEn/PasswordRuby.txt";
            string password = File.ReadAllText(passwordPath);
            string newPassword = Convert.ToString(Convert.ToInt32(password) + 1);
            _driver.FindElement(By.Id("registrationForm:userDetailsSubview:usernameComponent:username")).SendKeys("YANQAN" + _userName + newPassword);
            File.WriteAllText(passwordPath, newPassword);
            _driver.FindElement(By.Id("registrationForm:userDetailsSubview:passwordComponent:password")).Clear();
            _driver.FindElement(By.Id("registrationForm:userDetailsSubview:passwordComponent:password")).SendKeys("123456");
            _driver.FindElement(By.Id("registrationForm:userDetailsSubview:confirmPasswordComponent:confirmPassword")).Clear();
            _driver.FindElement(By.Id("registrationForm:userDetailsSubview:confirmPasswordComponent:confirmPassword")).SendKeys("123456");
            _driver.FindElement(By.Id("registrationForm:userDetailsSubview:securityWordComponent:securityWord")).Clear();
            _driver.FindElement(By.Id("registrationForm:userDetailsSubview:securityWordComponent:securityWord")).SendKeys("yan");
            _driver.FindElement(By.Id("registrationForm:termsAndSubmitSubview:terms")).Click();
            Thread.Sleep(2000);
            _driver.FindElement(By.CssSelector("#test > span")).Click();
            Thread.Sleep(2000);
            WebSelenium.goToURLContainWindow(_driver, "https://virtuefusion.rubybingo.com");
            return new CongragulationPage(_driver);
        }
    }
}
