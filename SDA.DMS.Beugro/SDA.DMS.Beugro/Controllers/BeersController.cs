using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SDA.DMS.Beugro.Helper;
using SDA.DMS.Beugro.Models;
using Newtonsoft.Json;

namespace SDA.DMS.Beugro.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BeersController : ControllerBase
    {
        BeerAPI _api = new BeerAPI();

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            List<Beer> beers = new List<Beer>();
            HttpClient client = _api.Initial();
            HttpResponseMessage res = await client.GetAsync("v2/beers");
            if (res.IsSuccessStatusCode)
            {
                var results = res.Content.ReadAsStringAsync().Result;
                beers = JsonConvert.DeserializeObject<List<Beer>>(results);
            }

            return Ok(beers);

        }
    }
}
