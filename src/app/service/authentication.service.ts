import { Injectable } from '@angular/core';
import { User } from '../data/user';
//import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  //constructor(private http: Http) { }

  login(username: string, password: string) {
    //let user = new User();
    if (password === username) {
      localStorage.setItem('currentUser', JSON.stringify({ username: username, password: password }));
       return username;
    } else {
      localStorage.removeItem('currentUser');
      return null;
    }
   
    //        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
    //            .map((response: Response) => {
    //                // login successful if there's a jwt token in the response
    //                let user = response.json();
    //                if (user && user.token) {
    //                    // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                    localStorage.setItem('currentUser', JSON.stringify(user));
    //                }
    //            });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
