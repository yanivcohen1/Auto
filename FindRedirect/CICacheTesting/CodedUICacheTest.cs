using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
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
        string SearchString;
        List<UITestControl> ControlList = new List<UITestControl>();
        List<UITestControl> FindControlList = new List<UITestControl>();
        string URL;
        // BrowserWindow webBrowser1;
        List<string> AllItems = new List<string>();
        IWin32Window WinOwner;
        bool firstEnter = true;
        bool Exists = false;
        Microsoft.VisualStudio.TestTools.UITesting.HtmlControls.HtmlDocument m_document;

        public CodedUICacheTest()
        {
        }

        public string CodedUICacheTest1(string URL1, string SearchString1)
        {
            URL = URL1;
            SearchString = SearchString1;
            CodedUITestMethod1();
            return m_document.PageUrl;
        }

        [TestMethod]
        public void CodedUITestMethod1()
        {
            //this.UIMap.RecordedMethod1();
            //ControlList.Clear();
            //URL = @"http://www.eurogrand.com/";
            Microsoft.VisualStudio.TestTools.UITesting.HtmlControls.HtmlDocument document = ChachTest(URL);

            #region Variable Declarations

            HtmlImage uIMediaimagesmain_bannImage = UIMap.UIItem21novaCasinoGetuWindow.UIItem21novaCasinoGetuDocument.UIMediaimagesmain_bannImage;

            #endregion Variable Declarations

            m_document = document;
            // Right-Click '/media/images/main_banner_en.jpg' image
            //Mouse.Click(uIMediaimagesmain_bannImage, MouseButtons.Right, ModifierKeys.None, new Point(191, 123));
            //Exists = uIMediaimagesmain_bannImage.Exists;
            //FindChildren(document.FindMatchingControls());
            //mshtml.HTMLDocument Doc = ((mshtml.HTMLBody)UIMap.UIGettingStartedattheOWindow.UIGettingStartedattheODocument.NativeElement).document;
            //var Controls = Doc.all;
            //foreach (var Control in ControlList)
            //{
            //    try
            //    {
            //        var NativeControl = (mshtml.IHTMLElement)Control.NativeElement;
            //        string innerHTML = NativeControl.innerHTML;
            //        if (innerHTML.Contains(SearchString))
            //        {
            //            bool childContainText = false;
            //            foreach (var InnerControl in Control.GetChildren())
            //            {
            //                try
            //                {
            //                    if (((mshtml.IHTMLElement)InnerControl.NativeElement).innerHTML.Contains(SearchString))
            //                    {
            //                        childContainText = true;
            //                        break;
            //                    }
            //                }
            //                catch (Exception) { }
            //            }
            //            if (!childContainText) //DrawHighlight on control
            //            {
            //                var Point = new Point(1, 1);
            //                bool Clickable = false;

            //                #region Comment

            //                //Control.id = "Yaniv1";
            //                //mshtml.IHTMLUniqueName id = Control as mshtml.IHTMLUniqueName;
            //                //string Uid = id.uniqueID;
            //                //UIMap.id = Uid;
            //                //UITestControl UIcontrol = UIMap.UIGettingStartedattheOWindow.UIGettingStartedattheODocument.UITabsgettingstartedCustom;
            //                //UITestControl UIcontrol = (UITestControl)Control;
            //                //string unikID = ((mshtml.IHTMLElement)Control).
            //                //UITestControl.PropertyNames.BoundingRectang
            //                //this.SearchProperties[UITestControl.PropertyNames.Name] = null;

            //                #endregion Comment

            //                UITestControl UIcontrol = Control;
            //                FindControlList.Add(UIcontrol);
            //                while (!Clickable && UIcontrol != null)
            //                {
            //                    Clickable = UIcontrol.TryGetClickablePoint(out Point);
            //                    if (Clickable)
            //                    {
            //                        //try
            //                        //{
            //                        //    Mouse.Hover(UIcontrol, Point);
            //                        //}
            //                        //catch (Exception) { }
            //                        UIcontrol.DrawHighlight();
            //                    }
            //                    else
            //                    {
            //                        UIcontrol = UIcontrol.GetParent();
            //                    }
            //                }
            //            }
            //        }
            //    }
            //    catch (Exception) { }
            //}
        }

        private Microsoft.VisualStudio.TestTools.UITesting.HtmlControls.HtmlDocument ChachTest(string URL)
        {
            #region Variable Declarations

            HtmlInputButton uIImFeelingLuckyButton = UIMap.UIGoogleWindowsInterneWindow.UIGoogleDocument.UIImFeelingLuckyButton;

            #endregion Variable Declarations

            UIMap.ChachTestParams.UIGoogleWindowsInterneWindowUrl = URL;
            // Go to web page 'https://www.google.com/' using new browser instance
            //if (firstEnter)
            //{
            try
            {
                UIMap.UIGoogleWindowsInterneWindow.NavigateToUrl(new System.Uri(UIMap.ChachTestParams.UIGoogleWindowsInterneWindowUrl));
            }
            catch (Exception)
            {
                UIMap.UIGoogleWindowsInterneWindow.LaunchUrl(new System.Uri(UIMap.ChachTestParams.UIGoogleWindowsInterneWindowUrl));
                //firstEnter = false;
            }
            //}
            //else
            //{
            //    UIMap.UIGoogleWindowsInterneWindow.NavigateToUrl(new System.Uri(UIMap.ChachTestParams.UIGoogleWindowsInterneWindowUrl));
            //}
            //string str = "yaniv";
            //long PrivateMemorySize = Process.GetProcessesByName(UIGoogleWindowsInterneWindow.Process.ProcessName)[0].PrivateMemorySize64;
            //document = ((mshtml.HTMLBody)this.UIGoogleWindowsInterneWindow.UIGoogleDocument.NativeElement).document;
            return UIMap.UIGoogleWindowsInterneWindow.UIGoogleDocument;
        }

        private void FindChildren(UITestControlCollection uITestControlCollection)
        {
            foreach (var control in uITestControlCollection)
            {
                try
                {
                    if (((mshtml.IHTMLElement)control.NativeElement).innerHTML.Contains(SearchString))
                    {
                        ControlList.Add(control);
                        if (control.GetChildren() != null)
                        {
                            FindChildren(control.GetChildren());
                        }
                    }
                }
                catch (Exception)
                { }
            }
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
                        AllItems.Add(img.Trim());
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
                        AllItems.Add(script1.Trim());
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
                        AllItems.Add(styleSheet1.Trim());
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
                                AllItems.Add(embed.Split('>')[0].Replace((char)34, (char)32).Trim());
                            }
                            EnterOnce = true;
                        }
                    }
                    catch (Exception) { }
                }
            }
            //MessageBox.Show(ArrayToStringGeneric(AllItems, Environment.NewLine));
            MessageBoxEx.Show(WinOwner, ArrayToStringGeneric(AllItems, Environment.NewLine), 2000);
            //System.Windows.Forms.MessageBoxEx
        }

        private void ShowSiteMap(mshtml.HTMLDocument document)
        {
            foreach (mshtml.IHTMLElement Link in document.links)
            {
                // image.SetAttribute("src", string.Empty);
                try
                {
                    string Link1 = Link.getAttribute("href");
                    if (Link1.Trim() != "" && !Link1.Contains(".") && !AllItems.Contains(Link1))
                    {
                        AllItems.Add(Link1.Trim());
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
}