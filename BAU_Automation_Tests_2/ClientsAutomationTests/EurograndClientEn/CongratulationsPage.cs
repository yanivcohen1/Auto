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

namespace EurograndClientEn
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
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Login");
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "hyperlink");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 30, false);
            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlCondition);
            ClickElement(Control);
            string passwordPath = _rootPath + "/EurograndClientEn/PasswordEuro.txt";
            string password = File.ReadAllText(passwordPath);
            WriteToPlayersUsersfile("YANQA" + _userName + password + ", EurograndClientEn");
            return new PopupMsgPage();
        }

    }
}
