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
using AngularJSAuthentication.API.Models;

namespace AngularJSAuthentication.API.Controllers
{
    public class TestsController : ApiController
    {
        private AngularJSAuthEntities db = new AngularJSAuthEntities();

        // GET api/Tests
        public IQueryable<test> Gettests()
        {
            return db.tests;
        }

        // GET api/Tests/5
        [ResponseType(typeof(test))]
        public IHttpActionResult Gettest(int id)
        {
            test test = db.tests.Find(id);
            if (test == null)
            {
                return NotFound();
            }

            return Ok(test);
        }

        // PUT api/Tests/5
        public IHttpActionResult Puttest(int id, test test)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != test.TestsId)
            {
                return BadRequest();
            }

            db.Entry(test).State = System.Data.Entity.EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!testExists(id))
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

        // POST api/Tests
        [ResponseType(typeof(test))]
        public IHttpActionResult Posttest(test test)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tests.Add(test);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = test.TestsId }, test);
        }

        // DELETE api/Tests/5
        [ResponseType(typeof(test))]
        public IHttpActionResult Deletetest(int id)
        {
            test test = db.tests.Find(id);
            if (test == null)
            {
                return NotFound();
            }

            db.tests.Remove(test);
            db.SaveChanges();

            return Ok(test);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool testExists(int id)
        {
            return db.tests.Count(e => e.TestsId == id) > 0;
        }
    }
}