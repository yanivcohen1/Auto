using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
//using NUnit.Framework;
using AutomationLib;

namespace EurograndClient
{
    
        //[TestFixture]
        //public class Search_Tests : WebSelenium
        //{
        //    public IWebDriver driver;

        //    [TestFixtureSetUp]
        //    public void TestFixtureSetUp()
        //    {
        //        driver = StartBrowser();
        //    }

        //    [TestFixtureTearDown]
        //    public void TestFixtureTearDown()
        //    {
        //        driver.Quit();
        //    }

        //    [Test]
        //    public void SearchForSeleniumExamples()
        //    {
        //        string _expectedresult = "Selenium Examples";
        //        string GoogleURL = "https://www.google.co.il";

        //        driver.Navigate().GoToUrl(GoogleURL);
        //        driver.FindElement(By.XPath("//input[@name='q']")).SendKeys(_expectedresult);
        //        driver.FindElement(By.XPath("//input[@name='q']")).Submit();

        //        //Assert that the title contains the search string
        //        Assert.That(driver.Title, Is.StringMatching("Google"));

        //        // Check that we're still on the correct domain using the Google_Common class!
        //        Assert.That(driver.Url, Is.StringMatching(GoogleURL));
        //    }
        //}
}
