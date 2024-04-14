import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css'] // Corrected property name
})
export class SearchFlightsComponent implements OnInit {

  title = "Search Flights";

  searchResult: Promise<FlightRm[]> = this.getFlightData()

  constructor(private http: HttpClient) { }

  ngOnInit(): void
  {

  }

  async getFlightData(): Promise<FlightRm[]> {
    try {
      const response = await this.http.get<FlightRm[]>("https://localhost:49604/flights").toPromise();
      if (response && Array.isArray(response)) {
        return response;
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
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
