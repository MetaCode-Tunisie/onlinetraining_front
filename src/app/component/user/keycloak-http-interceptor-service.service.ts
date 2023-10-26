import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { KeycloakSecurityService } from "./keycloak-security.service";
import { Observable } from "rxjs";
import { InjectSetupWrapper } from "@angular/core/testing";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class KeycloakHttpInterceptorService implements HttpInterceptor{
  constructor (private kcService: KeycloakSecurityService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  console.log("Interceptor"+req);
  if(!this.kcService.kc.authenticated) return next.handle(req);
  let request=req. clone({
  setHeaders: {
  Authorization: 'Bearer '+this.kcService.kc.token
  }
  });
  return next. handle (request);

}}