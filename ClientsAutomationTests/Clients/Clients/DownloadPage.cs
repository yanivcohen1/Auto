using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using OpenQA.Selenium;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;

namespace com.who.tests.clients
{
    /// <summary>
    /// Download Page
    /// </summary>
    public class DownloadPage : Automation_Lib
    {
        IWebDriver _driver;
        AutomationElement _mainWindow;
        /// <summary>
        /// constractor for Download Page
        /// </summary>
        /// <param name="_driver"></param>
        public DownloadPage(IWebDriver driver)
        {
            _driver = driver;
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
            _mainWindow = waitforWindowNameClass("Chrome_WidgetWin_1", controlNameCondition, 30, false);
            AutomationElement Control = _mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(Control);

            //SetupCasino click
            Thread.Sleep(10000);
            Cursor.Position = new System.Drawing.Point(0, 0);
            controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "button");
            //AndCondition controlCondition1 = new AndCondition(controlTypeCondition1, controlNameCondition1);
            AutomationElementCollection Controls = _mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, controlTypeCondition);
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
            _mainWindow = waitforWindowNameClass("#32770", controlNameCondition, 30, false);//dialog
            Control = _mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            ClickElement(Control);
            Thread.Sleep(2000);
            return (LanguagePage)Commons.ApplicationContext.GetObject(typeof(LanguagePage).Name);
        }
    }
}
