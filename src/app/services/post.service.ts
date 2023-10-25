import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from '../models/Commentaire';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  readonly apiUrl = 'FORUM-SERVICE';
  constructor(private httpClient: HttpClient) { }

  likePost(postId: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/user/like/${postId}`);
  }

  dislikePost(postId: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/user/dislike/${postId}`);
  }
  getAllCommentsByPost(idPost: number): Observable<Commentaire[]> {
    return this.httpClient.get<Commentaire[]>(`${this.apiUrl}/user/getAllCommentsByPost/${idPost}`);
}
addPost(image: File, idForum: number): Observable<any> {
  const formData = new FormData();
  formData.append('image', image);
  return this.httpClient.post(`${this.apiUrl}/admin/addPost/${idForum}`, formData);
}
updatePost(image: File, idForum: number, idPost: number): Observable<any> {
  const formData = new FormData();
  formData.append('image', image, image.name);

  return this.httpClient.post<any>(`${this.apiUrl}/admin/updatePost/${idForum}/${idPost}`, formData);
}

deletePost(idPost: number): Observable<void> {
  return this.httpClient.delete<void>(`${this.apiUrl}/admin/deletePost/${idPost}`);
}

}
