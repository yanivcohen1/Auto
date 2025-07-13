using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using System.Threading;

namespace WpfApplication1
{
    /// <summary>
    /// Interaction logic for SitmapWindow.xaml
    /// </summary>
    public partial class SitmapWindow : Window
    {
        string l_FileName;

        public SitmapWindow(string FileName)
        {
            l_FileName = FileName;
            InitializeComponent();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            //textBox1.Text = MSG;
            //Thread TR = new Thread(SaveAS);
            //TR.Start();
        }

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            this.Close();
        }

        private void button2_Click(object sender, RoutedEventArgs e)
        {
            System.Diagnostics.Process.Start(l_FileName);
        }
    }
}