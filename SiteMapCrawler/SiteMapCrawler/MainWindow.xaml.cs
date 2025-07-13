using System;
using System.Collections.Generic;
//using WpfApplication1.Properties;
using System.Diagnostics;
using System.IO;
using System.Linq;
//using SiteMapBuilder.Properties;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Automation.Peers;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Forms;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using mshtml;
//using Nomad.Extensions.Windows.Forms;
using SiteMapBuilder.Properties;

namespace WpfApplication1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private static List<string> AllItems = new List<string>();
        private static int Length = 0;
        private Thread thread;
        private static bool isStop = false;
        private static TaskScheduler Context;
        private static mshtml.HTMLDocument document;
        private static string Sitmap;
        private delegate void NavigateDocumentDel(int i);
        private static NavigateDocumentDel NavigateDocumentDel1;
        private delegate void NavigateDocumentDel11();
        private static NavigateDocumentDel11 UpdateDocumentDel;
        private static NavigateDocumentDel11 UpdateGuiDel;
        private static NavigateDocumentDel11 WaitNavigateFinishDel;
        private static NavigateDocumentDel11 ShowResultsDel;
        private bool IsLoaded = false;
        private static string MainURL = null;
        private static bool filter = false;
        private static StreamWriter m_SW;
        //private static StreamWriter m_ResultStream;
        //private static StreamReader m_SR_Result;
        private static string l_Resultfile;
        private static string l_SitemapFile;
        private static string[] l_AllSiteMapLinks;
        //string l_Resultfile;
        //static Window ThisWindow;

        public MainWindow()
        {
            InitializeComponent();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            //GoButton.RaiseEvent();
            B_StartMap.Content = "Start Map";
            B_StartMap.IsEnabled = true;
            Context = TaskScheduler.FromCurrentSynchronizationContext();
            NavigateDocumentDel1 = new NavigateDocumentDel(NavigateDocument);
            UpdateDocumentDel = new NavigateDocumentDel11(UpdateDocument);
            UpdateGuiDel = new NavigateDocumentDel11(UpdateGui);
            WaitNavigateFinishDel = new NavigateDocumentDel11(WaitNavigateFinish);
            ShowResultsDel = new NavigateDocumentDel11(ShowResults);
            B_StartMap.IsEnabled = false;
            //ThisWindow = this;
            //GoButton.RaiseEvent(new RoutedEventArgs(System.Windows.Controls.Button.ClickEvent, GoButton));
        }

        private void Go_Click(object sender, RoutedEventArgs e)
        {
            string url = textBox1.Text;
            //bool UrlFormatOK = true;
            if (!url.ToLower().StartsWith("http://www") &&
                !url.ToLower().StartsWith("https://www"))
            {
                System.Windows.MessageBox.Show("Add http://www. to youre URL");
                //UrlFormatOK = false;
                //url = "http://www." + url;
                //textBox1.Text = url;
            }
            MainURL = url;
            //HideScriptErrors(webBrowser1 , true);
            webBrowser1.Navigate(new Uri(url));
            B_StartMap.IsEnabled = true;
        }

        public void HideScriptErrors(System.Windows.Controls.WebBrowser wb, bool Hide)
        {
            FieldInfo fiComWebBrowser = typeof(System.Windows.Controls.WebBrowser).GetField("_axIWebBrowser2", BindingFlags.Instance | BindingFlags.NonPublic);
            if (fiComWebBrowser == null) return;
            object objComWebBrowser = fiComWebBrowser.GetValue(wb);
            if (objComWebBrowser == null) return;
            objComWebBrowser.GetType().InvokeMember("Silent", BindingFlags.SetProperty, null, objComWebBrowser, new object[] { Hide });
        }

        public void HideScriptErrors2(System.Windows.Controls.WebBrowser wb, bool Hide)
        {
            //mshtml.HTMLBody _axIWebBrowser2
        }

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            // HtmlDocument tempDocument webBrowser1.Document;
            //Func<HtmlDocument, HtmlDocument> filter = delegate Func();
            //FileStream source = new FileStream(@"C:\Temp2\OfflineHtml\google.html", FileMode.Open, FileAccess.Read);

            //process the request

            //webBrowser1.ProcessRequest(source, StripImageLoading);
            //System.Windows.Controls.WebBrowser.html
            //mshtml.HTMLDocument
            mshtml.HTMLDocument document = (mshtml.HTMLDocument)webBrowser1.Document;
            string AllItems = null;
            foreach (mshtml.IHTMLElement image in document.images)
            {
                try
                {
                    string img = image.getAttribute("src");
                    if (img.Trim() != "")
                    {
                        AllItems = AllItems + img.Trim() + "\r\n";
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
                        AllItems = AllItems + script1.Trim() + "\r\n";
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
                        AllItems = AllItems + styleSheet1.Trim() + "\r\n";
                    }
                }
                catch (Exception) { }
            }
            //foreach (mshtml.IHTMLElement embed in document.embeds)
            //var embed3 = document.getElementsByTagName("object");
            foreach (mshtml.IHTMLElement OBJ in document.getElementsByTagName("object"))
            {
                // image.SetAttribute("src", string.Empty);
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
                            AllItems = AllItems + embed.Split('>')[0].Replace((char)34, (char)32).Trim() + "\r\n";
                        }
                    }
                    catch (Exception) { }
                }
            }
            //document.documentElement
            //var htmlElements = document.scripts;//.getElementsByTagName("script");
            //foreach (mshtml.IHTMLElement htmlElement in htmlElements)
            //{
            //    AllItems = AllItems + htmlElement.GetAttribute("src") + "\r\n";
            //}
            System.Windows.Forms.MessageBox.Show(AllItems);
        }

        public HtmlDocument StripImageLoading(HtmlDocument document)
        {
            foreach (HtmlElement image in document.Images)
                image.SetAttribute("src", string.Empty);

            return document;
        }

        private static void SiteMapBuilder()
        {
            //mshtml.HTMLDocument document = (mshtml.HTMLDocument)webBrowser1.Document;
            //foreach (var Line in File.ReadAllLines(l_SitemapFile, Encoding.ASCII))
            //{
            //    listBox1.Items.Add(Line);
            //}
            l_AllSiteMapLinks = File.ReadAllLines(l_SitemapFile, Encoding.ASCII);
            NavigateDocumentDel1(0);
            WaitNavigateFinishDel();
            UpdateDocumentDel();
            FindAllSiteLinks();
            for (int i = 0; i < l_AllSiteMapLinks.Length - 1; i++)
            {
                //NavigateDocument(i);
                NavigateDocumentDel1(i);
                WaitNavigateFinishDel();
                if (isStop)
                {
                    break;
                }
                else
                {
                    UpdateDocumentDel();
                    FindAllSiteLinks();
                }
            }
            UpdateGuiDel();//finish
//<<<<<<< .mine
            m_SW.Close();
            //if (!isStop)
            //{
            ShowResultsDel();
            //}
//=======
            //if (!isStop)
            //{
            //    ShowResultsDel();
            //}
//>>>>>>> .r14384
        }

        private static void FindAllSiteLinks()
        {
            foreach (mshtml.IHTMLElement Link in document.links)
            {
                // image.SetAttribute("src", string.Empty);
                try
                {
                    string Link1 = Link.getAttribute("href");
                    string innerText = Link.innerText;
                    string PageURL = document.url;
                    Link1 = Link1.Replace("://", ":/").Replace("//", "/").Replace(":/", "://").Trim(); //Link1.Replace("//", "/").Trim();
                    if (Link1.Substring(Link1.Length - 1) != "/")
                    {
                        Link1 = Link1 + "/";
                    }
                    string Link1o = Link1;
                    string Link2 = Link1.Substring(Length);
                    string Link3 = Link1.Substring(Link1.Length - 2);
                    bool findLanguageFilter = false;
                    if (filter)
                    {
                        foreach (var item in Settings.Default.LanguageFilter)
                        {
                            if (Link1o.Contains(item))
                            {
                                findLanguageFilter = true;
                            }
                        }
                    }
                    //if (Link1.Contains('#'))
                    //{
                    //    Link1o = Link1.Substring(0, Link1.LastIndexOf('#'));
                    //    if (Link1o.Substring(Link1o.Length - 1) != "/")
                    //    {
                    //        Link1o = Link1o + "/";
                    //    }
                    //}
                    //if (Link1.Contains('?'))
                    //{
                    //    Link1o = Link1.Substring(0, Link1.LastIndexOf('?'));
                    //    if (Link1o.Substring(Link1o.Length - 1) != "/")
                    //    {
                    //        Link1o = Link1o + "/";
                    //    }
                    //}
                    if (Link1.Contains(Sitmap) && !findLanguageFilter)//!AllItems.Contains(Link1o) &&
                    {
                        if (Link1o.Contains(".php"))
                        {
                            string PHPLink = Link1o.Substring(0, Link1o.LastIndexOf(".php"));
                            //if (!AllItems.Contains(PHPLink + ".php"))
                            //{
                                //AllItems.Add(PHPLink + ".php");
                            m_SW.WriteLine(PageURL + ',' + innerText + ',' + PHPLink + ".php");
                                //m_SW.WriteLine(PHPLink + ".php");
                                //m_SW.WriteLine(innerText
                            //}
                        }
                        else if (Link1o.Contains(".html"))
                        {
                            //if (!AllItems.Contains(Link1o.Substring(0, Link1o.LastIndexOf(".html")) + ".html"))
                            //{
                                //AllItems.Add(Link1o.Substring(0, Link1o.LastIndexOf(".html")) + ".html");
                                m_SW.WriteLine(PageURL + ',' + innerText + ',' + Link1o.Substring(0, Link1o.LastIndexOf(".html")) + ".html");
                            //}
                        }
                        else if (Link1o.Contains(".htm"))
                        {
                            //if (!AllItems.Contains(Link1o.Substring(0, Link1o.LastIndexOf(".htm")) + ".htm"))
                            //{
                                //AllItems.Add(Link1o.Substring(0, Link1o.LastIndexOf(".htm")) + ".htm");
                            m_SW.WriteLine(PageURL + ',' + innerText + ',' + Link1o.Substring(0, Link1o.LastIndexOf(".htm")) + ".htm");
                            //}
                        }
                        else
                        {
                            //string[] Type = new string[] { ".css", ".css", ".css", ".css", ".css", ".css", ".css" };
                            if (!Link2.Contains("."))
                            {
                                //AllItems.Add(Link1o);
                                m_SW.WriteLine(PageURL + ',' + innerText + ',' + Link1o);
                            }
                            else if (!Link1o.ToLower().Contains(".css") && !Link1o.ToLower().Contains(".jpg") &&
                                !Link1o.ToLower().Contains(".png") && !Link1o.ToLower().Contains(".gif")
                                && !Link1o.ToLower().Contains(".swf") && !Link1o.ToLower().Contains(".js") &&
                                !Link1o.ToLower().Contains(".pdf") && !Link1o.ToLower().Contains(".exe") &&
                                !Link1o.ToLower().Contains(".ico") && !Link1o.ToLower().Contains("@") &&
                                 !Link1o.ToLower().Contains(".jpeg"))
                            {
                                //AllItems.Add(Link1o);
                                m_SW.WriteLine(PageURL + ',' + innerText + ',' + Link1o);
                            }
                        }
                    }
                }
                catch (Exception) { }
                if (isStop)
                {
                    break;
                }
            }
            //m_SW = new StreamWriter(l_Resultfile, false, Encoding.ASCII);
            //m_SW.AutoFlush = true;
            //m_SW.Write(ArrayToStringGeneric(AllItems, Environment.NewLine));
            //m_SW.Close();
        }

        private void NavigateDocument(int i)
        {
            Task.Factory.StartNew(() =>
            {
                L_Status.Content = (i + 1).ToString() + "-Of-" + l_AllSiteMapLinks.Length;
                textBox1.Text = l_AllSiteMapLinks[i];
                webBrowser1.Navigate(new Uri(l_AllSiteMapLinks[i]));
            }, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
        }

        private void UpdateDocument()
        {
            Task.Factory.StartNew(() =>
            {
                document = (mshtml.HTMLDocument)webBrowser1.Document;
            }, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
        }

        private void UpdateGui()
        {
            Task.Factory.StartNew(() =>
            {
                B_StartMap.Content = "Start Map";
                B_StartMap.IsEnabled = true;
            }, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
        }

        private void WaitNavigateFinish()
        {
            int count = 0;
            int sleepTimeMiliseconds = 100;
            int waitTime = 60000;
            IsLoaded = false;
            while (!IsLoaded && !isStop)
            {
                Thread.Sleep(sleepTimeMiliseconds);
                System.Windows.Forms.Application.DoEvents();
                count++;
                if (count > waitTime / sleepTimeMiliseconds)
                    break;
                //Task.Factory.StartNew(() =>
                //{
                //    IsLoaded = webBrowser1.IsLoaded;
                //}, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
            }
        }

        private void ShowResults()
        {
            string TextResult = null;
            Task.Factory.StartNew(() =>
            {
                TextResult = ArrayToStringGeneric(AllItems, Environment.NewLine);
                SitmapWindow SitmapWindow1 = new SitmapWindow(l_Resultfile);
                SitmapWindow1.Owner = this;
                SitmapWindow1.ShowDialog();
                Thread.Sleep(1000);
                //SaveAS(TextResult);
            }, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
        }

        private void SaveAS(string TextResult)
        {
            Microsoft.Win32.SaveFileDialog dlg = new Microsoft.Win32.SaveFileDialog();
            dlg.FileName = "SitMap"; // Default file name
            dlg.DefaultExt = ".CSV"; // Default file extension
            dlg.Filter = "CSV documents (.csv)|*.csv|Allfiles (.*)|*.*"; // Filter files by extension
            // Show open file dialog box
            Nullable<bool> result = dlg.ShowDialog();

            // Process open file dialog box results
            if (result == true)
            {
                // Open document
                string filename = dlg.FileName;
                //FileStream fs = (FileStream)dlg.OpenFile();
                using (StreamWriter outfile = new StreamWriter(dlg.FileName))
                {
                    outfile.Write(TextResult);
                }
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

        private void B_StartMap_Click(object sender, RoutedEventArgs e)
        {
            if (B_StartMap.Content.ToString() == "Start Map")
            {
                AllItems.Clear();
                Length = T_Sitmap.Text.Length;
                Sitmap = T_Sitmap.Text;
                document = (mshtml.HTMLDocument)webBrowser1.Document;
                thread = new Thread(SiteMapBuilder);
                thread.IsBackground = true;
                thread.SetApartmentState(ApartmentState.STA);
                //thread.ApartmentState = ApartmentState.STA;
                l_Resultfile = SelectSaveTextFile(@"c:\temp\", "Select File To Save The results");
                l_SitemapFile = SelectTextFile(@"c:\");
                if (l_Resultfile != null && l_SitemapFile !=null)
                {
                    m_SW = new StreamWriter(l_Resultfile, false, Encoding.ASCII);
                    isStop = false;
                    B_StartMap.IsEnabled = true;
                    B_StartMap.Content = "Stop Map";

                    thread.Start();
                }
                //SiteMapBuilder();
            }
            else
            {
                isStop = true;
                B_StartMap.Content = "Stopping..";
                B_StartMap.IsEnabled = false;
            }
        }

        private string SelectSaveTextFile(string initialDirectory, string Title)
        {
            Microsoft.Win32.SaveFileDialog dialog = new Microsoft.Win32.SaveFileDialog();
            dialog.Filter =
               "csv files (*.csv)|*.csv|All files (*.*)|*.*";
            //dialog.InitialDirectory = initialDirectory;
            dialog.Title = Title;
            Nullable<bool> result = dialog.ShowDialog();
            return (result == true) ? dialog.FileName : null;
        }

        private void webBrowser1_LoadCompleted(object sender, NavigationEventArgs e)
        {
            IsLoaded = true;
        }

        private void webBrowser1_Navigated(object sender, NavigationEventArgs e)
        {
            HideScriptErrors(webBrowser1, true);
        }

        private void B_Config_Click(object sender, RoutedEventArgs e)
        {
            string ConfigName = Process.GetCurrentProcess().MainModule.FileName + ".config";
            System.Diagnostics.Process.Start(ConfigName);
        }

        private void checkBox1_Click(object sender, RoutedEventArgs e)
        {
            filter = checkBox1.IsChecked.Value;
        }

        private string SelectTextFile(string initialDirectory)
        {
            Microsoft.Win32.OpenFileDialog dialog = new Microsoft.Win32.OpenFileDialog();
            dialog.Filter =
               "csv files (*.csv)|*.csv|All files (*.*)|*.*";
            dialog.InitialDirectory = initialDirectory;
            dialog.Title = "Select Sitmap file";
            Nullable<bool> result = dialog.ShowDialog();
            return (result == true) ? dialog.FileName : null;
        }

        private void T_Sitmap_TextChanged(object sender, TextChangedEventArgs e)
        {
            if (T_Sitmap.Text != "")
            {
                B_StartMap.IsEnabled = true;
            }
            else
            {
                B_StartMap.IsEnabled = false;
            }
        }
    }
}