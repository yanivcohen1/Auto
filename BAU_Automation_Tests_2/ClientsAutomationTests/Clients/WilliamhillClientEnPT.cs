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
    public class WilliamhillNewEn : Automation_Lib
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
                Init(typeof(WilliamhillNewEn));
                //ClearIECache();
            //MessageBox.Show("Debug Stop Process Name & id " + Process.GetCurrentProcess().ProcessName + "- " +
            //Process.GetCurrentProcess().Id);
            //_driver = StartBrowser();
        }

        /// <summary>
        ///The main test
        ///</summary>
        public void WilliamhillEnClientTestDebug()
        {
            ctx = Commons.InitSpring("WilliamhillClientEnPTContext.xml");
            webSelenium = (WebSelenium)ctx.GetObject(typeof(WebSelenium).Name);
            _driver = webSelenium.Driver;
            _driver.Navigate().GoToUrl("http://www.williamhillcasino.com/");
            MainWebPage mainWebPage = (MainWebPage)ctx.GetObject(typeof(MainWebPage).Name);//,new object[] { webSelenium }
            //WebSelenium.FindElement(_driver, By.CssSelector("body > div.cpop > div.cclose"), 10).Click();//body > div.cpop.en > div.cclose
            DownloadPage downloadPage = mainWebPage.ClickOnDownload(By.LinkText("Download"));// By.PartialLinkText("Download")
            LanguagePage languagePage = downloadPage.RunDownload();
            languagePage.clickNextPageNew();
            LicensePage licensePage = languagePage.clickOldRegister();
            GameModePage gameModePage = (GameModePage)ctx.GetObject(typeof(GameModePage).Name);
            gameModePage.RealModeClick();
            RegistrationWhccPage registrationWhccPage = (RegistrationWhccPage)ctx.GetObject(typeof(RegistrationWhccPage).Name);
            string userName = "YAN" + GenerateUserName();
            registrationWhccPage.RegisterDataFillChrome(userName);
            JoinNowPage joinNowPage = (JoinNowPage)ctx.GetObject(typeof(JoinNowPage).Name);
            Thread.Sleep(10000);
           //joinNowPage.clickNextPageEuroNew();
            //PopupMsgPage popupMsgPage = congratulationsEuroPage.LoginClick();
            WriteToPlayersUsersfile(userName + ", " + "WhccClientEnPT");
            PopupMsgPage popupMsgPage = (PopupMsgPage)ctx.GetObject(typeof(PopupMsgPage).Name);

            CashierPage cashierPage = popupMsgPage.clickCloseMsgEuro();//CloseSuccessRegisterPopup
            //CashierPage cashierPage = (CashierPage)ctx.GetObject(typeof(CashierPage).Name);
            cashierPage.EnterDetailsChrome();
            //cashierPage.CloseApprovePopup();
            //cashierPage.CloseBonusPopup();
            DepositPage depositPage = cashierPage.CloseSuccessRegisterPopupChrome();
            depositPage.DepositChrome();
            depositPage.confirmDepositChrome();
            Thread.Sleep(10000);
            //depositPage.CloseApprovePopup();
            //depositPage.CloseBonusPopup();
            string currentBalance = depositPage.ReadCurrentBalanceChrome();
            string amountStr = currentBalance.Substring(1);
            Double amount = Convert.ToDouble(amountStr);
            string sing = currentBalance.Substring(0, 1);
            //Assert that the current bulance is £100.00
            Assert.IsTrue(amount >= 100.00, "Deposit Amount fail");
            Assert.AreEqual("£", sing, "Currency fail");           
        }

        /// <summary>
        ///A test for Program Constructor
        ///</summary>
        [TestMethod()]
        [Timeout(900000)]//15 min
        public void Williamhill_EnNewClient()
        {
            if (!bebug)
            {
                int trays = 3;
                for (int i = 0; i < trays; i++)
                {
                    try
                    {
                        WilliamhillEnClientTestDebug();
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
                WilliamhillEnClientTestDebug();
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
                try
                {
                    Kill_Processes();
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }

    }
}
