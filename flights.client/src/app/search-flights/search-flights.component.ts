import { Component, OnInit } from '@angular/core';
import { FlightMessage } from '../service/FlightMessage';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  avaliableFunds: number = 5000;
  title: string = "Search Flights";
  lastBookedFlight: string = "";

  constructor() { }

  ngOnInit(): void
  {

  }

  onNotify(message: FlightMessage)
  {
    this.avaliableFunds -= message.flightCost;
    this.lastBookedFlight = message.flightDetail;
  }
}
