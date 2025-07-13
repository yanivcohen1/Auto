using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using AutomationLib;
using System.Threading;
using System.Xml;
using System.Net;
using System.IO;

namespace SportBanner
{
    /// <summary>
    ///This is a test class for ProgramTest and is intended
    ///to contain all ProgramTest Unit Tests
    ///</summary>
    [TestClass()]
    public class SportBannerEn : Automation_Lib
    {
        private bool bebug = false;
        private TestContext testContextInstance;
        /// <summary>
        /// the selenium driver
        /// </summary>
        //public IWebDriver driver;

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
                Init(typeof(SportBannerEn));
            //driver = StartBrowser();
        }

        /// <summary>
        ///The main test
        ///</summary>
        public void SportBannerEnTestDebug()
        {
            string URL = @"http://feeds.affutd.com/feed.ip.php?lang=en&market=MR&cat_id=5&hash=5856d16b77b4dba876af4c0edc533d98";
            //bool pass = RequestResponse(URL);
            bool pass = XMLReader(URL);
            Assert.IsTrue(pass, "TestFail No Cache URL:" + URL);
            URL = @"http://cachefeeds.affutd.com/feed.ip.php?lang=en&market=MR&cat_id=5&hash=5856d16b77b4dba876af4c0edc533d98";
            pass = XMLReader(URL);
            Assert.IsTrue(pass, "TestFail Cache URL:" + URL);
        }

        /// <summary>
        ///A test for Program Constructor
        ///</summary>
        [TestMethod()]
        [Timeout(900000)]//15 min
        public void SportBannerEnTest()
        {
            if (!bebug)
            {
                int trays = 3;
                for (int i = 0; i < trays; i++)
                {
                    try
                    {
                        SportBannerEnTestDebug();
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
                SportBannerEnTestDebug();
            }
        }

        private static bool XMLReader(string URL)
        {
            // Retrieve XML document
            XmlTextReader reader = new XmlTextReader(URL);
            // Skip non-significant whitespace
            reader.WhitespaceHandling = WhitespaceHandling.Significant;
            // Read nodes one at a time
            bool findEvent = false;
            try
            {
                while (reader.Read())
                {
                    // Print out info on node
                    //Console.WriteLine("{0}: {1}", reader.NodeType.ToString(), reader.Name);
                    if (reader.NodeType == XmlNodeType.Element & reader.Name == "event")
                        findEvent = true;
                }
            }
            catch (Exception)
            {
            }
            return findEvent;
        }

        private static bool RequestResponse(string URL)
        {
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(URL);
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                StreamReader sr = new StreamReader(response.GetResponseStream());
                //string strRead = sr.ReadToEnd();
                //MessageBox.Show(strRead, "HttpPost: Request error",
                //     MessageBoxButtons.OK, MessageBoxIcon.Error);
                XmlTextReader xtr = new XmlTextReader(sr);
                xtr.WhitespaceHandling = WhitespaceHandling.None;
                XmlDocument xd = new XmlDocument();
                xd.Load(xtr);
                XmlNode xnodDE = xd.DocumentElement;
                ChildDisplay(xnodDE, 0);
                xtr.Close();

                sr.Close();
                return true;
            }
            catch (Exception ex)
            {
                //MessageBox.Show(ex.Message, "HttpPost: Request error",
                     //MessageBoxButtons.OK, MessageBoxIcon.Error);
                throw new System.ArgumentException("HttpPost: Request error: ", ex.Message);
            }
        }

        private static void ChildDisplay(XmlNode xnod, int level)
        {
            XmlNode xnodWorking;
            String pad = new String(' ', level * 2);

            Console.WriteLine(pad + xnod.Name + "(" + xnod.NodeType.ToString() + ": " + xnod.Value + ")");

            if (xnod.NodeType == XmlNodeType.Element)
            {
                XmlNamedNodeMap mapAttributes = xnod.Attributes;
                for (int i = 0; i < mapAttributes.Count; i++)
                {
                    Console.WriteLine(pad + " " + mapAttributes.Item(i).Name + " = " + mapAttributes.Item(i).Value);
                }
            }

            if (xnod.HasChildNodes)
            {
                xnodWorking = xnod.FirstChild;
                while (xnodWorking != null)
                {
                    ChildDisplay(xnodWorking, level + 1);
                    xnodWorking = xnodWorking.NextSibling;
                }
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
                //driver.Quit();
            }
            catch (Exception) { }
            finally
            {
                Kill_Processes();
            }
        }

    }
}
