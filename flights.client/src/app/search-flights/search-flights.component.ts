import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.css'
})
export class SearchFlightsComponent implements OnInit {

  searchResult: any = [

    "Polish AirLines",
    "Cloudy Fliers",
    "NineTail Birds"
  ]

  title = "Search Flights";

  ngOnInit(): void
  {
        
  }

}
