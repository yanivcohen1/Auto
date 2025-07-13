using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Forms;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using CacheTest.Properties;
using CICacheTesting;
using Microsoft.VisualStudio.TestTools.UITesting;
using Microsoft.Win32;

namespace CacheTest
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        string m_filename = null;
        List<string> m_FileWhitoutCache = new List<string>();
        List<string> m_AllFileWhitoutCache = new List<string>();
        TaskScheduler m_Context;
        int m_RunFrq = 10;
        bool m_stop = false;
        string m_URL;
        string m_searchString = "";

        public MainWindow()
        {
            InitializeComponent();
        }

        private void Start_Click(object sender, RoutedEventArgs e)
        {
            Thread thread = null;
            if (B_Start.Content.ToString() == "Start")
            {
                //B_Size.IsEnabled = true;
                m_stop = false;
                m_RunFrq = Convert.ToInt32(Freq_T.Text);
                m_URL = L_FileName.Content.ToString();
                m_searchString = Settings.Default.FindString;
                m_FileWhitoutCache.Clear();
                if (Settings.Default.FileName.Trim() == "")
                    m_filename = SelectTextFile(@"c:\");
                else
                    m_filename = Settings.Default.FileName.Trim();
                if (m_filename != null)
                {
                    L_FileName.Content = m_filename;
                    T_Result.Text = "";
                    thread = new Thread(CacheTest);
                    thread.IsBackground = true;
                    thread.Start();
                    B_Start.Content = "Stop";
                    B_Start.IsEnabled = true;
                }
            }
            else
            {
                try
                {
                    thread.Abort();
                }
                catch (Exception)
                { }
                //B_Size.IsEnabled = true;
                B_Start.Content = "Stopping..";
                B_Start.IsEnabled = false;
                m_stop = true;
            }
        }

        private void CacheTest()
        {
            string[] lines = null;
            //try
            //{
            //Kill_IE();
            lines = File.ReadAllLines(m_filename, Encoding.ASCII);
            CodedUICacheTest IEtest = new CodedUICacheTest();
            int i = 1;
            Playback.Initialize();
            foreach (string URL in lines)
            {
                Task.Factory.StartNew(() =>
                {
                    l_Progress.Content = i + "-OF-" + lines.Length;//Convert.ToString(i);
                }, Task.Factory.CancellationToken, TaskCreationOptions.None, m_Context).Wait();
                string ReturnURL = IEtest.CodedUICacheTest1(URL, m_searchString);
                //string[] AssociateFiles = IEtest.CodedUICacheTest1(Line, new WindowWrapper(this.MainWindowHandel()));
                //AssociateFiles = IEtest.CodedUITestMethod1(Line);
                bool Redirect = false;
                if (ReturnURL.ToLower() != URL.ToLower())
                {
                    Redirect = true;
                }
                Task.Factory.StartNew(() =>
                {
                    T_Result.Text += URL + "," + ReturnURL + "," + Redirect + Environment.NewLine;
                }, Task.Factory.CancellationToken, TaskCreationOptions.None, m_Context).Wait();
                //foreach (var file in AssociateFiles)
                //{
                //    bool find = false;
                //    foreach (string Cache in Settings.Default.CacheDomain)
                //    {
                //        find = find | file.Contains(Cache);
                //    }
                //    if (!find && !m_FileWhitoutCache.Contains(file))
                //    {
                //        if (!EnterOnce)
                //        {
                //            m_FileWhitoutCache.Add(Line);
                //            EnterOnce = true;
                //        }
                //        m_FileWhitoutCache.Add(file);
                //    }
                //}
                //Task.Factory.StartNew(() =>
                //{
                //    T_Result.Text = ArrayToStringGeneric(m_FileWhitoutCache, Environment.NewLine);
                //}, Task.Factory.CancellationToken, TaskCreationOptions.None, m_Context).Wait();
                i++;
                if (m_stop)
                {
                    break;
                }
                Thread.Sleep(m_RunFrq * 1000);
            }
            Playback.Cleanup();
            Task.Factory.StartNew(() =>
            {
                B_Start.Content = "Start";
                B_Start.IsEnabled = true;
            }, Task.Factory.CancellationToken, TaskCreationOptions.None, m_Context).Wait();
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

        private void Kill_IE()
        {
            foreach (var Proc in Process.GetProcesses())
            {
                //AllProc += Proc.ProcessName + "| ";
                if (Proc.ProcessName == "iexplore")
                {
                    try
                    {
                        Proc.Kill();
                    }
                    catch (Exception) { }
                }
            }
        }

        private IntPtr MainWindowHandel()
        {
            //Get FriendlyName from Application Domain
            //string strFriendlyName = AppDomain.CurrentDomain.FriendlyName;
            //Get process collection by the application name without extension (.exe)
            //Process[] pro = Process.GetProcessesByName(
            //    strFriendlyName.Substring(0, strFriendlyName.LastIndexOf('.')));
            //return pro[0].MainWindowHandle;
            return Process.GetCurrentProcess().MainWindowHandle;
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            m_Context = TaskScheduler.FromCurrentSynchronizationContext();
            B_Start.IsEnabled = true;
            Freq_T.Text = Settings.Default.RunFreqMin;
            L_FileName.Content = Settings.Default.URL;
        }

        private void B_Config_Click(object sender, RoutedEventArgs e)
        {
            string ConfigName = Process.GetCurrentProcess().MainModule.FileName + ".config";
            System.Diagnostics.Process.Start(ConfigName);
        }

        private void B_Size_Click(object sender, RoutedEventArgs e)
        {
        }
    }

    public class WindowWrapper : System.Windows.Forms.IWin32Window
    {
        public WindowWrapper(IntPtr handle)
        {
            _hwnd = handle;
        }

        public IntPtr Handle
        {
            get { return _hwnd; }
        }

        private IntPtr _hwnd;
    }
}