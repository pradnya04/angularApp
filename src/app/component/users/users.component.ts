import { User } from './../../models/Users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean= false;

  constructor() { }

  ngOnInit() {
   
   this.users =  [
      {
      firstName: 'Pradnya',
      lastName: 'Badge',
      age:25,
      address: {
        street:'Kothrud',
        city: 'Pune',
        state: 'MH'
        }  
      },
      {
        firstName: 'Varun',
        lastName: 'Joshi',
        age:25,
        address: {
          street:'Warje',
          city: 'Pune',
          state: 'MH'
          }  
        },
        {
          firstName: 'Karan',
          lastName: 'Karnik',
          age:24,
          address: {
            street:'Warje',
            city: 'Pune',
            state: 'MH'
            }  
          }         
    ];
    this.loaded = true;
  
    //this.showExtended = false;
    
    
    this.addUser({
      firstName: 'Prerna',
      lastName: 'Badge'
    }) 
  }

  addUser (user:User){
    this.users.push(user);
  }

  }


