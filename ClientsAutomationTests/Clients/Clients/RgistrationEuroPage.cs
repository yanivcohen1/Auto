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
    public class RegistrationEuroPage : Automation_Lib
    {
        protected string CreateAccount { get; set; }
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
        protected string UserName { get; set; }

        /// <summary>
        /// Fill the Registeration Data
        /// </summary>
        /// <returns></returns>
        public CongratulationsEuroPage RegisterDataFill(string passwordFileName)
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, CreateAccount);
            AutomationElement mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            setforgrandwindow(mainWindow);
            //Thread.Sleep(1000);
            Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection editControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            WriteText(editControls[0], FirstName);//first name
            WriteText(editControls[1], LastName);//last name
            WriteText(editControls[2], Email);//email
            WriteText(editControls[3], Email);//email
            WriteText(editControls[4], Address);//Address
            WriteText(editControls[5], City);//city
            WriteText(editControls[6], PostalCode);//postal code
            WriteText(editControls[7], MobileNumber);//mobile number
            string passwordPath = _rootPath + passwordFileName;
            string password = File.ReadAllText(passwordPath);
            string newPassword = Convert.ToString(Convert.ToInt32(password) + 1);
            WriteText(editControls[8], UserName + _userName + newPassword);//user name
            File.WriteAllText(passwordPath, newPassword);
            WriteText(editControls[9], Password);//password
            WriteText(editControls[10], Password);//password
            Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection comboControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            SelectListItem(comboControls[3], SelectCountry);//select country
            SelectListItem(comboControls[0], DayOfBirth);//day of birth
            SelectListItem(comboControls[1], MounthOfBirth);//mounth of birth
            SelectListItem(comboControls[2], YearOfBirth);//year of birth
            Condition checkBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "check box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection checkControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, checkBoxCondition);
            ClickElement(checkControls[0]);//I agree
            ClickElement(checkControls[1]);//don't want bomus
            //Condition nameCondition = new PropertyCondition(AutomationElement.NameProperty, "Create Account");
            AutomationElement buttenControl = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            Thread.Sleep(400);
            ClickElement(buttenControl);//Create Account
            return (CongratulationsEuroPage)Commons.ApplicationContext.GetObject(typeof(CongratulationsEuroPage).Name);
        }

    }
}
