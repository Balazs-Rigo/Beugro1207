using Microsoft.VisualBasic.FileIO;

namespace SDA.DMS.Beugro.Models
{
    public class Beer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Tagline { get; set; }
        public string Description { get; set; }
        public uint? Ibu { get; set; }
        public Ingredients Ingredients { get; set; }
        public string Image_URL { get; set; }
    }
}
