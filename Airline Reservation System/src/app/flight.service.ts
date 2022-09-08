import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) {}

  getFlights(): Observable<Flight[]>{
    return this.http.get<Flight[]>("http://localhost:8000/flight/list");

  }

  getFlightById(id:number): Observable<Flight>{
    let url : string = "http://localhost:8000/flight/list/"+id;
    return this.http.get<Flight>(url);
  }
  
  createFlight(flight:Flight): Observable<Object>{
    
    return this.http.post("http://localhost:8000/flight/create",flight);
  }

  updateFlight(id : number , flight : Flight):  Observable<Object>{

    return this.http.put("http://localhost:8000/flight/update",flight);

  }

  deleteFlight(id:number | undefined):Observable<Object>{
    let url : string = "http://localhost:8000/flight/delete/"+id;
    return this.http.delete(url);

  }

}
