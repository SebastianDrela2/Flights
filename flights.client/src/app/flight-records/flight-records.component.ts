import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FlightsService } from '../service/flights.service';
import { FlightRm } from '../service/FlightRm';

@Component({
  selector: 'app-flight-records',
  templateUrl: './flight-records.component.html',
  styleUrl: './flight-records.component.css'
})
export class FlightRecordsComponent
{
  @Input() passedFunds!: number; 

  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  searchResult: Promise<FlightRm[]>;
  constructor(private flightService: FlightsService)
  {
    this.searchResult = flightService.getFlightData();
  }

  buyTicket(flight: FlightRm): void
  {
    flight.remainingNumOfSits--;
    this.notify.emit(Number(flight.price));
  }
}
