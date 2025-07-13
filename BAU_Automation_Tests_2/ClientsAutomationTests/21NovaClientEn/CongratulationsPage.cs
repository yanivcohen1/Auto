using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Windows;
using System.IO;

namespace Nova21ClientEn
{
    /// <summary>
    /// The Congratulations Page
    /// </summary>
    public class CongratulationsPage : Automation_Lib
    {
        AutomationElement mainWindow;

        /// <summary>
        /// Click On Login
        /// </summary>
        /// <returns></returns>
        public PopupMsgPage LoginClick()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "CONTINUE");
            //Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit");
            //AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);

            Condition controlNameCondition2 = new PropertyCondition(AutomationElement.NameProperty, "Your Username is: ");
            AutomationElement control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition2);
            AutomationElement nextSiblingControl = TreeWalker.ControlViewWalker.GetNextSibling(control);
            string userName = nextSiblingControl.Current.Name;
            WriteToPlayersUsersfile(userName + ", Nova21ClientEn");

            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(Control);
            return new PopupMsgPage();
        }

    }
}
