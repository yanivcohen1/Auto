package com.who.tlv.ServicesWebsites.server;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.Closeable;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLDecoder;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.sun.jna.platform.win32.WinUser.INPUT;

public class FileDownloadServlet extends HttpServlet{
	
	private static int DEFAULT_BUFFER_SIZE = 10240 * 1000; // 10KB * 1000 = 10M
	private static final String DOWNLOAD_DIRECTORY = "C:\\Web\\uploaded\\";
	
    protected void doGet( HttpServletRequest req, HttpServletResponse resp ) throws ServletException, IOException
        {
            String fileName = req.getParameter( "fileInfo1" );
            if (fileName == null) {
                // Do your thing if the file is not supplied to the request URI.
                // Throw an exception, or send 404, or show default/warning page, or just ignore it.
            	resp.sendError(HttpServletResponse.SC_NOT_FOUND); // 404.
                return;
            }

            // Decode the file name (might contain spaces and on) and prepare file object.
            File file = new File(DOWNLOAD_DIRECTORY, URLDecoder.decode(fileName, "UTF-8"));

            // Check if file actually exists in filesystem.
            if (!file.exists()) {
                // Do your thing if the file appears to be non-existing.
                // Throw an exception, or send 404, or show default/warning page, or just ignore it.
                resp.sendError(HttpServletResponse.SC_NOT_FOUND); // 404.
                return;
            }
         // Get content type by filename.
            String contentType = getServletContext().getMimeType(fileName);

            // If content type is unknown, then set the default value.
            // For all content types, see: http://www.w3schools.com/media/media_mimeref.asp
            // To add new content types, add new mime-mapping entry in web.xml.
            if (contentType == null) {
                contentType = "application/octet-stream";
            }
            
            StringBuffer sb = readFromFile(DOWNLOAD_DIRECTORY + fileName);
            byte[] bytesBuffer = sb.toString().getBytes();
            DEFAULT_BUFFER_SIZE = bytesBuffer.length;
            // Init servlet response.
            resp.reset();
            resp.setBufferSize(DEFAULT_BUFFER_SIZE);
            resp.setContentType(contentType);
            resp.setHeader("Content-Length", String.valueOf(file.length()));
            resp.setHeader("Content-Disposition", "attachment; filename=\"" + file.getName() + "\"");
         // Prepare streams.
            //BufferedInputStream input = null;
            BufferedOutputStream output = null;
            InputStream input = new ByteArrayInputStream(bytesBuffer);
            try {
                // Open streams.
                //input = new BufferedInputStream(new FileInputStream(file), DEFAULT_BUFFER_SIZE);
                output = new BufferedOutputStream(resp.getOutputStream(), DEFAULT_BUFFER_SIZE);

                // Write file contents to response.
                byte[] buffer = new byte[DEFAULT_BUFFER_SIZE];		
                int length;
                while ((length = input.read(buffer)) > 0) {
                    output.write(buffer, 0, length);
                }
            } finally {
                // Gently close streams.
                close(output);
                //close(input);
                input.close();
            }
        }
  
    private static void close(Closeable resource) {
        if (resource != null) {
            try {
                resource.close();
            } catch (IOException e) {
                // Do your thing with the exception. Print it, log it or mail it.
                e.printStackTrace();
            }
        }
    }
    
    public static StringBuffer readFromFile(String pFilename) throws IOException {  
        BufferedReader in = new BufferedReader(new FileReader(pFilename));  
        StringBuffer data = new StringBuffer();  
        int c = 0;  
        while ((c = in.read()) != -1) {
            data.append((char)c);  
        }  
        in.close();  
        return data;  
    }
    
}