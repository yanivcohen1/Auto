// stdafx.h : include file for standard system include files,
// or project specific include files that are used frequently,
// but are changed infrequently

#pragma once

#ifndef STRICT
#define STRICT
#endif

#include "targetver.h"

#define _ATL_APARTMENT_THREADED
#define _ATL_NO_AUTOMATIC_NAMESPACE

#define _ATL_CSTRING_EXPLICIT_CONSTRUCTORS	// some CString constructors will be explicit

#include "resource.h"
#include <atlbase.h>
#include <atlcom.h>
#include <atlctl.h>
#include <wininet.h>

using namespace ATL;
extern CSimpleArray<void*> monitorInstances;
//Protocol handling
extern CComPtr<IClassFactory> spCFHTTP;
extern CComPtr<IClassFactory> spCFHTTPS;
extern BOOL isProtocolsRegistered;