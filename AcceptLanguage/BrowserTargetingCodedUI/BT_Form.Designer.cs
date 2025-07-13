namespace BrowserTargeting
{
    partial class BT_Form
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
            this.SiteName = new System.Windows.Forms.TextBox();
            this.LangSymbol = new System.Windows.Forms.TextBox();
            this.B_Send = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.LandingPage = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // SiteName
            // 
            this.SiteName.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left)
                        | System.Windows.Forms.AnchorStyles.Right)));
            this.SiteName.Location = new System.Drawing.Point(13, 28);
            this.SiteName.Name = "SiteName";
            this.SiteName.Size = new System.Drawing.Size(243, 22);
            this.SiteName.TabIndex = 0;
            // 
            // LangSymbol
            // 
            this.LangSymbol.Location = new System.Drawing.Point(94, 83);
            this.LangSymbol.Name = "LangSymbol";
            this.LangSymbol.Size = new System.Drawing.Size(89, 22);
            this.LangSymbol.TabIndex = 1;
            // 
            // B_Send
            // 
            this.B_Send.Location = new System.Drawing.Point(88, 181);
            this.B_Send.Name = "B_Send";
            this.B_Send.Size = new System.Drawing.Size(95, 29);
            this.B_Send.TabIndex = 2;
            this.B_Send.Text = "Send";
            this.B_Send.UseVisualStyleBackColor = true;
            this.B_Send.Click += new System.EventHandler(this.B_Send_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(94, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(73, 17);
            this.label1.TabIndex = 3;
            this.label1.Text = "Site Name";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(73, 63);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(122, 17);
            this.label2.TabIndex = 3;
            this.label2.Text = "Language Symbol";
            // 
            // LandingPage
            // 
            this.LandingPage.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left)
                        | System.Windows.Forms.AnchorStyles.Right)));
            this.LandingPage.Location = new System.Drawing.Point(6, 142);
            this.LandingPage.Name = "LandingPage";
            this.LandingPage.Size = new System.Drawing.Size(250, 22);
            this.LandingPage.TabIndex = 4;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(73, 122);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(96, 17);
            this.label3.TabIndex = 3;
            this.label3.Text = "Landing Page";
            // 
            // BT_Form
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(267, 222);
            this.Controls.Add(this.LandingPage);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.B_Send);
            this.Controls.Add(this.LangSymbol);
            this.Controls.Add(this.SiteName);
            this.Name = "BT_Form";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion Windows Form Designer generated code

        private System.Windows.Forms.TextBox SiteName;
        private System.Windows.Forms.TextBox LangSymbol;
        private System.Windows.Forms.Button B_Send;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox LandingPage;
        private System.Windows.Forms.Label label3;
    }
}