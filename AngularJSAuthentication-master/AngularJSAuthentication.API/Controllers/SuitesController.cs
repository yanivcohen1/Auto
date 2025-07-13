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
    public class SuitesController : ApiController
    {
        private AngularJSAuthEntities db = new AngularJSAuthEntities();

        // GET api/Suites
        public IQueryable<suite> Getsuites()
        {
            return db.suites;
        }

        // GET api/Suites/5
        [ResponseType(typeof(suite))]
        public IHttpActionResult Getsuite(int id)
        {
            suite suite = db.suites.Find(id);
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

            if (id != suite.SuitesId)
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

            db.suites.Add(suite);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = suite.SuitesId }, suite);
        }

        // DELETE api/Suites/5
        [ResponseType(typeof(suite))]
        public IHttpActionResult Deletesuite(int id)
        {
            suite suite = db.suites.Find(id);
            if (suite == null)
            {
                return NotFound();
            }

            db.suites.Remove(suite);
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
            return db.suites.Count(e => e.SuitesId == id) > 0;
        }
    }
}