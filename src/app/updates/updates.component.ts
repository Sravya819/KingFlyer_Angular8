import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  logo : string;
  up_img : string;

  constructor() { 
    this.logo = "/assets/images/logo1.jpeg";
    this.up_img = "/assets/images/updates.PNG";
  }

  ngOnInit(): void {
  }

}
