import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  logo : string;
  wel_img : string;
  constructor() { 
    this.logo = "/assets/images/logo1.jpeg";
    this.wel_img = "/assets/images/welcome.PNG"
  }

  ngOnInit(): void {
  }

}
