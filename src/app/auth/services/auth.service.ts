import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, empty } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  errorData: {};

  constructor(private http:HttpClient) { }
  login(username: string, password: string) {
    return this.http.get<any>('http://localhost:3000/user')
    .pipe(
      map(user =>{
        const userdetails = user.filter(key => key.username == username && key.password == password)
        
        if(userdetails.length != 0 && userdetails[0].token )
        {
          
          localStorage.setItem('currentUser', JSON.stringify(userdetails[0]));
        }
        //const userExists = user.some(key => key.username == username && key.password == password)

      }),
      catchError(this.handleError)
    );
  }
  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }
  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.token;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
