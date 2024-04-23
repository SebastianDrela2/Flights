export class FlightMessage
{
  flightDetail: string
  flightCost: number
  constructor(passedFlightDetail: string, passedFlightCost: number)
  {
    this.flightDetail = passedFlightDetail;
    this.flightCost = passedFlightCost;
  }
}
