using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Dynamic.Startup))]
namespace Dynamic
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
