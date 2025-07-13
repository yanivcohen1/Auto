using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Windows;

namespace EurograndClientDe
{
    /// <summary>
    /// The Join Now Page
    /// </summary>
    public class JoinNowPage : Automation_Lib
    {
        AutomationElement mainWindow;

        /// <summary>
        /// click on Join Now
        /// </summary>
        /// <returns></returns>
        public RegistrationPage clickNextPage()
        {
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "title bar");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 30, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + 655;
            int y = Convert.ToInt32(rect.Top) + 533;
            MouseClick(x, y);
            return new RegistrationPage();
        }

    }
}
