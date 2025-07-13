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
    public class Registration21novaPage : Automation_Lib
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
        protected string Gender { get; set; }
        protected string WinClass { get; set; }

        /// <summary>
        /// Fill the Registeration Data
        /// </summary>
        /// <returns></returns>
        public PopupMsgPage RegisterDataFill(string userName)
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
            WriteText(editControls[5], Address);//Address
            WriteText(editControls[4], City);//city
            WriteText(editControls[6], PostalCode);//postal code
            WriteText(editControls[8], MobileNumber);//mobile number
            //string passwordPath = _rootPath + passwordFileName;
            //string password = File.ReadAllText(passwordPath);
            //string newPassword = Convert.ToString(Convert.ToInt32(password) + 1);
            WriteText(editControls[9], userName);//user name
            //File.WriteAllText(passwordPath, newPassword);
            WriteText(editControls[10], Password);//password
            WriteText(editControls[11], Password);//password
            Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection comboControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            SelectListItem(comboControls[0], Gender);//select Mr / "Herr"
            SelectListItem(comboControls[4], SelectCountry);//select country
            SelectListItem(comboControls[1], DayOfBirth);//day of birth
            SelectListItem(comboControls[2], MounthOfBirth);//mounth of birth
            SelectListItem(comboControls[3], YearOfBirth);//year of birth
            Condition checkBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "check box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection checkControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, checkBoxCondition);
            ClickElement(checkControls[0]);//I agree
            ClickElement(checkControls[1]);//don't want bomus
            //Condition nameCondition = new PropertyCondition(AutomationElement.NameProperty, "Create Account");
            AutomationElement buttenControl = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
            Thread.Sleep(400);
            ClickElement(buttenControl);//Create Account
            //return (Congratulations21novaPage)Commons.ApplicationContext.GetObject(typeof(Congratulations21novaPage).Name);
            return (PopupMsgPage)Commons.ApplicationContext.GetObject(typeof(PopupMsgPage).Name);
        }

        /// <summary>
        /// Fill the Registeration Data
        /// </summary>
        /// <returns></returns>
        public void RegisterDataFillNew(string userName)
        {
            Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, CreateAccount);
            AutomationElement mainWindow = waitforWindowNameClass(WinClass, controlNameCondition, 30, false);
            System.Windows.Point p = new System.Windows.Point();
            //Condition checkBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "check box", PropertyConditionFlags.IgnoreCase);
            //AutomationElementCollection checkControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, checkBoxCondition);
            for (int i = 0; i < 20; i++)
            {
                try
                {
                    AutomationElement control = waitforWindowNameClassRetCtrl(WinClass, controlNameCondition, 20, false);//PT_installerTopFramWnd30_0
                    //AutomationElementCollection control = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, controlNameCondition);//TreeScope.Children
                    //string automationID = control.Current.AutomationId;
                    //control = FindControlById(control);//RootElement.FindFirst(TreeScope.Descendants,
                    //new PropertyCondition(AutomationElement.AutomationIdProperty, automationID));
                    //waitforWindowNameClassRetCtrl()
                    //Console.WriteLine(controls.Count);
                    setforgrandwindow(mainWindow);
                    Thread.Sleep(1000);
                    ClickElement(mainWindow);
                    //ClickElement(FindControlById(checkControls[0]));//I agree 
                    p = TrayClick(control);
                    break;
                }
                catch (Exception)
                {
                    if (i == 19)
                    {
                        throw new System.ArgumentException("Window can't find ", WinClass + " param:" + ((PropertyCondition)((AndCondition)controlNameCondition).GetConditions()[0]).Value);
                    }
                }
            }
            //setforgrandwindow(mainWindow);
            //Thread.Sleep(1000);
            Condition editCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "edit", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection editControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, editCondition);
            WriteText(editControls[0], FirstName);//first name
            WriteText(editControls[1], LastName);//last name
            WriteText(editControls[2], Email);//email
            //WriteText(editControls[3], Email);//email
            WriteText(editControls[3], Address);//Address
            WriteText(editControls[4], City);//city
            WriteText(editControls[5], PostalCode);//postal code
            WriteText(editControls[6], MobileNumber);//mobile number
            WriteText(editControls[7], userName);//user name
            WriteText(editControls[8], Password);//password
            WriteText(editControls[9], Password);//password
            Condition comboBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "combo box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection comboControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, comboBoxCondition);
            SelectListItem(comboControls[4], SelectCountry);//select country
            //SelectListItem(comboControls[0], DayOfBirth);//day of birth
            SelectListItem(comboControls[1], DayOfBirth);//day of birth
            SelectListItem(comboControls[2], MounthOfBirth);//mounth of birth
            SelectListItem(comboControls[3], YearOfBirth);//year of birth
            PropertyCondition checkBoxCondition = new PropertyCondition(AutomationElement.LocalizedControlTypeProperty, "check box", PropertyConditionFlags.IgnoreCase);
            AutomationElementCollection checkControls = mainWindow.FindAll(TreeScope.Element | TreeScope.Descendants, checkBoxCondition);
            ClickElement(checkControls[1]);//I agree
            MouseClick(Convert.ToInt32(p.X), Convert.ToInt32(p.Y));//Create Account
            //ClickElement(buttenControl);//Create Account
            CloseMsg();
            //return (CongratulationsEuroPage)Commons.ApplicationContext.GetObject(typeof(CongratulationsEuroPage).Name);
        }

        /// <summary>
        /// Fill the Registeration Data
        /// </summary>
        /// <returns></returns>
        public GameModePage RegisterDataFillChrome(string userName)
        {
            //Cashier form
            PropertyCondition nameCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "Chrome_RenderWidgetHostHWND");
            AutomationElement mainWindow = waitforWindowNameClass("PTIODEVICE", nameCondition, 30, false);
            setforgrandwindow(mainWindow);
            //System.Windows.Point p = TrayClick(mainWindow);
            System.Windows.Point p = mainWindow.Current.BoundingRectangle.Location;
            MouseClick(Convert.ToInt32(p.X + 700), Convert.ToInt32(p.Y + 437));
            MouseClick(Convert.ToInt32(p.X + 10), Convert.ToInt32(p.Y + 40));
            Thread.Sleep(5000);
            SendString("{Tab}");
            SendString("{DOWN}");//Mr
            SendString("{Tab}");
            SendString("{Tab}");
            SendString(FirstName);
            SendString("{Tab}");
            SendString(LastName);
            SendString("{Tab}");
            SendString("{DOWN}");//01
            SendString("{Tab}");
            SendString("{DOWN}");//january
            SendString("{Tab}");
            SendString("{DOWN}");//1997
            //SendString("{Tab}");
            //SendString("{DOWN}");//Mr
            SendString("{Tab}");
            SendString(Email);
            SendString("{Tab}");
            SendString("{Tab}");
            SendString(City);
            SendString("{Tab}");
            SendString(Address);
            SendString("{Tab}");
            SendString(PostalCode);
            SendString("{Tab}");
            SendString("{Tab}");
            SendString(MobileNumber);
            SendString("{Tab}");
            SendString(userName);
            SendString("{Tab}");
            SendString(Password);
            SendString("{Tab}");
            SendString(Password);
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            //SendString("{Tab}");
            SendString(" ");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            //MouseClick(Convert.ToInt32(p.X + 700), Convert.ToInt32(p.Y + 561));
            Thread.Sleep(1500);
            //MouseClick(Convert.ToInt32(p.X + 700), Convert.ToInt32(p.Y + 561));
            SendString("{ENTER}");
            return (GameModePage)Commons.ApplicationContext.GetObject(typeof(GameModePage).Name);
        }

        private void CloseMsg()
        {
            try
            {
                Condition controlNameCondition = new PropertyCondition(AutomationElement.NameProperty, "OK");
                AutomationElement _mainWindow = waitforWindowNameClass("#32770", controlNameCondition, 20, false);//dialog
                AutomationElement control = _mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, controlNameCondition);
                ClickElement(control);
            }
            catch (Exception) { }
        }

        private System.Windows.Point TrayClick(AutomationElement automationElement)
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

    }
}
