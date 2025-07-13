using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using AutomationLib;
using OpenQA.Selenium;
using System.Threading;
using OpenQA.Selenium.Interactions;
using System.Windows.Automation;
using EurograndClientEn;

[assembly: log4net.Config.XmlConfigurator(ConfigFile = "log4net.xml", Watch = true)]
namespace EuroGrandClientEn
{
    /// <summary>
    ///This is a test class for ProgramTest and is intended
    ///to contain all ProgramTest Unit Tests
    ///</summary>
    [TestClass()]
    public class EuroGrandEN : Automation_Lib
    {
        private bool bebug = false;
        private TestContext testContextInstance;
        public IWebDriver driver;
        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the current test run.
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }

        #region Additional test attributes
        // 
        //You can use the following additional attributes as you write your tests:
        //
        //Use ClassInitialize to run code before running the first test in the class
        //[ClassInitialize()]
        //public static void MyClassInitialize(TestContext testContext)
        //{
        //}
        //
        //Use ClassCleanup to run code after all tests in a class have run
        //[ClassCleanup()]
        //public static void MyClassCleanup()
        //{
        //}
        //
        //Use TestInitialize to run code before running each test
        //[TestInitialize()]
        //public void MyTestInitialize()
        //{
        //}
        //
        //Use TestCleanup to run code after each test has run
        //[TestCleanup()]
        //public void MyTestCleanup()
        //{
        //}
        //
        #endregion

        /// <Summary>
        /// Use TestInitialize to run code before running each test
        /// </Summary>/>
        [TestInitialize()]
        public void TestInitialize()
        {
            #if DEBUG
                 bebug = true;
            #endif
            Init(typeof(EuroGrandEN));
            driver = WebSelenium.StartBrowser();
        }

        /// <summary>
        ///The main test
        ///</summary>
        public void EurograndClientEnTestDebug()
        {
            MainWebPage mainWebPage = new MainWebPage(driver);
            DownloadPage downloadPage = mainWebPage.ClickOnDownload();
            LanguagePage languagePage = downloadPage.RunDownload();
            LicensePage licensePage = languagePage.clickNextPage();
            FinishPage finishPage = licensePage.clickNextPage();
            finishPage.clickNextPage();
            //Assert that the title contains the search string
            //Assert.AreEqual(driver.Url, "http://www.eurogrand.com/getting-started", "eurogrand URL Error");
        }
       
        /// <summary>
        ///A test for Program Constructor
        ///</summary>
        [TestMethod()]
        [Timeout(300000)]
        public void EurograndClientEnTest()
        {
            if (!bebug)
            {
                try
                {
                    EurograndClientEnTestDebug();
                }
                catch (Exception e)
                {
                    loggerError(e);
                }
            }
            else
            {
                EurograndClientEnTestDebug();
            }
        }

        ///<summary>
        ///Use TestCleanup to run code after each test has run
        ///</summary>
        [TestCleanup()]
        public void TestCleanup()
        {
            try
            {
                driver.Quit();
            }
            catch (Exception){ }
        }

    }
}
