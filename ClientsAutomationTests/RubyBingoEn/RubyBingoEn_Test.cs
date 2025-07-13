using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using AutomationLib;
using System.Threading;
using OpenQA.Selenium;

namespace RubyBingoEn
{
    /// <summary>
    ///This is a test class for ProgramTest and is intended
    ///to contain all ProgramTest Unit Tests
    ///</summary>
    [TestClass()]
    public class RubyBingoEnOnline : Automation_Lib
    {
        private bool bebug = false;
        private TestContext testContextInstance;
        //private WebSelenium _webSelenium = new WebSelenium("chrome");
        /// <summary>
        /// the selenium driver
        /// </summary>
        public IWebDriver _driver;

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

        /// <summary>
        /// Use TestInitialize to run code before running each test
        /// </summary>
        [TestInitialize()]
        public void TestInitialize()
        {
            #if DEBUG
                bebug = true;
            #endif
                Init(typeof(RubyBingoEnOnline));
                WebSelenium webSelenium = new WebSelenium();
            _driver = webSelenium.Driver;
        }

        /// <summary>
        ///The main test
        ///</summary>
        public void RubyBingoEnTestDebug()
        {
            MainWebPage mainWebPage = new MainWebPage(_driver);
            LoginPage loginPage = mainWebPage.ClickOnPlayBingo();
            RegistrationPage registrationPage = loginPage.ClickOnRegister();
            CongragulationPage congragulationPage = registrationPage.FillRegisterDetail();
            MainGamePage mainGamePage = congragulationPage.ClickGoToBingo();
            CashierPage cashierPage = mainGamePage.ClickOnBank();
            cashierPage.EnterDetails();
            //cashierPage.CloseBonusPopup();
            DepositPage depositPage = cashierPage.CloseApprovePopup();
            depositPage.Deposit();
            depositPage.CloseApprovePopup();
            //depositPage.CloseBonusPopup();
            //Assert that the current bulance is £100.00
            Assert.AreEqual("£100.00", depositPage.ReadCurrentBalance(), "Deposit fail");
            //css=form input[type='search'][name='*search']>td:nth-of-type(3)
            //It will find in form "input" tag node which contains "type=search" attribute ,
            //"name=*search" attribute (*describes the containing text) after it td nth-of-type index 3
            //xpath=//form//input[@type='search'][contains(@name,'search')]/td[3]
        }

        /// <summary>
        ///A test for Program Constructor
        ///</summary>
        [TestMethod()]
        [Timeout(900000)]//15 min
        public void RubyBingoEnTest()
        {
            if (!bebug)
            {
                int trays = 3;
                for (int i = 0; i < trays; i++)
                {
                    try
                    {
                        RubyBingoEnTestDebug();
                        break;
                    }
                    catch (Exception e)
                    {
                        loggerError(e, (i >= (trays - 1)));
                        TestInitialize();
                    }
                }
            }
            else
            {
                RubyBingoEnTestDebug();
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
                //_logger.Logger.Repository.Shutdown();
                Thread.Sleep(2000);
                _driver.Quit();
            }
            catch (Exception) { }
            finally
            {
                Kill_Processes();
            }
        }

    }
}
