using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using AutomationLib;
using OpenQA.Selenium;
using System.Threading;
using System.Windows.Forms;

namespace EurograndClientDe
{
    /// <summary>
    ///This is a test class for ProgramTest and is intended
    ///to contain all ProgramTest Unit Tests
    ///</summary>
    [TestClass()]
    public class EuroGrandDE : Automation_Lib
    {
        private bool bebug = false;
        private TestContext testContextInstance;
        /// <summary>
        /// the selenium driver
        /// </summary>
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

        /// <summary>
        /// Use TestInitialize to run code before running each test
        /// </summary>
        [TestInitialize()]
        public void TestInitialize()
        {
            #if DEBUG
                 bebug = true;
            #endif
            Init(typeof(EuroGrandDE));
            driver = StartBrowser();
        }

        /// <summary>
        ///The main test
        ///</summary>
        public void EurograndClientDeTestDebug()
        {
            MainWebPage mainWebPage = new MainWebPage(driver);
            DownloadPage downloadPage = mainWebPage.ClickOnDownload();
            LanguagePage languagePage = downloadPage.RunDownload();
            LicensePage licensePage = languagePage.clickNextPage();
            FinishPage finishPage = licensePage.clickNextPage();
            GameModePage gameModePage = finishPage.DoneClick();
            JoinNowPage joinNowPage = gameModePage.RealModeClick();
            RegistrationPage registrationPage = joinNowPage.clickNextPage();
            CongratulationsPage congratulationsPage = registrationPage.RegisterDataFill();
            PopupMsgPage popupMsgPage = congratulationsPage.LoginClick();
            CashierPage cashierPage = popupMsgPage.clickCloseMsg();
            cashierPage.EnterDetails();
            Thread.Sleep(120000);
            cashierPage.CloseApprovePopup();
            Console.WriteLine(GenerateTimePrint() + "click CloseApprovePopup");
            DepositPage depositPage = new DepositPage();
            try
            {
                depositPage = cashierPage.CloseSuccessRegisterPopup();
                Console.WriteLine(GenerateTimePrint() + "click CloseSuccessRegisterPopup");
            }
            catch (Exception) {
                SendKeys.SendWait("{ENTER}");
                Console.WriteLine(GenerateTimePrint() + "click ENTER");
                Thread.Sleep(5000);
                SendKeys.SendWait("{ENTER}");
                Thread.Sleep(1000);
            }
            depositPage.Deposit();
            Console.WriteLine(GenerateTimePrint() + "Deposit");
            try
            {
                //depositPage.CloseBonusPopup();
                //Console.WriteLine(GenerateTimePrint() + "click CloseBonusPopup");
                depositPage.CloseApprovePopup();
                Console.WriteLine(GenerateTimePrint() + "click CloseApprovePopup");
            }
            catch (Exception) {
                SendKeys.SendWait("{ENTER}");
                Console.WriteLine(GenerateTimePrint() + "click ENTER");
                Thread.Sleep(2000);
                //SendKeys.SendWait("{ENTER}");
                //Thread.Sleep(2000);
                //SendKeys.SendWait("{ENTER}");
            }
            //Assert that the current bulance is £100.00 or higher
            string currentBalance = depositPage.ReadCurrentBalance();
            Assert.AreEqual("£", currentBalance.Substring(0,1), "currency error");
            decimal currentBalanceInt = Convert.ToDecimal(currentBalance.Substring(1));
            //Assert.AreEqual("£100.00", depositPage.ReadCurrentBalance(),"Deposit fail");
            Assert.IsTrue(currentBalanceInt >= 50, "Deposit Pass");
        }
       
        /// <summary>
        ///A test for Program Constructor
        ///</summary>
        [TestMethod()]
        [Timeout(900000)]//15 min
        public void EurograndClientDeTest()
        {
            if (!bebug)
            {
                int trays = 3;
                for (int i = 0; i < trays; i++)
                {
                    try
                    {
                        EurograndClientDeTestDebug();
                        break;
                    }
                    catch (Exception e)
                    {
                        loggerError(e, (i >= (trays-1)));
                        TestInitialize();
                    }
                }
            }
            else
            {
                EurograndClientDeTestDebug();
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
                driver.Quit();
            }
            catch (Exception) { }
            finally
            {
                Kill_Processes();
            }
        }

    }
}
