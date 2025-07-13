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
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Data.SqlClient;

namespace WpfApplication1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        WpfApplication1.DataSet1 dataSet1;
        WpfApplication1.DataSet1TableAdapters.ToolTableAdapter dataSet1ToolTableAdapter;
        WpfApplication1.DataSet1TableAdapters.TOOL_RESULTTableAdapter dataSet1TOOL_RESULTTableAdapter;
        decimal LastToolIndex = 381;
        decimal LastToolResultIndex = 384;

        public MainWindow()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            List<decimal> Brand_Language_IDs = new List<decimal>();
            foreach (var BRAND_LANGUAGE in dataSet1.BRAND_LANGUAGE)
	        {
                bool find = false; 
                foreach (var Tool in dataSet1.Tool)
                {
                    if (BRAND_LANGUAGE.Brand_Language_ID == Tool.Brand_Language_ID && Tool.Tool_Type == "RequestX")
                    {
                        find = true;
                        break;
                    }
                }
                if (!find)
                {
                    Brand_Language_IDs.Add(BRAND_LANGUAGE.Brand_Language_ID);
                    string Language = "";
                    foreach (var LANGUAGE in dataSet1.LANGUAGE)
                    {
                        if (LANGUAGE.Language_ID == BRAND_LANGUAGE.Language_ID)
                        {
                            Language = LANGUAGE.Language_Symbol;
                            break;
                        }
                    }
                    textBox1.Text += "BrandLangID: "+ Convert.ToString(BRAND_LANGUAGE.Brand_Language_ID) 
                        + "_"+ BRAND_LANGUAGE.Brand_Language_URL_Template + " Lang- " + 
                        Language + "-" + BRAND_LANGUAGE.Language_ID + Environment.NewLine;

                }
               // item.Brand_Language_ID
	        } 
            foreach (var Brand_Language_ID in Brand_Language_IDs)
	        {
		        LastToolIndex ++;
                LastToolResultIndex ++;
                dataSet1ToolTableAdapter.Insert(LastToolIndex, Brand_Language_ID, "RequestX", "RequestX", null, null, null,
                    null, null, "10.1.1.29", 11, null, null, null, null, null, null, null, null, null);
                dataSet1TOOL_RESULTTableAdapter.Insert(LastToolResultIndex, LastToolIndex, false, "", null, null);
	        }
        }

        private System.Data.Objects.ObjectQuery<BRAND> GetBRANDQuery(AutomationEntities automationEntities)
        {
            // Auto generated code

            System.Data.Objects.ObjectQuery<WpfApplication1.BRAND> bRANDQuery = automationEntities.BRAND;
            // Returns an ObjectQuery.
            return bRANDQuery;
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {

            WpfApplication1.AutomationEntities automationEntities = new WpfApplication1.AutomationEntities();
            // Load data into BRAND. You can modify this code as needed.
            System.Windows.Data.CollectionViewSource bRANDViewSource = ((System.Windows.Data.CollectionViewSource)(this.FindResource("bRANDViewSource")));
            System.Data.Objects.ObjectQuery<WpfApplication1.BRAND> bRANDQuery = this.GetBRANDQuery(automationEntities);
            bRANDViewSource.Source = bRANDQuery.Execute(System.Data.Objects.MergeOption.AppendOnly);
            //SqlDataAdapter a = new SqlDataAdapter(

            dataSet1 = ((WpfApplication1.DataSet1)(this.FindResource("dataSet1")));
            // Load data into the table Tool. You can modify this code as needed.
            dataSet1ToolTableAdapter = new WpfApplication1.DataSet1TableAdapters.ToolTableAdapter();
            dataSet1ToolTableAdapter.Fill(dataSet1.Tool);
            WpfApplication1.DataSet1TableAdapters.BRAND_LANGUAGETableAdapter dataSet1BRAND_LANGUAGETableAdapter = new WpfApplication1.DataSet1TableAdapters.BRAND_LANGUAGETableAdapter();
            dataSet1BRAND_LANGUAGETableAdapter.Fill(dataSet1.BRAND_LANGUAGE);
            WpfApplication1.DataSet1TableAdapters.LANGUAGETableAdapter dataSet1LANGUAGETableAdapter = new WpfApplication1.DataSet1TableAdapters.LANGUAGETableAdapter();
            dataSet1LANGUAGETableAdapter.Fill(dataSet1.LANGUAGE);
            //System.Windows.Data.CollectionViewSource toolViewSource = ((System.Windows.Data.CollectionViewSource)(this.FindResource("toolViewSource")));
            //toolViewSource.View.MoveCurrentToFirst();
            dataSet1TOOL_RESULTTableAdapter = new WpfApplication1.DataSet1TableAdapters.TOOL_RESULTTableAdapter();
            dataSet1TOOL_RESULTTableAdapter.Fill(dataSet1.TOOL_RESULT);
        }
    }
}
