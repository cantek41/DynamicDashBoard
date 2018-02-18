using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dynamic.Models
{
    public enum WidgetTypes
    {
        GRID = 0,
        PAY = 1,
        BAR = 2
    }
    public class Dashboard
    {
        public int Id { get; set; }
        public WidgetTypes Type { get; set; }
        public int Order { get; set; }
        public string Title { get; set; }
        public string SQL { get; set; }
        public string ColWidth { get; set; }
    }
}