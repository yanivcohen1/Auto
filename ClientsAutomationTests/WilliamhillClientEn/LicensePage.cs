using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;

namespace WilliamhillClientEn
{
    /// <summary>
    /// the License Page
    /// </summary>
    public class LicensePage : Automation_Lib
    {
        AutomationElement mainWindow;

        /// <summary>
        /// click the Agree and Next Page
        /// </summary>
        /// <returns></returns>
        public FinishPage clickNextPage()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Next");
            mainWindow = waitforWindowNameClass("PTDLMAINWNDCLASS", controlNameCondition, 30, false);
            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            AutomationElement NextSiblingControl = TreeWalker.ControlViewWalker.GetNextSibling(Control);
            AutomationElement NextSiblingControl1 = TreeWalker.ControlViewWalker.GetNextSibling(NextSiblingControl);
            ClickElement(NextSiblingControl1);
            ClickElement(Control);
            return new FinishPage();
        }

    }
}
