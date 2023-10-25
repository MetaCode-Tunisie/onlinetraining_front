import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SponsorComponent } from './component/sponsor/sponsor.component';
import {CreateExamComponent} from "./component/create-exam/create-exam.component";
import {ListExamComponent} from "./component/list-exam/list-exam.component";
import {CourseComponent} from "./component/course/course.component";
import {EditCourseComponent} from "./component/edit-course/edit-course.component";
import {AddCourseComponent} from "./component/add-course/add-course.component";

const routes: Routes = [
  {path: '', redirectTo:"home", pathMatch:"full" },
  {path: 'add-exam',component : CreateExamComponent},
  {path: 'list-exam',component : ListExamComponent},
  {path: 'course/:id',component : CourseComponent},
  {path: 'add-course/:id',component : AddCourseComponent},
  {path: 'edit-course/:id',component : EditCourseComponent},
  {path: 'home',component : HomeComponent },
  {path: 'sponsors',component : SponsorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
