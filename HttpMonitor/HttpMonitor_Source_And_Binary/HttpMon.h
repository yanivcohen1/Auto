// HttpMon.h : Declaration of the CHttpMon

#pragma once
#include "resource.h"       // main symbols

#include "HttpMonitor_i.h"
#include "_IHttpMonEvents_CP.h"

#include "ProtocolImpl.h"
#include <string>
#include <vector>

#if defined(_WIN32_WCE) && !defined(_CE_DCOM) && !defined(_CE_ALLOW_SINGLE_THREADED_OBJECTS_IN_MTA)
#error "Single-threaded COM objects are not properly supported on Windows CE platform, such as the Windows Mobile platforms that do not include full DCOM support. Define _CE_ALLOW_SINGLE_THREADED_OBJECTS_IN_MTA to force ATL to support creating single-thread COM object's and allow use of it's single-threaded COM object implementations. The threading model in your rgs file was set to 'Free' as that is the only threading model supported in non DCOM Windows CE platforms."
#endif



// CHttpMon


class ATL_NO_VTABLE CHttpMon :
	public CComObjectRootEx<CComSingleThreadModel>,
	public CComCoClass<CHttpMon, &CLSID_HttpMon>,
	public IConnectionPointContainerImpl<CHttpMon>,
	public CProxy_IHttpMonEvents<CHttpMon>,
	public IDispatchImpl<IHttpMon, &IID_IHttpMon, &LIBID_HttpMonitorLib, 1, 0>
{
public:
	CHttpMon(): m_iEWindow(0)
	{
		LPVOID thisPtr = reinterpret_cast<LPVOID>(this);
		if(monitorInstances.Find(thisPtr) == -1) {
			monitorInstances.Add(thisPtr);
		}
	}

	~CHttpMon()
	{
		if(monitorInstances.GetSize() > 0)
		{
			LPVOID thisPtr = reinterpret_cast<LPVOID>(this);
			int i = monitorInstances.Find(thisPtr);
			if( i > -1)
			{
				monitorInstances[i] = NULL;
				monitorInstances.RemoveAt(i);
			}
		}
	}

	DECLARE_REGISTRY_RESOURCEID(IDR_HTTPMON)


	BEGIN_COM_MAP(CHttpMon)
		COM_INTERFACE_ENTRY(IHttpMon)
		COM_INTERFACE_ENTRY(IDispatch)
		COM_INTERFACE_ENTRY(IConnectionPointContainer)
	END_COM_MAP()

	BEGIN_CONNECTION_POINT_MAP(CHttpMon)
		CONNECTION_POINT_ENTRY(__uuidof(_IHttpMonEvents))
	END_CONNECTION_POINT_MAP()


	DECLARE_PROTECT_FINAL_CONSTRUCT()

	HRESULT FinalConstruct()
	{
		return S_OK;
	}

	void FinalRelease()
	{
	}

	STDMETHOD(get_IEWindow)(LONG* pVal);
	STDMETHOD(put_IEWindow)(LONG newVal);
	long m_iEWindow;	
};

class MonitorSink : 
	public PassthroughAPP::CInternetProtocolSinkWithSP<MonitorSink>,
	public IHttpNegotiate
{
typedef PassthroughAPP::CInternetProtocolSinkWithSP<MonitorSink> BaseClass;
public:
	BEGIN_COM_MAP(MonitorSink)
		COM_INTERFACE_ENTRY(IHttpNegotiate)
		COM_INTERFACE_ENTRY_CHAIN(BaseClass)
	END_COM_MAP()

	BEGIN_SERVICE_MAP(MonitorSink)
		SERVICE_ENTRY(IID_IHttpNegotiate)
	END_SERVICE_MAP()

	STDMETHODIMP BeginningTransaction(
		LPCWSTR szURL,
		LPCWSTR szHeaders,
		DWORD dwReserved,
		LPWSTR *pszAdditionalHeaders);

	STDMETHODIMP OnResponse(
		DWORD dwResponseCode,
		LPCWSTR szResponseHeaders,
		LPCWSTR szRequestHeaders,
		LPWSTR *pszAdditionalRequestHeaders);

	STDMETHODIMP ReportProgress(
		ULONG ulStatusCode,
		LPCWSTR szStatusText);

	STDMETHODIMP ReportResult( 
        HRESULT hrResult,
        DWORD dwError,
        LPCWSTR szResult);

	STDMETHODIMP ReportData( 
        DWORD grfBSCF,
        ULONG ulProgress,
        ULONG ulProgressMax);

	STDMETHODIMP OnStart(LPCWSTR szUrl, IInternetProtocolSink *pOIProtSink,
		IInternetBindInfo *pOIBindInfo, DWORD grfPI, DWORD dwReserved,
		IInternetProtocol* pTargetProtocol);

	STDMETHODIMP Switch(PROTOCOLDATA *pProtocolData);

	CHttpMon *myInstance;
	CComPtr<IHTMLWindow2> iWindow;
	bool resultReported;
};

typedef PassthroughAPP::CustomSinkStartPolicy<MonitorSink>
	TestStartPolicy;

class CTestAPP :
	public PassthroughAPP::CInternetProtocol<TestStartPolicy>
{
	STDMETHODIMP Read(void *pv, ULONG cb, ULONG *pcbRead);
};

OBJECT_ENTRY_AUTO(__uuidof(HttpMon), CHttpMon)
