

/* this ALWAYS GENERATED file contains the definitions for the interfaces */


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


/* verify that the <rpcndr.h> version is high enough to compile this file*/
#ifndef __REQUIRED_RPCNDR_H_VERSION__
#define __REQUIRED_RPCNDR_H_VERSION__ 475
#endif

#include "rpc.h"
#include "rpcndr.h"

#ifndef __RPCNDR_H_VERSION__
#error this stub requires an updated version of <rpcndr.h>
#endif // __RPCNDR_H_VERSION__

#ifndef COM_NO_WINDOWS_H
#include "windows.h"
#include "ole2.h"
#endif /*COM_NO_WINDOWS_H*/

#ifndef __HttpMonitor_i_h__
#define __HttpMonitor_i_h__

#if defined(_MSC_VER) && (_MSC_VER >= 1020)
#pragma once
#endif

/* Forward Declarations */ 

#ifndef __IHttpMon_FWD_DEFINED__
#define __IHttpMon_FWD_DEFINED__
typedef interface IHttpMon IHttpMon;
#endif 	/* __IHttpMon_FWD_DEFINED__ */


#ifndef ___IHttpMonEvents_FWD_DEFINED__
#define ___IHttpMonEvents_FWD_DEFINED__
typedef interface _IHttpMonEvents _IHttpMonEvents;
#endif 	/* ___IHttpMonEvents_FWD_DEFINED__ */


#ifndef __HttpMon_FWD_DEFINED__
#define __HttpMon_FWD_DEFINED__

#ifdef __cplusplus
typedef class HttpMon HttpMon;
#else
typedef struct HttpMon HttpMon;
#endif /* __cplusplus */

#endif 	/* __HttpMon_FWD_DEFINED__ */


/* header files for imported files */
#include "oaidl.h"
#include "ocidl.h"

#ifdef __cplusplus
extern "C"{
#endif 


#ifndef __IHttpMon_INTERFACE_DEFINED__
#define __IHttpMon_INTERFACE_DEFINED__

/* interface IHttpMon */
/* [unique][helpstring][nonextensible][dual][uuid][object] */ 


EXTERN_C const IID IID_IHttpMon;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("1DDEADAB-4555-4880-AAEB-C564D6E8D222")
    IHttpMon : public IDispatch
    {
    public:
        virtual /* [helpstring][id][propget] */ HRESULT STDMETHODCALLTYPE get_IEWindow( 
            /* [retval][out] */ LONG *pVal) = 0;
        
        virtual /* [helpstring][id][propput] */ HRESULT STDMETHODCALLTYPE put_IEWindow( 
            /* [in] */ LONG newVal) = 0;
        
    };
    
#else 	/* C style interface */

    typedef struct IHttpMonVtbl
    {
        BEGIN_INTERFACE
        
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            IHttpMon * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            __RPC__deref_out  void **ppvObject);
        
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            IHttpMon * This);
        
        ULONG ( STDMETHODCALLTYPE *Release )( 
            IHttpMon * This);
        
        HRESULT ( STDMETHODCALLTYPE *GetTypeInfoCount )( 
            IHttpMon * This,
            /* [out] */ UINT *pctinfo);
        
        HRESULT ( STDMETHODCALLTYPE *GetTypeInfo )( 
            IHttpMon * This,
            /* [in] */ UINT iTInfo,
            /* [in] */ LCID lcid,
            /* [out] */ ITypeInfo **ppTInfo);
        
        HRESULT ( STDMETHODCALLTYPE *GetIDsOfNames )( 
            IHttpMon * This,
            /* [in] */ REFIID riid,
            /* [size_is][in] */ LPOLESTR *rgszNames,
            /* [range][in] */ UINT cNames,
            /* [in] */ LCID lcid,
            /* [size_is][out] */ DISPID *rgDispId);
        
        /* [local] */ HRESULT ( STDMETHODCALLTYPE *Invoke )( 
            IHttpMon * This,
            /* [in] */ DISPID dispIdMember,
            /* [in] */ REFIID riid,
            /* [in] */ LCID lcid,
            /* [in] */ WORD wFlags,
            /* [out][in] */ DISPPARAMS *pDispParams,
            /* [out] */ VARIANT *pVarResult,
            /* [out] */ EXCEPINFO *pExcepInfo,
            /* [out] */ UINT *puArgErr);
        
        /* [helpstring][id][propget] */ HRESULT ( STDMETHODCALLTYPE *get_IEWindow )( 
            IHttpMon * This,
            /* [retval][out] */ LONG *pVal);
        
        /* [helpstring][id][propput] */ HRESULT ( STDMETHODCALLTYPE *put_IEWindow )( 
            IHttpMon * This,
            /* [in] */ LONG newVal);
        
        END_INTERFACE
    } IHttpMonVtbl;

    interface IHttpMon
    {
        CONST_VTBL struct IHttpMonVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IHttpMon_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define IHttpMon_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define IHttpMon_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define IHttpMon_GetTypeInfoCount(This,pctinfo)	\
    ( (This)->lpVtbl -> GetTypeInfoCount(This,pctinfo) ) 

#define IHttpMon_GetTypeInfo(This,iTInfo,lcid,ppTInfo)	\
    ( (This)->lpVtbl -> GetTypeInfo(This,iTInfo,lcid,ppTInfo) ) 

#define IHttpMon_GetIDsOfNames(This,riid,rgszNames,cNames,lcid,rgDispId)	\
    ( (This)->lpVtbl -> GetIDsOfNames(This,riid,rgszNames,cNames,lcid,rgDispId) ) 

#define IHttpMon_Invoke(This,dispIdMember,riid,lcid,wFlags,pDispParams,pVarResult,pExcepInfo,puArgErr)	\
    ( (This)->lpVtbl -> Invoke(This,dispIdMember,riid,lcid,wFlags,pDispParams,pVarResult,pExcepInfo,puArgErr) ) 


#define IHttpMon_get_IEWindow(This,pVal)	\
    ( (This)->lpVtbl -> get_IEWindow(This,pVal) ) 

#define IHttpMon_put_IEWindow(This,newVal)	\
    ( (This)->lpVtbl -> put_IEWindow(This,newVal) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */




#endif 	/* __IHttpMon_INTERFACE_DEFINED__ */



#ifndef __HttpMonitorLib_LIBRARY_DEFINED__
#define __HttpMonitorLib_LIBRARY_DEFINED__

/* library HttpMonitorLib */
/* [helpstring][version][uuid] */ 


EXTERN_C const IID LIBID_HttpMonitorLib;

#ifndef ___IHttpMonEvents_DISPINTERFACE_DEFINED__
#define ___IHttpMonEvents_DISPINTERFACE_DEFINED__

/* dispinterface _IHttpMonEvents */
/* [helpstring][uuid] */ 


EXTERN_C const IID DIID__IHttpMonEvents;

#if defined(__cplusplus) && !defined(CINTERFACE)

    MIDL_INTERFACE("E1127FDE-80F7-4E86-A601-71BB885CE9DA")
    _IHttpMonEvents : public IDispatch
    {
    };
    
#else 	/* C style interface */

    typedef struct _IHttpMonEventsVtbl
    {
        BEGIN_INTERFACE
        
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            _IHttpMonEvents * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            __RPC__deref_out  void **ppvObject);
        
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            _IHttpMonEvents * This);
        
        ULONG ( STDMETHODCALLTYPE *Release )( 
            _IHttpMonEvents * This);
        
        HRESULT ( STDMETHODCALLTYPE *GetTypeInfoCount )( 
            _IHttpMonEvents * This,
            /* [out] */ UINT *pctinfo);
        
        HRESULT ( STDMETHODCALLTYPE *GetTypeInfo )( 
            _IHttpMonEvents * This,
            /* [in] */ UINT iTInfo,
            /* [in] */ LCID lcid,
            /* [out] */ ITypeInfo **ppTInfo);
        
        HRESULT ( STDMETHODCALLTYPE *GetIDsOfNames )( 
            _IHttpMonEvents * This,
            /* [in] */ REFIID riid,
            /* [size_is][in] */ LPOLESTR *rgszNames,
            /* [range][in] */ UINT cNames,
            /* [in] */ LCID lcid,
            /* [size_is][out] */ DISPID *rgDispId);
        
        /* [local] */ HRESULT ( STDMETHODCALLTYPE *Invoke )( 
            _IHttpMonEvents * This,
            /* [in] */ DISPID dispIdMember,
            /* [in] */ REFIID riid,
            /* [in] */ LCID lcid,
            /* [in] */ WORD wFlags,
            /* [out][in] */ DISPPARAMS *pDispParams,
            /* [out] */ VARIANT *pVarResult,
            /* [out] */ EXCEPINFO *pExcepInfo,
            /* [out] */ UINT *puArgErr);
        
        END_INTERFACE
    } _IHttpMonEventsVtbl;

    interface _IHttpMonEvents
    {
        CONST_VTBL struct _IHttpMonEventsVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define _IHttpMonEvents_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define _IHttpMonEvents_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define _IHttpMonEvents_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define _IHttpMonEvents_GetTypeInfoCount(This,pctinfo)	\
    ( (This)->lpVtbl -> GetTypeInfoCount(This,pctinfo) ) 

#define _IHttpMonEvents_GetTypeInfo(This,iTInfo,lcid,ppTInfo)	\
    ( (This)->lpVtbl -> GetTypeInfo(This,iTInfo,lcid,ppTInfo) ) 

#define _IHttpMonEvents_GetIDsOfNames(This,riid,rgszNames,cNames,lcid,rgDispId)	\
    ( (This)->lpVtbl -> GetIDsOfNames(This,riid,rgszNames,cNames,lcid,rgDispId) ) 

#define _IHttpMonEvents_Invoke(This,dispIdMember,riid,lcid,wFlags,pDispParams,pVarResult,pExcepInfo,puArgErr)	\
    ( (This)->lpVtbl -> Invoke(This,dispIdMember,riid,lcid,wFlags,pDispParams,pVarResult,pExcepInfo,puArgErr) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */


#endif 	/* ___IHttpMonEvents_DISPINTERFACE_DEFINED__ */


EXTERN_C const CLSID CLSID_HttpMon;

#ifdef __cplusplus

class DECLSPEC_UUID("D5DEA129-C130-4268-A3AB-14CED69E052D")
HttpMon;
#endif
#endif /* __HttpMonitorLib_LIBRARY_DEFINED__ */

/* Additional Prototypes for ALL interfaces */

/* end of Additional Prototypes */

#ifdef __cplusplus
}
#endif

#endif


