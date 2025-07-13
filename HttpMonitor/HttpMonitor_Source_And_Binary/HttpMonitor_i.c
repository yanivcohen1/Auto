

/* this ALWAYS GENERATED file contains the IIDs and CLSIDs */

/* link this file in with the server and any clients */


 /* File created by MIDL compiler version 7.00.0555 */
/* at Mon Feb 27 18:05:33 2012
 */
/* Compiler settings for HttpMonitor.idl:
    Oicf, W1, Zp8, env=Win32 (32b run), target_arch=X86 7.00.0555 
    protocol : dce , ms_ext, c_ext, robust
    error checks: allocation ref bounds_check enum stub_data 
    VC __declspec() decoration level: 
         __declspec(uuid()), __declspec(selectany), __declspec(novtable)
         DECLSPEC_UUID(), MIDL_INTERFACE()
*/
/* @@MIDL_FILE_HEADING(  ) */

#pragma warning( disable: 4049 )  /* more than 64k source lines */


#ifdef __cplusplus
extern "C"{
#endif 


#include <rpc.h>
#include <rpcndr.h>

#ifdef _MIDL_USE_GUIDDEF_

#ifndef INITGUID
#define INITGUID
#include <guiddef.h>
#undef INITGUID
#else
#include <guiddef.h>
#endif

#define MIDL_DEFINE_GUID(type,name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8) \
        DEFINE_GUID(name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8)

#else // !_MIDL_USE_GUIDDEF_

#ifndef __IID_DEFINED__
#define __IID_DEFINED__

typedef struct _IID
{
    unsigned long x;
    unsigned short s1;
    unsigned short s2;
    unsigned char  c[8];
} IID;

#endif // __IID_DEFINED__

#ifndef CLSID_DEFINED
#define CLSID_DEFINED
typedef IID CLSID;
#endif // CLSID_DEFINED

#define MIDL_DEFINE_GUID(type,name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8) \
        const type name = {l,w1,w2,{b1,b2,b3,b4,b5,b6,b7,b8}}

#endif !_MIDL_USE_GUIDDEF_

MIDL_DEFINE_GUID(IID, IID_IHttpMon,0x1DDEADAB,0x4555,0x4880,0xAA,0xEB,0xC5,0x64,0xD6,0xE8,0xD2,0x22);


MIDL_DEFINE_GUID(IID, LIBID_HttpMonitorLib,0x4C05CC35,0x4113,0x4626,0x83,0x3A,0xDC,0x1C,0x23,0x11,0x84,0xCC);


MIDL_DEFINE_GUID(IID, DIID__IHttpMonEvents,0xE1127FDE,0x80F7,0x4E86,0xA6,0x01,0x71,0xBB,0x88,0x5C,0xE9,0xDA);


MIDL_DEFINE_GUID(CLSID, CLSID_HttpMon,0xD5DEA129,0xC130,0x4268,0xA3,0xAB,0x14,0xCE,0xD6,0x9E,0x05,0x2D);

#undef MIDL_DEFINE_GUID

#ifdef __cplusplus
}
#endif



