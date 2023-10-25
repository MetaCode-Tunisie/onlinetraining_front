import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './component/home/home.component';
import { SponsorComponent } from './component/sponsor/sponsor.component';
import { EventComponent } from './component/event/event.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventuserComponent } from './component/eventuser/eventuser.component';
import { EventAddComponent } from './component/event-add/event-add.component';
import { EventSearchComponent } from './component/event-search/event-search.component';
import {KeycloakSecurityService} from "./component/user/keycloak-security.service";
import {KeycloakHttpInterceptorService} from "./component/user/keycloak-http-interceptor-service.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SponsorComponent,
    EventComponent,
    EventuserComponent,
    EventAddComponent,
    EventSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [{provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactory,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass: KeycloakHttpInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function kcFactory(kcSecurity:KeycloakSecurityService) {
  return () => kcSecurity.init();
}
