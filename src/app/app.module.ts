import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Routes, RouterModule} from '@angular/router';

import {UserModule} from './user/user.module';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: '',   redirectTo: '/users', pathMatch: 'full' },

];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
