using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Automation.Peers;
using System.Windows.Automation.Provider;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

//using FileSaveDialogDemo.FilesServiceReference;

namespace CacheCompare
{
    public partial class MainPage : UserControl
    {
        private static StreamWriter SW;
        private static StreamReader SR;
        private static string[] AllDataRead1;
        private static string[] AllDataRead2;
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
        bool isStart = false;
        private SaveFileDialog SaveDialog;

        public MainPage()
        {
            InitializeComponent();
        }

        private void LayoutRoot_Loaded(object sender, RoutedEventArgs e)
        {
            Save_B.IsEnabled = false;
            Context = TaskScheduler.FromCurrentSynchronizationContext();
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
            if (Start_B.Content.ToString().Trim() != "Stop")
            {
                ResultList.Clear();
                FileListOld.Clear();
                FileListNew.Clear();
                ResultGrid.ItemsSource = null;
                //files[0] = SelectTextFile(@"c:\temp\", "Select Old File");
                //files[1] = SelectTextFile(@"c:\temp\", "Select New File");
                if (!isStart)
                {
                    AllDataRead1 = SelectTextFile(@"c:\temp\", out files[0]);
                    if (AllDataRead1 != null)
                    {
                        File1_l.Content = files[0];
                        Start_B.Content = "Second file";
                        File2_l.Content = "";
                        isStart = true;
                    }
                    //ButtonAutomationPeer peer = new ButtonAutomationPeer(button1);
                    //IInvokeProvider ip = (IInvokeProvider)peer;
                    //ip.Invoke();
                }
                else
                {
                    Save_B.IsEnabled = false;
                    AllDataRead2 = SelectTextFile1(@"c:\temp\", out files[1]);
                    if (AllDataRead2 != null)
                    {
                        Start_B.Content = "Stop";
                        stop = false;
                        thread = new Thread(BackgroundThraed);
                        thread.IsBackground = true;
                        thread.Start();
                        isStart = false;
                    }
                }
            }
            else
            {
                stop = true;
                Start_B.IsEnabled = false;
                Start_B.Content = "Stopping";
            }
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
                    //SR = new StreamReader(files[i], Encoding.Unicode);//Encoding.ASCII
                    string[] AllDataRead;
                    if (i == 0)
                    {
                        AllDataRead = AllDataRead1;
                    }
                    else
                    {
                        AllDataRead = AllDataRead2;
                    }
                    //string[] AllDataRead = SR.ReadToEnd().Split(Environment.NewLine.ToCharArray());
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

        private string[] SelectTextFile(string initialDirectory, out string FileName)
        {
            OpenFileDialog dialog = new OpenFileDialog();
            dialog.Filter =
               "csv files (*.csv)|*.csv|All files (*.*)|*.*";
            dialog.InitialDirectory = initialDirectory;
            //dialog..Title = Title;
            string[] AllDataRead = null;
            bool? IsUserClickedOK = true;
            try
            {
                IsUserClickedOK = dialog.ShowDialog();
                if (IsUserClickedOK == true)
                {
                    FileName = dialog.File.Name;
                    System.IO.Stream fileStream = dialog.File.OpenRead();
                    using (System.IO.StreamReader reader = new System.IO.StreamReader(fileStream))
                    {
                        // Read the first line from the file and write it the textbox.
                        AllDataRead = reader.ReadToEnd().Split(Environment.NewLine.ToCharArray());
                    }
                    fileStream.Close();
                }
                else { FileName = null; }
            }
            catch (Exception)
            {
                FileName = dialog.File.Name;
                System.IO.Stream fileStream = dialog.File.OpenRead();
                using (System.IO.StreamReader reader = new System.IO.StreamReader(fileStream))
                {
                    // Read the first line from the file and write it the textbox.
                    AllDataRead = reader.ReadToEnd().Split(Environment.NewLine.ToCharArray());
                }
                fileStream.Close();
            }

            return (IsUserClickedOK == true) ? AllDataRead : null;
        }

        private string[] SelectTextFile1(string initialDirectory, out string FileName)
        {
            OpenFileDialog dialog = new OpenFileDialog();
            dialog.Filter =
               "csv files (*.csv)|*.csv|All files (*.*)|*.*";
            dialog.InitialDirectory = initialDirectory;
            //dialog..Title = Title;
            string[] AllDataRead = null;
            bool? IsUserClickedOK = true;
            try
            {
                IsUserClickedOK = dialog.ShowDialog();
                if (IsUserClickedOK == true)
                {
                    FileName = dialog.File.Name;
                    System.IO.Stream fileStream = dialog.File.OpenRead();
                    using (System.IO.StreamReader reader = new System.IO.StreamReader(fileStream))
                    {
                        // Read the first line from the file and write it the textbox.
                        AllDataRead = reader.ReadToEnd().Split(Environment.NewLine.ToCharArray());
                    }
                    fileStream.Close();
                }
                else { FileName = null; }
            }
            catch (Exception ex)
            {
                FileName = dialog.File.Name;
                System.IO.Stream fileStream = dialog.File.OpenRead();
                using (System.IO.StreamReader reader = new System.IO.StreamReader(fileStream))
                {
                    // Read the first line from the file and write it the textbox.
                    AllDataRead = reader.ReadToEnd().Split(Environment.NewLine.ToCharArray());
                }
                fileStream.Close();
            }

            return (IsUserClickedOK == true) ? AllDataRead : null;
        }

        private bool? SelectSaveTextFile(string initialDirectory, string Title)
        {
            SaveDialog = new SaveFileDialog();
            SaveDialog.Filter =
               "csv files (*.csv)|*.csv|All files (*.*)|*.*";
            //dialog..InitialDirectory = initialDirectory;
            //dialog.Title = Title;
            Nullable<bool> dialogResult = SaveDialog.ShowDialog();
            //return (result == true) ? dialog.SafeFileName : null;
            if (dialogResult == true)
            {
                //try
                //{
                //    FilesServiceReference.FilesClient fileClient
                //        = new FilesClient();
                //    fileClient.GetFileCompleted
                //        += new EventHandler<GetFileCompletedEventArgs>(
                //            fileClient_GetFileCompleted);
                //    fileClient.GetFileAsync();

                //    this.tblError.Text = "Getting file from the server...";
                //}
                //catch (Exception ex)
                //{
                //    this.tblError.Text = "Error calling service: " + ex.Message;
                //}

                //byte[] fileBytes = e.Result as byte[];

                //using (Stream fs = (Stream)SaveDialog.OpenFile())
                //{
                //    fs.Write(fileBytes, 0, fileBytes.Length);
                //    fs.Close();

                //    //this.tblError.Text = "File successfully saved!";
                //}
            }
            return dialogResult;
        }

        private void Save_B_Click(object sender, RoutedEventArgs e)
        {
            bool? dialogResult = SelectSaveTextFile(@"c:\temp\", "Select File To Save");
            if (dialogResult == true)
            {
                using (StreamWriter SW1 = new StreamWriter((Stream)SaveDialog.OpenFile()))
                {//Encoding.ASCII
                    SW1.AutoFlush = true;
                    SW1.WriteLine("Old File Name: " + files[0]);
                    SW1.WriteLine("New File Name: " + files[1]);
                    SW1.WriteLine("Line Number,URL,Cache,Status");
                    foreach (var Line in ResultList)
                    {
                        SW1.WriteLine(Line.Lines + "," + Line.URL + "," + Line.Cache + "," + Line.Status);
                    }
                    SW1.Close();
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

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            Save_B.IsEnabled = false;
            Start_B.Content = "Stop";
            AllDataRead2 = SelectTextFile1(@"c:\temp\", out files[1]);
            stop = false;
            thread = new Thread(BackgroundThraed);
            thread.IsBackground = true;
            thread.Start();
            isStart = false;
        }
    }
}