using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Security;
using System.Runtime.InteropServices;
using System.Drawing;
using System.Drawing.Imaging;
using System.Diagnostics;
using log4net;

[assembly: log4net.Config.XmlConfigurator(ConfigFile = "log4net.xml", Watch = true)]
namespace AutomationLib
{
    public class Automation_Lib
    {
        private static AutomationElement m_rootElement;
        private static ILog _logger;
        private static Type _logType;
        private static string _rootPath;

        public void Init(Type logType)
        {
            InitDebug(logType);
            RunProcess(_rootPath + @"\AutomationLib\Resources\DeleteAllCasinosConsole.exe", null, 3);
        }

        public void InitDebug(Type logType)
        {
            _logType = logType;
            m_rootElement = AutomationElement.RootElement;
            _logger = LogManager.GetLogger(logType);
            Common.Auto = this;
            _rootPath = FindRootPath(AppDomain.CurrentDomain.BaseDirectory, "ClientsAutomationTests");
            CopyXMLtoBuild(_rootPath, @"\log4net.xml");
            Kill_Ie();
            //RunProcess(_rootPath + @"\AutomationLib\Resources\DeleteAllCasinosConsole.exe", "", 3);
        }

        private void Kill_Ie()
        {
            foreach (Process process in Process.GetProcesses())
            {
                if (process.ProcessName.ToLower() == ("iexplore") || process.ProcessName.ToLower() == ("iedriverserver"))
                {
                    process.Kill();
                }
            }
        }

        public void loggerError(Exception e)
        {
            _logger.Error("Fatal Error: ", e);
            Screenshot(_logType.Name);
            throw e;
        }

        public AutomationElement GetRootElement()
        {
            return m_rootElement;
        }

        private void CopyXMLtoBuild(string fromPath, string filename)
        {
            string SearchPath = AppDomain.CurrentDomain.BaseDirectory + @"\log4net.xml";
            string SourceDir = fromPath + @"\log4net.xml";
            System.IO.File.Copy(SourceDir, SearchPath, true);
        }

        private string FindRootPath(string Allpath ,string SearchDir)
        {
            int first = Allpath.IndexOf(SearchDir);//UI_Automation
            int length = SearchDir.Length;
            return Allpath.Substring(0, first + length);
        }

        public void RunProcess(string Path, string arg, int timeoutMin)
        {
            Process p = new Process();
            p.StartInfo.UseShellExecute = true;//false
            //p.StartInfo.RedirectStandardOutput = true;
            p.StartInfo.FileName = Path;
            //p.StartInfo.Arguments = arg;
            //if (new_test.TestPath == "java.exe")
            //{
            //    p.StartInfo.CreateNoWindow = true;
            //    //p.StartInfo.WindowStyle = ProcessWindowStyle.Minimized;
            //}
            //Start the process.
            p.Start();
            //Wait for window to finish loading.
            Thread.Sleep(3000);
            //p.WaitForInputIdle();
            //Wait for the process to exit or time out.
            p.WaitForExit(timeoutMin * 1000 * 60);
            //Check to see if the process is still running.
            if (p.HasExited == false)
            {
                //Process is still running.
                //Test to see if the process is hung up.
                if (p.Responding)
                //Process was responding; close the main window.
                {
                    //TestResult = p.StandardOutput.ReadToEnd();
                    p.CloseMainWindow();
                    //return false;
                }
                else
                    //Process was not responding; force the process to close.
                    p.Kill();
                //return "";
            }
            //else
                //return p.StandardOutput.ReadToEnd();
        }

        public void WriteText(AutomationElement targetControl, string value)
        {
            Thread.Sleep(100);
            System.Windows.Point p = new System.Windows.Point();
            targetControl.TryGetClickablePoint(out p);
            Cursor.Position = new System.Drawing.Point((int)p.X, (int)p.Y);
            Thread.Sleep(100);
            MouseClick((int)p.X, (int)p.Y);
            Thread.Sleep(100);
            object valuePattern = null;
            targetControl.TryGetCurrentPattern(
                ValuePattern.Pattern, out valuePattern);
            ((ValuePattern)valuePattern).SetValue(value);
        }

        public void MouseClick(int x, int y)
        {
            UnsafeNativeMethods.mouse_event(UnsafeNativeMethods.MOUSEEVENTF_LEFTDOWN, x, y, 0, 0);
            Thread.Sleep(100);
            UnsafeNativeMethods.mouse_event(UnsafeNativeMethods.MOUSEEVENTF_LEFTUP, x, y, 0, 0);
        }

        public void SetValuePattern(AutomationElement element, string value)
        {
            System.Windows.Point p = new System.Windows.Point();
            Condition buttonCondition = new PropertyCondition(
                AutomationElement.LocalizedControlTypeProperty, "button", PropertyConditionFlags.IgnoreCase);
            AutomationElement buttonControl = element.FindFirst(TreeScope.Element | TreeScope.Descendants, buttonCondition);
            Thread.Sleep(300);
            //while (!buttonControl.TryGetClickablePoint(out p))
            //{
            //    Console.WriteLine(p);
            //}
            buttonControl.TryGetClickablePoint(out p);
            if (p.X == 0 && p.Y == 0)
            {
                p = buttonControl.Current.BoundingRectangle.Location;
                p.Y = p.Y - 2;
                //Cursor.Position = new System.Drawing.Point((int)p.X, (int)p.Y);
                //throw new ArgumentException("button in combBbox can't be found");
            }
            Cursor.Position = new System.Drawing.Point((int)p.X, (int)p.Y);
            Thread.Sleep(100);
            MouseClick((int)p.X, (int)p.Y);
            Thread.Sleep(500);
            Condition listCondition = new PropertyCondition(
            AutomationElement.LocalizedControlTypeProperty, "list", PropertyConditionFlags.IgnoreCase);
            AutomationElement listControl = AutomationElement.RootElement.FindFirst(TreeScope.Element | TreeScope.Children, listCondition);
            SelectListItem(listControl, value);
            setforgrandwindow(element);
        }

        private void SelectListItem(AutomationElement listElement, String itemText)
        {
            if ((listElement == null) || (itemText == ""))
            {
                throw new ArgumentException("element in list can't be found " + itemText);
            }
            Condition cond = new PropertyCondition(
                AutomationElement.NameProperty, itemText, PropertyConditionFlags.IgnoreCase);
            AutomationElement elementItem = listElement.FindFirst(TreeScope.Children, cond);
            if (elementItem != null)
            {
                SelectionItemPattern pattern;
                try
                {
                    pattern = elementItem.GetCurrentPattern(SelectionItemPattern.Pattern) as SelectionItemPattern;
                }
                catch (InvalidOperationException ex)
                {
                    Console.WriteLine(ex.Message);  // Most likely "Pattern not supported." 
                    return;
                }
                pattern.Select();
                Thread.Sleep(100);
                System.Windows.Point p = new System.Windows.Point();
                elementItem.TryGetClickablePoint(out p);
                Cursor.Position = new System.Drawing.Point((int)p.X, (int)p.Y);
                Thread.Sleep(100);
                MouseClick((int)p.X, (int)p.Y);
                Thread.Sleep(100);
            }
        }

        public void ClickElement(AutomationElement automationElement)
        {
            Thread.Sleep(100);
            System.Windows.Point p = new System.Windows.Point();
            automationElement.TryGetClickablePoint(out p);
            Cursor.Position = new System.Drawing.Point((int)p.X, (int)p.Y);
            Thread.Sleep(100);
            MouseClick((int)p.X, (int)p.Y);
        }

        public void setforgrandwindow(AutomationElement automationElement)
        {
            IntPtr handle = new IntPtr(automationElement.Current.NativeWindowHandle);
            UnsafeNativeMethods.SetForegroundWindow(handle);
        }

        public AutomationElement waitforWindowNameClass(string NameClass, Condition controlCondition, int timeOutSec, bool name)
        {
            int time = 0;
            AutomationElement MainWindow = null;
            while (MainWindow == null && time < timeOutSec)
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
                AutomationElementCollection MainWindows = m_rootElement.FindAll(TreeScope.Element | TreeScope.Children, propCondition);
                foreach (AutomationElement Window in MainWindows)
                {
                    AutomationElement Control = Window.FindFirst(TreeScope.Element | TreeScope.Descendants, controlCondition);
                    if (Control == null)
                    {
                        Thread.Sleep(1000);
                        time++;
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
                Console.WriteLine("window: " + NameClass + " can't find");
                throw new System.ArgumentException("Window can't find ", NameClass);
            }
            return MainWindow;
        }

        public void Screenshot(string FileName)
        {
            Bitmap bmpScreenshot;
            Graphics gfxScreenshot;
            // Hide the form so that it does not appear in the screenshot
            //Task taskF = Task.Factory.StartNew(() =>
            //{
            //    this.Hide();
            //}, Task.Factory.CancellationToken, TaskCreationOptions.None, context);
            //taskF.Wait();
            // Set the bitmap object to the size of the screen
            bmpScreenshot = new Bitmap(Screen.PrimaryScreen.Bounds.Width, Screen.PrimaryScreen.Bounds.Height, PixelFormat.Format32bppArgb);
            // Create a graphics object from the bitmap
            gfxScreenshot = Graphics.FromImage(bmpScreenshot);
            // Take the screenshot from the upper left corner to the right bottom corner
            gfxScreenshot.CopyFromScreen(Screen.PrimaryScreen.Bounds.X, Screen.PrimaryScreen.Bounds.Y, 0, 0, Screen.PrimaryScreen.Bounds.Size, CopyPixelOperation.SourceCopy);
            // Save the screenshot to the specified path that the user has chosen
            //string FileName = "JoylandCasinoDrillTes_DE";
            DateTime DT = DateTime.Now;
            string[] Date = DT.GetDateTimeFormats();
            string Date1 = Date[37].Replace(':', '_');
            string Date2 = Date1.Replace(' ', '-');
            string date3 = Date2.Replace('/', '_') + "-";
            FileName = AppDomain.CurrentDomain.BaseDirectory + @"\" + date3 + FileName + ".png";
            bmpScreenshot.Save(FileName, ImageFormat.Png);
            // Show the form again
            //taskF = Task.Factory.StartNew(() =>
            //{
            //    this.Show();
            //}, Task.Factory.CancellationToken, TaskCreationOptions.None, context);
            //taskF.Wait();
        }
    }

    [SuppressUnmanagedCodeSecurity]
    internal static class UnsafeNativeMethods
    {
        public const int WM_LBUTTONDOWN = 0x201; //Left mousebutton down
        public const int WM_LBUTTONUP = 0x202;   //Left mousebutton up
        public const int WM_LBUTTONDBLCLK = 0x203; //Left mousebutton doubleclick
        public const int WM_RBUTTONDOWN = 0x204; //Right mousebutton down
        public const int WM_RBUTTONUP = 0x205;   //Right mousebutton up
        public const int WM_RBUTTONDBLCLK = 0x206; //Right mousebutton do
        public const int WM_SETCURSOR = 0x20; //SETCURSOR
        public const int WM_MouseMove = 0x200; //SETCURSOR
        public const int WM_COMMAND = 0x0111;
        public const int WM_KEYDOWN = 0x0100;
        public const int WM_KEYUP = 0x0101;
        public const int MOUSEEVENTF_LEFTDOWN = 0x02;
        public const int MOUSEEVENTF_LEFTUP = 0x04;
        public const int MOUSEEVENTF_RIGHTDOWN = 0x08;
        public const int MOUSEEVENTF_RIGHTUP = 0x10;

        [DllImport("user32.dll")]
        internal static extern int SendMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam);
        [DllImport("user32.dll")]
        internal static extern bool PostMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam);
        [DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]
        internal static extern int GetWindowText(IntPtr hWnd, [Out] StringBuilder lpString, int nMaxCount);
        [DllImport("user32.dll", SetLastError = true)]
        internal static extern IntPtr FindWindow(string lpClassName, string lpWindowName);
        [DllImport("user32.dll")]
        public static extern bool SetForegroundWindow(IntPtr hWnd);
        [DllImport("user32.dll")]
        public static extern void mouse_event(int dwFlags, int dx, int dy, int cButtons, int dwExtraInfo);
    }
}
