using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;

namespace EurograndClientEn
{
    /// <summary>
    /// The Finish Page
    /// </summary>
    public class FinishPage : Automation_Lib
    {
        AutomationElement mainWindow;

        /// <summary>
        /// Click on Done
        /// </summary>
        /// <returns></returns>
        public GameModePage DoneClick()
        {
            //Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Done");
            //mainWindow = waitforWindowNameClass("PTDLMAINWNDCLASS", controlNameCondition, 30, false);
            //AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            //ClickElement(Control);
            return new GameModePage();
        }

    }
}
