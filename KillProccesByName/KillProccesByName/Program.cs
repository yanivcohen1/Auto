using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;

namespace KillProccesByName
{
    class Program
    {
        static void Main(string[] args)
        {
            Process[] Procs = Process.GetProcesses();
            bool find = false;
            foreach (var Proc in Procs)
            {
                try
                {
                    if (Path.GetFileName(Proc.MainModule.FileName).ToLower() == args[0].Trim().ToLower())
                    {
                        find = true;
                        Proc.Kill();
                        //break;
                    }
                }
                catch (Exception)
                { }
            }
            Console.Out.WriteLine(find.ToString());
        }
    }
}