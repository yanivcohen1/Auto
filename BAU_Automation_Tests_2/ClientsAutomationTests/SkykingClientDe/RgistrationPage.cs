using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.IO;

namespace SkykingClientDe
{
    /// <summary>
    /// the Registration Page
    /// </summary>
    public class RegistrationPage : Automation_Lib
    {
        AutomationElement mainWindow;
        Condition nameCondition;
        /// <summary>
        /// Init the Registration Page
        /// </summary>
        public RegistrationPage()
        {
            nameCondition = new PropertyCondition(AutomationElement.NameProperty, "Weiter >>");
            mainWindow = waitforWindowNameClass("PTIODEVICE", nameCondition, 30, false);
            setforgrandwindow(mainWindow);
        }

        /// <summary>
        /// Fill the Registeration Data
        /// </summary>
        /// <returns></returns>
        public void RegisterDataFill()
        {
            //Thread.Sleep(1000);
            Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection editControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            WriteText(editControls[0], "WHO");//first name
            WriteText(editControls[1], "QA");//last name
            WriteText(editControls[2], "test@playtech.com");//email
            WriteText(editControls[3], "test@playtech.com");//email
            Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection comboControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            //SelectListItem(comboControls[3], "United Kingdom");//select country
            SelectListItem(comboControls[0], "01");//day of birth
            SelectListItem(comboControls[1], "Jan");//mounth of birth
            SelectListItem(comboControls[2], "1973");//year of birth
            Condition radioButtonCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "radio button", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection checkControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, radioButtonCondition);
            ClickElement(checkControls[0]);//Gender male
            //Condition nameCondition = new PropertyCondition(AutomationElement.NameProperty, "next >>");
            AutomationElement buttenControl = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, nameCondition);
            Thread.Sleep(400);
            ClickElement(buttenControl);//Next
        }

        /// <summary>
        /// Next page Fill the Registeration Data
        /// </summary>
        /// <returns></returns>
        public void RegisterDataFillNextPage()
        {
            Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection editControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            WriteText(editControls[0], "Addr");//Address
            WriteText(editControls[1], "State");//State

            WriteText(editControls[3], "1234");//postal code
            WriteText(editControls[4], "1234567");//Phone number
            WriteText(editControls[5], "1234567");//mobile number
            Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection comboControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            SelectListItemBySendText(comboControls[0], "United Kingdom");//select country
            WriteText(editControls[2], "city");//city
            AutomationElement buttenControl = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, nameCondition);
            Thread.Sleep(400);
            ClickElement(buttenControl);//Next
        }

        /// <summary>
        /// Next page Fill the Registeration Data
        /// </summary>
        /// <returns></returns>
        public CongratulationsPage RegisterDataFillLastPage()
        {
            Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection editControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            WriteText(editControls[0], "123456");//Password
            WriteText(editControls[1], "123456");//Verify Password
            //Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            //AutomationElementCollection comboControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            //SelectListItem(comboControls[0], "EUR");//select country
            Condition checkBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "check box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection checkControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, checkBoxCondition);
            ClickElement(checkControls[0]);//I agree
            Condition nameCondition2 = new PropertyCondition(AutomationElement.NameProperty, "Erstellen ");
            AutomationElement buttenControl = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, nameCondition2);
            Thread.Sleep(400);
            ClickElement(buttenControl);//CREATE Click
            return new CongratulationsPage();
        }

    }
}
