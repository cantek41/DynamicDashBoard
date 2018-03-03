using Dynamic.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Dynamic.Service
{
    public class DataService
    {
        private static ApplicationDbContext context;
        private static DataService _service;
        public static DataService getService(ApplicationDbContext _context)
        {
            if (_service == null)
                _service = new DataService();
            context = new ApplicationDbContext();
            return _service;
        }
        private DataService()
        {
        }

        public JArray ExecuteSqlQueryJson(string sql)
        {
            using (IDbConnection oaConnection = context.Database.Connection)
            {
                using (IDbCommand oaCommand = oaConnection.CreateCommand())
                {
                    oaCommand.CommandText = sql;
                    if (oaConnection.State == ConnectionState.Closed)
                        oaConnection.Open();
                    using (IDataReader reader = oaCommand.ExecuteReader())
                    {
                        var result = new JArray();
                        while (reader.Read())
                        {
                            var row = new JObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                //  var b = reader.GetValue(i);                             
                                row.Add(reader.GetName(i).ToString(), new JValue(reader.GetValue(i) ?? JValue.CreateNull()));
                            }
                            result.Add(row);
                        }
                        return result;
                    }
                }
            }
        }
    }
}