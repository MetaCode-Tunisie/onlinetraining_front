import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicite } from 'src/app/model/Publicite';
import { PubliciteService } from 'src/app/services/publicite.service';

@Component({
  selector: 'app-publicite',
  templateUrl: './publicite.component.html',
  styleUrls: ['./publicite.component.css']
})
export class PubliciteComponent implements OnInit {
   pub :Publicite =new Publicite();
  constructor(private publiciteservice : PubliciteService,private router: Router){}
  Listpublicite! :any;
  image: any;
  description!: string;
  Sponsor: string = '';
  MaxBudget: number = 0;
  MinBudget: number = 0;
    
 prix! :string;
  ngOnInit(){
   this.afficherlistepublicite();
   // this.filter("hazem",333333,0)
    //  this.deletepublicite(4);

  

  }
  afficherlistepublicite(){
    this.publiciteservice.retrieveAllPublicite().subscribe(
      (respense)=>{
        this.Listpublicite=respense;
        console.log(respense)
      }

    );
  }


  afficherpublicite(idPublicite :number){
    this.publiciteservice.retrievePublicite(idPublicite).subscribe(
      (respense)=>{
        this.Listpublicite=respense;
        console.log(respense)
      }

    );
  }



  filter(Name : string,max:number,min:number){
    this.publiciteservice.filterPublicite(Name,max,min).subscribe(
      (respense)=>{
        this.Listpublicite=respense;
        console.log(respense)
      }

    );
  }




  deletepublicite(idPublicite : number){
    console.log(idPublicite); // add this line
    this.publiciteservice.deletePublicite(idPublicite).subscribe();
    alert("publicite Deleted Successfuly !!");
    this.reloadComponent();
  }
  
  reloadComponent(): void {
    const currentRoute = this.router.url.split('?')[0];
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }

 




}
