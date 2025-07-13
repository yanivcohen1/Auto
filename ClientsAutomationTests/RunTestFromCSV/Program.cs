using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Diagnostics;

namespace RunTestFromCSV
{
    class Program
    {
        static int Main(string[] args)
        {
            string filecontents = File.ReadAllText(args[2]);
            string batchString = " /resultsfile:" + args[1];//TestResult.trx";
            int i = 0;
            foreach (string line in filecontents.Split('\n'))
            {
                if (i != 0)
                {
                    if (line != "")
                    {
                        batchString = batchString + " /TestContainer:" + line.Split(',')[0];
                    }
                }
                i++;
            }
            //batchString = args[0] + " " + batchString;
            string[] _args = new string[2] {args[0], batchString };
            return run(_args);
        }

        public static int run(string[] args)
        {
            //"java" "-jar C:\\Temp\\runner.jar"
            Process p = new Process();
            //l_Running_Process = p;
            p.StartInfo.UseShellExecute = false;
            p.StartInfo.RedirectStandardOutput = true;
            p.StartInfo.FileName = args[0];// "cmd";
            try
            {
                p.StartInfo.Arguments = args[1];
            }
            catch (Exception) { }//java -jar C:\\Temp\\runner.jar";//@"/C C:\Temp\Eex.exe";//@"/C dir c:\";
            if (true)//(new_test.TestPath == "java.exe")
            {
                p.StartInfo.CreateNoWindow = false;
                //p.StartInfo.WindowStyle = ProcessWindowStyle.Minimized;
            }
            try
            {
                p.Start();
                Console.WriteLine(p.Id);
                p.OutputDataReceived += p_OutputDataReceived;
                p.BeginOutputReadLine();
                p.WaitForExit();
                //if (p.HasExited == false)
                //{
                //    //Process is still running.
                //    //Test to see if the process is hung up.
                //    if (p.Responding)
                //    //Process was responding; close the main window.
                //    {
                //        //TestResult = p.StandardOutput.ReadToEnd();
                //        p.CloseMainWindow();
                //        try
                //        {
                //            p.Kill();
                //        }
                //        catch (Exception) { }
                //        //return false;
                //    }
                //    else
                //    {
                //        //Process was not responding; force the process to close.
                //        p.Kill();
                //    }
                //    Environment.ExitCode = 1;
                //}
                //else
                //{
                    return p.ExitCode;
                //}
            }
            catch (Exception)
            {
                return 1;//error
            }
            //return p.ExitCode;
        }

        static void p_OutputDataReceived(object sender, DataReceivedEventArgs e)
        {
            Console.WriteLine(e.Data);
        }
    }
}
