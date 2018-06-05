import {TestBed, inject} from '@angular/core/testing';

import {UserdetailService} from './userdetail.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UserModel} from '../listing/model/user.info';

describe('UserdetailService', () => {
  let service, httpMock;
  const URL = 'https://reqres.in/api/users'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserdetailService]
    });
  });

  beforeEach(inject([UserdetailService, HttpTestingController], (s, h) => {
    service = s;
    httpMock = h;
  }));

  describe('service getConfig function', () => {

    it('subscribe the data ', (done) => {
      const USERS = {
        'page': 1,
        'per_page': 3,
        'total': 12,
        'total_pages': 4,
        'data': [
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
      }

      service.getUsers()
        .subscribe(
          (res: UserModel[]) => {
             expect(res).toBe(USERS.data);
            expect(res.length).toEqual(3);
            done();
          }
        );

      httpMock.expectOne(URL)
        .flush(USERS);
    });


  });
});
