using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Diagnostics;
using System.Threading;

namespace ConsoleApplication1
{
    class Program
    {
        static Process p;
        static void Main(string[] args)
        {
            p = new Process();
            // Redirect the output stream of the child process.
            p.StartInfo.UseShellExecute = false;
            p.StartInfo.RedirectStandardOutput = true;
            p.StartInfo.RedirectStandardInput = true;
            p.StartInfo.FileName = @"C:\Visual Studio 2010\Projects\ConsoleApplication2\ConsoleApplication2\bin\Debug\ConsoleApplication2.exe";
            p.Start();
            // Do not wait for the child process to exit before
            // reading to the end of its redirected stream.
            // p.WaitForExit();
            // Read the output stream first and then wait.
            new Thread (delegate()
            {
                Thread.Sleep(1000);
                Console.WriteLine("write to process");
                p.StandardInput.WriteLine("yaniv1");
            }).Start();
            string output = p.StandardOutput.ReadToEnd();
            p.WaitForExit();
            Console.Write(output);
            Console.Write("Press any key to end");
            Console.ReadKey();
        }

        //static public void WorkThreadFunction ()
        //{
        //    Thread.Sleep(1000);
        //    Console.WriteLine("write to process");
        //    p.StandardInput.WriteLine("yaniv1");
        //}
    }
}
