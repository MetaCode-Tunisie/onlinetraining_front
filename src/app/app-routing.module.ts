import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SponsorComponent } from './component/sponsor/sponsor.component';
import { ForumComponent } from './component/forum/forum.component';
import { PostsComponent } from './component/posts/posts.component';
import { UpdatePostComponent } from './component/update-post/update-post.component';

const routes: Routes = [
  {path: '', redirectTo:"home", pathMatch:"full" },
  {path: 'home',component : HomeComponent },
  {path: 'sponsors',component : SponsorComponent },
  {path: 'forum',component : ForumComponent },
  {path: 'posts/:idForum',component : PostsComponent },
  { path: 'update/:idForum/:idPost', component : UpdatePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
