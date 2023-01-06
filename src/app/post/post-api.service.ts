import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private httpClient: HttpClient) {}

  getAllPost(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`http://localhost:8080/post`);
  }
}
