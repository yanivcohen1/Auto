package com.wh.auto.common;

import java.io.File;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.StatelessSession;
import org.hibernate.cfg.Configuration;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import com.wh.auto.hibernate.Brand;
import com.wh.auto.hibernate.BrandHome;
import com.wh.auto.hibernate.BrandsResult;
import com.wh.auto.hibernate.Tool;
import com.wh.auto.hibernate.ToolResult;
import com.wh.auto.hibernate.ToolResultHome;

public class AutoBD {

	 static List<Tool> tools = null;
	 //static Date m_date = new Date();

	public static void updateResult(String toolId, boolean result, String errorDescription) {	
		Session session = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			session.beginTransaction();
			String HQL = "select toolResult from ToolResult as toolResult " +
							"where toolResult.tool.toolId='"+ toolId + "'";
			List<ToolResult> toolResult = session.createQuery(HQL).list();
			toolResult.get(0).setToolResultResult(result);
			toolResult.get(0).setToolResultDescription(errorDescription);
			Date date = new Date();
			Timestamp now = new Timestamp(date.getTime());
			toolResult.get(0).setToolResultLastRunDate(now);
			if (result) {
				toolResult.get(0).setToolResultLastPassDate(now);
			}
			session.saveOrUpdate(toolResult.get(0));
			
			String brandID = toolResult.get(0).getTool().getBrandLanguage().getBrand().getBrandId().toString();
			String toolType = toolResult.get(0).getTool().getToolType();
			String HQL2 = "select toolResult from ToolResult as toolResult " +
					"where toolResult.tool.brandLanguage.brand.brandId='"+ brandID + "' "+
					"AND toolResult.tool.toolType='" + toolType + "' " +
					"AND toolResult.tool.toolId<>'" + toolId + "'";
			List<ToolResult> toolResults = session.createQuery(HQL2).list();
			//List<BrandsResult> brandsResult = new ArrayList<BrandsResult>();
			//Set<BrandsResult> brandsResult2 = toolResult.get(0).getTool().getBrandLanguage().getBrand().getBrandsResults();
			//brandsResult.addAll(brandsResult2);		
			
			String HQL3 = "select brandsResult from BrandsResult as brandsResult " +
					"where brandsResult.brand.brandId='"+ brandID + "' "+
					"AND brandsResult.toolName='" + toolType + "' ";
			List<BrandsResult> brandsResult = session.createQuery(HQL3).list();
			
			boolean brandResult = result;
			for (ToolResult toolResult2 : toolResults) {
				if (!toolResult2.getToolResultResult()) {
					brandResult = false;
				}
			}
			brandsResult.get(0).setToolResult(brandResult);
			brandsResult.get(0).setToolLastRunDate(now);
			session.saveOrUpdate(brandsResult.get(0));
			
			session.getTransaction().commit();
		}
		catch (HibernateException e) {
			e.printStackTrace();
			Reporter.log("updateResult Error:"+ e);
		}finally{
			session.close();
		}
	}
	
	//@DataProvider(name = "browserTarget")
	public Object[][] dbDataProvider(String toolType) {
		Session session = null;
		Object[][] obj = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			String HQL = "select tool from Tool as tool where tool.toolType='" +toolType +"'"+
					" order by tool.brandLanguage.brand.brandName";
			tools = session.createQuery(HQL).list();
			List<String[]> dataArryList = new ArrayList<String[]>();
			for (Tool tool : tools) {
				String toolId = tool.getToolId().toString();
				//String brandId = tool.getBrandLanguage().getBrand().getBrandId().toString();
				String Param = tool.getToolArgument() + " " +toolId;
				String[] Params = Param.split(" ");
				dataArryList.add(Params);
			}
			obj = new Object[dataArryList.size()][dataArryList.get(0).length];
			for (int i=0; i < obj.length ; i++){
				for (int j = 0; j < obj[i].length; j++) {
					obj[i][j] =  dataArryList.get(i)[j];
				}
			}
		}
		catch (Exception e) {
			e.printStackTrace();
			Reporter.log("dbDataProvider Error:"+ e);
		}finally{
			session.close();
		}
		return obj;
	}
	
}
