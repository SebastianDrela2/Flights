namespace Flights.Server.Models
{
    public class FlightRm
    {
        public Guid Id;
        public string AirLine;
        public TimePlaceRm Arival;
        public TimePlaceRm Departure;
        public string Price;
        public int RemainingNumOfSits;

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
