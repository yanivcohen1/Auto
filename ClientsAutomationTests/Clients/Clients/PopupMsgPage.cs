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
        public CashierPage clickCloseMsgEuro()
        {
            string dearWHO = DearWHO;
            PropertyCondition controlTypeCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "PTIODEVICE");
            AutomationElement msgWindow = null;
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
            }
            //Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, dearWHO);
            //mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            Rect rect = msgWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + Points.X;//420, 287
            int y = Convert.ToInt32(rect.Top) + Points.Y;
            MouseClick(x, y);
            return (CashierPage)Commons.ApplicationContext.GetObject(typeof(CashierPage).Name);
        }

    }
}
