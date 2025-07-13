using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Diagnostics;

namespace GeneralTest
{
    class ReadAllPicInLastDir
    {
        static void Main1(string[] args)
        {
            DirectoryInfo dirinfo = new DirectoryInfo(@"C:\SVN\BAU_Automation_Tests\ClientsAutomationTests\TestBuild\");
            DirectoryInfo[] allDirectorys = dirinfo.GetDirectories();
            Array.Sort(allDirectorys, new clsCompareDirInfo());
            //For Each fl As FileInfo In allFiles
            DirectoryInfo LastDir = allDirectorys[allDirectorys.Length - 1];
            string DirPath = LastDir.FullName + "/Out/";
            LastDir = new DirectoryInfo(DirPath);
            FileInfo[] allFiles = LastDir.GetFiles("*.png");
            string[] AttachFile = new string[allFiles.Length];
            for (int i = 0; i < allFiles.Length; i++)
            {
                AttachFile[i] = allFiles[i].FullName;
                Console.WriteLine(AttachFile[i]);
                Trace.Write(AttachFile[i]);
            }
            //Trace.Write(AttachFile);
            Console.ReadKey();
        }
    }
}
