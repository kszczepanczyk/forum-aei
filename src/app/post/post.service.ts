import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}
  getAllPostsDb(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`http://localhost:8080/post`);
  }
  addPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(
      `http://localhost:8080/post/add-post`,
      post
    );
  }

  getLatestActivity(numberOfPosts: number) {
    return this.getAllPostsDb().pipe(
      map((posts) => {
        posts.sort((a, b) => {
          let dateA = new Date(a.date_created);
          let dateB = new Date(b.date_created);
          return dateB.getTime() - dateA.getTime();
        });
        return posts.slice(0, numberOfPosts);
      })
    );
  }

  getPostById(id: number): Observable<Post> {
    return this.getAllPostsDb().pipe(
      map((posts) => posts.find((post) => post.idPost === id) || ({} as Post))
    );
  }
}
