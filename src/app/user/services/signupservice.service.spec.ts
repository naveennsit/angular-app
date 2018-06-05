import {TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {SignUpModel, SignupserviceService} from './signupservice.service';

describe('SignupserviceService', () => {
  let service, httpMock;
  const URL = 'https://reqres.in/api/register';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SignupserviceService]
    });
  });

  beforeEach(inject([SignupserviceService, HttpTestingController], (s, h) => {
    service = s;
    httpMock = h;
  }));
  describe('service  function', () => {

    it('subscribe sign up the data ', (done) => {
      const response = {
        'token': 'sssscssd'
      };
      const obj = {email: 'a@gmail.com', password: 'peeerc'};
      service.signUpHandler(obj)
        .subscribe(
          (res: SignUpModel) => {
            expect(res).toBe(response);
            expect(res.token).toEqual('sssscssd');
            done();
          }
        );

      httpMock.expectOne(URL)
        .flush(response);
    });


  });

});
