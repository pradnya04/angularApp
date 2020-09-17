import { User } from './../../models/Users';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean= false;
  enableAdd:boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form:any;
  
  constructor() { }

  ngOnInit() {
   
   this.users =  [
      {
      firstName: 'Pradnya',
      lastName: 'Badge',
       email: 'pradnya@gmail.com',
        isActive:true,
        registered: new Date('01/02/2018 10:30:00'),
        hide:true

      },
      {
        firstName: 'Varun',
        lastName: 'Joshi',
        email: 'varun@yahoo.com',
          isActive:false,
          registered: new Date('11/09/2017 08:30:00'),
          hide:false
        },
        {
          firstName: 'Karan',
          lastName: 'Karnik',
          email: 'karan@gmail.com',
            isActive:true,
            registered: new Date('09/06/2016 9:10:00'),
            hide:true
          }         
    ];
    this.loaded = true;
  
  }

  // addUser (){
  //   this.user.isActive = true,
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }


  onSubmit({value, valid} : {value:User, valid:boolean}){
    if(!valid){
     console.log('Form is not valid')
    }else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }

  }


  }


