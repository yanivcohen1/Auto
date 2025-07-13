using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using OpenQA.Selenium;
using System.Threading;
using System.IO;
using System.Windows.Automation;
using System.Windows;

namespace RubyBingoEn
{
    public class MainGamePage : Automation_Lib
    {
        private readonly IWebDriver _driver;

        public MainGamePage(IWebDriver driver)
        {
            _driver = driver;
        }

        /// <summary>
        /// Click On Bank
        /// </summary>
        public CashierPage ClickOnBank()
        {
            Thread.Sleep(10000);
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "window");
            AutomationElement mainWindow = waitforWindowNameClass("Ruby Bingo - Google Chrome", controlCondition, 30, true);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + 609;//609, 88
            int y = Convert.ToInt32(rect.Top) + 88;
            MouseClick(x, y);
            Thread.Sleep(1000);
            rect = mainWindow.Current.BoundingRectangle;
            x = Convert.ToInt32(rect.Left) + 610;//610, 149
            y = Convert.ToInt32(rect.Top) + 149;
            MouseClick(x, y);
            Thread.Sleep(5000);
            WebSelenium.goToURLContainWindow(_driver, "cashier");
            Thread.Sleep(5000);
            return new CashierPage(_driver);
        }
    }
}
