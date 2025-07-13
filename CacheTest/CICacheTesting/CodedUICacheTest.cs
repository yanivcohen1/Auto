using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Runtime.InteropServices;
using System.Text.RegularExpressions;
using System.Windows.Forms;
using System.Windows.Input;
using Microsoft.VisualStudio.TestTools.UITest.Extension;
using Microsoft.VisualStudio.TestTools.UITesting;
using Microsoft.VisualStudio.TestTools.UITesting.HtmlControls;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Keyboard = Microsoft.VisualStudio.TestTools.UITesting.Keyboard;

namespace CICacheTesting
{
    /// <summary>
    /// Summary description for CodedUICacheTest
    /// </summary>
    [CodedUITest]
    public class CodedUICacheTest
    {
        string m_URL;
        // BrowserWindow webBrowser1;
        List<string> m_AllItems = new List<string>();
        IWin32Window m_WinOwner;
        bool m_IsSize = false;
        long m_ProcessSize;

        public CodedUICacheTest()
        {
        }

        public string[] CodedUICacheTest1(string URL1, IWin32Window IWinOwner, out long ProcessSize)
        {
            m_URL = URL1;
            m_WinOwner = IWinOwner;
            //m_IsSize = IsSize;
            CodedUITestMethod1();
            long Mbytes = 1024 * 1024;
            ProcessSize = m_ProcessSize / Mbytes;
            return m_AllItems.ToArray();
        }

        [TestMethod]
        public void CodedUITestMethod1()
        {
            //URL = @"http://www.eurogrand.com/";
            mshtml.HTMLDocument document = ChachTest(m_URL, out m_ProcessSize);
            Calcfiles(document);
        }

        public void Calcfiles(mshtml.HTMLDocument document)
        {
            //ShowSiteMap(document);
            //webBrowser1 = this.UIMap.CICacheTest2(URL);
            //mshtml.HTMLDocument document = (mshtml.HTMLDocument)webBrowser1.CurrentDocumentWindow;
            foreach (mshtml.IHTMLElement image in document.images)
            {
                try
                {
                    string img = image.getAttribute("src");
                    if (img.Trim() != "")
                    {
                        //long size = ToFileFromUri(new Uri(img)).Length;
                        m_AllItems.Add(img.Trim());
                    }
                }
                catch (Exception) { }
            }
            foreach (mshtml.IHTMLElement script in document.scripts)
            {
                // image.SetAttribute("src", string.Empty);
                try
                {
                    string script1 = script.getAttribute("src");
                    if (script1.Trim() != "")
                    {
                        m_AllItems.Add(script1.Trim());
                    }
                }
                catch (Exception) { }
            }
            foreach (mshtml.IHTMLElement styleSheet in document.links)
            {
                // image.SetAttribute("src", string.Empty);
                try
                {
                    string styleSheet1 = styleSheet.getAttribute("href");
                    if (styleSheet1.Trim() != "" && styleSheet1.Contains(".css"))
                    {
                        //FileInfo f = new FileInfo(styleSheet1);
                        //long size = f.Length;
                        m_AllItems.Add(styleSheet1.Trim());
                    }
                }
                catch (Exception) { }
            }
            foreach (mshtml.IHTMLElement OBJ in document.getElementsByTagName("object"))
            {
                // image.SetAttribute("src", string.Empty);
                bool EnterOnce = false;
                foreach (string embed in OBJ.innerHTML.Split('='))
                {
                    try
                    {
                        //embed
                        //string embed1 = embed.getAttribute("src");
                        //string str = ".swf";
                        //char a = '"';
                        if (embed.Contains(".swf"))
                        {
                            if (!EnterOnce)
                            {
                                m_AllItems.Add(embed.Split('>')[0].Replace((char)34, (char)32).Trim());
                            }
                            EnterOnce = true;
                        }
                    }
                    catch (Exception) { }
                }
            }
            //MessageBox.Show(ArrayToStringGeneric(AllItems, Environment.NewLine));
            MessageBoxEx.Show(m_WinOwner, ArrayToStringGeneric(m_AllItems, Environment.NewLine), 2000);
            //System.Windows.Forms.MessageBoxEx
        }

        public mshtml.HTMLDocument ChachTest(string URL, out long ProcessSize)
        {
            #region Variable Declarations

            HtmlInputButton uIImFeelingLuckyButton = UIMap.UIGoogleWindowsInterneWindow.UIGoogleDocument.UIImFeelingLuckyButton;

            #endregion Variable Declarations

            UIMap.ChachTestParams.UIGoogleWindowsInterneWindowUrl = URL;
            // Go to web page 'https://www.google.com/' using new browser instance
            try
            {
                UIMap.UIGoogleWindowsInterneWindow.NavigateToUrl(new System.Uri(UIMap.ChachTestParams.UIGoogleWindowsInterneWindowUrl));
            }
            catch (Exception)
            {
                UIMap.UIGoogleWindowsInterneWindow.LaunchUrl(new System.Uri(UIMap.ChachTestParams.UIGoogleWindowsInterneWindowUrl));
            }

            //long PrivateMemorySize = Process.GetProcessesByName(UIGoogleWindowsInterneWindow.Process.ProcessName)[0].PrivateMemorySize64;
            mshtml.HTMLDocument document = ((mshtml.HTMLBody)UIMap.UIGoogleWindowsInterneWindow.UIGoogleDocument.NativeElement).document;

            Int32 hwnd = UIMap.UIGoogleWindowsInterneWindow.UIGoogleDocument.WindowHandle.ToInt32();
            Int32 pid = win32.GetWindowProcessID(hwnd);
            Process p = Process.GetProcessById(pid);
            ProcessSize = p.WorkingSet64;
            //ProcessSize = 0;
            //foreach (Process Process in Process.GetProcesses())
            //{
            //    if (WinHandle == Process.MainWindowHandle)
            //    {
            //        ProcessSize = Process.WorkingSet64;
            //        //ProcessSize =
            //    }
            //}
            return document;
            // Click 'I'm Feeling Lucky' button
            //Mouse.Click(uIImFeelingLuckyButton, new Point(63, 18));
        }

        private void ShowSiteMap(mshtml.HTMLDocument document)
        {
            foreach (mshtml.IHTMLElement Link in document.links)
            {
                // image.SetAttribute("src", string.Empty);
                try
                {
                    string Link1 = Link.getAttribute("href");
                    if (Link1.Trim() != "" && !Link1.Contains(".") && !m_AllItems.Contains(Link1))
                    {
                        m_AllItems.Add(Link1.Trim());
                    }
                }
                catch (Exception) { }
            }
        }

        public static FileInfo ToFileFromUri(System.Uri url)
        {
            if (url.Scheme.Equals("file") == false)
            {
                return null;
            }
            else
            {
                String filename = url.PathAndQuery.Replace('/', Path.DirectorySeparatorChar);
                return new FileInfo(filename);
            }
        }

        public static string ArrayToStringGeneric<T>(IList<T> array, string delimeter)
        {
            string outputString = "";

            for (int i = 0; i < array.Count; i++)
            {
                if (array[i] is IList<T>)
                {
                    //Recursively convert nested arrays to string
                    outputString += ArrayToStringGeneric<T>((IList<T>)array[i], delimeter);
                }
                else
                {
                    outputString += array[i];
                }

                if (i != array.Count - 1)
                    outputString += delimeter;
            }

            return outputString;
        }

        //public BrowserWindow CICacheTest2(string URL)
        //{
        //    this.CICacheTest2Params.Url = URL;
        //    // Go to web page 'https://www.google.com/' using new browser instance
        //    BrowserWindow googlecomBrowser = BrowserWindow.Launch(new System.Uri(this.CICacheTest2Params.Url));
        //    calc(googlecomBrowser);
        //    return googlecomBrowser;
        //}

        #region Additional test attributes

        // You can use the following additional attributes as you write your tests:

        ////Use TestInitialize to run code before running each test
        //[TestInitialize()]
        //public void MyTestInitialize()
        //{
        //    // To generate code for this test, select "Generate Code for Coded UI Test" from the shortcut menu and select one of the menu items.
        //    // For more information on generated code, see http://go.microsoft.com/fwlink/?LinkId=179463
        //}

        ////Use TestCleanup to run code after each test has run
        //[TestCleanup()]
        //public void MyTestCleanup()
        //{
        //    // To generate code for this test, select "Generate Code for Coded UI Test" from the shortcut menu and select one of the menu items.
        //    // For more information on generated code, see http://go.microsoft.com/fwlink/?LinkId=179463
        //}

        #endregion Additional test attributes

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

        private TestContext testContextInstance;

        public UIMap UIMap
        {
            get
            {
                if ((this.map == null))
                {
                    this.map = new UIMap();
                }

                return this.map;
            }
        }

        private UIMap map;
    }

    class win32
    {
        [DllImport("user32")]
        private static extern UInt32 GetWindowThreadProcessId(
          Int32 hWnd,
          out Int32 lpdwProcessId
        );

        public static Int32 GetWindowProcessID(Int32 hwnd)
        {
            Int32 pid = 1;
            GetWindowThreadProcessId(hwnd, out pid);
            return pid;
        }

        public win32()
        {
        }
    }
}