using System;
using System.IO;

namespace ChangeFileCreationTime
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                //string path = @"C:\Jenkins\workspace\SendEmailReport\xml";
                string path = args[0];
                //File.Create(path);
                DirectoryInfo d = new DirectoryInfo(path);//Assuming Test is your Folder
                FileInfo[] Files = d.GetFiles("*.xml"); //Getting Text files
                foreach (FileInfo file in Files)
                {
                    File.SetLastWriteTime(file.FullName, DateTime.Now);
                }
                // Take an action that will affect the write time.
                //File.SetLastWriteTime(path, new DateTime(1985, 4, 3));

                // Get the creation time of a well-known directory.
                //DateTime dt = File.GetLastWriteTime(path);
                //Console.WriteLine("The last write time for this file was {0}.", dt);

                // Update the last write time.
                //File.SetLastWriteTime(path, DateTime.Now);
                //dt = File.GetLastWriteTime(path);
                //Console.WriteLine("The last write time for this file was {0}.", dt);

            }

            catch (Exception e)
            {
                Console.WriteLine("The process failed: {0}", e.ToString());
            }
        }
    }
}
