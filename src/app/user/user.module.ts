import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ListingComponent} from './listing/listing.component';

const routes: Routes = [
  {path: 'users', component: ListingComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListingComponent]
})
export class UserModule {
}
