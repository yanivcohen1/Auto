using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace AngularJSAuthentication.API.Models
{
     public partial class ContextWrapper : AngularJSAuthEntities1
    {
         public ContextWrapper()
        {
            base.Configuration.ProxyCreationEnabled = false;
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //throw new UnintentionalCodeFirstException();
            modelBuilder.Entity<suite>()
            .HasOptional(a => a.tests)
            .WithOptionalDependent()
            .WillCascadeOnDelete(true);
        }
         //modelBuilder.Entity<User>()
        //.HasOptional(a => a.UserDetail)
        //.WithOptionalDependent()
        //.WillCascadeOnDelete(true);
     }

}