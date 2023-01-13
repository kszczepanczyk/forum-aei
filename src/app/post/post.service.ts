import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {}

  getAllPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`http://localhost:8080/post`);
  }
  addPost(post: Post): Observable<Post>{
    console.log(post);
    return this.httpClient.post<Post>(`http://localhost:8080/post/add-post`,post);
  }


}
