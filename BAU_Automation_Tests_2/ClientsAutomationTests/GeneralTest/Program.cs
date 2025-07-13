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
using System.Globalization;
using AutoIt;

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
            string generateUserName = GenerateUserName();
            Console.WriteLine(System.Environment.MachineName);
            Program p = new Program();
            p.test4();
            //p.ReadDeltaMousePosision();
            //if (Properties.Settings.Default.Debug)
            //{
            //    //p.Test();
            //    //p.Test1();
            //    p.ReadDeltaMousePosision();
            //}
            //else
            //{
            //    p.euroGrandRegWin();
            //}
        }

        public void test4()
        {
            string a = "£100.00";
            string b = a.Substring(1);
            Double amount = Convert.ToDouble(b);
            string sing = a.Substring(0, 1);
            //Thread.Sleep(5000);
            //SendString("{CTRLDOWN}a{CTRLUP}");
            //SendString("{CTRLDOWN}c{CTRLUP}");
            //string returnHtmlText = AutoItX.ClipGet();
            //string returnHtmlText = Clipboard.GetText(TextDataFormat.UnicodeText);
            //SendString("{CTRLDOWN}v{CTRLUP}");
            string words = System.IO.File.ReadAllText(@"C:\tmp\Deposit.txt");
            string[] lines = words.Split('\t');
            // Display the file contents by using a foreach loop.
            string balance = null;
            string str = "Balance:";
            foreach (string line in lines)
            {
                int last = line.LastIndexOf(str);
                if (last >= 0)
                {
                    int start = last + str.Length;
                    balance = line.Substring(start + 1, line.Length - start - 1).Trim();
                    Console.WriteLine(str + "\t" + line);
                    break;
                }
            }
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "title bar");
            AutomationElement mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 30, false);
            Thread.Sleep(2000);
            for (int i = 0; i < 9; i++)
            {
                SendKeys.SendWait("{Tab}");
                Thread.Sleep(1000);
            }
            SendKeys.SendWait("123456");
        }

        public static string GenerateUserName()
        {
            DateTime dt = DateTime.Now;
            CultureInfo en = new CultureInfo("en-US");
            Thread.CurrentThread.CurrentCulture = en;

            // Creates a DateTime for the local time.
            //DateTime dt = new DateTime(2001, 7, 13, 4, 0, 0);

            // Converts the local DateTime to the UTC time.
            DateTime utcdt = dt.ToUniversalTime();

            // Defines a custom string format to display the DateTime value.
            // zzzz specifies the full time zone offset.
            String format = "yyMMddhhmmss";//MM/dd/yyyy hh:mm:sszzz

            // Converts the local DateTime to a string 
            // using the custom format string and display.
            return dt.ToString(format);
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
            ctx = Commons.InitSpring("EurograndDeClientContext.xml");
            webSelenium = (WebSelenium)ctx.GetObject(typeof(WebSelenium).Name);
            _driver = webSelenium.Driver;
            _driver.Quit();

            RegistrationEuroPage registrationPageEurogrand = (RegistrationEuroPage)ctx.GetObject(typeof(RegistrationEuroPage).Name);
            string userName = "YAN" + GenerateUserName();
            CongratulationsEuroPage congratulationsEuroPage = registrationPageEurogrand.RegisterDataFill(userName);
            PopupMsgPage popupMsgPage = congratulationsEuroPage.LoginClick();
            WriteToPlayersUsersfile(userName + ", " + "EurograndClientDe");
            CashierPage cashierPage = popupMsgPage.clickCloseMsgEuro();
            //CashierPage cashierPage = (CashierPage)ctx.GetObject(typeof(CashierPage).Name);
            cashierPage.EnterDetails();
            Thread.Sleep(120000);
            //try
            //{
            //    cashierPage.CloseApprovePopup();
            //    Console.WriteLine(GenerateTimePrint() + "click CloseApprovePopup");
            //}
            //catch (Exception)
            //{            }
            //DepositPage depositPage = (DepositPage)Commons.ApplicationContext.GetObject(typeof(DepositPage).Name);
            //try
            //{
            DepositPage depositPage = cashierPage.CloseSuccessRegisterPopup();
            Console.WriteLine(GenerateTimePrint() + "click CloseSuccessRegisterPopup");
            //}
            //catch (Exception)
            //{
            //SendKeys.SendWait("{ENTER}");
            //Console.WriteLine(GenerateTimePrint() + "click ENTER");
            //Thread.Sleep(5000);
            //SendKeys.SendWait("{ENTER}");
            //Thread.Sleep(1000);
            //}
            depositPage.Deposit();
            depositPage.confirmDeposit();
            Console.WriteLine(GenerateTimePrint() + "Deposit");
            try
            {
                //depositPage.CloseApprovePopup();
                //Console.WriteLine(GenerateTimePrint() + "click CloseApprovePopup");
            }
            catch (Exception)
            {
                //SendKeys.SendWait("{ENTER}");
                //Console.WriteLine(GenerateTimePrint() + "click ENTER");
                //Thread.Sleep(2000);
            }
            //Assert that the current bulance is €100.00
            Thread.Sleep(15000);
            string currentBalance = depositPage.ReadCurrentBalance();
            //Assert.AreEqual("", currentBalance.Substring(0, 1), "currency error");
            decimal currentBalanceInt = Convert.ToDecimal(currentBalance.Substring(1));
            Console.WriteLine(GenerateTimePrint() + "Current Balance" + currentBalance);
            Assert.AreEqual("£100.00", depositPage.ReadCurrentBalance(), "Deposit fail");
            //DepositPage depositPage = (DepositPage)ctx.GetObject(typeof(DepositPage).Name);
            //depositPage.Deposit();
            //Thread.Sleep(5000);
            //depositPage.CloseApprovePopup();
            //depositPage.CloseBonusPopup();
            //Assert that the current bulance is £100.00
            //Assert.AreEqual("€100.00", depositPage.ReadCurrentBalance(), "Deposit fail");

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
            //string balance = "£100.00";
            //string sub = balance.Substring(1);
            //if (Convert.ToDecimal(balance.Substring(1)) >= 100 )
            //{
            //    string a = "1";
            //}
            //ClearIECache();
            InitDebug(typeof(Program));

            ctx = Commons.InitSpring("EurograndDeClientContext.xml");
            webSelenium = (WebSelenium)ctx.GetObject(typeof(WebSelenium).Name);
            _driver = webSelenium.Driver;
            _driver.Close();
            string userName = "YAN" + GenerateUserName();
            RegistrationEuroPage registrationPageEurogrand = (RegistrationEuroPage)ctx.GetObject(typeof(RegistrationEuroPage).Name);
            CongratulationsEuroPage congratulationsEuroPage = registrationPageEurogrand.RegisterDataFill(userName);
            PopupMsgPage popupMsgPage = congratulationsEuroPage.LoginClick();
            WriteToPlayersUsersfile(userName + ", " + "EurograndClientDe");
            CashierPage cashierPage = popupMsgPage.clickCloseMsgEuro();
            //CashierPage cashierPage = (CashierPage)ctx.GetObject(typeof(CashierPage).Name);
            cashierPage.EnterDetails();
            Thread.Sleep(120000);
            //try
            //{
            //    cashierPage.CloseApprovePopup();
            //    Console.WriteLine(GenerateTimePrint() + "click CloseApprovePopup");
            //}
            //catch (Exception)
            //{            }
            //DepositPage depositPage = (DepositPage)Commons.ApplicationContext.GetObject(typeof(DepositPage).Name);
            //try
            //{
            DepositPage depositPage = cashierPage.CloseSuccessRegisterPopup();
            Console.WriteLine(GenerateTimePrint() + "click CloseSuccessRegisterPopup");
            //}
            //catch (Exception)
            //{
            //SendKeys.SendWait("{ENTER}");
            //Console.WriteLine(GenerateTimePrint() + "click ENTER");
            //Thread.Sleep(5000);
            //SendKeys.SendWait("{ENTER}");
            //Thread.Sleep(1000);
            //}
            depositPage.Deposit();
            depositPage.confirmDeposit();
            Console.WriteLine(GenerateTimePrint() + "Deposit");
            try
            {
                //depositPage.CloseApprovePopup();
                //Console.WriteLine(GenerateTimePrint() + "click CloseApprovePopup");
            }
            catch (Exception)
            {
                //SendKeys.SendWait("{ENTER}");
                //Console.WriteLine(GenerateTimePrint() + "click ENTER");
                //Thread.Sleep(2000);
            }
            //Assert that the current bulance is €100.00
            Thread.Sleep(15000);
            string currentBalance = depositPage.ReadCurrentBalance();
            //Assert.AreEqual("", currentBalance.Substring(0, 1), "currency error");
            decimal currentBalanceInt = Convert.ToDecimal(currentBalance.Substring(1));
            Console.WriteLine(GenerateTimePrint() + "Current Balance" + currentBalance);
            Assert.AreEqual("£100.00", depositPage.ReadCurrentBalance(), "Deposit fail");
            //string userName = "YAN" + GenerateUserName();
            ////registrationPage.RegisterDataFill();
            ////registrationPage.RegisterDataFillNextPage();
            ////CongratulationsPage congratulationsPage = registrationPage.RegisterDataFillLastPage();
            //PopupMsgPage popupMsgPage = registerPage.RegisterDataFill(userName);
            //CashierPage cashierPage = popupMsgPage.clickCloseMsgEuro();
            ////cashierPage.ClickOnCashier();
            //cashierPage.EnterDetails();
            //WriteToPlayersUsersfile(userName + ", " + "WhccClientDn");
            ////cashierPage.CloseApprovePopup();
            ////cashierPage.CloseBonusPopup();
            //DepositPage depositPage = cashierPage.CloseSuccessRegisterPopup();
            //depositPage.Deposit();
            //depositPage.confirmDeposit();
            //Thread.Sleep(30000);
            ////depositPage.CloseApprovePopup();
            ////depositPage.CloseBonusPopup();
            ////Assert that the current bulance is £100.00
            //Assert.AreEqual("£100.00", depositPage.ReadCurrentBalance(), "Deposit fail");
            //RegistrationWhccPage registrationPage = (RegistrationWhccPage)ctx.GetObject(typeof(RegistrationWhccPage).Name);
            //registrationPage.RegisterDataFill("userName1");


            //Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "window");
            //AutomationElement mainWindow = waitforWindowNameClass("Ruby Bingo - Google Chrome", controlCondition, 30, true);
            //Rect rect = mainWindow.Current.BoundingRectangle;
            //int x = Convert.ToInt32(rect.Left) + 609;//609, 88
            //int y = Convert.ToInt32(rect.Top) + 88;
           // MouseClick(x, y);
            //Rect rect = mainWindow.Current.BoundingRectangle;
            //Rect rect = findControl.Current.BoundingRectangle;
            //System.Drawing.Point p = Cursor.Position;
            //Trace.WriteLine((p.X - rect.Left) + ", " + (p.Y - rect.Top));
            //Console.WriteLine((p.X - rect.Left) + " X-Y " + (p.Y - rect.Top));
            //int x = Convert.ToInt32(rect.Left) + 393;
            //int y = Convert.ToInt32(rect.Top) + 423;
            //System.Drawing.PointConverter pc = new System.Drawing.PointConverter();
            //System.Drawing.Point pt = (System.Drawing.Point)pc.ConvertFromString(x+", "+y);
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
