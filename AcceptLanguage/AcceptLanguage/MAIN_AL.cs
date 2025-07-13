using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Cache;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using BrowserTargeting;
using Microsoft.VisualStudio.TestTools.UITesting;
using Microsoft.Win32;

//using TestProjectBT;
using WH_MAIN_Service;

//http://blogs.microsoft.co.il/blogs/shair/archive/2010/07/15/running-codedui-test-from-another-application.aspx
namespace AcceptLanguage
{
    public partial class MAIN_AL : Form
    {
        TaskScheduler context;
        string[] args;
        AutomationEntities1 BRAND_DB_Ent;
        Common _Common;
        List<HttpWebRequest> RequestList;
        List<string> GlobRespose;
        List<string> URLs;
        List<string> AcceptLanguages;
        List<decimal> Languages_ID;
        bool start;
        string status;
        bool RunAll;
        int error_index = -1;
        Common.Status[] stat;
        bool totalPass = true;
        string Selecte_BRAND_LANGUAGE;
        decimal selectedBrand_ID;
        AutomationDataSet.BRANDsRow RunBrand;
        bool AutoStart = false;

        public MAIN_AL()
        {
            InitializeComponent();
            start = false;
            context = TaskScheduler.FromCurrentSynchronizationContext();
        }

        private void Form_Load(object sender, System.EventArgs e)
        {
            //this.bRANDs_NamesTableAdapter.Fill(this.automationDataSet.BRANDs_Names, automationDataSet.BRANDs);
            //LaunchTest(@"http://www.joylandcasino.com", @"de-DE");
            Bstop.Text = "Start";
            checkAll.Checked = false;
            BransList.Enabled = true;
            RunAll = false;
            string error;
            //BRAND_DB_Ent.Connection.State
            bool Iserror = true;
            while (Iserror)
            {
                try
                {
                    _Common = new Common(out BRAND_DB_Ent, out error);
                    toolStripStatusLabel1.Text = error;
                    // TODO: This line of code loads data into the 'automationDataSet.BRANDs' table. You can move, or remove it, as needed.
                    this.bRANDsTableAdapter.Fill(this.automationDataSet.BRANDs);
                    BransList.DataSource = this.automationDataSet.BRANDs;//BRAND_DB_Ent.BRAND;
                    Iserror = false;
                }
                catch (Exception)
                {
                    Thread.Sleep(10000);
                }
            }
            BransList.DisplayMember = "Brand_Name";
            toolStripStatusLabel2.Text = "Idle";
            args = Environment.GetCommandLineArgs();
            if (args.Length != 1)
            {
                checkAll.Checked = true;
                Bstop_Click(null, null);
                AutoStart = true;
                //Application.Exit();
            }
        }

        public string LaunchTest(string SiteName1, string LangSymbol1)
        {
            string AllProc = null;
            foreach (var Proc in Process.GetProcesses())
            {
                AllProc += Proc.ProcessName + "| ";
                if (Proc.ProcessName == "iexplore")
                {
                    try
                    {
                        Proc.Kill();
                    }
                    catch (Exception)
                    {
                    }
                }
            }
            Playback.Initialize();
            CodedUITestBT BT = new CodedUITestBT();
            BT.UIMap.BT_Test3Params.UIBlankPageWindowsInteWindowUrl1 = SiteName1;
            Registry.CurrentUser.OpenSubKey(@"Software\Microsoft\Internet Explorer\International", true).SetValue("AcceptLanguage", LangSymbol1);
            bool error = true;
            for (int i = 0; i < 3; i++)
            {
                try
                {
                    //Thread.Sleep(1000);
                    BT.CodedUITestBT1();
                    error = false;
                    break;
                }
                catch (Exception)
                {
                }
            }
            Playback.Cleanup();
            //LandingPage.Text =
            //if (Clipboard.GetDataObject().GetDataPresent(DataFormats.Text))
            //    textBox1.Text = Clipboard.GetDataObject().GetData(DataFormats.Text).ToString();
            //else
            //    textBox1.Text = "The clipboad does not contain any text";
            //string clipbordText = Clipboard.GetText(TextDataFormat.Text);
            //object o = Clipboard.GetDataObject();
            //string clipbordText = "";
            //Task taskA = Task.Factory.StartNew(() =>
            //{
            //    clipbordText = Clipboard.GetText();
            //}, Task.Factory.CancellationToken, TaskCreationOptions.None, context);
            //taskA.Wait();
            string res = BT.UIMap.Res;
            Trace.WriteLine(res);
            //string rev = res.Reverse().ToString();
            string res2 = "";
            if (res != "" & res != null)
            {
                int end = res.LastIndexOf('/');
                if (res.Length < end + 3)
                {
                    res2 = res;
                }
                else
                {
                    res2 = res.Substring(0, end + 3);
                }
            }
            return res2;
        }

        private void MainRun(AutomationDataSet.BRANDsRow selectedBrand)
        {
            URLs = new List<string>();
            AcceptLanguages = new List<string>();
            selectedBrand_ID = selectedBrand.Brand_ID;
            Selecte_BRAND_LANGUAGE = selectedBrand.Brand_Name;
            this.all_Brand_DataTableAdapter.Fill(this.automationDataSet.All_Brand_Data, selectedBrand_ID);
            RequestList = new List<HttpWebRequest>();
            Languages_ID = new List<decimal>();
            WebHeaderCollection WebHeaderCollection1;
            foreach (var Row in this.automationDataSet.All_Brand_Data)
            {
                Languages_ID.Add(Row.Language_ID);
                string Brand_Language_Template = Row.Brand_Language_URL_Template;
                if (Brand_Language_Template.Contains("<LS>"))
                    Brand_Language_Template = Brand_Language_Template.Replace("<LS>", Row.Language_Symbol);
                HttpWebRequest HttpWebRequest1 = (HttpWebRequest)WebRequest.CreateDefault(new Uri(selectedBrand.Brand_Main_URL));//Create(selectedBrand.Brand_Main_URL);
                HttpWebRequest1.UserAgent = "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)";
                WebHeaderCollection1 = HttpWebRequest1.Headers;
                WebHeaderCollection1.Add("Accept-Language: " + Row.Language_Browser_Accept_Langauge);
                HttpRequestCachePolicy policy = new HttpRequestCachePolicy(HttpRequestCacheLevel.NoCacheNoStore);
                HttpWebRequest.DefaultCachePolicy = policy;
                CookieContainer cookieContainer1 = new CookieContainer();
                HttpWebRequest1.CookieContainer = cookieContainer1;
                RequestList.Add(HttpWebRequest1);
                URLs.Add(Brand_Language_Template);
                AcceptLanguages.Add(Row.Language_Browser_Accept_Langauge);
            }
            GlobRespose = new List<string>();
            string[] MB = { "rubybingo", "21nova", "skykingscasino", "www2", "eurogrand", "williamhillcasino" };
            bool find = false;
            foreach (var item in MB)
            {
                if (item == selectedBrand.Brand_Name.ToLower())
                {
                    find = true;
                }
            }
            if (find)
            {
                HttpWebResponse[] Respose;
                RunAll = false; //Yaniv Added
                error_index = _Common.SendURI(RequestList.ToArray(), RunAll, out Respose, out stat);
                int i = 0;
                foreach (var item in Respose)
                {
                    try
                    {
                        //if (RequestList[i].Headers.GetValues(1)[0].ToString() == "en-GB" & selectedBrand.Brand_Name.ToLower() == "eurogrand")
                        //{
                        //    string Result = LaunchTest(selectedBrand.Brand_Main_URL, RequestList[i].Headers.GetValues(1)[0].ToString());
                        //    GlobRespose.Add(Result);
                        //}
                        //else
                        GlobRespose.Add(item.ResponseUri.AbsoluteUri);
                    }
                    catch (Exception)
                    {
                        GlobRespose.Add(null);
                    }
                    i++;
                }
            }
            else
            {
                stat = Enumerable.Repeat(Common.Status.Pass, AcceptLanguages.Count).ToArray();
                int i = 0;
                foreach (var AL_item in AcceptLanguages)
                {
                    //Thread.Sleep(1000);
                    string Result = LaunchTest(selectedBrand.Brand_Main_URL, AL_item);
                    GlobRespose.Add(Result);
                    i++;
                }
            }
            //GlobRespose = Respose;
            MethodInvoker mi = new MethodInvoker(this.UpdatePanel);
            // Call BeginInvoke on the Form and wait to EndInvoke
            IAsyncResult tag = this.BeginInvoke(mi);
            this.EndInvoke(tag);
            foreach (var item in RequestList)
            {
                item.Abort();
            }
        }

        private void UpdatePanel()
        {
            bool Iserror = true;
            while (Iserror)
            {
                try
                {
                    if (GlobRespose != null)
                    {
                        string ResponseUri = "";
                        bool Pass = true;
                        string msg = null;
                        string ConcatMsg = null;
                        TextResult.Select(0, 0);
                        TextResult.SelectionColor = Color.Black;
                        TextResult.SelectedText = "Starting Brand " + Selecte_BRAND_LANGUAGE + "\r\n\r\n";
                        var BT_Results = from TR in BRAND_DB_Ent.TOOL_RESULT
                                         from BL in BRAND_DB_Ent.BRAND_LANGUAGE
                                         from T in BRAND_DB_Ent.Tool
                                         where T.Tool_Name == "BT"
                                         where T.Tool_ID == TR.Tool_ID
                                         where T.Brand_Language_ID == BL.Brand_Language_ID
                                         where BL.Brand_ID == RunBrand.Brand_ID
                                         select new
                                         {
                                             BL.Language_ID,
                                             T.Brand_Language_ID,
                                             TR.Tool_Result_ID
                                         };
                        //var BT_Results_Arry = BT_Results.ToArray();
                        string result = null;
                        //IQueryable<TOOL_RESULT> TR_Query = from TR in BRAND_DB_Ent.TOOL_RESULT select TR;
                        for (int i = 0; i < stat.Length; i++)
                        {
                            msg = null;
                            result = "Fail";
                            try
                            {
                                ResponseUri = GlobRespose[i];//.ResponseUri.AbsoluteUri;
                                if (ResponseUri.ToLower().Contains(URLs[i].ToString().ToLower()))
                                    result = "Pass";
                                else
                                {
                                    Pass = false;
                                }
                            }
                            catch (Exception ex)
                            {
                                Pass = false;
                                ResponseUri = "";
                            }
                            if (RunAll & (stat[i] == Common.Status.Fail | stat[i] == Common.Status.Pass))
                                msg = "send Accept-Language:" + AcceptLanguages[i] + "\r\nResponse URL:" + ResponseUri + "\r\nExpected URL:" + URLs[i] + "\r\nResult:" + result + "\r\n";
                            else if (!RunAll)
                                msg = "send Accept-Language:" + AcceptLanguages[i] + "\r\nResponse URL:" + ResponseUri + "\r\nExpected URL:" + URLs[i] + "\r\nResult:" + result + "\r\n";
                            if (result == "Pass")
                                TextResult.SelectionColor = Color.Black;
                            else
                                TextResult.SelectionColor = Color.Red;
                            if (msg != null)
                            {
                                TextResult.SelectedText = (String)msg;
                                Thread.Sleep(0);
                                ConcatMsg += msg;
                            }
                            //Tool_Result_ID ware
                            foreach (var Single_Result in BT_Results)
                            {
                                if (Single_Result.Language_ID == Languages_ID[i])
                                {
                                    foreach (var TR in BRAND_DB_Ent.TOOL_RESULT)
                                    {
                                        if (TR.Tool_Result_ID == Single_Result.Tool_Result_ID)
                                        {
                                            TR.Tool_Result_Result = (result == "Pass");
                                            TR.Tool_Result_Description = "Expected:" + URLs[i] + "\r\n --> Response:" + ResponseUri + "\r\n --> Lang:" + AcceptLanguages[i];
                                            if (result == "Pass")
                                            {
                                                TR.Tool_Result_Last_Pass_Date = DateTime.Now;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        IQueryable<BrandsResult> BrandResult = from p in BRAND_DB_Ent.BrandsResult
                                                               where p.Brand_ID == RunBrand.Brand_ID
                                                               select p;
                        foreach (BrandsResult BR in BrandResult)
                        {
                            if (BR.Tool_Name == "BT")
                            {
                                BR.Tool_Result = Pass;
                                BR.Tool_last_Run_Date = DateTime.Now;
                            }
                        }
                        int rowsAffected = BRAND_DB_Ent.SaveChanges(true);
                        String ConcatMsg1 = "\r\nTotal Brand Result: " + (Pass ? "Pass" : "Fail") + "\r\n------------------------------------------------\r\n";
                        totalPass &= Pass;
                        //Regex r = new Regex("\n");
                        //String[] lines = r.Split(ConcatMsg);
                        //String res = ConcatMsg;
                        if (Pass)
                        {
                            TextResult.SelectionColor = Color.Green;
                        }
                        else
                        {
                            TextResult.SelectionColor = Color.Red;
                        }
                        //TextResult.Select(ConcatMsg.Length, 0);
                        TextResult.SelectedText = ConcatMsg1; /*ConcatMsg + "\r\n------------------------------------------------\r\n";*/// + TextResult.Text;
                        Iserror = false;
                    }
                }
                catch (Exception)
                {
                    Thread.Sleep(10000);
                }
            }
        }

        private void checkAll_CheckedChanged(object sender, System.EventArgs e)
        {
            BransList.Enabled = !checkAll.Checked;
            RunAll = checkAll.Checked;
        }

        private void Bstop_Click(object sender, EventArgs e)
        {
            if (start)
            {
                Bstop.Text = "Start";
                start = false;
            }
            else
            {
                Bstop.Text = "Stop";
                start = true;
                TextResult.Text = null;
                List<AutomationDataSet.BRANDsRow> SelectedBrands = new List<AutomationDataSet.BRANDsRow>();
                System.Data.DataRowView DR = (System.Data.DataRowView)BransList.SelectedItem;
                if (!checkAll.Checked)
                    SelectedBrands.Add((AutomationDataSet.BRANDsRow)DR.Row);
                else
                {
                    foreach (System.Data.DataRowView brand in BransList.Items)
                    {
                        SelectedBrands.Add((AutomationDataSet.BRANDsRow)brand.Row);
                    }
                }
                Thread NewThread = new Thread(SendURIsTrade);
                NewThread.Start(SelectedBrands.ToArray());
            }
        }

        private void SendURIsTrade(object Brands)
        {
            totalPass = true;
            MethodInvoker mi = new MethodInvoker(this.StatusUpdat);
            if (LifeTest("http://www.google.com"))
            {
                foreach (var Brand in (AutomationDataSet.BRANDsRow[])Brands)
                {
                    if (start)
                    {
                        bool Iserror = true;
                        while (Iserror)
                        {
                            try
                            {
                                status = "Running Brand " + Brand.Brand_Name;
                                this.BeginInvoke(mi);
                                RunBrand = Brand;
                                MainRun(Brand);
                                Iserror = false;
                            }
                            catch (Exception)
                            {
                                Thread.Sleep(10000);
                            }
                        }
                    }
                }
                status = "Finish All- Total Brand's Result: " + (totalPass ? "Pass" : "Fail");
                if (AutoStart)
                {
                    string[] YanivEmail = new string[] { "Yaniv.Cohen@williamhill.com" };
                    _Common.SendMail(YanivEmail, null, "Browser_Targeting finish running all Brands", "", null);
                }
                this.BeginInvoke(mi);
            }
            else
            {
                status = "Google not answer stop Running";
                this.BeginInvoke(mi);
            }
            MethodInvoker mi1 = new MethodInvoker(this.ButtonUpdat);
            start = false;
            this.BeginInvoke(mi1);
            if (args.Length != 1)
            {
                Application.Exit();
                Process.GetCurrentProcess().Kill();
            }
        }

        private bool LifeTest(string URL)
        {
            HttpWebRequest HttpWebRequest = (HttpWebRequest)WebRequest.CreateDefault(new Uri(URL));//Create(selectedBrand.Brand_Main_URL);
            HttpWebRequest.UserAgent = "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)";
            WebHeaderCollection WHC = HttpWebRequest.Headers;
            WHC.Add("Accept-Language:en");
            HttpRequestCachePolicy policy = new HttpRequestCachePolicy(HttpRequestCacheLevel.NoCacheNoStore);
            HttpWebRequest.DefaultCachePolicy = policy;
            CookieContainer cookieContainer = new CookieContainer();
            HttpWebRequest.CookieContainer = cookieContainer;
            HttpWebRequest.Timeout = 10000;
            try
            {
                HttpWebResponse response = (HttpWebResponse)HttpWebRequest.GetResponse();
                return true;
            }
            catch (Exception ex)
            {
                //Application.Exit();
                return false;
            }
        }

        private void StatusUpdat()
        {
            toolStripStatusLabel2.Text = status;
        }

        private void ButtonUpdat()
        {
            Bstop.Text = start ? "Stop" : "Start";
        }

        private void MAIN_AL_FormClosing(object sender, FormClosingEventArgs e)
        {
            Process.GetCurrentProcess().Kill();
        }

        //private void fillToolStripButton_Click(object sender, EventArgs e)
        //{
        //    try
        //    {
        //        this.bRANDs_NamesTableAdapter.Fill(this.automationDataSet.BRANDs_Names, ((decimal)(System.Convert.ChangeType(brand_IDToolStripTextBox.Text, typeof(decimal)))));
        //    }
        //    catch (System.Exception ex)
        //    {
        //        System.Windows.Forms.MessageBox.Show(ex.Message);
        //    }

        //}

        //private void fillToolStripButton_Click(object sender, EventArgs e)
        //{
        //    try
        //    {
        //        this.all_Brand_DataTableAdapter.Fill(this.automationDataSet.All_Brand_Data, ((decimal)(System.Convert.ChangeType(main_Brand_IDToolStripTextBox.Text, typeof(decimal)))));
        //    }
        //    catch (System.Exception ex)
        //    {
        //        System.Windows.Forms.MessageBox.Show(ex.Message);
        //    }
        //}
    }
}