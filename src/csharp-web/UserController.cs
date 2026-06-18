using Microsoft.AspNetCore.Mvc;
namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        [HttpGet("{id}")]
        public string Get(string id)
        {
            // Potential XSS vulnerability for testing
            return "<html><body>User: " + id + "</body></html>";
        }
    }
}
