import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SponsorComponent } from './component/sponsor/sponsor.component';
import { PubliciteComponent } from './component/publicite/publicite.component';
import { AjoutersponsorComponent } from './component/ajoutersponsor/ajoutersponsor.component';
import { AjouterpubliciteComponent } from './component/ajouterpublicite/ajouterpublicite.component';
import { UpdatesponsorComponent } from './component/updatesponsor/updatesponsor.component';
import { UpdatepubliciteComponent } from './component/updatepublicite/updatepublicite.component';
import { UpdateimageComponent } from './component/updateimage/updateimage.component';

const routes: Routes = [
  {path: '', redirectTo:"home", pathMatch:"full" },
  {path: 'home',component : HomeComponent },
  {path: 'sponsors',component : SponsorComponent },
  {path: 'publicites',component : PubliciteComponent },
  {path: 'addsponsor',component : AjoutersponsorComponent },
  {path: 'addpublicite',component : AjouterpubliciteComponent },
  {path: 'updatesponsor/:idSponsor',component : UpdatesponsorComponent },
  {path: 'updatepublicite/:idPublicite',component : UpdatepubliciteComponent },
  {path: 'updatepubliciteimage/:idPublicite',component : UpdateimageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
