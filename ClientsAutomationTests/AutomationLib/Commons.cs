using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Automation;
using OpenQA.Selenium;
using Spring.Context;
using Spring.Context.Support;
using Spring.Objects.Factory.Xml;
using Spring.Objects.Factory.Support;

namespace AutomationLib
{
    /// <summary>
    /// Save common Data
    /// </summary>
    public static class Commons
    {
        private static TimeSpan _defaultTimeSpan = new TimeSpan(0, 0, 30);
        private static GenericApplicationContext _ctx;
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
        /// <summary>
        /// save driver time out
        /// </summary>
        public static IApplicationContext ApplicationContext
        {
            get { return _ctx; }
        }

        /// <summary>
        /// Init Spring
        /// </summary>
        /// <param name="contextFileName"></param>
        /// <returns></returns>
        public static IApplicationContext InitSpring(string contextFileName)
        {
            _ctx = new GenericApplicationContext();
            IObjectDefinitionReader objectDefinitionReader = new XmlObjectDefinitionReader(_ctx);
            string assemblyName = System.Reflection.Assembly.GetExecutingAssembly().GetName().Name;
            string location = AutomationLib.Automation_Lib._rootPath + "\\Clients";//"assembly://" + assemblyName + "/" + assemblyName;
            objectDefinitionReader.LoadObjectDefinitions(location + "\\" + contextFileName);
            //"assembly://Spring.IocQuickStart.MovieFinder/Spring.IocQuickStart.MovieFinder/AppContextContribution.xml");
            _ctx.Refresh();
            return _ctx;
        }
    }
}
