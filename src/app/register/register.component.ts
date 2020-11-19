import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newuser:User=new User();
  addeduser:User=new User();
  isAdd=false;
  logo : string;

  constructor(private dataService:UserService,private router:Router) { 
    this.logo = "/assets/images/logo1.jpeg";
  }

  ngOnInit(): void {
  }
  addUser(){
    let reqReturned=this.dataService.addUser(this.newuser).subscribe(user=>this.addeduser=user);
    if(reqReturned!=null)
    alert('Registration successful');
    this.isAdd=true;
  }
  
}
