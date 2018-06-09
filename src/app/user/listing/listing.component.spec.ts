import {async, ComponentFixture, TestBed, inject, fakeAsync, tick} from '@angular/core/testing';

import {ListingComponent} from './listing.component';
import {UserdetailService} from '../services/userdetail.service';
import {By} from '@angular/platform-browser';


import {Observable, of} from 'rxjs';
import {NamePipe} from '../filter/name.pipe';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ListingComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListingComponent, NamePipe],
      providers: [UserdetailService]

    })
      .compileComponents().then(() => {
      // create component and test fixture
      fixture = TestBed.createComponent(ListingComponent);
      // get test component from the fixture
      component = fixture.componentInstance;
    });
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to users component if we get success',
    inject([UserdetailService], fakeAsync((userdetailService: UserdetailService) => {
      const respone = [
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
      ]
      const spy = spyOn(userdetailService, 'getUsers').and.returnValue(of(respone));
      tick();
      fixture.detectChanges();
      const debugTaskTitle = fixture.debugElement.nativeElement.querySelectorAll('.user-list__item');
     // console.log(debugTaskTitle);
      expect(debugTaskTitle.length).toEqual(3);

    })));
});
