using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Runtime.InteropServices;

namespace EurograndClient
{
    class CalcTest
    {
        public const int MOUSEEVENTF_LEFTDOWN = 0x02;
        public const int MOUSEEVENTF_LEFTUP = 0x04;
        public const int WM_LBUTTONDOWN = 0x201; //Left mousebutton down
        public const int WM_LBUTTONUP = 0x202;   //Left mousebutton up
        [DllImport("user32.dll")]
        public static extern void mouse_event(int dwFlags, int dx, int dy, int cButtons, int dwExtraInfo);
        [DllImport("user32.dll")]
        public static extern bool SetForegroundWindow(IntPtr hWnd);
        [DllImport("user32.dll")]
        internal static extern bool PostMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam);

        static void Main1(string[] args)
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Minimize");
            Condition WinpropCondition = new PropertyCondition(AutomationElement.NameProperty, "Calculator");
            AutomationElement MainWindows = AutomationElement.RootElement.FindFirst(TreeScope.Children, WinpropCondition);
            AutomationElement comboControl = MainWindows.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            IntPtr handle = new IntPtr(MainWindows.Current.NativeWindowHandle);
            SetForegroundWindow(handle);
            Thread.Sleep(2000);
            //ClickElement(comboControl); 
            MouseClickMsg(comboControl);
            Console.WriteLine("Find " + comboControl.Current.Name);
            //int X = 1;//Convert.ToInt32(DevelopPoint.X /10);//314;
            //int Y = 15;//Convert.ToInt32(DevelopPoint.Y / 10);//15;
            Console.ReadKey();
        }

        public static void ClickElement(AutomationElement automationElement)
        {
            Thread.Sleep(100);
            System.Windows.Point p = new System.Windows.Point();
            automationElement.TryGetClickablePoint(out p);
            if (p.X == 0 && p.Y == 0)
            {
                p = automationElement.Current.BoundingRectangle.Location;
                p.Y = p.Y + 1;
                p.X = p.X + 1;
            }
            MouseClick((int)p.X, (int)p.Y);
        }

        public static void MouseClick(int x, int y)
        {
            Thread.Sleep(100);
            Cursor.Position = new System.Drawing.Point(x, y);
            Thread.Sleep(100);
            mouse_event(MOUSEEVENTF_LEFTDOWN, x, y, 0, 0);
            Thread.Sleep(100);
            mouse_event(MOUSEEVENTF_LEFTUP, x, y, 0, 0);
        }

        public static void MouseClickMsg(AutomationElement Control)
        {
            Thread.Sleep(100);
            System.Windows.Point p = new System.Windows.Point();
            Control.TryGetClickablePoint(out p);
            if (p.X == 0 && p.Y == 0)
            {
                p = Control.Current.BoundingRectangle.Location;
                p.Y = p.Y + 1;
                p.X = p.X + 1;
            }
            //int x = (int)p.X;
            //int y = (int)p.Y;
            Cursor.Position = new System.Drawing.Point((int)p.X, (int)p.Y);
            int x = 0;//160
            int y = 0;//-44
            IntPtr lParam = (IntPtr)((y << 16) | x);
            IntPtr wParam = IntPtr.Zero;
            //IntPtr wParam = new IntPtr(1);
            IntPtr handle = new IntPtr(Control.Current.NativeWindowHandle);
            PostMessage(handle, WM_LBUTTONDOWN, wParam, lParam);//Click on File
            Thread.Sleep(100);
            PostMessage(handle, WM_LBUTTONUP, wParam, lParam);
            Thread.Sleep(100);
            
        }

    }
}
