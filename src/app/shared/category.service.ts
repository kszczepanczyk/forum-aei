import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategory(): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8080/category`);
  }
}
