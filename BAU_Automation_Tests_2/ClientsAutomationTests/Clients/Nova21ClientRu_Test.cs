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
    public class Nova21Ru : Automation_Lib
    {
        private bool _bebug = false;
        private TestContext _testContextInstance;
        /// <summary>
        /// the selenium driver
        /// </summary>
        private IWebDriver _driver;
        private IApplicationContext _ctx;
        private WebSelenium _webSelenium;

        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the current test run.
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return _testContextInstance;
            }
            set
            {
                _testContextInstance = value;
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
                _bebug = true;
            #endif
                Init(typeof(Nova21Ru));
            //MessageBox.Show("Debug Stop Process Name & id " + Process.GetCurrentProcess().ProcessName + "- " +
            //Process.GetCurrentProcess().Id);
            //_driver = StartBrowser();
        }

        /// <summary>
        ///The main test
        ///</summary>
        public void Nova21RuClientTestDebug()
        {
            _ctx = Commons.InitSpring("Nova21ClientRuContext.xml");
            _webSelenium = (WebSelenium)_ctx.GetObject(typeof(WebSelenium).Name);
            _driver = _webSelenium.Driver;
            MainWebPage mainWebPage = (MainWebPage)_ctx.GetObject(typeof(MainWebPage).Name);//,new object[] { webSelenium }
            mainWebPage.NavigateToLanguageUrl();
            DownloadPage downloadPage = mainWebPage.ClickOnDownload(By.PartialLinkText("Загрузите"));// By.PartialLinkText("Download")
            LanguagePage languagePage = downloadPage.RunDownload();
            LicensePage licensePage = languagePage.clickNextPage21nova();
            languagePage.clickOldRegister();
            //FinishPage finishPage = licensePage.clickNextPage();
            //GameModePage gameModePage = finishPage.DoneClick();
            GameModePage gameModePage = (GameModePage)_ctx.GetObject(typeof(GameModePage).Name);
            JoinNowPage joinNowPage = gameModePage.RealModeClick();
            //joinNowPage.clickNextPage();
            Registration21novaPage registrationPage = (Registration21novaPage)_ctx.GetObject(typeof(Registration21novaPage).Name);
            string userName = "YAN" + GenerateUserName();
            PopupMsgPage popupMsgPage = registrationPage.RegisterDataFill(userName);   
            //CashierPage cashierPage = popupMsgPage.clickCloseMsgEuro();
            CashierPage cashierPage = (CashierPage)_ctx.GetObject(typeof(CashierPage).Name);
            cashierPage.EnterDetails();
            WriteToPlayersUsersfile(userName + ", " + "21novaClientRu");
            DepositPage depositPage = cashierPage.CloseSuccessRegisterPopup();
            depositPage.Deposit();
            depositPage.confirmDeposit();
            Thread.Sleep(10000);
            //Assert that the current bulance is £100.00
            Assert.AreEqual("£100.00", depositPage.ReadCurrentBalance(), "Deposit fail");
        }

        /// <summary>
        ///A test for Program Constructor
        ///</summary>
        [TestMethod()]
        [Timeout(900000)]//15 min
        public void Nova21RuClient()
        {
            if (!_bebug)
            {
                int trays = IsMonitorMac ? 5 : 3;
                for (int i = 0; i < trays; i++)
                {
                    try
                    {
                        Nova21RuClientTestDebug();
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
                Nova21RuClientTestDebug();
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
