﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.17020
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SiteMapBuilder.Properties {
    
    
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.Editors.SettingsDesigner.SettingsSingleFileGenerator", "10.0.0.0")]
    internal sealed partial class Settings : global::System.Configuration.ApplicationSettingsBase {
        
        private static Settings defaultInstance = ((Settings)(global::System.Configuration.ApplicationSettingsBase.Synchronized(new Settings())));
        
        public static Settings Default {
            get {
                return defaultInstance;
            }
        }
        
        [global::System.Configuration.UserScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute(@"<?xml version=""1.0"" encoding=""utf-16""?>
<ArrayOfString xmlns:xsi=""http://www.w3.org/2001/XMLSchema-instance"" xmlns:xsd=""http://www.w3.org/2001/XMLSchema"">
  <string>/no/</string>
  <string>/pl/</string>
  <string>/fr/</string>
  <string>/sv/</string>
  <string>/nl/</string>
  <string>/fi/</string>
  <string>/cs/</string>
  <string>/ru/</string>
  <string>/ja/</string>
  <string>/es/</string>
  <string>/uk/</string>
  <string>/ro/</string>
  <string>/qc/</string>
  <string>/cz/</string>
  <string>/da/</string>
  <string>/pt/</string>
  <string>/de/</string>
</ArrayOfString>")]
        public global::System.Collections.Specialized.StringCollection LanguageFilter {
            get {
                return ((global::System.Collections.Specialized.StringCollection)(this["LanguageFilter"]));
            }
            set {
                this["LanguageFilter"] = value;
            }
        }
        
        [global::System.Configuration.UserScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("1000")]
        public string LoadDelayInMs {
            get {
                return ((string)(this["LoadDelayInMs"]));
            }
            set {
                this["LoadDelayInMs"] = value;
            }
        }
        
        [global::System.Configuration.UserScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("flashcasino.php")]
        public string SearchString {
            get {
                return ((string)(this["SearchString"]));
            }
            set {
                this["SearchString"] = value;
            }
        }
    }
}
