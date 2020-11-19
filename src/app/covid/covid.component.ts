import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  logo : string;
  cov_img : string;
  constructor() { 
    this.logo = "/assets/images/logo1.jpeg";
    this.cov_img = "/assets/images/covid.PNG";
  }

  ngOnInit(): void {
  }

}
