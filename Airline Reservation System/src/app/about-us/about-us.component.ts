import { Component, OnInit } from '@angular/core';

export interface Employee{
  id:string;
  name:string;
  email:string;
  password:string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUSComponent implements OnInit {

  employees: Employee[] = [
    {id:"1",name:"dineth",email:"dineth@gmail.com",password:"dj123"},
    {id:"2",name:"nava",email:"nava@gmail.com",password:"nava123"},
    {id:"3",name:"hawa",email:"hawa@gmail.com",password:"hawa123"},
    {id:"4",name:"bawa",email:"bawa@gmail.com",password:"bawa123"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
