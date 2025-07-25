#ifndef PASSTHROUGHAPP_PROTOCOLIMPL_INL
#define PASSTHROUGHAPP_PROTOCOLIMPL_INL

#if _MSC_VER > 1000
	#pragma once
#endif // _MSC_VER > 1000

#ifndef PASSTHROUGHAPP_PROTOCOLIMPL_H
	#error ProtocolImpl.inl requires ProtocolImpl.h to be included first
#endif

namespace PassthroughAPP
{

namespace Detail
{

template <class T>
inline HRESULT WINAPI QIPassthrough<T>::
	QueryInterfacePassthroughT(void* pv, REFIID riid, LPVOID* ppv, DWORD_PTR dw)
{
	ATLASSERT(pv != 0);
	T* pT = static_cast<T*>(pv);

	IUnknown* punkTarget = pT->GetTargetUnknown();
	ATLASSERT(punkTarget != 0);
	if (!punkTarget)
	{
		ATLTRACE(_T("Interface queried before target unknown is set"));
		return E_UNEXPECTED;
	}

	IUnknown* punkWrapper = pT->GetUnknown();

	typename T::ObjectLock lock(pT);
	return QueryInterfacePassthrough(
		pv, riid, ppv, dw, punkTarget, punkWrapper);
}

template <class T>
inline HRESULT WINAPI QIPassthrough<T>::
	QueryInterfaceDebugT(void* pv, REFIID riid, LPVOID* ppv, DWORD_PTR dw)
{
	ATLASSERT(pv != 0);
	T* pT = static_cast<T*>(pv);

	IUnknown* punkTarget = pT->GetTargetUnknown();
	ATLASSERT(punkTarget != 0);
	if (!punkTarget)
	{
		ATLTRACE(_T("Interface queried before target unknown is set"));
		return E_UNEXPECTED;
	}

	typename T::ObjectLock lock(pT);
	return QueryInterfaceDebug(pv, riid, ppv, dw, punkTarget);
}

inline HRESULT WINAPI QueryInterfacePassthrough(void* pv, REFIID riid,
	LPVOID* ppv, DWORD_PTR dw, IUnknown* punkTarget, IUnknown* punkWrapper)
{
	ATLASSERT(pv != 0);
	ATLASSERT(ppv != 0);
	ATLASSERT(dw != 0);
	ATLASSERT(punkTarget != 0);

	const PassthroughItfData& data =
		*reinterpret_cast<const PassthroughItfData*>(dw);

	IUnknown** ppUnk = reinterpret_cast<IUnknown**>(
		static_cast<char*>(pv) + data.offsetUnk);

	HRESULT hr = S_OK;
	if (!*ppUnk)
	{
		CComPtr<IUnknown> spUnk;
		hr = punkTarget->QueryInterface(riid,
			reinterpret_cast<void**>(&spUnk));
		ATLASSERT(FAILED(hr) || spUnk != 0);
		if (SUCCEEDED(hr))
		{
			*ppUnk = spUnk.Detach();

			// Need to QI for base interface to fill in base target pointer
			if (data.piidBase)
			{
				ATLASSERT(punkWrapper != 0);
				hr = punkWrapper->QueryInterface(*data.piidBase,
					reinterpret_cast<void**>(&spUnk));
				// since QI for derived interface succeeded,
				// QI for base interface must succeed, too
				ATLASSERT(SUCCEEDED(hr));
			}
		}
	}
	if (SUCCEEDED(hr))
	{
		CComPtr<IUnknown> spItf = reinterpret_cast<IUnknown*>(
			static_cast<char*>(pv) + data.offsetItf);
		*ppv = spItf.Detach();
	}
	else
	{
		ATLASSERT(_T("Interface not supported by target unknown"));
	}
	return hr;
}

inline HRESULT WINAPI QueryInterfaceDebug(void* pv, REFIID riid,
	LPVOID* ppv, DWORD_PTR dw, IUnknown* punkTarget)
{
	ATLASSERT(pv != 0);
	ATLASSERT(ppv != 0);
	ATLASSERT(punkTarget != 0);

	CComPtr<IUnknown> spUnk;
	HRESULT hr = punkTarget->QueryInterface(riid,
		reinterpret_cast<void**>(&spUnk));
	ATLASSERT(FAILED(hr) || spUnk != 0);
	if (SUCCEEDED(hr))
	{
		ATLTRACE(_T("Unrecognized interface supported by target unknown"));
		//ATLASSERT(false); Abhinav Soni
	}

	// We don't support this interface, so return an error.
	// The operations above are for debugging purposes only,
	// this function is not supposed to ever return success
	return E_NOINTERFACE;
}

inline HRESULT QueryServicePassthrough(REFGUID guidService,
	IUnknown* punkThis, REFIID riid, void** ppv,
	IServiceProvider* pClientProvider)
{
	ATLASSERT(punkThis != 0);
	CComPtr<IUnknown> spDummy;
	HRESULT hr = pClientProvider ?
		pClientProvider->QueryService(guidService, riid,
			reinterpret_cast<void**>(&spDummy)) :
		E_NOINTERFACE;
	if (SUCCEEDED(hr))
	{
		hr = punkThis->QueryInterface(riid, ppv);
	}
	return hr;
}

} // end namespace PassthroughAPP::Detail

// ===== IInternetProtocolImpl =====

inline STDMETHODIMP IInternetProtocolImpl::SetTargetUnknown(
	IUnknown* punkTarget)
{
	ATLASSERT(punkTarget != 0);
	if (!punkTarget)
	{
		return E_POINTER;
	}

	// This method should only be called once, and be the only source
	// of target interface pointers.
	ATLASSERT(m_spInternetProtocolUnk == 0);
	ATLASSERT(m_spInternetProtocol == 0);
	if (m_spInternetProtocolUnk || m_spInternetProtocol)
	{
		return E_UNEXPECTED;
	}

	// We expect the target unknown to implement at least IInternetProtocol
	// Otherwise we reject it
	HRESULT hr = punkTarget->QueryInterface(&m_spInternetProtocol);
	ATLASSERT(FAILED(hr) || m_spInternetProtocol != 0);
	if (FAILED(hr))
	{
		return hr;
	}

	ATLASSERT(m_spInternetProtocolInfo == 0);
	ATLASSERT(m_spInternetPriority == 0);
	ATLASSERT(m_spInternetThreadSwitch == 0);
	ATLASSERT(m_spWinInetInfo == 0);
	ATLASSERT(m_spWinInetHttpInfo == 0);

	m_spInternetProtocolUnk = punkTarget;
	return S_OK;
}

inline void IInternetProtocolImpl::ReleaseAll()
{
	m_spInternetProtocolUnk.Release();
	m_spInternetProtocol.Release();
	m_spInternetProtocolInfo.Release();
	m_spInternetPriority.Release();
	m_spInternetThreadSwitch.Release();
	m_spWinInetInfo.Release();
	m_spWinInetHttpInfo.Release();
}

// IInternetProtocolRoot
inline STDMETHODIMP IInternetProtocolImpl::Start(
	/* [in] */ LPCWSTR szUrl,
	/* [in] */ IInternetProtocolSink *pOIProtSink,
	/* [in] */ IInternetBindInfo *pOIBindInfo,
	/* [in] */ DWORD grfPI,
	/* [in] */ HANDLE_PTR dwReserved)
{
	ATLASSERT(m_spInternetProtocol != 0);
	return m_spInternetProtocol ?
		m_spInternetProtocol->Start(szUrl, pOIProtSink, pOIBindInfo, grfPI,
			dwReserved) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolImpl::Continue(
	/* [in] */ PROTOCOLDATA *pProtocolData)
{
	ATLASSERT(m_spInternetProtocol != 0);
	return m_spInternetProtocol ?
		m_spInternetProtocol->Continue(pProtocolData) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolImpl::Abort(
	/* [in] */ HRESULT hrReason,
	/* [in] */ DWORD dwOptions)
{
	ATLASSERT(m_spInternetProtocol != 0);
	return m_spInternetProtocol ?
		m_spInternetProtocol->Abort(hrReason, dwOptions) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolImpl::Terminate(
	/* [in] */ DWORD dwOptions)
{
	ATLASSERT(m_spInternetProtocol != 0);
	return m_spInternetProtocol ?
		m_spInternetProtocol->Terminate(dwOptions) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolImpl::Suspend()
{
	ATLASSERT(m_spInternetProtocol != 0);
	return m_spInternetProtocol ?
		m_spInternetProtocol->Suspend() :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolImpl::Resume()
{
	ATLASSERT(m_spInternetProtocol != 0);
	return m_spInternetProtocol ?
		m_spInternetProtocol->Resume() :
		E_UNEXPECTED;
}

// IInternetProtocol
inline STDMETHODIMP IInternetProtocolImpl::Read(
	/* [in, out] */ void *pv,
	/* [in] */ ULONG cb,
	/* [out] */ ULONG *pcbRead)
{
	ATLASSERT(m_spInternetProtocol != 0);
	return m_spInternetProtocol ?
		m_spInternetProtocol->Read(pv, cb, pcbRead) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolImpl::Seek(
	/* [in] */ LARGE_INTEGER dlibMove,
	/* [in] */ DWORD dwOrigin,
	/* [out] */ ULARGE_INTEGER *plibNewPosition)
{
	ATLASSERT(m_spInternetProtocol != 0);
	return m_spInternetProtocol ?
		m_spInternetProtocol->Seek(dlibMove, dwOrigin, plibNewPosition) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolImpl::LockRequest(
	/* [in] */ DWORD dwOptions)
{
	ATLASSERT(m_spInternetProtocol != 0);
	return m_spInternetProtocol ?
		m_spInternetProtocol->LockRequest(dwOptions) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolImpl::UnlockRequest()
{
	ATLASSERT(m_spInternetProtocol != 0);
	return m_spInternetProtocol ?
		m_spInternetProtocol->UnlockRequest() :
		E_UNEXPECTED;
}

// IInternetProtocolInfo
inline STDMETHODIMP IInternetProtocolImpl::ParseUrl(
	/* [in] */ LPCWSTR pwzUrl,
	/* [in] */ PARSEACTION ParseAction,
	/* [in] */ DWORD dwParseFlags,
	/* [out] */ LPWSTR pwzResult,
	/* [in] */ DWORD cchResult,
	/* [out] */ DWORD *pcchResult,
	/* [in] */ DWORD dwReserved)
{
	ATLASSERT(m_spInternetProtocolInfo != 0);
	return m_spInternetProtocolInfo ?
		m_spInternetProtocolInfo->ParseUrl(pwzUrl, ParseAction, dwParseFlags,
			pwzResult, cchResult, pcchResult, dwReserved) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolImpl::CombineUrl(
	/* [in] */ LPCWSTR pwzBaseUrl,
	/* [in] */ LPCWSTR pwzRelativeUrl,
	/* [in] */ DWORD dwCombineFlags,
	/* [out] */ LPWSTR pwzResult,
	/* [in] */ DWORD cchResult,
	/* [out] */ DWORD *pcchResult,
	/* [in] */ DWORD dwReserved)
{
	ATLASSERT(m_spInternetProtocolInfo != 0);
	return m_spInternetProtocolInfo ?
		m_spInternetProtocolInfo->CombineUrl(pwzBaseUrl, pwzRelativeUrl,
			dwCombineFlags, pwzResult, cchResult, pcchResult, dwReserved) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolImpl::CompareUrl(
	/* [in] */ LPCWSTR pwzUrl1,
	/* [in] */ LPCWSTR pwzUrl2,
	/* [in] */ DWORD dwCompareFlags)
{
	ATLASSERT(m_spInternetProtocolInfo != 0);
	return m_spInternetProtocolInfo ?
		m_spInternetProtocolInfo->CompareUrl(pwzUrl1,pwzUrl2, dwCompareFlags) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolImpl::QueryInfo(
	/* [in] */ LPCWSTR pwzUrl,
	/* [in] */ QUERYOPTION QueryOption,
	/* [in] */ DWORD dwQueryFlags,
	/* [in, out] */ LPVOID pBuffer,
	/* [in] */ DWORD cbBuffer,
	/* [in, out] */ DWORD *pcbBuf,
	/* [in] */ DWORD dwReserved)
{
	ATLASSERT(m_spInternetProtocolInfo != 0);
	return m_spInternetProtocolInfo ?
		m_spInternetProtocolInfo->QueryInfo(pwzUrl, QueryOption, dwQueryFlags,
			pBuffer, cbBuffer, pcbBuf, dwReserved) :
		E_UNEXPECTED;
}

// IInternetPriority
inline STDMETHODIMP IInternetProtocolImpl::SetPriority(
	/* [in] */ LONG nPriority)
{
	ATLASSERT(m_spInternetPriority != 0);
	return m_spInternetPriority ?
		m_spInternetPriority->SetPriority(nPriority) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolImpl::GetPriority(
	/* [out] */ LONG *pnPriority)
{
	ATLASSERT(m_spInternetPriority != 0);
	return m_spInternetPriority ?
		m_spInternetPriority->GetPriority(pnPriority) :
	E_UNEXPECTED;
}

// IInternetThreadSwitch
inline STDMETHODIMP IInternetProtocolImpl::Prepare()
{
	ATLASSERT(m_spInternetThreadSwitch != 0);
	return m_spInternetThreadSwitch ?
		m_spInternetThreadSwitch->Prepare() :
	E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolImpl::Continue()
{
	ATLASSERT(m_spInternetThreadSwitch != 0);
	return m_spInternetThreadSwitch ?
		m_spInternetThreadSwitch->Continue() :
	E_UNEXPECTED;
}

// IWinInetInfo
inline STDMETHODIMP IInternetProtocolImpl::QueryOption(
	/* [in] */ DWORD dwOption,
	/* [in, out] */ LPVOID pBuffer,
	/* [in, out] */ DWORD *pcbBuf)
{
	ATLASSERT(m_spWinInetInfo != 0);
	return m_spWinInetInfo ?
		m_spWinInetInfo->QueryOption(dwOption, pBuffer, pcbBuf) :
		E_UNEXPECTED;
}

// IWinInetHttpInfo
inline STDMETHODIMP IInternetProtocolImpl::QueryInfo(
	/* [in] */ DWORD dwOption,
	/* [in, out] */ LPVOID pBuffer,
	/* [in, out] */ DWORD *pcbBuf,
	/* [in, out] */ DWORD *pdwFlags,
	/* [in, out] */ DWORD *pdwReserved)
{
	ATLASSERT(m_spWinInetHttpInfo  != 0);
	return m_spWinInetHttpInfo ?
		m_spWinInetHttpInfo->QueryInfo(dwOption, pBuffer, pcbBuf, pdwFlags,
			pdwReserved) :
		E_UNEXPECTED;
}

// ===== IInternetProtocolSinkImpl =====

inline HRESULT IInternetProtocolSinkImpl::OnStart(LPCWSTR szUrl,
	IInternetProtocolSink *pOIProtSink, IInternetBindInfo *pOIBindInfo,
	DWORD grfPI, HANDLE_PTR dwReserved, IInternetProtocol* pTargetProtocol)
{
	ATLASSERT(pOIProtSink != 0);
	ATLASSERT(pOIBindInfo != 0);
	ATLASSERT(pTargetProtocol != 0);
	if (!pOIProtSink || !pOIBindInfo || !pTargetProtocol)
	{
		return E_POINTER;
	}

	// This method should only be called once, and be the only source
	// of target interface pointers.
	ATLASSERT(m_spInternetProtocolSink == 0);
	ATLASSERT(m_spInternetBindInfo == 0);
	ATLASSERT(m_spTargetProtocol == 0);
	if (m_spInternetProtocolSink || m_spInternetBindInfo || m_spTargetProtocol)
	{
		return E_UNEXPECTED;
	}

	ATLASSERT(m_spServiceProvider == 0);

	m_spInternetProtocolSink = pOIProtSink;
	m_spInternetBindInfo = pOIBindInfo;
	m_spTargetProtocol = pTargetProtocol;
	return S_OK;
}

inline void IInternetProtocolSinkImpl::ReleaseAll()
{
	m_spInternetProtocolSink.Release();
	m_spServiceProvider.Release();
	m_spInternetBindInfo.Release();
	m_spTargetProtocol.Release();
}

inline IServiceProvider* IInternetProtocolSinkImpl::GetClientServiceProvider()
{
	return m_spServiceProvider;
}

inline HRESULT IInternetProtocolSinkImpl::QueryServiceFromClient(
	REFGUID guidService, REFIID riid, void** ppvObject)
{
	HRESULT hr = S_OK;
	CComPtr<IServiceProvider> spClientProvider = m_spServiceProvider;
	if (!spClientProvider)
	{
		hr = m_spInternetProtocolSink->QueryInterface(&spClientProvider);
		ATLASSERT(SUCCEEDED(hr) && spClientProvider != 0);
	}
	if (SUCCEEDED(hr))
	{
		hr = spClientProvider->QueryService(guidService, riid, ppvObject);
	}
	return hr;
}

// IInternetProtocolSink
inline STDMETHODIMP IInternetProtocolSinkImpl::Switch(
	/* [in] */ PROTOCOLDATA *pProtocolData)
{
	ATLASSERT(m_spInternetProtocolSink != 0);
	return m_spInternetProtocolSink ?
		m_spInternetProtocolSink->Switch(pProtocolData) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolSinkImpl::ReportProgress(
	/* [in] */ ULONG ulStatusCode,
	/* [in] */ LPCWSTR szStatusText)
{
	ATLASSERT(m_spInternetProtocolSink != 0);
	return m_spInternetProtocolSink ?
		m_spInternetProtocolSink->ReportProgress(ulStatusCode, szStatusText) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolSinkImpl::ReportData(
	/* [in] */ DWORD grfBSCF,
	/* [in] */ ULONG ulProgress,
	/* [in] */ ULONG ulProgressMax)
{
	ATLASSERT(m_spInternetProtocolSink != 0);
	return m_spInternetProtocolSink ?
		m_spInternetProtocolSink->ReportData(grfBSCF, ulProgress,
			ulProgressMax) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolSinkImpl::ReportResult(
	/* [in] */ HRESULT hrResult,
	/* [in] */ DWORD dwError,
	/* [in] */ LPCWSTR szResult)
{
	ATLASSERT(m_spInternetProtocolSink != 0);
	return m_spInternetProtocolSink ?
		m_spInternetProtocolSink->ReportResult(hrResult, dwError, szResult) :
		E_UNEXPECTED;
}

// IServiceProvider
inline STDMETHODIMP IInternetProtocolSinkImpl::QueryService(
	/* [in] */ REFGUID guidService,
	/* [in] */ REFIID riid,
	/* [out] */ void** ppvObject)
{
	ATLASSERT(m_spServiceProvider != 0);
	return m_spServiceProvider ?
		m_spServiceProvider->QueryService(guidService, riid, ppvObject) :
		E_UNEXPECTED;
}

// IInternetBindInfo
inline STDMETHODIMP IInternetProtocolSinkImpl::GetBindInfo(
	/* [out] */ DWORD *grfBINDF,
	/* [in, out] */ BINDINFO *pbindinfo)
{
	ATLASSERT(m_spInternetBindInfo != 0);
	return m_spInternetBindInfo ?
		m_spInternetBindInfo->GetBindInfo(grfBINDF, pbindinfo) :
		E_UNEXPECTED;
}

inline STDMETHODIMP IInternetProtocolSinkImpl::GetBindString(
	/* [in] */ ULONG ulStringType,
	/* [in, out] */ LPOLESTR *ppwzStr,
	/* [in] */ ULONG cEl,
	/* [in, out] */ ULONG *pcElFetched)
{
	ATLASSERT(m_spInternetBindInfo != 0);
	return m_spInternetBindInfo ?
		m_spInternetBindInfo->GetBindString(ulStringType, ppwzStr, cEl,
			pcElFetched) :
		E_UNEXPECTED;
}

// ===== CInternetProtocolSinkWithSP =====

template <class T, class ThreadModel>
inline HRESULT CInternetProtocolSinkWithSP<T, ThreadModel>::OnStart(
	LPCWSTR szUrl, IInternetProtocolSink *pOIProtSink,
	IInternetBindInfo *pOIBindInfo,	DWORD grfPI, HANDLE_PTR dwReserved,
	IInternetProtocol* pTargetProtocol)
{
	ATLASSERT(m_spServiceProvider == 0);
	if (m_spServiceProvider)
	{
		return E_UNEXPECTED;
	}
	HRESULT hr = BaseClass::OnStart(szUrl, pOIProtSink, pOIBindInfo, grfPI,
		dwReserved, pTargetProtocol);
	if (SUCCEEDED(hr))
	{
		pOIProtSink->QueryInterface(&m_spServiceProvider);
	}
	return hr;
}

template <class T, class ThreadModel>
inline HRESULT CInternetProtocolSinkWithSP<T, ThreadModel>::
	_InternalQueryService(REFGUID guidService, REFIID riid, void** ppvObject)
{
	return E_NOINTERFACE;
}

template <class T, class ThreadModel>
inline STDMETHODIMP CInternetProtocolSinkWithSP<T, ThreadModel>::QueryService(
	REFGUID guidService, REFIID riid, void** ppv)
{
	T* pT = static_cast<T*>(this);
	HRESULT hr = pT->_InternalQueryService(guidService, riid, ppv);
	if (FAILED(hr) && m_spServiceProvider)
	{
		hr = m_spServiceProvider->QueryService(guidService, riid, ppv);
	}
	return hr;
}

// ===== NoSinkStartPolicy =====

inline HRESULT NoSinkStartPolicy::OnStart(LPCWSTR szUrl,
	IInternetProtocolSink *pOIProtSink, IInternetBindInfo *pOIBindInfo,
	DWORD grfPI, HANDLE_PTR dwReserved, IInternetProtocol* pTargetProtocol)
{
	ATLASSERT(pTargetProtocol != 0);
	return pTargetProtocol->Start(szUrl, pOIProtSink, pOIBindInfo,
		grfPI, dwReserved);
}

// ===== CComObjectSharedRef =====

template<class Base>
inline CComObjectSharedRef<Base>::CComObjectSharedRef(IUnknown* punkOuter) :
	m_punkOuter(punkOuter)
{
	ATLASSERT(m_punkOuter != 0);
}

template<class Base>
inline STDMETHODIMP CComObjectSharedRef<Base>::QueryInterface(REFIID iid,
	void** ppvObject)
{
	return _InternalQueryInterface(iid, ppvObject);
}

template<class Base>
inline STDMETHODIMP_(ULONG) CComObjectSharedRef<Base>::AddRef()
{
	if (m_punkOuter)
	{
		m_punkOuter->AddRef();
	}
	return InternalAddRef();
}

template<class Base>
inline STDMETHODIMP_(ULONG) CComObjectSharedRef<Base>::Release()
{
	ULONG l = InternalRelease();
	if (!l)
	{
		ReleaseAll();
	}
	if (m_punkOuter)
	{
		m_punkOuter->Release();
	}
	return l;
}

// ===== CustomSinkStartPolicy =====

template <class Sink>
inline CustomSinkStartPolicy<Sink>::
	CustomSinkStartPolicy(IUnknown* punkOuter) :
		m_internetSink(punkOuter)
{
}

template <class Sink>
inline HRESULT CustomSinkStartPolicy<Sink>::OnStart(LPCWSTR szUrl,
	IInternetProtocolSink *pOIProtSink, IInternetBindInfo *pOIBindInfo,
	DWORD grfPI, HANDLE_PTR dwReserved, IInternetProtocol* pTargetProtocol)
{
	ATLASSERT(pTargetProtocol);
	HRESULT hr = m_internetSink.OnStart(szUrl, pOIProtSink, pOIBindInfo,
		grfPI, dwReserved, pTargetProtocol);

	CComPtr<IInternetProtocolSink> spSink;
	CComPtr<IInternetBindInfo> spBindInfo;
	if (SUCCEEDED(hr))
	{
		hr = m_internetSink.QueryInterface(&spSink);
		ATLASSERT(SUCCEEDED(hr) && spSink != 0);
	}
	if (SUCCEEDED(hr))
	{
		hr = m_internetSink.QueryInterface(&spBindInfo);
		ATLASSERT(SUCCEEDED(hr) && spBindInfo != 0);
	}
	if (SUCCEEDED(hr))
	{
		hr = pTargetProtocol->Start(szUrl, spSink, spBindInfo, grfPI,
			dwReserved);
	}
	return hr;
}

// ===== CInternetProtocol =====

template <class StartPolicy, class ThreadModel>
inline CInternetProtocol<StartPolicy, ThreadModel>::CInternetProtocol() :
	StartPolicy(GetUnknown())
{
}

// IInternetProtocolRoot
template <class StartPolicy, class ThreadModel>
inline STDMETHODIMP CInternetProtocol<StartPolicy, ThreadModel>::Start(
	LPCWSTR szUrl, IInternetProtocolSink *pOIProtSink,
	IInternetBindInfo *pOIBindInfo, DWORD grfPI, HANDLE_PTR dwReserved)
{
	ATLASSERT(m_spInternetProtocol != 0);
	if (!m_spInternetProtocol)
	{
		return E_UNEXPECTED;
	}

	return StartPolicy::OnStart(szUrl, pOIProtSink, pOIBindInfo, grfPI,
		dwReserved, m_spInternetProtocol);
}

} // end namespace PassthroughAPP

#endif // PASSTHROUGHAPP_PROTOCOLIMPL_INL
