import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {UserModel} from '../listing/model/user.info';
@Injectable({
  providedIn: 'root'
})
export class UserdetailService {
  configUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {

  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getUsers(): Observable<HttpResponse<UserModel>> {
    return this.http.get<HttpResponse<UserModel>>(this.configUrl).pipe(
      catchError(this.handleError)
    );
  }
}
