﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using AngularJSAuthentication.API.Models;

namespace AngularJSAuthentication.API.Controllers
{
    [RoutePrefix("api/Orders")]
    public class OrdersController : ApiController
    {
        private AngularJSAuthEntities db = new AngularJSAuthEntities();

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

        //api/Orders/SuiteTests?id=1
        [AllowAnonymous]
        [HttpGet]
        [Route("SuiteTests")]
        public IQueryable<test> SuiteTests(int id)
        {
            var tests = from test1 in db.tests
                                  where test1.SuitesId == id
                                  select test1;
            return tests;
        }

    }


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
