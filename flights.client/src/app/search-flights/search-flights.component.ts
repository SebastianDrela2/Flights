import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.css'
})
export class SearchFlightsComponent implements OnInit {

  title = "Search Flights";

  searchResult: FlightRm[] = [
    {
        airline: "Polish AirLines",
        arival: {time: Date.now().toString(), place: "Warsaw"},
        departure: { time: Date.now().toString(), place: "Krakow" },
        price: '600',
        remainingNumOfSits: 500
    },
    {
        airline: "Cloudy Fliers",
        arival: { time: Date.now().toString(), place: "San Francisco" },
        departure: { time: Date.now().toString(), place: "New York" },
        price: '350',
        remainingNumOfSits: 60
    },
    {
        airline: "NineTail Birds",
        arival: { time: Date.now().toString(), place: "London" },
        departure: { time: Date.now().toString(), place: "Cambridge" },
        price: '350',
        remainingNumOfSits: 60
    }
  ]  

  ngOnInit(): void
  {
        
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
