import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SponsorComponent } from './component/sponsor/sponsor.component';
import {CreateExamComponent} from "./component/create-exam/create-exam.component";
import {ListExamComponent} from "./component/list-exam/list-exam.component";
import {CourseComponent} from "./component/course/course.component";
import {EditCourseComponent} from "./component/edit-course/edit-course.component";
import {AddCourseComponent} from "./component/add-course/add-course.component";
import {ForumComponent} from "./component/forum/forum.component";
import {PostsComponent} from "./component/posts/posts.component";
import {UpdatePostComponent} from "./component/update-post/update-post.component";
import {PubliciteComponent} from "./component/publicite/publicite.component";
import {AjoutersponsorComponent} from "./component/ajoutersponsor/ajoutersponsor.component";
import {AjouterpubliciteComponent} from "./component/ajouterpublicite/ajouterpublicite.component";
import {UpdatesponsorComponent} from "./component/updatesponsor/updatesponsor.component";
import {UpdatepubliciteComponent} from "./component/updatepublicite/updatepublicite.component";
import {UpdateimageComponent} from "./component/updateimage/updateimage.component";
import {EventuserComponent} from "./component/eventuser/eventuser.component";
import {EventAddComponent} from "./component/event-add/event-add.component";
import { EventComponent } from './component/event/event.component';

const routes: Routes = [
  {path: '', redirectTo:"home", pathMatch:"full" },
  {path: 'add-exam',component : CreateExamComponent},
  {path: 'list-exam',component : ListExamComponent},
  {path: 'course/:id',component : CourseComponent},
  {path: 'add-course/:id',component : AddCourseComponent},
  {path: 'edit-course/:id',component : EditCourseComponent},
  {path: 'home',component : HomeComponent },
  {path: 'sponsors',component : SponsorComponent },
  {path: 'forum',component : ForumComponent },
  {path: 'posts/:idForum',component : PostsComponent },
  {path: 'update/:idForum/:idPost', component : UpdatePostComponent },
  {path: 'publicites',component : PubliciteComponent },
  {path: 'addsponsor',component : AjoutersponsorComponent },
  {path: 'addpublicite',component : AjouterpubliciteComponent },
  {path: 'updatesponsor/:idSponsor',component : UpdatesponsorComponent },
  {path: 'updatepublicite/:idPublicite',component : UpdatepubliciteComponent },
  {path: 'updatepubliciteimage/:idPublicite',component : UpdateimageComponent },
  {path: 'eventadmin',component : EventComponent },
  {path: 'eventuser',component : EventuserComponent },
  {path: 'addevent',component : EventAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
