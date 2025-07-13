using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace FindLanguage
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        String m_filename;

        public MainWindow()
        {
            InitializeComponent();
        }

        private void Start_Click(object sender, RoutedEventArgs e)
        {
            m_filename = SelectTextFile(@"c:\");
            string[] lines = File.ReadAllLines(m_filename, Encoding.ASCII);
            foreach (var URL in lines)
            {
                if (URL.Contains(Search.Text))
                {
                    Result.Text += URL + Environment.NewLine;
                }
            }
        }

        private string SelectTextFile(string initialDirectory)
        {
            Microsoft.Win32.OpenFileDialog dialog = new Microsoft.Win32.OpenFileDialog();
            dialog.Filter =
               "csv files (*.csv)|*.csv|All files (*.*)|*.*";
            dialog.InitialDirectory = initialDirectory;
            dialog.Title = "Select Sitmap file";
            Nullable<bool> result = dialog.ShowDialog();
            return (result == true) ? dialog.FileName : null;
        }
    }
}