namespace Demo
{
    partial class Form1
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
            this.webBrowser1 = new System.Windows.Forms.WebBrowser();
            this.txtAddress = new System.Windows.Forms.TextBox();
            this.btnGo = new System.Windows.Forms.Button();
            this.txtRequests = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // webBrowser1
            // 
            this.webBrowser1.Location = new System.Drawing.Point(15, 11);
            this.webBrowser1.MinimumSize = new System.Drawing.Size(20, 20);
            this.webBrowser1.Name = "webBrowser1";
            this.webBrowser1.Size = new System.Drawing.Size(456, 168);
            this.webBrowser1.TabIndex = 0;
            this.webBrowser1.DocumentCompleted += new System.Windows.Forms.WebBrowserDocumentCompletedEventHandler(this.webBrowser1_DocumentCompleted);
            // 
            // txtAddress
            // 
            this.txtAddress.Location = new System.Drawing.Point(20, 192);
            this.txtAddress.Name = "txtAddress";
            this.txtAddress.Size = new System.Drawing.Size(388, 20);
            this.txtAddress.TabIndex = 1;
            this.txtAddress.Text = "http://www.google.com";
            // 
            // btnGo
            // 
            this.btnGo.Location = new System.Drawing.Point(418, 191);
            this.btnGo.Name = "btnGo";
            this.btnGo.Size = new System.Drawing.Size(52, 20);
            this.btnGo.TabIndex = 2;
            this.btnGo.Text = "&Go";
            this.btnGo.UseVisualStyleBackColor = true;
            this.btnGo.Click += new System.EventHandler(this.btnGo_Click);
            // 
            // txtRequests
            // 
            this.txtRequests.Location = new System.Drawing.Point(20, 218);
            this.txtRequests.Multiline = true;
            this.txtRequests.Name = "txtRequests";
            this.txtRequests.ReadOnly = true;
            this.txtRequests.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.txtRequests.Size = new System.Drawing.Size(450, 167);
            this.txtRequests.TabIndex = 3;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(483, 397);
            this.Controls.Add(this.txtRequests);
            this.Controls.Add(this.btnGo);
            this.Controls.Add(this.txtAddress);
            this.Controls.Add(this.webBrowser1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.Fixed3D;
            this.MaximizeBox = false;
            this.Name = "Form1";
            this.Text = "HttpMonitor Demo";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.WebBrowser webBrowser1;
        private System.Windows.Forms.TextBox txtAddress;
        private System.Windows.Forms.Button btnGo;
        private System.Windows.Forms.TextBox txtRequests;
    }
}

