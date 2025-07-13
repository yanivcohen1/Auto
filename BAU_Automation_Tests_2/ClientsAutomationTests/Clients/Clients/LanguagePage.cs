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
        protected string OldReg { get; set; }

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
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "text");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            Condition controlNameCondition2 = new PropertyCondition(AutomationElement.NameProperty, "Yes");
            mainWindow = waitforWindowNameClass(WinClass, controlCondition, 20, false);//PT_installerTopFramWnd30_0
            _driver.Quit();
            Thread.Sleep(1000);
            AutomationElement control;
            //mainWindow = waitforWindowNameClass(WinClass, controlCondition, 20, false);//PT_installerTopFramWnd30_0
            for (int i = 0; i < 20; i++)
            {
                try
                {
                    mainWindow = waitforWindowNameClass(WinClass, controlCondition, 20, false);//PT_installerTopFramWnd30_0
                    control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants | TreeScope.Children, controlNameCondition);
                    setforgrandwindow(mainWindow);
                    Thread.Sleep(1000);
                    ClickElement(control);
                    break;
                }
                catch (Exception)
                {
                    if (i == 19)
                    {
                        throw new System.ArgumentException("Window can't find ", WinClass + " param:" + ((PropertyCondition)((AndCondition)controlNameCondition).GetConditions()[0]).Value);
                    }
                }
            }
            //SendKeys.SendWait("{ENTER}");
            Thread.Sleep(2000);
            try
            {
                control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition2);
                ClickElement(control);
            }
            catch (Exception){ }
            return (LicensePage)Commons.ApplicationContext.GetObject(typeof(LicensePage).Name);
        }

        /// <summary>
        /// click the Next Page new install
        /// </summary>
        /// <returns></returns>
        public LicensePage clickOldRegister()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, OldReg);
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "text");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            AutomationElement control;
            //Condition controlNameCondition2 = new PropertyCondition(AutomationElement.NameProperty, "Yes");
            Condition checkBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "check box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection checkControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, checkBoxCondition);
            for (int i = 0; i < 20; i++)
            {
                try
                {
                    mainWindow = waitforWindowNameClass(WinClass, controlNameCondition, 20, false);//PT_installerTopFramWnd30_0
                    AutomationElementCollection controls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants | TreeScope.Children, controlNameCondition);
                    //Console.WriteLine(controls.Count);
                    setforgrandwindow(mainWindow);
                    Thread.Sleep(1000);
                    //ClickElement(checkControls[0]);//I agree
                    ClickElement(controls[1]);
                    break;
                }
                catch (Exception e)
                {
                    Console.WriteLine("error no:" + i + "error msg:" + e.Message);
                    if (i == 19)
                    {
                        throw new System.ArgumentException("Window can't find ", WinClass + " param:" + ((PropertyCondition)controlNameCondition).Value);
                    }
                }
            }

            //mainWindow = waitforWindowNameClass(WinClass, controlNameCondition, 60, false);

            //AutomationElementCollection controls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            //ClickElement(controls[0]);
            return (LicensePage)Commons.ApplicationContext.GetObject(typeof(LicensePage).Name);
        }

        /// <summary>
        /// click the Next Page new install
        /// </summary>
        /// <returns></returns>
        public LicensePage clickOldRegister2()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, OldReg);
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "text");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            AutomationElement control;
            //Condition controlNameCondition2 = new PropertyCondition(AutomationElement.NameProperty, "Yes");
            Condition checkBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "check box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection checkControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, checkBoxCondition);
            for (int i = 0; i < 20; i++)
            {
                try
                {
                    mainWindow = waitforWindowNameClass(WinClass, controlNameCondition, 20, false);//PT_installerTopFramWnd30_0
                    AutomationElementCollection controls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants | TreeScope.Children, controlNameCondition);
                    //Console.WriteLine(controls.Count);
                    setforgrandwindow(mainWindow);
                    Thread.Sleep(1000);
                    ClickElement(checkControls[1]);//I agree
                    ClickElement(controls[0]);
                    break;
                }
                catch (Exception)
                {
                    if (i == 19)
                    {
                        throw new System.ArgumentException("Window can't find ", WinClass + " param:" + ((PropertyCondition)((AndCondition)controlNameCondition).GetConditions()[0]).Value);
                    }
                }
            }

            //mainWindow = waitforWindowNameClass(WinClass, controlNameCondition, 60, false);

            //AutomationElementCollection controls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            //ClickElement(controls[0]);
            return (LicensePage)Commons.ApplicationContext.GetObject(typeof(LicensePage).Name);
        }

        /// <summary>
        /// click the Next Page new install
        /// </summary>
        /// <returns></returns>
        public LicensePage clickNextPage21nova()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, Next);
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "text");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            Condition controlNameCondition2 = new PropertyCondition(AutomationElement.NameProperty, "Yes");
            mainWindow = waitforWindowNameClass(WinClass, controlCondition, 20, false);//PT_installerTopFramWnd30_0

            _driver.Quit();
            Thread.Sleep(1000);
            AutomationElement control;
            //mainWindow = waitforWindowNameClass(WinClass, controlCondition, 20, false);//PT_installerTopFramWnd30_0
            mainWindow = waitforWindowNameClass(WinClass, controlCondition, 20, false);//PT_installerTopFramWnd30_0
            MouseClick(350, 500);
            SendKeys.SendWait("{ENTER}");
            Thread.Sleep(2000);
            try
            {
                control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition2);
                ClickElement(control);
            }
            catch (Exception) { }
            return (LicensePage)Commons.ApplicationContext.GetObject(typeof(LicensePage).Name);
        }
    }
}