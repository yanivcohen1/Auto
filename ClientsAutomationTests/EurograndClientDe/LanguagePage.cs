using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using OpenQA.Selenium;
using System.Windows.Automation;
using System.Threading;

namespace EurograndClientDe
{
    /// <summary>
    /// the Language Page
    /// </summary>
    public class LanguagePage : Automation_Lib
    {
        AutomationElement mainWindow;
        IWebDriver driver;

        /// <summary>
        /// constractor for Language Page
        /// </summary>
        /// <param name="MainWindow"></param>
        /// <param name="_driver"></param>
        public LanguagePage(AutomationElement MainWindow, IWebDriver _driver)
        {
            driver = _driver;
            mainWindow = MainWindow;
        }

        /// <summary>
        /// click the Next Page
        /// </summary>
        /// <returns></returns>
        public LicensePage clickNextPage()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Next");
            Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "pane");
            AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            mainWindow = waitforWindowNameClass("PTDLMAINWNDCLASS", controlCondition, 60, false);
            driver.Quit();
            AutomationElement Control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlCondition);
            setforgrandwindow(mainWindow);
            ClickElement(Control);
            return new LicensePage();
        }

    }
}
