using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using AutomationLib;
using System.Collections.ObjectModel;
using System.Threading;
using System.Windows.Forms;
using System.IO;
using System.Windows.Automation;

namespace RubyBingoEn
{
    class CongragulationPage : Automation_Lib
    {
        private readonly IWebDriver _driver;

        /// <summary>
        /// Open the WebPage
        /// </summary>
        /// <param name="_driver"></param>
        public CongragulationPage(IWebDriver driver)
        {
            _driver = driver;
        }

        /// <summary>
        /// Click On PlayBingo
        /// </summary>
        /// <returns></returns>
        public MainGamePage ClickGoToBingo(string userName)
        {
            WebSelenium.FindElement(_driver, By.CssSelector("span > span"), 5).Click();
            Thread.Sleep(2000);
            WebSelenium.goToURLContainWindow(_driver, "game_page");
            Thread.Sleep(10000);
            SendKeys.SendWait(userName);
            //SendKeys.SendWait("{ENTER}");
            //goToURLContainWindow("game_page");;
            _driver.Manage().Window.Maximize();
            Thread.Sleep(1000);
            Condition controlCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "window");
            AutomationElement mainWindow = waitforWindowNameClass("Ruby Bingo - Google Chrome", controlCondition, 30, true);
            System.Windows.Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + 928;
            int y = Convert.ToInt32(rect.Top) + 690;
            MouseClick(x, y);
            return new MainGamePage(_driver);
        }

    }
}
