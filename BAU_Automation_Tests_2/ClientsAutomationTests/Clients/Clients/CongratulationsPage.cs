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
    public class CongratulationsPage : Automation_Lib
    {
        AutomationElement mainWindow;

        protected string Continue { get; set; }
        protected string UserName { get; set; }
        protected string PlayersUsersFile { get; set; }
        

        /// <summary>
        /// Click On Login
        /// </summary>
        /// <returns></returns>
        public PopupMsgPage LoginClick()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, Continue);
            //Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit");
            //AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);

            Condition controlNameCondition2 = new PropertyCondition(AutomationElement.NameProperty, UserName);
            AutomationElement control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition2);
            AutomationElement nextSiblingControl = TreeWalker.ControlViewWalker.GetNextSibling(control);
            string userName = nextSiblingControl.Current.Name;
            WriteToPlayersUsersfile(userName + ", " + PlayersUsersFile);

            Rect rect = control.Current.BoundingRectangle;
            //System.Drawing.Point p = Cursor.Position;
            int x = Convert.ToInt32(rect.Left) + 370;
            int y = Convert.ToInt32(rect.Top) + 241;
            MouseClick(x, y);

            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(Control);
            return (PopupMsgPage)Commons.ApplicationContext.GetObject(typeof(PopupMsgPage).Name);
        }

    }
}
