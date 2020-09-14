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
  enableAdd:boolean = true;
  
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
        } ,
        isActive:true,
      
        registerd: new Date('01/02/2018 10:30:00')

      },
      {
        firstName: 'Varun',
        lastName: 'Joshi',
        age:25,
        address: {
          street:'Warje',
          city: 'Pune',
          state: 'MH'
          },
          isActive:false,
          registerd: new Date('11/09/2017 08:30:00')
        },
        {
          firstName: 'Karan',
          lastName: 'Karnik',
          age:24,
          address: {
            street:'Warje',
            city: 'Pune',
            state: 'MH'
            },
            isActive:true,
            registerd: new Date('09/06/2016 9:10:00')
          }         
    ];
    this.loaded = true;
  
  }

  addUser (user:User){
    this.users.push(user);
  }


  }


