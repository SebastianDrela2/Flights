namespace Flights.Server.Models
{
    public class TimePlaceRm
    {
        public string Place;
        public DateTime Time;

        public TimePlaceRm(string place, DateTime time)
        {
            Place = place;
            Time = time;
        }
    }
}
