using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace GeneralTest
{
    class clsCompareFileInfo : IComparer
    {
        public int Compare(object x, object y)
        {
            FileInfo File1;
            FileInfo File2;
            //File1 = DirectCast(x, FileInfo);
            File1 = (FileInfo)x;
            File2 = (FileInfo)y;

            return DateTime.Compare(File1.LastWriteTime, File2.LastWriteTime);
        }
    }
}