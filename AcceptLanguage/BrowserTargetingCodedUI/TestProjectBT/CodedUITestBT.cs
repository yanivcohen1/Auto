﻿using System;
using System.Collections.Generic;
using System.Drawing;
using System.Text.RegularExpressions;
using System.Windows.Forms;
using System.Windows.Input;
using Microsoft.VisualStudio.TestTools.UITest.Extension;
using Microsoft.VisualStudio.TestTools.UITesting;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Win32;

//using TestProjectBT;
//using TestProjectBT;

//using TestProjectBT;
using Keyboard = Microsoft.VisualStudio.TestTools.UITesting.Keyboard;

namespace BrowserTargeting
{
    //public class RunTest
    //{
    //    CodedUITestBT CuiT = new CodedUITestBT();

    //    public bool CodedUITestMethod(string URL, string AL)
    //    {
    //        CuiT.CodedUITestMethod1(URL, AL);
    //        return true;
    //    }
    //}

    /// <summary>
    /// Summary description for CodedUITestBT2
    /// </summary>
    [CodedUITest]
    public class CodedUITestBT
    {
        public CodedUITestBT()
        {
        }

        [TestMethod]
        public void CodedUITestBT1()
        {
            // To generate code for this test, select "Generate Code for Coded UI Test" from the shortcut menu and select one of the menu items.
            // For more information on generated code, see http://go.microsoft.com/fwlink/?LinkId=179463
            //BT_TestParams bt = new BT_TestParams();
            //bt.UIBlankPageWindowsInteWindowUrl1 = URL;
            //UIMap.BT_TestParams.UIBlankPageWindowsInteWindowUrl1 = URL;
            //
            UIMap.BT_Test3();
        }

        #region Additional test attributes

        // You can use the following additional attributes as you write your tests:

        ////Use TestInitialize to run code before running each test
        //[TestInitialize()]
        //public void MyTestInitialize()
        //{
        //    // To generate code for this test, select "Generate Code for Coded UI Test" from the shortcut menu and select one of the menu items.
        //    // For more information on generated code, see http://go.microsoft.com/fwlink/?LinkId=179463
        //}

        ////Use TestCleanup to run code after each test has run
        //[TestCleanup()]
        //public void MyTestCleanup()
        //{
        //    // To generate code for this test, select "Generate Code for Coded UI Test" from the shortcut menu and select one of the menu items.
        //    // For more information on generated code, see http://go.microsoft.com/fwlink/?LinkId=179463
        //}

        #endregion Additional test attributes

        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the current test run.
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }

        private TestContext testContextInstance;

        public UIMap UIMap
        {
            get
            {
                if ((this.map == null))
                {
                    this.map = new UIMap();
                }

                return this.map;
            }
        }

        private UIMap map;
    }
}