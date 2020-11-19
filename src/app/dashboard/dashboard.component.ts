import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  logo : string;
  constructor() {

    this.logo='/assets/images/logo1.jpeg'

  }
  
  ngOnInit(): void {
  }

}
