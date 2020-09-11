import { User } from './../../models/Users';
import { Component, OnInit } from '@angular/core';


@Component({
selector: 'app-user',
templateUrl: './user.component.html',
styleUrls: ['./user.component.css']
//template: '<h1>PRadnya</h1>'
})

export class UserComponent implements OnInit {
user:User;

constructor(){ 
}

ngOnInit(){
  this.user =  {
    firstName: 'Pradnya',
    lastName: 'Badge',
    age:25,
    address: {
      street:'Kothrud',
      city: 'Pune',
      state: 'MH'
      }    
}
}

}


