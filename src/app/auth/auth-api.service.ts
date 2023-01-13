import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private _httpClient: HttpClient) { }

  login(credentials: Object ={}): Observable<any>{
    return this._httpClient.post(`http://localhost:8080/login`,credentials);
  }
}
