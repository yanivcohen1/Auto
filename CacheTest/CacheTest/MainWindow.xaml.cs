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
        bool m_stop = false;
        bool m_IsSize = false;
        long m_ProcessSize = 0;
        string m_FirstLine;

        public MainWindow()
        {
            InitializeComponent();
        }

        private void Start_Click(object sender, RoutedEventArgs e)
        {
            Thread thread = null;
            if (B_Start.Content.ToString() == "Cache")
            {
                B_Size.IsEnabled = false;
                m_stop = false;
                m_FileWhitoutCache.Clear();
                if (Settings.Default.FileName.Trim() == "")
                    m_filename = SelectTextFile(@"c:\");
                else
                    m_filename = Settings.Default.FileName.Trim();
                if (m_filename != null)
                {
                    L_FileName.Content = m_filename;
                    T_Result.Text = "";
                    m_IsSize = false;
                    thread = new Thread(CacheTest);
                    thread.IsBackground = true;
                    thread.Start();
                    B_Start.Content = "Stop";
                    B_Start.IsEnabled = true;
                }
            }
            else
            {
                //try
                //{
                //    thread.Abort();
                //}
                //catch (Exception)
                //{ }
                B_Size.IsEnabled = false;
                B_Start.Content = "Stopping..";
                B_Start.IsEnabled = false;
                m_stop = true;
            }
        }

        private void CacheTest()
        {
            string[] lines = null;
            long BlankPageSizeMB = 0;
            int StartLine = 0;
            //try
            //{
            Kill_IE();
            List<string> linesArry = new List<string>();
            if (m_IsSize)
            {
                linesArry.Add("about:blank");
                StartLine = 1;
            }
            linesArry.AddRange(File.ReadAllLines(m_filename, Encoding.ASCII));
            lines = linesArry.ToArray();
            m_FirstLine = lines[StartLine];
            CodedUICacheTest IEtest = new CodedUICacheTest();
            int i = 1;
            Playback.Initialize();
            foreach (var Line in lines)
            {
                Task.Factory.StartNew(() =>
                {
                    l_Progress.Content = i + " of " + lines.Length;//Convert.ToString(i);
                }, Task.Factory.CancellationToken, TaskCreationOptions.None, m_Context).Wait();
                string[] AssociateFiles = IEtest.CodedUICacheTest1(Line,
                        new WindowWrapper(MainWindowHandel()), out m_ProcessSize);
                //string[] AssociateFiles = IEtest.CodedUICacheTest1(Line, new WindowWrapper(this.MainWindowHandel()));
                //AssociateFiles = IEtest.CodedUITestMethod1(Line);
                if (!m_IsSize)
                {
                    bool EnterOnce = false;
                    bool findCache = false;
                    foreach (var file in AssociateFiles)
                    {
                        bool find = false;
                        foreach (string Cache in Settings.Default.CacheDomain)
                        {
                            find = find | file.Contains(Cache);
                        }
                        if (!find && !m_FileWhitoutCache.Contains(file))
                        {
                            if (!EnterOnce)
                            {
                                m_FileWhitoutCache.Add(Line + ":");
                                EnterOnce = true;
                                findCache = true;
                            }
                            m_FileWhitoutCache.Add(file);
                        }
                    }
                    if (findCache)
                    {
                        m_FileWhitoutCache.Add("");
                    }
                }
                else
                {
                    if (i == 1)
                    {
                        BlankPageSizeMB = m_ProcessSize;
                    }
                    else
                    {
                        m_FileWhitoutCache.Add("URL:" + Line);
                        m_FileWhitoutCache.Add("Page size is: " + (m_ProcessSize - BlankPageSizeMB) + " Mb");
                    }
                }
                Task.Factory.StartNew(() =>
                {
                    T_Result.Text = ArrayToStringGeneric(m_FileWhitoutCache, Environment.NewLine);
                }, Task.Factory.CancellationToken, TaskCreationOptions.None, m_Context).Wait();
                i++;
                if (m_stop)
                {
                    break;
                }
            }
            Playback.Cleanup();
            Task.Factory.StartNew(() =>
            {
                B_Start.Content = "Cache";
                B_Size.Content = "Size";
                B_Start.IsEnabled = true;
                B_Size.IsEnabled = true;
                DateTime DT = DateTime.Now;
                string[] Date = DT.GetDateTimeFormats();
                string Date1 = Date[49].Replace(':', '-');
                string Date2 = Date1.Replace(' ', '_');
                string date3 = Date2.Replace('/', '_');
                string fileNameBuild = @"CacheTest.csv";
                try
                {
                    string Brand = m_FirstLine.Substring(11);
                    fileNameBuild = "CacheTest-" + Brand.Substring(0, Brand.ToLower().LastIndexOf(".com")) +
                        "-" + date3 + ".csv";
                }
                catch (Exception)
                { }
                string fileNameDestination = SaveAsTextFile(fileNameBuild);
                //m_SW.Close();
                if (fileNameDestination != null)
                {
                    //File.Move(m_FileNameSorce, fileNameDestination);
                    StreamWriter m_SW = new StreamWriter(fileNameDestination, false, Encoding.ASCII);
                    //m_SW.AutoFlush = true;
                    m_SW.Write(T_Result.Text);
                    m_SW.Close();
                }
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

        private static string SaveAsTextFile(string FileName)
        {
            Microsoft.Win32.SaveFileDialog dialog = new Microsoft.Win32.SaveFileDialog();
            dialog.FileName = FileName;
            dialog.Filter = "Excel files (*.csv)|*.csv|All files (*.*)|*.*";
            //dialog.InitialDirectory = initialDirectory;
            dialog.Title = "Save CacheTest file";
            bool? IsUserClickedOK = dialog.ShowDialog();
            return (IsUserClickedOK == true) ? dialog.FileName : null;
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
        }

        private void B_Config_Click(object sender, RoutedEventArgs e)
        {
            string ConfigName = Process.GetCurrentProcess().MainModule.FileName + ".config";
            System.Diagnostics.Process.Start(ConfigName);
        }

        private void B_Size_Click(object sender, RoutedEventArgs e)
        {
            Thread thread = null;
            if (B_Size.Content.ToString() == "Size")
            {
                B_Size.IsEnabled = true;
                m_stop = false;
                m_FileWhitoutCache.Clear();
                if (Settings.Default.FileName.Trim() == "")
                    m_filename = SelectTextFile(@"c:\");
                else
                    m_filename = Settings.Default.FileName.Trim();
                if (m_filename != null)
                {
                    L_FileName.Content = m_filename;
                    T_Result.Text = "";
                    m_IsSize = true;
                    thread = new Thread(CacheTest);
                    thread.IsBackground = true;
                    thread.Start();
                    B_Size.Content = "Stop";
                    B_Size.IsEnabled = true;
                    B_Start.IsEnabled = false;
                }
            }
            else
            {
                //try
                //{
                //    thread.Abort();
                //}
                //catch (Exception)
                //{ }
                B_Size.IsEnabled = false;
                B_Size.Content = "Stopping..";
                B_Start.IsEnabled = false;
                m_stop = true;
            }
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