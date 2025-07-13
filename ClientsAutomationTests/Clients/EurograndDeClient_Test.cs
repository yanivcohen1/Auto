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
    public class EurograndDe : Automation_Lib
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
                Init(typeof(EurograndDe));
            //MessageBox.Show("Debug Stop Process Name & id " + Process.GetCurrentProcess().ProcessName + "- " +
            //Process.GetCurrentProcess().Id);
            //_driver = StartBrowser();
        }

        /// <summary>
        ///The main test
        ///</summary>
        public void EurograndDeClientTestDebug()
        {
            ctx = Commons.InitSpring("EurograndDeClientContext.xml");
            webSelenium = (WebSelenium)ctx.GetObject(typeof(WebSelenium).Name);
            _driver = webSelenium.Driver;
            MainWebPage mainWebPage = (MainWebPage)ctx.GetObject(typeof(MainWebPage).Name);//,new object[] { webSelenium }
            mainWebPage.NavigateToLanguageUrl();
            DownloadPage downloadPage = mainWebPage.ClickOnDownload(By.Id("download"));
            LanguagePage languagePage = downloadPage.RunDownload();
            LicensePage licensePage = languagePage.clickNextPage();
            FinishPage finishPage = licensePage.clickNextPage();
            //GameModePage gameModePage = finishPage.DoneClick();
            GameModePage gameModePage = (GameModePage)ctx.GetObject(typeof(GameModePage).Name);
            JoinNowPage joinNowPage = gameModePage.RealModeClick();
            //joinNowPage.clickNextPage();
            RegistrationEuroPage registrationPageEurogrand = (RegistrationEuroPage)ctx.GetObject(typeof(RegistrationEuroPage).Name);
            string paswordFilePath = "/Clients/EuroPasswordFiles/PasswordEuro.txt";
            CongratulationsEuroPage congratulationsEuroPage = registrationPageEurogrand.RegisterDataFill(paswordFilePath);
            PopupMsgPage popupMsgPage = congratulationsEuroPage.LoginClick(paswordFilePath);
            CashierPage cashierPage = popupMsgPage.clickCloseMsgEuro();
            cashierPage.EnterDetails();
            Thread.Sleep(120000);
            //try
            //{
            //    cashierPage.CloseApprovePopup();
            //    Console.WriteLine(GenerateTimePrint() + "click CloseApprovePopup");
            //}
            //catch (Exception)
            //{            }
            //DepositPage depositPage = (DepositPage)Commons.ApplicationContext.GetObject(typeof(DepositPage).Name);
            //try
            //{
            DepositPage depositPage = cashierPage.CloseSuccessRegisterPopup();
            Console.WriteLine(GenerateTimePrint() + "click CloseSuccessRegisterPopup");
            //}
            //catch (Exception)
            //{
                //SendKeys.SendWait("{ENTER}");
                //Console.WriteLine(GenerateTimePrint() + "click ENTER");
                //Thread.Sleep(5000);
                //SendKeys.SendWait("{ENTER}");
                //Thread.Sleep(1000);
            //}
            depositPage.Deposit();
            Console.WriteLine(GenerateTimePrint() + "Deposit");
            try
            {
                depositPage.CloseApprovePopup();
                Console.WriteLine(GenerateTimePrint() + "click CloseApprovePopup");
            }
            catch (Exception)
            {
                //SendKeys.SendWait("{ENTER}");
                //Console.WriteLine(GenerateTimePrint() + "click ENTER");
                //Thread.Sleep(2000);
            }
            //Assert that the current bulance is €100.00
            string currentBalance = depositPage.ReadCurrentBalance();
            //Assert.AreEqual("", currentBalance.Substring(0, 1), "currency error");
            decimal currentBalanceInt = Convert.ToDecimal(currentBalance.Substring(1));
            Console.WriteLine(GenerateTimePrint() + "Current Balance" + currentBalance);
            Assert.AreEqual("£100.00", depositPage.ReadCurrentBalance(), "Deposit fail");
            //Assert.IsTrue(currentBalanceInt >= 50, "Deposit Pass");
        }

        /// <summary>
        ///A test for Program Constructor
        ///</summary>
        [TestMethod()]
        [Timeout(900000)]//15 min
        public void EurograndDeClient()
        {
            if (!bebug)
            {
                int trays = 3;
                for (int i = 0; i < trays; i++)
                {
                    try
                    {
                        EurograndDeClientTestDebug();
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
                EurograndDeClientTestDebug();
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
