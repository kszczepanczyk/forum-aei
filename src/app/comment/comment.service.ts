import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAllCommentsForPostId(id: number): Observable<Comment[]>{
    const body = {idPost: id}
    return this.httpClient.post<Comment[]>(`http://localhost:8080/comment/findByPostID`,body);
  }
  addComment(comment: Comment): Observable<Comment>{
    return this.httpClient.post<Comment[]>(`http://localhost:8080/comment/add-comment`,comment).pipe(
      map(rest => (rest[0]))
    );
  }
}
