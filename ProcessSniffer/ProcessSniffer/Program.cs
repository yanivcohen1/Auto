using System;
using Fiddler;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Threading;
using System.Runtime.InteropServices;

namespace ProcessSniffer
{
    class Program
    {
        string m_filename = null;
        List<string> m_FileWhitoutCache = new List<string>();
        List<string> m_AllFileWhitoutCache = new List<string>();
        TaskScheduler m_Context;
        bool m_stop = false;
        string[] m_lines;
        string m_FirstLine;
        private static StreamWriter m_SW;
        static AutoResetEvent m_autoEvent = new AutoResetEvent(false);
        static Proxy m_oSecureEndpoint;
        static string m_sSecureEndpointHostname = "localhost";
        static int m_iSecureEndpointPort = 7777;
        static List<Fiddler.Session> m_oAllSessions = new List<Fiddler.Session>();
        Thread thread1;
        static int m_ProcessID = 0;
        static int m_TimeoutSec;//

        [DllImport("user32.dll")]
        static extern uint GetWindowThreadProcessId(IntPtr hWnd, IntPtr ProcessId);

        static void Main(string[] args)
        {
            m_TimeoutSec = Convert.ToInt32(args[0]);
            try
            {
                IntPtr windowHandel = (IntPtr)Convert.ToUInt32(args[1]);
                IntPtr pID = (IntPtr)GetWindowThreadProcessId(windowHandel, IntPtr.Zero);
                m_ProcessID = pID.ToInt32();
            }
            catch (Exception)
            {  }
            Program program = new Program();
            program.start();
        }

        private void start()
        {
            Thread thread1 = new Thread(FiddlerThraed);
            thread1.IsBackground = true;
            thread1.Start();
            StartMonitor();
            Thread.Sleep(m_TimeoutSec * 1000);
            //StopMonitor();
            DoQuit();
        }

        private void FiddlerThraed()
        {
            #region AttachEventListeners

            //
            // It is important to understand that FiddlerCore calls event handlers on session-handling
            // background threads.  If you need to properly synchronize to the UI-thread (say, because
            // you're adding the sessions to a list view) you must call .Invoke on a delegate on the
            // window handle.
            //
            // If you are writing to a non-threadsafe data structure (e.g. List<t>) you must
            // use a Monitor or other mechanism to ensure safety.
            //

            // Simply echo notifications to the console.  Because Fiddler.CONFIG.QuietMode=true
            // by default, we must handle notifying the user ourselves.
            //Fiddler.FiddlerApplication.OnNotification += delegate(object sender, NotificationEventArgs oNEA) { Console.WriteLine("** NotifyUser: " + oNEA.NotifyString); };
            //Fiddler.FiddlerApplication.Log.OnLogString += delegate(object sender, LogEventArgs oLEA) { Console.WriteLine("** LogString: " + oLEA.LogString); };

            Fiddler.FiddlerApplication.BeforeRequest += delegate(Fiddler.Session oS)
            {
                // Console.WriteLine("Before request for:\t" + oS.fullUrl);
                // In order to enable response tampering, buffering mode MUST
                // be enabled; this allows FiddlerCore to permit modification of
                // the response in the BeforeResponse handler rather than streaming
                // the response to the client as the response comes in.
                oS.bBufferResponse = false;
                Monitor.Enter(m_oAllSessions);
                if (oS.LocalProcessID == m_ProcessID || m_ProcessID == 0)
                {
                    m_oAllSessions.Add(oS);
                    Console.Out.WriteLine(oS.fullUrl);
                }
                Monitor.Exit(m_oAllSessions);

                /* If the request is going to our secure endpoint, we'll echo back the response.

                Note: This BeforeRequest is getting called for both our main proxy tunnel AND our secure endpoint,
                so we have to look at which Fiddler port the client connected to (pipeClient.LocalPort) to determine whether this request
                was sent to secure endpoint, or was merely sent to the main proxy tunnel (e.g. a CONNECT) in order to *reach* the secure endpoint.

                As a result of this, if you run the demo and visit https://localhost:7777 in your browser, you'll see

                Session list contains...

                    1 CONNECT http://localhost:7777
                    200                                         <-- CONNECT tunnel sent to the main proxy tunnel, port 8877

                    2 GET https://localhost:7777/
                    200 text/html                               <-- GET request decrypted on the main proxy tunnel, port 8877

                    3 GET https://localhost:7777/
                    200 text/html                               <-- GET request received by the secure endpoint, port 7777
                */

                if ((oS.oRequest.pipeClient.LocalPort == m_iSecureEndpointPort) && (oS.hostname == m_sSecureEndpointHostname))//&& (oS.LocalProcessID == m_ProcessID)
                {
                    oS.utilCreateResponseAndBypassServer();
                    oS.oResponse.headers.HTTPResponseStatus = "200 Ok";
                    oS.oResponse["Content-Type"] = "text/html; charset=UTF-8";
                    oS.oResponse["Cache-Control"] = "private, max-age=0";
                    oS.utilSetResponseBody("<html><body>Request for httpS://" + m_sSecureEndpointHostname + ":" + m_iSecureEndpointPort.ToString() + " received. Your request was:<br /><plaintext>" + oS.oRequest.headers.ToString());
                }

                //Task.Factory.StartNew(() =>
                //{
                //    T_Result.Text += String.Format("{0} {1} {2}\n{3} {4}\n\n", oS.id, oS.oRequest.headers.HTTPMethod, Ellipsize(oS.fullUrl, 120), oS.responseCode, oS.oResponse.MIMEType);
                //    //T_Result.Text = ArrayToStringGeneric(FileWhitoutCache, Environment.NewLine);
                //}, Task.Factory.CancellationToken, TaskCreationOptions.None, Context);//.Wait();
            };

            //Fiddler.FiddlerApplication.ResponseHeadersAvailable += delegate(Fiddler.Session oS)
            //{
            //    if (IsRunning)
            //    {
            //        Task.Factory.StartNew(() =>
            //        {
            //            T_Result.Text = String.Format("{0} {1} {2}\n{3} {4}\n\n", oS.id, oS.oRequest.headers.HTTPMethod, Ellipsize(oS.fullUrl, 120), oS.responseCode, oS.oResponse.MIMEType) + T_Result.Text;
            //            //T_Result.Text = ArrayToStringGeneric(FileWhitoutCache, Environment.NewLine);
            //        }, Task.Factory.CancellationToken, TaskCreationOptions.None, Context);//.Wait();
            //    }
            //};
            /*
                // The following event allows you to examine every response buffer read by Fiddler. Note that this isn't useful for the vast majority of
                // applications because the raw buffer is nearly useless; it's not decompressed, it includes both headers and body bytes, etc.
                //
                // This event is only useful for a handful of applications which need access to a raw, unprocessed byte-stream
                Fiddler.FiddlerApplication.OnReadResponseBuffer += new EventHandler<RawReadEventArgs>(FiddlerApplication_OnReadResponseBuffer);
            */

            /*
            Fiddler.FiddlerApplication.BeforeResponse += delegate(Fiddler.Session oS) {
                // Console.WriteLine("{0}:HTTP {1} for {2}", oS.id, oS.responseCode, oS.fullUrl);

                // Uncomment the following two statements to decompress/unchunk the
                // HTTP response and subsequently modify any HTTP responses to replace
                // instances of the word "Microsoft" with "Bayden". You MUST also
                // set bBufferResponse = true inside the beforeREQUEST method above.
                //
                //oS.utilDecodeResponse(); oS.utilReplaceInResponse("Microsoft", "Bayden");
            };*/

            //Fiddler.FiddlerApplication.AfterSessionComplete += delegate(Fiddler.Session oS)
            //{
            //    //Console.WriteLine("Finished session:\t" + oS.fullUrl);
            //    if (bUpdateTitle)
            //    {
            //        Console.Title = ("Session list contains: " + oAllSessions.Count.ToString() + " sessions");
            //    }
            //};

            // Tell the system console to handle CTRL+C by calling our method that
            // gracefully shuts down the FiddlerCore.
            //
            // Note, this doesn't handle the case where the user closes the window with the close button.
            // See http://geekswithblogs.net/mrnat/archive/2004/09/23/11594.aspx for info on that...
            //
            //Console.CancelKeyPress += new ConsoleCancelEventHandler(Console_CancelKeyPress);

            #endregion AttachEventListeners

            // For the purposes of this demo, we'll forbid connections to HTTPS
            // sites that use invalid certificates. Change this from the default only
            // if you know EXACTLY what that implies.
            Fiddler.CONFIG.IgnoreServerCertErrors = false;

            // ... but you can allow a specific (even invalid) certificate by implementing and assigning a callback...
            // FiddlerApplication.OverrideServerCertificateValidation += new OverrideCertificatePolicyHandler(FiddlerApplication_OverrideServerCertificateValidation);

            FiddlerApplication.Prefs.SetBoolPref("fiddler.network.streaming.abortifclientaborts", true);

            // For forward-compatibility with updated FiddlerCore libraries, it is strongly recommended that you
            // start with the DEFAULT options and manually disable specific unwanted options.
            FiddlerCoreStartupFlags oFCSF = FiddlerCoreStartupFlags.Default;
            // E.g. uncomment the next line if you don't want FiddlerCore to act as the system proxy
            // oFCSF = (oFCSF & ~FiddlerCoreStartupFlags.RegisterAsSystemProxy);
            // or uncomment the next line if you don't want to decrypt SSL traffic.
            // oFCSF = (oFCSF & ~FiddlerCoreStartupFlags.DecryptSSL);
            //
            // NOTE: Because we haven't disabled the option to decrypt HTTPS traffic, makecert.exe
            // must be present in this executable's folder.

            // NOTE: In the next line, you can pass 0 for the port (instead of 8877) to have FiddlerCore auto-select an available port
            Fiddler.FiddlerApplication.Startup(8877, oFCSF);
            m_oSecureEndpoint = FiddlerApplication.CreateProxyEndpoint(m_iSecureEndpointPort, true, m_sSecureEndpointHostname);
            m_autoEvent.WaitOne();
        }

        private void StopMonitor()
        {
            try
            {
                Monitor.Enter(m_oAllSessions);
                //int i = 0;
                foreach (Session oS in m_oAllSessions)
                {
                    //Debug.Write(String.Format("{0} {1} {2}\n{3} {4}\n\n", oS.id, oS.oRequest.headers.HTTPMethod, Ellipsize(oS.fullUrl, 60), oS.responseCode, oS.oResponse.MIMEType));
                    m_SW.Write(Ellipsize(oS.fullUrl, 200) + ",");//cache
                    string code = "404";
                    try
                    {
                        code = Convert.ToString(oS.responseCode);
                    }
                    catch (Exception) { }
                    //FieldInfo fiComWebBrowser = typeof(System.Windows.Controls.WebBrowser).GetField("_axIWebBrowser2", BindingFlags.Instance | BindingFlags.NonPublic);
                    //if (fiComWebBrowser == null) return;
                    //object objComWebBrowser = fiComWebBrowser.GetValue(wb);
                    //if (objComWebBrowser == null) return;
                    //objComWebBrowser.GetType().InvokeMember("Silent", BindingFlags.SetProperty, null, objComWebBrowser, new object[] { Hide });
                    //SW.Write((new System.Collections.Generic.Mscorlib_CollectionDebugView<Fiddler.HTTPHeaderItem>(((Fiddler.HTTPHeaders)(oS.oResponse.headers)).storage)).Items[1].Value + ",");
                    m_SW.Write(code + ",");//status
                    m_SW.Write(oS.oResponse.headers[1].Value + Environment.NewLine);
                }
            }
            finally
            {
                Monitor.Exit(m_oAllSessions);
            }
        }

        private static void StartMonitor()
        {
            Monitor.Enter(m_oAllSessions);
            m_oAllSessions.Clear();
            Monitor.Exit(m_oAllSessions);
        }

        private static string Ellipsize(string s, int iLen)
        {
            if (s.Length <= iLen) return s;
            return s.Substring(0, iLen - 3) + "...";
        }

        private static void DoQuit()
        {
            m_autoEvent.Set();
            if (null != m_oSecureEndpoint) m_oSecureEndpoint.Dispose();
            Fiddler.FiddlerApplication.Shutdown();
            Thread.Sleep(500);
        }

    }
}
