using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Diagnostics;
using System.Windows;

namespace com.who.tests.clients
{
    /// <summary>
    /// The Game Mode Page
    /// </summary>
    public class GameModePage : Automation_Lib
    {
        AutomationElement mainWindow;

        protected System.Drawing.Point Points { get; set; }

        /// <summary>
        /// Real Mode Click
        /// </summary>
        /// <returns></returns>
        public JoinNowPage RealModeClick()
        {
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "title bar");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 90, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            System.Drawing.Point p = Cursor.Position;
            int x = Convert.ToInt32(rect.Left) + Points.X;//393
            int y = Convert.ToInt32(rect.Top) + Points.Y;//423
            MouseClick(x, y);
            return (JoinNowPage)Commons.ApplicationContext.GetObject(typeof(JoinNowPage).Name);
        }

        /// <summary>
        /// Real Mode Click
        /// </summary>
        /// <returns></returns>
        public JoinNowPage JoinNowClickTab()
        {
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "title bar");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 90, false);
            System.Windows.Point p = mainWindow.Current.BoundingRectangle.Location;
            MouseClick(Convert.ToInt32(p.X + 30), Convert.ToInt32(p.Y + 100));
            Thread.Sleep(2000);
            SendString("{Tab}");
            MouseClick();
            return (JoinNowPage)Commons.ApplicationContext.GetObject(typeof(JoinNowPage).Name);
        }

        /// <summary>
        /// Real Mode Click
        /// </summary>
        /// <returns></returns>
        public JoinNowPage JoinNowClick()
        {
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "title bar");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 90, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            System.Drawing.Point p = Cursor.Position;
            int x = Convert.ToInt32(rect.Left) + 653;//393
            int y = Convert.ToInt32(rect.Top) + 527;//423
            MouseClick(x, y);
            return (JoinNowPage)Commons.ApplicationContext.GetObject(typeof(JoinNowPage).Name);
        }
    }
}
