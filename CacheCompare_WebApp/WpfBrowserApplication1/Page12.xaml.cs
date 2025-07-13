using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfBrowserApplication1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private static StreamWriter SW;
        private static StreamReader SR;
        //DataGrid DG1 = new DataGrid();
        //DataGrid DG2 = new DataGrid();
        //DataGrid DGResult = new DataGrid();
        List<CacheFile> FileListOld = new List<CacheFile>();
        List<CacheFile> FileListNew = new List<CacheFile>();
        List<ResultFile> ResultList = new List<ResultFile>();
        //Dictionary<int, string[]> dictionary1 = new Dictionary<int, string[]>();
        //Dictionary<int, string[]> dictionary2 = new Dictionary<int, string[]>();
        //Dictionary<int, string[]> ResultDictionary = new Dictionary<int, string[]>();
        string[] files = new string[2];
        Thread thread = null;
        TaskScheduler Context;
        enum FileColumn { ID, URL, Cache, Status };
        bool stop = false;

        public MainWindow()
        {
            InitializeComponent();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            Save_B.IsEnabled = false;
            Context = TaskScheduler.FromCurrentSynchronizationContext();
            //ResultGrid.ItemsSource = LoadCollectionData();
        }

        private List<Author> LoadCollectionData()
        {
            List<Author> authors = new List<Author>();
            authors.Add(new Author()
            {
                ID = 101,
                Name = "Mahesh Chand",
                BookTitle = "Graphics Programming with GDI+",
                DOB = new DateTime(1975, 2, 23),
                IsMVP = false
            });
            authors.Add(new Author()
            {
                ID = 201,
                Name = "Mike Gold",
                BookTitle = "Programming C#",
                DOB = new DateTime(1982, 4, 12),
                IsMVP = true
            });
            authors.Add(new Author()
            {
                ID = 244,
                Name = "Mathew Cochran",
                BookTitle = "LINQ in Vista",
                DOB = new DateTime(1985, 9, 11),
                IsMVP = true
            });
            return authors;
        }

        private void Start_B_Click(object sender, RoutedEventArgs e)
        {
            if (Start_B.Content.ToString().Trim() == "Start")
            {
                Save_B.IsEnabled = false;
                Start_B.Content = "Stop";
                ResultList.Clear();
                FileListOld.Clear();
                FileListNew.Clear();
                files[0] = SelectTextFile(@"c:\temp\", "Select Old File");
                files[1] = SelectTextFile(@"c:\temp\", "Select New File");
                stop = false;
                thread = new Thread(BackgroundThraed);
                thread.IsBackground = true;
                thread.Start();
            }
            else
            {
                stop = true;
                Start_B.IsEnabled = false;
                Start_B.Content = "Stopping";
            }
            //BackgroundThraed();
        }

        private void BackgroundThraed()
        {
            if (files[0] != null && files[1] != null)
            {
                Task.Factory.StartNew(() =>
                {
                    File1_l.Content = files[0];
                    File2_l.Content = files[1];
                }, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
                for (int i = 0; i < 2; i++)
                {
                    SR = new StreamReader(files[i], Encoding.ASCII);
                    string[] AllDataRead = SR.ReadToEnd().Split(Environment.NewLine.ToCharArray());
                    foreach (var Line in AllDataRead)
                    {
                        if (Line.Trim() != "")
                        {
                            string[] LineColumn = Line.Split(',');
                            if (i == 0)
                            {
                                FileListOld.Add(LoadColumnData(i, LineColumn[0], LineColumn[1], LineColumn[2]));
                            }
                            else
                            {
                                FileListNew.Add(LoadColumnData(i, LineColumn[0], LineColumn[1], LineColumn[2]));
                            }
                        }
                    }
                }

                List<string> IDNew = ListNewIndex(FileColumn.ID);
                List<string> URLNew = ListNewIndex(FileColumn.URL);
                List<string> CacheNew = ListNewIndex(FileColumn.Cache);
                List<string> StatusNew = ListNewIndex(FileColumn.Status);
                List<int> NewIndexs = new List<int>();
                string FileLength = FileListOld.Count.ToString();
                int ii = 0;
                foreach (var LineOld in FileListOld)
                {
                    Task.Factory.StartNew(() =>
                    {
                        Status_l.Content = ii.ToString() + " Of " + FileLength;
                    }, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
                    int iii = 0;
                    foreach (var NewLineURL in URLNew)
                    {
                        if (NewLineURL == LineOld.URL)
                        {
                            NewIndexs.Add(iii);
                        }
                        iii++;
                    }
                    bool findCache = false;
                    bool SameStatus = false;
                    string Status = "";
                    if (NewIndexs.Count == 0)
                    {
                        //SW.WriteLine(Line);
                        ResultList.Add(new ResultFile() { Lines = ii, URL = LineOld.URL, Cache = LineOld.Cache, Status = "Not Find URL" });
                    }
                    else
                    {
                        foreach (var NewIndex in NewIndexs)
                        {
                            if (CacheNew[NewIndex] == LineOld.Cache)
                            {
                                findCache = true;
                                Status = StatusNew[NewIndex];
                                if (StatusNew[NewIndex] == LineOld.Status)
                                {
                                    SameStatus = true;
                                }
                            }
                        }
                    }
                    if (!findCache)
                    {
                        ResultList.Add(new ResultFile() { Lines = ii, URL = LineOld.URL, Cache = LineOld.Cache, Status = "Not Find Cache" });
                    }
                    else if (!SameStatus)
                    {
                        ResultList.Add(new ResultFile() { Lines = ii, URL = LineOld.URL, Cache = LineOld.Cache, Status = "Old Status:" + LineOld.Status + " New Status:" + Status });
                    }
                    if (stop)
                    {
                        break;
                    }
                    ii++;
                }
                Task.Factory.StartNew(() =>
                {
                    ResultGrid.ItemsSource = ResultList;
                }, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
            }
            Task.Factory.StartNew(() =>
            {
                Start_B.Content = "Start";
                Start_B.IsEnabled = true;
                if (ResultList.Count != 0)
                {
                    Save_B.IsEnabled = true;
                }
            }, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
        }

        private List<string> ListNewIndex(FileColumn Column)
        {
            List<string> columns = new List<string>();
            foreach (var Line in FileListNew)
            {
                switch (Column)
                {
                    case FileColumn.ID:
                        columns.Add(Convert.ToString(Line.ID));
                        break;
                    case FileColumn.URL:
                        columns.Add(Line.URL);
                        break;
                    case FileColumn.Cache:
                        columns.Add(Line.Cache);
                        break;
                    case FileColumn.Status:
                        columns.Add(Line.Status);
                        break;
                    default:
                        break;
                }
            }
            return columns;
        }

        private CacheFile LoadColumnData(int _ID, string _URL, string _Cache, string _Status)
        {
            return new CacheFile()
                    {
                        ID = _ID,
                        URL = _URL,
                        Cache = _Cache,
                        Status = _Status,
                    };
        }

        private string SelectTextFile(string initialDirectory, string Title)
        {
            Microsoft.Win32.OpenFileDialog dialog = new Microsoft.Win32.OpenFileDialog();
            dialog.Filter =
               "csv files (*.csv)|*.csv|All files (*.*)|*.*";
            dialog.InitialDirectory = initialDirectory;
            dialog.Title = Title;
            Nullable<bool> result = dialog.ShowDialog();
            return (result == true) ? dialog.FileName : null;
        }

        private string SelectSaveTextFile(string initialDirectory, string Title)
        {
            Microsoft.Win32.SaveFileDialog dialog = new Microsoft.Win32.SaveFileDialog();
            dialog.Filter =
               "csv files (*.csv)|*.csv|All files (*.*)|*.*";
            dialog.InitialDirectory = initialDirectory;
            dialog.Title = Title;
            Nullable<bool> result = dialog.ShowDialog();
            return (result == true) ? dialog.FileName : null;
        }

        private void Save_B_Click(object sender, RoutedEventArgs e)
        {
            string Resultfile = SelectSaveTextFile(@"c:\temp\", "Select File To Save");
            if (Resultfile != null)
            {
                SW = new StreamWriter(Resultfile, false, Encoding.ASCII);
                SW.AutoFlush = true;
                SW.WriteLine("Old File Name: " + files[0]);
                SW.WriteLine("New File Name: " + files[1]);
                SW.WriteLine("Line Number,URL,Cache,Status");
                foreach (var Line in ResultList)
                {
                    SW.WriteLine(Line.Lines + "," + Line.URL + "," + Line.Cache + "," + Line.Status);
                }
                //SW.Write(ArrayToStringGeneric(ResultList.ToArray(), Environment.NewLine));
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

        public class CacheFile
        {
            public int ID { get; set; }

            public string URL { get; set; }

            public string Cache { get; set; }

            public string Status { get; set; }
        }

        public class ResultFile
        {
            public int Lines { get; set; }

            public string URL { get; set; }

            public string Cache { get; set; }

            public string Status { get; set; }
        }

        public class Author
        {
            public int ID { get; set; }

            public string Name { get; set; }

            public DateTime DOB { get; set; }

            public string BookTitle { get; set; }

            public bool IsMVP { get; set; }
        }
    }
}