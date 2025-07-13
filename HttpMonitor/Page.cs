using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.InteropServices;
using mshtml;
using SHDocVw;
using System.Linq;
using System.Windows.Forms;
using System.Text;

namespace Demo
{
    public class Page
    {
        [DllImport("User32.Dll")]
        private static extern int RegisterWindowMessage(string lpString);

        [DllImport("User32.Dll")]
        private static extern int SendMessageTimeout(IntPtr hWnd, int msg, int wParam, int _lParam, int fuFlags, int uTimeout, ref int _lpdwResult);

        [DllImport("oleacc.dll", PreserveSig = false)]
        [return: MarshalAs(UnmanagedType.Interface)]
        private static extern mshtml.IHTMLDocument2 ObjectFromLresult(int lResult, [MarshalAs(UnmanagedType.LPStruct)] System.Guid refiid, int wParam);

        private Dictionary<int, Page> allPages;
        private List<Entry> allCompleteEntries;
        private Dictionary<int, Entry> allEntries;
        private Dictionary<InternetExplorer, List<string>> internetExplorerToNavigations;
        private Dictionary<InternetExplorer, string> internetExplorerToLocation;

        private Page parentPage;
        private InternetExplorer webBrowser;
        private HttpMonitorLib.HttpMonClass httpMonitor;
        private int containerId;
        private List<int> parentIds;
        private Dictionary<int, Page> pages;
        private List<Entry> completeEntries;
        private Dictionary<int, Entry> entries;

        private Dictionary<int, int> flashContainers;
        private Control control;

        private Page(int containerId, List<int> parentIds, InternetExplorer webBrowser, Page parentPage, Dictionary<InternetExplorer, List<string>> internetExplorerToNavigations, Dictionary<InternetExplorer, string> internetExplorerToLocation)
        {
            this.entries = new Dictionary<int, Entry>();
            this.completeEntries = new List<Entry>();
            this.internetExplorerToNavigations = internetExplorerToNavigations;
            this.internetExplorerToLocation = internetExplorerToLocation;
            this.pages = new Dictionary<int, Page>();
            this.containerId = containerId;
            this.parentIds = parentIds;
            this.webBrowser = webBrowser;
            this.parentPage = parentPage;
        }

        public Page(IntPtr iEWindow, Control control)
        {
            const int SMTO_ABORTIFHUNG = (int)0x02;
            int lRes = 0;
            int lMsg = 0;

            lMsg = RegisterWindowMessage("WM_HTML_GETOBJECT");

            int result = SendMessageTimeout(iEWindow, lMsg, 0, 0, SMTO_ABORTIFHUNG, 1000, ref  lRes);
            if (result != 0)
            {
                if (lRes > 0)
                {
                    IHTMLDocument2 iHTMLDocument2 = ObjectFromLresult(lRes, typeof(IHTMLDocument).GUID, 0);
                    webBrowser = GetInternetExplorer(iHTMLDocument2.parentWindow);
                }
            }
            this.entries = new Dictionary<int, Entry>();
            this.completeEntries = new List<Entry>();
            this.pages = new Dictionary<int, Page>();
            this.parentIds = new List<int>();
            this.allPages = new Dictionary<int, Page>();
            this.allEntries = new Dictionary<int, Entry>();
            this.allCompleteEntries = new List<Entry>();
            this.internetExplorerToNavigations = new Dictionary<InternetExplorer, List<string>>();
            this.internetExplorerToLocation = new Dictionary<InternetExplorer, string>();
            this.parentPage = null;
            this.flashContainers = new Dictionary<int, int>();
            this.control = control;

            webBrowser.BeforeNavigate2 += new DWebBrowserEvents2_BeforeNavigate2EventHandler(webBrowser_BeforeNavigate2);
            webBrowser.NavigateComplete2 += new DWebBrowserEvents2_NavigateComplete2EventHandler(webBrowser_NavigateComplete2);
            httpMonitor = new HttpMonitorLib.HttpMonClass();
            httpMonitor.IEWindow = iEWindow.ToInt32();
            httpMonitor.OnRequest += new HttpMonitorLib._IHttpMonEvents_OnRequestEventHandler(httpMonitor_OnRequest);
            httpMonitor.OnRedirect += new HttpMonitorLib._IHttpMonEvents_OnRedirectEventHandler(httpMonitor_OnRedirect);
            httpMonitor.OnResponse += new HttpMonitorLib._IHttpMonEvents_OnResponseEventHandler(httpMonitor_OnResponse);
            httpMonitor.OnCookieSent += new HttpMonitorLib._IHttpMonEvents_OnCookieSentEventHandler(httpMonitor_OnCookieSent);
            httpMonitor.OnCookieRecieved += new HttpMonitorLib._IHttpMonEvents_OnCookieRecievedEventHandler(httpMonitor_OnCookieRecieved);
            httpMonitor.OnCacheLoaded += new HttpMonitorLib._IHttpMonEvents_OnCacheLoadedEventHandler(httpMonitor_OnCacheLoaded);
            httpMonitor.OnP3PHeaderRecieved += new HttpMonitorLib._IHttpMonEvents_OnP3PHeaderRecievedEventHandler(httpMonitor_OnP3PHeaderRecieved);
            httpMonitor.OnMimeTypeAvailable += new HttpMonitorLib._IHttpMonEvents_OnMimeTypeAvailableEventHandler(httpMonitor_OnMimeTypeAvailable);
            httpMonitor.OnError += new HttpMonitorLib._IHttpMonEvents_OnErrorEventHandler(httpMonitor_OnError);
            httpMonitor.OnDataRecieved += new HttpMonitorLib._IHttpMonEvents_OnDataRecievedEventHandler(httpMonitor_OnDataRecieved);
            httpMonitor.ConfirmRequest += new HttpMonitorLib._IHttpMonEvents_ConfirmRequestEventHandler(httpMonitor_ConfirmRequest);
            httpMonitor.GetIServiceProviderOnStart += new HttpMonitorLib._IHttpMonEvents_GetIServiceProviderOnStartEventHandler(httpMonitor_GetIServiceProviderOnStart);
        }

        #region Events

        private void webBrowser_BeforeNavigate2(object pDisp, ref object URL, ref object Flags, ref object TargetFrameName, ref object PostData, ref object Headers, ref bool Cancel)
        {
            InternetExplorer webBrowser = (pDisp as InternetExplorer);
            List<string> navigations = null;
            if (internetExplorerToNavigations.ContainsKey(webBrowser))
            {
                navigations = internetExplorerToNavigations[webBrowser];
            }
            else
            {
                navigations = new List<string>();
                internetExplorerToNavigations[webBrowser] = navigations;
            }

            internetExplorerToLocation[webBrowser] = URL as string;

            navigations.Add(URL as string);
        }

        private void webBrowser_NavigateComplete2(object pDisp, ref object URL)
        {
            InternetExplorer webBrowser = pDisp as InternetExplorer;
            List<string> navigations = internetExplorerToNavigations[webBrowser];
            string url = URL as string;
            internetExplorerToLocation[webBrowser] = url;

            if (!navigations[navigations.Count - 1].Equals(url))
            {
                List<Entry> entries = new List<Entry>(this.entries.Values);
                foreach (Entry entry in entries)
                {
                    if (entry.Url.Equals(navigations[navigations.Count - 1]))
                    {
                        Entry tempEntry = entry;
                        List<string> tempNavigations = new List<string>();
                        while (tempEntry.RedirectedEntry != null)
                        {
                            tempEntry = tempEntry.RedirectedEntry;
                            tempNavigations.Add(tempEntry.Url);
                        }
                        if (tempEntry.Url.Equals(url))
                        {
                            navigations.AddRange(tempNavigations);
                            break;
                        }
                    }
                }
            }
        }

        private void httpMonitor_OnRequest(int id, int containerId, string url, string headers, string method, object postData)
        {
            Entry entry = GetEntryThreadSafe(id, containerId, url);
            entry.RequestHeaders = headers;
        }

        private void httpMonitor_OnRedirect(int id, int containerId, int redirectedId, string url, string redirectedUrl, string responseHeaders, string requestHeaders)
        {
            Entry entry = GetEntryThreadSafe(id, containerId, url, true);
            entry.ResponseHeaders = responseHeaders;
            entry.RedirectedEntry = GetEntryThreadSafe(redirectedId, containerId, redirectedUrl);
            entry.RedirectedEntry.RedirectedFromEntry = entry;
            entry = entry.RedirectedEntry;
            entry.RequestHeaders = requestHeaders;
        }

        private void httpMonitor_OnResponse(int id, int containerId, string url, int responseCode, string headers)
        {
            Entry entry = GetEntryThreadSafe(id, containerId, url);
            entry.ResponseHeaders = headers;
        }

        private void httpMonitor_OnDataRecieved(int id, int containerId, string url, object data, bool isComplete)
        {
            Entry entry = GetEntryThreadSafe(id, containerId, url, isComplete);
            if (entry != null)
            {
                entry.DataLoaded = isComplete;
                entry.Data.AddRange((byte[])data);
            }
        }

        private void httpMonitor_OnCookieSent(int id, int containerId, string url, string cookies)
        {
            GetEntryThreadSafe(id, containerId, url).CookiesSent = cookies;
        }

        private void httpMonitor_OnCookieRecieved(int id, int containerId, string url, string cookies)
        {
            GetEntryThreadSafe(id, containerId, url).CookiesRecieved = cookies;
        }

        private void httpMonitor_OnMimeTypeAvailable(int id, int containerId, string url, string type)
        {
            GetEntryThreadSafe(id, containerId, url).MimeType = type;
        }

        private void httpMonitor_OnCacheLoaded(int id, int containerId, string url, string location)
        {
            GetEntryThreadSafe(id, containerId, url).CachePath = location;
        }

        private void httpMonitor_OnP3PHeaderRecieved(int id, int containerId, string url, string p3PHeader)
        {
            GetEntryThreadSafe(id, containerId, url).P3PHeader = p3PHeader;
        }

        private void httpMonitor_OnError(int id, int containerId, string url, int result, int errorCode)
        {
            Entry entry = GetEntryThreadSafe(id, containerId, url, true);
            if (entry != null)
            {
                entry.Error = errorCode;
            }
        }

        private void httpMonitor_ConfirmRequest(int id, int containerId, string url, int totalInstances, ref bool itsMine)
        {
            //containerId is zero for filter:progid:DXImageTransform.Microsoft.AlphaImageLoader. Now we really do not have any clue
            if (flashContainers.ContainsKey(containerId))
            {
                itsMine = true;
                return;
            }

            if (totalInstances == 1)
            {
                itsMine = true;
                flashContainers[GetUrlHash(url)] = containerId;
                return;
            }

            foreach (string location in internetExplorerToLocation.Values)
            {
                if (GetUrlHash(location) == containerId)
                {
                    itsMine = true;
                    flashContainers[GetUrlHash(url)] = containerId;
                    return;
                }
            }
        }

        private void httpMonitor_GetIServiceProviderOnStart(int id, int containerId, string url, int ptr)
        {
            IServiceProvider sp = (IServiceProvider)Marshal.GetObjectForIUnknown((IntPtr)ptr);

            //Look for any of the following interfaces using sp.QueryService
            //IUknown, IMarshal, IShellBrowser, IWebBrowserApp, IPhishingFilterManagerCallback, ITimerService, IHTMLWindow2,
            //IWebPageMetaInfo, IInternetHostSecurityManager, IHttpNegotiate2, IWebBrowserEventsService, IAccessible, IBindStatusCallback,
            //IHlinkFrame, IAuthenticate, IHttpNegotiate, IWindowForBindingUI, IInternetBindInfo, IInternetProtocolSink, ITravelLogStg,
            //ITargetFrame2, INewWindowManagerCallback, IDocHostUIHandler, IProfferService, IOleUndoManager, INewWindowManager, ITargetFrame
        }

        #endregion

        public List<string> Navigations
        {
            get
            {
                return internetExplorerToNavigations[webBrowser];
            }
        }

        public InternetExplorer WebBrowser
        {
            get
            {
                return webBrowser;
            }
        }

        public Page ParentPage
        {
            get
            {
                return parentPage;
            }
        }

        public List<Entry> Entries
        {
            get
            {
                List<Entry> ens = new List<Entry>(entries.Values);
                ens.AddRange(completeEntries);
                return ens;
            }
        }

        public List<Page> Children
        {
            get
            {
                return new List<Page>(pages.Values);
            }
        }

        public List<Entry> AllEntries
        {
            get
            {
                List<Entry> ens = new List<Entry>(allEntries.Values);
                ens.AddRange(allCompleteEntries);
                return ens;
            }
        }

        public List<Page> AllPages
        {
            get
            {
                return new List<Page>(allPages.Values);
            }
        }

        public Dictionary<InternetExplorer, List<string>> AllIEWithNavigations
        {
            get
            {
                return internetExplorerToNavigations;
            }
        }

        public void Navigate(string url)
        {
            object o = null;
            webBrowser.Navigate(url, ref o, ref o, ref o, ref o);
        }

        private Page GetPage(int containerId)
        {
            if (allPages.ContainsKey(containerId))
            {
                return allPages[containerId];
            }
            if (GetUrlHash(internetExplorerToLocation[this.webBrowser]) == containerId)
            {
                this.containerId = containerId;
                allPages[containerId] = this;
                return this;
            }

            List<int> parentIds = new List<int>(this.parentIds);
            parentIds.Add(this.containerId);
            InternetExplorer webBrowser = null;
            if (GetContainerIdHierarchy((HTMLDocumentClass)this.webBrowser.Document, containerId, ref parentIds, ref webBrowser))
            {
                Dictionary<int, Page> pages = this.pages;
                Page page = this;
                List<int> ids = new List<int>();
                ids.Add(this.containerId);
                List<int> myHierarchy = new List<int>(parentIds);
                myHierarchy.Add(containerId);
                for (int i = 1; i < myHierarchy.Count; i++)
                {
                    if (myHierarchy[i] == 0)
                    {
                        continue;
                    }
                    if (pages.ContainsKey(myHierarchy[i]))
                    {
                        page = pages[myHierarchy[i]];
                    }
                    else
                    {
                        page = new Page(myHierarchy[i], ids, webBrowser, page, internetExplorerToNavigations, internetExplorerToLocation);
                        pages[myHierarchy[i]] = page;
                        allPages[myHierarchy[i]] = page;
                    }
                    ids.Add(myHierarchy[i]);
                    pages = page.pages;
                }
                return page;
            }
            return null;
        }

        private Entry GetEntryThreadSafe(int id, int containerId, string url)
        {
            return GetEntryThreadSafe(id, containerId, url, false);
        }

        private Entry GetEntryThreadSafe(int id, int containerId, string url, bool remove)
        {
            Entry entry = null;
            control.Invoke((MethodInvoker)delegate
            {
                Page page;
                entry = GetEntry(id, containerId, url, out page, !remove);
                if (remove && entry != null)
                {
                    if (page != null)
                    {
                        page.entries.Remove(id);
                        page.completeEntries.Add(entry);
                    }
                    allEntries.Remove(id);
                    allCompleteEntries.Add(entry);
                }
            });
            return entry;
        }

        private Entry GetEntry(int id, int containerId, string url, out Page page)
        {
            return GetEntry(id, containerId, url, out page, true);
        }

        private Entry GetEntry(int id, int containerId, string url, out Page page, bool createNew)
        {
            page = null;
            if (flashContainers.ContainsKey(containerId))
            {
                containerId = flashContainers[containerId];
            }

            int tempContainerId = GetUrlHash(url);
            if ((page = GetPage(tempContainerId)) == null)
            {
                if ((page = GetPage(containerId)) == null)
                {
                    if (allEntries.ContainsKey(id))
                    {
                        return allEntries[id];
                    }

                    if (createNew)
                    {
                        Entry e = new Entry(url, null);
                        allEntries[id] = e;
                        return e;
                    }

                    return null;
                }
            }

            if (page.entries.ContainsKey(id))
            {
                return page.entries[id];
            }

            if (allEntries.ContainsKey(id))
            {
                Entry entry = allEntries[id];
                page.entries[id] = entry;
                return entry;
            }

            if (createNew)
            {
                Entry entry = new Entry(url, page);
                page.entries[id] = entry;
                allEntries[id] = entry;
                return entry;
            }
            return null;
        }

        private bool GetContainerIdHierarchy(HTMLDocumentClass document, int containerId, ref List<int> parentIds, ref InternetExplorer webBrowser)
        {
            IHTMLElementCollection frames = document.getElementsByTagName("iframe");
            foreach (HTMLIFrameClass frame in frames)
            {
                List<int> list = new List<int>(parentIds);
                InternetExplorer ie = GetInternetExplorer(frame.contentWindow);
                if (GetUrlHash(internetExplorerToLocation[ie]) == containerId)
                {
                    webBrowser = ie;
                    parentIds = list;
                    return true;
                }
                else
                {
                    list.Add(GetUrlHash(internetExplorerToLocation[ie]));
                    if (GetContainerIdHierarchy((HTMLDocumentClass)ie.Document, containerId, ref list, ref webBrowser))
                    {
                        parentIds = list;
                        return true;
                    }
                }
            }
            return false;
        }

        private int GetUrlHash(string url)
        {
            if (string.IsNullOrEmpty(url))
            {
                return 0;
            }
            if (url.Equals("about:blank"))
            {
                return 0;
            }
            Uri uri = new Uri(url);
            if (uri.Fragment.Length > 0)
            {
                url = url.Replace(uri.Fragment, "");
            }
            int hash = 0;
            for (int i = 0; i < url.Length; i++)
            {
                hash = 31 * hash + url[i];
            }
            return hash;
        }

        private InternetExplorer GetInternetExplorer(IHTMLWindow2 iHTMLWindow2)
        {
            IServiceProvider provider = (IServiceProvider)iHTMLWindow2;

            Guid webBrowserApp = typeof(IWebBrowserApp).GUID;
            Guid webBrowser2 = typeof(InternetExplorer).GUID;

            object o;
            provider.QueryService(ref webBrowserApp, ref webBrowser2, out o);

            if (o != null)
            {
                InternetExplorer internetExplorer = (InternetExplorer)o;
                return internetExplorer;
            }
            return null;
        }

        public override string ToString()
        {
            return internetExplorerToLocation[webBrowser];
        }
    }
}
