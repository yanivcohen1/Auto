using OpenQA.Selenium.Remote;
using System.Configuration;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.IE;
using OpenQA.Selenium.Chrome;
using System;
using OpenQA.Selenium.Support.UI;

namespace AutomationLib
{
    public class WebSelenium
    {
        private static FirefoxProfile _ffp;
        private static IWebDriver _driver;

        public static IWebDriver StartBrowser()
        {
            Common.WebBrowser = Properties.Settings.Default.Driver;

            switch (Common.WebBrowser)
            {
                case "firefox":
                    
                    _ffp = new FirefoxProfile();
                    _ffp.AcceptUntrustedCertificates = true;
                    _ffp.SetPreference("browser.helperApps.alwaysAsk.force", false);
                    _ffp.SetPreference("browser.helperApps.neverAsk.saveToDisk", "text/xml, text/csv, text/plain, text/log, application/zlib, application/x-gzip, application/x-compressed, application/x-gtar, multipart/x-gzip, application/tgz, application/gnutar, application/x-tar");
                    _driver = new FirefoxDriver(_ffp);
                    break;
                case "iexplore":
                    _driver = new InternetExplorerDriver();
                    break;
                case "chrome":
                    _driver = new ChromeDriver();
                    break;
            }
            Common.Driver = _driver;
            return _driver;
        }

        public static IWebElement FindElement(By by, int TimeoutSec)
        {
            return new WebDriverWait(_driver, TimeSpan.FromSeconds(TimeoutSec)).
                Until<IWebElement>((d) =>
            {
                return d.FindElement(by);
            });
        }
    }
}
