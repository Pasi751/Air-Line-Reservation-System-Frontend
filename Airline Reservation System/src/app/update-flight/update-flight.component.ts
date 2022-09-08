import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../Flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  id !: number; 
  flight: Flight = new Flight();
  constructor(private flightService:FlightService,
    private activatedRoute : ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params[`id`];
    this.flightService.getFlightById(this.id).subscribe((data) => {
      this.flight = data;
    });
  }

  goToFlightList(){
    this.router.navigate([`/list`]);
  }

  onSubmit(){
    this.flightService.updateFlight(this.id,this.flight).subscribe((data) =>{
      
    });
    this.goToFlightList();
    this.goToFlightList();
    this.goToFlightList();
    
    
  }

  

}
