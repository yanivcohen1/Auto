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

namespace com.who.tests.clients
{
    /// <summary>
    /// The Congratulations Page
    /// </summary>
    public class CongratulationsEuroPage : Automation_Lib
    {
        AutomationElement mainWindow;

        protected string Login { get; set; }//Login
        protected string UserName { get; set; }//YANQAN
        protected string PlayersUsersFile { get; set; }//EurograndClientEn

        /// <summary>
        /// Click On Login
        /// </summary>
        /// <returns></returns>
        public PopupMsgPage LoginClick()
        {
            string login = Login;
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, login);
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "hyperlink");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlCondition, 30, false);
            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlCondition);
            ClickElement(Control);
            //WriteToPlayersUsersfile("YAN" + GenerateUserName() + ", " + PlayersUsersFile);
            //return new PopupMsgPage();
            return (PopupMsgPage)Commons.ApplicationContext.GetObject(typeof(PopupMsgPage).Name);
        }

    }
}
