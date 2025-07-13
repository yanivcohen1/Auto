using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Security;
using System.Security.Permissions;
using System.Text;
using System.Windows.Forms;
using Microsoft.VisualStudio.TestTools.UITesting;
using Microsoft.Win32;

namespace BrowserTargeting
{
    public partial class BT_Form : Form
    {
        public BT_Form()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            SiteName.Text = @"http://www.joylandcasino.com";
            //SiteName.Text = @"http://www.joylandcasino.com";
            LangSymbol.Text = @"de-DE";
        }

        private void B_Send_Click(object sender, EventArgs e)
        {
            LandingPage.Text = "";
            LandingPage.Text = LaunchTest(SiteName.Text, LangSymbol.Text);
        }

        //[ZoneIdentityPermission(SecurityAction.Demand, Zone = SecurityZone.Intranet)]
        public string LaunchTest(string SiteName1, string LangSymbol1)
        {
            string AllProc = null;
            foreach (var Proc in Process.GetProcesses())
            {
                AllProc += Proc.ProcessName + "| ";
                if (Proc.ProcessName == "iexplore")
                {
                    Proc.Kill();
                }
            }
            Playback.Initialize();
            BT_TestParams BT_Parm = new BT_TestParams();
            CodedUITestBT BT = new CodedUITestBT();
            BT_Parm.UIBlankPageWindowsInteWindowUrl1 = SiteName1;
            Registry.CurrentUser.OpenSubKey(@"Software\Microsoft\Internet Explorer\International", true).SetValue("AcceptLanguage", LangSymbol1);
            BT.CodedUITestBT1();
            Playback.Cleanup();
            //LandingPage.Text =
            return Clipboard.GetText();
        }
    }
}