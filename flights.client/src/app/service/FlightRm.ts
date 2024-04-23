import { TimePlaceRm } from "./TimePlaceRm";

export interface FlightRm
{
  airline: string,
  arival: TimePlaceRm,
  departure: TimePlaceRm,
  price: string,
  remainingNumOfSits: number
}
