import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = 'Dineth Jayasinghe';
  email=new FormControl();
  text=new FormControl();
  constructor() { }

  ngOnInit(): void {
  }
save(){
  alert(this.email.value);
  alert(this.text.value);
}
}
