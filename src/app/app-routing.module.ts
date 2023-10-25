import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SponsorComponent } from './component/sponsor/sponsor.component';

const routes: Routes = [
  {path: '', redirectTo:"home", pathMatch:"full" },
  {path: 'home',component : HomeComponent },
  {path: 'sponsors',component : SponsorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
