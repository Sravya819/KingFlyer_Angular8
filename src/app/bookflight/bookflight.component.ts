import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {

  logo : string;
  departureLocations=['Hyderabad','Vizag','Vijayawada'];
  arrivalLocations=['Goa','Delhi','Mumbai'];
  genders=['Male','Female','Others'];
  classTypes=['Economy class','Premium class','Business class'];
  newbooking : Book =  new Book();
  addedbooking : Book = new Book();
  isAdd = false;
  constructor(private dataService : BookServiceService) { 
    this.logo = "/assets/images/logo1.jpeg";
  }

  ngOnInit(): void {
  }

  addBooking() {
    let bookreturned = this.dataService.addBooking(this.newbooking).subscribe(booking => this.addedbooking = booking);
    alert('Ticket booked successfully');
    this.isAdd = true;
  }

}
