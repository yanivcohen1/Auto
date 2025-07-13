package com.who.tlv.ServicesWebsites.server;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.FilenameUtils;

/**
 * servlet to handle file upload requests
 * 
 * @author hturksoy
 * 
 */
public class FileUploadServlet extends HttpServlet {

	private static final String UPLOAD_DIRECTORY = "C:\\Web\\uploaded\\";//c:\\uploaded\\";
	private static final String DEFAULT_TEMP_DIR = ".";

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doGet(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
	// Create a factory for disk-based file items
	   FileItemFactory factory = new DiskFileItemFactory();
	   // Create a new file upload handler
	   ServletFileUpload upload = new ServletFileUpload(factory);
	   try{
	      // Parse the request
		   List<FileItem> items = upload.parseRequest(req);
	         // Process the uploaded items
	         Iterator iter = items.iterator();

	         while (iter.hasNext()) {
	            FileItem item = (FileItem) iter.next();
	            //handling a normal form-field
	            if(item.isFormField()) {
	               System.out.println("Got a form field");
	               String name = item.getFieldName();
	               String value = item.getString();
	               System.out.print("Name:"+name+",Value:"+value);				
	            } else {//handling file loads
	               System.out.println("Not form field");
	               String fieldName = item.getFieldName();
	               String fileName = item.getName();
	               if (fileName != null) {
	                  fileName = FilenameUtils.getName(fileName);
	               }
	               String contentType = item.getContentType();
	               boolean isInMemory = item.isInMemory();
	               long sizeInBytes = item.getSize();
	               System.out.print("Field Name:"+fieldName
	               +",File Name:"+fileName);
	               System.out.print("Content Type:"+contentType
	               +",Is In Memory:"+isInMemory+",Size:"+sizeInBytes);			 
	               byte[] data = item.get();
//	               fileName = getServletContext()
//	                         .getRealPath( "/uploadedFiles/" + fileName);
	               fileName = UPLOAD_DIRECTORY + fileName;
	               System.out.print("File name:" +fileName);			
	               FileOutputStream fileOutSt = new FileOutputStream(fileName);
	               fileOutSt.write(data);
	               fileOutSt.close();
	               resp.setStatus(HttpServletResponse.SC_CREATED);
	               resp.getWriter().print("The file was Uploaded successfully.");
	               resp.flushBuffer();
	            }	
	         }
	    } catch(Exception e){
	    	resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
					" An error occurred while creating the file : " + e.getMessage());
	}
  }
}
