import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './component/home/home.component';
import { SponsorComponent } from './component/sponsor/sponsor.component';
import { CreateExamComponent } from './component/create-exam/create-exam.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ListExamComponent } from './component/list-exam/list-exam.component';
import { CourseComponent } from './component/course/course.component';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { EditCourseComponent } from './component/edit-course/edit-course.component';
import { KeycloakSecurityService } from './component/user/keycloak-security.service';
import { KeycloakHttpInterceptorService } from './component/user/keycloak-http-interceptor-service.service';
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    SponsorComponent,
    CreateExamComponent,
    ListExamComponent,
    CourseComponent,
    AddCourseComponent,
    EditCourseComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [
    {provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactory,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass: KeycloakHttpInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function kcFactory(kcSecurity:KeycloakSecurityService) {
  return () => kcSecurity.init();
}
