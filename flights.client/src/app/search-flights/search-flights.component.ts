import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  avaliableFunds = 5000;
  title = "Search Flights";

  constructor() { }

  ngOnInit(): void
  {

  }

  onNotify(message: number)
  {
    this.avaliableFunds -= message;
  }
}
