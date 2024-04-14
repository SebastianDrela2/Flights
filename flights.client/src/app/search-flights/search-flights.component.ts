import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css'] // Corrected property name
})
export class SearchFlightsComponent implements OnInit {

  title = "Search Flights";

  searchResult: Promise<FlightRm[]> = this.getFlightData()

  ngOnInit(): void {

  }

  async getFlightData(): Promise<FlightRm[]> {
    try {
      var response = await fetch("https://localhost:49604/flights").then(response => response.json());

      if (!response.ok)
      {
        throw new Error(`HTTP request failed with status code ${response.status}`);
      }

      return response;   
    }
    catch (error)
    {
      console.error('An error occurred:', error);
      throw error;
    }
  }

}

export interface FlightRm {
  airline: string,
  arival: TimePlaceRm,
  departure: TimePlaceRm,
  price: string,
  remainingNumOfSits: number
}

export interface TimePlaceRm {
  place: string,
  time: string
}
