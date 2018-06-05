import {TestBed, async, fakeAsync, tick, inject} from '@angular/core/testing';
import {Component, NgModule} from '@angular/core';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {Location} from '@angular/common';

import {routes} from './app.module';
import {UserModule} from './user/user.module';
import {HttpClientTestingModule} from "@angular/common/http/testing";

@Component({
  template: `
    <router-outlet></router-outlet>`
})
class TestComponent {
}

describe('test routing', () => {
  let router, location, fixture;

  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        UserModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes)],
      declarations: [
        TestComponent,
      ]
    });
    fixture = TestBed.createComponent(TestComponent);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
  });

  describe('Initial navigation', () => {
    it('default route redirects to home (async)', fakeAsync(() => {
      router.initialNavigation(); // triggers default
      fixture.detectChanges();
      tick();
      console.log('==================');
      console.log(location.path());
      // fixture.whenStable().then(() => {
      expect(location.path()).toBe('/signup');
      // })
    }));
  });

})
