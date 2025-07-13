using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Windows;

namespace com.who.tests.clients
{
    /// <summary>
    /// The Deposit Page
    /// </summary>
    public class DepositPage : Automation_Lib
    {
        AutomationElement mainWindow;

        protected System.Drawing.Point ApproveMsgPoints { get; set; }
        protected System.Drawing.Point BonusPoints { get; set; }//
        protected string DepositText { get; set; }
        protected string AmountToDeposit { get; set; }
        protected string CVV2 { get; set; }
        protected string DepositApproved { get; set; }
        protected string CurrentBalance { get; set; }

        /// <summary>
        /// Deposit 50 URO
        /// </summary>
        /// <returns></returns>
        public CashierPage Deposit()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, DepositText);
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection editControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            WriteText(editControls[0], AmountToDeposit);//first name
            WriteText(editControls[1], CVV2);//last name
            //AutomationElement textControl = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            //ClickElement(textControl);
            AutomationElementCollection textControl = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(textControl[textControl.Count-1]);
            return (CashierPage)Commons.ApplicationContext.GetObject(typeof(CashierPage).Name);
        }

        /// <summary>
        /// Deposit 50 URO
        /// </summary>
        /// <returns></returns>
        public CashierPage DepositChrome()
        {
            PropertyCondition nameCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "Chrome_RenderWidgetHostHWND");
            mainWindow = waitforWindowNameClass("PTIODEVICE", nameCondition, 30, false);
            setforgrandwindow(mainWindow);
            System.Windows.Point p = TrayClick(mainWindow);
            MouseClick(Convert.ToInt32(p.X + 20), Convert.ToInt32(p.Y));

            Thread.Sleep(5000);
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString(AmountToDeposit);
            SendString("{Tab}");
            SendString("{Tab}");
            SendString(CVV2);
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{ENTER}");
            return (CashierPage)Commons.ApplicationContext.GetObject(typeof(CashierPage).Name);
        }

        /// <summary>
        /// Popup Your deposit has been approved and will be charged as WH ONLINE. Thank you and good luck!
        /// </summary>
        public void CloseApprovePopup()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, DepositApproved);
            AutomationElement mainWindow2 = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 60, false);
            Rect rect = mainWindow2.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + ApproveMsgPoints.X;
            int y = Convert.ToInt32(rect.Top) + ApproveMsgPoints.Y;
            MouseClick(x, y);
        }

        /// <summary>
        /// Popup Your deposit has been approved and will be charged as WH ONLINE. Thank you and good luck!
        /// </summary>
        public void CloseBonusPopup()
        {
            //Condition controlNameCondition1 = new PropertyCondition(AutomationElement.NameProperty, "Your deposit has been approved and will be charged as WH ONLINE. Thank you and good luck!");
            //AutomationElement mainWindow2 = waitforWindowNameClass("PTIODEVICE", controlNameCondition1, 130, false);
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "");
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "PTIODEVICE");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            for (int i = 0; i < 15; i++)
            {
                mainWindow = RootElement.FindFirst(TreeScope.Element | TreeScope.Children, controlCondition);
                if (mainWindow != null)
                {
                    setforgrandwindow(mainWindow);
                    Rect rect = mainWindow.Current.BoundingRectangle;
                    int x = Convert.ToInt32(rect.Left) + BonusPoints.X;
                    int y = Convert.ToInt32(rect.Top) + BonusPoints.Y;
                    MouseClick(x, y);
                    break;
                }
                else
                {
                    Thread.Sleep(1000);
                }
            }
        }

        /// <summary>
        /// Read Current Balance
        /// </summary>
        public string ReadCurrentBalance()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, CurrentBalance);
            //Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit");
            //AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 100, false);
            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            AutomationElement NextSiblingControl = TreeWalker.ControlViewWalker.GetNextSibling(Control);
            string currentBalance = NextSiblingControl.Current.Name;
            Console.WriteLine(GenerateTimePrint() + "Current Balance: " + currentBalance);
            return currentBalance;
        }

        /// <summary>
        /// Read Current Balance chrome
        /// </summary>
        public string ReadCurrentBalanceChrome()
        {
            PropertyCondition nameCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "Chrome_RenderWidgetHostHWND");
            mainWindow = waitforWindowNameClass("PTIODEVICE", nameCondition, 30, false);
            setforgrandwindow(mainWindow);
            System.Windows.Point p = TrayClick(mainWindow);
            MouseClick(Convert.ToInt32(p.X + 20), Convert.ToInt32(p.Y));
            SendString("{Tab}");
            MouseClick();
            SendString("{ENTER}");
            Thread.Sleep(3000);
            setforgrandwindow(mainWindow);
            Thread.Sleep(2000);
            SendString("{Tab}");
            MouseClick();
            SendString("{ENTER}");
            Thread.Sleep(45000);
            setforgrandwindow(mainWindow);
            Thread.Sleep(7000);
            SendString("{Tab}");
            MouseClick();
            SendString("{ENTER}");
            setforgrandwindow(mainWindow);
            Thread.Sleep(7000);
            SendString("{Tab}");
            MouseClick();
            SendString("{ENTER}");
            Thread.Sleep(5000);
            setforgrandwindow(mainWindow);
            MouseClick(Convert.ToInt32(p.X + 20), Convert.ToInt32(p.Y));
            SendString("{CTRLDOWN}a{CTRLUP}");
            SendString("{CTRLDOWN}c{CTRLUP}");
            Thread.Sleep(1000);
            string clipBord = ClipGet();
            string[] lines = clipBord.Split('\t');
            string balance = null;
            string str = "Balance:";
            foreach (string line in lines)
            {
                int last = line.LastIndexOf(str);
                if (last >= 0)
                {
                    int start = last + str.Length;
                    balance = line.Substring(start, line.Length - start).Trim();
                    Console.WriteLine(str + "\t" + line);
                    break;
                }
            }
            Console.WriteLine(GenerateTimePrint() + "Current Balance: " + balance);
            return balance;
        }

        public void confirmDeposit()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "check box");
            AutomationElement mainWindow2 = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 60, false);
            AutomationElement control = mainWindow2.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(control);//PROCEED chackBox
            Thread.Sleep(1000);
            SendString("{TAB}");
            SendString("{ENTER}");
            //controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "PROCEED");
            //control = mainWindow2.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            //ClickElement(control);//PROCEED button
        }

        public void confirmDepositChrome()
        {
            Thread.Sleep(5000);
            PropertyCondition nameCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "Chrome_RenderWidgetHostHWND");
            mainWindow = waitforWindowNameClass("PTIODEVICE", nameCondition, 30, false);
            setforgrandwindow(mainWindow);
            System.Windows.Point p = TrayClick(mainWindow);
            MouseClick(Convert.ToInt32(p.X + 20), Convert.ToInt32(p.Y));

            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString(" ");
            SendString("{Tab}");
            SendString("{ENTER}");
        }

    }
}
