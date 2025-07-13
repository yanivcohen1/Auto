using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Windows;
using System;

namespace com.who.tests.clients
{
    public class CashierPage : Automation_Lib
    {
        AutomationElement mainWindow;

        protected System.Drawing.Point CashierPoints { get; set; }
        protected System.Drawing.Point BonusPoints { get; set; }
        protected System.Drawing.Point ApproveMsgPoints { get; set; }
        protected string SaveDetails { get; set; }
        protected string AmountToDeposit { get; set; }
        protected string CardNumber { get; set; }
        protected string CVV2 { get; set; }
        protected string State { get; set; }
        protected string CardType { get; set; }
        protected string ExpirationMounth { get; set; }
        protected string ExpirationYear { get; set; }
        protected string DepositApproved { get; set; }
        protected string SuccessRegister { get; set; }
        protected string SelectCountry { get; set; }

        /// <summary>
        /// Click On Cashier
        /// </summary>
        public void ClickOnCashier()
        {
            Cursor.Position = new System.Drawing.Point(0, 0);
            Thread.Sleep(5000);
            Condition controlNameCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "pane");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + CashierPoints.X;
            int y = Convert.ToInt32(rect.Top) + CashierPoints.Y;
            MouseClick(x, y);
        }

        /// <summary>
        /// Enter Cashier form Details
        /// </summary>
        public void EnterDetails()
        {
            //Cashier form
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, SaveDetails);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            setforgrandwindow(mainWindow);
            Thread.Sleep(2000);
            SendKeys.SendWait("{ENTER}");
            //SendKey(13);//enter
            Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection editControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            WriteText(editControls[0], AmountToDeposit);//Amount to deposit
            WriteText(editControls[1], CardNumber);//Card number
            //WriteText(editControls[2], "First Name");//Card Owner's First Name
            //WriteText(editControls[3], "Last Name");//Card Owner's Last Name
            WriteText(editControls[4], CVV2);//CVV2
            //WriteText(editControls[5], "Address");//Billing Address
            //WriteText(editControls[6], "City");//City
            //WriteText(editControls[7], "Zip");//Zip/Postal Code
            WriteText(editControls[8], State);//State
            Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection comboControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            SelectListItem(comboControls[0], CardType);//Card type
            SelectListItem(comboControls[1], ExpirationMounth);//Expiration Date.Mounth
            SelectListItem(comboControls[2], ExpirationYear);//Expiration Date.Year
            SelectListItem(comboControls[3], SelectCountry);//select country
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
                    int x = Convert.ToInt32(rect.Left) + BonusPoints.X;
                    int y = Convert.ToInt32(rect.Top) + BonusPoints.Y;
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
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, DepositApproved);
            AutomationElement mainWindow2 = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 200, false);
            Rect rect = mainWindow2.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + ApproveMsgPoints.X;
            int y = Convert.ToInt32(rect.Top) + ApproveMsgPoints.Y;
            MouseClick(x, y);
        }

        /// <summary>
        /// successfully registered message
        /// </summary>
        public DepositPage CloseSuccessRegisterPopup()
        {
            Thread.Sleep(1000);
            //setforgrandwindow(mainWindow);
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, SuccessRegister);
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 130, false);
            //mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 130, false);
            AutomationElement control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(control);
            return (DepositPage)Commons.ApplicationContext.GetObject(typeof(DepositPage).Name);
        }

    }
}
