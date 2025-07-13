using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            string res = "";
            QTP_lib.QTP QTP1 = new QTP_lib.QTP();
            QTP1.RunTest(@"C:\Tests\AutoLoginTest", out res, null, 3600);
        }
    }
}