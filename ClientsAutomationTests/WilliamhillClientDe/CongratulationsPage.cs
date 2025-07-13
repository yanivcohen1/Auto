using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Windows;

namespace WilliamhillClientDe
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
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Weiter ");
            //Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit");
            //AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);

            Condition controlNameCondition2 = new PropertyCondition(AutomationElement.NameProperty, "Ihr Benutzername ist:");
            AutomationElement control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition2);
            AutomationElement nextSiblingControl = TreeWalker.ControlViewWalker.GetNextSibling(control);
            string userName = nextSiblingControl.Current.Name;
            WriteToPlayersUsersfile(userName + ", WilliamhillClientDe");

            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(Control);
            return new PopupMsgPage();
        }

    }
}
