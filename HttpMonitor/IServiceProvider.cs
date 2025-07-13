using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.InteropServices;

namespace Demo
{
    [ComImport]
    [Guid("6d5140c1-7436-11ce-8034-00aa006009fa")]
    [InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
    public interface IServiceProvider
    {
        void QueryService(ref Guid guidService, ref Guid riid, [MarshalAs(UnmanagedType.Interface)] out object ppvObject);
    }
}
