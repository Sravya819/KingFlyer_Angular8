import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightServiceService } from '../flight-service.service';

@Component({
  selector: 'app-viewflights',
  templateUrl: './viewflights.component.html',
  styleUrls: ['./viewflights.component.css']
})
export class ViewflightsComponent implements OnInit {

  logo:string;
  flights : Flight [];

  constructor(private dataService : FlightServiceService) {
    this.logo = "/assets/images/logo1.jpeg"
   }

  ngOnInit(): void {

    this.dataService.getAllFlights().subscribe(flights => this.flights = flights);

  }

}
