import {Component, OnInit} from '@angular/core';
import {UserModel} from './model/user.info';
import {UserdetailService} from '../services/userdetail.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  users: UserModel[];

  constructor(private userDetail: UserdetailService) {
  }

  ngOnInit() {
    this.userDetail.getUsers().subscribe((response: any) => {
      this.users = response;
    }, (error: any) => {
      console.log('error', error);
    }, () => {
      console.log('complete');
    });
  }

}
