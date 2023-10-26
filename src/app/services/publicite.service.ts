import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PubliciteService {
  private baseurl = 'KHALIL';

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })}


  constructor(private http : HttpClient) {}

 
    retrieveAllPublicite():Observable<any[]>{
    return this.http.get<any[]>(this.baseurl+"/user/publicite",this.httpOptions);
  }
  
  addPublicite(data:FormData,idsponsor?:number): Observable<any> {
    return this.http.post<any>(this.baseurl+"/admin/addpublicite"+"/"+idsponsor, data);
  }



  deletePublicite(idPublicite : number):Observable<any>{
    return this.http.delete<any>(this.baseurl+"/admin/publicite/"+idPublicite);
  }
  retrievePublicite(idPublicite : number):Observable<any>{
    return this.http.get<any>(this.baseurl+"/admin/publicite/"+idPublicite,this.httpOptions);
  }


  filterPublicite(sponsor: string, maxBudget: number, minBudget: number): Observable<any[]> {
    const url = this.baseurl+"/admin/publicite/FilterPublicite/?Sponsor="+sponsor+"&MaxBudget="+maxBudget+"&MinBudget="+minBudget;
    return this.http.get<any[]>(url);
  }
  
  updatepublicite(description ?: string, prix?: number, idPublicite?: number, idsponsor?: number): Observable<any> {
    
    return this.http.put<any>(this.baseurl+"/admin/update/"+description+"/"+prix+"/"+idPublicite+"/"+idsponsor,this.httpOptions);
  }
  

  updateImage(data:FormData,idPublicite:any): Observable<any> {
    return this.http.put(this.baseurl+"/admin/updateImage/"+idPublicite, data);
  }


}
