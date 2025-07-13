using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using OpenQA.Selenium;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Windows;

namespace WilliamhillClientEn
{
    public class MainCasinoPage : Automation_Lib
    {
        AutomationElement mainWindow;
        public MainCasinoPage(AutomationElement MainWindow)
        {
            mainWindow = MainWindow;
        }

        public RegistrationPage clickNextPage()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Dear WHO,");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            Rect rect = mainWindow.Current.BoundingRectangle;
            int x = Convert.ToInt32(rect.Left) + 415;
            int y = Convert.ToInt32(rect.Top) + 288;
            MouseClick(x, y);
            return new RegistrationPage();
        }

    }
}
