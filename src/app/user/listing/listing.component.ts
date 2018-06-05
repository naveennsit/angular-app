import {Component, OnInit} from '@angular/core';
import {UserModel} from './model/user.info';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  users: UserModel[] = [
    {
      'id': 1,
      'first_name': 'George',
      'last_name': 'Bluth',
      'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'
    },
    {
      'id': 2,
      'first_name': 'Janet',
      'last_name': 'Weaver',
      'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
    },
    {
      'id': 3,
      'first_name': 'Emma',
      'last_name': 'Wong',
      'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
