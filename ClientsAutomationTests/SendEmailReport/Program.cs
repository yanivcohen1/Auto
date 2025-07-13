using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net.Mail;
using System.Net.Mime;
using System.IO;

namespace SendEmailReport
{
    class Program
    {
        static void Main(string[] args)
        {
            string MailContent = File.ReadAllText(args[0]);
            string Subject = "Automation Report ";
            string[] Attacments = null;// new string[] { args[0] };
            string[] To = new string[args.Length-2];
            for (int i = 0; i < args.Length - 2; i++)
            {
                To[i] = args[i + 2];
            }
            if (args[1].ToLower() == "0")
            {
                Subject = Subject + "- All Tests Pass";
            }
            else
            {
                Subject = Subject + "- Some Tests Fail";
                Attacments = ReadAllPicInLastDir(Directory.GetCurrentDirectory());//(Path.GetDirectoryName(args[0]));
            }
            
            //string[] To = new string[] { "Pavel.Yampolsky@williamhill.com" };
            //new string[] { "Pavel.Yampolsky@williamhill.com" , "Yaniv.Cohen@williamhill.com"};
            SendMail(To, null, Subject, MailContent, Attacments);
            //Commons.SendSMS(new string[] { "0543933405" }, SMSContent);
        }

        public static bool SendMail(string[] To, string[] CC, string Subject,
                         string Content, string[] AttachFiles)
        {
            MailMessage message = new MailMessage();
            message.From = new MailAddress("Automation-NoReply@williamhill.com");//Automation@ad-gency.com
            foreach (var to in To)
            {
                message.To.Add(new MailAddress(to));
            }
            //message.CC.Add(new MailAddress("carboncopy@foo.bar.com"));
            message.Subject = Subject;// "This is my subject";
            //message.Body = Content;// "This is the content";
            if (AttachFiles != null)
            {
                foreach (var file in AttachFiles)
                {
                    try
                    {
                        Attachment data = new Attachment(file, MediaTypeNames.Application.Octet);
                        // Add time stamp information for the file.
                        //ContentDisposition disposition = data.ContentDisposition;
                        //disposition.CreationDate = System.IO.File.GetCreationTime(file);
                        //disposition.ModificationDate = System.IO.File.GetLastWriteTime(file);
                        //disposition.ReadDate = System.IO.File.GetLastAccessTime(file);
                        message.Attachments.Add(data);
                    }
                    catch (Exception){ }
                }
            }
            message.IsBodyHtml = true;
            message.Body = Content;//File.ReadAllText(AttachFiles[0]);
            SmtpClient client = new SmtpClient("10.117.0.16");//10.117.0.10
            try
            {
                client.Send(message);
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        private static string[] ReadAllPicInLastDir(string path)
        {
            DirectoryInfo dirinfo = new DirectoryInfo(path);//(@"C:\SVN\BAU_Automation_Tests\ClientsAutomationTests\TestBuild\");
            DirectoryInfo[] allDirectorys = dirinfo.GetDirectories();
            Array.Sort(allDirectorys, new clsCompareDirInfo());
            //For Each fl As FileInfo In allFiles
            DirectoryInfo LastDir = allDirectorys[allDirectorys.Length - 1];
            string DirPath = LastDir.FullName + @"\Out\";
            LastDir = new DirectoryInfo(DirPath);
            FileInfo[] allFiles = LastDir.GetFiles("*.png");
            string[] AttachFile = new string[allFiles.Length + 1];
            for (int i = 0; i < allFiles.Length; i++)
            {
                AttachFile[i] = allFiles[i].FullName;
                Console.WriteLine(AttachFile[i]);
                //Trace.Write(AttachFile[i]);
            }
            AttachFile[allFiles.Length] = LastDir + @"Error.log";
            return AttachFile;
            //Trace.Write(AttachFile);
            //Console.ReadKey();
        }

    }
}
