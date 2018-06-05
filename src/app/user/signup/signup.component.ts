import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {SignUpModel, SignupserviceService} from '../services/signupservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder,
              private signupService: SignupserviceService,
              private router: Router) {
    this.signUpForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]]
    });
  }

  ngOnInit() {
  }

  onSubmit(val) {
    console.log(val);
    this.signupService.signUpHandler(val).subscribe((res: SignUpModel) => {
      if (res.token !== '') {
        this.router.navigate(['/users']);
      }
    }, (err) => {
      console.log(err);
    });
  }

}
