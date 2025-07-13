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
    /// the RegistrationChrome Page
    /// </summary>
    public class RegistrationChromePage : Automation_Lib
    {
        AutomationElement mainWindow;
        Condition nameCondition;

        protected string Next { get; set; }
        protected string FirstName { get; set; }
        protected string LastName { get; set; }
        protected string Email { get; set; }
        protected string Title { get; set; }
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
        protected string SecretQuestion { get; set; }

        //protected string Next1P { get; set; }
        //protected string Next2P { get; set; }
        //protected string FirstNameP { get; set; }
        //protected string LastNameP { get; set; }
        //protected string EmailP { get; set; }
        //protected string EmailVP { get; set; }
        //protected string TitleP { get; set; }
        //protected string DayOfBirthP { get; set; }
        //protected string MounthOfBirthP { get; set; }
        //protected string YearOfBirthP { get; set; }
        //protected string Address1P { get; set; }
        //protected string Address2P { get; set; }
        //protected string StateP { get; set; }
        //protected string PostalCodeP { get; set; }
        //protected string PhoneNumberP { get; set; }
        //protected string MobileNumberP { get; set; }
        //protected string SelectCountryP { get; set; }
        //protected string CityP { get; set; }
        //protected string CreateP { get; set; }
        //protected string SecretQuestionP { get; set; }
        //protected string AnswerP { get; set; }
        //protected string IagreeP { get; set; }

        /// <summary>
        /// Init the C:\SVN\BAU_Automation_Tests\trunk\ClientsAutomationTests\Clients\Clients\RgistrationPage.cs Page
        /// </summary>
        public RegistrationChromePage()
        {
            //nameCondition = new PropertyCondition(AutomationElement.NameProperty, "next >>");
            //mainWindow = waitforWindowNameClass("PTIODEVICE", nameCondition, 30, false);
            //setforgrandwindow(mainWindow);
        }

        /// <summary>
        /// Init the RegistrationChrome Page
        /// </summary>
        public void Init()
        {
            nameCondition = new PropertyCondition(AutomationElement.ClassNameProperty, "Chrome_RenderWidgetHostHWND");
            mainWindow = waitforWindowNameClass("PTIODEVICE", nameCondition, 30, false);
            setforgrandwindow(mainWindow);
            System.Windows.Point p = TrayClick(mainWindow);
            MouseClick(Convert.ToInt32(p.X + 20), Convert.ToInt32(p.Y));
            //ClickElement(mainWindow);
        }

        /// <summary>
        /// Fill the Registeration Data
        /// </summary>
        /// <returns></returns>
        public void RegisterDataFill() //https://msdn.microsoft.com/en-us/library/system.windows.forms.sendkeys(v=vs.110).aspx
        {
            Thread.Sleep(5000);
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{DOWN}");
            SendString("{Tab}");
            SendString(FirstName);//first name
            SendString("{Tab}");
            SendString(LastName);//last name
            SendString("{Tab}");
            SendString("{DOWN}");
            SendString("{Tab}");
            SendString("{DOWN}");
            SendString("{Tab}");
            SendString("{DOWN}");
            SendString("{Tab}");
            SendString(" ");//gemder
            SendString("{Tab}");
            SendString(Email);//email
            SendString("{Tab}");
            SendString(Email);//email
            SendString("{Tab}");
            SendString("{ENTER}");
        }

        /// <summary>
        /// Next page Fill the Registeration Data
        /// </summary>
        /// <returns></returns>
        public void RegisterDataFillNextPage()
        {
            Thread.Sleep(2000);
            SendString(Address);//Address
            Thread.Sleep(400);
            SendString("{Tab}");
            Thread.Sleep(400);
            SendString("{Tab}");
            Thread.Sleep(400);
            SendString(State);//State
            Thread.Sleep(400);
            SendString("{Tab}");
            Thread.Sleep(400);
            SendString(City);
            Thread.Sleep(400);
            SendString("{Tab}");
            Thread.Sleep(400);
            SendString(PostalCode);
            Thread.Sleep(400);
            SendString("{Tab}");
            Thread.Sleep(400);
            SendString(PhoneNumber);//phone
            Thread.Sleep(400);
            SendString("{Tab}");
            Thread.Sleep(400);
            SendString(MobileNumber);//MobileNumber
            Thread.Sleep(400);
            SendString("{Tab}");
            Thread.Sleep(400);
            SendString("{Tab}");
            Thread.Sleep(400);
            SendString("{ENTER}");
            //WriteText(editControls[0], Address);//Address
            //WriteText(editControls[1], State);//State

            //WriteText(editControls[3], PostalCode);//postal code
            //WriteText(editControls[4], PhoneNumber);//Phone number
            //WriteText(editControls[5], MobileNumber);//mobile number
            //SelectListItemBySendText(comboControls[0], SelectCountry);//select country
            //WriteText(editControls[2], City);//city
            //AutomationElement buttenControl = mainWindow.FindFirst(TreeScope.Element | TreeScope.Descendants, nameCondition);
            //Thread.Sleep(400);
            //ClickElement(buttenControl);//Next
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

        public CongratulationsPage RegisterDataFillLastPageSec()
        {
           Thread.Sleep(2000);
            SendString(Password);//Address
            SendString("{Tab}");
            SendString(Password);//State
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{DOWN}");
            SendString("{Tab}");
            SendString("test"); //answer
            SendString("{Tab}");
            SendString(" ");//phone
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{ENTER}");
            Thread.Sleep(10000);
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{Tab}");
            SendString("{ENTER}");//cotinue
            return (CongratulationsPage)Commons.ApplicationContext.GetObject(typeof(CongratulationsPage).Name);
        }

    }
}
