using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Windows;

namespace EurograndClientEn
{
    /// <summary>
    /// The Deposit Page
    /// </summary>
    public class DepositPage : Automation_Lib
    {
        AutomationElement mainWindow;

        /// <summary>
        /// Deposit 50 URO
        /// </summary>
        /// <returns></returns>
        public CashierPage Deposit()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "D E P O S I T");
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection editControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            WriteText(editControls[0], "50");
            WriteText(editControls[1], "111");
            AutomationElement textControl = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(textControl);
            return new CashierPage();
        }

        /// <summary>
        /// Popup Your deposit has been approved and will be charged as WH ONLINE. Thank you and good luck!
        /// </summary>
        public void CloseApprovePopup()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Your deposit has been approved and will be charged as WH ONLINE. Thank you and good luck!");
            AutomationElement mainWindow2 = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            Rect rect = mainWindow2.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + 238;
            int y = Convert.ToInt32(rect.Top) + 290;
            MouseClick(x, y);
        }

        /// <summary>
        /// Popup Your deposit has been approved and will be charged as WH ONLINE. Thank you and good luck!
        /// </summary>
        public void CloseBonusPopup()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Click here");
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "PTIODEVICE");
            //AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            AutomationElement mainWindow = null;
            AutomationElementCollection mainWindows = _rootElement.FindAll(TreeScope.Children, controlTypeCondition);
            int i = 0;
            foreach (AutomationElement window in mainWindows)
            {
                AutomationElement Control = window.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
                if (Control == null)
                {
                    Thread.Sleep(1000);
                    i++;
                    if (i > 30)
                    {
                        break;
                    }
                }
                else
                {
                    mainWindow = window;
                    break;
                }
                     
            }
            if (mainWindow != null)
            {
                setforgrandwindow(mainWindow);
                setforgrandwindow(mainWindow);
                Rect rect = mainWindow.Current.BoundingRectangle;
                int x = Convert.ToInt32(rect.Left) + 290;
                int y = Convert.ToInt32(rect.Top) + 289;
                MouseClick(x, y);
            }

            //for (int i = 0; i < 30; i++)
            //{
                //mainWindow = _rootElement.FindFirst(TreeScope.Element | TreeScope.Children, controlCondition);
                //if (mainWindow != null)
                //{
                //    setforgrandwindow(mainWindow);
                //    Rect rect = mainWindow.Current.BoundingRectangle;
                //    int x = Convert.ToInt32(rect.Left) + 290;
                //    int y = Convert.ToInt32(rect.Top) + 289;
                //    MouseClick(x, y);
                //    //break;
                //}
                //else
                //{
                //    Thread.Sleep(1000);
                //}
            //}
        }

        /// <summary>
        /// Read Current Balance
        /// </summary>
        public string ReadCurrentBalance()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Current Balance:");
            //Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit");
            //AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            AutomationElement NextSiblingControl = TreeWalker.ControlViewWalker.GetNextSibling(Control);
            return NextSiblingControl.Current.Name;
        }

    }
}
