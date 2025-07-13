using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AngularJSAuthentication.API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.Formatters.XmlFormatter.UseXmlSerializer = true;
        }
    }

    //public class MyClass : DbContext
    //{
    //    public MyClass()
    //    {
    //        base.Configuration.ProxyCreationEnabled = false;
    //    }
    //}
    //
    //update-database -targetmigration:"0" -force -verbose
    //add-migration Initial
    //update-database

}
