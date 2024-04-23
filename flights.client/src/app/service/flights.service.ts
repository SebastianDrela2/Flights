import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightRm } from './FlightRm';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  async getFlightData(): Promise<FlightRm[]>
  {
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
