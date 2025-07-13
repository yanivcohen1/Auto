// HttpMon.cpp : Implementation of CHttpMon

#include "stdafx.h"
#include "HttpMon.h"
#include "ProtocolCF.h"

// CHttpMon
typedef PassthroughAPP::CMetaFactory<PassthroughAPP::CComClassFactoryProtocol, CTestAPP> MetaFactory;

LONG GetPtr(void * v);
LONG GetUniqueId(LONG l1, LONG l2, WCHAR* w);
LONG GetContainerId(CComPtr<IWinInetHttpInfo> spWinInetHttpInfo);
LONG GetHash(WCHAR* w);
int IndexOf(wchar_t* str, wchar_t* s);
CComBSTR GetQueryInfo(CComPtr<IWinInetHttpInfo> spWinInetHttpInfo, DWORD dwOption, DWORD flags);
wchar_t* Substring(wchar_t *str, int beginIndex, int endIndex);

STDMETHODIMP CHttpMon::get_IEWindow(LONG* pVal)
{
	*pVal = m_iEWindow;
	return S_OK;
}

STDMETHODIMP CHttpMon::put_IEWindow(LONG newVal)
{
	if(isProtocolsRegistered == FALSE) {
		CComPtr<IInternetSession> spSession;
		CoInternetGetSession(0, &spSession, 0);

		MetaFactory::CreateInstance(CLSID_HttpProtocol, &spCFHTTP);
		spSession->RegisterNameSpace(spCFHTTP, CLSID_NULL, L"http", 0, 0, 0);

		MetaFactory::CreateInstance(CLSID_HttpSProtocol, &spCFHTTPS);
		spSession->RegisterNameSpace(spCFHTTPS, CLSID_NULL, L"https", 0, 0, 0);
		isProtocolsRegistered = TRUE;
	}
	m_iEWindow = newVal;
	return S_OK;
}

STDMETHODIMP MonitorSink::OnStart(LPCWSTR szUrl, IInternetProtocolSink *pOIProtSink,
		IInternetBindInfo *pOIBindInfo, DWORD grfPI, DWORD dwReserved,
		IInternetProtocol* pTargetProtocol) 
{
	myInstance = NULL;
	HRESULT hr = BaseClass::OnStart(szUrl, pOIProtSink, pOIBindInfo, grfPI,
		dwReserved, pTargetProtocol);
	
	HRESULT hret = IUnknown_QueryService(pOIProtSink, IID_IHTMLWindow2, IID_IHTMLWindow2, (void**)&iWindow);
	if(FAILED(hret) || !iWindow)
	{
		iWindow = NULL;
	}

	resultReported = false;

	CComPtr<IWindowForBindingUI> objWindowForBindingUI;
	//HRESULT hret = QueryServiceFromClient(&objWindowForBindingUI);
	hret = IUnknown_QueryService(pOIProtSink, IID_IWindowForBindingUI, IID_IWindowForBindingUI, (void**)&objWindowForBindingUI);
	if(SUCCEEDED(hret) && objWindowForBindingUI)
	{
		HWND hwndIEServer = NULL;
		HRESULT hret = objWindowForBindingUI->GetWindow(IID_IWindowForBindingUI, &hwndIEServer);
		if( (hwndIEServer) && (::IsWindow(hwndIEServer)) )
		{
			int isize = monitorInstances.GetSize();
			for(int i = 0; i < isize; i++)
			{
				CHttpMon *monitorInstance = reinterpret_cast<CHttpMon*>(monitorInstances[i]);
				if( (monitorInstance) && (monitorInstance->m_iEWindow == (long)hwndIEServer) )
				{
					myInstance = monitorInstance;
					break;
				}
			}
		}
	}
	
	return hr;
}

STDMETHODIMP MonitorSink::Switch(
	PROTOCOLDATA *pProtocolData)
{
	/*if( (pProtocolData->grfFlags & PD_FORCE_SWITCH) == 0)
		pProtocolData->grfFlags |= PD_FORCE_SWITCH;*/

	return m_spInternetProtocolSink ?
		m_spInternetProtocolSink->Switch(pProtocolData) :
		E_UNEXPECTED;
}

STDMETHODIMP MonitorSink::BeginningTransaction(
	LPCWSTR szURL,
	LPCWSTR szHeaders,
	DWORD dwReserved,
	LPWSTR *pszAdditionalHeaders)
{
	if (pszAdditionalHeaders)
	{
		*pszAdditionalHeaders = 0;
	}

	CComPtr<IHttpNegotiate> spHttpNegotiate;
	QueryServiceFromClient(&spHttpNegotiate);
	HRESULT hr = spHttpNegotiate ?
		spHttpNegotiate->BeginningTransaction(szURL, szHeaders,
			dwReserved, pszAdditionalHeaders) :
		E_UNEXPECTED;
	
	LONG tempContainerId = 0;
	
	CComPtr<IWinInetHttpInfo> spWinInetHttpInfo;
	HRESULT hrTemp = m_spTargetProtocol->QueryInterface(IID_IWinInetHttpInfo,
			reinterpret_cast<void**>(&spWinInetHttpInfo));

	if(SUCCEEDED(hrTemp)) 
	{
		tempContainerId = GetContainerId(spWinInetHttpInfo);
	}

	if(tempContainerId == 0 && pszAdditionalHeaders && *pszAdditionalHeaders)
	{
		int index = IndexOf(*pszAdditionalHeaders, _T("Referer"));
		if(index != -1)
		{
			WCHAR *subString = Substring(*pszAdditionalHeaders, index, wcslen(*pszAdditionalHeaders));
			index = IndexOf(subString, _T("\r\n"));
			WCHAR * subString2 = Substring(subString, 0, index);
			WCHAR *subString3 = Substring(subString2, 9, wcslen(subString2));
			tempContainerId = GetHash(subString3);
			delete []subString3;
			delete []subString2;
			delete []subString;
		}
	}

	if(!myInstance)
	{
		int isize = monitorInstances.GetSize();
		VARIANT_BOOL itsMine = VARIANT_FALSE;
		for(int i = 0; i < isize; i++)
		{
			CHttpMon *monitorInstance = reinterpret_cast<CHttpMon*>(monitorInstances[i]);
			monitorInstance->Fire_ConfirmRequest(GetUniqueId(GetPtr(iWindow), GetPtr(m_spInternetBindInfo), (WCHAR*)szURL), tempContainerId, W2BSTR(szURL), isize, &itsMine);
			if(itsMine)
			{
				myInstance = monitorInstance;
				break;
			}
		}
	}

	if(myInstance)
	{
		myInstance->Fire_GetIServiceProviderOnStart(GetUniqueId(GetPtr(iWindow), GetPtr(m_spInternetBindInfo), (WCHAR*)szURL), tempContainerId, W2BSTR(szURL), GetPtr(m_spServiceProvider.p));
	}


	return hr;
}


STDMETHODIMP MonitorSink::OnResponse(
	DWORD dwResponseCode,
	LPCWSTR szResponseHeaders,
	LPCWSTR szRequestHeaders,
	LPWSTR *pszAdditionalRequestHeaders)
{
	if (pszAdditionalRequestHeaders)
	{
		*pszAdditionalRequestHeaders = 0;
	}

	CComPtr<IHttpNegotiate> spHttpNegotiate;
	QueryServiceFromClient(&spHttpNegotiate);
	HRESULT hr = spHttpNegotiate ?
		spHttpNegotiate->OnResponse(dwResponseCode, szResponseHeaders,
			szRequestHeaders, pszAdditionalRequestHeaders) :
		E_UNEXPECTED;

	if(myInstance)
	{
		CComBSTR strResponseHeaders = L"";
		WCHAR* pURL = 0;
		ULONG cEl = 1;
		if(szResponseHeaders)
		{
			strResponseHeaders += W2BSTR(szResponseHeaders);
		}
		if(pszAdditionalRequestHeaders && *pszAdditionalRequestHeaders) 
		{
			strResponseHeaders += _T("\r\n");
			strResponseHeaders += W2BSTR(*pszAdditionalRequestHeaders);
		}		

		CComPtr<IWinInetHttpInfo> spWinInetHttpInfo;
		HRESULT hrTemp = m_spTargetProtocol->QueryInterface(IID_IWinInetHttpInfo,
			reinterpret_cast<void**>(&spWinInetHttpInfo));		
		m_spInternetBindInfo->GetBindString(BINDSTRING_URL,	&pURL, cEl, &cEl);
		
		myInstance->Fire_OnResponse(GetUniqueId(GetPtr(iWindow), GetPtr(m_spInternetBindInfo), pURL), GetContainerId(spWinInetHttpInfo), W2BSTR(pURL), dwResponseCode, strResponseHeaders);
		CoTaskMemFree(pURL);
	}
	return hr;
}

STDMETHODIMP CTestAPP::Read(void *pv, ULONG cb, ULONG *pcbRead)
{
	USES_CONVERSION;
	HRESULT hr = m_spInternetProtocol->Read(pv, cb, pcbRead);
	if(m_internetSink.myInstance)
	{
		BYTE *data = new BYTE[*pcbRead];
		memcpy(data, pv, *pcbRead);
		VARIANT v;
		v.pbVal = data;
		VARIANT_BOOL isComplete = VARIANT_FALSE;
		if(hr == S_FALSE)
		{
			isComplete = VARIANT_TRUE;
		}

		WCHAR *pURL = 0;
		ULONG cEl = 1;
		CComPtr<IWinInetHttpInfo> spWinInetHttpInfo;
		HRESULT hrTemp =this->m_internetSink.m_spTargetProtocol->QueryInterface(IID_IWinInetHttpInfo,
			reinterpret_cast<void**>(&spWinInetHttpInfo));		
		this->m_internetSink.m_spInternetBindInfo->GetBindString(BINDSTRING_URL, &pURL, cEl, &cEl);
		m_internetSink.myInstance->Fire_OnDataRecieved(GetUniqueId(GetPtr(this->m_internetSink.iWindow), GetPtr(this->m_internetSink.m_spInternetBindInfo), pURL), GetContainerId(spWinInetHttpInfo), W2BSTR(pURL), data, *pcbRead, isComplete);		
		CoTaskMemFree(pURL);
		delete data;
	}
	return hr;
}

STDMETHODIMP MonitorSink::ReportProgress(
	ULONG ulStatusCode,
	LPCWSTR szStatusText)
{
	HRESULT hr = m_spInternetProtocolSink ?
		m_spInternetProtocolSink->ReportProgress(ulStatusCode, szStatusText) :
		E_UNEXPECTED;
	if(myInstance)
	{
		WCHAR* pURL = 0;
		LONG tempContainerId = 0;
		if (ulStatusCode == BINDSTATUS_REDIRECTING || ulStatusCode == BINDSTATUS_COOKIE_SENT || ulStatusCode == BINDSTATUS_MIMETYPEAVAILABLE ||
			ulStatusCode == BINDSTATUS_COOKIE_STATE_LEASH || ulStatusCode == BINDSTATUS_COOKIE_STATE_ACCEPT || ulStatusCode == BINDSTATUS_CACHEFILENAMEAVAILABLE ||
			ulStatusCode == BINDSTATUS_P3P_HEADER || ulStatusCode == BINDSTATUS_SENDINGREQUEST)
		{
			ULONG cEl = 1;
			m_spInternetBindInfo->GetBindString(BINDSTRING_URL,	&pURL, cEl, &cEl);
			CComPtr<IWinInetHttpInfo> spWinInetHttpInfo;
			HRESULT hrTemp = m_spTargetProtocol->QueryInterface(IID_IWinInetHttpInfo,
			reinterpret_cast<void**>(&spWinInetHttpInfo));
			tempContainerId = GetContainerId(spWinInetHttpInfo);
		}

		if (ulStatusCode == BINDSTATUS_REDIRECTING)
		{
			CComBSTR strRequestHeaders = L"";
			CComBSTR strResposeHeaders = L"";
			CComPtr<IWinInetHttpInfo> spWinInetHttpInfo;
			HRESULT hrTemp = m_spTargetProtocol->QueryInterface(IID_IWinInetHttpInfo,
				reinterpret_cast<void**>(&spWinInetHttpInfo));
			if(SUCCEEDED(hrTemp))
			{
				strRequestHeaders = GetQueryInfo(spWinInetHttpInfo, HTTP_QUERY_RAW_HEADERS_CRLF | HTTP_QUERY_FLAG_REQUEST_HEADERS, 0);
				strResposeHeaders = GetQueryInfo(spWinInetHttpInfo, HTTP_QUERY_RAW_HEADERS_CRLF, 0);				
			}
			myInstance->Fire_OnRedirect(GetUniqueId(GetPtr(iWindow), GetPtr(this->m_spInternetBindInfo), pURL), tempContainerId, GetUniqueId(GetPtr(iWindow), GetPtr(this->m_spInternetBindInfo), (WCHAR*)szStatusText), W2BSTR(pURL), W2BSTR(szStatusText), W2BSTR(strResposeHeaders), W2BSTR(strRequestHeaders));
		}
		else if(ulStatusCode == BINDSTATUS_COOKIE_SENT)
		{
			CComPtr<IWinInetHttpInfo> spWinInetHttpInfo;
			CComBSTR strCookies = L"";
			HRESULT hrTemp = m_spTargetProtocol->QueryInterface(IID_IWinInetHttpInfo,
					reinterpret_cast<void**>(&spWinInetHttpInfo));
			if(SUCCEEDED(hrTemp))
			{
				DWORD size = 0;
				DWORD flags = 0;
				DWORD temp = 0;
				do 
				{
					strCookies.AppendBSTR(GetQueryInfo(spWinInetHttpInfo, HTTP_QUERY_COOKIE | HTTP_QUERY_FLAG_REQUEST_HEADERS, temp).m_str);
					strCookies.Append(_T("\r\n"));
					temp++;
				} while(size > 0);
			}
			myInstance->Fire_OnCookieSent(GetUniqueId(GetPtr(iWindow), GetPtr(this->m_spInternetBindInfo), pURL), tempContainerId, W2BSTR(pURL), W2BSTR(strCookies));
		}
		else if(ulStatusCode == BINDSTATUS_SENDINGREQUEST)
		{
			CComPtr<IWinInetHttpInfo> spWinInetHttpInfo;
			HRESULT hrTemp = m_spTargetProtocol->QueryInterface(IID_IWinInetHttpInfo, reinterpret_cast<void**>(&spWinInetHttpInfo));			

			if(SUCCEEDED(hrTemp))
			{
				CComBSTR strRequestHeaders = L"";
				CComBSTR strMethod = L"";
				if(SUCCEEDED(hrTemp))
				{
					strRequestHeaders = GetQueryInfo(spWinInetHttpInfo, HTTP_QUERY_RAW_HEADERS_CRLF | HTTP_QUERY_FLAG_REQUEST_HEADERS, 0);
					strMethod = GetQueryInfo(spWinInetHttpInfo, HTTP_QUERY_REQUEST_METHOD, 0);
				}							

				BYTE *data = new BYTE[];
				long cb = 0;
				DWORD grfBINDF;
				BINDINFO bindinfo;
				bindinfo.cbSize = sizeof(BINDINFO);

				hrTemp = m_spInternetBindInfo->GetBindInfo(&grfBINDF, &bindinfo);

				if(hrTemp == S_OK)
				{					
					switch (bindinfo.dwBindVerb)
					{
					case BINDVERB_POST:
						switch(bindinfo.stgmedData.tymed)
						{
						case TYMED_ISTORAGE:
							{
								ILockBytes *pLockBytes;
								CreateILockBytesOnHGlobal(NULL, true, &pLockBytes);
								IStorage *pstgOpen;
								StgCreateDocfileOnILockBytes(pLockBytes, STGM_CREATE | STGM_SHARE_EXCLUSIVE | STGM_READWRITE, 0, &pstgOpen);
								IID rgiidExclude;
								OLECHAR *o = W2OLE(_T(""));
								SNB snbExclude = &o;

								bindinfo.stgmedData.pstg->CopyTo(0, &rgiidExclude, snbExclude, pstgOpen);

								pLockBytes->Flush();
								pstgOpen->Commit(0);

								STATSTG lockBytesStat;
								pLockBytes->Stat(&lockBytesStat, 1);
								ULARGE_INTEGER lockBytesSize = lockBytesStat.cbSize;

								delete data;
								data = new BYTE[lockBytesSize.QuadPart];
								DWORD cbRead;
								ULARGE_INTEGER offset = {0,0};
								pLockBytes->ReadAt(offset, data, lockBytesSize.QuadPart, &cbRead);
								cb = cbRead;
								pLockBytes->Release();
								pstgOpen->Release();
							}
							break;
						case TYMED_HGLOBAL:
							void *pData;
							UINT cPostData;
							
							cPostData = bindinfo.cbstgmedData;
							if (!cPostData)
							{
								break;
							}
							
							pData = GlobalLock(bindinfo.stgmedData.hGlobal);
							if (pData)
							{
								delete data;
								data = new BYTE[cPostData];
								cb = cPostData;
								memcpy(data, pData, cPostData);							
								GlobalUnlock(bindinfo.stgmedData.hGlobal);
							}
							break;
						case TYMED_ISTREAM:
							STATSTG iStreamStat;
							bindinfo.stgmedData.pstm->Stat(&iStreamStat, 0);

							ULARGE_INTEGER iStreamSize = iStreamStat.cbSize;
							delete data;
							data = new BYTE[iStreamSize.QuadPart];
							DWORD cbRead;
							bindinfo.stgmedData.pstm->Read(data, iStreamSize.QuadPart, &cbRead);
							cb = cbRead;
							break;
						}
					}
				}

				myInstance->Fire_OnRequest(GetUniqueId(GetPtr(iWindow), GetPtr(this->m_spInternetBindInfo), pURL), tempContainerId, W2BSTR(pURL), strRequestHeaders, strMethod, data, cb);
				delete[] data;
			}
		}
		else if(ulStatusCode == BINDSTATUS_MIMETYPEAVAILABLE)
		{
			myInstance->Fire_OnMimeTypeAvailable(GetUniqueId(GetPtr(iWindow), GetPtr(this->m_spInternetBindInfo), pURL), tempContainerId, W2BSTR(pURL), W2BSTR(szStatusText));
		}
		else if(ulStatusCode == BINDSTATUS_COOKIE_STATE_LEASH || ulStatusCode == BINDSTATUS_COOKIE_STATE_ACCEPT)
		{
			CComPtr<IWinInetHttpInfo> spWinInetHttpInfo;
			CComBSTR strCookies = L"";
			HRESULT hrTemp = m_spTargetProtocol->QueryInterface(IID_IWinInetHttpInfo,
					reinterpret_cast<void**>(&spWinInetHttpInfo));
			if(SUCCEEDED(hrTemp))
			{
				DWORD size = 0;
				DWORD flags = 0;
				DWORD temp = 0;
				do 
				{
					strCookies.AppendBSTR(GetQueryInfo(spWinInetHttpInfo, HTTP_QUERY_SET_COOKIE, temp).m_str);
					strCookies.Append(_T("\r\n"));
					temp++;
				} while(size > 0);
			}
			myInstance->Fire_OnCookieRecieved(GetUniqueId(GetPtr(iWindow), GetPtr(this->m_spInternetBindInfo), pURL), tempContainerId, W2BSTR(pURL), W2BSTR(strCookies));
		}
		else if(ulStatusCode == BINDSTATUS_CACHEFILENAMEAVAILABLE)
		{
			myInstance->Fire_OnCacheLoaded(GetUniqueId(GetPtr(iWindow), GetPtr(this->m_spInternetBindInfo), pURL), tempContainerId, W2BSTR(pURL), W2BSTR(szStatusText));
		}
		else if(ulStatusCode == BINDSTATUS_P3P_HEADER)
		{
			myInstance->Fire_OnP3PHeaderRecieved(GetUniqueId(GetPtr(iWindow), GetPtr(this->m_spInternetBindInfo), pURL), tempContainerId, W2BSTR(pURL), W2BSTR(szStatusText));
		}
		CoTaskMemFree(pURL);
	} 
	return hr;
}

STDMETHODIMP MonitorSink::ReportResult( 
        HRESULT hrResult,
        DWORD dwError,
		LPCWSTR szResult) 
{
	if(myInstance && FAILED(hrResult))
	{
		CComPtr<IWinInetHttpInfo> spWinInetHttpInfo;
		HRESULT hrTemp = m_spTargetProtocol->QueryInterface(IID_IWinInetHttpInfo,
			reinterpret_cast<void**>(&spWinInetHttpInfo));

		if(SUCCEEDED(hrTemp) && spWinInetHttpInfo)
		{
			WCHAR *pURL;
			ULONG cEl = 1;
			m_spInternetBindInfo->GetBindString(BINDSTRING_URL,	&pURL, cEl, &cEl);
			myInstance->Fire_OnError(GetUniqueId(GetPtr(iWindow), GetPtr(m_spInternetBindInfo), pURL), GetContainerId(spWinInetHttpInfo), pURL, hrResult, dwError);
			CoTaskMemFree(pURL);
		}
	}

	resultReported = true;

	HRESULT hr = m_spInternetProtocolSink ?
			m_spInternetProtocolSink->ReportResult(hrResult, dwError, szResult):
			E_UNEXPECTED;
	return hr;
}

STDMETHODIMP MonitorSink:: ReportData( 
        DWORD grfBSCF,
        ULONG ulProgress,
        ULONG ulProgressMax)
{
	if(myInstance && !resultReported)
	{
		CComPtr<IWinInetHttpInfo> spWinInetHttpInfo;
		HRESULT hrTemp = m_spInternetProtocolSink->QueryInterface(IID_IWinInetHttpInfo,
			reinterpret_cast<void**>(&spWinInetHttpInfo));

		if(SUCCEEDED(hrTemp) && spWinInetHttpInfo)
		{
			WCHAR *pURL;
			ULONG cEl = 1;
			m_spInternetBindInfo->GetBindString(BINDSTRING_URL,	&pURL, cEl, &cEl);
			myInstance->Fire_OnProgress(GetUniqueId(GetPtr(iWindow), GetPtr(m_spInternetBindInfo), pURL), GetContainerId(spWinInetHttpInfo), pURL, grfBSCF, ulProgress, ulProgressMax);
			CoTaskMemFree(pURL);
		}
	}

	HRESULT hr = m_spInternetProtocolSink ?
			m_spInternetProtocolSink->ReportData(grfBSCF, ulProgress, ulProgressMax):
			E_UNEXPECTED;

	return hr;
}

LONG GetPtr(void * v)
{
	if(!v)
	{
		return 0;
	}
	char sPtr[50];
	sprintf_s(sPtr, "%p", v);
	long ptr;
	sscanf_s(sPtr, "%x", &ptr);
	return ptr;
}

LONG GetUniqueId(LONG l1, LONG l2, WCHAR* w)
{
	LONG result = GetHash(w);
	result = 31 * result + l2;
	if(l1 != 0)
	{
		result = 31 * result + l1;
	}
	return result;
}

LONG GetHash(WCHAR* w)
{
	long hash = 0;
	for(int i = 0;i < wcslen(w); i++) {
		hash = 31 * hash + (long)w[i];	
	}
	return hash;
}

LONG GetContainerId(CComPtr<IWinInetHttpInfo> spWinInetHttpInfo)
{
	return GetHash(GetQueryInfo(spWinInetHttpInfo, HTTP_QUERY_REFERER | HTTP_QUERY_FLAG_REQUEST_HEADERS, 0));
}

CComBSTR GetQueryInfo(CComPtr<IWinInetHttpInfo> spWinInetHttpInfo, DWORD dwOption, DWORD flags)
{
	CComBSTR result = L"";
	DWORD flags2 = flags;
	DWORD size = 0;
	HRESULT hrTemp = spWinInetHttpInfo->QueryInfo(
		dwOption,
		0, &size, &flags2, 0);
	if(SUCCEEDED(hrTemp))
	{
		flags2 = flags;
		LPSTR pbuf = new char[size+1];
		pbuf[size] = '\0';
		hrTemp = spWinInetHttpInfo->QueryInfo(
			dwOption,
			pbuf, &size, &flags2, 0);
		if(SUCCEEDED(hrTemp))
		{							
			result.Append(pbuf);
		}
		delete []pbuf;
	}

	return result;
}
int IndexOf(wchar_t* str, wchar_t* s)
{
	int fromIndex = 0;
	int size = wcslen(str);
	if(!s || size == 0)
	{
		return -1;
	}

    int len = wcslen(s);
	if(len == 0) 
	{
		return -1;
	}
	if(len + fromIndex > size)
	{
		return -1;
	}

    int countMatched = 0;
    int firstFoundIndex = 0;
    for(int i = fromIndex; i < size; i++)
	{
        firstFoundIndex = i;
        countMatched = 0;
        if(str[i] == s[countMatched]){//found first letter
            do
			{
                ++countMatched;
				if(countMatched == len) 
				{
					return i;        //if all chars in "s" are found in a row, then the search is a success, return the index
				}
                ++firstFoundIndex;
            }while(firstFoundIndex < size && str[firstFoundIndex] == s[countMatched]);    //ensures that the loop does not step over bounds
        }
    }

    return -1;
}

wchar_t* Substring(wchar_t *str, int beginIndex, int endIndex)
{
	int size = wcslen(str);
    wchar_t* temp = new wchar_t[endIndex - beginIndex + 1];
    int index = 0;
    for(int i = beginIndex; i < endIndex; ++i){
        temp[index] = str[i];
        ++index;
    }
    temp[index] = '\0';
    return temp;
}