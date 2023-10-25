import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './component/home/home.component';
import { SponsorComponent } from './component/sponsor/sponsor.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {KeycloakSecurityService} from "./component/user/keycloak-security.service";
import {KeycloakHttpInterceptorService} from "./component/user/keycloak-http-interceptor-service.service";

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    SponsorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactory,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass: KeycloakHttpInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function kcFactory(kcSecurity:KeycloakSecurityService) {
  return () => kcSecurity.init();
}
