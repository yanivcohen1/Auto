using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Windows;

namespace Nova21ClientEn
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
            WriteText(editControls[0], "50");//first name
            WriteText(editControls[1], "111");//last name
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
            AutomationElement mainWindow2 = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 130, false);
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
            //Condition controlNameCondition1 = new PropertyCondition(AutomationElement.NameProperty, "Your deposit has been approved and will be charged as WH ONLINE. Thank you and good luck!");
            //AutomationElement mainWindow2 = waitforWindowNameClass("PTIODEVICE", controlNameCondition1, 130, false);
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "");
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "PTIODEVICE");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            for (int i = 0; i < 15; i++)
            {
                mainWindow = _rootElement.FindFirst(TreeScope.Element | TreeScope.Children, controlCondition);
                if (mainWindow != null)
                {
                    setforgrandwindow(mainWindow);
                    Rect rect = mainWindow.Current.BoundingRectangle;
                    int x = Convert.ToInt32(rect.Left) + 290;
                    int y = Convert.ToInt32(rect.Top) + 289;
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
