using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Automation;
using OpenQA.Selenium;

namespace AutomationLib
{
    public static class Common
    {
        private static TimeSpan _defaultTimeSpan = new TimeSpan(0, 0, 30);

        public static string WebBrowser { get; set; }
        public static Automation_Lib Auto { get; set; }
        public static IWebDriver Driver { get; set; }
        public static TimeSpan DriverTimeout
        {
            get { return _defaultTimeSpan; }
            set { _defaultTimeSpan = value; }
        }
    }
}
