import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/flight.service';
import { Flight } from '../Flight';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  flightList: Flight[] | undefined;
  constructor(private service: FlightService,private router:Router,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getFlights();

  }
  getFlights(){
    this.service.getFlights().subscribe((data) => {
      this.flightList = data;
    })
  }

  updateFlight(id:number | undefined){
    this.router.navigate([`/update-flight`,id]);
    this.getFlights();
    this.getFlights();
    this.getFlights();
  }

  deleteFlight(id:number | undefined){
    this.service.deleteFlight(id).subscribe((data) => {  
    });
    alert("Flight deleted");
    this.getFlights();
    this.getFlights();
    this.getFlights();
    this.router.navigate([`/list`]);
  }

}
