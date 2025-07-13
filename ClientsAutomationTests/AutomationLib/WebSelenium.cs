using OpenQA.Selenium.Remote;
using System.Configuration;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.IE;
using OpenQA.Selenium.Chrome;
using System;
using OpenQA.Selenium.Support.UI;
using System.Collections.ObjectModel;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.Support.Events;

namespace AutomationLib
{
    /// <summary>
    /// The WebSelenium library
    /// </summary>
    public class WebSelenium
    {
        private FirefoxProfile _ffp;
        private IWebDriver _driver;
        private string _driverType = Properties.Settings.Default.Driver;
        private static string findBy = "";

        public IWebDriver Driver
        {
            get
            {
                return _driver;
            }
            set
            {
                _driver = value;
            }
        }

        /// <summary>
        /// Start the web Browser
        /// </summary>
        /// <returns></returns>
        public WebSelenium()//string driverType)
        {
            //_driverType = Properties.Settings.Default.Driver;

            switch (_driverType)
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
                    //string chromeDriverPath = Automation_Lib._rootPath + @"\Resources\chromedriver.exe";
                    //System.Environment.SetEnvironmentVariable("webdriver.chrome.driver", chromeDriverPath, EnvironmentVariableTarget.User);
                    //ChromeOptions options = new ChromeOptions();
                    //DesiredCapabilities capabilities = DesiredCapabilities.Chrome();
                    //capabilities.SetCapability(ChromeOptions.Capability, options);
                    _driver = new ChromeDriver();
                    break;
            }
            _driver.Manage().Timeouts().SetPageLoadTimeout(TimeSpan.FromSeconds(30));
            var firingDriver = new EventFiringWebDriver(_driver);
            firingDriver.ElementClicking += firingDriver_ElementClicking;
            firingDriver.ExceptionThrown += firingDriver_ExceptionThrown;
            firingDriver.Navigating += firingDriver_Navigating;
            firingDriver.ElementValueChanging += firingDriver_ElementValueChanging;
            firingDriver.ElementValueChanged += firingDriver_ElementValueChanged;
            firingDriver.FindingElement += firingDriver_FindingElement;
            firingDriver.ScriptExecuting += firingDriver_ScriptExecuting;
            _driver = firingDriver;
            //Driver = _driver;
            //return _driver;
        }

        /// <summary>
        /// selenium Find Element 
        /// </summary>
        /// <param name="by"></param>
        /// <param name="TimeoutSec"></param>
        /// <returns></returns>
        public static IWebElement FindElement(IWebDriver driver, By by, int TimeoutSec)
        {
            return new WebDriverWait(driver, TimeSpan.FromSeconds(TimeoutSec)).
                Until<IWebElement>((d) =>
            {
                return d.FindElement(by);
            });
        }

        /// <summary>
        /// go To URL Contain Window
        /// </summary>
        /// <param name="urlContain"></param>
        public static void goToURLContainWindow(IWebDriver driver, string urlContain)
        {
            ReadOnlyCollection<string> windowHandles = driver.WindowHandles;
            foreach (var windowHandle in windowHandles)
            {
                if (driver.SwitchTo().Window(windowHandle).Url.Contains(urlContain))
                {
                    break;
                }
            }
        }

        /// <summary>
        /// Select Element By Text
        /// </summary>
        /// <param name="by"></param>
        /// <param name="textSelect"></param>
        public static void SelectElementByText(IWebDriver driver, By by, string textSelect)
        {
            var element = driver.FindElement(by);
            //create select element object 
            var selectElement = new SelectElement(element);
            // select by text
            selectElement.SelectByText(textSelect);
            //new SelectElement(_driver.FindElement(by)).SelectByText(textSelect);
        }

        /// <summary>
        /// go To URL Contain Window
        /// </summary>
        /// <param name="urlContain"></param>
        public static void SafeClick(IWebDriver driver, IWebElement webElement)
        {
            new Actions(driver).MoveToElement(webElement).Click(webElement).Perform();
        }

        /// <summary>
        /// firing event Element Clicking
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private static void firingDriver_ElementClicking(object sender, WebElementEventArgs e)//EventHandler<
        {
            Console.WriteLine(Automation_Lib.GenerateTimePrint() + "About to click on " + e.Element.TagName + " find" + findBy);
        }

        /// <summary>
        /// firing event Exception Thrown
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private static void firingDriver_ExceptionThrown(object sender, WebDriverExceptionEventArgs e)
        {
            Console.WriteLine(Automation_Lib.GenerateTimePrint() + "WebDriver error: with element "+ findBy +
                "Error Msg: " + e.ThrownException.Message);
            //throw new System.ArgumentException("WebDriver error:", e.ThrownException);
        }

        /// <summary>
        /// firing event Navigating
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private static void firingDriver_Navigating(object sender, WebDriverNavigationEventArgs e)
        {
            Console.WriteLine(Automation_Lib.GenerateTimePrint() + "About to navigating to:'" + e.Url + "'");
        }

        /// <summary>
        /// firing event Value Changing
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private static void firingDriver_ElementValueChanging(object sender, WebElementEventArgs e)
        {
            Console.WriteLine(Automation_Lib.GenerateTimePrint() + "About to write to " + e.Element.TagName + " find" + findBy);
        }

        /// <summary>
        /// firing event Element Value Changed
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private static void firingDriver_ElementValueChanged(object sender, WebElementEventArgs e)
        {
            Console.WriteLine("-Set value: " + e.Element.GetAttribute("value"));
        }

        /// <summary>
        /// firing event Finding Element
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private static void firingDriver_FindingElement(object sender, FindElementEventArgs e)
        {
            findBy = e.FindMethod.ToString();
        }

        /// <summary>
        /// firing event Script Executing
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private static void firingDriver_ScriptExecuting(object sender, WebDriverScriptEventArgs e)
        {
            Console.WriteLine(Automation_Lib.GenerateTimePrint() + "About to execute script:'" + e.Script + "'");
        }

    }
}
