using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Automation;
using OpenQA.Selenium;

namespace AutomationLib
{
    /// <summary>
    /// Save common Data
    /// </summary>
    public static class Common
    {
        private static TimeSpan _defaultTimeSpan = new TimeSpan(0, 0, 30);
        /// <summary>
        /// save the WebBrowser
        /// </summary>
        public static string WebBrowser { get; set; }
        /// <summary>
        /// save the auto lib
        /// </summary>
        public static Automation_Lib Auto { get; set; }
        /// <summary>
        /// save the driver
        /// </summary>
        public static IWebDriver Driver { get; set; }
        /// <summary>
        /// save driver time out
        /// </summary>
        public static TimeSpan DriverTimeout
        {
            get { return _defaultTimeSpan; }
            set { _defaultTimeSpan = value; }
        }
    }
}
