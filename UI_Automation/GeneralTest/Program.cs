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
using EurograndClientEn;

namespace EurograndClient
{
    class Program : Automation_Lib
    {
        Random rnd = new Random();
        IWebDriver driver;

        static void Main(string[] args)
        {
            Program p = new Program();
            if (Properties.Settings.Default.Debug)
            {
                p.Test();
            }
            else
            {
                p.euroGrandRegWin();
            }
        }

        private void Test()
        {
            //driver = StartBrowser();
            //DownloadPage downloadPage = new DownloadPage(driver);
            //downloadPage.RunDownload();
            InitDebug(typeof(Program));
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Next");
            AutomationElement mainWindow = waitforWindowNameClass("PTDLMAINWNDCLASS", controlNameCondition, 30, false);
            // AutomationElementCollection MainWindows = m_rootElement.FindAll(TreeScope.Element | TreeScope.Children, windowCondition);
            LicensePage LicensePage = new LicensePage(mainWindow);
            LicensePage.clickNextPage();
        }

        private void Test1()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Create Account");
            AutomationElement MainWindow = waitforWindowNameClass("EuroGrand Casino", controlNameCondition, 30,true);
            setforgrandwindow(MainWindow);
            Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection comboControls = MainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            setforgrandwindow(MainWindow);
            SetValuePattern(comboControls[0], "1");
            setforgrandwindow(MainWindow);
            SetValuePattern(comboControls[1], "1");
            setforgrandwindow(MainWindow);
            SetValuePattern(comboControls[2], "1973");
            setforgrandwindow(MainWindow);
            SetValuePattern(comboControls[3], "United Kingdom");
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
            SetValuePattern(comboControls[3], "United Kingdom");
            SetValuePattern(comboControls[0], "1");
            SetValuePattern(comboControls[1], "1");
            SetValuePattern(comboControls[2], "1973");
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
