using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJSAuthentication.API.Models
{
    public class TestsSuite
    {

        public int TestId { get; set; }
        public Nullable<int> SuiteId { get; set; }
        public string TestName { get; set; }
        public string classesName { get; set; }
        public string parametersName { get; set; }
        public string parametersValue { get; set; }
        public string suiteName { get; set; }
        public List<TestsSuite> Testss { get; set; }

        public void setTests(List<test> tests, List<string> suiteName)
        {
            List<TestsSuite> testss = new List<TestsSuite>();
            int i = 0;
            foreach (var test in tests)
            {
                TestsSuite Test = new TestsSuite();
                Test.TestId = test.TestId;
                Test.SuiteId = test.SuiteId;
                Test.TestName = test.TestName;
                Test.classesName = test.classesName;
                Test.parametersName = test.parametersName;
                Test.parametersValue = test.parametersValue;
                Test.parametersValue = test.parametersValue;
                Test.suiteName = suiteName[i];
                testss.Add(Test);
                i++;
            }
            Testss = testss;
        }
    }
}