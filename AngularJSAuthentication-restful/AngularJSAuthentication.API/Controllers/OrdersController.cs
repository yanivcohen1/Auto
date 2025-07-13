using AngularJSAuthentication.API.Entities;
using AngularJSAuthentication.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
//using AngularJSAuthentication.API.Models;

namespace AngularJSAuthentication.API.Controllers
{
    [RoutePrefix("api/Orders")]
    public class OrdersController : ApiController
    {
        private ContextWrapper db = new ContextWrapper();

        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            //ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;

            //var Name = ClaimsPrincipal.Current.Identity.Name;
            //var Name1 = User.Identity.Name;

            //var userName = principal.Claims.Where(c => c.Type == "sub").Single().Value;

            return Ok(Order.CreateOrders());
        }

        // GET api/Orders/SuiteTests?id=1
        //[AllowAnonymous]
        //[Authorize]
        [HttpGet]
        [Route("SuiteTests")]
        public IHttpActionResult GetSuiteTests(int id)
        {
            IQueryable<test> testsRes;
            List<string> suites = new List<string>();
            if (id == -1)
            {
                testsRes = db.test;
                foreach (var test in testsRes)
                {
                    suites.Add(db.suite.Find(test.SuiteId).SuiteName);
                }
            }
            else
            {
                testsRes = from test in db.test
                           where test.SuiteId == id
                           select test;
                string suiteName = db.suite.Find(id).SuiteName;
                foreach (var test in testsRes)
                {
                    suites.Add(suiteName);
                }
            }

            if (testsRes == null)
            {
                return null;
            }

            TestsSuite testsSuite = new TestsSuite();
            testsSuite.setTests(testsRes.ToList(), suites);

            return Ok(testsSuite);

        }

        [Authorize]
        [HttpGet]
        [Route("SuiteId")]
        public IHttpActionResult GetSuiteId(string suiteName)
        {
            IQueryable<suite> testsRes = db.suite;
            foreach (var suite in testsRes)
            {
                if (suite.SuiteName == suiteName)
                {
                    return Ok(suite.SuiteId);
                }
            }

            return null;

        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
        //var jsonSerializer = new JsonSerializer
        //{
        //    NullValueHandling = NullValueHandling.Ignore,
        //    MissingMemberHandling = MissingMemberHandling.Ignore,
        //    ReferenceLoopHandling = ReferenceLoopHandling.Serialize
        //};
        //var sb = new StringBuilder();
        //using (var sw = new StringWriter(sb))
        //    using (var jtw = new JsonTextWriter(sw))
        //        jsonSerializer.Serialize(jtw, testsSuite);
        //var result = sb.ToString();
        //Console.WriteLine(result);


        //string json = JsonConvert.SerializeObject(testsSuite);

        //MemoryStream stream1 = new MemoryStream();

        //Serialize the Record object to a memory stream using DataContractSerializer.
        //DataContractSerializer serializer = new DataContractSerializer(typeof(TestsSuite));
        //serializer.WriteObject(stream1, testsSuite);

        #region Helpers

        public class Order
        {
            public int OrderID { get; set; }
            public string CustomerName { get; set; }
            public string ShipperCity { get; set; }
            public Boolean IsShipped { get; set; }


            public static List<Order> CreateOrders()
            {
                List<Order> OrderList = new List<Order> 
            {
                new Order {OrderID = 10248, CustomerName = "Taiseer Joudeh", ShipperCity = "Amman", IsShipped = true },
                new Order {OrderID = 10249, CustomerName = "Ahmad Hasan", ShipperCity = "Dubai", IsShipped = false},
                new Order {OrderID = 10250,CustomerName = "Tamer Yaser", ShipperCity = "Jeddah", IsShipped = false },
                new Order {OrderID = 10251,CustomerName = "Lina Majed", ShipperCity = "Abu Dhabi", IsShipped = false},
                new Order {OrderID = 10252,CustomerName = "Yasmeen Rami", ShipperCity = "Kuwait", IsShipped = true}
            };

                return OrderList;
            }
        }

        #endregion
    }
}
