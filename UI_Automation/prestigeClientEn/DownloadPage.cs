using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using OpenQA.Selenium;
using System.Windows.Automation;
using System.Threading;

namespace PrestigeClientEn
{
    public class DownloadPage : Automation_Lib
    {
        IWebDriver driver;
        public DownloadPage(IWebDriver _driver)
        {
            driver = _driver;
        }

        public void RunDownload()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Run");
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "button");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            AutomationElement MainWindow = waitforWindowNameClass("IEFrame", controlNameCondition, 30, false);
            AutomationElement Control = MainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(Control);
            Thread.Sleep(5000);
        }

    }
}
