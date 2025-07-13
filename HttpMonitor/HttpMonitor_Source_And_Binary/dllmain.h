// dllmain.h : Declaration of module class.

class CHttpMonitorModule : public CAtlDllModuleT< CHttpMonitorModule >
{
public :
	DECLARE_LIBID(LIBID_HttpMonitorLib)
	DECLARE_REGISTRY_APPID_RESOURCEID(IDR_HTTPMONITOR, "{3D2C2AA0-6332-48A6-81F9-F1C17A070B2F}")
};

extern class CHttpMonitorModule _AtlModule;
