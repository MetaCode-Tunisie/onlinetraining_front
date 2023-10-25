import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SponsorComponent } from './component/sponsor/sponsor.component';
import { EventComponent } from './component/event/event.component';
import { EventuserComponent } from './component/eventuser/eventuser.component';
import { EventAddComponent } from './component/event-add/event-add.component';

const routes: Routes = [
  {path: '', redirectTo:"home", pathMatch:"full" },
  {path: 'home',component : HomeComponent },
  {path: 'sponsors',component : SponsorComponent },
  {path: 'eventadmin',component : EventComponent },
  {path: 'eventuser',component : EventuserComponent },
  {path: 'addevent',component : EventAddComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
