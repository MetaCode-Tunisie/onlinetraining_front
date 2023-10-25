import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private baseurl = 'KHALIL';

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })}
  constructor(private http : HttpClient) { }


  retrieveAllSponsors():Observable<any[]>{
    return this.http.get<any[]>(this.baseurl+"/user/sponsor",this.httpOptions);
  }
  

  deleteSponsor(idSponsor : number):Observable<any>{
    return this.http.delete<any>(this.baseurl+"/admin/sponsor/"+idSponsor);
  }

  addSponsor(sponsor: any): Observable<any> {
    return this.http.post<any>(this.baseurl+"/admin/sponsor", sponsor);
  }

  troisPremiersSponsors():Observable<any[]>{
    return this.http.get<any[]>(this.baseurl+"/admin/sponsor/troisPremiersSponsors",this.httpOptions);
  }

  updateSponsor(sponsor: any, idSponsor : number): Observable<any> {
    sponsor.idSponsor = idSponsor;
    return this.http.put<any>(this.baseurl+"/admin/sponsor", sponsor);
  }
  
  retrieveSponsor(idSponsor : number):Observable<any>{
    return this.http.get<any>(this.baseurl+"/admin/sponsor/"+idSponsor,this.httpOptions);
  }

}
