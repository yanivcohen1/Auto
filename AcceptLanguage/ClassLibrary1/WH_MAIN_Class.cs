using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;

//http://www.codeguru.com/csharp/csharp/cs_linq/print.php/c15489__7/

namespace WH_MAIN_Service
{
    public class Common
    {
        public enum Status
        {
            Fail = 0,
            Pass = 1,
            NotRun = 2
        }
        AutomationEntities1 publishContext;

        class SingleURI
        {
            public Status status1 = Status.NotRun;
            public HttpWebRequest Request;
            public HttpWebResponse Respose;
            public int index;
        }

        Status[] statss;
        HttpWebResponse[] Resposes;
        HttpWebRequest[] Requestss;
        List<IAsyncResult> ar_list;
        //List<Thread> ThreadList;
        bool ExitError = false;
        int SendURI_Error_index = -1;
        bool totalFail;

        public Common(out AutomationEntities1 publishContext, out string error)
        {
            error = null;
            try
            {
                publishContext = new AutomationEntities1();
            }
            catch (Exception ex)
            {
                error = ex.Message;
                publishContext = null;
            }

            #region OLD SQL Connection

            /* •———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————•
               | #region Building the connection string                                                                                |
               |                                                                                                                       |
               | string Server = "AD-MD1,1435";                                                                                        |
               | string Username = "Yanivc";                                                                                           |
               | string Password = "YA123456";                                                                                         |
               | string Database = "epap";                                                                                             |
               |                                                                                                                       |
               | string ConnectionString = "Data Source=" + Server + ";";                                                              |
               | ConnectionString += "User ID=" + Username + ";";                                                                      |
               | ConnectionString += "Password=" + Password + ";";                                                                     |
               | ConnectionString += "Initial Catalog=" + Database;                                                                    |
               |                                                                                                                       |
               | #endregion Building the connection string                                                                             |
               |                                                                                                                       |
               | #region Try to establish a connection to the database                                                                 |
               |                                                                                                                       |
               | SQLConnection = new SqlConnection();                                                                                  |
               | try                                                                                                                   |
               | {                                                                                                                     |
               |     SQLConnection.ConnectionString = ConnectionString;                                                                |
               |     SQLConnection.Open();                                                                                             |
               |                                                                                                                       |
               |     // You can get the server version                                                                                 |
               |     // SQLConnection.ServerVersion                                                                                    |
               | }                                                                                                                     |
               | catch (Exception Ex)                                                                                                  |
               | {                                                                                                                     |
               |     // Try to close the connection                                                                                    |
               |     if (SQLConnection != null)                                                                                        |
               |         SQLConnection.Dispose();                                                                                      |
               |                                                                                                                       |
               |     // Create a (useful) error message                                                                                |
               |     string ErrorMessage = "A error occurred while trying to connect to the server.";                                  |
               |     ErrorMessage += Environment.NewLine;                                                                              |
               |     ErrorMessage += Environment.NewLine;                                                                              |
               |     ErrorMessage += Ex.Message;                                                                                       |
               |                                                                                                                       |
               |     // Show error message (this = the parent Form object)                                                             |
               |     // MessageBox.Show(this, ErrorMessage, "Connection error", MessageBoxButtons.OK, MessageBoxIcon.Error);           |
               |                                                                                                                       |
               |     // Stop here                                                                                                      |
               |     error = true;  //error                                                                                            |
               |     //return true;                                                                                                    |
               | }                                                                                                                     |
               | //return false;                                                                                                       |
               | error = false;                                                                                                        |
               |                                                                                                                       |
               | #endregion Try to establish a connection to the database                                                              |
               |    •—————————————————————————————————————————————————————————————————————————————————————————————————————————————• */

            #endregion OLD SQL Connection
        }

        public AutomationEntities1 Get_DB_Entitie(string SQLStatement, DataTable dtResult)
        {
            #region Execute a SQL query

            //// string SQLStatement = "SELECT [CASINONAME],[Domain],[CODE],[Groupp] FROM dbo.PAP_admincasinos_images ORDER BY [Groupp] DESC";//*= Groupp
            //// string SQLStatement = "SELECT dbo.PAP_admincasinos_images_emails.Email, dbo.PAP_admincasinos_images_emails.Coment, dbo.PAP_admincasinos_images_emails.Group FROM  dbo.PAP_admincasinos_images_emails RIGHT OUTER JOIN dbo.PAP_admincasinos_images_emails AS dbo.PAP_admincasinos_images ON dbo.PAP_admincasinos_images_emails.Group = dbo.PAP_admincasinos_images.Groupp";
            //// Create a SqlDataAdapter to get the results as DataTable
            //SqlConnection SQLConnection = null;
            //try
            //{
            //    SqlDataAdapter SQLDataAdapter = new SqlDataAdapter(SQLStatement, SQLConnection);
            //    SQLDataAdapter.Fill(dtResult);
            //    SQLDataAdapter.Dispose();
            //}
            //catch (Exception)
            //{
            //    return true;
            //}
            //return false;
            //// Create a new DataTable
            //// DataTable dtResult = new DataTable();
            ////dataGridView2.DataSource = dtResult;
            //// Fill the DataTable with the result of the SQL statement
            ////SQLDataAdapter.Fill(dtResult);
            ////SQLStatement = "SELECT TOP 1000 ";
            ////SQLStatement += "[Email]";
            ////SQLStatement += ",[Group]";
            ////SQLStatement += ",[Coment]";
            ////SQLStatement += "FROM [epap].[dbo].[PAP_admincasinos_images_emails]";
            ////SQLStatement += "ORDER BY [Group] DESC";
            ////SQLDataAdapter = new SqlDataAdapter(SQLStatement, SQLConnection);
            ////DataTable dtResult2 = new DataTable();
            ////SQLDataAdapter.Fill(dtResult2);
            ////dataGridView2.DataSource = dtResult2;
            //////Loop through all entries
            ////string data = "es.williamhillpoker.com";
            //////foreach (DataRow drRow in dtResult.Rows)
            //////{
            //////    // Show a message box with the content of
            //////    // the "Name" column
            //////    MessageBox.Show(drRow["Name"].ToString());
            //////}
            ////foreach (DataRow drRow in dtResult.Rows)
            ////{
            ////    if (drRow["Domain"].ToString().ToLower() == data.ToLower())
            ////    {
            ////        foreach (DataRow drRow2 in dtResult2.Rows)
            ////        {
            ////            if (drRow2["Group"].ToString().ToLower() == drRow["Groupp"].ToString().ToLower())
            ////            {
            ////                MessageBox.Show("email: " + drRow2["Email"].ToString() + "\r\nDomain: " + drRow["Domain"].ToString());
            ////            }
            ////        }
            ////    }
            ////}

            ////dataGridView2.DataSource = dtResult;
            //// We don't need the data adapter any more
            ////SQLDataAdapter.Dispose();

            #endregion Execute a SQL query

            return publishContext;
        }

        public int SendURI(HttpWebRequest[] Requests, bool _ExitError, out  HttpWebResponse[] ResposeArry, out Status[] stats)
        {
            statss = new Status[Requests.Length];

            totalFail = false;
            ResposeArry = new HttpWebResponse[Requests.Length];
            //stats = new Status[Requests.Length];
            stats = Enumerable.Repeat(Status.NotRun, Requests.Length).ToArray();
            SendURI_Error_index = -1;
            for (int i = 0; i < Requests.Length; i++)//Convert.ToInt32(TB)
            {
                Requests[i].Timeout = 20000;
                string msg = null;
                try
                {
                    //ClearCookies();
                    //ClearCache();
                    HttpWebResponse response = (HttpWebResponse)Requests[i].GetResponse();
                    ResposeArry[i] = response;
                    //string IsFromCache = " IsFromCache? " + response.IsFromCache.ToString();
                    //foreach (Cookie c in response.Cookies)
                    //{
                    //    //Debug.WriteLine(Requests[i].Headers.GetValues(1).ToString());
                    //    Debug.WriteLine(" Name:   " + c.Name);
                    //    Debug.WriteLine(" Value:  " + c.Value);
                    //    Debug.WriteLine(" Path:   " + c.Path);
                    //    Debug.WriteLine(" Domain: " + c.Domain);
                    //    c.Discard = true;
                    //    c.Expired = true;
                    //}
                    stats[i] = Status.Pass;
                }
                catch (Exception ex)
                {
                    msg = ex.Message;
                    stats[i] = Status.Fail;
                    ResposeArry[i] = null;
                    if (_ExitError)
                    {
                        break;
                    }
                }
                Requests[i].Abort();
            }

            #region Parallel

            //Requestss = Requests;
            //ExitError = _ExitError;
            //Resposes = ResposeArry;
            //ThreadList = new List<Thread>();
            //ar_list = new List<IAsyncResult>();
            //SingleURI _SingleURI;
            ////List<SingleURI> URI_List = new List<SingleURI>();
            ////Thread NewThread;
            //for (int i = 0; i < Requests.Length; i++)
            //{
            //    IAsyncResult ar;
            //    Requests[i].Timeout = 10000;
            //    // _SingleURI = new WH_MAIN_Service.Common.SingleURI { Request = Requests[i], Respose = ResposeArry[i], index = i, status1 = Status.NotRun };
            //    try
            //    {
            //        ar = Requests[i].BeginGetResponse(new AsyncCallback(SendSingleUriTrade), Requests[i]);
            //        ar_list.Add(ar);
            //    }
            //    catch (Exception ex)
            //    {
            //    }
            //}
            //Parallel.ForEach(ar_list, ar =>
            //{
            //    ar.AsyncWaitHandle.WaitOne(10000);
            //});
            //foreach (var item in Requestss)
            //{
            //    item.Abort();
            //}
            //ResposeArry = Resposes;

            #endregion Parallel

            //stats = statss;
            return SendURI_Error_index;
        }

        private void SendSingleUriTrade(IAsyncResult Requests)
        {
            //SingleURI S_URI = (SingleURI)_SingleURI;
            //int index = S_URI.index;
            HttpWebRequest Request;
            HttpWebResponse HttpWebResponse1;
            try
            {
                if (SendURI_Error_index == -1)
                {
                    Request = (HttpWebRequest)Requests.AsyncState;
                    HttpWebResponse1 = (HttpWebResponse)Request.EndGetResponse(Requests);
                    for (int i = 0; i < Requestss.Length; i++)
                    {
                        if (Requestss[i].Headers.GetValues(1).GetValue(0) == Request.Headers.GetValues(1).GetValue(0))
                        {
                            Resposes[i] = HttpWebResponse1;
                            statss[i] = Status.Pass;
                        }
                    }
                    // S_URI.status1 = Status.Pass;
                }
            }
            catch (Exception)
            {
                if (ExitError & !totalFail)
                {
                    //SendURI_Error_index = S_URI.index;
                    //S_URI.status1 = Status.Fail;
                    //S_URI.Respose = null;
                    totalFail = true;
                    //foreach (var ar in ar_list)
                    //{
                    //    ar.AsyncWaitHandle.Close();
                    //}
                }
            }
            // _SingleURI = (IAsyncResult)S_URI;
        }

        private void EmptyCacheFolder(DirectoryInfo folder)
        {
            //loop through all the files in the folder provided
            foreach (FileInfo file in folder.GetFiles())
            {
                try
                {
                    //delete each file
                    file.Delete();
                }
                catch { }
            }
            //now we loop through all the sub directories in the directory provided
            foreach (DirectoryInfo subfolder in folder.GetDirectories())
            {
                //recursively delete all files and folders
                //in each sub directory
                try
                {
                    EmptyCacheFolder(subfolder);
                }
                catch { }
            }
        }

        public bool ClearCookies()
        {
            //variable to hold our status
            bool isEmpty;
            try
            {
                //call EmptyCacheFolder passing the default internet cache
                //folder
                EmptyCacheFolder(new DirectoryInfo(Environment.GetFolderPath(Environment.SpecialFolder.Cookies)));

                //successful so return true
                isEmpty = true;
            }
            catch
            {
                //failed
                isEmpty = false;
            }
            //return status
            return isEmpty;
        }

        public bool ClearCache()
        {
            //variable to hold our status
            bool isEmpty;
            try
            {
                //call EmptyCacheFolder passing the default internet cache
                //folder
                EmptyCacheFolder(new DirectoryInfo(Environment.GetFolderPath(Environment.SpecialFolder.InternetCache)));

                //successful so return true
                isEmpty = true;
            }
            catch
            {
                //failed
                isEmpty = false;
            }
            //return status
            return isEmpty;
        }

        //public bool SendMail(string[] To, string[] CC, string Subject,
        //                 string Content, string[] AttachFiles)
        //{
        //    System.Net.Mail.MailAddress address_To = new System.Net.Mail.MailAddress();
        //    System.Net.Mail.MailAddress address_from = new System.Net.Mail.MailAddress("player_batch@ad-gency.com");
        //    for (int i = 0; i < To.Length; i++)
        //        address_To.Address.Insert(0, To[i]);
        //    using (System.Net.Mail.MailMessage Message = new System.Net.Mail.MailMessage(address_from, address_To))
        //    {
        //        //dynamic mailaddress_to = new System.Net.Mail.MailAddress("leonid.levin@ad-gency.com");
        //        //dynamic mailaddress_efi = new System.Net.Mail.MailAddress("Efi.Shlomo@ad-gency.com");
        //        //dynamic mailaddress_james = new System.Net.Mail.MailAddress("james.mckay@williamhill.com");
        //        foreach (var cc in CC)
        //            Message.CC.Add(cc);
        //        //Message.CC.Add(mailaddress_efi);
        //        //Message.CC.Add(mailaddress_james);
        //        Message.Body = "Report created " + DateTime.Now;
        //        Message.Subject = "Yesterday report";
        //        // System.Net.Mail.Attachment att = new System.Net.Mail.Attachment(path);
        //        // System.Net.Mail.Attachment att_1 = new System.Net.Mail.Attachment(path_1);
        //        // Message.Attachments.Add(att);
        //        // Message.Attachments.Add(att_1);
        //        try
        //        {
        //            using (System.Net.Mail.SmtpClient smtpcl = new System.Net.Mail.SmtpClient("10.117.0.10"))
        //            {
        //                smtpcl.Send(Message);
        //            }
        //        }
        //        catch (System.Net.WebException ehttp)
        //        {
        //            // Interaction.MsgBox(ehttp.ToString());
        //            return true;
        //        }
        //    }
        //    return false;
        //}
        public bool SendMail(string[] To, string[] CC, string Subject,
                         string Content, string[] AttachFiles)
        {
            MailMessage message = new MailMessage();
            message.From = new MailAddress("player_batch@ad-gency.com");
            foreach (var to in To)
            {
                message.To.Add(new MailAddress(to));
            }
            //message.CC.Add(new MailAddress("carboncopy@foo.bar.com"));
            message.Subject = Subject;// "This is my subject";
            message.Body = Content;// "This is the content";
            if (AttachFiles != null)
            {
                foreach (var file in AttachFiles)
                {
                    Attachment data = new Attachment(file, MediaTypeNames.Application.Octet);
                    // Add time stamp information for the file.
                    ContentDisposition disposition = data.ContentDisposition;
                    disposition.CreationDate = System.IO.File.GetCreationTime(file);
                    disposition.ModificationDate = System.IO.File.GetLastWriteTime(file);
                    disposition.ReadDate = System.IO.File.GetLastAccessTime(file);
                    message.Attachments.Add(data);
                }
            }
            SmtpClient client = new SmtpClient("10.117.0.10");
            try
            {
                client.Send(message);
            }
            catch (Exception)
            {
                return true;
            }
            //System.Net.Mail.MailAddress address_To = new System.Net.Mail.MailAddress(To[0]);
            //System.Net.Mail.MailAddress address_from = new System.Net.Mail.MailAddress("player_batch@ad-gency.com");
            //System.Net.Mail.MailAddress address_To = null;
            ////for (int i = 0; i < To.Length; i++)
            ////{
            ////if (i == 0)
            ////{
            //address_To = new System.Net.Mail.MailAddress(To[0]);
            ////}
            ////else
            ////{
            ////address_To.Address.Insert(0, To[i] + "; ");
            ////}
            ////}
            //using (System.Net.Mail.MailMessage Message = new System.Net.Mail.MailMessage(address_from, address_To))
            //{
            //    //dynamic mailaddress_to = new System.Net.Mail.MailAddress("leonid.levin@ad-gency.com");
            //    //dynamic mailaddress_efi = new System.Net.Mail.MailAddress("Efi.Shlomo@ad-gency.com");
            //    //dynamic mailaddress_james = new System.Net.Mail.MailAddress("james.mckay@williamhill.com");
            //    if (CC != null)
            //    {
            //        foreach (var cc in CC)
            //            Message.CC.Add(cc);
            //    }
            //    for (int i = 1; i < To.Length; i++)
            //    {
            //        //MailAddress address_To1 = new System.Net.Mail.MailAddress(To[i]);
            //        Message.To.Add(new System.Net.Mail.MailAddress(To[i]));
            //    }
            //    //Message.CC.Add(mailaddress_efi);
            //    //Message.CC.Add(mailaddress_james);
            //    Message.Body = Content;// "Report created " + DateTime.Now;
            //    Message.Subject = Subject;// "Yesterday report";
            //    // System.Net.Mail.Attachment att = new System.Net.Mail.Attachment(path);
            //    // System.Net.Mail.Attachment att_1 = new System.Net.Mail.Attachment(path_1);
            //    // Message.Attachments.Add(att);
            //    // Message.Attachments.Add(att_1);
            //    try
            //    {
            //        using (System.Net.Mail.SmtpClient smtpcl = new System.Net.Mail.SmtpClient("10.117.0.10"))
            //        {
            //            smtpcl.Send(Message);
            //        }
            //    }
            //    catch (System.Net.WebException ehttp)
            //    {
            //        // Interaction.MsgBox(ehttp.ToString());
            //        return true;
            //    }
            // }
            return false;
        }

        public void SendSMS(string[] Numbers, string Content)
        {
            string[] To = null; ;
            for (int i = 0; i < Numbers.Length; i++)
                To[i] = Numbers[i] + "@smsmaker.com";
            SendMail(Numbers, null, Content, Content, null);
        }

        ~Common()
        {
            #region OLD SQL Close the database link

            /* •————————————————————————————————————•
               | SQLConnection.Close();             |
               | SQLConnection.Dispose();           |
               |    •——————————————————————————• */

            #endregion OLD SQL Close the database link

            try
            {
                publishContext.Dispose();
            }
            catch (Exception ex)
            {
            }
        }
    }
}