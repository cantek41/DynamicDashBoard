using Dynamic.Models;
using Dynamic.Service;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Dynamic.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        ApplicationDbContext db = new ApplicationDbContext();
        public JArray getChart()
        {
            var charts = db.Dashboards.OrderBy(x => x.Order).ToList();
            var result = new JArray();
            foreach (var item in charts)
            {
                var row = new JObject();
                var data = DataService.getService(db).ExecuteSqlQueryJson(item.SQL);
                row.Add("Id", item.Id);
                row.Add("Order", item.Order);
                row.Add("Title", item.Title);
                row.Add("Type", item.Type.ToString());
                row.Add("ColWidth", item.ColWidth ?? "");
                row.Add("Data", data);
                result.Add(row);
            }
            return result;
        }


        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}