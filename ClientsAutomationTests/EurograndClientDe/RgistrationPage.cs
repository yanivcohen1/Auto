using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutomationLib;
using System.Windows.Automation;
using System.Threading;
using System.Windows.Forms;
using System.IO;

namespace EurograndClientDe
{
    /// <summary>
    /// the Registration Page
    /// </summary>
    public class RegistrationPage : Automation_Lib
    {
        AutomationElement mainWindow;

        /// <summary>
        /// Fill the Registeration Data
        /// </summary>
        /// <returns></returns>
        public CongratulationsPage RegisterDataFill()
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "Konto eröffnen");
            mainWindow = waitforWindowNameClass("PTIODEVICE", controlNameCondition, 30, false);
            setforgrandwindow(mainWindow);
            //Thread.Sleep(1000);
            Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection editControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            WriteText(editControls[0], "WHO");//first name
            WriteText(editControls[1], "QA");//last name
            WriteText(editControls[2], "test@playtech.com");//email
            WriteText(editControls[3], "test@playtech.com");//email
            WriteText(editControls[4], "Addr");//Address
            WriteText(editControls[5], "city");//city
            WriteText(editControls[6], "1234");//postal code
            WriteText(editControls[7], "1234567");//mobile number
            string passwordPath = _rootPath + "/EurograndClientDe/PasswordEuro.txt";
            string password = File.ReadAllText(passwordPath);
            string newPassword = Convert.ToString(Convert.ToInt32(password)+1);
            WriteText(editControls[8], "YANQADE" + _userName + newPassword);//user name
            File.WriteAllText(passwordPath, newPassword);
            WriteText(editControls[9], "123456");//password
            WriteText(editControls[10], "123456");//password
            Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection comboControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            SelectListItem(comboControls[3], "United Kingdom");//select country
            SelectListItem(comboControls[0], "1");//day of birth
            SelectListItem(comboControls[1], "1");//mounth of birth
            SelectListItem(comboControls[2], "1973");//year of birth
            Condition checkBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "check box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection checkControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, checkBoxCondition);
            ClickElement(checkControls[0]);//I agree
            ClickElement(checkControls[1]);//don't want bomus
            Condition nameCondition = new PropertyCondition(AutomationElement.NameProperty, "Konto eröffnen");
            AutomationElement buttenControl = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, nameCondition);
            Thread.Sleep(400);
            ClickElement(buttenControl);//Create Account
            return new CongratulationsPage();
        }

    }
}
