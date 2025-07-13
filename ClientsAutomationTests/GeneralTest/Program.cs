using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Automation;
using System.Runtime.InteropServices;
using System.Security;
using System.Threading;
using System.Windows;
using System.Windows.Forms;
using System.Drawing;
using System.Diagnostics;
using OpenQA.Selenium;
using AutomationLib;
//using EurograndClientEn;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using com.who.tests.clients;
//using PrestigeClientEn;
//using WilliamhillClientEn;
//using RubyBingoEn;
using System.IO;
using Spring.Context;

namespace GeneralTest
{
    class Program : Automation_Lib
    {
        Random rnd = new Random();
        AutomationElement mainWindow;
        private IWebDriver _driver;
        private IApplicationContext ctx;
        private WebSelenium webSelenium;

        static void Main(string[] args)
        {
            Program p = new Program();
            //p.Test1();
            if (Properties.Settings.Default.Debug)
            {
                p.Test();
                //p.Test1();
                //p.ReadDeltaMousePosision();
            }
            else
            {
                p.euroGrandRegWin();
            }
        }

        private void Test()
        {
            //Condition propCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "PTIODEVICE");
            //AutomationElementCollection MainWindows = _rootElement.FindAll(TreeScope.Children, propCondition);
            //foreach (AutomationElement Window in MainWindows)
            //{
            //    if (Window.Current.Name == "")
            //    {

            //    }
            //}
            InitDebug(typeof(Program));
            ctx = Commons.InitSpring("Nova21DeClientContext.xml");
            webSelenium = (WebSelenium)ctx.GetObject(typeof(WebSelenium).Name);
            _driver = webSelenium.Driver;
            _driver.Quit();

            DepositPage depositPage = (DepositPage)ctx.GetObject(typeof(DepositPage).Name);
            depositPage.Deposit();
            Thread.Sleep(5000);
            //depositPage.CloseApprovePopup();
            //depositPage.CloseBonusPopup();
            //Assert that the current bulance is £100.00
            Assert.AreEqual("€100.00", depositPage.ReadCurrentBalance(), "Deposit fail");

            //MainWebPage mainWebPage = (MainWebPage)ctx.GetObject(typeof(MainWebPage).Name);//,new object[] { webSelenium }
            //DownloadPage downloadPage = mainWebPage.ClickOnDownload(By.Name("DownloadHP"));// By.PartialLinkText("Download")
            //LanguagePage languagePage = downloadPage.RunDownload();
            //LicensePage licensePage = languagePage.clickNextPage();
            //FinishPage finishPage = licensePage.clickNextPage();
            ////GameModePage gameModePage = finishPage.DoneClick();
            //GameModePage gameModePage = (GameModePage)ctx.GetObject(typeof(GameModePage).Name);
            //JoinNowPage joinNowPage = gameModePage.RealModeClick();
            //RegistrationPage registrationPage = joinNowPage.clickNextPage();
            //registrationPage.RegisterDataFill();
            //registrationPage.RegisterDataFillNextPage();
            //CongratulationsPage congratulationsPage = registrationPage.RegisterDataFillLastPage();
            //PopupMsgPage popupMsgPage = congratulationsPage.LoginClick();
            //CashierPage cashierPage = popupMsgPage.clickCloseMsg();
            //cashierPage.ClickOnCashier();
            //cashierPage.EnterDetails();

            //RegistrationEuroPage registrationPageEurogrand = (RegistrationEuroPage)ctx.GetObject(typeof(RegistrationEuroPage).Name);
            //string paswordFilePath = "/Clients/EuroPasswordFiles/PasswordEuro.txt";
            //CongratulationsEuroPage congratulationsEuroPage = (CongratulationsEuroPage)ctx.GetObject(typeof(CongratulationsEuroPage).Name);
            //    //registrationPageEurogrand.RegisterDataFill(paswordFilePath);
            //PopupMsgPage popupMsgPage = congratulationsEuroPage.LoginClick(paswordFilePath);
            //CashierPage cashierPage = (CashierPage)ctx.GetObject(typeof(CashierPage).Name);
            //    //popupMsgPage.clickCloseMsg();
            //cashierPage.EnterDetails();
            //Thread.Sleep(120000);
            //DepositPage depositPage = cashierPage.CloseSuccessRegisterPopup();
            //Console.WriteLine(GenerateTimePrint() + "click CloseSuccessRegisterPopup");
            //depositPage.Deposit();
            //Console.WriteLine(GenerateTimePrint() + "Deposit");
            //DepositPage depositPage = (DepositPage)ctx.GetObject(typeof(DepositPage).Name);
            //try
            //{
            //    depositPage.CloseApprovePopup();
            //    Console.WriteLine(GenerateTimePrint() + "click CloseApprovePopup");
            //}
            //catch (Exception)
            //{
            //    //SendKeys.SendWait("{ENTER}");
            //    //Console.WriteLine(GenerateTimePrint() + "click ENTER");
            //    //Thread.Sleep(2000);
            //}
            ////Assert that the current bulance is 100.00
            //string currentBalance = depositPage.ReadCurrentBalance();
            ////Assert.AreEqual("", currentBalance.Substring(0, 1), "currency error");
            //decimal currentBalanceInt = Convert.ToDecimal(currentBalance.Substring(1));
            //Console.WriteLine(GenerateTimePrint() + "Current Balance" + currentBalance);
            //Assert.AreEqual("£100.00", currentBalance, "Deposit fail");
        }

        private void ReadDeltaMousePosision()
        {
            InitDebug(typeof(Program));
            
            //Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "");
            //Condition controlTypeCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "PTIODEVICE");
            //AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            //mainWindow = _rootElement.FindFirst(TreeScope.Element | TreeScope.Children, controlCondition);
            //mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            //Condition controlNameCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "pane");
            //mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            PropertyCondition controlTypeCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "PTIODEVICE");
            PropertyCondition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "about:blank");

            //AutomationElement mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            //Rect rect = mainWindow.Current.BoundingRectangle;
            AutomationElementCollection Controls = AutomationLib.Automation_Lib._rootElement.FindAll(TreeScope.Children, controlTypeCondition);//TreeScope.Element | TreeScope.Descendants |
            AutomationElement findControl = null;
            foreach (AutomationElement Control in Controls)
            {
                //AutomationElementCollection Controls1 = Control.FindAll(TreeScope.Element |  TreeScope.Descendants |  TreeScope.Children , controlNameCondition);
                if (Control.Current.Name == "")
                {
                    findControl = Control;
                    break;//415, 287
                }
            }
            //Condition controlCondition = new PropertyCondition(AutomationElement.NameProperty, "about:blank");
            //AutomationElement mainWindow = waitforWindowNameClass("", controlCondition, 30, true);
            Rect rect = findControl.Current.BoundingRectangle;
            System.Drawing.Point p = Cursor.Position;
            Trace.WriteLine((p.X - rect.Left) + ", " + (p.Y - rect.Top));
            Console.WriteLine((p.X - rect.Left) + " X-Y " + (p.Y - rect.Top));
            int x = Convert.ToInt32(rect.Left) + 393;
            int y = Convert.ToInt32(rect.Top) + 423;
            System.Drawing.PointConverter pc = new System.Drawing.PointConverter();
            System.Drawing.Point pt = (System.Drawing.Point)pc.ConvertFromString(x+", "+y);
            //Cursor.Position = pt;
        }

        private void Test1()
        {
            DirectoryInfo dirinfo = new DirectoryInfo(@"C:\SVN\BAU_Automation_Tests\ClientsAutomationTests\TestBuild\");
            DirectoryInfo[] allDirectorys = dirinfo.GetDirectories();
            Array.Sort(allDirectorys, new clsCompareDirInfo());
            //For Each fl As FileInfo In allFiles
            DirectoryInfo LastDir = allDirectorys[allDirectorys.Length - 1];
            string DirPath = LastDir.FullName + "/Out/";
            LastDir = new DirectoryInfo(DirPath);
            FileInfo[] allFiles = LastDir.GetFiles("*.png");
            string[] AttachFile = new string[allFiles.Length];
            for (int i = 0; i < allFiles.Length; i++)
            {
                AttachFile[i] = allFiles[i].FullName;
                Console.WriteLine(AttachFile[i]);
                Trace.Write(AttachFile[i]);
            }
            //Trace.Write(AttachFile);
            Console.ReadKey();
            //Array.Sort(allFiles, new clsCompareFileInfo());
            //For Each fl As FileInfo In allFiles
            //FileInfo LastFile = allFiles[allFiles.Length - 1];
            //string AttachFile = LastFile.FullName;
            //Attacments = new string[] { AttachFile };
        }

        private void euroGrandRegWinNoTray()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Create Account");
            AutomationElement MainWindow = waitforWindowNameClass("EuroGrand Casino", controlNameCondition, 30,true);
            setforgrandwindow(MainWindow);
            //Thread.Sleep(1000);
            Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection editControls = MainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            WriteText(editControls[0], "First Name");
            WriteText(editControls[1], "Last Name");
            WriteText(editControls[2], "test@playtech.com");
            WriteText(editControls[3], "test@playtech.com");
            WriteText(editControls[4], "Addr");
            WriteText(editControls[5], "city");
            WriteText(editControls[6], "1234");//postal code
            WriteText(editControls[7], "1234567");//mobile number
            WriteText(editControls[8], "ma" + Convert.ToString(rnd.Next(1, 1000)));//user name
            WriteText(editControls[9], "123456");//password
            WriteText(editControls[10], "123456");//password
            Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection comboControls = MainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            SelectListItem(comboControls[3], "United Kingdom");
            SelectListItem(comboControls[0], "1");
            SelectListItem(comboControls[1], "1");
            SelectListItem(comboControls[2], "1973");
            Condition checkBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "check box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection checkControls = MainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, checkBoxCondition);
            ClickElement(checkControls[0]);
            Condition nameCondition = new PropertyCondition(AutomationElement.NameProperty, "Create Account");
            AutomationElement buttenControl = MainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, nameCondition);
            Thread.Sleep(200);
            ClickElement(buttenControl);
        }

        private void euroGrandRegWin()
        {
            try
            {
                euroGrandRegWinNoTray();
            }
            catch (Exception e)
            {
                Console.Out.WriteLine("Error " + e.Message);
                Console.Out.WriteLine("StackTrace " + e.StackTrace);
                Console.ReadKey();
            }
            finally
            {

            }
        }

        private void euroGrandWebNoTray()
        {
            Process p = new Process();

        }

    }
}
