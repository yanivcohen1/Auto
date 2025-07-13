using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Windows;

namespace WilliamhillClientEn
{
    /// <summary>
    /// The Popup Msgessage Page
    /// </summary>
    public class PopupMsgPage : Automation_Lib
    {
        AutomationElement mainWindow;

        /// <summary>
        /// Click on close MSG
        /// </summary>
        /// <returns></returns>
        public CashierPage clickCloseMsg()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Dear WHO");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + 420;//420, 287
            int y = Convert.ToInt32(rect.Top) + 287;
            MouseClick(x, y);
            return new CashierPage();
        }

    }
}
