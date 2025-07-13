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
using System.Globalization;
using System.IO;
using log4net.Appender;
using System.Text.RegularExpressions;
using System.ComponentModel;
using System.Reflection;
using System.Xml;
using AutoIt;

//[assembly: log4net.Config.XmlConfigurator(ConfigFile = "log4net.xml", Watch = true)]
namespace AutomationLib
{
	/// <summary>
	/// The main Automation library
	/// </summary>
	public class Automation_Lib
	{
		/// <summary>
		/// Save the Root Element
		/// </summary>
		private readonly static AutomationElement _rootElement = AutomationElement.RootElement;
		private readonly static ILog _logger;
		private static Type _logType;
		/// <summary>
		/// save the root path
		/// </summary>
		private readonly static string _rootPath;
		private readonly static string _testBuildPath;
		private readonly static string _PicBuildPath; //= @"C:\SVN\BAU_Automation_Tests\BauAutomationTests\target\failsafe-reports\html";//..\..\..\..\ClientsAutomationTests\TestBuild\Screenshot
		private readonly  static bool _Debug;
		private readonly static bool isMonitorMac;
		public static AutomationElement RootElement
		{
			get
			{
				return _rootElement;
			}
		}
		public static string RootPath
		{
			get
			{
				return _rootPath;
			}
		}
		public static bool IsMonitorMac
		{
			get
			{
				return isMonitorMac;
			}
		}
		public static ILog logger
		{
			get
			{
				return _logger;
			}
		}
		private enum HTMLColor
		{
			BLACK,
			RED,
			BLUE,
			YELLOW,
			GREEN

		}

		private enum HTMLStyle
		{
			[Description("r")]
			REGULAR,
			[Description("b")]
			BOLD,
			[Description("i")]
			ITALIC
		}

		public delegate AutomationElement WaitForResponeDelegate(string s);
		public event WaitForResponeDelegate WaitForResponeCallback;

		/// <summary>
		/// Initialize the class
		/// </summary>
		/// <returns></returns>
		static Automation_Lib()
		{
			_rootPath = FindRootPath(AppDomain.CurrentDomain.BaseDirectory, "ClientsAutomationTests");
			_PicBuildPath = Directory.GetParent(_rootPath) + Properties.Settings.Default.JavaReportPath;
			_testBuildPath = _rootPath + @"\TestBuild";
			ChackFolderExist(_testBuildPath);
			CopyFiletoBuild(_rootPath + @"\Resources\", "Common.Logging.Log4Net.dll");
			//CopyFiletoBuild(_rootPath, @"\log4net.xml");
			log4net.Config.XmlConfigurator.ConfigureAndWatch(new System.IO.FileInfo(_rootPath + @"\log4net.xml"));
			ChackFolderExist(_testBuildPath + @"\Screenshot");
			_logger = LogManager.GetLogger(typeof(Automation_Lib));
			#if DEBUG
					_Debug = true;
			#else
						_Debug = false;
			#endif
			isMonitorMac = System.Environment.MachineName == Properties.Settings.Default.MonitorMac;
			Console.WriteLine(System.Environment.MachineName + " is monitorMac" + isMonitorMac);
			//_userName = ReadParamFromEnvirment("AddToUserReg");
		}

		/// <summary>
		/// Read Param From Envirment variable
		/// </summary>
		/// <param name="key"></param>
		/// <returns></returns>
		private static string ReadParamFromEnvirment(string varName)
		{
			return Environment.GetEnvironmentVariable(varName, EnvironmentVariableTarget.User);
		}

		public static AutomationElement FindControlById(AutomationElement control)
		{
			string automationID = control.Current.AutomationId;
			if (Convert.ToInt32(automationID) == 0)
			{
				throw new System.ArgumentException("not find location for element:" + control.Current.Name);
			}
			return RootElement.FindFirst(TreeScope.Descendants,
				new PropertyCondition(AutomationElement.AutomationIdProperty, automationID));
		}
		//string automationID = control.Current.AutomationId;
		//			control = RootElement.FindFirst(TreeScope.Descendants,
		//				new PropertyCondition(AutomationElement.AutomationIdProperty, automationID));

		/// <summary>
		/// Chack Folder Exist
		/// </summary>
		/// <param name="path"></param>
		private static void ChackFolderExist(string path)
		{
			if (!Directory.Exists(path))
			{
				Directory.CreateDirectory(path);
			}
		}

		/// <summary>
		/// Initialize the automation library
		/// </summary>
		/// <param name="logType"></param>
		public void Init(Type logType)
		{
			InitDebug(logType);
			Kill_Processes();
			RunProcess(_rootPath + @"\Resources\DeleteAllCasinosConsole.exe", null, 5);
			ClearIECache();
		}

		/// <summary>
		/// learIECache
		/// </summary>
		public void ClearIECache()
		{
			RunProcess("RunDll32.exe", "InetCpl.cpl,ClearMyTracksByProcess 2", 5);
			RunProcess("RunDll32.exe", "InetCpl.cpl,ClearMyTracksByProcess 8", 5);
		}

		/// <summary>
		/// Initialize the automation library for debug
		/// </summary>
		/// <param name="logType"></param>
		public void InitDebug(Type logType)
		{
			_logType = logType;
			ChangeFileName(logType.Name + ".log");
		}

		/// <summary>
		/// Change File Name
		/// </summary>
		/// <param name="_CustomerName"></param>
		/// <param name="_Project"></param>
		public static void ChangeFileName(string _CustomerName)
		{

			//XmlConfigurator.Configure();
			log4net.Repository.Hierarchy.Hierarchy h = (log4net.Repository.Hierarchy.Hierarchy)_logger.Logger.Repository;//.LogManager.GetRepository()


			foreach (IAppender a in h.Root.Appenders)
			{
				if (a is FileAppender)
				{
					FileAppender fa = (FileAppender)a;
					//string sNowDate = DateTime.Now.ToLongDateString();
					// Programmatically set this to the desired location here
					//string FileLocationinWebConfig = fa.File;
					//string logFileLocation = FileLocationinWebConfig + _Project + "\\" + _CustomerName + "\\" + sNowDate + ".log";

					fa.File = _CustomerName;
					fa.ActivateOptions();
					break;
				}
			}
		}

		/// <summary>
		/// Kill All Old running Processes
		/// </summary>
		public void Kill_Processes()
		{
			foreach (Process process in Process.GetProcesses())
			{
				if (!_Debug && process.ProcessName.ToLower() == ("chrome") ||
					!_Debug && process.ProcessName.ToLower() == ("werfault"))
				{
					try
					{
						process.Kill();
					}
					catch (Exception){ }
				}
				if (process.ProcessName.ToLower() == ("chromedriver"))
				{
					process.CloseMainWindow();
					Thread.Sleep(2000);
				}
				if (process.ProcessName.ToLower() == ("iedriverserver") ||
					process.ProcessName.ToLower() == ("internalsetupcasino") ||
					process.ProcessName.ToLower() == ("replace") ||
					process.ProcessName.ToLower() == ("regtrk") ||
					process.ProcessName.ToLower() == ("notification_center") ||
					//process.ProcessName.ToLower() == ("chromedriver") ||
					//process.ProcessName.ToLower() == ("iexplore") ||
					process.ProcessName.ToLower().Contains("casino"))
				{
					try
					{
						process.Kill();
					}
					catch (Exception){ }
				}
			}
		}

		/// <summary>
		/// Write the error to the logger
		/// </summary>
		/// <param name="e"></param>
		/// <param name="throwEcep"></param>
		public void loggerError(Exception e, bool throwEcep)
		{
			_logger.Error("Fatal Error: ", e);
			string ErrorMsg = GenerateTimePrint() + " Fatal Error in " + _logType.Name + ":";
			WriteToErrorfile(ErrorMsg, e);
			string screenCaptureFile = Screenshot(_logType.Name, _PicBuildPath);
			Console.WriteLine(Environment.NewLine);
			Console.WriteLine(AddHTMLColor(ErrorMsg, HTMLColor.RED, HTMLStyle.REGULAR));
			Console.Write(AddHTMLColor(e.Message, HTMLColor.RED, HTMLStyle.REGULAR));
			PrintErrorLine(e);
			Console.WriteLine(Environment.NewLine);
			string title = _logType.Name + " Screenshot";
			//string fileName = _PicBuildPath + @"\" + screenCaptureFile;
			Console.WriteLine("<img src='" + screenCaptureFile + "' alt='" + title + "' > <br/>");
			Console.WriteLine(Environment.NewLine);
			if (throwEcep)
			{
				WriteToErrorfile("--- Test Fail ---", null);
				throw e;
			}
			else
			{
				Console.WriteLine(AddHTMLColor("Retry again", HTMLColor.GREEN, HTMLStyle.REGULAR));
			}
		}

		/// <summary>
		/// Add HTML Color
		/// </summary>
		/// <param name="text"></param>
		/// <returns></returns>
		private string AddHTMLColor(string text, HTMLColor htmlColor, HTMLStyle htmlStyle)
		{
			text = "<span style='color:" + htmlColor + "; font-size: 10px'>" + text + "</span>";
			text = "<span><" + GetEnumDescription(htmlStyle) + ">" + text + "</"
				+ GetEnumDescription(htmlStyle) + "></span>";
			return text;
		}

		/// <summary>
		/// Get Enum Description
		/// </summary>
		/// <param name="value"></param>
		/// <returns></returns>
		public static string GetEnumDescription(Enum value)
		{
			FieldInfo fi = value.GetType().GetField(value.ToString());

			DescriptionAttribute[] attributes =
				(DescriptionAttribute[])fi.GetCustomAttributes(typeof(DescriptionAttribute), false);

			if (attributes != null && attributes.Length > 0)
				return attributes[0].Description;
			else
				return value.ToString();
		}

		/// <summary>
		/// Print Error Line
		/// </summary>
		/// <param name="e"></param>
		private void PrintErrorLine(Exception e)
		{
			foreach (string line in e.StackTrace.Split('\n'))
			{
				if (line.Contains("Page."))
				{
					Console.WriteLine(AddHTMLColor(line, HTMLColor.BLACK, HTMLStyle.BOLD));
				}
			}
		}

		/// <summary>
		/// Write To Error file
		/// </summary>
		/// <param name="msg"></param>
		/// <param name="e"></param>
		private void WriteToErrorfile(string msg, Exception e)
		{
			using (StreamWriter streamWriter = new StreamWriter(_testBuildPath + @"\Error.log", true))
			{
				//streamWriter.AutoFlush = true;
				streamWriter.WriteLine(msg);
				if (e != null)
				{
					streamWriter.Write(e);
				}
				streamWriter.WriteLine(Environment.NewLine);
				streamWriter.Flush();
			}
		}

		/// <summary>
		/// Write To Players User name file
		/// </summary>
		/// <param name="userName"></param>
		public void WriteToPlayersUsersfile(string userName)
		{
			using (StreamWriter streamWriter = new StreamWriter(RootPath + @"\PlayersUsersNames.txt", true))
			{
				//streamWriter.AutoFlush = true;
				streamWriter.WriteLine(userName);
				streamWriter.Flush();
			}
		}

		/// <summary>
		/// Get the Root Element for bebug
		/// </summary>
		/// <returns></returns>
		public AutomationElement GetRootElement()
		{
			return _rootElement;
		}

		/// <summary>
		/// Copy File to Build
		/// </summary>
		/// <param name="fromPath"></param>
		/// <param name="filename"></param>
		public static void CopyFiletoBuild(string fromPath, string filename)
		{
			string SearchPath = AppDomain.CurrentDomain.BaseDirectory + @"\" + filename;
			string SourceDir = fromPath + filename;
			System.IO.File.Copy(SourceDir, SearchPath, true);
		}

		/// <summary>
		/// Find the Root Path
		/// </summary>
		/// <param name="Allpath"></param>
		/// <param name="SearchDir"></param>
		/// <returns></returns>
		private static string FindRootPath(string Allpath, string SearchDir)
		{
			int first = Allpath.IndexOf(SearchDir);//UI_Automation
			int length = SearchDir.Length;
			return Allpath.Substring(0, first + length);
		}

		/// <summary>
		/// Run CMD Process
		/// </summary>
		/// <param name="Path"></param>
		/// <param name="arg"></param>
		/// <param name="timeoutMin"></param>
		public void RunProcess(string Path, string arg, int timeoutMin)
		{
			Process p = new Process();
			p.StartInfo.UseShellExecute = true;//false
			//p.StartInfo.RedirectStandardOutput = true;
			p.StartInfo.FileName = Path;
			if (arg != null)
			{
				p.StartInfo.Arguments = arg;
			}
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

		/// <summary>
		/// Write text to control
		/// </summary>
		/// <param name="targetControl"></param>
		/// <param name="value"></param>
		public void WriteText(AutomationElement targetControl, string value)
		{
			Thread.Sleep(100);
			object valuePattern = null;
			Console.WriteLine(GenerateTimePrint() + "About to write to " + targetControl.Current.LocalizedControlType + " name: " + targetControl.Current.Name + " -the value: " + value);
			targetControl.TryGetCurrentPattern(
				ValuePattern.Pattern, out valuePattern);
			((ValuePattern)valuePattern).SetValue(value);
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
			UnsafeNativeMethods.mouse_event(UnsafeNativeMethods.MOUSEEVENTF_LEFTDOWN, x, y, 0, 0);
			Thread.Sleep(100);
			UnsafeNativeMethods.mouse_event(UnsafeNativeMethods.MOUSEEVENTF_LEFTUP, x, y, 0, 0);
		}

		/// <summary>
		/// MouseClick
		/// </summary>
		public void MouseClick()
		{
			Thread.Sleep(100);
			int x = Cursor.Position.X;
			int y = Cursor.Position.Y;
			//mouse_event(MOUSEEVENTF_LEFTDOWN | MOUSEEVENTF_LEFTUP, X, Y, 0, 0);
			//Thread.Sleep(100);
			UnsafeNativeMethods.mouse_event(UnsafeNativeMethods.MOUSEEVENTF_LEFTDOWN, x, y, 0, 0);
			Thread.Sleep(100);
			UnsafeNativeMethods.mouse_event(UnsafeNativeMethods.MOUSEEVENTF_LEFTUP, x, y, 0, 0);
		}

		/// <summary>
		/// Invoke (click) AutomationElement
		/// </summary>
		/// <param name="automationElement"></param>
		public void InvokeAutomationElement(AutomationElement automationElement)
		{
			var invokePattern = automationElement.GetCurrentPattern(InvokePattern.Pattern) as InvokePattern;
			invokePattern.Invoke();
		}

		/// <summary>
		/// Select List Item
		/// </summary>
		/// <param name="element"></param>
		/// <param name="value"></param>
		public void SelectListItem(AutomationElement element, string value)
		{
			if (true)
			{
				Console.WriteLine(GenerateTimePrint() + "About to select on element name: " + element.Current.Name + " -the value: " + value);
				SelectListItemBySendText(element, value);
			}
			else
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
					p.Y = p.Y + 2;
					p.X = p.X + 2;
				}
				MouseClick(Convert.ToInt32(p.X), Convert.ToInt32(p.Y));
				Thread.Sleep(500);
				Condition listCondition = new PropertyCondition(
				AutomationElement.LocalizedControlTypeProperty, "list", PropertyConditionFlags.IgnoreCase);
				AutomationElement listControl = AutomationElement.RootElement.FindFirst(TreeScope.Element | TreeScope.Children, listCondition);
				if ((listControl == null) || (value == ""))
				{
					throw new ArgumentException("element in list can't be found " + value);
				}
				SelectPopupListItem(listControl, value);
				setforgrandwindow(element);
			}
		}

		/// <summary>
		///  Select Popup List Item
		/// </summary>
		/// <param name="listElement"></param>
		/// <param name="itemText"></param>
		private void SelectPopupListItem(AutomationElement listElement, String itemText)
		{
			AutomationProperty enabledProp = AutomationElement.IsEnabledProperty;
			string value = listElement.GetCurrentPropertyValue(enabledProp).ToString();
			//setforgrandwindow(listElement);
			Condition cond = new PropertyCondition(
				AutomationElement.NameProperty, itemText, PropertyConditionFlags.IgnoreCase);
			AutomationElement elementItem = listElement.FindFirst(TreeScope.Children, cond);
			//elementItem.SetFocus();
			//setforgrandwindow(elementItem);
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
				//enabledProp = AutomationElement.IsEnabledProperty;
				string value2 = elementItem.GetCurrentPropertyValue(enabledProp).ToString();
				if (value2.ToLower().Equals("true"))
				{
					pattern.Select();
				}
				Thread.Sleep(100);
				//SendKeys.SendWait("{ENTER}");
				System.Windows.Point p = new System.Windows.Point();
				elementItem.TryGetClickablePoint(out p);
				if (p.X == 0 && p.Y == 0)
				{
					p = elementItem.Current.BoundingRectangle.Location;
					p.Y = p.Y - 2;
				}
				MouseClick(Convert.ToInt32(p.X), Convert.ToInt32(p.Y));
				Thread.Sleep(100);
			}
		}

		/// <summary>
		/// Select ListItem By Send Text
		/// </summary>
		/// <param name="element"></param>
		/// <param name="value"></param>
		public void SelectListItemBySendText(AutomationElement element, string value)
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
			if (value.ToLower().Contains("united kingdom"))
			{
				element.TryGetClickablePoint(out p);
				if (p.X == 0 && p.Y == 0)
				{
					p = element.Current.BoundingRectangle.Location;
					p.Y = p.Y + 2;
					p.X = p.X + 2;
				}
			}
			else
			{
				buttonControl.TryGetClickablePoint(out p);
				if (p.X == 0 && p.Y == 0)
				{
					p = buttonControl.Current.BoundingRectangle.Location;
					p.Y = p.Y + 2;
					p.X = p.X + 2;
				}
			}
			MouseClick(Convert.ToInt32(p.X), Convert.ToInt32(p.Y));
			Thread.Sleep(500);
			SendKeys.SendWait(value.ToLower());
			SendKeys.SendWait("{ENTER}");
			Thread.Sleep(500);
			if (value.ToLower().Contains("united kingdom"))
			{
				Thread.Sleep(5000);
			}
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
			if (p.X == 0 && p.Y == 0)
			{
				p = automationElement.Current.BoundingRectangle.Location;
				p.Y = p.Y;
				p.X = p.X;
			}
			if (p.X < 0 || p.Y < 0 || (p.Y.ToString() == "Infinity") || (p.X.ToString() == "Infinity"))
			{
				Console.WriteLine("X" + p.X.ToString() + " -Y" + p.Y.ToString());
				throw new System.ArgumentException("not find location for element:" + automationElement.Current.Name);
			}
			Console.WriteLine(GenerateTimePrint() + "click on " + automationElement.Current.LocalizedControlType + " name: " + automationElement.Current.Name);
			Debug.Print("X" + p.X.ToString() + " -Y" + p.Y.ToString());
			MouseClick(Convert.ToInt32(p.X), Convert.ToInt32(p.Y));
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
		/// set forgrand window
		/// </summary>
		/// <param name="automationElement"></param>
		/// <returns></returns>
		public bool setforgrandwindow(AutomationElement automationElement)
		{
			IntPtr handle = new IntPtr(automationElement.Current.NativeWindowHandle);
			UnsafeNativeMethods.SetForegroundWindow(handle);
			IntPtr handleForeground = UnsafeNativeMethods.GetForegroundWindow();
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
		/// send key
		/// </summary>
		/// <param name="ASCII_key"></param>
		public void SendKey(int ASCII_key)//SendKeys.SendWait("{ENTER}");
		{
			//int key = int.Parse(int _ASCII);
			const int KEYEVENTF_KEYUP = 0x0002;
			//SendKeys.SendWait()
			UnsafeNativeMethods.keybd_event((byte)ASCII_key, 0, 0, IntPtr.Zero);
			Thread.Sleep(100);
			UnsafeNativeMethods.keybd_event((byte)ASCII_key, 0, KEYEVENTF_KEYUP, IntPtr.Zero);
		}

		public AutomationElement waitforWindowNameClass(string NameClass, Condition controlCondition, int timeOutSec, bool name)
		{
			return waitforWindowNameClassParent(NameClass, controlCondition, timeOutSec, name, false);
		}

		public AutomationElement waitforWindowNameClassRetCtrl(string NameClass, Condition controlCondition, int timeOutSec, bool name)
		{
			return waitforWindowNameClassParent(NameClass, controlCondition, timeOutSec, name, true);
		}

		/// <summary>
		/// wait for Window Name or Class
		/// </summary>
		/// <param name="NameClass"></param>
		/// <param name="controlCondition"></param>
		/// <param name="timeOutSec"></param>
		/// <param name="name"></param>
		/// <returns></returns>
		public AutomationElement waitforWindowNameClassParent(string NameClass, Condition controlCondition, int timeOutSec, bool name, bool control)
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
				if (MainWindows.Count == 0)
				{
					Thread.Sleep(1000);
					//time++;
					diff = DateTime.Now - start;
				}
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
						if (control)
						{
							MainWindow = Control;
						}else{
							MainWindow = Window;
						}
						
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
				String ErrorMsg;
				try
				{
					ErrorMsg = "find " + FindPageName() + " with param:" + ((PropertyCondition)controlCondition).Value;
					Console.WriteLine(GenerateTimePrint() + AddHTMLColor(ErrorMsg, HTMLColor.GREEN, HTMLStyle.BOLD));
				}
				catch (Exception)
				{
					ErrorMsg = "find " + FindPageName() + " with param:" + ((PropertyCondition)((AndCondition)controlCondition).GetConditions()[0]).Value;
					Console.WriteLine(GenerateTimePrint() + AddHTMLColor(ErrorMsg, HTMLColor.GREEN, HTMLStyle.BOLD));
				}
				Thread.Sleep(1000);
			}
			return MainWindow;
		}

		/// <summary>
		/// take Screenshot
		/// </summary>
		/// <param name="FileName"></param>
		public string Screenshot(string FileName, string picPath)
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
			// Instantiate a culture using CreateSpecificCulture.
			//System.Globalization.CultureInfo ci = System.Globalization.CultureInfo.CreateSpecificCulture("en-US");
			//System.Globalization.DateTimeFormatInfo dtfi = ci.DateTimeFormat;
			string time = GenerateTime() + "_";
			string localFileName = time + FileName + ".png";
			FileName = picPath + @"\" + localFileName;
			bmpScreenshot.Save(FileName, ImageFormat.Png);
			using (StreamWriter streamWriter = new StreamWriter(_testBuildPath + @"\PicList.txt", true))
			{
				//streamWriter.AutoFlush = true;
				streamWriter.WriteLine(FileName);
				streamWriter.Flush();
			}
			return localFileName;
			// Show the form again
		}

		/// <summary>
		/// Generate time string
		/// </summary>
		/// <returns></returns>
		public string GenerateTime()
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
			String format = "MM-dd-hh-mm-ss";//MM/dd/yyyy hh:mm:sszzz

			// Converts the local DateTime to a string 
			// using the custom format string and display.
			return dt.ToString(format);
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

		/// <summary>
		/// Generate time string to print
		/// </summary>
		/// <returns></returns>
		public static string GenerateUserName()
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
			String format = "yyMMddhhmmss";//MM/dd/yyyy hh:mm:sszzz

			// Converts the local DateTime to a string 
			// using the custom format string and display.
			return dt.ToString(format);
		}

		/// <summary>
		/// Replace Comma
		/// </summary>
		/// <param name="expretion"></param>
		/// <returns></returns>
		public string ReplaceComma(String expretion)
		{
			return Regex.Replace(expretion, "'", '"'.ToString());
		}

		/// <summary>
		/// WaitForResponeInCallback
		/// </summary>
		/// <param name="timeoutSec"></param>
		/// <returns></returns>
		public AutomationElement WaitForResponeInCallback(int timeoutSec)
		{
			AutomationElement msgWindow = null;
			for (int i = 0; i < timeoutSec; i++)
			{
				msgWindow = WaitForResponeCallback("");
				if (msgWindow != null)
				{
					break;
				}
				else
				{
					Thread.Sleep(1000);
				}
			}
			if (msgWindow == null)
			{
				throw new System.ArgumentException("Window can't find ");
			}
			return msgWindow;
		}

		/// <summary>
		/// Replace URL in Xml
		/// </summary>
		/// <param name="value"></param>
		/// <param name="xmlFileName"></param>
		public void ReplaceURLinXml(string value, string xmlFileName)
		{
			XmlDocument doc = new XmlDocument();
			doc.Load(xmlFileName);
			//XmlNodeList nodes = doc.DocumentElement.SelectNodes(path);//("/catalog/book");
			XmlNodeList nodes = doc.DocumentElement.ChildNodes;

			foreach (XmlNode node in nodes)
			{
				try
				{
					if (node.Name == "object" && node.Attributes["id"].Value == "MainWebPage")
					{
						foreach (XmlNode innerNode in node.ChildNodes)
						{
							if (innerNode.Name == "property" && innerNode.Attributes["name"].Value == "URL_Main")
							{
								string attribute = innerNode.Attributes["value"].Value;
								innerNode.Attributes["value"].Value = value;
								break;
							}
						}
					}
				}
				catch (Exception)
				{ }
				//XmlNodeList nodes2 = node.SelectSingleNode("object");
			}
			doc.Save(xmlFileName);
		}

		/// <summary>
		/// Tray Click element
		/// </summary>
		/// <param name="automationElement"></param>
		/// <returns></returns>
		public System.Windows.Point TrayClick(AutomationElement automationElement)
		{
			Thread.Sleep(100);
			System.Windows.Point p = new System.Windows.Point();
			automationElement.TryGetClickablePoint(out p);
			if (p.X == 0 && p.Y == 0)
			{
				p = automationElement.Current.BoundingRectangle.Location;
				p.Y = p.Y;
				p.X = p.X;
			}
			if (p.Y == 0 && p.X == 0)
			{
				throw new System.ArgumentException("not find location for element:" + automationElement.Current.Name);
			}
			if (p.X < 0 || p.Y < 0 || (p.Y.ToString() == "Infinity") || (p.X.ToString() == "Infinity"))
			{
				//Console.WriteLine("X" + p.X.ToString() + " -Y" + p.Y.ToString());
				throw new System.ArgumentException("not find location for element:" + automationElement.Current.Name);
			}
			return p;
		}

		/// <summary>
		/// send text
		/// </summary>
		/// <param name="txt"></param>
		public void SendString(string txt)
		{
			AutoItX.Send(txt);
			Thread.Sleep(300);
			if (txt.ToUpper() != "{DOWN}" &&
				txt.ToUpper() != "{TAB}" &&
				txt.ToUpper() != "{UP}")
			{
				Console.WriteLine(GenerateTimePrint() + "Send Key: " + txt);
			}
		}
		//Send("yan")
		//Send("{DOWN}")
		//Send("{ENTER}")
		//Send("{TAB}")
		//Send("con")
		
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

	/// <summary>
	/// Unsafe Native Methods
	/// </summary>
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
		public static extern IntPtr GetForegroundWindow();
		[DllImport("user32.dll")]
		public static extern void mouse_event(int dwFlags, int dx, int dy, int cButtons, int dwExtraInfo);
		[DllImport("user32.dll")]
		public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, IntPtr dwExtraInfo);
	}
}
