namespace Flights.Server.Models
{
    public class FlightRm
    {
        public Guid Id { get; set; }
        public string AirLine { get; set; }
        public TimePlaceRm Arival { get; set; }
        public TimePlaceRm Departure { get; set; }
        public string Price { get; set; }
        public int RemainingNumOfSits { get; set; }

        public FlightRm(Guid id, string airLine, TimePlaceRm arival, TimePlaceRm departure, string price, int remainingNumOfSits)
        {
            Id = id;
            AirLine = airLine;
            Arival = arival;
            Departure = departure;
            Price = price;
            RemainingNumOfSits = remainingNumOfSits;
        }
    }
}
