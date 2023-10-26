import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  readonly apiUrl = 'FORUM-SERVICE';
  constructor(private httpClient: HttpClient) { }

  addComment(comment: Comment, postId: number): Observable<Comment> {
    return this.httpClient.post<Comment>(`${this.apiUrl}/admin/addComment/${postId}`, comment);
  }
}
