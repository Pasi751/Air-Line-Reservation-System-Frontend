import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../Flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {

  flight: Flight = new Flight();

  constructor(private flightService : FlightService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveFlight(){
    this.flightService.createFlight(this.flight).subscribe(data =>{
      alert("Flight added successfully");
      
    },
    error => console.log(error));
  }

  goToFlightList(){
    this.router.navigate([`/list`]);
  }
  onSubmit(){
    this.saveFlight();
    console.log(this.flight);
    alert("Flight added successfully");
    this.goToFlightList();
  }

}
