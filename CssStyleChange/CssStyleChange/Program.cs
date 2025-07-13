using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.VisualStudio.TestTools.UITesting;
using TestProject1;

namespace CssStyleChange
{
    class Program
    {
        static void Main(string[] args)
        {
            Playback.Initialize();
            CodedUITest1 test1 = new CodedUITest1();
            bool res = test1.CodedUITestMethod1();
            Playback.Cleanup();
            Console.Out.WriteLine(res);
            Console.ReadKey();
            //test1.UIMap.
        }
    }
}