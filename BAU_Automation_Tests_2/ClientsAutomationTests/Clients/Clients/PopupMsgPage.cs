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
    /// The Popup Msgessage Page
    /// </summary>
    public class PopupMsgPage : Automation_Lib
    {
        AutomationElement mainWindow;

        protected string DearWHO { get; set; }
        protected System.Drawing.Point Points { get; set; }
        protected System.Drawing.Point Points2 { get; set; }

        /// <summary>
        /// Click on close MSG
        /// </summary>
        /// <returns></returns>
        public CashierPage clickCloseMsg()
        {
            string dearWHO = DearWHO;
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, dearWHO);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + Points.X;//420, 287
            int y = Convert.ToInt32(rect.Top) + Points.Y;
            MouseClick(x, y);
            return (CashierPage)Commons.ApplicationContext.GetObject(typeof(CashierPage).Name);
        }

        /// <summary>
        /// Click on close MSG
        /// </summary>
        /// <returns></returns>
        public CashierPage clickCloseMsg2()
        {
            string dearWHO = DearWHO;
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, dearWHO);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + Points2.X;//420, 287
            int y = Convert.ToInt32(rect.Top) + Points2.Y;
            MouseClick(x, y);
            return (CashierPage)Commons.ApplicationContext.GetObject(typeof(CashierPage).Name);
        }

        /// <summary>
        /// Click on close MSG
        /// </summary>
        /// <returns></returns>
        public CashierPage clickCloseMsgEuro2()
        {
            string dearWHO = DearWHO;
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, dearWHO);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            Thread.Sleep(2000);
            SendString("{Tab}");
            SendString("{Tab}");
            MouseClick();
            return (CashierPage)Commons.ApplicationContext.GetObject(typeof(CashierPage).Name);
        }

        /// <summary>
        /// Click on close MSG
        /// </summary>
        /// <returns></returns>
        public CashierPage clickCloseMsgEuro()
        {
            string dearWHO = DearWHO;
            PropertyCondition controlTypeCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "PTIODEVICE");
            PropertyCondition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "");
            AndCondition andCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            Automation_Lib automation_Lib = new Automation_Lib();
            automation_Lib.WaitForResponeCallback += new Automation_Lib.WaitForResponeDelegate(delegate(string s)
            {
                return AutomationLib.Automation_Lib.RootElement.FindFirst(TreeScope.Children, andCondition);
            });
            mainWindow = automation_Lib.WaitForResponeInCallback(30);
            /*AutomationElement msgWindow = null;
            int length = 30;//20sec
            for (int i = 0; i < length; i++)
            {
                AutomationElementCollection Controls = AutomationLib.Automation_Lib._rootElement.FindAll(TreeScope.Children, controlTypeCondition);//TreeScope.Element | TreeScope.Descendants |
                foreach (AutomationElement Control in Controls)
                {
                    if (Control.Current.Name == "")
                    {
                        msgWindow = Control;
                        break;//415, 287
                    }
                }
                if (msgWindow != null)
                {
                    break;
                }
                else
                {
                    Thread.Sleep(1000);
                }
            }*/
            //Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, dearWHO);
            //mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + Points.X;//420, 287
            int y = Convert.ToInt32(rect.Top) + Points.Y;
            MouseClick(x, y);
            return (CashierPage)Commons.ApplicationContext.GetObject(typeof(CashierPage).Name);
        }

    }
}
