using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using WpfApplication1;

namespace SiteMapBuilder
{
    /// <summary>
    /// Interaction logic for ControlWindow.xaml
    /// </summary>

    public partial class ControlWindow : Window
    {
        static MainWindow MainWindowRef;
        public TaskScheduler Context;

        public ControlWindow(MainWindow MainWindowRef1)
        {
            //Stop = true;
            MainWindowRef = MainWindowRef1;
            InitializeComponent();
            MainWindowRef.webBrowser1.Navigated += new System.Windows.Navigation.NavigatedEventHandler(this.webBrowser1_Navigated);
        }

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            //MainWindowRef.isStop = true;
            mshtml.HTMLDocument document = new mshtml.HTMLDocument();
            Task.Factory.StartNew(() =>
            {
                document = (mshtml.HTMLDocument)MainWindowRef.webBrowser1.Document;
                int i = 1;
            }, Task.Factory.CancellationToken, TaskCreationOptions.None, MainWindowRef.Context).Wait();
            textBox1.Text = document.url;
            //this.Close();
        }

        private void webBrowser1_Navigated(object sender, NavigationEventArgs e)
        {
            //HideScriptErrors(webBrowser1, true);
            int a = 0;
        }

        public void updateGUI(string MSG)
        {
            Task.Factory.StartNew(() =>
            {
                textBox1.Text = MSG;
                int i = 1;
            }, Task.Factory.CancellationToken, TaskCreationOptions.None, Context).Wait();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            Context = TaskScheduler.FromCurrentSynchronizationContext();
        }
    }
}