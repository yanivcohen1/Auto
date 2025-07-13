using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
using System.IO;

namespace SendEmailReport
{
    class clsCompareDirInfo : IComparer
    {
        public int Compare(object x, object y)
        {
            //File1 = DirectCast(x, FileInfo);
            DirectoryInfo Dir1 = (DirectoryInfo)x;
            DirectoryInfo Dir2 = (DirectoryInfo)y;

            return DateTime.Compare(Dir1.LastWriteTime, Dir2.LastWriteTime);
        }
    }
}
