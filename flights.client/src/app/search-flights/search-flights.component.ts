import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  avaliableFunds = 5000;
  title = "Search Flights";

  searchResult: Promise<FlightRm[]> = this.getFlightData()

  constructor(private http: HttpClient) { }

  ngOnInit(): void
  {

  }

  buyTicket(flight: FlightRm): void
  {
    flight.remainingNumOfSits--;
    this.avaliableFunds -= Number(flight.price);
  }

  async getFlightData(): Promise<FlightRm[]> {
    try
    {
      const response = await this.http.get<FlightRm[]>("https://localhost:49604/flights").toPromise();
      if (response && Array.isArray(response))
      {
         return response;
      }

      throw new Error('Invalid response format');
    }
    catch (error)
    {
      console.error('An error occurred:', error);
      throw error;
    }
  }

}

export interface FlightRm
{
  airline: string,
  arival: TimePlaceRm,
  departure: TimePlaceRm,
  price: string,
  remainingNumOfSits: number
}

export interface TimePlaceRm
{
  place: string,
  time: string
}
