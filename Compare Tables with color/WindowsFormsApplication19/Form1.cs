using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace WindowsFormsApplication19
{
    public partial class Form1 : Form
    {
        public List<string[]> language_table1;

        public Form1()
        {
            InitializeComponent();
        }

        private void Start_Click(object sender, EventArgs e)
        {
            OpenFile();
            if (FileName.Text != "")
            {
                string output_file = Read_language_file();
                int i = 0;
                string[] Hader = language_table1[0];
                //TextResult.Text = TextResult.Text + Hader[0] + "\r\n";
                //foreach (string item in Hader)
                //{
                //    TextResult.Text = TextResult.Text + item + "-";
                //    i++;
                //}
                //TextResult.Text = TextResult.Text;
                i = 0;
                string RowResult = null;
                statusStrip1.Text = null;
                TextResult.SelectionColor = Color.Black;
                TextResult.SelectedText = Hader[0] + "\r\n";
                foreach (var Row in language_table1)
                {
                    if (i != 0)
                    {
                        TextResult.SelectionColor = Color.Black;
                        TextResult.SelectedText = Hader[1] + "        :" + Row[1] + "\r\n";
                        char[] firstRow = Row[1].ToCharArray();
                        char[] secendRow = Row[2].ToCharArray();
                        //int idx = 0;
                        TextResult.SelectedText = Hader[2] + ":";
                        for (int ii = 0; ii <= Row[1].Length - 1; ii++)
                        {
                            try
                            {
                                if (firstRow[ii] == secendRow[ii])
                                {
                                    TextResult.SelectionColor = Color.Black;
                                }
                                else
                                {
                                    TextResult.SelectionColor = Color.Red;
                                }
                                TextResult.SelectedText = secendRow[ii].ToString();
                            }
                            catch (Exception)
                            {
                            }
                        }
                        //retVal[idx++] = value[ii];
                        //TextResult.SelectedText = "";
                        if (Row[1] == Row[2])
                        {
                            RowResult = "Pass";
                            statusStrip1.Text = "General Fail";
                            TextResult.SelectionColor = Color.Green;
                        }
                        else
                        {
                            RowResult = "Fail";
                            TextResult.SelectionColor = Color.Red;
                        }
                        //TextResult.Text = TextResult.Text + Hader[2] + ":" + Row[2] + "\r\n";
                        TextResult.SelectedText = "\r\n" + "Category:" + Row[0].Trim() + " Result:" + RowResult + "\r\n";
                    }
                    i++;
                }
                if (statusStrip1.Text == null)
                {
                    statusStrip1.Text = "General Pass";
                }
            }
        }

        private string Read_language_file()
        {
            try //try read Accept_Language file
            {
                using (FileStream fs = new FileStream(FileName.Text, FileMode.Open))
                {
                    language_table1 = new List<string[]>();
                    StreamReader sr = new StreamReader(fs);
                    string line = sr.ReadToEnd();
                    string[] rows = line.Split('\r');//tab delimited
                    foreach (string colum in rows)
                    {
                        if (colum.Trim() != "")
                        {
                            string[] colums = colum.Split('\t');
                            language_table1.Add(colums);
                            //language_table.Add(colums[0].Trim(), colums[1].Trim());//insert Accept_Language into Hashtable
                        }
                    }
                }
            }
            catch (IOException ioe)
            {
                return ("IOException occurred: " + ioe.Message);
            }
            return null;
        }

        private void OpenFile()
        {
            OpenFileDialog fdlg = new OpenFileDialog();
            fdlg.Title = "Select Configuration File";
            fdlg.InitialDirectory = @"c:\";
            fdlg.Filter = "All files (*.txt)|*.txt";//|All files (*.*)|*.*";
            fdlg.FilterIndex = 2;
            fdlg.RestoreDirectory = true;
            if (fdlg.ShowDialog() == DialogResult.OK)
            {
                FileName.Text = fdlg.FileName;
            }
        }
    }
}