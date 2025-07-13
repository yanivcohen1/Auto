using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using OpenQA.Selenium;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;

namespace EurograndClientEn
{
    /// <summary>
    /// Download Page
    /// </summary>
    public class DownloadPage_IE : Automation_Lib
    {
        IWebDriver driver;
        AutomationElement mainWindow;
        /// <summary>
        /// constractor for Download Page
        /// </summary>
        /// <param name="_driver"></param>
        public DownloadPage_IE(IWebDriver _driver)
        {
            driver = _driver;
        }

        /// <summary>
        /// Run or retry the Download file
        /// </summary>
        /// <returns></returns>
        public LanguagePage RunDownload()
        {
            Cursor.Position = new System.Drawing.Point(0, 0);
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Run");
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "button");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("IEFrame", controlNameCondition, 30, false);
            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(Control);
            Cursor.Position = new System.Drawing.Point(0, 0);
            AutomationElement mainWindows = null;
            Control = null;
            for (int i = 0; i < 30; i++)
            {
                Condition classCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "PTDLMAINWNDCLASS");
                mainWindows = GetRootElement().FindFirst(TreeScope.Element | TreeScope.Children, classCondition);
                if (mainWindows != null)
                {
                    break;
                }
                else
                {
                    Condition controlNameCondition1 = new PropertyCondition(AutomationElement.NameProperty, "Retry");
                    Condition controlTypeCondition1 = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "button");
                    AndCondition controlCondition1 = new AndCondition(controlTypeCondition1, controlNameCondition1);
                    Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlCondition1);
                    if (Control != null)
                    {
                        ClickElement(Control);
                        Thread.Sleep(2000);
                        break;
                    }
                }
                Thread.Sleep(1000);
            }
            if (mainWindows == null && Control == null)
            {
                throw new System.ArgumentException("can't start the download");
            }
            Cursor.Position = new System.Drawing.Point(0, 0);
            return new LanguagePage(mainWindow, driver);
        }
    }
}
