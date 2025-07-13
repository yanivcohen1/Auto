using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using AutomationLib;
using System.Threading;
using OpenQA.Selenium;
using Spring.Context;
using System.Windows.Forms;
using System.Diagnostics;
using System.Xml;

namespace com.who.tests.clients
{
    /// <summary>
    ///This is a test class for ProgramTest and is intended
    ///to contain all ProgramTest Unit Tests
    ///</summary>
    [TestClass()]
    public class WilliamhillEnParam : Automation_Lib
    {
        private bool bebug = false;
        private TestContext testContextInstance;
        /// <summary>
        /// the selenium driver
        /// </summary>
        private IWebDriver _driver;
        private IApplicationContext ctx;
        private WebSelenium webSelenium;
        private readonly string xmlFileName = AutomationLib.Automation_Lib.RootPath + "\\Clients\\Tracking\\WilliamhillEnClientContext.xml";
        private String expectedCookie = "";

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
                Init(typeof(WilliamhillEn));
                ClearIECache();
            //MessageBox.Show("Debug Stop Process Name & id " + Process.GetCurrentProcess().ProcessName + "- " +
            //Process.GetCurrentProcess().Id);
            //_driver = StartBrowser();
        }

        /// <summary>
        ///The main test
        ///</summary>
        public void WilliamhillEnClientTestDebug(string testName, string advertiserName)
        {
            ctx = Commons.InitSpring("Tracking/WilliamhillEnClientContext.xml");
            webSelenium = (WebSelenium)ctx.GetObject(typeof(WebSelenium).Name);
            _driver = webSelenium.Driver;
            _driver.Navigate().GoToUrl("http://www.williamhillcasino.com/");
            MainWebPage mainWebPage = (MainWebPage)ctx.GetObject(typeof(MainWebPage).Name);//,new object[] { webSelenium }
            //WebSelenium.FindElement(_driver, By.CssSelector("body > div.cpop > div.cclose"), 10).Click();//body > div.cpop.en > div.cclose
            DownloadPage downloadPage = mainWebPage.ClickOnDownload(By.LinkText("Download"));// By.PartialLinkText("Download")
            LanguagePage languagePage = downloadPage.RunDownload();
            languagePage.clickNextPageNew();
            //LicensePage licensePage = languagePage.clickOldRegister();
            RegistrationWhccPage registrationWhccPage = (RegistrationWhccPage)ctx.GetObject(typeof(RegistrationWhccPage).Name);
            string userName = "YAN" + GenerateUserName();
            GameModePage gameModePage = registrationWhccPage.RegisterDataFillNew(userName);
            //GameModePage gameModePage = (GameModePage)ctx.GetObject(typeof(GameModePage).Name);
            gameModePage.RealModeClick();
            JoinNowPage joinNowPage = (JoinNowPage)ctx.GetObject(typeof(JoinNowPage).Name);
            joinNowPage.clickNextPageEuroNew();
            //PopupMsgPage popupMsgPage = congratulationsEuroPage.LoginClick();
            //WriteToPlayersUsersfile(userName + ", " + "WhccClientEnNew");
            WriteToPlayersUsersfile(userName + "," + advertiserName + "," + testName);
        }

        /// <summary>
        ///A test for Program Constructor
        ///</summary>
        //[TestMethod()]
        //[Timeout(900000)]//15 min
        public void WilliamhillEnClient(string testName, string advertiserName)
        {
            if (!bebug)
            {
                int trays = 3;
                for (int i = 0; i < trays; i++)
                {
                    try
                    {
                        WilliamhillEnClientTestDebug(testName, advertiserName);
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
                WilliamhillEnClientTestDebug(testName, advertiserName);
            }
        }

        //[TestMethod()]
        //[Timeout(900000)]//15 min
        //public void rbplus2Othersideinc1()
        //{
        //    string url = "http://ads.williamhillcasino.com/redirect.aspx?pid=17043680&lpid=13510080&bid=14184097&var9=";
        //    ReplaceInXml(url, xmlFileName);
        //    WilliamhillEnClient();
        //}

        //[TestMethod()]
        //[Timeout(900000)]//15 min
        //public void rbplus1()
        //{
        //    string url = "http://ads.williamhillcasino.com/redirect.aspx?pid=17043680&lpid=14156243&bid=755252033&var9=";
        //    ReplaceInXml(url, xmlFileName);
        //    WilliamhillEnClient();
        //}

        [TestMethod()]
        [Timeout(900000)]//15 min
        public void WH_DL_rbplus2Othersideinc()
        {
            string url = "http://ads.williamhillcasino.com/redirect.aspx?pid=17043680&lpid=47653592&bid=215696423&var9=";
            ReplaceURLinXml(url, xmlFileName);
            expectedCookie = "rbplus2";
            WilliamhillEnClient("WH_DL_rbplus2Othersideinc", "rbplus2");
        }

        //[TestMethod()]
        //[Timeout(900000)]//15 min
        //public void fbwhccmobuk()
        //{
        //    string url = "http://ads.williamhillcasino.com/redirect.aspx?pid=138505689&lpid=1487411310&bid=1487411055&var5=UK_WHCC_Mob_tlvspidernew_2347M_PP_Wed";
        //    ReplaceInXml(url, xmlFileName);
        //    WilliamhillEnClient();
        //}

        //[TestMethod()]
        //[Timeout(900000)]//15 min
        //public void cvmasteraff()
        //{
        //    string url = "http://ads2.williamhill.com/redirect.aspx?pid=2214576&bid=1487410097&lpid=";
        //    ReplaceInXml(url, xmlFileName);
        //    WilliamhillEnClient();
        //}

        //private void ReplaceInXml(string value, string xmlFileName)
        //{
        //    XmlDocument doc = new XmlDocument();
        //    doc.Load(xmlFileName);
        //    //XmlNodeList nodes = doc.DocumentElement.SelectNodes(path);//("/catalog/book");
        //    XmlNodeList nodes = doc.DocumentElement.ChildNodes;

        //    foreach (XmlNode node in nodes)
        //    {
        //        try
        //        {
        //            if (node.Name == "object" && node.Attributes["id"].Value == "MainWebPage")
        //            {
        //                foreach (XmlNode innerNode in node.ChildNodes)
        //                {
        //                    if (innerNode.Name == "property" && innerNode.Attributes["name"].Value == "URL_Main")
        //                    {
        //                        string attribute = innerNode.Attributes["value"].Value;
        //                        innerNode.Attributes["value"].Value = value;
        //                        break;
        //                    }
        //                }
        //            }
        //        }
        //        catch (Exception)
        //        { }
        //        //XmlNodeList nodes2 = node.SelectSingleNode("object");
        //    }
        //    doc.Save(xmlFileName);
        //}

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
