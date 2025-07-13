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
using Nomad.Extensions.Windows.Forms;
using SiteMapBuilder;
using SiteMapBuilder.Properties;

namespace WpfApplication1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        static List<string> AllItems = new List<string>();
        static int Length = 0;
        Thread thread;
        public Boolean isStop = new Boolean();
        public TaskScheduler Context;
        static mshtml.HTMLDocument document;
        private static string Sitmap;
        delegate void NavigateDocumentDel(int i);
        static NavigateDocumentDel NavigateDocumentDel1;
        delegate void NavigateDocumentDel11();
        static NavigateDocumentDel11 UpdateDocumentDel;
        static NavigateDocumentDel11 UpdateGuiDel;
        static NavigateDocumentDel11 WaitNavigateFinishDel;
        static NavigateDocumentDel11 ShowResultsDel;
        bool IsLoaded = false;
        static string MainURL = null;
        static bool filter = false;
        //static Window ThisWindow;
        private static StreamWriter SW;
        List<string> SiteList = new List<string>();
        static string S_SearchString;
        ControlWindow ControlWindow1;

        public MainWindow()
        {
            InitializeComponent();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            //GoButton.RaiseEvent();
            B_StartMap.Content = "Start";
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
            FileStream fileStream = new FileStream(@"c:\Temp\FlashCasino.csv", FileMode.Append);
            fileStream.Close();
            SW = new StreamWriter(@"c:\Temp\FlashCasino.csv", true, Encoding.ASCII);
            SW.AutoFlush = true;
            SW.WriteLine("Site URL");
            textBox1.Text = "http://www.21nova.com/";//"http://livecasino.eurogrand.com/";
            T_Sitmap.Text = "http://www.21nova.com";//http://livecasino.eurogrand.com";
            SearchString.Text = Settings.Default.SearchString;
            GoButton.IsEnabled = true;
            isStop = false;
            //thread = new Thread(ShowStopWin);
            //thread.IsBackground = true;
            //thread.SetApartmentState(ApartmentState.STA);
            //thread.Start();
        }

        private void ShowStopWin()
        {
            ControlWindow1 = new ControlWindow(this);
            //ControlWindow1.Owner = this;
            //ControlWindow1.Show();
            ControlWindow1.ShowDialog();
        }

        private void Go_Click(object sender, RoutedEventArgs e)
        {
            if (GoButton.Content.ToString() == "Go")
            {
                string url = textBox1.Text;
                if (!url.StartsWith("http://") &&
                    !url.StartsWith("https://"))
                {
                    url = "http://" + url;
                }
                MainURL = url;
                //HideScriptErrors(webBrowser1 , true);
                webBrowser1.Navigate(new Uri(url));
                B_StartMap.IsEnabled = true;
                //GoButton.Content = "Stop";
            }
            else
            {
                //B_StartMap.IsEnabled = ;
                isStop = true;
                GoButton.Content = "Stopping..";
                GoButton.IsEnabled = false;
            }
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

        private void SiteMapBuilder()
        {
            //mshtml.HTMLDocument document = (mshtml.HTMLDocument)webBrowser1.Document;
            FindAllSiteLinks();
            SearchStringInHTML();
            for (int i = 0; i < AllItems.Count - 1; i++)
            {
                //NavigateDocument(i);
                textBox1.Text = AllItems[i];
                NavigateDocumentDel1(i);//Navigating to doc i
                WaitNavigateFinishDel();//Waiting for finish
                if (isStop)
                {
                    break;
                }
                else
                {
                    UpdateDocumentDel();//update the document var
                    FindAllSiteLinks();
                }
                SearchStringInHTML();
            }
            UpdateGuiDel();//finish
            if (!isStop)
            {
                ShowResultsDel();
            }
            B_StartMap.IsEnabled = true;
            GoButton.IsEnabled = true;
            GoButton.Content = "Go";
        }

        private static void SearchStringInHTML()
        {
            //if (document.all.toString().Contains("flashcasino.php"))
            foreach (IHTMLElement item in document.getElementsByTagName("html"))
            {
                if (item.innerHTML.Contains(S_SearchString))
                    SW.WriteLine(document.url);
            }
            //if (((HtmlDocument)webBrowser1.Document).GetElementsByTagName("head")[0].InnerHtml.Contains("flashcasino.php"))
            //{
            //    SW.WriteLine(document.url);
            //}
        }

        private void FindAllSiteLinks()
        {
            foreach (mshtml.IHTMLElement Link in document.links)
            {
                // image.SetAttribute("src", string.Empty);
                try
                {
                    string Link1 = Link.getAttribute("href");
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
                    if (Link1.Contains('#'))
                    {
                        Link1o = Link1.Substring(0, Link1.LastIndexOf('#'));
                        if (Link1o.Substring(Link1o.Length - 1) != "/")
                        {
                            Link1o = Link1o + "/";
                        }
                    }
                    if (Link1o.Contains(".php") && Link1.Contains(Sitmap) &&
                        !AllItems.Contains(Link1o) && !findLanguageFilter)
                    {
                        string PHPLink = Link1o.Substring(0, Link1o.LastIndexOf(".php"));
                        if (!AllItems.Contains(PHPLink + ".php"))
                        {
                            AllItems.Add(PHPLink + ".php");
                        }
                        string HTMLLink = Link1o.Substring(0, Link1o.LastIndexOf(".html"));
                        if (!AllItems.Contains(HTMLLink + ".html"))
                        {
                            AllItems.Add(HTMLLink + ".html");
                        }
                    }
                    else
                    {
                        if (!Link2.Contains(".pdf") && !AllItems.Contains(Link1o) && //!Link2.Contains(".") &&
                                        Link1.Contains(Sitmap) && !findLanguageFilter)
                        {
                            AllItems.Add(Link1o);
                        }
                    }
                }
                catch (Exception) { }
                if (isStop)
                {
                    break;
                }
            }
        }

        private void NavigateDocument(int i)
        {
            //Task.Factory.StartNew(() =>
            //{
            L_Status.Content = (i + 1).ToString() + "-Of-" + AllItems.Count;
            webBrowser1.Navigate(new Uri(AllItems[i]));
            //}, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
        }

        private void UpdateDocument()
        {
            //Task.Factory.StartNew(() =>
            //{
            document = (mshtml.HTMLDocument)webBrowser1.Document;
            //}, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
        }

        private void UpdateGui()
        {
            //Task.Factory.StartNew(() =>
            //{
            B_StartMap.Content = "Start";
            B_StartMap.IsEnabled = true;
            //}, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
        }

        private void WaitNavigateFinish()
        {
            int count = 0;
            int sleepTimeMiliseconds = 100;
            int waitTime = 60000;
            IsLoaded = false;
            GoButton.IsEnabled = true;
            System.Windows.Forms.Application.DoEvents();
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
            GoButton.IsEnabled = false;
            System.Windows.Forms.Application.DoEvents();
            Thread.Sleep(Convert.ToInt32(Settings.Default.LoadDelayInMs));
        }

        private void ShowResults()
        {
            string TextResult = null;
            //Task.Factory.StartNew(() =>
            //{
            TextResult = ArrayToStringGeneric(AllItems, Environment.NewLine);
            SitmapWindow SitmapWindow1 = new SitmapWindow(TextResult);
            SitmapWindow1.Owner = this;
            SitmapWindow1.ShowDialog();
            Thread.Sleep(1000);
            SaveAS(TextResult);
            //}, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
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
            if (B_StartMap.Content.ToString() == "Start")
            {
                GoButton.IsEnabled = false;
                System.Windows.Forms.Application.DoEvents();
                isStop = false;
                B_StartMap.IsEnabled = true;
                B_StartMap.Content = "Stop";
                AllItems.Clear();
                Length = T_Sitmap.Text.Length;
                Sitmap = T_Sitmap.Text;
                document = (mshtml.HTMLDocument)webBrowser1.Document;
                S_SearchString = SearchString.Text;
                //thread = new Thread(SiteMapBuilder);
                B_StartMap.IsEnabled = false;
                GoButton.Content = "Stop";
                SiteMapBuilder();
                //thread.IsBackground = true;
                //thread.ApartmentState = ApartmentState.STA;
                //thread.SetApartmentState(ApartmentState.STA);
                //thread.Start();
                //SiteMapBuilder();
            }
            else
            {
                isStop = true;
                B_StartMap.Content = "Stopping..";
                B_StartMap.IsEnabled = false;
            }
        }

        private void webBrowser1_LoadCompleted(object sender, NavigationEventArgs e)
        {
            IsLoaded = true;
            //ControlWindow1.updateGUI(((mshtml.HTMLDocument)webBrowser1.Document).url);
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
    }
}