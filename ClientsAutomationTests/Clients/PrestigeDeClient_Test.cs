using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using AutomationLib;
using System.Threading;
using OpenQA.Selenium;
using Spring.Context;
using System.Windows.Forms;
using System.Diagnostics;

namespace com.who.tests.clients
{
    /// <summary>
    ///This is a test class for ProgramTest and is intended
    ///to contain all ProgramTest Unit Tests
    ///</summary>
    [TestClass()]
    public class PrestigeDe : Automation_Lib
    {
        private bool bebug = false;
        private TestContext testContextInstance;
        /// <summary>
        /// the selenium driver
        /// </summary>
        private IWebDriver _driver;
        private IApplicationContext ctx;
        private WebSelenium webSelenium;

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
                Init(typeof(PrestigeDe));
            //MessageBox.Show("Debug Stop Process Name & id " + Process.GetCurrentProcess().ProcessName + "- " +
            //Process.GetCurrentProcess().Id);
            //_driver = StartBrowser();
        }

        /// <summary>
        ///The main test
        ///</summary>
        public void PrestigeDeClientTestDebug()
        {
            ctx = Commons.InitSpring("PrestigeDeClientContext.xml");
            webSelenium = (WebSelenium)ctx.GetObject(typeof(WebSelenium).Name);
            _driver = webSelenium.Driver;
            MainWebPage mainWebPage = (MainWebPage)ctx.GetObject(typeof(MainWebPage).Name);//,new object[] { webSelenium }
            mainWebPage.NavigateToLanguageUrl();
            DownloadPage downloadPage = mainWebPage.ClickOnDownload(By.PartialLinkText("Download"));// By.PartialLinkText("Download")
            LanguagePage languagePage = downloadPage.RunDownload();
            LicensePage licensePage = languagePage.clickNextPage();
            FinishPage finishPage = licensePage.clickNextPage();
            GameModePage gameModePage = finishPage.DoneClick();
            //GameModePage gameModePage = (GameModePage)ctx.GetObject(typeof(GameModePage).Name);
            JoinNowPage joinNowPage = gameModePage.RealModeClick();
            RegistrationPage registrationPage = joinNowPage.clickNextPage();
            registrationPage.RegisterDataFill();
            registrationPage.RegisterDataFillNextPage();
            CongratulationsPage congratulationsPage = registrationPage.RegisterDataFillLastPage();
            PopupMsgPage popupMsgPage = congratulationsPage.LoginClick();
            CashierPage cashierPage = popupMsgPage.clickCloseMsg();
            cashierPage.ClickOnCashier();
            cashierPage.EnterDetails();
            cashierPage.CloseApprovePopup();
            //cashierPage.CloseBonusPopup();
            DepositPage depositPage = cashierPage.CloseSuccessRegisterPopup();
            depositPage.Deposit();
            depositPage.CloseApprovePopup();
            //depositPage.CloseBonusPopup();
            //Assert that the current bulance is £100.00
            Assert.AreEqual("€100.01", depositPage.ReadCurrentBalance(), "Deposit fail");
        }

        /// <summary>
        ///A test for Program Constructor
        ///</summary>
        [TestMethod()]
        [Timeout(900000)]//15 min
        public void PrestigeDeClient()
        {
            if (!bebug)
            {
                int trays = 3;
                for (int i = 0; i < trays; i++)
                {
                    try
                    {
                        PrestigeDeClientTestDebug();
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
                PrestigeDeClientTestDebug();
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
                Thread.Sleep(2000);
                //_logger.Logger.Repository.Shutdown();
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
