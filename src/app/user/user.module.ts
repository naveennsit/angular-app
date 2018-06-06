import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ListingComponent} from './listing/listing.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NamePipe} from './filter/name.pipe';

const routes: Routes = [
  {path: 'users', component: ListingComponent},
  {path: 'signup', component: SignupComponent}

];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListingComponent, SignupComponent, NamePipe]
})
export class UserModule {
}
