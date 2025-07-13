/*
 * DesktopApplication1.java
 */

package desktopapplication1;

import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.jdesktop.application.Application;
import org.jdesktop.application.SingleFrameApplication;

/**
 * The main class of the application.
 */

public class DesktopApplication1 extends SingleFrameApplication {

    static String[] _args;
    /**
     * At startup create and show the main frame of the application.
     */
    @Override protected void startup() {
            show(new RequstX(this,_args));
    }

    /**
     * This method is to initialize the specified window by injecting resources.
     * Windows shown in our application come fully initialized from the GUI
     * builder, so this additional configuration is not needed.
     */
    @Override protected void configureWindow(java.awt.Window root) {
    }

    /**
     * A convenient static getter for the application instance.
     * @return the instance of DesktopApplication1
     */
    public static DesktopApplication1 getApplication() {
        return Application.getInstance(DesktopApplication1.class);
    }

    /**
     * Main method launching the application.
     */
    public static void main(String[] args) {
        _args = args;
        launch(DesktopApplication1.class,args);
    }
}
