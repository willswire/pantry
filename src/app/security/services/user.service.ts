import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  status: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(private http: HttpClient) {
    this.status.next(this.getUser() != null);
  }

  // Add or remove user to/from local memory
  setUser(user: any) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user.user));
      localStorage.setItem('token', JSON.stringify(user.token));
      this.status.next(true);
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.status.next(false);
    }
  };

  // Get user from local memory
  getUser = () => JSON.parse(localStorage.getItem('user'));

  // Get token from local memory
  getToken = () => JSON.parse(localStorage.getItem('token'));

  // Remove user from local memory
  removeUser = () => this.setUser(null);

  getUsersLists(){
    return this.http.get<any>(
      `http://pantry-api.glitch.me/api/users/${this.getUser()['Username']}/lists`,
      { headers: this.headers }
    );
  }

}
