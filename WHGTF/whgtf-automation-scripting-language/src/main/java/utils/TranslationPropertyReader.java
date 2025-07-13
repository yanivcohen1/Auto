package utils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.HashMap;
import java.util.Properties;

import org.openqa.selenium.WebDriver;

public class TranslationPropertyReader {
    public static WebDriver driver;
    public static String translation;
    public static  HashMap<String, Properties> hm = new HashMap<String, Properties>(); 
    public static String defaultLanguage = "en"; 
    
    static 
    {
        
        FileReader reader;
      
        File file = new File("src/main/resources/");
        
        FilenameFilter filter = new FilenameFilter() {
            public boolean accept(File directory, String fileName) {
                return fileName.startsWith("language.");
            }
          };

        // Reading directory contents
        File[] files = file.listFiles(filter);

        for (int i = 0; i < files.length; i++) {
            Properties properties = new Properties();
            System.out.println(files[i]);
           
            String  filename = files[i].toString();
            filename = filename.substring(filename.lastIndexOf ('.')+1);
            System.out.println( filename);
            try {
                reader = new FileReader(files[i]);
                try {
                    properties.load(reader);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            hm.put(filename, properties);
        }
    }
 
    public static String getProperty (String property){
        
        return hm.get(defaultLanguage).getProperty(property);
    }
    
    public static String getProperty (String language, String property){
       
        return hm.get(language).getProperty(property);
        
    }
    
}
