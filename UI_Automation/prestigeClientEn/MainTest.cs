using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using AutomationLib;
using OpenQA.Selenium;
using System.Threading;
using OpenQA.Selenium.Interactions;

namespace PrestigeClientEn
{
    class MainTest : WebSelenium
    {
        public IWebDriver driver;

        static void Main(string[] args)
        {
            MainTest mainTest = new MainTest();
            try
            {
                mainTest.TestInitialize();
                mainTest.PrestigeClientEnTest();
            }
            catch (Exception e)
            {
                Console.Out.WriteLine("Error " + e.Message);
                Console.Out.WriteLine("StackTrace " + e.StackTrace);
            }
            finally
            {
                try
                {
                    mainTest.TestCleanup();
                }
                catch (Exception){ }
            }
        }

        /// <Summary>
        /// Use TestInitialize to run code before running each test
        /// </Summary>/>
        public void TestInitialize()
        {
            driver = StartBrowser();
        }

        /// <summary>
        ///A test for Program Constructor
        ///</summary>
        public void PrestigeClientEnTest()
        {
            string URL = "http://www.eurogrand.com/";

            driver.Navigate().GoToUrl(URL);
            IWebElement webElement = driver.FindElement(By.Id("download"));
            //Actions builder = new Actions(driver);
            //builder.MoveToElement(webElement).Build().Perform();
            webElement.Click();
            //driver.FindElement(By.XPath("//input[@name='q']")).Submit();
            Thread.Sleep(10000);
            //Assert that the title contains the search string
            Assert.AreEqual(driver.Url, URL, "eurogrand URL Error");
        }

        ///<summary>
        ///Use TestCleanup to run code after each test has run
        ///</summary>
        public void TestCleanup()
        {
            driver.Quit();
        }
    }
}
