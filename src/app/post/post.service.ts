import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { TmpPost } from '../models/tmppost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {}

  getAllPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`http://localhost:8080/post`);
  }
  addPost(post: TmpPost){
    return this.httpClient.post<TmpPost>(`http://localhost:8080/post/add-post`,post);
  }


}
