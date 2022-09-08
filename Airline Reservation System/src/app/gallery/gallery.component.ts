import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    alert('Hey its djay\'s page');
  }
  show1(){
    alert('its me again');
    console.log('djay')
  }

}
