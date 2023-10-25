import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forum } from '../models/Forum';
import { Posts } from '../models/Posts';


@Injectable({
  providedIn: 'root'
})
export class ForumServiceService {

  readonly apiUrl = 'FORUM-SERVICE';
  constructor(private httpClient: HttpClient) { }

  getAllForums(): Observable<Forum[]> {
    return this.httpClient.get<Forum[]>(`${this.apiUrl}/user/getAllForums`);
  }

  getAllPostsByForum(idForum: number): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.apiUrl+"/user/getAllPostsByForum/"+idForum);
  }
  addForum(forum: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/admin/addForum`, forum);
  }
  deleteForum(idForum: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/admin/deleteForum/${idForum}`);
  }
}
