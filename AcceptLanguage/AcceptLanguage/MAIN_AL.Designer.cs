namespace AcceptLanguage
{
    partial class MAIN_AL
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.BransList = new System.Windows.Forms.ComboBox();
            this.authorLabel = new System.Windows.Forms.Label();
            this.checkAll = new System.Windows.Forms.CheckBox();
            this.label1 = new System.Windows.Forms.Label();
            this.statusStrip1 = new System.Windows.Forms.StatusStrip();
            this.toolStripStatusLabel1 = new System.Windows.Forms.ToolStripStatusLabel();
            this.toolStripStatusLabel2 = new System.Windows.Forms.ToolStripStatusLabel();
            this.Bstop = new System.Windows.Forms.Button();
            this.TextResult = new System.Windows.Forms.RichTextBox();
            this.automationDataSet = new AcceptLanguage.AutomationDataSet();
            this.bRANDsBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.bRANDsTableAdapter = new AcceptLanguage.AutomationDataSetTableAdapters.BRANDsTableAdapter();
            this.tableAdapterManager = new AcceptLanguage.AutomationDataSetTableAdapters.TableAdapterManager();
            this.all_Brand_DataBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.all_Brand_DataTableAdapter = new AcceptLanguage.AutomationDataSetTableAdapters.All_Brand_DataTableAdapter();
            this.statusStrip1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.automationDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.bRANDsBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.all_Brand_DataBindingSource)).BeginInit();
            this.SuspendLayout();
            //
            // BransList
            //
            this.BransList.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.BransList.FormattingEnabled = true;
            this.BransList.Location = new System.Drawing.Point(10, 31);
            this.BransList.Margin = new System.Windows.Forms.Padding(4);
            this.BransList.Name = "BransList";
            this.BransList.Size = new System.Drawing.Size(216, 24);
            this.BransList.TabIndex = 1;
            //
            // authorLabel
            //
            this.authorLabel.AutoSize = true;
            this.authorLabel.Location = new System.Drawing.Point(82, 9);
            this.authorLabel.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.authorLabel.Name = "authorLabel";
            this.authorLabel.Size = new System.Drawing.Size(89, 17);
            this.authorLabel.TabIndex = 2;
            this.authorLabel.Text = "Select Brand";
            //
            // checkAll
            //
            this.checkAll.AutoSize = true;
            this.checkAll.Location = new System.Drawing.Point(244, 35);
            this.checkAll.Name = "checkAll";
            this.checkAll.Size = new System.Drawing.Size(18, 17);
            this.checkAll.TabIndex = 3;
            this.checkAll.UseVisualStyleBackColor = true;
            this.checkAll.CheckedChanged += new System.EventHandler(this.checkAll_CheckedChanged);
            //
            // label1
            //
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(236, 15);
            this.label1.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(33, 17);
            this.label1.TabIndex = 4;
            this.label1.Text = "ALL";
            //
            // statusStrip1
            //
            this.statusStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.toolStripStatusLabel1,
            this.toolStripStatusLabel2});
            this.statusStrip1.Location = new System.Drawing.Point(0, 415);
            this.statusStrip1.Name = "statusStrip1";
            this.statusStrip1.Size = new System.Drawing.Size(345, 22);
            this.statusStrip1.TabIndex = 6;
            this.statusStrip1.Text = "statusStrip1";
            //
            // toolStripStatusLabel1
            //
            this.toolStripStatusLabel1.Name = "toolStripStatusLabel1";
            this.toolStripStatusLabel1.Size = new System.Drawing.Size(0, 17);
            //
            // toolStripStatusLabel2
            //
            this.toolStripStatusLabel2.Name = "toolStripStatusLabel2";
            this.toolStripStatusLabel2.Size = new System.Drawing.Size(0, 17);
            //
            // Bstop
            //
            this.Bstop.Location = new System.Drawing.Point(281, 30);
            this.Bstop.Name = "Bstop";
            this.Bstop.Size = new System.Drawing.Size(51, 26);
            this.Bstop.TabIndex = 7;
            this.Bstop.Text = "Start";
            this.Bstop.UseVisualStyleBackColor = true;
            this.Bstop.Click += new System.EventHandler(this.Bstop_Click);
            //
            // TextResult
            //
            this.TextResult.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom)
            | System.Windows.Forms.AnchorStyles.Left)
            | System.Windows.Forms.AnchorStyles.Right)));
            this.TextResult.Location = new System.Drawing.Point(0, 62);
            this.TextResult.Name = "TextResult";
            this.TextResult.Size = new System.Drawing.Size(344, 346);
            this.TextResult.TabIndex = 8;
            this.TextResult.Text = "";
            //
            // automationDataSet
            //
            this.automationDataSet.DataSetName = "AutomationDataSet";
            this.automationDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            //
            // bRANDsBindingSource
            //
            this.bRANDsBindingSource.DataMember = "BRANDs";
            this.bRANDsBindingSource.DataSource = this.automationDataSet;
            //
            // bRANDsTableAdapter
            //
            this.bRANDsTableAdapter.ClearBeforeFill = true;
            //
            // tableAdapterManager
            //
            this.tableAdapterManager.BackupDataSetBeforeUpdate = false;
            this.tableAdapterManager.BRAND_LANGUAGETableAdapter = null;
            this.tableAdapterManager.BrandsResultTableAdapter = null;
            this.tableAdapterManager.BRANDTableAdapter = null;
            this.tableAdapterManager.Connection = null;
            this.tableAdapterManager.CURRENCYTableAdapter = null;
            this.tableAdapterManager.LANGUAGETableAdapter = null;
            this.tableAdapterManager.NOTIFICATIONTableAdapter = null;
            this.tableAdapterManager.TOOL_RESULTTableAdapter = null;
            this.tableAdapterManager.ToolTableAdapter = null;
            this.tableAdapterManager.UpdateOrder = AcceptLanguage.AutomationDataSetTableAdapters.TableAdapterManager.UpdateOrderOption.InsertUpdateDelete;
            this.tableAdapterManager.USERTableAdapter = null;
            //
            // all_Brand_DataBindingSource
            //
            this.all_Brand_DataBindingSource.DataMember = "All_Brand_Data";
            this.all_Brand_DataBindingSource.DataSource = this.automationDataSet;
            //
            // all_Brand_DataTableAdapter
            //
            this.all_Brand_DataTableAdapter.ClearBeforeFill = true;
            //
            // MAIN_AL
            //
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(345, 437);
            this.Controls.Add(this.TextResult);
            this.Controls.Add(this.Bstop);
            this.Controls.Add(this.statusStrip1);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.checkAll);
            this.Controls.Add(this.authorLabel);
            this.Controls.Add(this.BransList);
            this.Name = "MAIN_AL";
            this.Text = "Main Accept Language";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.MAIN_AL_FormClosing);
            this.Load += new System.EventHandler(this.Form_Load);
            this.statusStrip1.ResumeLayout(false);
            this.statusStrip1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.automationDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.bRANDsBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.all_Brand_DataBindingSource)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();
        }

        #endregion Windows Form Designer generated code

        private System.Windows.Forms.ComboBox BransList;
        private System.Windows.Forms.Label authorLabel;
        private System.Windows.Forms.CheckBox checkAll;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.StatusStrip statusStrip1;
        private System.Windows.Forms.ToolStripStatusLabel toolStripStatusLabel1;
        private System.Windows.Forms.Button Bstop;
        private System.Windows.Forms.ToolStripStatusLabel toolStripStatusLabel2;
        private System.Windows.Forms.RichTextBox TextResult;
        private AutomationDataSet automationDataSet;
        private System.Windows.Forms.BindingSource bRANDsBindingSource;
        private AutomationDataSetTableAdapters.BRANDsTableAdapter bRANDsTableAdapter;
        private AutomationDataSetTableAdapters.TableAdapterManager tableAdapterManager;
        private System.Windows.Forms.BindingSource all_Brand_DataBindingSource;
        private AutomationDataSetTableAdapters.All_Brand_DataTableAdapter all_Brand_DataTableAdapter;
        //private AutomationDataSetTableAdapters.BRANDs_NamesTableAdapter bRANDs_NamesTableAdapter;
    }
}