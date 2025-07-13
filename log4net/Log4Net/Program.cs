using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

[assembly: log4net.Config.XmlConfigurator(ConfigFile = "log4net.xml", Watch = true)]
namespace Log4NetXml
{
    class Program
    {
        private static log4net.ILog _logger = log4net.LogManager.GetLogger(typeof(Program));
        
        static void Main(string[] args)
        {
            //_logger.IsErrorEnabled
            _logger.Debug("Debug logging");
            _logger.Info("Info logging");
            _logger.Warn("Warn logging");
            //log.Error("Error logging");
            //log.Fatal("Fatal logging");
            try
            {
                throw new System.IO.FileNotFoundException();
            }
            catch (Exception ex)
            {
                _logger.Debug("Debug error logging", ex);
                //log.Info("Info error logging", ex);
                //log.Warn("Warn error logging", ex);
                _logger.Error("Error error logging", ex);
                //log.Fatal("Fatal error logging", ex);
            }
        }
    }
}
