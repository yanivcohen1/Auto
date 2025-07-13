using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using OpenQA.Selenium;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;

namespace JoylandClientDe
{
    /// <summary>
    /// Download Page
    /// </summary>
    public class DownloadPage : Automation_Lib
    {
        IWebDriver driver;
        AutomationElement mainWindow;
        /// <summary>
        /// constractor for Download Page
        /// </summary>
        /// <param name="_driver"></param>
        public DownloadPage(IWebDriver _driver)
        {
            driver = _driver;
        }

        /// <summary>
        /// Run or retry the Download file
        /// </summary>
        /// <returns></returns>
        public LanguagePage RunDownload()
        {
            //keep click
            Cursor.Position = new System.Drawing.Point(0, 0);
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Keep");
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "button");
            Condition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("Chrome_WidgetWin_1", controlNameCondition, 30, false);
            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(Control);

            //SetupCasino click
            Thread.Sleep(10000);
            Cursor.Position = new System.Drawing.Point(0, 0);
            controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "button");
            //AndCondition controlCondition1 = new AndCondition(controlTypeCondition1, controlNameCondition1);
            AutomationElementCollection Controls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, controlTypeCondition);
            foreach (AutomationElement control in Controls)
            {
                if (control.Current.Name.Contains("SetupCasino"))
                {
                    ClickElement(control);
                }

            }

            //run dialog click
            Thread.Sleep(1000);
            Cursor.Position = new System.Drawing.Point(0, 0);
            controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Run");
            controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "button");
            controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("#32770", controlNameCondition, 30, false);//dialog
            Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(Control);
            Thread.Sleep(2000);
            return new LanguagePage(mainWindow, driver);
        }
    }
}
