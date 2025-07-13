// dllmain.cpp : Implementation of DllMain.

#include "stdafx.h"
#include "resource.h"
#include "HttpMonitor_i.h"
#include "dllmain.h"

CSimpleArray<void*> monitorInstances;
CComPtr<IClassFactory> spCFHTTP;
CComPtr<IClassFactory> spCFHTTPS;
BOOL isProtocolsRegistered;
CHttpMonitorModule _AtlModule;

// DLL Entry Point
extern "C" BOOL WINAPI DllMain(HINSTANCE hInstance, DWORD dwReason, LPVOID lpReserved)
{
	if (dwReason == DLL_PROCESS_ATTACH)
    {
		isProtocolsRegistered = FALSE;
		DisableThreadLibraryCalls(hInstance);
    }
    else if (dwReason == DLL_PROCESS_DETACH)
	{
		CSimpleArray<void*> monitorInstances;
		if(monitorInstances.GetSize() > 0)
		{
			for(int i = 0; i < monitorInstances.GetSize(); i++)
				monitorInstances[i] = NULL;
		}
		monitorInstances.RemoveAll();
	}
	return _AtlModule.DllMain(dwReason, lpReserved); 
}
