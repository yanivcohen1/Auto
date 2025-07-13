using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.IO;

namespace com.who.tests.clients
{
    /// <summary>
    /// the Registration Page
    /// </summary>
    public class RegistrationPage : Automation_Lib
    {
        AutomationElement mainWindow;
        Condition nameCondition;

        protected string Next { get; set; }
        protected string FirstName { get; set; }
        protected string LastName { get; set; }
        protected string Email { get; set; }
        protected string DayOfBirth { get; set; }
        protected string MounthOfBirth { get; set; }
        protected string YearOfBirth { get; set; }
        protected string Address { get; set; }
        protected string State { get; set; }
        protected string PostalCode { get; set; }
        protected string PhoneNumber { get; set; }
        protected string MobileNumber { get; set; }
        protected string SelectCountry { get; set; }
        protected string City { get; set; }
        protected string Password { get; set; }
        protected string Create { get; set; }

        /// <summary>
        /// Init the Registration Page
        /// </summary>
        public RegistrationPage()
        {
            //nameCondition = new PropertyCondition(AutomationElement.NameProperty, "next >>");
            //mainWindow = waitforWindowNameClass("PTIODEVICE", nameCondition, 30, false);
            //setforgrandwindow(mainWindow);
        }

        /// <summary>
        /// Init the Registration Page
        /// </summary>
        public void Init()
        {
            nameCondition = new PropertyCondition(AutomationElement.NameProperty, Next);
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
            WriteText(editControls[0], FirstName);//first name
            WriteText(editControls[1], LastName);//last name
            WriteText(editControls[2], Email);//email
            WriteText(editControls[3], Email);//email
            Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection comboControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            //SelectListItem(comboControls[3], "United Kingdom");//select country
            SelectListItem(comboControls[0], DayOfBirth);//day of birth
            SelectListItem(comboControls[1], MounthOfBirth);//mounth of birth
            SelectListItem(comboControls[2], YearOfBirth);//year of birth
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
            WriteText(editControls[0], Address);//Address
            WriteText(editControls[1], State);//State

            WriteText(editControls[3], PostalCode);//postal code
            WriteText(editControls[4], PhoneNumber);//Phone number
            WriteText(editControls[5], MobileNumber);//mobile number
            Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection comboControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            SelectListItemBySendText(comboControls[0], SelectCountry);//select country
            WriteText(editControls[2], City);//city
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
            WriteText(editControls[0], Password);//Password
            WriteText(editControls[1], Password);//Verify Password
            //Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            //AutomationElementCollection comboControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            //SelectListItem(comboControls[0], "EUR");//select country
            Condition checkBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "check box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection checkControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, checkBoxCondition);
            ClickElement(checkControls[0]);//I agree
            Condition nameCondition2 = new PropertyCondition(AutomationElement.NameProperty, Create);
            AutomationElement buttenControl = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, nameCondition2);
            Thread.Sleep(400);
            ClickElement(buttenControl);//CREATE Click
            return (CongratulationsPage)Commons.ApplicationContext.GetObject(typeof(CongratulationsPage).Name);
        }

    }
}
