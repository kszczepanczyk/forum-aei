import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private _httpClient: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this._httpClient.get<User>(`http://localhost:8080/findByemail/${email}`);
  }
}
