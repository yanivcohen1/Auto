/*
 * DesktopApplication1View.java
 */

package desktopapplication1;

import org.jdesktop.application.Action;
import org.jdesktop.application.ResourceMap;
import org.jdesktop.application.SingleFrameApplication;
import org.jdesktop.application.FrameView;
import org.jdesktop.application.Task;
import org.jdesktop.application.TaskMonitor;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.Timer;
import javax.swing.Icon;
import javax.swing.JDialog;
import javax.swing.JFrame;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import javax.swing.DefaultComboBoxModel;
import com.thoughtworks.selenium.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import java.util.regex.Pattern;
import java.io.*;
import java.net.*;
import java.security.CodeSource;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.StringTokenizer;
import javax.swing.JOptionPane;
import javax.swing.SwingUtilities;
import org.apache.commons.lang.ArrayUtils;

 // The application's main frame.

public class RequstX extends FrameView {
static String[] _args;
static boolean IsAutoStart = false;
Statement select;
ResultSet Brandresult;
Selenium1 Selenium2 = new Selenium1();
boolean Stop = false;
String newline = System.getProperty("line.separator");
public  enum GUI_Update {
    SetResutArea, SetFirefoxText, SetGetText
}
static GUI_Update GUI;
Boolean seleniumStart = false;
Boolean AllChacked = false;
Map<String, String> mp=new HashMap<String, String>();
int TimeOutMilisecSelenium = 30000;
int TimeOutMilisecFF = 30000;
final ThreadEvent resultsReadyClickFF = new ThreadEvent();

public RequstX(SingleFrameApplication app,String[] args )  {
        super(app);
      _args = args;
        if (args.length != 0) {
            IsAutoStart = true;
        }
        initComponents();

        // status bar initialization - message timeout, idle icon and busy animation, etc
        ResourceMap resourceMap = getResourceMap();
        int messageTimeout = resourceMap.getInteger("StatusBar.messageTimeout");
        messageTimer = new Timer(messageTimeout, new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                statusMessageLabel.setText("");
            }
        });
        messageTimer.setRepeats(false);
        int busyAnimationRate = resourceMap.getInteger("StatusBar.busyAnimationRate");
        for (int i = 0; i < busyIcons.length; i++) {
            busyIcons[i] = resourceMap.getIcon("StatusBar.busyIcons[" + i + "]");
        }
        busyIconTimer = new Timer(busyAnimationRate, new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                busyIconIndex = (busyIconIndex + 1) % busyIcons.length;
                statusAnimationLabel.setIcon(busyIcons[busyIconIndex]);
            }
        });
        idleIcon = resourceMap.getIcon("StatusBar.idleIcon");
        statusAnimationLabel.setIcon(idleIcon);
        progressBar.setVisible(false);

        // connecting action tasks to status bar via TaskMonitor
        TaskMonitor taskMonitor = new TaskMonitor(getApplication().getContext());
        taskMonitor.addPropertyChangeListener(new java.beans.PropertyChangeListener() {
            public void propertyChange(java.beans.PropertyChangeEvent evt) {
                String propertyName = evt.getPropertyName();
                if ("started".equals(propertyName)) {
                    if (!busyIconTimer.isRunning()) {
                        statusAnimationLabel.setIcon(busyIcons[0]);
                        busyIconIndex = 0;
                        busyIconTimer.start();
                    }
                    progressBar.setVisible(true);
                    progressBar.setIndeterminate(true);
                } else if ("done".equals(propertyName)) {
                    busyIconTimer.stop();
                    statusAnimationLabel.setIcon(idleIcon);
                    progressBar.setVisible(false);
                    progressBar.setValue(0);
                } else if ("message".equals(propertyName)) {
                    String text = (String)(evt.getNewValue());
                    statusMessageLabel.setText((text == null) ? "" : text);
                    messageTimer.restart();
                } else if ("progress".equals(propertyName)) {
                    int value = (Integer)(evt.getNewValue());
                    progressBar.setVisible(true);
                    progressBar.setIndeterminate(false);
                    progressBar.setValue(value);
                }
                else if ("SetResutArea".equals(propertyName)) {
                   ResultArea.setText( ResultArea.getText() +newline + (String)evt.getNewValue()  );
                  // mp.put( (String)evt.getNewValue(),  (String)evt.getOldValue());
                 //  ((ThreadEvent)evt.getOldValue()).signal();
                   //resultsReady.signal();
                }
                else if ("SetFirefoxText".equals(propertyName)) {
                   StartFF_Butten.setText((String)evt.getNewValue());
                  // ((ThreadEvent)evt.getOldValue()).signal();
                }
                else if ("SetGetText".equals(propertyName)) {
                   StartGetButton.setText((String)evt.getNewValue());
                  // ((ThreadEvent)evt.getOldValue()).signal();
                }
                 else if ("SetResutAreaClear".equals(propertyName)) {
                  ResultArea.setText("" );
                  mp.clear();
                  // ((ThreadEvent)evt.getOldValue()).signal();
                 }
            }
        });
        
        this.getFrame().setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
        this.getFrame().addWindowListener(new WindowAdapter() {
        public void windowClosing(WindowEvent e) {
//        int exitApp= JOptionPane.showConfirmDialog(null,
//        "Do you really wish to exit the application", "Please Confirm", JOptionPane.YES_NO_OPTION);
//        if (exitApp==JOptionPane.YES_OPTION){
            if (seleniumStart) {
                        try {
                            Selenium2.tearDown();
                        } catch (Exception ex) {
                            Logger.getLogger(RequstX.class.getName()).log(Level.SEVERE, null, ex);
                        }
            }
        System.exit(0);
        }
       // }
        });
       // RequstX.this.getFrame().
        //Init
        try {
            SQLInit();
            GetAllBrands();
            //SeleniumStart();
             //auto Start
            if (IsAutoStart) {
            AllCheck.setSelected(true);
             StartFF_Butten.doClick();
             }
        } catch (Exception ex) {
            Logger.getLogger(RequstX.class.getName()).log(Level.SEVERE, null, ex);
           // ex.printStackTrace();
        }
       
    }

    @Action
    public void showAboutBox() {
        if (aboutBox == null) {
            JFrame mainFrame = DesktopApplication1.getApplication().getMainFrame();
            aboutBox = new DesktopApplication1AboutBox(mainFrame);
            aboutBox.setLocationRelativeTo(mainFrame);
        }
        DesktopApplication1.getApplication().show(aboutBox);
    }

    /** This method is called from within the constructor to
     * initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is
     * always regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        mainPanel = new javax.swing.JPanel();
        StartFF_Butten = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        ResultArea = new javax.swing.JTextArea();
        AllCheck = new javax.swing.JCheckBox();
        BrandsCombo = new javax.swing.JComboBox();
        StartGetButton = new javax.swing.JButton();
        All_Label = new javax.swing.JLabel();
        SortResultButten = new javax.swing.JButton();
        ClearButten = new javax.swing.JButton();
        menuBar = new javax.swing.JMenuBar();
        javax.swing.JMenu fileMenu = new javax.swing.JMenu();
        javax.swing.JMenuItem exitMenuItem = new javax.swing.JMenuItem();
        javax.swing.JMenu helpMenu = new javax.swing.JMenu();
        javax.swing.JMenuItem aboutMenuItem = new javax.swing.JMenuItem();
        statusPanel = new javax.swing.JPanel();
        javax.swing.JSeparator statusPanelSeparator = new javax.swing.JSeparator();
        statusMessageLabel = new javax.swing.JLabel();
        statusAnimationLabel = new javax.swing.JLabel();
        progressBar = new javax.swing.JProgressBar();

        mainPanel.setName("mainPanel"); // NOI18N

        javax.swing.ActionMap actionMap = org.jdesktop.application.Application.getInstance(desktopapplication1.DesktopApplication1.class).getContext().getActionMap(RequstX.class, this);
        StartFF_Butten.setAction(actionMap.get("Click1")); // NOI18N
        org.jdesktop.application.ResourceMap resourceMap = org.jdesktop.application.Application.getInstance(desktopapplication1.DesktopApplication1.class).getContext().getResourceMap(RequstX.class);
        StartFF_Butten.setText(resourceMap.getString("StartFF_Butten.text")); // NOI18N
        StartFF_Butten.setToolTipText(resourceMap.getString("StartFF_Butten.toolTipText")); // NOI18N
        StartFF_Butten.setName("StartFF_Butten"); // NOI18N

        jScrollPane1.setName("jScrollPane1"); // NOI18N

        ResultArea.setColumns(20);
        ResultArea.setEditable(false);
        ResultArea.setRows(5);
        ResultArea.setName("ResultArea"); // NOI18N
        jScrollPane1.setViewportView(ResultArea);

        AllCheck.setName("AllCheck"); // NOI18N

        BrandsCombo.setModel(new javax.swing.DefaultComboBoxModel(new String[] { "Item 1", "Item 2", "Item 3", "Item 4" }));
        BrandsCombo.setName("BrandsCombo"); // NOI18N

        StartGetButton.setAction(actionMap.get("GetClick")); // NOI18N
        StartGetButton.setText(resourceMap.getString("StartGetButton.text")); // NOI18N
        StartGetButton.setName("StartGetButton"); // NOI18N

        All_Label.setText(resourceMap.getString("All_Label.text")); // NOI18N
        All_Label.setName("All_Label"); // NOI18N

        SortResultButten.setAction(actionMap.get("ShowFailButten")); // NOI18N
        SortResultButten.setText(resourceMap.getString("SortResultButten.text")); // NOI18N
        SortResultButten.setName("SortResultButten"); // NOI18N

        ClearButten.setAction(actionMap.get("Clear")); // NOI18N
        ClearButten.setName("ClearButten"); // NOI18N

        javax.swing.GroupLayout mainPanelLayout = new javax.swing.GroupLayout(mainPanel);
        mainPanel.setLayout(mainPanelLayout);
        mainPanelLayout.setHorizontalGroup(
            mainPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, mainPanelLayout.createSequentialGroup()
                .addContainerGap()
                .addGroup(mainPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 428, Short.MAX_VALUE)
                    .addGroup(mainPanelLayout.createSequentialGroup()
                        .addComponent(All_Label)
                        .addGap(8, 8, 8)
                        .addComponent(AllCheck)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(BrandsCombo, 0, 373, Short.MAX_VALUE))
                    .addGroup(mainPanelLayout.createSequentialGroup()
                        .addComponent(StartFF_Butten)
                        .addGap(18, 18, 18)
                        .addComponent(StartGetButton)
                        .addGap(18, 18, 18)
                        .addComponent(SortResultButten)
                        .addGap(18, 18, 18)
                        .addComponent(ClearButten)))
                .addContainerGap())
        );
        mainPanelLayout.setVerticalGroup(
            mainPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(mainPanelLayout.createSequentialGroup()
                .addGap(13, 13, 13)
                .addGroup(mainPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(StartFF_Butten)
                    .addGroup(mainPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                        .addComponent(StartGetButton)
                        .addComponent(ClearButten)
                        .addComponent(SortResultButten)))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(mainPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(mainPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                        .addComponent(AllCheck)
                        .addComponent(BrandsCombo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addComponent(All_Label, javax.swing.GroupLayout.PREFERRED_SIZE, 29, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 159, Short.MAX_VALUE)
                .addContainerGap())
        );

        menuBar.setName("menuBar"); // NOI18N

        fileMenu.setText(resourceMap.getString("fileMenu.text")); // NOI18N
        fileMenu.setName("fileMenu"); // NOI18N

        exitMenuItem.setAction(actionMap.get("quit")); // NOI18N
        exitMenuItem.setName("exitMenuItem"); // NOI18N
        fileMenu.add(exitMenuItem);

        menuBar.add(fileMenu);

        helpMenu.setText(resourceMap.getString("helpMenu.text")); // NOI18N
        helpMenu.setName("helpMenu"); // NOI18N

        aboutMenuItem.setAction(actionMap.get("showAboutBox")); // NOI18N
        aboutMenuItem.setName("aboutMenuItem"); // NOI18N
        helpMenu.add(aboutMenuItem);

        menuBar.add(helpMenu);

        statusPanel.setName("statusPanel"); // NOI18N

        statusPanelSeparator.setName("statusPanelSeparator"); // NOI18N

        statusMessageLabel.setName("statusMessageLabel"); // NOI18N

        statusAnimationLabel.setHorizontalAlignment(javax.swing.SwingConstants.LEFT);
        statusAnimationLabel.setName("statusAnimationLabel"); // NOI18N

        progressBar.setName("progressBar"); // NOI18N

        javax.swing.GroupLayout statusPanelLayout = new javax.swing.GroupLayout(statusPanel);
        statusPanel.setLayout(statusPanelLayout);
        statusPanelLayout.setHorizontalGroup(
            statusPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(statusPanelSeparator, javax.swing.GroupLayout.DEFAULT_SIZE, 452, Short.MAX_VALUE)
            .addGroup(statusPanelLayout.createSequentialGroup()
                .addContainerGap()
                .addComponent(statusMessageLabel)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 277, Short.MAX_VALUE)
                .addComponent(progressBar, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(statusAnimationLabel)
                .addContainerGap())
        );
        statusPanelLayout.setVerticalGroup(
            statusPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(statusPanelLayout.createSequentialGroup()
                .addComponent(statusPanelSeparator, javax.swing.GroupLayout.PREFERRED_SIZE, 2, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(statusPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(statusMessageLabel)
                    .addComponent(statusAnimationLabel)
                    .addComponent(progressBar, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(3, 3, 3))
        );

        setComponent(mainPanel);
        setMenuBar(menuBar);
        setStatusBar(statusPanel);
    }// </editor-fold>//GEN-END:initComponents

    @Action
    public Task Click1() {
        AllChacked = AllCheck.isSelected();
        Click1Task ClickTask1 = null;
        if (StartFF_Butten.getText().equals("Start FireFox")) {
            ClickTask1 =  new Click1Task(getApplication());
            Stop = false;
        }else{
            Stop = true;
//            final ThreadEvent resultsReady = new ThreadEvent();
//            firePropertyChange(GUI.SetFirefoxText.toString(), resultsReady,"Stop....." );
            StartFF_Butten.setText("Stop.....");
            StartFF_Butten.setEnabled(false);          
        }
        return ClickTask1;
    }

    private void SQLInit() throws SQLException, ClassNotFoundException {
                 // <editor-fold defaultstate="collapsed" desc="SQL Init">
                Class.forName( "com.microsoft.sqlserver.jdbc.SQLServerDriver" );
                Connection conn = DriverManager.getConnection("jdbc:sqlserver://XP-PB2:1433", "Yaniv", "YC123456" );
                System.out.println( "connected" );
                conn.setAutoCommit(false);     // make sure auto commit is off!
                select = conn.createStatement();
                 // </editor-fold>
//                ResultSet result = select.executeQuery
//                                      ("SELECT TOP 1000 [Brand_ID] ,[Brand_Name] ,[Brand_Symbol] ,[Brand_Main_URL] FROM [Automation].[dbo].[BRAND]");         
//                String[] SQLQueryArry = {
//                                                             "SELECT DISTINCT Tool.Tool_ID, Tool_FilePath, Tool.Tool_Name, Tool.Brand_Language_ID, ",
//                                                                            " TOOL_RESULT.Tool_Result_Result, BRAND_LANGUAGE.Brand_ID, BRAND.Brand_Name, ",
//                                                                           "BRAND_LANGUAGE.Language_ID, LANGUAGE.Language_Symbol ",
//                                                            "FROM   [Automation].[dbo].[BRAND] INNER JOIN ",
//                                                                           " [Automation].[dbo].[BRAND_LANGUAGE] ON BRAND.Brand_ID = BRAND_LANGUAGE.Brand_ID INNER JOIN ",
//                                                                           " [Automation].[dbo].[BrandsResult] ON BRAND.Brand_ID = BrandsResult.Brand_ID INNER JOIN ",
//                                                                           " [Automation].[dbo].[LANGUAGE] ON BRAND_LANGUAGE.Language_ID = LANGUAGE.Language_ID INNER JOIN ",
//                                                                           " [Automation].[dbo].[Tool] ON BRAND_LANGUAGE.Brand_Language_ID = Tool.Brand_Language_ID INNER JOIN ",
//                                                                           " [Automation].[dbo].[TOOL_RESULT] ON Tool.Tool_ID = TOOL_RESULT.Tool_ID ",
//                                                            "WHERE (Tool.Tool_Name = @Tool) AND (BRAND.Brand_Name = @Brand) AND (LANGUAGE.Language_Symbol = @Language) ",
//                                                                        };
//                  String SQLQuerySTR="";
//                  for(int i=0;i<SQLQueryArry.length;i++) SQLQuerySTR+=SQLQueryArry[i];
//                  String SQLQueryTmp = SQLQuerySTR.replaceAll("\n","");
//                 // SQLQueryTmp = SQLQuerySTR.replace( "@Tool","'"+args[0]+"'");
//                  //String SQLQueryTmp1 = SQLQueryTmp.replace( "@Brand","'"+args[1]+"'");
//                 //SQLQueryTmp = SQLQueryTmp1.replace( "@Language","'"+args[2]+"'");
//                  ResultSet result = select.executeQuery(SQLQueryTmp);
//                  System.out.println("Got results:");
//                  while(result.next()) 
//                  { // process results one row at a time
//                        int key = result.getInt(1);
//                        String val = result.getString(2);
//                        String val1 = result.getString(3);
//                        Boolean val2 = result.getBoolean(5);
//                        System.out.println("Tool_ID = " + key);
//                        System.out.println("TestName = " + val);
//                        System.out.println("ToolName = " + val1);
//                        System.out.println("ResultPass = " + val2);
//                   }
//              }  catch ( Exception e ){
//                    e.printStackTrace();
//                    }
    }

    private void GetAllBrands() throws SQLException {
         ResultSet result = select.executeQuery
                                      ("SELECT [Brand_ID] ,[Brand_Name] ,[Brand_Symbol] ,[Brand_Main_URL] FROM [Automation].[dbo].[BRAND]");
         Brandresult = result;
          List<String> lsArray=new ArrayList<String>();
          //String[] Arry = null;
          while(result.next()) 
                  { // process results one row at a time
//                        int key = result.getInt(1);
//                        String val = result.getString(2);
//                        String val1 = result.getString(3);
//                        Boolean val2 = result.getBoolean(5);
//                        System.out.println("Tool_ID = " + key);
//                        System.out.println("TestName = " + val);
//                        System.out.println("ToolName = " + val1);
//                        System.out.println("ResultPass = " + val2);
                      lsArray.add( result.getString(4));
                   }
          lsArray.add( "http://www.RequsetxTest.com/");
          String[] Arry = new String[ lsArray.size() ];
          lsArray.toArray(Arry ); 
          BrandsCombo.setModel( new DefaultComboBoxModel(Arry ));
    }

    private void SeleniumStart() throws Exception {
        if (!seleniumStart) {
          Selenium2.setUp();
          seleniumStart = true;
        }
    }

    public String  getJarFolder() throws URISyntaxException{
         CodeSource codeSource = RequstX.class.getProtectionDomain().getCodeSource();
        File jarFile = new File(codeSource.getLocation().toURI().getPath());
        String jarDir = jarFile.getParentFile().getParentFile().getPath();
        return jarDir+System.getProperty("file.separator") + "dist"+System.getProperty("file.separator") + "lib"+System.getProperty("file.separator") +"selenium-server-standalone-2.17.0.jar";
    }
    
    private class Click1Task extends org.jdesktop.application.Task<Object, Void> {
        Click1Task(org.jdesktop.application.Application app) {
            // Runs on the EDT.  Copy GUI state that
            // doInBackground() depends on from parameters
            // to Click1Task fields, here.
            super(app);
           // firePropertyChange("SetResutAreaClear", null,"");
//             ResultArea.setText("" );
//              mp.clear();
            ClearResutArea();
            EnableAll(false);
            StartFF_Butten.setText("Stop FireFox");
            StartFF_Butten.setEnabled(true);
        }
        
        @Override protected Object doInBackground() throws Exception {
            // Your Task's code here.  This method runs
            // on a background thread, so don't reference
            // the Swing GUI from here.
            String SelectedBrand = "";;
            SeleniumStart();
            final ThreadEvent resultsReady = new ThreadEvent();
            int length;
            if (AllChacked) {
                length = BrandsCombo.getItemCount(); 
            }else{
               length = 1; 
            }
            for (int i = 0; i < length; i++) {
                Boolean ResultPass = null;
                 if (Stop) {
                        break;
                    }
                for (int j = 0; j < 3; j++) {
                    if (Stop) {
                        break;
                    }
                    if (AllChacked) {
                        SelectedBrand = (String) BrandsCombo.getItemAt(i);
                    } else {
                        SelectedBrand = (String) BrandsCombo.getSelectedItem();
                    }
                    firePropertyChange("message", null, "Run Brand: " + SelectedBrand);
                    ResultPass = Selenium2.test(SelectedBrand, "name=downloadHPPage");
                     if (ResultPass) {
                        break;
                    }
                }
                //firePropertyChange("SetResutArea", resultsReady, (String)BrandsCombo.getSelectedItem());
                firePropertyChange("SetResutArea", ResultPass.toString(), "Brand: " + SelectedBrand + "  FFResult: " + ResultPass);
                 mp.put(SelectedBrand,  ResultPass.toString());
                //resultsReady.await();
                double ProcessValue = 100;
                if (AllChacked) {
                    ProcessValue =  ((double )(i+1)/(double )length)*100;
                }
                 firePropertyChange("progress", null,(int)ProcessValue);
                 //resultsReady.await();
            }
          // Thread.sleep(10000);
           return null;  // return your result
        }
        @Override protected void succeeded(Object result) {
            // Runs on the EDT.  Update the GUI based on
            // the result computed by doInBackground().
            EnableAll(true);
            StartFF_Butten.setText("Start FireFox");
            StartFF_Butten.setEnabled(true);
        }
    }

    public  class ThreadEvent {

    private final Object lock = new Object();

    public void signal() {
        synchronized (lock) {
            lock.notify();//lock.notifyAll();
        }
    }

    public void await() throws InterruptedException {
        synchronized (lock) {
            lock.wait();// lock.wait(Timeout)
        }
    }
}
    
     public  class Selenium1 extends SeleneseTestCase {
         Process p;
	@Before
	public void setUp() throws Exception {
                                           String Jarfolder = getJarFolder();
                                            for (int i = 0; i < 20; i++) {
                                                    try {
                                                         System.out.println("jar Folder = " + Jarfolder);
                                                         p = Runtime.getRuntime().exec("java -jar "+Jarfolder);
                                                         selenium = new DefaultSelenium("localhost", 4444, "*chrome", "http://www.google.co.il/");//firefox 4444
                                                         selenium.start();
                                                        break;
                                                    } catch (Exception e) {
                                                        Thread.sleep(2000);
                                                    }
                                            }
	}

	@Test
	public void testUntitled(String Brand , String Element) throws Exception {
//		selenium.open(Brand);
//		Boolean Psss =  selenium.isElementPresent("name=downloadHPPage");
	}

	@After
	public void tearDown() throws Exception {
		selenium.stop();
                                           p.destroy();
	}
//            public void test1() throws Exception {
//                 Process p = Runtime.getRuntime().exec("java -jar V:\\Selenium\\selenium-server-standalone-2.17.0.jar");
//                 Thread.sleep(5000);
//                selenium = new DefaultSelenium("localhost", 4444, "*firefox", "http://www.eurogrand.com/");
//               selenium.start();
//               selenium.open("\\");
//               Boolean Psss =  selenium.isElementPresent("name=downloadHPPage");
//               System.out.println(Psss);
               public Boolean test(String Brand , String Element) {
                                            Boolean PassRes = true;
		try{
                                                        selenium.setTimeout(Integer.toString(TimeOutMilisecSelenium));
                                                        selenium.open(Brand);
                                                        String Title = selenium.getTitle();
                                                        if ( Title.contains("404") || (Title.contains("403") ) ||  (Title.contains("501") ) ) {
                                                               PassRes = false;
                                                        }
                                                   }catch(Exception e){
                                                         // System.out.println( "Open "+Brand+" Fail" );
                                                          PassRes = false;
                                                   } 
                //serch 404
		//return selenium.isElementPresent("name=downloadHPPage");
                                           return PassRes;
	}
            }

    @Action
    public Task GetClick() {
        AllChacked = AllCheck.isSelected();
        GetClickTask GetClickTask1 = null;
        if (StartGetButton.getText().equals("Start Get Req")) {
            GetClickTask1 =  new GetClickTask(getApplication());
            Stop = false;
        }else{
            Stop = true;
//            final ThreadEvent resultsReady = new ThreadEvent();
//            firePropertyChange(GUI.SetFirefoxText.toString(), resultsReady,"Stop....." );
            StartGetButton.setText("Stop.....");
            StartGetButton.setEnabled(false);          
        }
        return GetClickTask1;
       // return new GetClickTask(getApplication());
    }

    private class GetClickTask extends org.jdesktop.application.Task<Object, Void> {
        GetClickTask(org.jdesktop.application.Application app) {
            // Runs on the EDT.  Copy GUI state that
            // doInBackground() depends on from parameters
            // to GetClickTask fields, here.
            super(app);
            //firePropertyChange("SetResutAreaClear", null,"");
//             ResultArea.setText("" );
//              mp.clear();
            EnableAll(false);
            ClearResutArea();
            StartGetButton.setText("Stop Get Req");
            StartGetButton.setEnabled(true);
        }
        @Override protected Object doInBackground() {
                // Your Task's code here.  This method runs
                // on a background thread, so don't reference
                // the Swing GUI from here.
             final ThreadEvent resultsReady = new ThreadEvent();
             String SelectedBrand = "";
            int length;
            if (AllChacked) {
                length = BrandsCombo.getItemCount(); 
            }else{
               length = 1; 
            }
                for (int i = 0; i < length; i++) {
                    Boolean ResultPass = true;
                    if (Stop) {
                        break;
                    }                   
                    for (int j = 0; j < 3; j++) {
                         if (Stop) {
                        break;
                    }                   
                        if (AllChacked) {
                            SelectedBrand = (String) BrandsCombo.getItemAt(i);
                        } else {
                            SelectedBrand = (String) BrandsCombo.getSelectedItem();
                        }
                        firePropertyChange("message", null, "Run Brand: " + SelectedBrand);
                        try {
                            URL URL1 = new URL(SelectedBrand);
                            URLConnection yc = URL1.openConnection();
                            yc.setConnectTimeout(TimeOutMilisecFF);
                            BufferedReader in = new BufferedReader(new InputStreamReader(yc.getInputStream()));
                            //               String inputLine;
                            //                while ((inputLine = in.readLine()) != null) 
                            //                    System.out.println(inputLine);
                            in.close();                            
                        } catch (Exception ex) {
                            // Logger.getLogger(RequstX.class.getName()).log(Level.SEVERE, null, ex);
                            ResultPass = false;
                        }
                         if (ResultPass) {
                        break;
                         }                   
                    }
                      
                 firePropertyChange("SetResutArea", ResultPass.toString() ,"Brand: "+ SelectedBrand+"  GetResult: "+ResultPass);
                 mp.put(SelectedBrand,  ResultPass.toString());
                 double ProcessValue = 100;
                if (AllChacked) {
                    ProcessValue =  ((double )(i+1)/(double )length)*100;
                }
                 firePropertyChange("progress", null,(int)ProcessValue);
               }
//             TextField = "Yaniv";// volatile String TextField;
//            try {
//            SwingUtilities.invokeAndWait(new Runnable() {
//                public void run() {
//                    jTextField1.setText(TextField);
//                    TextField = "Done";
//                }
//            });
//        } catch (Exception e) {
//            System.err.println("createGUI didn't successfully complete");
//        }
            return null;  // return your result
        }
         
        @Override protected void succeeded(Object result) {
            // Runs on the EDT.  Update the GUI based on
            // the result computed by doInBackground().
            EnableAll(true);
            StartGetButton.setText("Start Get Req");
            StartGetButton.setEnabled(true);
        }
    }

    @Action
    public void ShowFailButten() {
        Map<String,String> mp1=new HashMap<String, String>();
        ResultArea.setText("");
        int i =0;
         List<String> lsArray=new ArrayList<String>();
       //Get Map in Set interface to get key and value
        Set s=mp.entrySet();
        //Move next key and value of Map by iterator
        Iterator it=s.iterator();

        while(it.hasNext())
        {
            // key=value separator this by Map.Entry to get key and value
            Map.Entry m =(Map.Entry)it.next();

            // getKey is used to get key of Map
            //int key=(Integer)m.getKey();
            
            if ( m.getValue().equals("false")) {
             // ResultArea.setText( ResultArea.getText() +newline + (String)m.getKey()  ); 
              mp1.put((String) m.getKey(),  (String)m.getValue());
              lsArray.add((String) m.getKey());
            }
            // getValue is used to get value of key in Map
           //String value=(String)m.getValue();
            i++;
        }
         mp = mp1;
          //String[] Arry = null;
         if (BrandsCombo.getItemCount() != 0) {
           Collections.reverse(lsArray);
           //ArrayUtils.reverse(_args);
           String[] Arry = new String[ lsArray.size() ];
          lsArray.toArray(Arry ); 
          BrandsCombo.setModel( new DefaultComboBoxModel(Arry ));
        }else{
              ResultArea.setText( "All Pass");
         }
    }

    @Action
    public void Clear() {
        //firePropertyChange("SetResutAreaClear", null,"");
       ClearResutArea();
        try {
            GetAllBrands();
        } catch (SQLException ex) {
            Logger.getLogger(RequstX.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void ClearResutArea(){
         ResultArea.setText("" );
          mp.clear();
    }
    
    public void EnableAll(Boolean Disable){
        AllCheck.setEnabled(Disable);
        BrandsCombo.setEnabled(Disable);
        ClearButten.setEnabled(Disable);
        SortResultButten.setEnabled(Disable);
        StartFF_Butten.setEnabled(Disable);
        StartGetButton .setEnabled(Disable);
    }
     
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JCheckBox AllCheck;
    private javax.swing.JLabel All_Label;
    private javax.swing.JComboBox BrandsCombo;
    private javax.swing.JButton ClearButten;
    private javax.swing.JTextArea ResultArea;
    private javax.swing.JButton SortResultButten;
    private javax.swing.JButton StartFF_Butten;
    private javax.swing.JButton StartGetButton;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JPanel mainPanel;
    private javax.swing.JMenuBar menuBar;
    private javax.swing.JProgressBar progressBar;
    private javax.swing.JLabel statusAnimationLabel;
    private javax.swing.JLabel statusMessageLabel;
    private javax.swing.JPanel statusPanel;
    // End of variables declaration//GEN-END:variables

    private final Timer messageTimer;
    private final Timer busyIconTimer;
    private final Icon idleIcon;
    private final Icon[] busyIcons = new Icon[15];
    private int busyIconIndex = 0;
    private JDialog aboutBox;
}
