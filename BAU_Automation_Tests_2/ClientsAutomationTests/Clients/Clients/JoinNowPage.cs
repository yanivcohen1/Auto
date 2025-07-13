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
    /// The Join Now Page
    /// </summary>
    public class JoinNowPage : Automation_Lib
    {
        AutomationElement mainWindow;
        protected System.Drawing.Point Points { get; set; }
        protected string Password { get; set; }

        /// <summary>
        /// click on Join Now
        /// </summary>
        /// <returns></returns>
        public RegistrationPage clickNextPage()
        {
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "title bar");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 30, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + Points.X;//201, 600
            int y = Convert.ToInt32(rect.Top) + Points.Y;
            MouseClick(x, y);
            return (RegistrationPage)Commons.ApplicationContext.GetObject(typeof(RegistrationPage).Name);
        }

        /// <summary>
        /// click on Join Now
        /// </summary>
        /// <returns></returns>
        public RegistrationChromePage clickNextPageChrome()
        {
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "title bar");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 30, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + Points.X;//201, 600
            int y = Convert.ToInt32(rect.Top) + Points.Y;
            MouseClick(x, y);
            return (RegistrationChromePage)Commons.ApplicationContext.GetObject(typeof(RegistrationChromePage).Name);
        }

        public RegistrationEuroPage clickNextPageEuro()
        {
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "title bar");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 30, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + Points.X;//201, 600
            int y = Convert.ToInt32(rect.Top) + Points.Y;
            MouseClick(x, y);
            return (RegistrationEuroPage)Commons.ApplicationContext.GetObject(typeof(RegistrationEuroPage).Name);
        }

        public void clickNextPageEuroNew()
        {
            clickNextPageEuroNew(4);
        }

        public void clickNextPageEuroNew(int tabs)
        {
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "title bar");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 30, false);
            Thread.Sleep(2000);
            setforgrandwindow(mainWindow);
            System.Windows.Point p = TrayClick(mainWindow);
            MouseClick(Convert.ToInt32(p.X + 20), Convert.ToInt32(p.Y));

            for (int i = 0; i < tabs; i++)
            {
                SendString("{Tab}");
            }

            //Thread.Sleep(2000);
            SendString(Password);
            //SendString("{TAB}");
            //Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            //AutomationElementCollection editControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            //WriteText(editControls[1], Password);
            Thread.Sleep(500);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + Points.X;//201, 600
            int y = Convert.ToInt32(rect.Top) + Points.Y;
            MouseClick(x, y);
            
            //return (RegistrationEuroPage)Commons.ApplicationContext.GetObject(typeof(RegistrationEuroPage).Name);
        }

        public void clickNextPage21New()
        {
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "title bar");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 30, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + Points.X;//201, 600
            int y = Convert.ToInt32(rect.Top) + Points.Y;
            MouseClick(x, y-40);

            SendKeys.SendWait(Password);
            //Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            //AutomationElementCollection editControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            //WriteText(editControls[1], Password);
           

            //Rect rect = mainWindow.Current.BoundingRectangle;
            //int x = Convert.ToInt32(rect.Left) + Points.X;//201, 600
            //int y = Convert.ToInt32(rect.Top) + Points.Y;
            MouseClick(x, y);
            //return (RegistrationEuroPage)Commons.ApplicationContext.GetObject(typeof(RegistrationEuroPage).Name);
        }

        public void clickNextPageEuroNewDe()
        {
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "title bar");
            AutomationElement mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 30, false);
            Thread.Sleep(2000);
            for (int i = 0; i < 9; i++)
            {
                SendKeys.SendWait("{Tab}");
                Thread.Sleep(1000);
            }
            SendKeys.SendWait(Password);
            //Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            //AutomationElementCollection editControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            //WriteText(editControls[1], Password);
            //Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "title bar");
            //mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 30, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + Points.X;//201, 600
            int y = Convert.ToInt32(rect.Top) + Points.Y;
            MouseClick(x, y);
            //return (RegistrationEuroPage)Commons.ApplicationContext.GetObject(typeof(RegistrationEuroPage).Name);
        }
    }
}
