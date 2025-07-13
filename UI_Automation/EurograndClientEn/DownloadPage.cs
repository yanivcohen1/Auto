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
    public class DownloadPage : Automation_Lib
    {
        IWebDriver driver;
        AutomationElement mainWindow;
        public DownloadPage(IWebDriver _driver)
        {
            driver = _driver;
        }

        public LanguagePage RunDownload()
        {
            Thread.Sleep(3000);
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Run");
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "button");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("IEFrame", controlNameCondition, 30, false);
            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(Control);
            Thread.Sleep(5000);
            Condition classCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "PTDLMAINWNDCLASS");
            AutomationElement mainWindows = GetRootElement().FindFirst(TreeScope.Element | TreeScope.Children, classCondition);
            if (mainWindows == null)
            {
                Condition controlNameCondition1 = new PropertyCondition(AutomationElement.NameProperty, "Retry");
                Condition controlTypeCondition1 = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "button");
                AndCondition controlCondition1 = new AndCondition(controlTypeCondition1, controlNameCondition1);
                mainWindow = waitforWindowNameClass("IEFrame", controlNameCondition1, 30, false);
                AutomationElement Control1 = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlCondition1);
                ClickElement(Control1);
                //Thread.Sleep(5000);
            }
            driver.Quit();
            return new LanguagePage(mainWindow);
        }

    }
}
