import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FlightsService } from '../service/flights.service';
import { FlightRm } from '../service/FlightRm';
import { FlightMessage } from '../service/FlightMessage';

@Component({
  selector: 'app-flight-records',
  templateUrl: './flight-records.component.html',
  styleUrl: './flight-records.component.css'
})
export class FlightRecordsComponent
{
  @Input() passedFunds!: number; 

  @Output() notify: EventEmitter<FlightMessage> = new EventEmitter<FlightMessage>();

  searchResult: Promise<FlightRm[]>;
  constructor(private flightService: FlightsService)
  {
    this.searchResult = flightService.getFlightData();
  }

  buyTicket(flight: FlightRm): void
  {
    flight.remainingNumOfSits--;

    var flightDetail = `${flight.departure.place} -> ${flight.arival.place}`;
    var flightMessage = new FlightMessage(flightDetail, Number(flight.price));

    this.notify.emit(flightMessage);
  }
}
