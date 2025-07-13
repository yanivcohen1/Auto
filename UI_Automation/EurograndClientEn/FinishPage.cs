using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using OpenQA.Selenium;
using System.Windows.Automation;
using System.Threading;

namespace EurograndClientEn
{
    public class FinishPage : Automation_Lib
    {
        AutomationElement mainWindow;
        public FinishPage(AutomationElement MainWindow)
        {
            mainWindow = MainWindow;
        }

        public void clickNextPage()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Done");
            //Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "pane");
            //AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTDLMAINWNDCLASS", controlNameCondition, 30, false);
            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            //AutomationElement NextSiblingControl = TreeWalker.ControlViewWalker.GetNextSibling(Control);
            //AutomationElement NextSiblingControl1 = TreeWalker.ControlViewWalker.GetNextSibling(NextSiblingControl);
            //setforgrandwindow(mainWindow);
            //ClickElement(NextSiblingControl1);
            ClickElement(Control);
            //return new InstallPage(auto);
        }

    }
}
