using AngularJSAuthentication.API.Entities;
using AngularJSAuthentication.API.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
//using AngularJSAuthentication.API.Models;

namespace AngularJSAuthentication.API.Controllers
{
    public class SuitesController : ApiController
    {
        private ContextWrapper db = new ContextWrapper();

        // GET api/Suites
        [Authorize]
        public IQueryable<suite> Getsuites()
        {
            return db.suite;
        }

        // GET api/Suites/5
        [Authorize]
        [ResponseType(typeof(suite))]
        public IHttpActionResult Getsuite(int id)
        {
            suite suite = db.suite.Find(id);
            if (suite == null)
            {
                return NotFound();
            }

            return Ok(suite);
        }

        // PUT api/Suites/5
        public IHttpActionResult Putsuite(int id, suite suite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != suite.SuiteId)
            {
                return BadRequest();
            }

            db.Entry(suite).State = System.Data.Entity.EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!suiteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST api/Suites
        [ResponseType(typeof(suite))]
        public IHttpActionResult Postsuite(suite suite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.suite.Add(suite);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = suite.SuiteId }, suite);
        }

        // DELETE api/Suites/5
        [ResponseType(typeof(suite))]
        public IHttpActionResult Deletesuite(int id)
        {
            suite suite = db.suite.Find(id);
            if (suite == null)
            {
                return NotFound();
            }

            //var testsRes = from test in db.tests
            //           where test.SuiteId == id
            //           select test;
            //foreach (var test in testsRes)
            //{
            //    db.tests.Remove(test);
            //}
            //db.SaveChanges();

            db.suite.Remove(suite);
            //db.Entry(suite).State = System.Data.Entity.EntityState.Deleted;
            db.SaveChanges();

            return Ok(suite);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool suiteExists(int id)
        {
            return db.suite.Count(e => e.SuiteId == id) > 0;
        }
    }
}