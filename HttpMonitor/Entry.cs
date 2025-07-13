using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Demo
{
    public class Entry
    {
        private string url;
        private string requestHeaders;
        private string responseHeaders;
        private Entry redirectedEntry;
        private Entry redirectedFromEntry;
        private List<byte> data;
        private bool? dataLoaded;

        private string cookiesSent;
        private string cookiesRecieved;
        private string cachePath;
        private string p3PHeader;
        private string mimeType;
        private int error;

        private Page page;

        public Entry(string url, Page page)
        {
            this.page = page;
            this.url = url;
            this.requestHeaders = string.Empty;
            this.responseHeaders = string.Empty;
            this.redirectedEntry = null;
            this.redirectedFromEntry = null;
            this.data = new List<byte>();
            this.dataLoaded = null;
            this.cookiesSent = string.Empty;
            this.cookiesRecieved = string.Empty;
            this.cachePath = string.Empty;
            this.p3PHeader = string.Empty;
            this.mimeType = string.Empty;
            this.error = -1;
        }

        public Page Page
        {
            get
            {
                return page;
            }
        }

        public string Url
        {
            get
            {
                return url;
            }
        }

        public string RequestHeaders
        {
            get
            {
                return requestHeaders;
            }

            internal set
            {
                requestHeaders = value.TrimEnd("\r\n".ToCharArray());
            }
        }

        public string ResponseHeaders
        {
            get
            {
                return responseHeaders;
            }

            internal set
            {
                responseHeaders = value.TrimEnd("\r\n".ToCharArray());
            }
        }

        public Entry RedirectedEntry
        {
            get
            {
                return redirectedEntry;
            }
            internal set
            {
                redirectedEntry = value;
            }
        }

        public Entry RedirectedFromEntry
        {
            get
            {
                return redirectedFromEntry;
            }
            internal set
            {
                redirectedFromEntry = value;
            }
        }

        public List<byte> Data
        {
            get
            {
                return data;
            }
        }

        public string CookiesSent
        {
            get
            {
                return cookiesSent;
            }

            set
            {
                cookiesSent = value;
            }
        }

        public string CookiesRecieved
        {
            get
            {
                return cookiesRecieved;
            }
            set
            {
                cookiesRecieved = value;
            }
        }

        public string CachePath
        {
            get
            {
                return cachePath;
            }
            set
            {
                cachePath = value;
            }
        }

        public string P3PHeader
        {
            get
            {
                return p3PHeader;
            }
            set
            {
                p3PHeader = value;
            }
        }

        public string MimeType
        {
            get
            {
                return mimeType;
            }
            set
            {
                mimeType = value;
            }
        }

        public bool? DataLoaded
        {
            get
            {
                return dataLoaded;
            }
            internal set
            {
                dataLoaded = value;
            }
        }

        public int Error
        {
            get
            {
                return error;
            }
            set
            {
                error = value;
            }
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append(url).Append("\r\n");
            if (redirectedFromEntry != null)
            {
                sb.Append("FROM - ").Append(redirectedFromEntry.url).Append("\r\n");
            }
            if (redirectedEntry != null)
            {
                sb.Append("TO - ").Append(redirectedEntry.url).Append("\r\n");
            }
            sb.Append("REQUEST HEADERS - \r\n").Append(requestHeaders).Append("\r\n").Append(cookiesSent)
                .Append("\r\n").Append("RESPONSE HEADERS - \r\n").Append(responseHeaders).Append("\r\n").Append(p3PHeader).Append("\r\n").Append(cookiesRecieved).Append("\r\n");
            if (cachePath.Length != 0)
            {
                sb.Append("CACHE PATH - ").Append(cachePath).Append("\r\n");
            }
            if (error != -1)
            {
                sb.Append("ERROR OCCURED WITH CODE - ").Append(error).Append("\r\n");
            }
            sb.Append("--------------\r\n");
            return sb.ToString();
        }
    }
}
