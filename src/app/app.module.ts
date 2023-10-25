import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { SponsorComponent } from './component/sponsor/sponsor.component';
import { ForumComponent } from './component/forum/forum.component';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { PostsComponent } from './component/posts/posts.component';
import { CommentsComponent } from './component/comments/comments.component';
import { UpdatePostComponent } from './component/update-post/update-post.component';
import {KeycloakSecurityService} from "./component/user/keycloak-security.service";
import {KeycloakHttpInterceptorService} from "./component/user/keycloak-http-interceptor-service.service";

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    SponsorComponent,
    ForumComponent,
    PostsComponent,
    CommentsComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [{provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactory,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass: KeycloakHttpInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function kcFactory(kcSecurity:KeycloakSecurityService) {
  return () => kcSecurity.init();
}
