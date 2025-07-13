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
    public class LanguagePage : Automation_Lib
    {
        AutomationElement mainWindow;
        public LanguagePage(AutomationElement MainWindow)
        {
            mainWindow = MainWindow;
        }

        public LicensePage clickNextPage()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Next");
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "pane");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTDLMAINWNDCLASS", controlCondition, 30, false);
            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlCondition);
            setforgrandwindow(mainWindow);
            ClickElement(Control);
            return new LicensePage(mainWindow);
        }

    }
}
