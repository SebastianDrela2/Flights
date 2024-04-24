using Flights.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace Flights.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FlightsController : ControllerBase
    {
        private readonly Random _random = new Random();

        public FlightsController()
        {

        }

        [HttpGet]
        public IEnumerable<FlightRm> GetFlights() => GetSampleFlights();
      
        private IEnumerable<FlightRm> GetSampleFlights()
        {
            return new FlightRm[]
            {
                new FlightRm(Guid.NewGuid(), "Polish Air Lines",
                    new TimePlaceRm("Warsaw", DateTime.Now),
                    new TimePlaceRm("Krakow", DateTime.Now), "500", _random.Next(1, 1000)),

                new FlightRm(Guid.NewGuid(), "Cloudy Fliers",
                    new TimePlaceRm("San Francisco", DateTime.Now),
                    new TimePlaceRm("New York", DateTime.Now), "50", _random.Next(1, 1000)),

                new FlightRm(Guid.NewGuid(), "NineTail Birds",
                    new TimePlaceRm("London", DateTime.Now),
                    new TimePlaceRm("Cambridge", DateTime.Now), "5", _random.Next(1, 1000)),

                 new FlightRm(Guid.NewGuid(), "Spirit Air Lines",
                    new TimePlaceRm("Miami", DateTime.Now),
                    new TimePlaceRm("Poland", DateTime.Now), "700", _random.Next(1, 1000)),
            };
        }
    }
}
