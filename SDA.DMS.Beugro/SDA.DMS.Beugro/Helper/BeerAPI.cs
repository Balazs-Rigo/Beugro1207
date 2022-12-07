namespace SDA.DMS.Beugro.Helper
{
    public class BeerAPI
    {
        public HttpClient Initial()
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri("https://api.punkapi.com/");
            return client;
        }
    }
}
