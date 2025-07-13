using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using OpenQA.Selenium;
using System.Windows.Automation;
using System.Threading;

namespace com.who.tests.clients
{
    /// <summary>
    /// the Language Page
    /// </summary>
    public class LanguagePage : Automation_Lib
    {
        AutomationElement mainWindow;
        IWebDriver _driver;
        WebSelenium _webSelenium;
        delegate AutomationElement TestDelegate(string s);

        protected string Next { get; set; }
        protected string WinClass { get; set; }

        /// <summary>
        /// constractor for Language Page
        /// </summary>
        /// <param name="MainWindow"></param>
        /// <param name="_driver"></param>
        public LanguagePage(WebSelenium webSelenium)
        {
            _webSelenium = webSelenium;
            _driver = webSelenium.Driver;
        }

        /// <summary>
        /// click the Next Page
        /// </summary>
        /// <returns></returns>
        public LicensePage clickNextPage()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, Next);
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "pane");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTDLMAINWNDCLASS", controlCondition, 60, false);
            _driver.Quit();
            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlCondition);
            setforgrandwindow(mainWindow);
            ClickElement(Control);
            return (LicensePage)Commons.ApplicationContext.GetObject(typeof(LicensePage).Name);
        }

        /// <summary>
        /// click the Next Page new install
        /// </summary>
        /// <returns></returns>
        public LicensePage clickNextPageNew()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, Next);
            Condition controlNameCondition2 = new PropertyCondition(AutomationElement.NameProperty, "Yes");
            //Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "text");
            //AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);

            /*PropertyCondition propCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "PT_installerTopFramWnd30_0");
            Automation_Lib automation_Lib = new Automation_Lib();
            automation_Lib.WaitForResponeCallback += new Automation_Lib.WaitForResponeDelegate(delegate(string s)
            {
                return AutomationLib.Automation_Lib._rootElement.FindFirst(TreeScope.Children, propCondition);
            });
            mainWindow = automation_Lib.WaitForResponeInCallback(30);*/

            mainWindow = waitforWindowNameClass(WinClass, controlNameCondition, 30, false);//PT_installerTopFramWnd30_0

            _driver.Quit();
            Thread.Sleep(1000);
            AutomationElement control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            setforgrandwindow(mainWindow);
            ClickElement(control);
            Thread.Sleep(2000);
            try
            {
                control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition2);
                ClickElement(control);
            }
            catch (Exception){ }
            return (LicensePage)Commons.ApplicationContext.GetObject(typeof(LicensePage).Name);
        }
    }
}