namespace Flights.Server.Models
{
    public class TimePlaceRm
    {
        public string Place { get; set; }
        public DateTime Time { get; set; }

        public TimePlaceRm(string place, DateTime time)
        {
            Place = place;
            Time = time;
        }
    }
}
