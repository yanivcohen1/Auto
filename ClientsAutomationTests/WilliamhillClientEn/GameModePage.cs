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

namespace WilliamhillClientEn
{
    /// <summary>
    /// The Game Mode Page
    /// </summary>
    public class GameModePage : Automation_Lib
    {
        AutomationElement mainWindow;

        /// <summary>
        /// Real Mode Click
        /// </summary>
        /// <returns></returns>
        public JoinNowPage RealModeClick()
        {
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "title bar");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 30, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            System.Drawing.Point p = Cursor.Position;
            int x = Convert.ToInt32(rect.Left) + 393;
            int y = Convert.ToInt32(rect.Top) + 423;
            MouseClick(x, y);
            return new JoinNowPage();
        }

    }
}
