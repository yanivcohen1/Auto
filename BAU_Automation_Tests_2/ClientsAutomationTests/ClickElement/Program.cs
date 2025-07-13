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

namespace ClickControlByNameAndWinClass
{
    class Program
    {
        public static AutomationElement _rootElement = AutomationElement.RootElement;
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
            string controlName = args[1];//"JOIN NOW";
            string className = args[0];//"MozillaWindowClass";
            Program program = new Program();
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, controlName);
            AutomationElement mainWindow = program.waitforWindowNameClass(className, controlNameCondition, 30, false);
            AutomationElement control = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            program.ClickElement(control);//PROCEED chackBox
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
        public AutomationElement waitforWindowNameClass(string NameClass, Condition controlCondition, int timeOutSec, bool name)
        {
            //int time = 0;
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
                    AutomationElement Control = Window.FindFirst(TreeScope.Element | TreeScope.Descendants | TreeScope.Children, controlCondition);
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
            return MainWindow;
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

    }
}
