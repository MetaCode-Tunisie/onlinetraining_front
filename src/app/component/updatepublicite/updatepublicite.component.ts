import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicite } from 'src/app/model/Publicite';
import { PubliciteService } from 'src/app/services/publicite.service';

@Component({
  selector: 'app-updatepublicite',
  templateUrl: './updatepublicite.component.html',
  styleUrls: ['./updatepublicite.component.css']
})
export class UpdatepubliciteComponent implements  OnInit {
  publicite : Publicite = new Publicite();
  value : any;
  idsponsor! : number;
  constructor(private publiciteservice: PubliciteService,private route: ActivatedRoute,private router: Router) { }


  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        this.value = param['idPublicite']
        this.idsponsor=6;
        });
    this.publiciteservice.retrievePublicite(this.value).subscribe(data =>{
      console.log(data);
      
      this.publicite = data
    });
  }
 

  updatepublicite(){
    this.publiciteservice.updatepublicite(this.publicite.description,this.publicite.prix,this.value,this.idsponsor).subscribe();
    window.location.href="/publicites"
      }
  


}
