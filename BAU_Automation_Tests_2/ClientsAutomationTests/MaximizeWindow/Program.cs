using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.Runtime.InteropServices;
using System.Diagnostics;

namespace MaximizeWindow
{
    class Program
    {

        static void Main(string[] args)
        {
            Condition windowNameCondition = new PropertyCondition(AutomationElement.NameProperty, "10.1.1.143 - Remote Desktop Connection");
            AutomationElement mainWindow = AutomationElement.RootElement.FindFirst(TreeScope.Children, windowNameCondition);
            WindowPattern windowPattern = GetWindowPattern(mainWindow);
            SetVisualState(windowPattern, WindowVisualState.Maximized);
        }

        ///-------------------------------------------------------------------- 
        /// <summary> 
        /// Calls the WindowPattern.SetVisualState() method for an associated  
        /// automation element. 
        /// </summary> 
        /// <param name="windowPattern">
        /// The WindowPattern control pattern obtained from 
        /// an automation element. 
        /// </param> 
        /// <param name="visualState">
        /// The specified WindowVisualState enumeration value. 
        /// </param> 
        ///-------------------------------------------------------------------- 
        private static void SetVisualState(WindowPattern windowPattern,
            WindowVisualState visualState)
        {
            try
            {
                if (windowPattern.Current.WindowInteractionState ==
                    WindowInteractionState.ReadyForUserInteraction)
                {
                    switch (visualState)
                    {
                        case WindowVisualState.Maximized:
                            // Confirm that the element can be maximized 
                            if ((windowPattern.Current.CanMaximize) &&
                                !(windowPattern.Current.IsModal))
                            {
                                windowPattern.SetWindowVisualState(
                                    WindowVisualState.Maximized);
                                // TODO: additional processing
                            }
                            break;
                        case WindowVisualState.Minimized:
                            // Confirm that the element can be minimized 
                            if ((windowPattern.Current.CanMinimize) &&
                                !(windowPattern.Current.IsModal))
                            {
                                windowPattern.SetWindowVisualState(
                                    WindowVisualState.Minimized);
                                // TODO: additional processing
                            }
                            break;
                        case WindowVisualState.Normal:
                            windowPattern.SetWindowVisualState(
                                WindowVisualState.Normal);
                            break;
                        default:
                            windowPattern.SetWindowVisualState(
                                WindowVisualState.Normal);
                            // TODO: additional processing 
                            break;
                    }
                }
            }
            catch (InvalidOperationException)
            {
                // object is not able to perform the requested action 
                return;
            }
        }

        ///-------------------------------------------------------------------- 
        /// <summary> 
        /// Obtains a WindowPattern control pattern from an automation element. 
        /// </summary> 
        /// <param name="targetControl">
        /// The automation element of interest. 
        /// </param> 
        /// <returns> 
        /// A WindowPattern object. 
        /// </returns> 
        ///-------------------------------------------------------------------- 
        private static WindowPattern GetWindowPattern(AutomationElement targetControl)
        {
            WindowPattern windowPattern = null;

            try
            {
                windowPattern =
                    targetControl.GetCurrentPattern(WindowPattern.Pattern)
                    as WindowPattern;
            }
            catch (InvalidOperationException)
            {
                // object doesn't support the WindowPattern control pattern 
                return null;
            }
            // Make sure the element is usable. 
            if (false == windowPattern.WaitForInputIdle(10000))
            {
                // Object not responding in a timely manner 
                return null;
            }
            return windowPattern;
        }

    }
}
