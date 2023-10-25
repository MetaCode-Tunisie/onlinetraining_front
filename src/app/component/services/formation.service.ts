import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private baseurl = 'FORMATION-SERVICE';

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'


    })}



  constructor(private http : HttpClient) {}

  displayFormation():Observable<any[]>{
    return this.http.get<any[]>(this.baseurl+"/display",this.httpOptions);
  }
  ajouterFormation(idcategorie: number, file: File, NomFormation: string, prix: number, duree: number): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post<any>(`${this.baseurl}/admin/ajouterFormation/${idcategorie}/${NomFormation}/${prix}/${duree}`, formData, { headers });
  }




  deleteFormation(idformation: number):Observable<any>{
    return this.http.delete<any>(this.baseurl+"/admin/deleteFormation/"+idformation);
  }
}

