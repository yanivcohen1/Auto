package com.who.test.utils;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CSVReader {
	
	private static List<Brand> brands =  new ArrayList<Brand>();
	private static List<Language> languages =  new ArrayList<Language>();
	private static List<Brands_Language> brands_Language =  new ArrayList<Brands_Language>();
	
	public static ArrayList<ArrayList<String>> readFile(String fileName) {
		String line;
		ArrayList<String> parsedLine;
		ArrayList<ArrayList<String>> retVal = new ArrayList<ArrayList<String>>();
		BufferedReader br;
		
		//System.out.println("Working Directory = " +
	    //          System.getProperty("user.dir"));
		
		try {
			br = new BufferedReader(new FileReader(fileName));
			while ((line = br.readLine()) != null) {
				parsedLine = new ArrayList<String>(Arrays.asList(line.split(",")));
				retVal.add(parsedLine);
			}
			
			br.close();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		} 
		
		return retVal;
	}
	
	public static List<Brand> getBrands() {
		if(brands.isEmpty()){
			String BrandsFile = Utility.getFilePathFromResource("Brands.csv");
			ArrayList<ArrayList<String>> csvlines = CSVReader.readFile(BrandsFile);
			csvlines.remove(0);
			for(ArrayList<String> csvline : csvlines){
				Brand _brand = new Brand();
				_brand.Brand_Name = csvline.get(0);
				_brand.Brand_Main_URL = csvline.get(1);
				brands.add(_brand);
			}
		}
		return brands;
	}
	
	public static List<Language> getLanguages() {
		if(languages.isEmpty()){
			String languagesFile = Utility.getFilePathFromResource("Language.csv");
			ArrayList<ArrayList<String>> csvlines = CSVReader.readFile(languagesFile);
			csvlines.remove(0);
			for(ArrayList<String> csvline : csvlines){
				Language language = new Language();
				language.Language_Name = csvline.get(0);
				language.Language_Symbol = csvline.get(1);
				language.Language_Browser_Accept_Langauge = csvline.get(2);
				languages.add(language);
			}
		}
		return languages;
	}
	
	public static List<Brands_Language> getBrands_Language() {
		if(brands_Language.isEmpty()){
			String languagesFile = Utility.getFilePathFromResource("Brands_Language.csv");
			ArrayList<ArrayList<String>> csvlines = CSVReader.readFile(languagesFile);
			csvlines.remove(0);
			for(ArrayList<String> csvline : csvlines){
				Brands_Language _brands_Language = new Brands_Language();
				_brands_Language.Brand_Name = csvline.get(0);
				_brands_Language.Language_Name = csvline.get(1);
				String languageSymbol = "";
				for (Language language : getLanguages()) {
					if(language.Language_Name.equalsIgnoreCase(_brands_Language.Language_Name)){
						languageSymbol = language.Language_Symbol;
						break;
					}
				}
				_brands_Language.Brand_Language_URL = csvline.get(2).replace("<LS>", languageSymbol);
				brands_Language.add(_brands_Language);
			}
		}
		return brands_Language;
	}
	
	public static Brands_Language getBrand_Language(String brandName , String languageName) {
		//System.out.println(brandName +" "+languageName);
		Brands_Language brands_language = null;
		for (Brands_Language brandsLanguage : getBrands_Language()) {
			if(brandsLanguage.Brand_Name.equalsIgnoreCase(brandName) &&
					brandsLanguage.Language_Name.equalsIgnoreCase(languageName)){
				brands_language = brandsLanguage;
				break;
			}
		}
		return brands_language;
	}

	public static class Brand{
		
		public String Brand_Name;
		public String Brand_Main_URL;
	}
	
	public static class Language{
		
		public String Language_Name;
		public String Language_Symbol;
		public String Language_Browser_Accept_Langauge;
	}
	
	public static class Brands_Language{
		
		public String Brand_Name;
		public String Language_Name;
		public String Brand_Language_URL;
	}
	
}
