import {async, ComponentFixture, TestBed, inject, fakeAsync, tick} from '@angular/core/testing';

import {SignupComponent} from './signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SignupserviceService} from '../services/signupservice.service';
import {By} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Observable,of} from 'rxjs';



describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [SignupComponent],
      providers: [SignupserviceService, {provide: Router, useValue: router}]

    })
      .compileComponents().then(() => {
      // create component and test fixture
      fixture = TestBed.createComponent(SignupComponent);
      // get test component from the fixture
      component = fixture.componentInstance;
    });
  }));
  describe('sign up form', () => {
    it('should invalid initially', () => {
      expect(component.signUpForm.valid).toBeFalsy();
    });
    it('email field validity', () => {
      const email = component.signUpForm.controls['email'];
      expect(email.valid).toBeFalsy();
    });
    it('email field validity have required ', () => {
      let errors = {};
      const email = component.signUpForm.controls['email'];
      errors = email.errors || {};
      expect(errors['required']).toBeTruthy();
    });

    it('email field validity have required ', () => {
      let errors = {};
      const email = component.signUpForm.controls['email'];
      email.setValue('test');
      errors = email.errors || {};
      expect(errors['required']).toBeFalsy();
    });
    it('email field validity have pattern ', () => {
      let errors = {};
      const email = component.signUpForm.controls['email'];
      email.setValue('test@gmail.com');
      errors = email.errors || {};
      expect(errors['pattern']).toBeFalsy();
    });
    it('should called service method on button click', inject([SignupserviceService], (signupserviceService: SignupserviceService) => {
      spyOn(signupserviceService, 'signUpHandler');
      const form = fixture.debugElement.query(By.css('form'));
      form.triggerEventHandler('ngSubmit', null);
      expect(signupserviceService.signUpHandler).toHaveBeenCalled();
    }));
    it('should navigate to users component if we get success',
      inject([SignupserviceService], fakeAsync((signupserviceService: SignupserviceService) => {
        const spy = spyOn(signupserviceService, 'signUpHandler').and.returnValue(of(true));
        const form = fixture.debugElement.query(By.css('form'));
        form.triggerEventHandler('ngSubmit', null);
        tick();
        fixture.detectChanges();
        expect(router.navigate).toHaveBeenCalledWith(['/users']);
      })));
  });
});
