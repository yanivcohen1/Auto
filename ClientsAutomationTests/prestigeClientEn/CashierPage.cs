using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Windows;
using System;

namespace PrestigeClientEn
{
    public class CashierPage : Automation_Lib
    {
        AutomationElement mainWindow;

        /// <summary>
        /// Click On Cashier
        /// </summary>
        public void ClickOnCashier()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "pane");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            Thread.Sleep(10000);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + 433;
            int y = Convert.ToInt32(rect.Top) + 115;
            MouseClick(x, y);
        }

        /// <summary>
        /// Enter Cashier form Details
        /// </summary>
        public void EnterDetails()
        {
            //Cashier form
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Save details and deposit");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            setforgrandwindow(mainWindow);
            Thread.Sleep(2000);
            SendKeys.SendWait("{ENTER}");
            //SendKey(13);//enter
            Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection editControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            WriteText(editControls[0], "50");//Amount to deposit
            WriteText(editControls[1], "1111111111111111");//Card number
            //WriteText(editControls[2], "First Name");//Card Owner's First Name
            //WriteText(editControls[3], "Last Name");//Card Owner's Last Name
            WriteText(editControls[4], "111");//CVV2
            //WriteText(editControls[5], "Address");//Billing Address
            //WriteText(editControls[6], "City");//City
            //WriteText(editControls[7], "Zip");//Zip/Postal Code
            WriteText(editControls[8], "State");//State
            Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection comboControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            SelectListItem(comboControls[0], "Visa Delta");//Card type
            SelectListItem(comboControls[1], "01");//Expiration Date.Mounth
            SelectListItem(comboControls[2], "2023");//Expiration Date.Year
            SelectListItem(comboControls[3], "United Kingdom");//select country
            AutomationElement control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(control);

            //ClosePopupApprove();
            //CloseSuccessRegister()

        }

        /// <summary>
        /// Popup Your deposit has been approved and will be charged as WH ONLINE. Thank you and good luck!
        /// </summary>
        public void CloseBonusPopup()
        {
            Thread.Sleep(2000);
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
                }else{
                    Thread.Sleep(1000);
                }
            }
        }

        /// <summary>
        /// Popup Your deposit has been approved and will be charged as WH ONLINE. Thank you and good luck!
        /// </summary>
        public void CloseApprovePopup()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Your deposit has been approved and will be charged as WH Online.Thank you and good luck!");
            AutomationElement mainWindow2 = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 200, false);
            Rect rect = mainWindow2.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + 238;
            int y = Convert.ToInt32(rect.Top) + 290;
            MouseClick(x, y);
        }

        /// <summary>
        /// successfully registered message
        /// </summary>
        public DepositPage CloseSuccessRegisterPopup()
        {
            Thread.Sleep(1000);
            //setforgrandwindow(mainWindow);
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "OK");
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 130, false);
            //mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 130, false);
            AutomationElement control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(control);
            return new DepositPage();
        }

    }
}
