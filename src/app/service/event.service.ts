
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from '../entities/evenement';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  readonly apiUrl = 'EVENT-SERVICE'; // Remplacez par l'URL de votre API Spring

  constructor(private http: HttpClient) {}



  getAllEvents(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.apiUrl}/get-events`);
  }

  getEventById(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.apiUrl}/${id}`);
  }

  saveEvent(event: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(`${this.apiUrl}/admin/AjouterEvent`, event);
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/admin/${id}`);
  }

  getPopularEvents(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.apiUrl}/admin/popular`);
  }

  getMostPopularEvents(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.apiUrl}/most-popular-events`);
  }

  getEventPerMonth(): Observable<{ [month: string]: number }> {
    return this.http.get<{ [month: string]: number }>(`${this.apiUrl}/barGraph`);
  }

  saveEventWithImage(event: Evenement, image: File): Observable<Evenement> {
    const formData = new FormData();
    formData.append('event', JSON.stringify(event));
    formData.append('image', image);

    return this.http.post<Evenement>(`${this.apiUrl}/AjouterEventImage`, formData);
  }


}
