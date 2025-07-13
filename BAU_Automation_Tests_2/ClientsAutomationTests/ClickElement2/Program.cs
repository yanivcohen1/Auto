using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Automation;
using System.Threading;
using System.Runtime.InteropServices;
using System.Globalization;
using System.Diagnostics;
using System.Windows.Forms;
using AutoIt;

namespace ClickSafariUserAgent
{
    class Program //: AutomationLib.Automation_Lib
    {
        public static AutomationElement _rootElement = AutomationElement.RootElement;
        public static AutomationElement _mainWindow;
        public const int MOUSEEVENTF_LEFTDOWN = 0x02;
        public const int MOUSEEVENTF_LEFTUP = 0x04;
        public const int MOUSEEVENTF_RIGHTDOWN = 0x08;
        public const int MOUSEEVENTF_RIGHTUP = 0x10;
        [DllImport("user32.dll")]
        public static extern bool SetForegroundWindow(IntPtr hWnd);
        [DllImport("user32.dll")]
        public static extern IntPtr GetForegroundWindow();
        [DllImport("user32.dll")]
        public static extern void mouse_event(int dwFlags, int dx, int dy, int cButtons, int dwExtraInfo);

        static void Main(string[] args)
        {
            //string mainWinClassName = args[2];//{1C03B488-D53B-4a81-97F8-754559640193}
            string controlName = "Develop";//args[1];//"JOIN NOW";
            //string LocalizedControlType = "menu item";//args[0];//"MozillaWindowClass";
            Program program = new Program();
            string mainWinClassName = "{1C03B488-D53B-4a81-97F8-754559640193}";
            //Condition mainWinClassNamePropCon = new PropertyCondition(AutomationElement.ClassNameProperty, mainWinClassName);
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, controlName);
            //Condition controlTypeCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, LocalizedControlType);
            //AndCondition controlCondition = new AndCondition(controlTypeCondition, controlNameCondition);
            //_mainWindow = _rootElement.FindFirst(TreeScope.Element | TreeScope.Descendants, mainWinClassNamePropCon);
            //Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, controlName);
            AutomationElement control = program.waitforWindowNameClass(mainWinClassName, controlNameCondition, 30, false, true);
            //AutomationElement control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            program.ClickElement(control);//PROCEED chackBox
            program.run();
        }

        /// <summary>
        /// change menu
        /// </summary>
        public void run()
        {
            SendString("{DOWN}");
            SendString("{DOWN}");
            SendString("{RIGHT}");
            //SendString("{DOWN}");
            //SendString("{DOWN}");
            //SendString("{DOWN}");
            for (int i = 0; i < 13; i++)
            {
                SendString("{DOWN}");
            }
            SendString("{ENTER}");
            string userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A366 Safari/600.1.4";
            ClipPut(userAgent);
            SendString("{CTRLDOWN}a{CTRLUP}");
            SendString("{CTRLDOWN}v{CTRLUP}");
            SendString("{Tab}");
            SendString("{ENTER}");
        }

        /// <summary>
        /// Click on Element
        /// </summary>
        /// <param name="automationElement"></param>
        public void ClickElement(AutomationElement automationElement)
        {
            Thread.Sleep(100);
            System.Windows.Point p = new System.Windows.Point();
            automationElement.TryGetClickablePoint(out p);
            if (Convert.ToInt32(p.X) == 0 && Convert.ToInt32(p.Y) == 0)
            {
                p = automationElement.Current.BoundingRectangle.Location;
                p.Y = p.Y;
                p.X = p.X;
            }
            if (Convert.ToInt32(p.X) < 0 || Convert.ToInt32(p.Y) < 0)
            {
                Console.WriteLine("X" + Convert.ToInt32(p.X).ToString() + " -Y" + Convert.ToInt32(p.Y).ToString());
                throw new System.ArgumentException("not find location for element:" + automationElement.Current.Name);
            }
            Console.WriteLine(GenerateTimePrint() + "click on " + automationElement.Current.LocalizedControlType + " name: " + automationElement.Current.Name);
            Debug.Print("X" + Convert.ToInt32(p.X).ToString() + " -Y" + Convert.ToInt32(p.Y).ToString());
            MouseClick(Convert.ToInt32(p.X), Convert.ToInt32(p.Y));
        }


        /// <summary>
        /// Mouse Click on x y location
        /// </summary>
        /// <param name="x"></param>
        /// <param name="y"></param>
        public void MouseClick(int x, int y)
        {
            Thread.Sleep(100);
            Cursor.Position = new System.Drawing.Point(x, y);
            Thread.Sleep(100);
            mouse_event(MOUSEEVENTF_LEFTDOWN, x, y, 0, 0);
            Thread.Sleep(100);
            mouse_event(MOUSEEVENTF_LEFTUP, x, y, 0, 0);
        }

        /// <summary>
        /// wait for Window Name or Class
        /// </summary>
        /// <param name="NameClass"></param>
        /// <param name="controlCondition"></param>
        /// <param name="timeOutSec"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        public AutomationElement waitforWindowNameClass(string NameClass, Condition controlCondition, int timeOutSec, bool name, bool control)
        {
            //int time = 0;
            AutomationElement Control = null;
            var start = DateTime.Now;
            TimeSpan diff = TimeSpan.Zero;
            AutomationElement MainWindow = null;
            while (MainWindow == null && diff.Seconds < timeOutSec)
            {
                Condition propCondition;
                if (name)
                {
                    propCondition = new PropertyCondition(AutomationElement.NameProperty, NameClass);
                }
                else
                {
                    propCondition = new PropertyCondition(AutomationElement.ClassNameProperty, NameClass);
                }
                AutomationElementCollection MainWindows = _rootElement.FindAll(TreeScope.Children, propCondition);
                foreach (AutomationElement Window in MainWindows)
                {
                    Control = Window.FindFirst(TreeScope.Element | TreeScope.Descendants | TreeScope.Children, controlCondition);
                    if (Control == null)
                    {
                        Thread.Sleep(1000);
                        //time++;
                        diff = DateTime.Now - start;
                    }
                    else
                    {
                        MainWindow = Window;
                        break;
                    }

                }
            }
            if (MainWindow == null)
            {
                bool propertyCondition = false;
                try
                {
                    Console.WriteLine("timeOut " + timeOutSec + "sec to find window: " + NameClass + " with param:" + ((PropertyCondition)controlCondition).Value + " can't find");
                    propertyCondition = true;
                }
                catch (Exception)
                {
                    Console.WriteLine("timeOut " + timeOutSec + "sec to find window: " + NameClass + " with param:" + ((PropertyCondition)((AndCondition)controlCondition).GetConditions()[0]).Value + " can't find");
                    throw new System.ArgumentException("Window can't find ", NameClass + " param:" + ((PropertyCondition)((AndCondition)controlCondition).GetConditions()[0]).Value);
                }
                if (propertyCondition)
                {
                    throw new System.ArgumentException("Window can't find ", NameClass + " param:" + ((PropertyCondition)controlCondition).Value);
                }
            }
            else
            {
                setforgrandwindow(MainWindow);
                try
                {
                    Console.WriteLine(GenerateTimePrint() + "find " + FindPageName() + " with param:" + ((PropertyCondition)controlCondition).Value);
                }
                catch (Exception)
                {
                    Console.WriteLine(GenerateTimePrint() + "find " + FindPageName() + " with param:" + ((PropertyCondition)((AndCondition)controlCondition).GetConditions()[0]).Value);
                }
                Thread.Sleep(1000);
            }
            if (control)
            {
                return Control;
            }
            else
            {
                return MainWindow;
            }
        }

        /// <summary>
        /// set forgrand window
        /// </summary>
        /// <param name="automationElement"></param>
        /// <returns></returns>
        public bool setforgrandwindow(AutomationElement automationElement)
        {
            IntPtr handle = new IntPtr(automationElement.Current.NativeWindowHandle);
            SetForegroundWindow(handle);
            IntPtr handleForeground = GetForegroundWindow();
            if (handle != handleForeground)
            {
                return false;
                //SendKeys(13);//enter ASCII key
            }
            else
            {
                return true;
            }
            //UnsafeNativeMethods.SetForegroundWindow(handle);
        }


        /// <summary>
        /// Generate time string to print
        /// </summary>
        /// <returns></returns>
        public static string GenerateTimePrint()
        {
            DateTime dt = DateTime.Now;
            CultureInfo en = new CultureInfo("en-US");
            Thread.CurrentThread.CurrentCulture = en;

            // Creates a DateTime for the local time.
            //DateTime dt = new DateTime(2001, 7, 13, 4, 0, 0);

            // Converts the local DateTime to the UTC time.
            DateTime utcdt = dt.ToUniversalTime();

            // Defines a custom string format to display the DateTime value.
            // zzzz specifies the full time zone offset.
            String format = "HH:mm:ss.fff - ";//MM/dd/yyyy hh:mm:sszzz

            // Converts the local DateTime to a string 
            // using the custom format string and display.
            return dt.ToString(format);
        }


        private string FindPageName()
        {
            string findPage = "";
            foreach (var line in Environment.StackTrace.Split('\n'))
            {
                if (line.Contains("Page."))
                {
                    foreach (var subLine in line.Split('.'))
                    {
                        if (subLine.Contains("Page"))
                        {
                            findPage = subLine;
                            break;
                        }
                    }
                    if (findPage != "")
                    {
                        break;
                    }
                }
            }
            return findPage;
        }

        /// <summary>
        /// send text
        /// </summary>
        /// <param name="txt"></param>
        public void SendString(string txt)
        {
            AutoItX.Send(txt);
            Thread.Sleep(300);
        }

        /// <summary>
        /// Clip Get
        /// </summary>
        /// <param name="txt"></param>
        public string ClipGet()
        {
            return AutoItX.ClipGet();
        }

        /// <summary>
        /// Clip Set
        /// </summary>
        /// <param name="txt"></param>
        public void ClipPut(string str)
        {
            AutoItX.ClipPut(str);
        }

    }
}
