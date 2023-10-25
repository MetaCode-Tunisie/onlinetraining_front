import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
declare var Keycloak : any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc!:KeycloakInstance;

  constructor(private http:HttpClient) { }


  async init(){
    console.log("security initialization ....")
    this.kc= new Keycloak({
      
      url:"http://localhost:8180/auth/",
      realm:"springbootproject",
      clientId:"front",
    
      
      pkceMethod: 'S256', 
      // must match to the configured value in keycloak
      redirectUri: 'http://localhost:4200/',   
      // this will solved the error 
      checkLoginIframe: false
    });

    await  this.kc.init({
      //commencer A chaque fois par l'auth de kc
      //onLoad: 'login-required'

      // les utilisateurs deja connecté 
      onLoad: 'check-sso'
    });
    console.log(this.kc.token)

  }
  
  public isAdmin():boolean {return this.kc.hasResourceRole("admin")}
    
  public isUser():boolean {return this.kc.hasResourceRole("user")}
}
